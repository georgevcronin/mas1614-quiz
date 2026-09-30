// ================================================================
// MARKING — Gemini API marking of written answers.
// The API key is kept in this browser's localStorage only (never synced)
// and is sent only to Google's Generative Language API.
// ================================================================
const GEMINI_STORE = 's2_gemini';
const GEMINI_BASE = 'https://generativelanguage.googleapis.com/v1beta';

function geminiSettings(){
  try{ return JSON.parse(localStorage.getItem(GEMINI_STORE)) || {}; }catch(e){ return {}; }
}
function saveGeminiSettings(s){ try{ localStorage.setItem(GEMINI_STORE, JSON.stringify(s)); }catch(e){} }
function geminiReady(){ const s = geminiSettings(); return !!(s.key && s.model); }

async function geminiFetch(path, key, body){
  const res = await fetch(GEMINI_BASE + path, {
    method: body ? 'POST' : 'GET',
    headers: {'Content-Type':'application/json', 'x-goog-api-key': key},
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if(!res.ok) throw new Error((data.error && data.error.message) || ('HTTP ' + res.status));
  return data;
}

// List models this key can use for generateContent, best "flash" model first.
async function listGeminiModels(key){
  const data = await geminiFetch('/models?pageSize=200', key);
  const names = (data.models || [])
    .filter(m => (m.supportedGenerationMethods || []).includes('generateContent') && /gemini/.test(m.name))
    .map(m => m.name.replace(/^models\//, ''));
  const ver = n => parseFloat((n.match(/gemini-(\d+(?:\.\d+)?)/) || [0, 0])[1]);
  const rank = n => (/flash/.test(n) ? 2 : /pro/.test(n) ? 1 : 0) - (/lite|preview|exp|tts|image|audio|live|thinking/.test(n) ? 3 : 0);
  return names.sort((a, b) => rank(b) - rank(a) || ver(b) - ver(a) || a.length - b.length);
}

const MARKER_INSTRUCTIONS = `You are a strict but fair examiner for a second-year undergraduate mathematics module at Newcastle University.
Mark the student's answer against the question and mark scheme provided.
- Award an integer number of marks from 0 to the maximum stated.
- Follow the mark scheme's allocation. Give method marks for correct working even if the final answer is wrong, and accept equivalent forms, notation and valid alternative methods.
- Give 0 for blank, irrelevant or copied-question answers. Do not reward an unjustified bare answer if the scheme asks for justification.
- If a photo of handwritten working is attached, read and mark it.
Feedback: 2–4 sentences addressed to the student ("you"): what was right, what was missing or wrong, and the one key step to fix. Write any maths in LaTeX inside \\( \\) delimiters. Do not restate the full model solution.`;

// w = written form of a question (see toWritten in quiz.js).
async function markWithGemini(w, answer, image){
  const s = geminiSettings();
  const prompt =
`MODULE: ${w.module}
TOPIC: ${w.topic}
QUESTION (${w.marks} mark${w.marks > 1 ? 's' : ''}):
${w.plain}

MARK SCHEME / MODEL ANSWER:
${w.scheme}

STUDENT ANSWER:
${answer.trim() || (image ? '(see attached photo of working)' : '(blank)')}`;
  const parts = [{text: prompt}];
  if(image) parts.push({inlineData: {mimeType: 'image/jpeg', data: image.split(',')[1]}});
  const data = await geminiFetch(`/models/${encodeURIComponent(s.model)}:generateContent`, s.key, {
    systemInstruction: {parts: [{text: MARKER_INSTRUCTIONS}]},
    contents: [{role: 'user', parts}],
    generationConfig: {
      temperature: 0.1,
      responseMimeType: 'application/json',
      responseSchema: {type: 'OBJECT', properties: {score: {type: 'INTEGER'}, feedback: {type: 'STRING'}}, required: ['score', 'feedback']},
    },
  });
  const text = (((data.candidates || [])[0] || {}).content || {parts: []}).parts.map(p => p.text || '').join('');
  const out = JSON.parse(text);
  return {score: Math.max(0, Math.min(w.marks, Math.round(Number(out.score) || 0))), feedback: String(out.feedback || '')};
}

// Shrink a photo to at most 1600px on its long side and return a JPEG data URL.
function photoToDataUrl(file){
  return new Promise((resolve, reject) => {
    const img = new Image(), url = URL.createObjectURL(file);
    img.onload = () => {
      const k = Math.min(1, 1600 / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL('image/jpeg', 0.85));
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not read image')); };
    img.src = url;
  });
}
