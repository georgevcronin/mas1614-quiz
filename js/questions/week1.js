// ================================================================
// WEEK 1 QUESTIONS
// mc(sec, text, [correct, wrong, wrong, wrong], why, hint)   — options are shuffled when shown
// tf(sec, text, [[statement, true/false, why], ...])
// gap(sec, text, [{before, answer, after, answer2?, after2?, why, tol?}, ...])
//   answer may be a string or an array of accepted strings; numeric answers are
//   compared numerically (fractions like 1/24 allowed), within tol if given.
// ================================================================
(function(){
let n = {};
const id = s => s + '-' + String(n[s] = (n[s] || 0) + 1).padStart(2, '0');
const mc  = (sec, text, opts, why, hint) => QUESTIONS.push({id:id(sec), sec, type:'mc', text, opts, ans:0, why, hint});
const tf  = (sec, text, st) => QUESTIONS.push({id:id(sec), sec, type:'tf', text, statements:st.map(([s,ans,why]) => ({s, ans, why}))});
const gap = (sec, text, steps, hint) => QUESTIONS.push({id:id(sec), sec, type:'gap', text, steps, hint});

// ---------------------------------------------------------------- PROB: events
mc('prob-1-events','P(A) = 0.5, P(B) = 0.4 and P(A∩B) = 0.2. What is P(A∪B)?',
 ['0.7','0.9','0.5','0.2'],
 'Inclusion–exclusion: P(A∪B) = P(A) + P(B) − P(A∩B) = 0.5 + 0.4 − 0.2 = 0.7.',
 'Adding P(A) and P(B) counts the overlap twice.');
mc('prob-1-events','With P(A) = 0.5, P(B) = 0.4 and P(A∩B) = 0.2, which statement is true?',
 ['P(A|B) = 0.5 and A, B are independent','P(A|B) = 0.4 and A, B are independent','P(A|B) = 0.5 and A, B are not independent','P(A|B) = 0.2 and A, B are mutually exclusive'],
 'P(A|B) = P(A∩B)/P(B) = 0.2/0.4 = 0.5 = P(A). Equivalently P(A)P(B) = 0.2 = P(A∩B), so A and B are independent. They are not mutually exclusive since P(A∩B) ≠ 0.',
 'Compare P(A∩B) with P(A)P(B).');
gap('prob-1-events','A disease affects 1% of people. A test gives a positive result for 95% of people with the disease and for 5% of people without it. Find P(disease | positive). (Give decimals.)',
 [{before:'By total probability, P(+) = 0.95×0.01 + 0.05×0.99 = ', answer:'0.059', after:'.', why:'P(+) = P(+|D)P(D) + P(+|Dᶜ)P(Dᶜ) = 0.0095 + 0.0495 = 0.059.', tol:0.0005},
  {before:'By Bayes, P(D|+) = 0.0095 / P(+) ≈ ', answer:'0.161', after:' (to 3 d.p.).', why:'0.0095/0.059 ≈ 0.161 — only about 16%, because most positives come from the large healthy group.', tol:0.002}],
 'Partition on D and Dᶜ.');
tf('prob-1-events','Independence and mutual exclusivity',
 [['If A and B are mutually exclusive with P(A) > 0 and P(B) > 0, they cannot be independent.', true, 'P(A∩B) = 0 but P(A)P(B) > 0, so the product rule fails.'],
  ['If A and B are independent, then Aᶜ and B are also independent.', true, 'P(Aᶜ∩B) = P(B) − P(A∩B) = P(B) − P(A)P(B) = P(Aᶜ)P(B).'],
  ['P(A|B) = P(B|A) for any events with positive probability.', false, 'P(A|B) = P(A∩B)/P(B) and P(B|A) = P(A∩B)/P(A); these agree only when P(A) = P(B).'],
  ['If A and B are mutually exclusive then P(A∪B) = P(A) + P(B).', true, 'Inclusion–exclusion with P(A∩B) = 0 (or the additivity axiom).']]);
mc('prob-1-events','Machines M₁, M₂, M₃ make 50%, 30%, 20% of items, with defect rates 1%, 2%, 3% respectively. What is P(an item is defective)?',
 ['0.017','0.02','0.06','0.0567'],
 'Law of total probability: 0.5×0.01 + 0.3×0.02 + 0.2×0.03 = 0.005 + 0.006 + 0.006 = 0.017.',
 'Sum P(D|Mᵢ)P(Mᵢ) over the partition.');
mc('prob-1-events','Using the machine data (50/30/20% of output; 1/2/3% defective), given an item is defective, what is the probability it came from M₃?',
 ['6/17 ≈ 0.353','0.2','0.03','0.006'],
 'Bayes: P(M₃|D) = P(D|M₃)P(M₃)/P(D) = 0.006/0.017 = 6/17 ≈ 0.353.',
 'Numerator P(D|M₃)P(M₃); denominator P(D) = 0.017.');
mc('prob-1-events','Which statement is NOT a valid rule for a probability measure P?',
 ['P(A∪B) = P(A) + P(B) for all events A, B','P(Ω) = 1','0 ≤ P(A) ≤ 1 for every event A','P(⋃Aᵢ) = Σ P(Aᵢ) for pairwise disjoint Aᵢ'],
 'Additivity only holds for disjoint events. In general P(A∪B) = P(A) + P(B) − P(A∩B).');
mc('prob-1-events','P(A) = P(B) = P(C) = 0.3, each pairwise intersection has probability 0.1, and P(A∩B∩C) = 0.05. Find P(A∪B∪C).',
 ['0.65','0.6','0.9','0.55'],
 'Inclusion–exclusion: 0.9 − 3(0.1) + 0.05 = 0.65.',
 'Add singles, subtract pairs, add back the triple.');

// ---------------------------------------------------------------- PROB: random variables
mc('prob-1-rvs','X takes values 0, 1, 2 with probabilities 0.2, 0.5, 0.3. What is F(1.5) = P(X ≤ 1.5)?',
 ['0.7','0.5','0.3','1'],
 'F(1.5) = P(X=0) + P(X=1) = 0.2 + 0.5 = 0.7. The cdf is a step function that only jumps at 0, 1, 2.');
mc('prob-1-rvs','Which of these is a valid probability density function?',
 ['f(x) = 2x on [0,1], 0 otherwise','f(x) = x on [0,1], 0 otherwise','f(x) = 3x² on [0,2], 0 otherwise','f(x) = 1 − 2x on [0,1], 0 otherwise'],
 '2x ≥ 0 and ∫₀¹ 2x dx = 1. The others integrate to 1/2, 8 and 0 (and 1 − 2x is negative for x > 1/2).');
gap('prob-1-rvs','X has density f(x) = c x² for 0 ≤ x ≤ 1 (0 otherwise).',
 [{before:'Since ∫₀¹ c x² dx = c/3 = 1, c = ', answer:'3', after:'.', why:'The density must integrate to 1.'},
  {before:'P(X ≤ 1/2) = ∫₀^{1/2} 3x² dx = ', answer:'1/8', after:'.', why:'[x³]₀^{1/2} = 1/8.'}]);
tf('prob-1-rvs','Densities and cdfs',
 [['A probability density function can take values greater than 1.', true, 'Density is not probability. For example, Uniform(0, 1/2) has density 2 on its support.'],
  ['For a continuous random variable, P(X = a) = 0 for every a.', true, 'P(X = a) = ∫ₐᵃ f(x) dx = 0.'],
  ['A cdf can decrease on some interval.', false, 'If s < t then {X ≤ s} ⊆ {X ≤ t}, so F(s) ≤ F(t).'],
  ['The cdf of a discrete random variable is a step function.', true, 'It jumps by P(X = k) at each value k and is flat in between.']]);
mc('prob-1-rvs','X has cdf F(x) = 1 − e^{−2x} for x ≥ 0 (and 0 for x < 0). What is its density?',
 ['f(x) = 2e^{−2x} for x ≥ 0','f(x) = e^{−2x} for x ≥ 0','f(x) = −2e^{−2x} for x ≥ 0','f(x) = 1 − 2e^{−2x} for x ≥ 0'],
 'f = F′ = 2e^{−2x}. This is the Exponential(2) distribution.');
mc('prob-1-rvs','For F(x) = 1 − e^{−2x} (x ≥ 0), what is P(1 < X ≤ 2)?',
 ['e^{−2} − e^{−4}','e^{−4} − e^{−2}','1 − e^{−4}','e^{−2}'],
 'P(1 < X ≤ 2) = F(2) − F(1) = (1 − e^{−4}) − (1 − e^{−2}) = e^{−2} − e^{−4}.');
mc('prob-1-rvs','Formally, a random variable is…',
 ['a function from the sample space Ω into ℝ','a variable whose value is chosen at random from ℝ','a subset of the sample space Ω','a probability measure on the events 𝓕'],
 'A random variable X: Ω → ℝ attaches a number X(ω) to each outcome ω. It is a function, not a variable.');
mc('prob-1-rvs','X has pmf p(k) = c/k for k = 1, 2, 3. What is c?',
 ['6/11','1/6','11/6','1/3'],
 'c(1 + 1/2 + 1/3) = c·11/6 = 1, so c = 6/11.');

// ---------------------------------------------------------------- PROB: moments
mc('prob-1-moments','E(X) = 3 and Var(X) = 4. Find E(2X − 1) and Var(2X − 1).',
 ['5 and 16','5 and 8','6 and 16','5 and 7'],
 'E(aX + b) = aE(X) + b = 5. Var(aX + b) = a²Var(X) = 4 × 4 = 16 — the shift b has no effect on variance.');
gap('prob-1-moments','X takes values 0, 1, 2 with probabilities 0.2, 0.5, 0.3.',
 [{before:'E(X) = ', answer:'1.1', after:' and E(X²) = ', answer2:'1.7', after2:'.', why:'E(X) = 0.5 + 0.6 = 1.1; E(X²) = 0.5·1 + 0.3·4 = 1.7.'},
  {before:'Var(X) = E(X²) − (EX)² = ', answer:'0.49', after:'.', why:'1.7 − 1.21 = 0.49.'}]);
mc('prob-1-moments','X ~ Uniform(0,1). What is E(X²)?',
 ['1/3','1/2','1/4','1/12'],
 'E(X²) = ∫₀¹ x² dx = 1/3. (Then Var X = 1/3 − 1/4 = 1/12.)');
tf('prob-1-moments','Covariance and independence',
 [['If Cov(X,Y) = 0 then X and Y are independent.', false, 'Zero covariance does not imply independence. E.g. X ~ Uniform(−1,1) and Y = X²: Cov = E(X³) − E(X)E(X²) = 0, yet Y is a function of X.'],
  ['If X and Y are independent then E(XY) = E(X)E(Y).', true, 'Independence lets the joint density factorise, so the expectation factorises. Hence Cov = 0.'],
  ['Var(X + Y) = Var(X) + Var(Y) for any X and Y.', false, 'Var(X + Y) = Var X + Var Y + 2Cov(X,Y); the covariance term vanishes only if Cov = 0.'],
  ['Var(X − Y) = Var(X) + Var(Y) − 2Cov(X,Y).', true, 'Apply the Var(X + Y) formula to X and −Y: Var(−Y) = Var(Y) and Cov(X,−Y) = −Cov(X,Y).']]);
mc('prob-1-moments','Var(X) = 2, Var(Y) = 3 and Cov(X,Y) = −1. What is Var(X + Y)?',
 ['3','5','4','7'],
 'Var(X + Y) = 2 + 3 + 2(−1) = 3.');
mc('prob-1-moments','Cov(X,Y) = 2, Var(X) = 4, Var(Y) = 9. What is Corr(X,Y)?',
 ['1/3','2/13','1/18','2/9'],
 'Corr = Cov/(σ_X σ_Y) = 2/(2 × 3) = 1/3.');
mc('prob-1-moments','X is continuous with density f. How do you compute E(eˣ)?',
 ['∫ eˣ f(x) dx','e^{E(X)}','∫ x eˣ dx','You must first find the density of eˣ'],
 'The "law of the unconscious statistician": E[g(X)] = ∫ g(x) f(x) dx — no need for the distribution of g(X). In general E(eˣ) ≠ e^{E X}.');
mc('prob-1-moments','What is the largest possible variance of a Bernoulli(p) random variable?',
 ['1/4, at p = 1/2','1/2, at p = 1/2','1, at p = 1','1/4, at p = 1/4'],
 'Var = p(1 − p), a downward parabola maximised at p = 1/2, giving 1/4.');

// ---------------------------------------------------------------- PROB: distributions & MGFs
mc('prob-1-dists','X ~ Poisson(3). What is P(X = 0)?',
 ['e^{−3}','3e^{−3}','0','1 − e^{−3}'],
 'P(X = k) = λᵏe^{−λ}/k!, so P(X = 0) = e^{−3}.');
mc('prob-1-dists','X ~ Binomial(10, 0.3). What are E(X) and Var(X)?',
 ['3 and 2.1','3 and 0.21','3 and 0.9','0.3 and 2.1'],
 'E = np = 3; Var = np(1 − p) = 10 × 0.3 × 0.7 = 2.1.');
mc('prob-1-dists','X ~ Exponential(λ = 2) (rate 2). What is P(X > 1)?',
 ['e^{−2}','1 − e^{−2}','2e^{−2}','e^{−1/2}'],
 'P(X > x) = 1 − F(x) = e^{−λx} = e^{−2}.');
mc('prob-1-dists','Which is the moment generating function of Poisson(λ)?',
 ['exp(λ(eᵗ − 1))','λ/(λ − t)','exp(λt)','(1 − p + peᵗ)ⁿ'],
 'M(t) = Σ eᵗᵏ e^{−λ}λᵏ/k! = e^{−λ} e^{λeᵗ} = exp(λ(eᵗ − 1)). λ/(λ − t) is the Exponential(λ) MGF; the last is Binomial.');
gap('prob-1-dists','A N(μ, σ²) random variable has MGF M(t) = exp(μt + σ²t²/2). X has MGF M_X(t) = exp(2t + 4.5t²).',
 [{before:'So μ = ', answer:'2', after:' and σ² = ', answer2:'9', after2:'.', why:'Match coefficients: μ = 2, and σ²/2 = 4.5 ⇒ σ² = 9.'}]);
mc('prob-1-dists','X ~ Poisson(2) and Y ~ Poisson(3) are independent. What is the distribution of X + Y?',
 ['Poisson(5)','Poisson(6)','Binomial(5, 1/2)','Not Poisson'],
 'the MGF of X + Y is M_X(t)·M_Y(t) = exp(2(eᵗ − 1))·exp(3(eᵗ − 1)) = exp(5(eᵗ − 1)), the Poisson(5) MGF.');
tf('prob-1-dists','Facts about named distributions',
 [['If X ~ Poisson(λ) then E(X) = Var(X).', true, 'Both equal λ.'],
  ['The Cauchy distribution has mean 0.', false, 'Its mean is undefined — the tails are too heavy for ∫ |x| f(x) dx to converge.'],
  ['X ~ Exponential(λ) with rate λ has mean λ.', false, 'The mean is 1/λ (variance 1/λ²).'],
  ['Uniform(a, b) has variance (b − a)²/12.', true, 'E(X²) − (EX)² = (a² + ab + b²)/3 − (a + b)²/4 = (b − a)²/12.']]);
mc('prob-1-dists','X has MGF M(t) = (1 − 2t)^{−3}. What is E(X)?',
 ['6','3','2','12'],
 'E(X) = M′(0). M′(t) = −3(1 − 2t)^{−4}(−2) = 6(1 − 2t)^{−4}, so M′(0) = 6. (This is Gamma with shape 3, scale 2: mean kθ = 6.)',
 'Differentiate and set t = 0.');

// ---------------------------------------------------------------- STATS Ch2
mc('stat-2','Which correctly distinguishes X̲ = (X₁,…,Xₙ) from x̲ = (x₁,…,xₙ)?',
 ['X̲ are random variables representing measurements before observation; x̲ are the fixed observed values','X̲ is the population and x̲ is the sample','X̲ are parameters and x̲ are statistics','There is no difference; both denote the dataset'],
 'Capital letters: the random sample (before observation). Lower case: the realised data (after observation).');
mc('stat-2','For the model X₁,…,Xₙ iid ~ N(μ, σ²) with both parameters unknown, what is the parameter space Θ?',
 ['ℝ × (0, ∞)','ℝ × ℝ','(0, ∞) × (0, ∞)','ℝ × [0, ∞)'],
 'θ = (μ, σ²) with μ ∈ ℝ and σ² > 0, so Θ = ℝ × (0, ∞).');
mc('stat-2','Survey responses are Xᵢ = 1 (prefers space A) or 0 (prefers B), modelled as iid Bernoulli(p). What is Θ in the notes?',
 ['[0, 1]','(0, ∞)','ℝ','{0, 1}'],
 'p is a probability, so Θ = [0, 1]. {0, 1} is the set of possible data values, not parameter values.');
tf('stat-2','Samples, models and statistics',
 [['In this course, a "random sample" means X₁,…,Xₙ are iid.', true, 'Random sample = independent and identically distributed from one population distribution.'],
  ['If the data are modelled as a random sample, they are guaranteed to represent the target population.', false, 'The iid model says nothing about how units were recruited; selection bias or non-response can make it inappropriate.'],
  ['The sample mean X̄ is a parameter.', false, 'X̄ is a statistic — it is calculated from the sample. Parameters (like μ) describe the population.'],
  ['A statistical model is a family of distributions indexed by θ ∈ Θ.', true, 'One distribution for each parameter value.']]);
mc('stat-2','Customer satisfaction ratings ("poor", "fair", "good", "excellent") are which type of data?',
 ['Categorical, ordinal','Categorical, nominal','Discrete numeric','Continuous'],
 'The categories have a natural order but no numerical spacing — ordinal.');
mc('stat-2','"Number of goals scored by the home team" is which type of data, and which model is natural?',
 ['Discrete numeric (a count); e.g. Poisson','Continuous; e.g. Normal','Categorical nominal; e.g. Multinomial','Ordinal; e.g. Bernoulli'],
 'Counts are discrete numeric data; Poisson (or Binomial/Geometric) models are natural.');
mc('stat-2','Sweets of 3 colours are drawn with replacement; (R, B, G) ~ Multinomial(n; p_R, p_B, p_G). How many free parameters are there?',
 ['2','3','1','n'],
 'p_R + p_B + p_G = 1, so once two are known the third is determined.');
mc('stat-2','Why is statistical inference described as "inverse probability"?',
 ['Probability goes from a known θ to data; inference goes from observed data back to the unknown θ','It computes 1 − P(A) for every event','It uses inverse cdfs to simulate data','It inverts the covariance matrix'],
 'Probability: model with known θ ⇒ probabilities of data. Inference: observed data ⇒ learn about θ.');
mc('stat-2','20 students volunteer via a social-media post and 12 prefer space A. What is the main concern about using this as an iid sample from all eligible students?',
 ['Selection bias: volunteering may be related to preference','The sample is too small for the CLT','Preferences are continuous data','p is not in the parameter space'],
 'Self-selection can make the observed students unrepresentative, so the iid model may not describe the target population.');

// ---------------------------------------------------------------- STATS Ch3
mc('stat-3','In frequentist inference, the parameter θ is treated as…',
 ['fixed but unknown','a random variable with a prior distribution','known exactly','a statistic computed from the data'],
 'Frequentists treat θ as fixed; probability describes data and procedures under repeated sampling.');
mc('stat-3','"Over repeated samples, this interval-producing method contains the fixed p in 95% of cases." This is…',
 ['a frequentist confidence-interval statement','a Bayesian credible-interval statement','a p-value','a prior probability'],
 'The 95% describes the long-run coverage of a random procedure, with p fixed — frequentist.');
mc('stat-3','"Given these data and the stated prior, the posterior probability that p > 0.5 is 0.91." This is…',
 ['a Bayesian statement about p','a frequentist confidence statement','a statement about repeated sampling','a hypothesis test at level 0.91'],
 'A probability about the parameter itself, conditional on data and prior — only possible in the Bayesian framework.');
tf('stat-3','Interpreting inferential statements',
 [['After observing data, a 95% confidence interval [0.41, 0.58] contains p with probability 0.95.', false, 'Once computed the endpoints are fixed and p is fixed, so it either contains p or not. The 95% refers to the procedure over repeated samples.'],
  ['A 95% credible interval [L, U] satisfies P(θ ∈ [L, U] | x̲) = 0.95.', true, 'That is exactly the Bayesian definition.'],
  ['A Bayesian prior must represent purely personal belief.', false, 'Priors can encode substantive information, deliberately weak information, or a reference convention.'],
  ['Failing to reject H₀ proves that H₀ is true.', false, 'It only means the data are compatible with H₀.']]);
mc('stat-3','Which inferential task is NOT examined in MAS2901?',
 ['Prediction','Point estimation','Interval estimation','Hypothesis testing'],
 'The course covers point estimation, interval estimation and hypothesis testing; prediction is for future courses.');
mc('stat-3','"Assess the claim that the two study spaces are equally popular" is which inferential task?',
 ['Hypothesis testing','Point estimation','Interval estimation','Prediction'],
 'Formalise H₀: p = 0.5 and judge whether the data are compatible with it.');
mc('stat-3','What does Bayesian inference combine the prior with the data to produce?',
 ['A posterior distribution π(θ | data)','A p-value','The sampling distribution of an estimator','A confidence interval'],
 'Prior π(θ) + data ⇒ posterior π(θ | data).');
mc('stat-3','Which of these is a Bayesian summary?',
 ['A credible interval','A confidence interval','A p-value','A standard error'],
 'Credible intervals, posterior means and Bayes factors are Bayesian; the others are frequentist.');

// ---------------------------------------------------------------- LA 1.1 Fields
mc('la-1.1','Which of these (with the usual + and ·) is NOT a field?',
 ['ℤ','ℚ','ℤ₅','ℂ'],
 'In ℤ, 2 has no multiplicative inverse (no integer β with 2β = 1), so axiom (viii) fails. ℤ₅ is a field because 5 is prime.');
mc('la-1.1','Which field axiom fails for the integers ℤ?',
 ['Every nonzero element has a multiplicative inverse','Addition is commutative','There is an additive identity 0','Multiplication distributes over addition'],
 'E.g. 2 has no inverse in ℤ. Everything else holds.');
mc('la-1.1','Is ℤ₆ (integers mod 6) a field?',
 ['No — 2 has no multiplicative inverse mod 6','Yes — ℤₙ is always a field','Yes, because every element has an additive inverse','No — ℤ₆ has no additive identity'],
 '2·3 = 0 in ℤ₆ and 2·k is always even mod 6, never 1. ℤₚ is a field only for p prime.');
gap('la-1.1','Arithmetic in the field ℤ₇.',
 [{before:'The multiplicative inverse of 3 in ℤ₇ is ', answer:'5', after:'.', why:'3 × 5 = 15 = 2×7 + 1 ≡ 1 (mod 7).'},
  {before:'2 + 6 = ', answer:'1', after:' in ℤ₇.', why:'8 ≡ 1 (mod 7).'}]);
tf('la-1.1','Fields',
 [['Every nonzero element of a field has a multiplicative inverse.', true, 'Axiom (viii).'],
  ['In a field, 0 has a multiplicative inverse.', false, 'Axiom (viii) is only for nonzero elements; 0·β = 0 ≠ 1.'],
  ['Mat₂ₓ₂(ℝ) with the usual + and matrix multiplication is a field.', false, 'Matrix multiplication is not commutative and nonzero singular matrices have no inverse.'],
  ['ℤₚ is a field for every prime p.', true, 'This gives the finite fields in the notes.']]);
mc('la-1.1','Which property does ℕ = {1, 2, 3, …} fail?',
 ['Existence of additive inverses','Commutativity of addition','Associativity of multiplication','Distributivity'],
 'The notes list (iii), (iv) and (viii) as failing for ℕ: no 0, no negatives, no reciprocals.');
mc('la-1.1','Apart from missing inverses, which field axiom fails for Mat₂ₓ₂(ℂ)?',
 ['Commutativity of multiplication','Associativity of addition','Existence of an additive identity','Distributivity'],
 'AB ≠ BA in general — see the example in the notes with two 2×2 matrices.');
mc('la-1.1','Compute 3 · 4 in the field ℤ₅.',
 ['2','12','7','1'],
 '12 = 2×5 + 2, so 3·4 = 2 in ℤ₅.');

// ---------------------------------------------------------------- LA 1.2 Vector spaces
mc('la-1.2','In any vector space V over F, what is 0 • u (the scalar 0 times a vector u)?',
 ['The zero vector 0 ∈ V','The scalar 0 ∈ F','u','It depends on V'],
 'Proposition 1.2.4(iii): 0 • u = 0 (the zero vector) for all u ∈ V.');
mc('la-1.2','Which of these is NOT a vector space over ℝ with the usual operations?',
 ['Polynomials of degree exactly 2','ℝ₂[x] (degree at most 2)','Mat₂ₓ₃(ℝ)','All functions ℝ → ℝ'],
 'x² + (−x² + x) = x has degree 1, so the set is not closed under addition (and has no zero polynomial).');
tf('la-1.2','Vector space examples',
 [['ℂ² is a vector space over ℂ.', true, 'Fⁿ is a vector space over any field F.'],
  ['F^∞, the set of sequences over F, is a vector space over F.', true, 'Example 1.2.3(iv), with termwise operations.'],
  ['{(x, y) ∈ ℝ² : x ≥ 0} with the usual operations is a vector space.', false, '(−1) • (1, 0) = (−1, 0) is not in the set — no additive inverses.'],
  ['In a vector space, the additive inverse of each vector is unique.', true, 'Proposition 1.2.4(ii): if u + v = 0 = u + v′ then v = v′.']]);
mc('la-1.2','On ℝ², keep the usual addition but define λ • (x, y) = (λx, 0). Which axiom fails?',
 ['1 • u = u','Commutativity of addition','Existence of a zero vector','α • (u + v) = α • u + α • v'],
 '1 • (x, y) = (x, 0) ≠ (x, y) when y ≠ 0. The associativity and both distributive laws still hold.');
mc('la-1.2','Which identity holds in every vector space?',
 ['(−1) • u = −u','λ • u = 0 implies λ = 0 and u = 0','u + u = u for all u','1 • u = 0'],
 'Proposition 1.2.4(v). (λu = 0 implies λ = 0 OR u = 0, not both.)');
mc('la-1.2','What is the zero vector in F(ℝ), the space of all functions ℝ → ℝ?',
 ['The constant function f(x) = 0','The identity function f(x) = x','The number 0','There is none'],
 'With (f + g)(x) = f(x) + g(x), the function that is 0 everywhere is the additive identity.');
mc('la-1.2','What is the zero vector of Mat₂ₓ₂(ℝ)?',
 ['The 2×2 zero matrix','The identity matrix I','The real number 0','Any singular matrix'],
 'A + O = A for the zero matrix O. (I is the identity for multiplication, not addition.)');
mc('la-1.2','The positive reals ℝ₊ form a vector space over ℝ with "addition" u ⊕ v = uv and scalar multiplication λ ⊙ u = u^λ. What is the zero vector?',
 ['1','0','e','−1'],
 'We need u ⊕ 0_V = u, i.e. u · 0_V = u, so 0_V = 1. (0 is not even in ℝ₊.)',
 'Solve u ⊕ z = u for z.');

// ---------------------------------------------------------------- LA 1.3 Subspaces
mc('la-1.3','Which is a subspace of ℝ³?',
 ['{(x, y, z) : x + 2y − z = 0}','{(x, y, z) : x + 2y − z = 1}','{(x, y, z) : xyz = 0}','{(x, y, z) : x ≥ 0}'],
 'A homogeneous linear equation gives the null space of (1 2 −1). The "= 1" plane misses 0; xyz = 0 is not closed under addition ((1,1,0) + (0,0,1)); x ≥ 0 is not closed under multiplication by −1.');
mc('la-1.3','Is W = {A ∈ Mat₂ₓ₂(ℝ) : A is not invertible} a subspace? (Exercise 1.3.8)',
 ['No — diag(1,0) + diag(0,1) = I is invertible, so W is not closed under addition','Yes — it contains the zero matrix','Yes — it is closed under scalar multiplication','No — it does not contain the zero matrix'],
 'W contains 0 and is closed under scalar multiplication, but the sum of two singular matrices can be invertible.');
tf('la-1.3','Subspace facts',
 [['If 0 ∉ W then W is not a subspace.', true, 'Every subspace contains 0 (Remark 1.3.4) — a good first check.'],
  ['If 0 ∈ W then W is a subspace.', false, 'Containing 0 is necessary, not sufficient — e.g. the parabola y = x² contains 0.'],
  ['null(A) is a subspace of Fⁿ for any m×n matrix A.', true, 'A(x + y) = Ax + Ay = 0 and A(λx) = λAx = 0 (Example 1.3.9).'],
  ['The union of two subspaces is always a subspace.', false, 'x-axis ∪ y-axis in ℝ²: (1,0) + (0,1) = (1,1) is in neither.']]);
mc('la-1.3','Theorem 1.3.3 (subspace test): a subset W ⊆ V is a subspace if and only if…',
 ['W is nonempty and closed under addition and scalar multiplication','W is closed under addition','W contains 0 and is closed under multiplication of vectors','W is finite'],
 'Nonempty + closed under + and •. The other axioms are inherited from V.');
mc('la-1.3','Let U be the x-axis and W the y-axis in ℝ². What is U + W?',
 ['ℝ²','U ∪ W','{0}','The line y = x'],
 'Every (a, b) = (a, 0) + (0, b), so U + W = ℝ² — the smallest subspace containing both.');
mc('la-1.3','Which of these is a subspace of ℝ₂[x]?',
 ['{p : p(1) = 0}','{p : p(0) = 1}','{p : deg p = 2}','{p : p has integer coefficients}'],
 'p(1) = q(1) = 0 ⇒ (p + q)(1) = 0 and (λp)(1) = 0. The others fail: p(0) = 1 misses 0; degree exactly 2 is not closed under +; integer coefficients fail under multiplication by 1/2.');
mc('la-1.3','For a matrix A and b ≠ 0, why is {x : Ax = b} not a subspace?',
 ['It does not contain 0, since A0 = 0 ≠ b','It is always empty','It is not closed under scalar multiplication only when b is negative','It is a subspace'],
 'A0 = 0 ≠ b, so the zero vector is missing.');
mc('la-1.3','Why is the parabola {(x, y) : y = x²} not a subspace of ℝ²?',
 ['(1,1) + (1,1) = (2,2) is not on the parabola','It does not contain (0,0)','It is empty','ℝ² has no nontrivial subspaces'],
 '2 ≠ 2² = 4, so it is not closed under addition, even though it contains 0.');

// ---------------------------------------------------------------- LA 1.4 Span
mc('la-1.4','What is span{(1,0,0), (0,1,0)} in ℝ³?',
 ['The xy-plane {(x, y, 0)}','All of ℝ³','The x-axis','The line through (1,1,0)'],
 'a(1,0,0) + b(0,1,0) = (a, b, 0).');
gap('la-1.4','Example 1.4.3: v₁ = (1,1,0,0), v₂ = (0,2,1,0), v₃ = (1,−1,0,1). Write (−1,7,1,−3) = a v₁ + b v₂ + c v₃.',
 [{before:'Comparing the 3rd and 4th components: b = ', answer:'1', after:' and c = ', answer2:'-3', after2:'.', why:'Only v₂ has a 3rd component and only v₃ has a 4th.'},
  {before:'From the 1st component a + c = −1, so a = ', answer:'2', after:' (check the 2nd component: 2 + 2 + 3 = 7 ✓).', why:'a = −1 − c = −1 + 3 = 2.'}]);
mc('la-1.4','Is {v₁, v₂, v₃} (three vectors) a spanning set of ℝ⁴?',
 ['No — the 4×3 matrix (v₁:v₂:v₃) has rank at most 3, so Ax = b is inconsistent for some b','Yes — any three nonzero vectors span ℝ⁴','Yes, because (−1,7,1,−3) lies in their span','It depends on whether they are independent'],
 'Three vectors can span at most a 3-dimensional subspace; you can always find a b with Ax = b inconsistent.');
tf('la-1.4','Properties of span',
 [['span ∅ = {0}.', true, 'The convention in Definition 1.4.2.'],
  ['Each vⱼ lies in span{v₁,…,vₙ}.', true, 'vⱼ = 0v₁ + … + 1vⱼ + … + 0vₙ.'],
  ['span{v₁,…,vₙ} is the smallest subspace of V containing v₁,…,vₙ.', true, 'Proposition 1.4.4(3).'],
  ['If v ≠ 0 then span{v, 2v} is a plane.', false, '2v is a multiple of v, so the span is the line through v.']]);
mc('la-1.4','Let A = (v₁ : … : vₙ). When is b ∈ col(A)?',
 ['Exactly when Ax = b has a solution','Exactly when Ax = 0 has only the trivial solution','Exactly when b is a column of A','Exactly when A is square'],
 'Theorem 1.4.5 / Remark 1.4.7.');
mc('la-1.4','What is span{1 + x, 1 − x} in ℝ₁[x]?',
 ['All of ℝ₁[x]','Only the constants','Only multiples of 1 + x','{0}'],
 '1 = ½[(1+x) + (1−x)] and x = ½[(1+x) − (1−x)], so both basis polynomials are in the span.');
mc('la-1.4','For which k is (1, k) ∈ span{(2, 6)}?',
 ['k = 3','k = 6','k = 1/3','Every k'],
 '(1, k) = a(2, 6) ⇒ a = 1/2 ⇒ k = 3.');
mc('la-1.4','What is span{(1,1), (2,2), (3,3)} in ℝ²?',
 ['The line y = x','All of ℝ²','A 3-dimensional space','{0}'],
 'All three vectors are multiples of (1,1).');

// ---------------------------------------------------------------- LA 1.5 Linear independence
gap('la-1.5','Exercise 1.5.4: v₁ = (1,1,1), v₂ = (0,1,−1), v₃ = (1,2,1). Is {v₁, v₂, v₃} linearly independent?',
 [{before:'det(v₁ : v₂ : v₃) = ', answer:'1', after:'.', why:'Expanding along the first row of [[1,0,1],[1,1,2],[1,−1,1]]: 1(1 + 2) − 0 + 1(−1 − 1) = 3 − 2 = 1.'},
  {before:'Since this is nonzero, null(A) = {0} and the set is linearly ', answer:['independent','linearly independent'], after:'.', why:'Nonzero determinant ⇒ Ax = 0 only has x = 0 ⇒ columns independent (Prop. 1.5.9).'}]);
mc('la-1.5','Exercise 1.5.5: is {cos²x, cos 2x, 3} linearly independent in F(ℝ)?',
 ['No: 6cos²x − 3cos 2x − 3 = 0 for all x','Yes: no function is a multiple of another','Yes: they are different kinds of function','No: cos 2x = 2cos x'],
 'cos 2x = 2cos²x − 1, so 6cos²x − 3(2cos²x − 1) − 3 = 0 — a nontrivial combination equal to the zero function.');
tf('la-1.5','Independence facts',
 [['Any set containing the zero vector is linearly dependent.', true, '1·0 = 0 is a nontrivial solution.'],
  ['A single vector {v} is linearly independent if and only if v ≠ 0.', true, 'av = 0 with v ≠ 0 forces a = 0.'],
  ['If {v₁, v₂, v₃} is dependent then v₃ must be a linear combination of v₁ and v₂.', false, 'Some vector is a combination of the others, not necessarily v₃ — e.g. v₁ = 0, v₂ = e₁, v₃ = e₂.'],
  ['The columns of A are linearly independent if and only if null(A) = {0}.', true, 'Proposition 1.5.9.']]);
mc('la-1.5','For which k is {(1, k), (k, 4)} linearly dependent in ℝ²?',
 ['k = ±2','k = 2 only','k = 4','k = 0'],
 'Dependent ⟺ det [[1, k], [k, 4]] = 4 − k² = 0 ⟺ k = ±2.');
mc('la-1.5','Why does linear independence matter (Proposition 1.5.6)?',
 ['Every vector in the span has a unique expression as a linear combination','It guarantees the vectors span V','It guarantees the vectors are orthogonal','It means none of the vectors is zero, and nothing more'],
 'Independent ⟺ coefficients are uniquely determined.');
mc('la-1.5','Is {(1,2,3), (2,4,6), (0,1,0)} linearly independent?',
 ['No — (2,4,6) = 2(1,2,3)','Yes — no vector is zero','Yes — there are 3 vectors in ℝ³','Cannot tell without a determinant'],
 '2v₁ − v₂ + 0v₃ = 0 is a nontrivial relation.');
mc('la-1.5','What does the Linear Dependence Lemma (1.5.8) say for a dependent set S?',
 ['Some vⱼ ∈ span(S ∖ {vⱼ}), and removing it leaves the span unchanged','Every vector in S is a combination of the others','S contains the zero vector','S has more vectors than dim V'],
 'Only one suitable vⱼ is guaranteed.');
mc('la-1.5','Is {1 + x, x + x², 1 + x²} linearly independent in ℝ₂[x]?',
 ['Yes','No — the sum is 2(1 + x + x²)','No — (1 + x) − (x + x²) = 1 − x²','No — three polynomials in ℝ₂[x] are always dependent'],
 'a(1 + x) + b(x + x²) + c(1 + x²) = 0 gives a + c = 0, a + b = 0, b + c = 0, forcing a = b = c = 0.');

// ---------------------------------------------------------------- LA 1.6 Bases
mc('la-1.6','A set B is a basis of V if…',
 ['B spans V and B is linearly independent','B spans V','B is linearly independent','B contains the standard basis vectors'],
 'Definition 1.6.1: both conditions. Equivalently every vector is a unique linear combination of B.');
gap('la-1.6','Example 1.6.3: v₁ = (1,2,1), v₂ = (2,9,0), v₃ = (3,3,4). Show they form a basis of ℝ³.',
 [{before:'det(v₁ : v₂ : v₃) = ', answer:'-1', after:'.', why:'Rows [1,2,3],[2,9,3],[1,0,4]: 1(36 − 0) − 2(8 − 3) + 3(0 − 9) = 36 − 10 − 27 = −1.'},
  {before:'The determinant is nonzero, so the columns are independent and (3 vectors in ℝ³) form a ', answer:'basis', after:'.', why:'Independent and spanning (Ax = b always solvable).'}]);
mc('la-1.6','What does the Basis Reduction Theorem (1.6.5) guarantee?',
 ['Every finite spanning set of V ≠ {0} contains a basis of V','Every independent set can be reduced to a basis','Every basis has the same number of elements','Every vector space has a finite basis'],
 'Remove redundant vectors (Linear Dependence Lemma) until the set is independent but still spans.');
mc('la-1.6','Which of these is a basis of ℝ₂[x]?',
 ['{1, 1 + x, 1 + x + x²}','{x, x²}','{1, x, x², x³}','{1 + x, 2 + 2x, x²}'],
 'Three independent polynomials in the 3-dimensional ℝ₂[x] ({x, x²} cannot give constants; x³ ∉ ℝ₂[x]; 2 + 2x = 2(1 + x)).');
tf('la-1.6','Bases',
 [['ℝ[x] (all polynomials) is finite dimensional.', false, 'Any finite set of polynomials has a maximum degree, so it cannot span ℝ[x].'],
  ['Every finite-dimensional vector space has a basis.', true, 'Theorem 1.6.10 (via basis reduction).'],
  ['A vector space has only one basis.', false, 'E.g. {(1,0),(0,1)} and {(1,1),(1,−1)} are both bases of ℝ².'],
  ['Relative to a fixed basis, every vector has unique coordinates.', true, 'Spanning gives existence; independence gives uniqueness.']]);
mc('la-1.6','Write (3, 5) in the basis {(1,1), (1,−1)}. The coordinates (a, b) are…',
 ['(4, −1)','(−1, 4)','(3, 5)','(1, 4)'],
 'a + b = 3 and a − b = 5 ⇒ a = 4, b = −1.');
mc('la-1.6','Which is a basis of Mat₂ₓ₂(ℝ)?',
 ['The four matrix units E₁₁, E₁₂, E₂₁, E₂₂','{I}','{I, E₁₂}','The two diagonal units E₁₁, E₂₂'],
 '[[a,b],[c,d]] = aE₁₁ + bE₁₂ + cE₂₁ + dE₂₂ uniquely, so dim = 4.');
mc('la-1.6','Find a basis of null(A) for A = (1 2).',
 ['{(−2, 1)}','{(1, 2)}','{(2, −1), (−2, 1)}','{(1,0), (0,1)}'],
 'x + 2y = 0 ⇒ (x, y) = y(−2, 1). A single nonzero vector is independent.');

// ---------------------------------------------------------------- LA 1.7 Dimension (Challenge)
mc('la-1.7','What is dim ℝ₃[x] (real polynomials of degree at most 3)?',
 ['4','3','∞','8'],
 'Basis {1, x, x², x³}: dim ℝₙ[x] = n + 1.');
mc('la-1.7','What is dim Mat₂ₓ₃(ℝ)?',
 ['6','5','3','2'],
 'The 6 matrix units form a basis; dim Matₘₓₙ = mn.');
mc('la-1.7','What is the dimension of ℂ as a vector space over ℝ, and over ℂ?',
 ['2 and 1','1 and 1','2 and 2','1 and 2'],
 'Over ℝ, {1, i} is a basis; over ℂ, {1} suffices (Remark 1.7.9).');
tf('la-1.7','Corollary 1.7.12 in ℝ³ (dim = 3)',
 [['Any 4 vectors in ℝ³ are linearly dependent.', true, 'm > n ⇒ dependent.'],
  ['No set of 2 vectors can span ℝ³.', true, 'm < n ⇒ not spanning.'],
  ['Any 3 linearly independent vectors in ℝ³ form a basis.', true, 'm = n: independent ⟺ spanning ⟺ basis.'],
  ['Any 3 vectors in ℝ³ form a basis.', false, 'They could be dependent, e.g. three vectors in one plane.']]);
mc('la-1.7','The Exchange Theorem says: if {v₁,…,vᵣ} spans V and {w₁,…,wₙ} is linearly independent in V, then…',
 ['n ≤ r','n ≥ r','n = r','n + r = dim V'],
 'An independent set can never be larger than a spanning set — this gives the well-definedness of dimension.');
gap('la-1.7','Exercise 1.7.8: find dim null(A) for the 4×5 matrix A with rows (2,2,−1,0,1), (−1,−1,2,−3,1), (1,1,−2,0,−1), (0,0,1,1,1).',
 [{before:'Row reducing, the number of pivot columns is ', answer:'3', after:'.', why:'Using row 3 as pivot: r₁ − 2r₃ = (0,0,3,0,3), r₂ + r₃ = (0,0,0,−3,0), and r₄ becomes zero after subtracting. Pivots in columns 1, 3, 4.'},
  {before:'So there are 5 − 3 free variables and dim null(A) = ', answer:'2', after:'.', why:'x₂ and x₅ are free; each gives one basis vector of null(A).'}],
 'Count pivots after reducing to echelon form; free variables = columns − pivots.');
mc('la-1.7','What is the dimension of W = {(x, y, z, w) ∈ ℝ⁴ : x + y + z + w = 0}?',
 ['3','4','1','2'],
 'One linear constraint on 4 variables: y, z, w are free (x = −y − z − w), giving 3 basis vectors.');
mc('la-1.7','dim V = 5 and S is a set of 5 vectors with span S = V. What can you conclude?',
 ['S is a basis of V','S might be dependent','S has a proper subset that spans V','Nothing without more information'],
 'Corollary 1.7.12(iii): with exactly n vectors, spanning ⟺ independent ⟺ basis.');
mc('la-1.7','U is a subspace of a finite-dimensional V with dim U = dim V. Then…',
 ['U = V','U could be a proper subspace','U = {0}','dim U must be 0'],
 'A basis of U is n independent vectors in V, so by Corollary 1.7.12(iii) it is also a basis of V; hence U = V.');
mc('la-1.7','What is the dimension of the space of symmetric 2×2 real matrices?',
 ['3','4','2','1'],
 '[[a, b], [b, c]] = aE₁₁ + cE₂₂ + b(E₁₂ + E₂₁): basis of size 3.');

// ---------------------------------------------------------------- VC 1.1 Vectors
mc('vc-1.1','Find the area of the parallelogram with sides a = (1,1,1) and b = (−4,3,2).',
 ['√86','86','√14','12'],
 'a × b = (1·2 − 1·3, 1·(−4) − 1·2, 1·3 − 1·(−4)) = (−1, −6, 7); area = ‖a × b‖ = √(1 + 36 + 49) = √86.');
gap('vc-1.1','Let a = (1, 2, 0) and b = (0, 1, 3).',
 [{before:'a · b = ', answer:'2', after:'.', why:'1·0 + 2·1 + 0·3 = 2.'},
  {before:'a × b = ', answer:['(6,-3,1)','6,-3,1'], after:' (write as (x,y,z)).', why:'(2·3 − 0·1, 0·0 − 1·3, 1·1 − 2·0) = (6, −3, 1).'}]);
mc('vc-1.1','What is the angle between (1, 0, 1) and (0, 1, 1)?',
 ['π/3','π/4','π/6','π/2'],
 'cos θ = a·b/(‖a‖‖b‖) = 1/(√2 · √2) = 1/2, so θ = π/3.');
tf('vc-1.1','Dot and cross products',
 [['a × b is orthogonal to both a and b.', true, 'Geometric property of the cross product.'],
  ['a × b = b × a.', false, 'The cross product is anti-commutative: b × a = −(a × b).'],
  ['a · a = ‖a‖².', true, 'Sum of squared components.'],
  ['If a · b = 0 with a, b nonzero, then a and b are parallel.', false, 'Zero dot product means orthogonal; parallel vectors have a × b = 0.']]);
mc('vc-1.1','What is the unit vector in the direction of (3, 0, 4)?',
 ['(3/5, 0, 4/5)','(3, 0, 4)/25','(1, 0, 1)','(3/7, 0, 4/7)'],
 '‖(3,0,4)‖ = 5, so û = (3/5, 0, 4/5).');
mc('vc-1.1','For which k is (1, k, 2) orthogonal to (3, 1, −1)?',
 ['k = −1','k = 1','k = 5','k = −5'],
 '3 + k − 2 = 0 ⇒ k = −1.');
mc('vc-1.1','What is e_x × e_y?',
 ['e_z','−e_z','0','e_x'],
 'The right-handed Cartesian basis: e_x × e_y = e_z.');
mc('vc-1.1','‖a‖ = 2, ‖b‖ = 3 and the angle between them is π/6. What is ‖a × b‖?',
 ['3','3√3','6','1.5'],
 '‖a × b‖ = ‖a‖‖b‖|sin θ| = 2 × 3 × 1/2 = 3.');

// ---------------------------------------------------------------- VC 1.2 Coordinates
mc('vc-1.2','Express the point (x, y) = (0, −2) in plane polars (ρ, φ) with 0 ≤ φ < 2π.',
 ['(2, 3π/2)','(2, −π/2)','(−2, π/2)','(2, π/2)'],
 'ρ = 2 ≥ 0 and the point is on the negative y-axis: φ = 3π/2 (−π/2 is outside the range 0 ≤ φ < 2π).');
mc('vc-1.2','In spherical polars, r = 2, θ = π/2, φ = π/2. What are the Cartesian coordinates?',
 ['(0, 2, 0)','(2, 0, 0)','(0, 0, 2)','(0, 2, 2)'],
 'x = r sinθ cosφ = 0, y = r sinθ sinφ = 2, z = r cosθ = 0.');
mc('vc-1.2','In the notes’ spherical polars (r, θ, φ), what does θ measure?',
 ['The angle from the positive z-axis, 0 ≤ θ ≤ π','The angle from the positive x-axis in the xy-plane, 0 ≤ θ < 2π','The distance from the z-axis','The angle from the xy-plane'],
 'θ is the polar angle from the z-axis; φ is the azimuthal angle as in plane polars.');
mc('vc-1.2','In cylindrical polars (ρ, φ, z), what is ρ?',
 ['√(x² + y²), the distance from the z-axis','√(x² + y² + z²), the distance from the origin','The angle from the x-axis','The height above the xy-plane'],
 'ρ is the perpendicular distance from the z-axis.');
gap('vc-1.2','Convert the Cartesian point (1, 1, √2) to spherical polars (r, θ, φ).',
 [{before:'r = ', answer:'2', after:'.', why:'r = √(1 + 1 + 2) = 2.'},
  {before:'cos θ = z/r = √2/2, so θ = ', answer:['π/4','pi/4'], after:' (and φ = π/4 too).', why:'arccos(√2/2) = π/4.'}]);
tf('vc-1.2','Coordinate systems',
 [['The basis vectors e_ρ and e_φ point in the same directions at every point.', false, 'They vary with position — they point in the directions of increasing ρ and φ locally.'],
  ['In spherical polars, r = ‖x‖.', true, 'Example 1.2 in the notes.'],
  ['The surface r = 1 is the unit sphere.', true, 'All points at distance 1 from the origin.'],
  ['In cylindrical polars, the surface ρ = 1 is a sphere.', false, 'It is a cylinder of radius 1 about the z-axis.']]);
mc('vc-1.2','What is the surface x² + y² = 4 in cylindrical polars?',
 ['ρ = 2','ρ = 4','r = 2','φ = 2'],
 'x² + y² = ρ², so ρ = 2 — a cylinder.');
mc('vc-1.2','What is the cone z = √(x² + y²) (z ≥ 0) in spherical polars?',
 ['θ = π/4','r = 1','φ = π/4','θ = π/2'],
 'r cos θ = r sin θ ⇒ tan θ = 1 ⇒ θ = π/4.');

// ---------------------------------------------------------------- VC 1.3 Fields & gradient
mc('vc-1.3','Find ∇f for f(x, y, z) = x²y + yz³.',
 ['(2xy, x² + z³, 3yz²)','(2xy, x² + 3yz², z³)','(2x, 1 + 3z², 3z²)','2xy + x² + z³ + 3yz²'],
 '∂f/∂x = 2xy, ∂f/∂y = x² + z³, ∂f/∂z = 3yz². The gradient is a vector.');
mc('vc-1.3','Which of these is naturally a vector field?',
 ['Wind velocity on a weather map','Temperature on a weather map','Air pressure at each point','Height of terrain'],
 'Velocity has a magnitude and direction at each point: ℝ² → ℝ². The others are scalar fields.');
gap('vc-1.3','Let f(x, y, z) = x e^{yz}. Evaluate its partial derivatives at (1, 0, 2).',
 [{before:'∂f/∂y = xz e^{yz}, which at (1, 0, 2) equals ', answer:'2', after:'.', why:'1 · 2 · e⁰ = 2.'},
  {before:'∂f/∂z = xy e^{yz}, which at (1, 0, 2) equals ', answer:'0', after:'.', why:'y = 0 kills it.'}]);
mc('vc-1.3','What is ∂/∂x of f(x, y) = sin(xy)?',
 ['y cos(xy)','cos(xy)','x cos(xy)','−y cos(xy)'],
 'Chain rule, treating y as a constant.');
tf('vc-1.3','Fields and partial derivatives',
 [['The gradient of a scalar field is a scalar field.', false, '∇f is a vector field.'],
  ['A vector field is a map ℝⁿ → ℝᵐ with m > 1.', true, 'The definition in §1.3.1.'],
  ['When computing ∂f/∂x, y and z are treated as constants.', true, 'That is what "partial" means.'],
  ['f is continuous at a if f(x) → f(a) as x → a along every path.', true, 'The informal meaning of lim_{x→a} f(x) = f(a).']]);
mc('vc-1.3','Find ∇f for f(x, y) = ln(x² + y²).',
 ['(2x/(x² + y²), 2y/(x² + y²))','(1/(x² + y²), 1/(x² + y²))','(2x, 2y)','(x/(x² + y²), y/(x² + y²))'],
 'Chain rule: ∂f/∂x = 2x/(x² + y²), similarly for y.');
mc('vc-1.3','In 3D, let f = r = ‖x‖. What is ∇f (for x ≠ 0)?',
 ['x/r (the unit radial vector)','x','1','r x'],
 '∂r/∂x = x/r, etc., so ∇r = (x, y, z)/r = e_r.');
mc('vc-1.3','Which product rule holds for scalar fields f and g?',
 ['∇(fg) = f∇g + g∇f','∇(fg) = ∇f ∇g','∇(fg) = f∇g − g∇f','∇(fg) = (∇f)·(∇g)'],
 'Apply the ordinary product rule to each partial derivative.');

// ---------------------------------------------------------------- VC 1.4 Double integrals
gap('vc-1.4','Example 1.4: evaluate I = ∫₀¹ ∫_{x²}^{x} xy dy dx.',
 [{before:'The inner integral gives x(x² − x⁴)/2, so I = ½∫₀¹ (x³ − x⁵) dx and ∫₀¹ (x³ − x⁵) dx = ', answer:'1/12', after:'.', why:'1/4 − 1/6 = 1/12.'},
  {before:'Hence I = ', answer:'1/24', after:'.', why:'½ × 1/12.'}]);
mc('vc-1.4','Evaluate ∬_R (x + y) dA over the rectangle R = [0, 2] × [0, 1].',
 ['3','2','4','5/2'],
 '∫₀² ∫₀¹ (x + y) dy dx = ∫₀² (x + ½) dx = 2 + 1 = 3.');
mc('vc-1.4','Reverse the order of integration in ∫₀¹ ∫_{x²}^{x} f(x, y) dy dx.',
 ['∫₀¹ ∫_{y}^{√y} f dx dy','∫₀¹ ∫_{x²}^{x} f dx dy','∫₀¹ ∫_{√y}^{y} f dx dy','∫₀¹ ∫₀¹ f dx dy'],
 'The region is x² ≤ y ≤ x for 0 ≤ x ≤ 1, i.e. y ≤ x ≤ √y for 0 ≤ y ≤ 1.',
 'Sketch the region between y = x² and y = x.');
mc('vc-1.4','What is the area between y = x and y = x² for 0 ≤ x ≤ 1?',
 ['1/6','1/2','1/3','1/12'],
 '∫₀¹ (x − x²) dx = 1/2 − 1/3 = 1/6.');
mc('vc-1.4','Evaluate ∬ (x² + y²) dA over the disc x² + y² ≤ 4.',
 ['8π','16π/3','4π','32π'],
 'Plane polars: ∫₀^{2π} ∫₀² ρ² · ρ dρ dφ = 2π · 16/4 = 8π. (16π/3 comes from forgetting the ρ in dA.)',
 'dA = ρ dρ dφ.');
tf('vc-1.4','Double integrals',
 [['Non-constant limits can only appear on the inner integral.', true, 'The outer limits must be constants.'],
  ['In plane polars, dA = dρ dφ.', false, 'dA = ρ dρ dφ.'],
  ['∬_R 1 dA is the area of R.', true, 'Setting f = 1.'],
  ['Changing the order of integration never requires changing the limits.', false, 'Only for rectangles; in general you must re-derive the limits from the region.']]);
mc('vc-1.4','Evaluate ∫₀¹ ∫₀¹ e^{x + y} dx dy.',
 ['(e − 1)²','e² − 1','e − 1','2(e − 1)'],
 'The integrand factorises: (∫₀¹ eˣ dx)(∫₀¹ eʸ dy) = (e − 1)².');
mc('vc-1.4','What is the area of the quarter disc x² + y² ≤ 9, x ≥ 0, y ≥ 0?',
 ['9π/4','9π','3π/2','9π/2'],
 '∫₀^{π/2} ∫₀³ ρ dρ dφ = (π/2)(9/2) = 9π/4.');

// ---------------------------------------------------------------- VC 1.5 Triple integrals
mc('vc-1.5','What is the volume element in spherical polars (r, θ, φ)?',
 ['r² sin θ dr dθ dφ','r dr dθ dφ','r² dr dθ dφ','sin θ dr dθ dφ'],
 'dV = r² sin θ dr dθ dφ.');
mc('vc-1.5','What is the volume element in cylindrical polars (ρ, φ, z)?',
 ['ρ dρ dφ dz','dρ dφ dz','ρ² dρ dφ dz','ρ sin φ dρ dφ dz'],
 'The plane-polar area element ρ dρ dφ times dz.');
gap('vc-1.5','Example 1.6: integrate f = z over the hemisphere bounded by z = 0 and z = √(1 − x² − y²).',
 [{before:'After the z-integral, I = ½∬_R (1 − x² − y²) dA over the unit disc. In polars, ∫₀¹ (1 − ρ²) ρ dρ = ', answer:'1/4', after:'.', why:'1/2 − 1/4 = 1/4.'},
  {before:'So I = ½ × 2π × 1/4 = ', answer:['π/4','pi/4'], after:'.', why:'The φ-integral contributes 2π.'}]);
mc('vc-1.5','Which integral gives the volume of a ball of radius a?',
 ['∫₀^{2π} ∫₀^{π} ∫₀^{a} r² sin θ dr dθ dφ','∫₀^{2π} ∫₀^{2π} ∫₀^{a} r² sin θ dr dθ dφ','∫₀^{π} ∫₀^{π} ∫₀^{a} r dr dθ dφ','∫₀^{2π} ∫₀^{π} ∫₀^{a} dr dθ dφ'],
 'θ ∈ [0, π], φ ∈ [0, 2π). The value is (a³/3)(2)(2π) = 4πa³/3.');
mc('vc-1.5','Evaluate ∭ xyz dV over the unit cube [0, 1]³.',
 ['1/8','1/6','1/2','1'],
 'It factorises: (1/2)³ = 1/8.');
mc('vc-1.5','Using cylindrical polars, what is the volume of a cylinder of radius 2 and height 3?',
 ['12π','6π','4π','18π'],
 '∫₀³ ∫₀^{2π} ∫₀² ρ dρ dφ dz = 3 × 2π × 2 = 12π.');
tf('vc-1.5','Volume integrals',
 [['The inner integrals are always evaluated first.', true, 'Note in §1.5.'],
  ['∭_V 1 dV gives the volume of V.', true, 'Setting f = 1.'],
  ['In spherical polars, θ runs from 0 to 2π.', false, '0 ≤ θ ≤ π; it is φ that runs over [0, 2π).'],
  ['In cylindrical polars, dV = dρ dφ dz.', false, 'dV = ρ dρ dφ dz.']]);
mc('vc-1.5','What is the volume of the region in the first octant under the plane z = 1 − x − y?',
 ['1/6','1/3','1/2','1'],
 '∫₀¹ ∫₀^{1−x} (1 − x − y) dy dx = ∫₀¹ (1 − x)²/2 dx = 1/6 (a tetrahedron).');

// ---------------------------------------------------------------- VC 2.1 Curves
mc('vc-2.1','Find the tangent vector to C: t ↦ (t, t²) at t = 1.',
 ['(1, 2)','(1, 1)','(2, 1)','(0, 2)'],
 'v(t) = (1, 2t), so v(1) = (1, 2) at the point (1, 1).');
mc('vc-2.1','Describe C: t ↦ (a sin t, a cos t), 0 ≤ t ≤ π (a > 0).',
 ['Half of the circle of radius a, clockwise from (0, a) to (0, −a)','A full circle of radius a, anticlockwise','Half of the circle, anticlockwise from (a, 0) to (−a, 0)','A straight line from (0, a) to (0, −a)'],
 'x² + y² = a². At t = 0 we are at (0, a); at t = π/2, (a, 0); at t = π, (0, −a) — clockwise.');
gap('vc-2.1','C: t ↦ (3 cos t, 3 sin t), 0 ≤ t ≤ π/2.',
 [{before:'The speed is v(t) = ‖(−3 sin t, 3 cos t)‖ = ', answer:'3', after:'.', why:'√(9 sin²t + 9 cos²t) = 3.'},
  {before:'So the length is L = ∫₀^{π/2} 3 dt = ', answer:['3π/2','3pi/2'], after:'.', why:'A quarter of a circle of radius 3.'}]);
mc('vc-2.1','Which parametrisation describes the same curve as t ↦ (t, t²), 0 ≤ t ≤ 2?',
 ['λ ↦ (λ², λ⁴), 0 ≤ λ ≤ √2','λ ↦ (λ², λ⁴), 0 ≤ λ ≤ 2','λ ↦ (2λ, λ²), 0 ≤ λ ≤ 1','λ ↦ (λ, λ²), 0 ≤ λ ≤ 4'],
 'The note in §2.1.1: substituting t = λ² gives the same points for λ ∈ [0, √2].');
mc('vc-2.1','Eliminating t from t ↦ (sin t, cos t) gives x² + y² = 1. What information does this geometric form lose?',
 ['The start and end points and the direction of travel','The radius of the circle','The centre of the circle','Nothing'],
 'The note after Example 2.1: the geometric form contains less information than the parametric form.');
tf('vc-2.1','Tangents and lengths',
 [['The magnitude of the tangent vector depends on the parametrisation.', true, 'Reparametrising changes the speed.'],
  ['The length of a curve depends on the parametrisation.', false, 'L is independent of the parametrisation.'],
  ['The unit tangent vector v/‖v‖ does not depend on the parametrisation (for the same direction of travel).', true, 'Only the magnitude changes.'],
  ['The line element of the curve is dx = v dt.', true, 'Note in §2.1.3.']]);
mc('vc-2.1','Find the length of the line segment t ↦ (1 + 3t, 2 + 4t), 0 ≤ t ≤ 2.',
 ['10','5','20','7'],
 'v = (3, 4) has speed 5; L = ∫₀² 5 dt = 10.');
mc('vc-2.1','What is the speed of t ↦ (eᵗ cos t, eᵗ sin t)?',
 ['√2 eᵗ','eᵗ','2eᵗ','√2'],
 'v = eᵗ(cos t − sin t, sin t + cos t); ‖v‖² = e^{2t}[(cos t − sin t)² + (sin t + cos t)²] = 2e^{2t}.');

// ---------------------------------------------------------------- VC 2.1.5 Arc length (Possible)
mc('vc-2.1.5','For the arc-length s(t) = ∫_{t₁}^{t} v(t′) dt′, what is ds/dt?',
 ['v(t), the speed','1','s(t)/t','0'],
 'Fundamental theorem of calculus.');
mc('vc-2.1.5','C: t ↦ (a sin t, a cos t), 0 ≤ t ≤ π, has v(t) = a. What is its natural parametrisation?',
 ['s ↦ (a sin(s/a), a cos(s/a)), 0 ≤ s ≤ πa','s ↦ (sin s, cos s), 0 ≤ s ≤ π','s ↦ (a sin(as), a cos(as)), 0 ≤ s ≤ π','s ↦ (as, a), 0 ≤ s ≤ π'],
 's = at ⇒ t = s/a (Example 2.4).');
mc('vc-2.1.5','What is special about the natural (arc-length) parametrisation?',
 ['Its tangent vector has unit length everywhere','It always starts at the origin','Its tangent vector is constant','It makes the curve closed'],
 'v(s) = ds/ds = 1.');
mc('vc-2.1.5','For a curve on t₁ ≤ t ≤ t₂, what are s(t₁) and s(t₂)?',
 ['0 and L (the length)','L and 0','t₁ and t₂','1 and L'],
 's(t₁) = ∫_{t₁}^{t₁} v = 0 and s(t₂) = ∫_{t₁}^{t₂} v = L.');

// ---------------------------------------------------------------- VC 2.2 Line integrals
gap('vc-2.2','Example 2.6: F = (2xy, x²) along y = x² from (0,0) to (1,1), parametrised as (t, t²), 0 ≤ t ≤ 1.',
 [{before:'F(x(t))·v(t) = (2t³, t²)·(1, 2t) = ', answer:['4t^3','4t³'], after:'.', why:'2t³ + 2t³ = 4t³.'},
  {before:'So ∫_C F·dx = ∫₀¹ 4t³ dt = ', answer:'1', after:'.', why:'[t⁴]₀¹ = 1.'}]);
mc('vc-2.2','Example 2.5: find ∫_C (x + y)² ds along C: t ↦ (2 cos t, 2 sin t), 0 ≤ t ≤ π.',
 ['8π','4π','8π + 8','16π'],
 'v = 2 and (x + y)² = 4(1 + sin 2t), so ∫₀^π 8(1 + sin 2t) dt = 8π (the sin 2t term integrates to 0 over [0, π]).');
mc('vc-2.2','What kind of quantity is ∫_C F·dx?',
 ['A scalar','A vector','A vector field','A curve'],
 'The dot product makes the integrand scalar.');
mc('vc-2.2','Evaluate ∮_C F·dx for F = (−y, x) around the unit circle (cos t, sin t), 0 ≤ t ≤ 2π.',
 ['2π','0','π','−2π'],
 'F·v = (−sin t)(−sin t) + (cos t)(cos t) = 1, so the integral is 2π.');
mc('vc-2.2','Evaluate ∫_C x ds along the straight segment from (0,0) to (3,4).',
 ['15/2','3/2','5','25/2'],
 'Parametrise (3t, 4t), 0 ≤ t ≤ 1, speed 5: ∫₀¹ 3t · 5 dt = 15/2.');
tf('vc-2.2','Line integrals',
 [['Only the component of F tangent to C contributes to ∫_C F·dx.', true, 'Note in §2.2.2.'],
  ['∫_C 1 ds gives the length of C.', true, 'Setting f = 1 recovers Equation (2.6).'],
  ['The scalar line integral ∫_C f ds depends on the parametrisation chosen.', false, 'Its value is independent of the parametrisation.'],
  ['Reversing the direction of C changes the sign of ∫_C F·dx.', true, 'The tangent vector reverses, so F·v changes sign.']]);
mc('vc-2.2','For C: t ↦ (x(t), y(t)), t₁ ≤ t ≤ t₂, how is ∫_C f ds computed?',
 ['∫_{t₁}^{t₂} f(x(t), y(t)) v(t) dt','∫_{t₁}^{t₂} f(x(t), y(t)) dt','∫_{t₁}^{t₂} f(x(t), y(t)) v(t) dt, where v is a vector','∫_{t₁}^{t₂} ∇f · v dt'],
 'ds = v(t) dt with v(t) = ‖v(t)‖ the speed.');
mc('vc-2.2','Evaluate ∫_C F·dx for F = (y, x) along C: t ↦ (t, t), 0 ≤ t ≤ 1.',
 ['1','2','1/2','0'],
 'F·v = (t, t)·(1, 1) = 2t; ∫₀¹ 2t dt = 1.');

// ---------------------------------------------------------------- VC 2.3 3D curves
mc('vc-2.3','What is the speed of the helix t ↦ (sin t, cos t, t)?',
 ['√2','1','2','√(1 + t²)'],
 'v = (cos t, −sin t, 1), ‖v‖ = √(1 + 1) = √2.');
mc('vc-2.3','What is the length of the helix t ↦ (sin t, cos t, t), 0 ≤ t ≤ 2π?',
 ['2√2 π','2π','4π','√2 π'],
 'L = ∫₀^{2π} √2 dt = 2√2 π.');
gap('vc-2.3','C: t ↦ (t, t², ⅔t³), 0 ≤ t ≤ 1.',
 [{before:'v = (1, 2t, 2t²), so ‖v‖ = √(1 + 4t² + 4t⁴) = 1 + ', answer:'2', after:'t².', why:'1 + 4t² + 4t⁴ = (1 + 2t²)².'},
  {before:'L = ∫₀¹ (1 + 2t²) dt = ', answer:'5/3', after:'.', why:'1 + 2/3.'}]);
mc('vc-2.3','Example 2.7: evaluate ∫_C F·dx for F = (y, −x, z² − 3x) along the helix (sin t, cos t, t), 0 ≤ t ≤ 2π.',
 ['2π + 8π³/3','8π³/3','2π','2π + 8π³/3 − 6'],
 'F·v = cos²t + sin²t + t² − 3 sin t = 1 + t² − 3 sin t; integrating over [0, 2π] gives 2π + (2π)³/3 − 0.');
mc('vc-2.3','Find the tangent vector to t ↦ (cos t, sin t, 2t) at t = 0.',
 ['(0, 1, 2)','(1, 0, 0)','(−1, 0, 2)','(0, 1, 0)'],
 'v = (−sin t, cos t, 2) ⇒ v(0) = (0, 1, 2).');
mc('vc-2.3','What is the projection of the helix (sin t, cos t, t) onto the xy-plane?',
 ['The unit circle centred at the origin','A straight line','A parabola','A spiral of growing radius'],
 'x² + y² = 1 for all t.');
tf('vc-2.3','Curves in 3D',
 [['The helix (sin t, cos t, t) has constant speed.', true, 'Speed √2.'],
  ['For a 3D curve, L = ∫ √(x′² + y′² + z′²) dt.', true, 'Same formula with an extra component.'],
  ['The line integral ∫_C F·dx of a 3D vector field is a vector.', false, 'It is a scalar.'],
  ['On the helix (sin t, cos t, t), z increases with t.', true, 'z = t.']]);
mc('vc-2.3','What is the length of the segment from (1, 0, 0) to (1, 2, 2)?',
 ['2√2','2','4','3'],
 'Displacement (0, 2, 2) has length √8 = 2√2.');
})();
