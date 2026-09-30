# Study Planner

A 6-week accelerated plan for six Newcastle Stage 2 modules (MAS2909 Probability, MAS2901
Statistical Inference, MAS2701 Linear Algebra, MAS2702 Complex Analysis, MSP2801 Vector Calculus,
MSP2802 Differential Equations). Enter how long you have; the app builds a lesson of mini exams
with instant feedback.

- **PICK** decides what gets time: Implement (test first), Challenge (learn today, closed-book
  check on a later day), Possible (3-question check), Kill (skipped).
- **PPP** shapes each block: Present (key points / notes) → Practice (mini exam 1 + fix the gaps)
  → Produce (mini exam 2). 80% passes a topic; passed topics come back for spaced review after
  1, 3, 7, 14 and 30 days.

## Files

| File | What it holds |
|---|---|
| `js/curriculum.js` | Plan start date, modules, every section with its week, stream, PICK category, source and key points |
| `js/keypoints.js` | Key points per section (LaTeX) |
| `js/questions/week1.js` | Week 1 question bank (add `week2.js` etc. and a `<script>` tag in `index.html`) |
| `js/questions/de-specimen.js` | MSP2802 questions built from Specimen Papers 1–3, tagged e.g. "(SP1 A3)" |
| `js/planner.js` | Lesson builder, spaced-review scheduling, pass/fail rules (no DOM) |
| `js/quiz.js` | Mini-exam engine: multiple choice, true/false, step-by-step gap fill |
| `js/app.js` | Screens, lesson runner, local storage and Firebase sync |

All maths is LaTeX (`\( … \)` inline, `\[ … \]` display), typeset in the browser by KaTeX.
Question strings use `String.raw` template literals so backslashes need no escaping.

Topics without questions yet are scheduled as "study from notes" blocks with a self-rating.

Run locally by opening `index.html`, or serve the folder with `python -m http.server`.
