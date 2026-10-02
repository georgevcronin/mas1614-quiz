// ================================================================
// MARKING — AI marking of written answers with Gemini or Groq.
// API keys are kept in this browser's localStorage only (never synced, never in the repo)
// and are sent only to the chosen provider.
// Settings shape: {provider:'gemini'|'groq', gemini:{key,model}, groq:{key,model}}
// ================================================================
const MARKER_STORE = 's2_marker';

const MARKER_INSTRUCTIONS = `You are a strict but fair examiner for a second-year undergraduate mathematics module at Newcastle University.
Mark the student's answer against the question and mark scheme provided.
- Award an integer number of marks from 0 to the maximum stated.
- Follow the mark scheme's allocation. Give method marks for correct working even if the final answer is wrong, and accept equivalent forms, notation and valid alternative methods.
- Give 0 for blank, irrelevant or copied-question answers. Do not reward an unjustified bare answer if the scheme asks for justification.
- If a photo of handwritten working is attached, read and mark it.
Feedback: 2–4 sentences addressed to the student ("you"): what was right, what was missing or wrong, and the one key step to fix. Write any maths in LaTeX inside \\( \\) delimiters. Do not restate the full model solution.
Reply with JSON only: {"score": <integer>, "feedback": "<text>"}.`;

function markerPrompt(w, answer, image){
  return `MODULE: ${w.module}
TOPIC: ${w.topic}
QUESTION (${w.marks} mark${w.marks > 1 ? 's' : ''}):
${w.plain}

MARK SCHEME / MODEL ANSWER:
${w.scheme}

STUDENT ANSWER:
${answer.trim() || (image ? '(see attached photo of working)' : '(blank)')}`;
}

async function apiFetch(url, headers, body){
  const res = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: {'Content-Type': 'application/json', ...headers},
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if(!res.ok) throw new Error((data.error && (data.error.message || data.error)) || ('HTTP ' + res.status));
  return data;
}
const versionOf = n => parseFloat((n.match(/(\d+(?:\.\d+)?)/) || [0, 0])[1]);

const PROVIDERS = {
  gemini: {
    name: 'Gemini', keyHint: 'AIza…', keyUrl: 'https://aistudio.google.com/apikey',
    base: 'https://generativelanguage.googleapis.com/v1beta',
    // Models usable for generateContent, best "flash" model first.
    async listModels(key){
      const data = await apiFetch(this.base + '/models?pageSize=200', {'x-goog-api-key': key});
      const names = (data.models || [])
        .filter(m => (m.supportedGenerationMethods || []).includes('generateContent') && /gemini/.test(m.name))
        .map(m => m.name.replace(/^models\//, ''));
      const rank = n => (/flash/.test(n) ? 2 : /pro/.test(n) ? 1 : 0) - (/lite|preview|exp|tts|image|audio|live|thinking/.test(n) ? 3 : 0);
      return names.sort((a, b) => rank(b) - rank(a) || versionOf(b) - versionOf(a) || a.length - b.length);
    },
    async mark(cfg, w, answer, image){
      const parts = [{text: markerPrompt(w, answer, image)}];
      if(image) parts.push({inlineData: {mimeType: 'image/jpeg', data: image.split(',')[1]}});
      const data = await apiFetch(`${this.base}/models/${encodeURIComponent(cfg.model)}:generateContent`, {'x-goog-api-key': cfg.key}, {
        systemInstruction: {parts: [{text: MARKER_INSTRUCTIONS}]},
        contents: [{role: 'user', parts}],
        generationConfig: {
          temperature: 0.1, responseMimeType: 'application/json',
          responseSchema: {type: 'OBJECT', properties: {score: {type: 'INTEGER'}, feedback: {type: 'STRING'}}, required: ['score', 'feedback']},
        },
      });
      return (((data.candidates || [])[0] || {}).content || {parts: []}).parts.map(p => p.text || '').join('');
    },
  },
  groq: {
    name: 'Groq', keyHint: 'gsk_…', keyUrl: 'https://console.groq.com/keys',
    base: 'https://api.groq.com/openai/v1',
    // Chat models, largest first; speech, guard and embedding models are excluded.
    async listModels(key){
      const data = await apiFetch(this.base + '/models', {Authorization: 'Bearer ' + key});
      const names = (data.data || []).filter(m => m.active !== false).map(m => m.id)
        .filter(n => !/whisper|tts|guard|embed|distil|playai|orpheus|prompt|safeguard|compound/i.test(n));
      const size = n => { const m = n.match(/(\d+)b/i); return m ? +m[1] : 0; };
      return names.sort((a, b) => size(b) - size(a) || versionOf(b) - versionOf(a));
    },
    // Groq models that accept images (for photos of working).
    isVision: n => /vision|llama-4|scout|maverick/i.test(n),
    async mark(cfg, w, answer, image){
      let model = cfg.model;
      const content = [{type: 'text', text: markerPrompt(w, answer, image)}];
      if(image){
        if(!this.isVision(model)) model = (cfg.models || []).find(m => this.isVision(m)) || model;
        if(!this.isVision(model)) throw new Error('none of your Groq models can read photos — type your answer, or use a Gemini key for photos');
        content.push({type: 'image_url', image_url: {url: image}});
      }
      const data = await apiFetch(this.base + '/chat/completions', {Authorization: 'Bearer ' + cfg.key}, {
        model, temperature: 0.1, response_format: {type: 'json_object'},
        messages: [{role: 'system', content: MARKER_INSTRUCTIONS}, {role: 'user', content: image ? content : content[0].text}],
      });
      return ((((data.choices || [])[0] || {}).message) || {}).content || '';
    },
  },
};

// ---------------------------------------------------------------- settings
function markerSettings(){
  let s = null;
  try{ s = JSON.parse(localStorage.getItem(MARKER_STORE)); }catch(e){}
  if(!s){   // migrate the earlier Gemini-only setting
    try{ const old = JSON.parse(localStorage.getItem('s2_gemini')); if(old && old.key) s = {provider: 'gemini', gemini: old}; }catch(e){}
  }
  return {provider: 'gemini', gemini: {}, groq: {}, ...(s || {})};
}
function saveMarkerSettings(s){ try{ localStorage.setItem(MARKER_STORE, JSON.stringify(s)); }catch(e){} }
function activeMarker(){
  const s = markerSettings(), cfg = s[s.provider] || {};
  return cfg.key && cfg.model ? {id: s.provider, provider: PROVIDERS[s.provider], cfg} : null;
}
function markerReady(){ return !!activeMarker(); }
function providerForKey(key){ return /^gsk_/.test(key) ? 'groq' : 'gemini'; }

// Check a key, pick a model, save it and make that provider active. Returns the model list.
async function connectMarker(id, key, wantModel){
  const models = await PROVIDERS[id].listModels(key);
  if(!models.length) throw new Error(`no ${PROVIDERS[id].name} models available for this key`);
  const s = markerSettings();
  s[id] = {key, model: models.includes(wantModel) ? wantModel : models[0], models};
  s.provider = id;
  saveMarkerSettings(s);
  return models;
}

// Mark a written answer. w = written form of a question (see toWritten in quiz.js).
async function markAnswer(w, answer, image){
  const m = activeMarker();
  const text = await m.provider.mark(m.cfg, w, answer, image);
  const out = JSON.parse(text.replace(/^```(?:json)?\s*|\s*```$/g, ''));
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
