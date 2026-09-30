// ================================================================
// APP — screens, lesson runner, storage and sync.
// ================================================================
const STORE_KEY = 's2_state';
const TIME_CHIPS = [15, 30, 45, 60, 90, 120];
let state = loadState();
let chosenMins = 60;

function loadState(){
  try{ const s = JSON.parse(localStorage.getItem(STORE_KEY)); if(s && s.sec) return {stats:{}, ...s}; }catch(e){}
  return {sec:{}, qdata:{}, stats:{answered:0, credit:0, minutes:0, sessions:0}};
}
function saveState(){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){}
  pushData();
}
function today(){ return dayNum(todayStr()); }
function show(id){ document.querySelectorAll('.scr').forEach(s => s.classList.remove('on')); document.getElementById(id).classList.add('on'); }
function goHome(){ renderHome(); show('s-home'); }

function modChip(modKey){ const m = MODULES[modKey]; return `<span class="mod-chip" style="background:${m.color}14;color:${m.color}">${m.short}</span>`; }
function pickBadge(p){ const i = PICK_INFO[p]; return `<span class="pick-badge" style="color:${i.color};border-color:${i.color}55">${i.name}</span>`; }

// ---------------------------------------------------------------- home
function renderHome(){
  const day = today(), sum = progressSummary(state, day);
  const dateLbl = day < 0 ? `Plan starts ${PLAN_START}` : day >= PLAN_WEEKS*7 ? 'Plan complete — keep reviewing' : `Week ${sum.week} of ${PLAN_WEEKS} · day ${day - (sum.week-1)*7 + 1}`;
  document.getElementById('home-sub').textContent = dateLbl + ' · 6 modules';
  document.getElementById('hs-done').textContent = sum.done + '/' + sum.total;
  const st = state.stats;
  document.getElementById('hs-acc').textContent = st.answered ? Math.round(100*st.credit/st.answered) + '%' : '—';
  document.getElementById('hs-min').textContent = Math.round(st.minutes || 0);
  const tr = document.getElementById('track');
  if(sum.week === PLAN_WEEKS && day >= 35){ tr.className = 'track ok'; tr.textContent = 'Week 6: consolidation — lessons are mixed review and mocks'; }
  else if(sum.behind > 0){ tr.className = 'track behind'; tr.textContent = `${sum.behind} topic${sum.behind > 1 ? 's' : ''} behind schedule — longer sessions will catch you up`; }
  else { tr.className = 'track ok'; tr.textContent = 'On track'; }
  const g = geminiSettings();
  document.getElementById('mark-dot').className = 'dotx' + (geminiReady() ? ' on' : '');
  document.getElementById('mark-status').textContent = geminiReady() ? `Marking: Gemini (${g.model})` : 'Marking: self-mark — add a Gemini key in Settings';
  const chips = document.getElementById('chips'); chips.innerHTML = '';
  TIME_CHIPS.forEach(m => {
    const c = el('button', 'chip' + (m === chosenMins ? ' on' : ''), m < 60 ? m + ' min' : (m/60) + (m === 60 ? ' hour' : ' hours'));
    c.onclick = () => { chosenMins = m; document.getElementById('custom-min').value = ''; renderHome(); };
    chips.appendChild(c);
  });
}
document.addEventListener('input', e => {
  if(e.target.id !== 'custom-min') return;
  const v = parseInt(e.target.value, 10);
  if(v >= 5){ chosenMins = Math.min(300, v); document.querySelectorAll('.chip').forEach(c => c.classList.remove('on')); }
});

// ---------------------------------------------------------------- plan screen
let lesson = null;
function describe(b){
  if(b.kind === 'review') return `Mixed mini exam on topics that are due for review — keeps what you’ve learned from fading.`;
  const s = SECTION_BY_ID[b.sec];
  switch(b.kind){
    case 'i': return `Test first: ~${b.e1} min of written questions cold → read only what you missed → ~${b.e2} min of new questions. 80% of the marks passes.`;
    case 'c1': return `Key points & notes → ~${b.e1}-min written mini exam (hints allowed) → fix gaps → ~${b.e2} min more. Closed-book check tomorrow.`;
    case 'c2': return `Closed-book written mini exam (~${b.e1} min) on yesterday’s challenge topic. 80% passes.`;
    case 'retest': return `You didn’t pass this last time — ~${b.e1} min of fresh questions. 80% passes.`;
    case 'p': return `Skim topic: a ~${b.e1}-min check. Two-thirds of the marks passes, otherwise it’s parked until week 6.`;
    default: return `No question bank for this topic yet: read ${s.src}, work the examples with solutions covered, then rate yourself.`;
  }
}
function buildAndShow(){
  const day = today();
  const scratch = JSON.parse(JSON.stringify(state));   // plan without committing anything
  lesson = buildLesson(scratch, chosenMins, day);
  const body = document.getElementById('plan-body'); body.innerHTML = '';
  if(!lesson.blocks.length){
    body.appendChild(el('div','card', `<div class="card-title">Nothing fits in ${chosenMins} minutes</div><div class="muted">The shortest block takes about 6 minutes. Try a longer session.</div>`));
    show('s-plan'); return;
  }
  body.appendChild(el('div','total-row', `<span>${lesson.blocks.length} block${lesson.blocks.length > 1 ? 's' : ''}</span><span>≈ ${lesson.total} of ${chosenMins} min</span>`));
  lesson.blocks.forEach(b => {
    const t = BLOCK[b.kind], s = b.sec && SECTION_BY_ID[b.sec];
    const title = s ? s.title : `${b.secs.length} topic${b.secs.length > 1 ? 's' : ''} due`;
    const chips = s ? modChip(s.mod) + pickBadge(s.pick) : '';
    body.appendChild(el('div','card block-card', `<div class="block-icon">${t.icon}</div><div class="block-body"><div class="lbl">${t.label}</div><div class="card-title" style="font-size:16px">${esc(title)}</div><div style="margin-bottom:.35rem">${chips}</div><div class="small">${describe(b)}</div></div><div class="block-mins">${b.mins}m</div>`));
  });
  const go = el('button','btn-p','Start lesson'); go.onclick = startLesson;
  const again = el('button','btn-s','Change time'); again.style.marginTop = '8px'; again.onclick = () => show('s-home');
  body.append(go, again);
  show('s-plan');
}

// ---------------------------------------------------------------- lesson runner
let runStart = 0, timerId = null, quitting = false;
function setProg(i, n){ document.getElementById('run-prog').style.width = (100*i/n) + '%'; }
function tick(){
  const s = Math.floor((Date.now() - runStart)/1000);
  document.getElementById('run-timer').textContent = Math.floor(s/60) + ':' + String(s%60).padStart(2,'0');
}
function quitLesson(){
  if(!confirm('Leave this lesson? Blocks you finished are saved.')) return;
  quitting = true; clearInterval(timerId); goHome();
}
function card(box, html){ const c = el('div','card', html); box.appendChild(c); return c; }
function button(box, label, cls = 'go-btn'){ const b = el('button', cls, label); box.appendChild(b); return b; }

async function startLesson(){
  quitting = false;
  const day = today(), box = document.getElementById('run-body');
  runStart = Date.now(); clearInterval(timerId); timerId = setInterval(tick, 1000); tick();
  show('s-run');
  const summary = [];
  for(let i = 0; i < lesson.blocks.length; i++){
    if(quitting) return;
    setProg(i, lesson.blocks.length);
    const b = lesson.blocks[i];
    const verdict = await runBlock(box, b, day);
    if(quitting) return;
    summary.push({b, verdict});
    state.stats.minutes = (state.stats.minutes || 0) + b.mins;
    saveState();
  }
  clearInterval(timerId); setProg(1, 1);
  state.stats.sessions = (state.stats.sessions || 0) + 1; saveState();
  renderSummary(box, summary);
}

function examQs(secIds, budget, day, exclude = []){ return selectQuestions(state, secIds, budget, day, exclude); }
async function exam(box, qs, day, opts){
  const res = await runExam(box, qs, {...opts, onAnswer:(q, credit) => {
    recordAnswer(state, q, credit === 1, day);
    state.stats.answered = (state.stats.answered || 0) + 1;
    state.stats.credit = (state.stats.credit || 0) + credit;
    saveState();
  }});
  // Score = marks earned / marks available across the whole mini exam.
  const got = res.reduce((s, r) => s + r.score, 0), max = res.reduce((s, r) => s + r.marks, 0);
  return {res, pct: max ? got / max : 0};
}

function presentCard(box, s, intro){
  const keys = s.key.length ? '<ul class="keys">' + s.key.map(k => `<li>${fmt(k)}</li>`).join('') + '</ul>' : '';
  const link = s.url ? `<div style="margin-top:.6rem"><a href="${s.url}" target="_blank" rel="noopener">Open the online notes ↗</a></div>` : '';
  card(box, `<div class="lbl">${modChip(s.mod)} ${pickBadge(s.pick)}</div><div class="card-title">${esc(s.title)}</div>${intro ? `<div class="muted" style="margin-bottom:.4rem">${intro}</div>` : ''}${keys}<div class="small" style="margin-top:.5rem">📚 ${esc(s.src)}</div>${link}`);
}
function fixCard(box, s, res){
  const missed = res.filter(r => r.credit < 1);
  let html = `<div class="lbl">Fix the gaps</div><div class="card-title">${missed.length ? `Review the ${missed.length} you missed` : 'No gaps — nice!'}</div>`;
  missed.forEach(r => {
    const w = toWritten(r.q);
    html += `<div class="miss"><div class="miss-q"><b>${r.score}/${r.marks}</b> · ${w.html}</div>${r.feedback && r.feedback !== 'Self-marked.' ? `<div class="miss-fb">${fmt(r.feedback)}</div>` : ''}<div class="miss-a">${fmt(w.scheme).replace(/\n/g,'<br>')}</div></div>`;
  });
  card(box, html);
  if(s) presentCard(box, s, 'Now re-read these points (and the matching part of your notes). Redo any worked example you couldn’t do, with the solution covered.');
}
function scoreCard(box, label, pct){
  box.appendChild(el('div','verdict', `<div class="lbl">${label}</div><div class="score-big">${Math.round(pct*100)}%</div>`));
}
async function verdictScreen(box, v, s, pct){
  box.innerHTML = '';
  const V = {
    pass:     ['✅','Passed', `${esc(s.title)} is done. First review in 1 day, then 3, 7, 14…`],
    again:    ['🔁','Not yet', s && !hasQuestions(s.id) ? `It comes back next session — work through the examples again until you can do them without looking.` : `You need 80%. It comes back as a retest next session — that repetition is where the learning happens.`],
    tomorrow: ['🌙','Learned — prove it tomorrow', `Challenge topics only pass on a later day. Tomorrow’s lesson includes a closed-book check (80% to pass).`],
    deferred: ['📦','Parked until week 6', `Possible topic: not worth more time now. It will return in week 6.`],
  }[v.type];
  box.appendChild(el('div','verdict', `<span class="verdict-icon">${V[0]}</span><div class="verdict-title">${V[1]}</div>${pct !== undefined ? `<div class="score-big">${Math.round(pct*100)}%</div>` : ''}<div class="muted">${V[2]}</div>`));
  await waitClick(button(box, 'Continue →'));
}

async function runBlock(box, b, day){
  box.innerHTML = '';
  if(b.kind === 'review'){
    let qs = examQs(b.secs, b.mins, day);
    const left = b.mins - examMinutes(qs);
    if(left >= 3) qs = qs.concat(examQs(b.extra, left, day, qs.map(q => q.id)));
    card(box, `<div class="lbl">🔁 Spaced review · ${b.mins} min</div><div class="card-title">${qs.length} questions from earlier topics</div><div class="muted">No notes, no hints. Weak and overdue topics come up most.</div>`);
    await waitClick(button(box, 'Start →'));
    const {res, pct} = await exam(box, qs, day, {title:'Review'});
    const bySec = {};
    res.forEach(r => { const x = bySec[r.q.sec] = bySec[r.q.sec] || {cor:0, tot:0}; x.cor += r.credit; x.tot++; });
    const v = finishBlock(state, b, {bySec}, day); saveState();
    box.innerHTML = '';
    scoreCard(box, 'Review score', pct);
    fixCard(box, null, res);
    await waitClick(button(box, 'Continue →'));
    return {type:'review', pct};
  }

  const s = SECTION_BY_ID[b.sec];
  let pct, used = [];

  if(b.kind === 'notesI' || b.kind === 'notesC'){
    presentCard(box, s, `Read this section of your notes. For every worked example: cover the solution, attempt it, then compare. (~${b.mins} min)`);
    card(box, `<div class="lbl">When you’ve finished</div><div class="card-title">Could you do the worked examples without looking?</div>`);
    const opts = [['✅ Yes — all of them', 1], ['🟡 Some of them', 0.5], ['❌ Not really', 0]];
    const btns = opts.map(([t]) => button(box, t, 'btn-s self-btn'));
    pct = await new Promise(r => btns.forEach((bt, i) => bt.onclick = () => r(opts[i][1])));
  }
  else if(b.kind === 'i'){
    presentCard(box, s, 'Implement topic — <b>test first</b>. Answer before reading anything; you only study what you get wrong.');
    await waitClick(button(box, `Start mini exam 1 (~${b.e1} min)`));
    const qs1 = examQs([s.id], b.e1, day); used = qs1.map(q => q.id);
    const e1 = await exam(box, qs1, day, {title:'Mini exam 1'});
    if(e1.pct === 1){ pct = 1; }
    else{
      scoreCard(box, 'Mini exam 1', e1.pct);
      fixCard(box, s, e1.res);
      await waitClick(button(box, `Ready — mini exam 2 (~${b.e2} min, new questions)`));
      const e2 = await exam(box, examQs([s.id], b.e2, day, used), day, {title:'Mini exam 2'});
      pct = e2.pct;
    }
  }
  else if(b.kind === 'c1'){
    presentCard(box, s, 'Challenge topic. Read these key points and the matching notes section, working the examples with solutions covered. Then take the mini exam — hints are allowed this time.');
    await waitClick(button(box, `Start mini exam 1 (~${b.e1} min, hints on)`));
    const qs1 = examQs([s.id], b.e1, day); used = qs1.map(q => q.id);
    const e1 = await exam(box, qs1, day, {title:'Mini exam 1', hints:true});
    scoreCard(box, 'Mini exam 1', e1.pct);
    fixCard(box, s, e1.res);
    await waitClick(button(box, `Ready — mini exam 2 (~${b.e2} min, no hints)`));
    const e2 = await exam(box, examQs([s.id], b.e2, day, used), day, {title:'Mini exam 2'});
    pct = e2.pct;
  }
  else { // c2, retest, p
    const intro = {c2:'Closed-book check on yesterday’s challenge topic. No hints, no notes.', retest:'Retest — fresh questions on a topic you haven’t passed yet.', p:'Possible topic — a quick check. Skim the key points first if you like.'}[b.kind];
    presentCard(box, s, intro);
    await waitClick(button(box, `Start (~${b.e1} min)`));
    const e = await exam(box, examQs([s.id], b.e1, day), day, {title: BLOCK[b.kind].label});
    pct = e.pct;
    if(pct < (b.kind === 'p' ? 2/3 : PASS_MARK)){
      scoreCard(box, 'Score', pct); fixCard(box, s, e.res);
      await waitClick(button(box, 'Continue →'));
    }
  }
  const v = finishBlock(state, b, {pct}, day); saveState();
  await verdictScreen(box, v, s, b.kind.startsWith('notes') ? undefined : pct);
  return v;
}

function renderSummary(box, summary){
  box.innerHTML = '';
  const mins = Math.round((Date.now() - runStart)/60000);
  let html = `<div class="verdict"><span class="verdict-icon">🎉</span><div class="verdict-title">Lesson complete</div><div class="muted">${mins} min · ${summary.length} block${summary.length > 1 ? 's' : ''}</div></div>`;
  box.appendChild(el('div','', html));
  const icons = {pass:'✅', again:'🔁', tomorrow:'🌙', deferred:'📦', review:'🔁'};
  summary.forEach(({b, verdict}) => {
    const s = b.sec && SECTION_BY_ID[b.sec];
    const what = s ? esc(s.title) : 'Spaced review';
    const res = verdict.type === 'review' ? Math.round(verdict.pct*100) + '%' : {pass:'Passed', again:'Retest next time', tomorrow:'Check tomorrow', deferred:'Week 6'}[verdict.type];
    card(box, `<div class="block-card"><div class="block-icon">${icons[verdict.type]}</div><div class="block-body"><div class="card-title" style="font-size:15px">${what}</div><div class="small">${res}</div></div></div>`);
  });
  const h = button(box, 'Home'); h.onclick = goHome;
}

// ---------------------------------------------------------------- progress
function showProgress(){
  const day = today(), body = document.getElementById('progress-body'); body.innerHTML = '';
  const sum = progressSummary(state, day);
  const colors = {new:'#D1D5DB', learning:'#D97706', passed:'#16A34A', deferred:'#2563EB', skipped:'#FFFFFF'};
  body.appendChild(el('div','card', `<div class="lbl">Overall</div><div class="card-title">${sum.done} of ${sum.total} topics passed</div><div class="muted">Expected by today: ${sum.expected}. ${sum.behind ? sum.behind + ' behind.' : 'On track.'}</div>`));
  let bars = '<div class="lbl">By module</div>';
  Object.entries(MODULES).forEach(([k, m]) => {
    const secs = SECTIONS.filter(s => s.mod === k && s.pick !== 'K');
    const d = secs.filter(s => secState(state, s.id).status === 'passed').length;
    bars += `<div class="mod-bar"><div class="mod-bar-name">${m.name.split(',')[0]}</div><div class="mod-bar-bg"><div class="mod-bar-fill" style="width:${100*d/secs.length}%;background:${m.color}"></div></div><div class="mod-bar-n">${d}/${secs.length}</div></div>`;
  });
  body.appendChild(el('div','card', bars));
  body.appendChild(el('div','legend', Object.entries({new:'Not started', learning:'In progress', passed:'Passed', deferred:'Parked', skipped:'Killed'}).map(([k,t]) => `<span><i class="dot" style="background:${colors[k]};${k==='skipped'?'border:1px solid #D1D5DB':''}"></i>${t}</span>`).join('')));
  Object.entries(STREAMS).forEach(([k, name]) => {
    body.appendChild(el('div','stream-lbl', `Stream ${k} — ${name}`));
    SECTIONS.filter(s => MODULES[s.mod].stream === k).forEach(s => {
      const st = secState(state, s.id), last = st.hist[st.hist.length - 1];
      const status = s.pick === 'K' ? 'skipped' : st.status;
      const meta = `W${s.week} · ${PICK_INFO[s.pick].name[0]}${last ? ' · ' + Math.round(last.pct*100) + '%' : ''}${hasQuestions(s.id) ? '' : ' · notes'}`;
      body.appendChild(el('div','sec-row', `<i class="dot" style="background:${colors[status]};${status==='skipped'?'border:1px solid #D1D5DB':''}"></i><div class="sec-name">${modChip(s.mod)}${esc(s.title)}</div><div class="sec-meta">${meta}</div>`));
    });
  });
  const reset = el('button','btn-s','Reset all progress'); reset.style.cssText = 'margin-top:24px;color:#DC2626';
  reset.onclick = () => { if(confirm('Reset ALL progress? This cannot be undone.')){ state = {sec:{}, qdata:{}, stats:{answered:0, credit:0, minutes:0, sessions:0}}; saveState(); goHome(); } };
  body.appendChild(reset);
  show('s-progress');
}

// ---------------------------------------------------------------- free practice
function showPractice(){
  const body = document.getElementById('practice-body'); body.innerHTML = '';
  body.appendChild(el('div','card', '<div class="card-title">Pick a module</div><div class="muted">About 15 minutes of written questions, weighted towards what you haven’t seen or got wrong. Doesn’t change your plan, but does count towards question history.</div>'));
  Object.entries(MODULES).forEach(([k, m]) => {
    const n = QUESTIONS.filter(q => SECTION_BY_ID[q.sec].mod === k).length;
    const b = el('button','btn-s self-btn', `${modChip(k)} ${m.name} <span class="small">· ${n} questions</span>`);
    if(!n){ b.disabled = true; b.style.opacity = .45; }
    b.onclick = () => practice(k);
    body.appendChild(b);
  });
  const nPast = QUESTIONS.filter(q => q.type === 'written').length;
  body.appendChild(el('div','card', `<div class="card-title" style="margin-top:4px">Past-paper question</div><div class="muted">One full specimen-paper question (${nPast} available), marked against the official mark scheme. Allow 12–20 minutes.</div>`)).style.marginTop = '20px';
  const pp = el('button','btn-p','Start a past-paper question'); pp.onclick = pastPaper; body.appendChild(pp);
  show('s-practice');
}
async function pastPaper(){
  const day = today(), body = document.getElementById('practice-body');
  const pool = QUESTIONS.filter(q => q.type === 'written');
  const q = pickWeighted(pool, pool.map(q => qWeight(state, q, day)), 1)[0];   // unseen / weak first
  const {pct, res} = await exam(body, [q], day, {title:'Past paper'});
  body.innerHTML = '';
  scoreCard(body, 'Past-paper question', pct);
  fixCard(body, null, res);
  const again = button(body, 'Another past-paper question'); again.onclick = pastPaper;
  const back = button(body, 'Home', 'btn-s'); back.onclick = goHome;
}
async function practice(modKey){
  const day = today(), body = document.getElementById('practice-body');
  const secs = SECTIONS.filter(s => s.mod === modKey).map(s => s.id);
  const {pct, res} = await exam(body, examQs(secs, 15, day), day, {title:'Practice'});
  body.innerHTML = '';
  scoreCard(body, MODULES[modKey].name, pct);
  fixCard(body, null, res);
  const again = button(body, 'Another set'); again.onclick = () => practice(modKey);
  const back = button(body, 'Home', 'btn-s'); back.onclick = goHome;
}

// ---------------------------------------------------------------- settings (Gemini key)
function showSettings(){
  const body = document.getElementById('settings-body'), g = geminiSettings();
  body.innerHTML = `
    <div class="card-title">Gemini marking</div>
    <p class="muted" style="margin-bottom:16px">Add a Gemini API key and your written answers are marked against the mark scheme, with feedback. Without one you mark yourself against the scheme.</p>
    <div class="field"><label for="g-key">API key</label>
      <input class="text-input" id="g-key" type="password" autocomplete="off" placeholder="AIza…" value="${esc(g.key || '')}"></div>
    <div class="field"><label for="g-model">Model</label>
      <select id="g-model">${g.model ? `<option>${esc(g.model)}</option>` : '<option value="">Save a key to load models</option>'}</select></div>
    <button class="btn-p" id="g-save">Save and check key</button>
    <div class="small" id="g-msg" style="margin:10px 0 16px"></div>
    <button class="btn-s" id="g-clear">Remove key</button>
    <p class="note" style="margin-top:20px">Get a free key at <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a>. The key is stored only in this browser on this device — it is not synced with your username — and is sent only to Google. Anyone using this device and browser could read it.</p>`;
  const msg = document.getElementById('g-msg'), sel = document.getElementById('g-model');
  sel.onchange = () => { const cur = geminiSettings(); if(cur.key){ saveGeminiSettings({...cur, model: sel.value}); } };
  document.getElementById('g-save').onclick = async () => {
    const key = document.getElementById('g-key').value.trim();
    if(!key){ msg.textContent = 'Paste a key first.'; return; }
    msg.innerHTML = '<span class="spinner"></span>Checking key…';
    try{
      const models = await listGeminiModels(key);
      if(!models.length) throw new Error('No Gemini models available for this key.');
      const keep = models.includes(g.model) ? g.model : models[0];
      sel.innerHTML = models.map(m => `<option${m === keep ? ' selected' : ''}>${esc(m)}</option>`).join('');
      saveGeminiSettings({key, model: keep});
      msg.textContent = `Key works. Using ${keep} — change it above if you like.`;
    }catch(e){ msg.textContent = 'That key didn’t work: ' + e.message; }
  };
  document.getElementById('g-clear').onclick = () => { localStorage.removeItem(GEMINI_STORE); showSettings(); };
  show('s-settings');
}

// ---------------------------------------------------------------- Firebase sync
const firebaseConfig = {apiKey:"AIzaSyCE9o42ZekICLHHwFS7v6Uee7e2Xmfmtsw",authDomain:"theorem-test.firebaseapp.com",projectId:"theorem-test",storageBucket:"theorem-test.firebasestorage.app",messagingSenderId:"65472887776",appId:"1:65472887776:web:3f4286da6e752731a10985",measurementId:"G-T0DLWT33MV"};
let db = null, currentUser = null;
function setSyncStatus(msg, cls){ const e = document.getElementById('sync-status'); if(e){ e.textContent = msg; e.className = 'sync-status' + (cls ? ' ' + cls : ''); } }
function showLoginRow(){ document.getElementById('sync-row-login').style.display = 'flex'; document.getElementById('sync-row-status').style.display = 'none'; }
function showStatusRow(){ document.getElementById('sync-row-login').style.display = 'none'; document.getElementById('sync-row-status').style.display = 'flex'; }
function sanitiseUsername(raw){ return raw.trim().toLowerCase().replace(/[^a-z0-9_]/g,'').slice(0,30); }

let pushTimer = null;
function pushData(){
  if(!db || !currentUser) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(async () => {
    try{ await db.collection('users_msp').doc(currentUser).set({s2: JSON.stringify(state), updated: firebase.firestore.FieldValue.serverTimestamp()}, {merge:true}); setSyncStatus('Synced · @' + currentUser, 'ok'); }
    catch(e){ console.warn('Push failed', e); setSyncStatus('Offline', 'err'); }
  }, 800);
}
// Merge remote progress into local: keep whichever record of each topic/question has more history.
function mergeState(remote){
  const pickRicher = (a, b) => !a ? b : !b ? a : ((b.hist || []).length > (a.hist || []).length || (b.seen || 0) > (a.seen || 0)) ? b : a;
  Object.keys(remote.sec || {}).forEach(k => state.sec[k] = pickRicher(state.sec[k], remote.sec[k]));
  Object.keys(remote.qdata || {}).forEach(k => state.qdata[k] = pickRicher(state.qdata[k], remote.qdata[k]));
  const rs = remote.stats || {}, ls = state.stats;
  ['answered','credit','minutes','sessions'].forEach(k => ls[k] = Math.max(ls[k] || 0, rs[k] || 0));
}
async function connectUser(username){
  if(!db) return;
  currentUser = username; localStorage.setItem('s2_username', username);
  showStatusRow(); setSyncStatus('Syncing…', 'loading');
  try{
    const snap = await db.collection('users_msp').doc(username).get();
    if(snap.exists && snap.data().s2){ mergeState(JSON.parse(snap.data().s2)); try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){} }
    setSyncStatus('Synced · @' + username, 'ok');
    pushData(); renderHome();
  }catch(e){ console.warn('Sync failed', e); setSyncStatus('Offline', 'err'); }
}
window.syncLogin = async function(){
  const input = document.getElementById('sync-username-input');
  const u = sanitiseUsername(input.value);
  if(u.length < 3){ input.value = ''; input.placeholder = 'At least 3 letters/numbers'; return; }
  input.value = ''; await connectUser(u);
};
window.syncLogout = function(){ currentUser = null; localStorage.removeItem('s2_username'); showLoginRow(); setSyncStatus(''); };
function initFirebase(){
  try{
    if(typeof firebase === 'undefined') throw new Error('Firebase unavailable');
    if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    const saved = localStorage.getItem('s2_username');
    if(saved) connectUser(saved); else showLoginRow();
  }catch(e){ console.warn('Firebase init failed:', e); showLoginRow(); }
}

// ---------------------------------------------------------------- init
renderHome();
initFirebase();
