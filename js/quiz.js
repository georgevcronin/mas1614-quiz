// ================================================================
// QUIZ ENGINE — runs a mini exam with instant feedback.
// runExam(container, questions, {title, hints, onAnswer}) → Promise<[{q, credit}]>
// credit is 0..1 (true/false and gap questions give partial credit).
// ================================================================
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
// Text is HTML-escaped; LaTeX between \( \) or \[ \] is typeset by KaTeX (see renderMath).
const fmt = esc;
const MATH_OPTS = {delimiters:[{left:'\\[', right:'\\]', display:true}, {left:'\\(', right:'\\)', display:false}], throwOnError:false};
function renderMath(node){ if(node && window.renderMathInElement) window.renderMathInElement(node, MATH_OPTS); }
function renderAllMath(){ renderMath(document.body); }
// Re-typeset whenever new content is added (batched to one pass per frame).
let mathQueued = false;
if(typeof MutationObserver !== 'undefined') new MutationObserver(() => {
  if(mathQueued) return; mathQueued = true;
  requestAnimationFrame(() => { mathQueued = false; renderAllMath(); });
}).observe(document.documentElement, {childList:true, subtree:true});
// LaTeX (or plain text) used to display a gap answer.
function showAns(show, ans){
  const s = show || firstAns(ans);
  if(!show) return s;
  return /\\\(|\\\[/.test(s) ? s : '\\(' + s + '\\)';
}

function el(tag, cls, html){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html !== undefined) e.innerHTML = html;
  return e;
}
const firstAns = a => Array.isArray(a) ? a[0] : a;
function waitClick(btn){ return new Promise(r => btn.addEventListener('click', r, {once:true})); }

// ---------------------------------------------------------------- answer checking
function normAns(s){
  return String(s).toLowerCase().trim()
    .replace(/\s+/g,'').replace(/[−–—]/g,'-').replace(/pi/g,'π')
    .replace(/³/g,'^3').replace(/²/g,'^2').replace(/[×·*]/g,'').replace(/sqrt/g,'√');
}
function evalNum(str){
  let s = normAns(str);
  if(!/^[0-9.+\-/^()π√]+$/.test(s)) return NaN;
  s = s.replace(/([0-9.π)])(?=[π√(])/g, '$1*')       // implicit multiplication: 3π, 2√2, 2(…)
       .replace(/√(\d+(?:\.\d+)?)/g, 'Math.sqrt($1)')
       .replace(/√\(/g, 'Math.sqrt(')
       .replace(/π/g, 'Math.PI').replace(/\^/g, '**');
  try{ const v = Function('"use strict";return (' + s + ')')(); return typeof v === 'number' && isFinite(v) ? v : NaN; }
  catch(e){ return NaN; }
}
function checkAnswer(input, accepted, tol){
  const list = Array.isArray(accepted) ? accepted : [accepted];
  const a = normAns(input);
  if(!a) return false;
  return list.some(ans => {
    if(normAns(ans) === a) return true;
    const x = evalNum(input), y = evalNum(ans);
    if(isNaN(x) || isNaN(y)) return false;
    return Math.abs(x - y) <= (tol ?? Math.max(1e-9, 1e-3*Math.abs(y)));
  });
}

// ---------------------------------------------------------------- exam loop
async function runExam(box, questions, opts = {}){
  const results = [];
  for(let i = 0; i < questions.length; i++){
    const q = questions[i];
    box.innerHTML = '';
    const sec = SECTION_BY_ID[q.sec];
    box.appendChild(el('div','lbl', esc((opts.title || 'Mini exam') + ' · ' + (i+1) + ' of ' + questions.length + ' · ' + MODULES[sec.mod].short + ' — ' + sec.title)));
    const credit = await (q.type === 'mc' ? askMC : q.type === 'tf' ? askTF : askGap)(box, q, opts);
    results.push({q, credit});
    if(opts.onAnswer) opts.onAnswer(q, credit);
    const go = el('button', 'go-btn ' + (credit === 1 ? 'ok' : 'bad'), i + 1 < questions.length ? 'Next →' : 'Finish →');
    box.appendChild(go);
    go.scrollIntoView({behavior:'smooth', block:'end'});
    await waitClick(go);
  }
  box.innerHTML = '';
  return results;
}

function questionCard(box, q, opts, extra){
  const card = el('div','card');
  card.appendChild(el('div','q-text', fmt(q.text)));
  if(extra) card.appendChild(el('div','muted', extra));
  if(opts.hints && q.hint){
    const hb = el('button','hint-btn','💡 Show hint');
    hb.onclick = () => { hb.replaceWith(el('div','hint-box', fmt(q.hint))); };
    card.appendChild(hb);
  }
  box.appendChild(card);
}

// ---- multiple choice (options shuffled each time)
function askMC(box, q, opts){
  return new Promise(resolve => {
    questionCard(box, q, opts);
    const order = q.opts.map((_, i) => i).sort(() => Math.random() - 0.5);
    const wrap = el('div','opts'), btns = [];
    order.forEach((oi, pos) => {
      const b = el('button','opt', `<span class="badge">${'ABCD'[pos]}</span><span>${fmt(q.opts[oi])}</span>`);
      b.onclick = () => {
        const ok = oi === q.ans;
        btns.forEach((bb, p) => { bb.disabled = true; bb.className = 'opt ' + (order[p] === q.ans ? 'right' : bb === b ? 'wrong' : 'dim'); });
        box.appendChild(el('div','fb ' + (ok ? 'ok' : 'bad'), `<div class="fb-title">${ok ? '✓ Correct' : '✗ Not quite'}</div><div class="fb-body">${fmt(q.why || '')}</div>`));
        resolve(ok ? 1 : 0);
      };
      btns.push(b); wrap.appendChild(b);
    });
    box.appendChild(wrap);
  });
}

// ---- true / false statements (all shown, answered one by one)
function askTF(box, q, opts){
  return new Promise(resolve => {
    questionCard(box, q, opts, 'True or false?');
    let answered = 0, right = 0;
    q.statements.forEach(s => {
      const c = el('div','tf-card');
      c.appendChild(el('div','tf-text', fmt(s.s)));
      const row = el('div','tf-btns'), tb = el('button','tf-btn','✓ True'), fb = el('button','tf-btn','✗ False');
      const pick = v => {
        const ok = v === s.ans;
        tb.disabled = fb.disabled = true;
        (v ? tb : fb).className = 'tf-btn ' + (ok ? 'right' : 'wrong');
        (v ? fb : tb).className = 'tf-btn ' + (ok ? 'dim' : 'right');
        c.appendChild(el('div','tf-why ' + (ok ? 'ok' : 'bad'), (ok ? '✓ ' : '✗ ') + '<b>' + (s.ans ? 'TRUE' : 'FALSE') + '</b> — ' + fmt(s.why)));
        answered++; if(ok) right++;
        if(answered === q.statements.length) resolve(right / q.statements.length);
      };
      tb.onclick = () => pick(true); fb.onclick = () => pick(false);
      row.append(tb, fb); c.appendChild(row); box.appendChild(c);
    });
  });
}

// ---- gap fill (worked solution with blanks, checked one at a time)
function askGap(box, q, opts){
  return new Promise(resolve => {
    questionCard(box, q, opts, 'Fill in each blank, then press Check.');
    const blanks = [];
    q.steps.forEach((st, si) => {
      const row = el('div','gap-row'), ctx = el('div','gap-ctx');
      const spans = [];
      const mk = () => { const sp = el('span','gap-blank','?'); spans.push(sp); return sp; };
      const txt = t => { const sp = el('span', '', fmt(t || '')); return sp; };
      ctx.append(txt(st.before), mk(), txt(st.after));
      if(st.answer2 !== undefined) ctx.append(mk(), txt(st.after2));
      row.appendChild(ctx);
      const why = el('div','gap-why', fmt(st.why || '')); why.style.display = 'none';
      [[st.answer, st.show], [st.answer2, st.show2]].forEach(([ans, show], k) => {
        if(ans === undefined) return;
        const line = el('div','gap-in'), inp = el('input','gap-input'), chk = el('button','gap-check','Check');
        inp.placeholder = k ? 'Second blank…' : 'Answer (e.g. 1/24, 3pi/2, sqrt(2))';
        inp.autocomplete = 'off'; inp.autocapitalize = 'off'; inp.spellcheck = false;
        line.append(inp, chk); row.appendChild(line);
        blanks.push({inp, chk, ans, show, tol: st.tol, span: spans[k], why});
      });
      row.appendChild(why); box.appendChild(row);
    });
    let done = 0, right = 0;
    blanks.forEach((b, i) => {
      if(i > 0){ b.inp.disabled = b.chk.disabled = true; }
      const check = () => {
        if(b.chk.disabled) return;
        const ok = checkAnswer(b.inp.value, b.ans, b.tol);
        b.inp.disabled = b.chk.disabled = true;
        b.inp.className = 'gap-input ' + (ok ? 'ok' : 'bad');
        b.chk.textContent = ok ? '✓' : '✗';
        b.span.innerHTML = esc(showAns(b.show, b.ans));
        b.span.className = 'gap-blank ' + (ok ? 'ok' : 'bad');
        b.why.style.display = 'block';
        done++; if(ok) right++;
        const nx = blanks[i+1];
        if(nx){ nx.inp.disabled = nx.chk.disabled = false; nx.inp.focus(); }
        if(done === blanks.length) resolve(right / blanks.length);
      };
      b.chk.onclick = check;
      b.inp.addEventListener('keydown', e => { if(e.key === 'Enter') check(); });
    });
  });
}

// Plain-text description of the correct answer (used on the Fix screen).
function answerText(q){
  if(q.type === 'mc') return q.opts[q.ans];
  if(q.type === 'tf') return q.statements.map(s => (s.ans ? 'TRUE: ' : 'FALSE: ') + s.s).join('\n');
  return q.steps.map(s => (s.before || '') + showAns(s.show, s.answer) + (s.after || '') + (s.answer2 !== undefined ? showAns(s.show2, s.answer2) + (s.after2 || '') : '')).join('\n');
}
function explainText(q){
  if(q.type === 'mc') return q.why || '';
  if(q.type === 'tf') return q.statements.map(s => s.why).join(' ');
  return q.steps.map(s => s.why || '').join(' ');
}

if(typeof module !== 'undefined') module.exports = {checkAnswer, evalNum, normAns, showAns};
