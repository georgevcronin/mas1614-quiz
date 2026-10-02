// ================================================================
// QUIZ ENGINE — written mini exams.
// Every question is answered in writing (typed and/or a photo of working),
// then marked by Gemini or Groq against its mark scheme, or self-marked if no key is set.
// runExam(container, questions, {title, hints, onAnswer}) → Promise<[{q, credit, score, marks, feedback}]>
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

function el(tag, cls, html){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(html !== undefined) e.innerHTML = html;
  return e;
}
function waitClick(btn){ return new Promise(r => btn.addEventListener('click', r, {once:true})); }

// ---------------------------------------------------------------- question → display form
// Every question is a short written exam question: {text, marks, scheme, parts?}.
// Returns {html, plain, marks, scheme, module, topic, instr}; `plain` and `scheme` go to the marker.
function toWritten(q){
  const sec = SECTION_BY_ID[q.sec];
  const parts = q.parts || [];
  return {
    module: MODULES[sec.mod].name, topic: sec.title, marks: q.marks, scheme: q.scheme,
    html: fmt(q.text) + (parts.length ? '<ol class="q-parts" type="a">' + parts.map(t => `<li>${fmt(t)}</li>`).join('') + '</ol>' : ''),
    plain: q.text + (parts.length ? '\n' + parts.map((t, i) => `(${'abcdefgh'[i]}) ${t}`).join('\n') : ''),
    instr: 'Show your working.',
  };
}

// ---------------------------------------------------------------- exam loop
async function runExam(box, questions, opts = {}){
  const results = [];
  for(let i = 0; i < questions.length; i++){
    const q = questions[i], w = toWritten(q), sec = SECTION_BY_ID[q.sec];
    box.innerHTML = '';
    box.appendChild(el('div','lbl', esc((opts.title || 'Mini exam') + ' · ' + (i+1) + ' of ' + questions.length + ' · ' + MODULES[sec.mod].short + ' — ' + sec.title)));
    const r = await askWritten(box, q, w, opts);
    results.push({q, ...r, credit: r.score / w.marks});
    if(opts.onAnswer) opts.onAnswer(q, r.score / w.marks);
    const go = el('button', 'go-btn', i + 1 < questions.length ? 'Next question' : 'Finish');
    box.appendChild(go);
    await waitClick(go);
  }
  box.innerHTML = '';
  return results;
}

function askWritten(box, q, w, opts){
  return new Promise(resolve => {
    const qc = el('div','card', `<span class="q-marks">[${w.marks} mark${w.marks > 1 ? 's' : ''}]</span><div class="q-text">${w.html}</div><div class="q-instr">${esc(w.instr)}</div>`);
    if(opts.hints && q.hint){
      const hb = el('button','hint-btn','Show hint');
      hb.onclick = () => hb.replaceWith(el('div','hint-box', fmt(q.hint)));
      qc.appendChild(hb);
    }
    box.appendChild(qc);

    const ta = el('textarea','answer-box'); ta.placeholder = 'Your answer and working…'; ta.spellcheck = false;
    const pv = el('div','preview');
    const tools = el('div','answer-tools');
    const photoBtn = el('button','tool-btn','Add photo of working');
    const file = el('input'); file.type = 'file'; file.accept = 'image/*'; file.style.display = 'none';
    let image = null;
    photoBtn.onclick = () => file.click();
    file.onchange = async () => {
      if(!file.files[0]) return;
      try{
        image = await photoToDataUrl(file.files[0]);
        tools.querySelectorAll('.photo-thumb').forEach(t => t.remove());
        const th = el('img','photo-thumb'); th.src = image; tools.appendChild(th);
        photoBtn.textContent = 'Replace photo';
      }catch(e){ alert(e.message); }
    };
    tools.append(photoBtn, file);
    const hint = el('div','fmt-hint', 'Type maths like x^2, sqrt(2), pi — or LaTeX between $…$ to preview it.');
    let pvTimer = null;
    ta.addEventListener('input', () => {
      clearTimeout(pvTimer);
      pvTimer = setTimeout(() => {
        const t = ta.value;
        if(!/\$[^$]+\$/.test(t)){ pv.classList.remove('on'); return; }
        pv.textContent = t; pv.classList.add('on');
        if(window.renderMathInElement) window.renderMathInElement(pv, {delimiters:[{left:'$$', right:'$$', display:true}, {left:'$', right:'$', display:false}], throwOnError:false});
      }, 300);
    });
    const submit = el('button','go-btn', markerReady() ? 'Submit for marking' : 'Submit and see the answer');
    const skip = el('button','btn-s','I don’t know — show me the answer'); skip.style.marginBottom = '16px';
    box.append(ta, pv, tools, hint, submit, skip);
    ta.focus();

    const finish = async (blank) => {
      const answer = ta.value;
      if(!blank && !answer.trim() && !image){ ta.focus(); ta.placeholder = 'Write an answer (or add a photo) first…'; return; }
      ta.disabled = true; submit.remove(); skip.remove(); photoBtn.disabled = true;
      if(blank) return resolve(await revealAndSelfMark(box, w, 0, '', true));
      if(markerReady()){
        const wait = el('div','small', `<span class="spinner"></span>Marking with ${activeMarker().provider.name}…`); box.appendChild(wait);
        try{
          const m = await markAnswer(w, answer, image);
          wait.remove();
          showResult(box, m.score, w.marks, m.feedback);
          showScheme(box, w);
          return resolve({score: m.score, marks: w.marks, feedback: m.feedback, answer});
        }catch(e){
          wait.remove();
          box.appendChild(el('div','result bad', `<div class="result-body">Couldn’t mark with ${activeMarker().provider.name}: ${esc(e.message)}. Mark yourself below.</div>`));
        }
      }
      resolve(await revealAndSelfMark(box, w, null, answer, false));
    };
    submit.onclick = () => finish(false);
    skip.onclick = () => finish(true);
  });
}

function showResult(box, score, marks, feedback){
  const r = score / marks, cls = r >= 0.8 ? 'ok' : r >= 0.4 ? 'mid' : 'bad';
  box.appendChild(el('div','result ' + cls, `<div class="result-score">${score} / ${marks}</div>${feedback ? `<div class="result-body">${fmt(feedback)}</div>` : ''}`));
}
function showScheme(box, w){
  box.appendChild(el('div','scheme', `<div class="scheme-lbl">Mark scheme</div>${fmt(w.scheme).replace(/\n/g,'<br>')}`));
}
// Show the scheme; if score is null let the student award their own marks.
function revealAndSelfMark(box, w, score, answer, blank){
  showScheme(box, w);
  if(score !== null){ showResult(box, score, w.marks, blank ? 'No answer given.' : ''); return Promise.resolve({score, marks: w.marks, feedback: '', answer}); }
  return new Promise(resolve => {
    const lbl = el('div','small','Compare with the mark scheme. How many marks did you earn?');
    const row = el('div','selfmark');
    for(let m = 0; m <= w.marks; m++){
      const b = el('button', '', String(m));
      b.onclick = () => { lbl.remove(); row.remove(); showResult(box, m, w.marks, 'Self-marked.'); resolve({score: m, marks: w.marks, feedback: 'Self-marked.', answer}); };
      row.appendChild(b);
    }
    box.append(lbl, row);
  });
}

