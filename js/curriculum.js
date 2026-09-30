// ================================================================
// CURRICULUM — every section of every module, in study order.
// week: plan week (1–5 new content, 6 = consolidation)
// stream: A = Stats (Prob → MAS2901), B = Pure (LA → CA), C = Applied (VC → DE)
// pick: I = Implement (quick win), C = Challenge (hard, essential),
//       P = Possible (skim), K = Kill (skip — non-examinable / low payoff)
// src: where to read it. key: key points (filled in from js/keypoints.js).
// ================================================================
const PLAN_START = '2026-10-01';   // Week 1, day 1
const PLAN_WEEKS = 6;
const PASS_MARK = 0.8;

const STATS_URL = 'https://matthewalexanderfisher.github.io/NCL-MAS2901/content/main/';

const MODULES = {
  PROB: {code:'MAS2909', name:'Probability',                 short:'Prob',  stream:'A', color:'#F472B6'},
  STAT: {code:'MAS2901', name:'Statistical Inference',       short:'Stats', stream:'A', color:'#FB7185'},
  LA:   {code:'MAS2701', name:'Linear Algebra',              short:'LA',    stream:'B', color:'#60A5FA'},
  CA:   {code:'MAS2702', name:'Complex Analysis',            short:'CA',    stream:'B', color:'#A78BFA'},
  VC:   {code:'MSP2801', name:'Vector Calculus',             short:'VC',    stream:'C', color:'#34D399'},
  DE:   {code:'MSP2802', name:'Differential Equations, Waves & Transforms', short:'DE', stream:'C', color:'#FBBF24'},
};

const STREAMS = {A:'Stats', B:'Pure', C:'Applied'};

const SECTIONS = [
// ---------------------------------------------------------------- STREAM A
// Week 1
{id:'prob-1-events', mod:'PROB', week:1, pick:'I', title:'Probability, conditioning & Bayes',
 src:'Prob notes: Recap Ch1 §1.1 · Stats notes Ch1 "Probability and Events"', url:STATS_URL+'part1/1-prob-theory.html', key:[]},
{id:'prob-1-rvs', mod:'PROB', week:1, pick:'I', title:'Random variables: pmf, pdf and cdf',
 src:'Prob notes: Recap Ch1 §1.2 · Stats notes Ch1 "Random Variables"', url:STATS_URL+'part1/1-prob-theory.html#sec-random-variables', key:[]},
{id:'prob-1-moments', mod:'PROB', week:1, pick:'I', title:'Expectation, variance & covariance',
 src:'Prob notes: Recap Ch1 §1.3 · Stats notes Ch1 "Expectations, Variances and Covariances"', url:STATS_URL+'part1/1-prob-theory.html', key:[]},
{id:'prob-1-dists', mod:'PROB', week:1, pick:'I', title:'Common distributions & MGFs',
 src:'Prob notes: Recap Ch1 §1.4 and §1.4.1', url:null, key:[]},
{id:'stat-2', mod:'STAT', week:1, pick:'I', title:'What is statistical inference?',
 src:'Stats notes Ch2', url:STATS_URL+'part1/2-what-is-stats-inference.html', key:[]},
{id:'stat-3', mod:'STAT', week:1, pick:'I', title:'Types of inference',
 src:'Stats notes Ch3', url:STATS_URL+'part1/3-types-of-inference.html', key:[]},
// Week 2
{id:'prob-2-joint', mod:'PROB', week:2, pick:'I', title:'Random vectors, joint & marginal distributions', src:'Prob notes Ch2 §2.1–2.3', url:null, key:[]},
{id:'prob-2-cond', mod:'PROB', week:2, pick:'C', title:'Conditional distributions & conditional expectation', src:'Prob notes Ch2 §2.4–2.5', url:null, key:[]},
{id:'prob-2-cov', mod:'PROB', week:2, pick:'I', title:'Independence, covariance, mean vector & covariance matrix', src:'Prob notes Ch2 §2.6–2.9', url:null, key:[]},
{id:'prob-2-mvn', mod:'PROB', week:2, pick:'C', title:'Multivariate normal distribution', src:'Prob notes Ch2 §2.10–2.11', url:null, key:[]},
{id:'prob-3-trans', mod:'PROB', week:2, pick:'C', title:'Transformations of random variables & vectors (Jacobian)', src:'Prob notes Ch3 §3.1.1–3.1.2', url:null, key:[]},
{id:'prob-3-sums', mod:'PROB', week:2, pick:'C', title:'Sums, differences, products, quotients; convolution', src:'Prob notes Ch3 §3.1.3–3.1.6', url:null, key:[]},
// Week 3
{id:'prob-4-tail', mod:'PROB', week:3, pick:'I', title:'Tail bounds (Markov, Chebyshev)', src:'Prob notes Ch4 §4.1', url:null, key:[]},
{id:'prob-4-modes', mod:'PROB', week:3, pick:'C', title:'Modes of convergence & how they relate', src:'Prob notes Ch4 §4.2–4.3', url:null, key:[]},
{id:'prob-4-limits', mod:'PROB', week:3, pick:'C', title:'Law of Large Numbers & Central Limit Theorem', src:'Prob notes Ch4 §4.4–4.6', url:null, key:[]},
{id:'stat-4-est', mod:'STAT', week:3, pick:'I', title:'Estimators vs estimates; bias & MSE', src:'Stats notes Ch4', url:STATS_URL+'part2/4-freq-point-estimation.html#sec-estimator-properties', key:[]},
{id:'stat-4-asym', mod:'STAT', week:3, pick:'C', title:'CLT & asymptotic properties of estimators', src:'Stats notes Ch4', url:STATS_URL+'part2/4-freq-point-estimation.html#sec-clt', key:[]},
// Week 4
{id:'stat-5-mle', mod:'STAT', week:4, pick:'C', title:'Likelihood & maximum likelihood estimation', src:'Stats notes Ch5', url:STATS_URL+'part2/5-likelihood.html', key:[]},
{id:'stat-5-info', mod:'STAT', week:4, pick:'C', title:'Fisher information, efficiency & Cramér–Rao', src:'Stats notes Ch5', url:STATS_URL+'part2/5-likelihood.html', key:[]},
{id:'stat-5-asym', mod:'STAT', week:4, pick:'C', title:'Asymptotic distribution of the MLE', src:'Stats notes Ch5', url:STATS_URL+'part2/5-likelihood.html', key:[]},
{id:'stat-6-bayes', mod:'STAT', week:4, pick:'I', title:'Bayes’ theorem for densities & conjugate priors', src:'Stats notes Ch6', url:STATS_URL+'part2/6-bayes-inference.html', key:[]},
{id:'stat-6-est', mod:'STAT', week:4, pick:'C', title:'Bayesian estimators & asymptotic posterior', src:'Stats notes Ch6', url:STATS_URL+'part2/6-bayes-inference.html', key:[]},
// Week 5
{id:'stat-7-ci', mod:'STAT', week:5, pick:'I', title:'Confidence intervals: definition & interpretation', src:'Stats notes Ch7', url:STATS_URL+'part3/7-freq-interval-estimation.html#sec-interpreting-ci', key:[]},
{id:'stat-7-exact', mod:'STAT', week:5, pick:'C', title:'Exact & approximate confidence intervals', src:'Stats notes Ch7', url:STATS_URL+'part3/7-freq-interval-estimation.html#sec-exact-ci', key:[]},
{id:'stat-8-cred', mod:'STAT', week:5, pick:'I', title:'Credible intervals', src:'Stats notes Ch8', url:STATS_URL+'part3/8-bayes-interval-estimation.html', key:[]},
{id:'stat-8-hdi', mod:'STAT', week:5, pick:'P', title:'Highest density intervals', src:'Stats notes Ch8', url:STATS_URL+'part3/8-bayes-interval-estimation.html', key:[]},
{id:'stat-9-proc', mod:'STAT', week:5, pick:'I', title:'The hypothesis testing procedure', src:'Stats notes Ch9', url:STATS_URL+'part4/9-freq-hypothesis-testing.html#sec-testing-procedure', key:[]},
{id:'stat-9-tests', mod:'STAT', week:5, pick:'C', title:'Examinable hypothesis tests', src:'Stats notes Ch9', url:STATS_URL+'part4/9-freq-hypothesis-testing.html', key:[]},
{id:'stat-9-nonexam', mod:'STAT', week:5, pick:'K', title:'Non-examinable hypothesis tests', src:'Stats notes Ch9', url:null, key:[]},
{id:'stat-10', mod:'STAT', week:5, pick:'K', title:'Bayesian hypothesis testing (not examinable)', src:'Stats notes Ch10', url:null, key:[]},
{id:'prob-extra', mod:'PROB', week:5, pick:'K', title:'Non-examinable extras (multinomial, characteristic functions)', src:'Prob notes: Non-examinable chapter', url:null, key:[]},

// ---------------------------------------------------------------- STREAM B
// Week 1 — Linear Algebra
{id:'la-1.1', mod:'LA', week:1, pick:'I', title:'Fields', src:'LA notes §1.1 (PDF p.3–4)', url:null, key:[]},
{id:'la-1.2', mod:'LA', week:1, pick:'I', title:'Vector spaces', src:'LA notes §1.2 (PDF p.4–8)', url:null, key:[]},
{id:'la-1.3', mod:'LA', week:1, pick:'I', title:'Subspaces', src:'LA notes §1.3 (PDF p.9–11)', url:null, key:[]},
{id:'la-1.4', mod:'LA', week:1, pick:'I', title:'Span', src:'LA notes §1.4 (PDF p.12–14)', url:null, key:[]},
{id:'la-1.5', mod:'LA', week:1, pick:'I', title:'Linear independence', src:'LA notes §1.5 (PDF p.14–17)', url:null, key:[]},
{id:'la-1.6', mod:'LA', week:1, pick:'I', title:'Bases', src:'LA notes §1.6 (PDF p.17–19)', url:null, key:[]},
{id:'la-1.7', mod:'LA', week:1, pick:'C', title:'Dimension', src:'LA notes §1.7 (PDF p.19–22)', url:null, key:[]},
// Week 2 — Linear Algebra
{id:'la-1.8', mod:'LA', week:2, pick:'I', title:'Column space, row space & rank', src:'LA notes §1.8 (PDF p.22–27)', url:null, key:[]},
{id:'la-1.9', mod:'LA', week:2, pick:'C', title:'Rank–Nullity Theorem for matrices', src:'LA notes §1.9 (PDF p.27–30)', url:null, key:[]},
{id:'la-2.1', mod:'LA', week:2, pick:'I', title:'Maps, matrix transformations & linear maps', src:'LA notes §2.1–2.3 (PDF p.31–35)', url:null, key:[]},
{id:'la-2.4', mod:'LA', week:2, pick:'I', title:'Isomorphisms', src:'LA notes §2.4 (PDF p.35–36)', url:null, key:[]},
{id:'la-2.5', mod:'LA', week:2, pick:'I', title:'Kernel & image of linear maps', src:'LA notes §2.5 (PDF p.36–38)', url:null, key:[]},
{id:'la-2.6', mod:'LA', week:2, pick:'C', title:'The matrix of a linear map', src:'LA notes §2.6 (PDF p.38–42)', url:null, key:[]},
{id:'la-2.7', mod:'LA', week:2, pick:'C', title:'Change of basis', src:'LA notes §2.7 (PDF p.42–43)', url:null, key:[]},
{id:'la-3.1', mod:'LA', week:2, pick:'I', title:'Real inner products & norms', src:'LA notes §3.1–3.2 (PDF p.44–47)', url:null, key:[]},
{id:'la-3.3', mod:'LA', week:2, pick:'I', title:'Orthogonality', src:'LA notes §3.3 (PDF p.47–49)', url:null, key:[]},
{id:'la-3.4', mod:'LA', week:2, pick:'C', title:'Gram–Schmidt orthonormalisation', src:'LA notes §3.4 (PDF p.49–54)', url:null, key:[]},
// Week 3 — Complex Analysis
{id:'ca-1', mod:'CA', week:3, pick:'I', title:'Complex numbers', src:'CA notes §1 (PDF p.4–9)', url:null, key:[]},
{id:'ca-2', mod:'CA', week:3, pick:'I', title:'The exponential function', src:'CA notes §2 (PDF p.10–11)', url:null, key:[]},
{id:'ca-3', mod:'CA', week:3, pick:'I', title:'Contours', src:'CA notes §3 (PDF p.12–17)', url:null, key:[]},
{id:'ca-4', mod:'CA', week:3, pick:'I', title:'Contour integration', src:'CA notes §4 (PDF p.18–22)', url:null, key:[]},
{id:'ca-5', mod:'CA', week:3, pick:'I', title:'Complex differentiation & Cauchy–Riemann', src:'CA notes §5 (PDF p.23–30)', url:null, key:[]},
{id:'ca-6', mod:'CA', week:3, pick:'I', title:'Fundamental Theorem of Calculus', src:'CA notes §6 (PDF p.31–33)', url:null, key:[]},
{id:'ca-7', mod:'CA', week:3, pick:'P', title:'Winding numbers', src:'CA notes §7 (PDF p.34–38)', url:null, key:[]},
// Week 4
{id:'ca-8', mod:'CA', week:4, pick:'I', title:'Closing contours', src:'CA notes §8 (PDF p.39–41)', url:null, key:[]},
{id:'ca-9', mod:'CA', week:4, pick:'C', title:'Cauchy’s Theorem', src:'CA notes §9 (PDF p.42–45)', url:null, key:[]},
{id:'ca-10', mod:'CA', week:4, pick:'C', title:'Cauchy’s Integral Formula', src:'CA notes §10 (PDF p.46–53)', url:null, key:[]},
{id:'ca-11', mod:'CA', week:4, pick:'I', title:'Higher derivatives', src:'CA notes §11 (PDF p.54)', url:null, key:[]},
{id:'ca-12', mod:'CA', week:4, pick:'P', title:'Liouville’s Theorem & Fundamental Theorem of Algebra', src:'CA notes §12 (PDF p.55–57)', url:null, key:[]},
{id:'ca-13', mod:'CA', week:4, pick:'C', title:'Power series & Laurent series', src:'CA notes §13 (PDF p.58–68)', url:null, key:[]},
// Week 5
{id:'ca-14', mod:'CA', week:5, pick:'C', title:'Singularities & residues', src:'CA notes §14 (PDF p.69–76)', url:null, key:[]},
{id:'ca-15', mod:'CA', week:5, pick:'C', title:'The Residue Theorem', src:'CA notes §15 (PDF p.77–82)', url:null, key:[]},
{id:'ca-16', mod:'CA', week:5, pick:'C', title:'Applications: real integrals & Jordan’s lemma', src:'CA notes §16 (PDF p.83–92)', url:null, key:[]},
{id:'ca-17', mod:'CA', week:5, pick:'I', title:'Fourier transforms (via residues)', src:'CA notes §17 (PDF p.93–94)', url:null, key:[]},
{id:'ca-18', mod:'CA', week:5, pick:'P', title:'Laplace transforms', src:'CA notes §18 (PDF p.95–97)', url:null, key:[]},

// ---------------------------------------------------------------- STREAM C
// Week 1 — Vector Calculus
{id:'vc-1.1', mod:'VC', week:1, pick:'I', title:'Vector review: dot & cross products', src:'VC notes §1.1', url:null, key:[]},
{id:'vc-1.2', mod:'VC', week:1, pick:'I', title:'Polar, cylindrical & spherical coordinates', src:'VC notes §1.2', url:null, key:[]},
{id:'vc-1.3', mod:'VC', week:1, pick:'I', title:'Scalar & vector fields; gradient', src:'VC notes §1.3', url:null, key:[]},
{id:'vc-1.4', mod:'VC', week:1, pick:'I', title:'Double integrals', src:'VC notes §1.4', url:null, key:[]},
{id:'vc-1.5', mod:'VC', week:1, pick:'I', title:'Volume (triple) integrals', src:'VC notes §1.5', url:null, key:[]},
{id:'vc-2.1', mod:'VC', week:1, pick:'I', title:'Curves in 2D: parametrisation, tangent & length', src:'VC notes §2.1.1–2.1.4', url:null, key:[]},
{id:'vc-2.1.5', mod:'VC', week:1, pick:'P', title:'Arc-length & the natural parametrisation', src:'VC notes §2.1.5', url:null, key:[]},
{id:'vc-2.2', mod:'VC', week:1, pick:'I', title:'Line integrals of scalar & vector fields', src:'VC notes §2.2', url:null, key:[]},
{id:'vc-2.3', mod:'VC', week:1, pick:'I', title:'Curves in 3D', src:'VC notes §2.3', url:null, key:[]},
// Week 2 — Vector Calculus
{id:'vc-3.1', mod:'VC', week:2, pick:'I', title:'Representations of surfaces & normals', src:'VC notes §3.1–3.2', url:null, key:[]},
{id:'vc-3.3', mod:'VC', week:2, pick:'C', title:'Surface area & explicit geometric form', src:'VC notes §3.3–3.4', url:null, key:[]},
{id:'vc-3.5', mod:'VC', week:2, pick:'C', title:'Surface integrals', src:'VC notes §3.5', url:null, key:[]},
{id:'vc-4.1', mod:'VC', week:2, pick:'I', title:'Directional derivatives', src:'VC notes §4.1', url:null, key:[]},
{id:'vc-4.2', mod:'VC', week:2, pick:'I', title:'Divergence, curl & the Laplacian', src:'VC notes §4.2–4.4', url:null, key:[]},
{id:'vc-4.5', mod:'VC', week:2, pick:'I', title:'Conservative vector fields', src:'VC notes §4.5', url:null, key:[]},
// Week 3
{id:'vc-5.1', mod:'VC', week:3, pick:'C', title:'The Divergence Theorem', src:'VC notes §5.1', url:null, key:[]},
{id:'vc-5.2', mod:'VC', week:3, pick:'C', title:'Stokes’s Theorem', src:'VC notes §5.2', url:null, key:[]},
{id:'vc-5.3', mod:'VC', week:3, pick:'C', title:'Green’s Theorem', src:'VC notes §5.3', url:null, key:[]},
{id:'de-1a', mod:'DE', week:3, pick:'I', title:'Second-order ODEs & reduction of order', src:'DE notes Week 1 (PDF p.1–5)', url:null, key:[]},
{id:'de-1b', mod:'DE', week:3, pick:'I', title:'Differential operators & analytic functions', src:'DE notes Week 1 (PDF p.5–8)', url:null, key:[]},
{id:'de-2', mod:'DE', week:3, pick:'I', title:'Series solutions at ordinary points', src:'DE notes Week 2 (PDF p.9–15)', url:null, key:[]},
// Week 4
{id:'de-3', mod:'DE', week:4, pick:'C', title:'Regular singular points & Frobenius', src:'DE notes Week 3 (PDF p.16–21)', url:null, key:[]},
{id:'de-4', mod:'DE', week:4, pick:'C', title:'Bessel’s equation & series summary', src:'DE notes Week 4 (PDF p.22–28)', url:null, key:[]},
{id:'de-5', mod:'DE', week:4, pick:'C', title:'Boundary value problems', src:'DE notes Week 5 (PDF p.29–34)', url:null, key:[]},
{id:'de-6', mod:'DE', week:4, pick:'I', title:'Fourier series: Dirichlet, orthogonality, coefficients', src:'DE notes Week 6 (PDF p.35–43)', url:null, key:[]},
// Week 5
{id:'de-7a', mod:'DE', week:5, pick:'I', title:'Odd/even functions & half-range expansions', src:'DE notes Week 7 (PDF p.44–47)', url:null, key:[]},
{id:'de-7b', mod:'DE', week:5, pick:'C', title:'Fourier series for inhomogeneous ODEs', src:'DE notes Week 7 (PDF p.48–50)', url:null, key:[]},
{id:'de-8', mod:'DE', week:5, pick:'I', title:'Fourier transform: definition & properties', src:'DE notes Week 8 (PDF p.51–57)', url:null, key:[]},
{id:'de-9a', mod:'DE', week:5, pick:'C', title:'Derivative theorem & convolution', src:'DE notes Week 9 (PDF p.58–64)', url:null, key:[]},
{id:'de-9b', mod:'DE', week:5, pick:'I', title:'The Dirac delta function', src:'DE notes Week 9 (PDF p.65–67)', url:null, key:[]},
{id:'de-10', mod:'DE', week:5, pick:'C', title:'Impulse forcing & Green’s functions', src:'DE notes Week 10 (PDF p.68–76)', url:null, key:[]},
];

const SECTION_BY_ID = Object.fromEntries(SECTIONS.map(s => [s.id, s]));
const PICK_INFO = {
  I:{name:'Implement', color:'#34D399', desc:'Quick win — test first, read only what you miss'},
  C:{name:'Challenge', color:'#F59E0B', desc:'Hard & essential — learn today, prove it tomorrow'},
  P:{name:'Possible',  color:'#60A5FA', desc:'Skim — quick 3-question check'},
  K:{name:'Kill',      color:'#64748B', desc:'Skipped — non-examinable / low payoff'},
};

// Question bank — question files push into this.
const QUESTIONS = [];
