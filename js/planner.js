// ================================================================
// PLANNER — turns "I have N minutes" into a lesson.
// Pure logic: no DOM. State shape:
//   state.sec[id]   = {status, day1, lastDay, stage, dueDay, hist:[{day,pct,kind}]}
//     status: 'new' | 'learning' | 'passed' | 'deferred' | 'skipped'
//   state.qdata[id] = {seen, last, hist:[bool]}
// ================================================================
const REVIEW_GAPS = [1, 3, 7, 14, 30];        // days until next review, by stage
// Written answers: marks per question, and roughly 1.2 exam-minutes per mark plus writing overhead.
function questionMarks(q){
  if(q.type === 'written') return q.marks;
  if(q.type === 'mc') return 2;
  if(q.type === 'tf') return q.statements.length;
  return q.steps.reduce((n, st) => n + (st.answer2 !== undefined ? 2 : 1), 0);
}
function questionMinutes(q){ return Math.max(2, Math.round(1.2*questionMarks(q) + 1)); }

// Block templates. Each kind has a full and a short variant (used when time is tight).
const BLOCK = {
  review: {icon:'🔁', label:'Spaced review'},
// e1/e2: minutes of exam questions in mini exam 1 / 2 (the rest is reading and fixing gaps).
  i:      {icon:'⚡', label:'Test first',          v:[{mins:25, e1:9, e2:9}, {mins:15, e1:5, e2:5}]},
  c1:     {icon:'🧗', label:'Challenge · learn',    v:[{mins:45, e1:14, e2:14}, {mins:30, e1:9, e2:9}]},
  c2:     {icon:'🔒', label:'Challenge · prove it', v:[{mins:20, e1:16}, {mins:12, e1:9}]},
  p:      {icon:'👀', label:'Quick check',          v:[{mins:7, e1:5}]},
  retest: {icon:'🎯', label:'Retest',               v:[{mins:15, e1:12}, {mins:9, e1:7}]},
  notesI: {icon:'📖', label:'Study from notes',     v:[{mins:25}, {mins:15}]},
  notesC: {icon:'📖', label:'Study from notes',     v:[{mins:45}, {mins:30}]},
};

function dayNum(dateStr){
  const [y,m,d] = dateStr.split('-').map(Number);
  const [y0,m0,d0] = PLAN_START.split('-').map(Number);
  return Math.round((Date.UTC(y,m-1,d) - Date.UTC(y0,m0-1,d0)) / 86400000);
}
function todayStr(now = new Date()){
  const p = n => String(n).padStart(2,'0');
  return now.getFullYear() + '-' + p(now.getMonth()+1) + '-' + p(now.getDate());
}
function planWeek(day){ return Math.max(1, Math.min(PLAN_WEEKS, Math.floor(day/7) + 1)); }

function secState(state, id){
  if(!state.sec[id]) state.sec[id] = {status:'new', day1:null, lastDay:null, stage:0, dueDay:null, hist:[]};
  return state.sec[id];
}
function qState(state, qid){
  if(!state.qdata[qid]) state.qdata[qid] = {seen:0, last:0, hist:[]};
  return state.qdata[qid];
}
function questionsFor(secId){ return QUESTIONS.filter(q => q.sec === secId); }
function hasQuestions(secId){ return QUESTIONS.some(q => q.sec === secId); }

// ---------------------------------------------------------------- progress
function progressSummary(state, day){
  const live = SECTIONS.filter(s => s.pick !== 'K');
  const done = live.filter(s => ['passed','deferred'].includes(secState(state, s.id).status));
  // Expected by now: all sections from earlier weeks + the elapsed share of this week.
  const week = planWeek(day), dayInWeek = Math.max(0, day - (week-1)*7);
  let expected = 0;
  live.forEach(s => {
    if(s.week < week) expected += 1;
    else if(s.week === week && week <= 5) expected += Math.min(1, dayInWeek/6);
  });
  expected = Math.round(expected);
  return {total: live.length, done: done.length, expected, behind: Math.max(0, expected - done.length), week};
}

// ---------------------------------------------------------------- question selection
function qWeight(state, q, day){
  const e = qState(state, q.id);
  if(e.seen === 0) return 100;
  const acc = e.hist.length ? e.hist.filter(Boolean).length / e.hist.length : 0.5;
  const ageDays = Math.max(0, day - (e.lastDay ?? day));
  return Math.exp(-3*acc) * (1 + ageDays);
}
function pickWeighted(items, weights, n, rand = Math.random){
  const pool = items.map((it,i) => ({it, w:Math.max(1e-6, weights[i])})), out = [];
  while(out.length < n && pool.length){
    const tot = pool.reduce((s,x) => s + x.w, 0);
    let r = rand()*tot, j = 0;
    for(; j < pool.length - 1; j++){ r -= pool[j].w; if(r <= 0) break; }
    out.push(pool[j].it); pool.splice(j,1);
  }
  return out;
}
// Weighted pick of questions filling about `budget` exam-minutes (always at least one question).
function selectQuestions(state, secIds, budget, day, exclude = [], rand = Math.random){
  const pool = QUESTIONS.filter(q => secIds.includes(q.sec) && !exclude.includes(q.id));
  const order = pickWeighted(pool, pool.map(q => qWeight(state, q, day)), pool.length, rand);
  const out = []; let used = 0;
  for(const q of order){
    const m = questionMinutes(q);
    if(used + m > budget) continue;
    out.push(q); used += m;
    if(used >= budget - 1) break;
  }
  // Nothing fits (tiny budget): fall back to the quickest question available.
  if(!out.length && order.length) out.push(order.reduce((a, q) => questionMinutes(q) < questionMinutes(a) ? q : a));
  return out;
}
function examMinutes(qs){ return qs.reduce((s,q) => s + questionMinutes(q), 0); }

// ---------------------------------------------------------------- lesson builder
function buildLesson(state, minutes, day){
  const blocks = [];
  let left = minutes;

  // Mark Kill sections as skipped the first time we see them.
  SECTIONS.forEach(s => { if(s.pick === 'K'){ const st = secState(state, s.id); if(st.status === 'new') st.status = 'skipped'; } });

  // 1. Spaced review of passed sections that are due.
  const due = SECTIONS.filter(s => { const st = secState(state, s.id); return st.status === 'passed' && st.dueDay !== null && st.dueDay <= day && hasQuestions(s.id); })
                      .sort((a,b) => secState(state,a.id).dueDay - secState(state,b.id).dueDay);
  let reviewMins = 0;
  if(due.length){
    reviewMins = minutes < 15 ? minutes : Math.max(5, Math.min(20, Math.round(minutes*0.2)));
    left -= reviewMins;
  }

  // Use the full variant if it fits, else the short one.
  const add = (kind, sec) => {
    const v = BLOCK[kind].v.find(v => v.mins <= left);
    if(!v) return false;
    blocks.push({kind, sec: sec.id, ...v}); left -= v.mins; return true;
  };

  // 2. Challenge day-2 checks and retests (unfinished business first).
  SECTIONS.forEach(s => {
    const st = secState(state, s.id);
    // Possible sections that failed their quick check come back in week 6.
    if(st.status === 'deferred' && planWeek(day) === PLAN_WEEKS && st.lastDay !== day){ add('p', s); return; }
    if(st.status !== 'learning' || st.lastDay === day) return;
    if(!hasQuestions(s.id)) add(s.pick === 'C' ? 'notesC' : 'notesI', s);
    else if(s.pick === 'C' && st.day1 !== null) add('c2', s);
    else add('retest', s);
  });

  // 3. New sections, interleaving the three streams (most-behind stream first).
  const heads = {};
  ['A','B','C'].forEach(k => {
    heads[k] = SECTIONS.filter(s => MODULES[s.mod].stream === k && secState(state, s.id).status === 'new');
  });
  const blocked = new Set();
  let guard = 0;
  while(left >= 5 && guard++ < 50){
    const cands = Object.keys(heads).filter(k => heads[k].length && !blocked.has(k));
    if(!cands.length) break;
    // Earliest plan week first; tie-break by the stream with fewest blocks this lesson.
    const inLesson = k => blocks.filter(b => MODULES[SECTION_BY_ID[b.sec].mod].stream === k).length;
    cands.sort((a,b) => heads[a][0].week - heads[b][0].week || inLesson(a) - inLesson(b));
    const k = cands[0], s = heads[k][0];
    const kind = !hasQuestions(s.id) ? (s.pick === 'C' ? 'notesC' : 'notesI')
               : s.pick === 'C' ? 'c1' : s.pick === 'P' ? 'p' : 'i';
    if(add(kind, s)) heads[k].shift(); else blocked.add(k);
  }

  // 4. Spare time goes to review (or mixed practice if nothing is due).
  const reviewable = SECTIONS.filter(s => ['passed','learning','deferred'].includes(secState(state, s.id).status) && hasQuestions(s.id));
  if(left >= 4 && reviewable.length){ reviewMins += left; left = 0; }
  if(reviewMins > 0){
    const pool = due.length ? due : reviewable;
    // Due sections first; top up from everything studied so far.
    blocks.unshift({kind:'review', secs: pool.map(s => s.id), extra: reviewable.map(s => s.id), mins: reviewMins});
  }

  const order = {review:0, c2:1, c1:2, notesC:3, retest:4, i:5, notesI:6, p:7};
  blocks.sort((a,b) => order[a.kind] - order[b.kind]);
  return {blocks, total: blocks.reduce((s,b) => s + b.mins, 0), minutes};
}

// ---------------------------------------------------------------- recording results
function recordAnswer(state, q, ok, day){
  const e = qState(state, q.id);
  e.seen++; e.lastDay = day; e.hist.push(ok); if(e.hist.length > 8) e.hist.shift();
}

// Apply the outcome of a finished block. Returns a verdict for display.
function finishBlock(state, block, result, day){
  if(block.kind === 'review'){
    const out = {};
    Object.entries(result.bySec || {}).forEach(([id, r]) => {
      const st = secState(state, id), pct = r.cor / r.tot;
      st.hist.push({day, pct, kind:'review'}); st.lastDay = day;
      if(st.status !== 'passed') return;
      if(pct >= PASS_MARK) st.stage = Math.min(st.stage + 1, REVIEW_GAPS.length - 1);
      else if(pct < 0.6) st.stage = 0;
      st.dueDay = day + REVIEW_GAPS[st.stage];
      out[id] = pct;
    });
    return {type:'review', bySec: out};
  }
  const s = SECTION_BY_ID[block.sec], st = secState(state, s.id);
  const pct = result.pct;                       // score that decides the outcome
  st.lastDay = day;
  st.hist.push({day, pct, kind: block.kind});
  const pass = () => { st.status = 'passed'; st.stage = 0; st.dueDay = day + REVIEW_GAPS[0]; };
  switch(block.kind){
    case 'i': case 'retest': case 'c2':
      if(pct >= PASS_MARK){ pass(); return {type:'pass'}; }
      st.status = 'learning'; return {type:'again'};
    case 'c1':
      st.status = 'learning'; st.day1 = day; return {type:'tomorrow'};
    case 'p':
      if(pct >= 2/3){ pass(); return {type:'pass'}; }
      st.status = 'deferred'; st.dueDay = null; return {type:'deferred'};
    case 'notesI': case 'notesC':
      if(pct >= 1){ pass(); return {type:'pass'}; }
      st.status = 'learning'; return {type:'again'};
  }
}

if(typeof module !== 'undefined') module.exports = {buildLesson, finishBlock, recordAnswer, selectQuestions, progressSummary, dayNum, todayStr, planWeek, secState, examMinutes, questionMarks, questionMinutes, BLOCK};
