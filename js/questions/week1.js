// ================================================================
// WEEK 1 QUESTIONS — all maths in LaTeX: \( inline \) and \[ display \].
// Strings use String.raw (L`...`) so backslashes are kept as typed.
// mc(sec, text, [correct, wrong, wrong, wrong], why, hint)   — options are shuffled when shown
// tf(sec, text, [[statement, true/false, why], ...])
// gap(sec, text, [{before, answer, show?, after, answer2?, show2?, after2?, why, tol?}, ...], hint)
//   answer: what the student types (string or array of accepted strings; numbers, fractions,
//   pi and sqrt are compared numerically). show: optional LaTeX used to display the answer.
// ================================================================
(function(){
const L = String.raw;
let n = {};
const id = s => s + '-' + String(n[s] = (n[s] || 0) + 1).padStart(2, '0');
const mc  = (sec, text, opts, why, hint) => QUESTIONS.push({id:id(sec), sec, type:'mc', text, opts, ans:0, why, hint});
const tf  = (sec, text, st) => QUESTIONS.push({id:id(sec), sec, type:'tf', text, statements:st.map(([s,ans,why]) => ({s, ans, why}))});
const gap = (sec, text, steps, hint) => QUESTIONS.push({id:id(sec), sec, type:'gap', text, steps, hint});

// ---------------------------------------------------------------- PROB: events
mc('prob-1-events', L`\(P(A)=0.5\), \(P(B)=0.4\) and \(P(A\cap B)=0.2\). What is \(P(A\cup B)\)?`,
 [L`\(0.7\)`, L`\(0.9\)`, L`\(0.5\)`, L`\(0.2\)`],
 L`Inclusion–exclusion: \(P(A\cup B)=P(A)+P(B)-P(A\cap B)=0.5+0.4-0.2=0.7\).`,
 L`Adding \(P(A)\) and \(P(B)\) counts the overlap twice.`);
mc('prob-1-events', L`With \(P(A)=0.5\), \(P(B)=0.4\) and \(P(A\cap B)=0.2\), which statement is true?`,
 [L`\(P(A\mid B)=0.5\) and \(A,B\) are independent`, L`\(P(A\mid B)=0.4\) and \(A,B\) are independent`, L`\(P(A\mid B)=0.5\) and \(A,B\) are not independent`, L`\(P(A\mid B)=0.2\) and \(A,B\) are mutually exclusive`],
 L`\(P(A\mid B)=P(A\cap B)/P(B)=0.2/0.4=0.5=P(A)\). Equivalently \(P(A)P(B)=0.2=P(A\cap B)\), so \(A\) and \(B\) are independent. They are not mutually exclusive since \(P(A\cap B)\neq 0\).`,
 L`Compare \(P(A\cap B)\) with \(P(A)P(B)\).`);
gap('prob-1-events', L`A disease affects 1% of people. A test is positive for 95% of people with the disease and for 5% of people without it. Find \(P(D\mid +)\). (Give decimals.)`,
 [{before:L`By total probability, \(P(+)=0.95\times0.01+0.05\times0.99=\) `, answer:'0.059', after:'.', why:L`\(P(+)=P(+\mid D)P(D)+P(+\mid D^c)P(D^c)=0.0095+0.0495=0.059\).`, tol:0.0005},
  {before:L`By Bayes, \(P(D\mid +)=0.0095/P(+)\approx\) `, answer:'0.161', after:' (to 3 d.p.).', why:L`\(0.0095/0.059\approx0.161\) — only about 16%, because most positives come from the large healthy group.`, tol:0.002}],
 L`Partition on \(D\) and \(D^c\).`);
tf('prob-1-events', 'Independence and mutual exclusivity',
 [[L`If \(A\) and \(B\) are mutually exclusive with \(P(A)>0\) and \(P(B)>0\), they cannot be independent.`, true, L`\(P(A\cap B)=0\) but \(P(A)P(B)>0\), so the product rule fails.`],
  [L`If \(A\) and \(B\) are independent, then \(A^c\) and \(B\) are also independent.`, true, L`\(P(A^c\cap B)=P(B)-P(A\cap B)=P(B)-P(A)P(B)=P(A^c)P(B)\).`],
  [L`\(P(A\mid B)=P(B\mid A)\) for any events with positive probability.`, false, L`\(P(A\mid B)=P(A\cap B)/P(B)\) and \(P(B\mid A)=P(A\cap B)/P(A)\); these agree only when \(P(A)=P(B)\).`],
  [L`If \(A\) and \(B\) are mutually exclusive then \(P(A\cup B)=P(A)+P(B)\).`, true, L`Inclusion–exclusion with \(P(A\cap B)=0\) (or the additivity axiom).`]]);
mc('prob-1-events', L`Machines \(M_1,M_2,M_3\) make 50%, 30%, 20% of items, with defect rates 1%, 2%, 3% respectively. What is \(P(\text{defective})\)?`,
 [L`\(0.017\)`, L`\(0.02\)`, L`\(0.06\)`, L`\(0.0567\)`],
 L`Law of total probability: \(0.5(0.01)+0.3(0.02)+0.2(0.03)=0.005+0.006+0.006=0.017\).`,
 L`Sum \(P(D\mid M_i)P(M_i)\) over the partition.`);
mc('prob-1-events', L`Using the machine data (50/30/20% of output; 1/2/3% defective), given an item is defective, what is the probability it came from \(M_3\)?`,
 [L`\(\tfrac{6}{17}\approx0.353\)`, L`\(0.2\)`, L`\(0.03\)`, L`\(0.006\)`],
 L`Bayes: \(P(M_3\mid D)=\dfrac{P(D\mid M_3)P(M_3)}{P(D)}=\dfrac{0.006}{0.017}=\dfrac{6}{17}\).`,
 L`Numerator \(P(D\mid M_3)P(M_3)\); denominator \(P(D)=0.017\).`);
mc('prob-1-events', L`Which statement is NOT a valid rule for a probability measure \(P\)?`,
 [L`\(P(A\cup B)=P(A)+P(B)\) for all events \(A,B\)`, L`\(P(\Omega)=1\)`, L`\(0\le P(A)\le 1\) for every event \(A\)`, L`\(P\big(\bigcup_i A_i\big)=\sum_i P(A_i)\) for pairwise disjoint \(A_i\)`],
 L`Additivity only holds for disjoint events. In general \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\).`);
mc('prob-1-events', L`\(P(A)=P(B)=P(C)=0.3\), each pairwise intersection has probability \(0.1\), and \(P(A\cap B\cap C)=0.05\). Find \(P(A\cup B\cup C)\).`,
 [L`\(0.65\)`, L`\(0.6\)`, L`\(0.9\)`, L`\(0.55\)`],
 L`Inclusion–exclusion: \(0.9-3(0.1)+0.05=0.65\).`,
 'Add singles, subtract pairs, add back the triple.');

// ---------------------------------------------------------------- PROB: random variables
mc('prob-1-rvs', L`\(X\) takes values \(0,1,2\) with probabilities \(0.2,0.5,0.3\). What is \(F(1.5)=P(X\le1.5)\)?`,
 [L`\(0.7\)`, L`\(0.5\)`, L`\(0.3\)`, L`\(1\)`],
 L`\(F(1.5)=P(X=0)+P(X=1)=0.7\). The cdf is a step function that only jumps at \(0,1,2\).`);
mc('prob-1-rvs', 'Which of these is a valid probability density function?',
 [L`\(f(x)=2x\) on \([0,1]\), 0 otherwise`, L`\(f(x)=x\) on \([0,1]\), 0 otherwise`, L`\(f(x)=3x^2\) on \([0,2]\), 0 otherwise`, L`\(f(x)=1-2x\) on \([0,1]\), 0 otherwise`],
 L`\(2x\ge0\) and \(\int_0^1 2x\,dx=1\). The others integrate to \(\tfrac12\), \(8\) and \(0\) (and \(1-2x<0\) for \(x>\tfrac12\)).`);
gap('prob-1-rvs', L`\(X\) has density \(f(x)=cx^2\) for \(0\le x\le1\) (0 otherwise).`,
 [{before:L`Since \(\int_0^1 cx^2\,dx=c/3=1\), \(c=\) `, answer:'3', after:'.', why:'The density must integrate to 1.'},
  {before:L`\(P(X\le\tfrac12)=\int_0^{1/2}3x^2\,dx=\) `, answer:'1/8', show:L`\(\tfrac18\)`, after:'.', why:L`\([x^3]_0^{1/2}=\tfrac18\).`}]);
tf('prob-1-rvs', 'Densities and cdfs',
 [['A probability density function can take values greater than 1.', true, L`Density is not probability: e.g. \(\mathrm{Uniform}(0,\tfrac12)\) has density \(2\) on its support.`],
  [L`For a continuous random variable, \(P(X=a)=0\) for every \(a\).`, true, L`\(P(X=a)=\int_a^a f(x)\,dx=0\).`],
  ['A cdf can decrease on some interval.', false, L`If \(s<t\) then \(\{X\le s\}\subseteq\{X\le t\}\), so \(F(s)\le F(t)\).`],
  ['The cdf of a discrete random variable is a step function.', true, L`It jumps by \(P(X=k)\) at each value \(k\) and is flat in between.`]]);
mc('prob-1-rvs', L`\(X\) has cdf \(F(x)=1-e^{-2x}\) for \(x\ge0\) (and 0 for \(x<0\)). What is its density?`,
 [L`\(f(x)=2e^{-2x},\ x\ge0\)`, L`\(f(x)=e^{-2x},\ x\ge0\)`, L`\(f(x)=-2e^{-2x},\ x\ge0\)`, L`\(f(x)=1-2e^{-2x},\ x\ge0\)`],
 L`\(f=F'=2e^{-2x}\): the \(\mathrm{Exponential}(2)\) distribution.`);
mc('prob-1-rvs', L`For \(F(x)=1-e^{-2x}\ (x\ge0)\), what is \(P(1<X\le2)\)?`,
 [L`\(e^{-2}-e^{-4}\)`, L`\(e^{-4}-e^{-2}\)`, L`\(1-e^{-4}\)`, L`\(e^{-2}\)`],
 L`\(F(2)-F(1)=(1-e^{-4})-(1-e^{-2})=e^{-2}-e^{-4}\).`);
mc('prob-1-rvs', 'Formally, a random variable is…',
 [L`a function \(X:\Omega\to\mathbb{R}\)`, L`a variable whose value is chosen at random from \(\mathbb{R}\)`, L`a subset of the sample space \(\Omega\)`, L`a probability measure on the events \(\mathcal{F}\)`],
 L`A random variable attaches a number \(X(\omega)\) to each outcome \(\omega\). It is a function, not a variable.`);
mc('prob-1-rvs', L`\(X\) has pmf \(p(k)=c/k\) for \(k=1,2,3\). What is \(c\)?`,
 [L`\(\tfrac{6}{11}\)`, L`\(\tfrac16\)`, L`\(\tfrac{11}{6}\)`, L`\(\tfrac13\)`],
 L`\(c\left(1+\tfrac12+\tfrac13\right)=\tfrac{11}{6}c=1\Rightarrow c=\tfrac{6}{11}\).`);

// ---------------------------------------------------------------- PROB: moments
mc('prob-1-moments', L`\(E(X)=3\) and \(\operatorname{Var}(X)=4\). Find \(E(2X-1)\) and \(\operatorname{Var}(2X-1)\).`,
 [L`\(5\) and \(16\)`, L`\(5\) and \(8\)`, L`\(6\) and \(16\)`, L`\(5\) and \(7\)`],
 L`\(E(aX+b)=aE(X)+b=5\); \(\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)=16\). The shift \(b\) does not affect the variance.`);
gap('prob-1-moments', L`\(X\) takes values \(0,1,2\) with probabilities \(0.2,0.5,0.3\).`,
 [{before:L`\(E(X)=\) `, answer:'1.1', after:L` and \(E(X^2)=\) `, answer2:'1.7', after2:'.', why:L`\(E(X)=0.5+0.6=1.1\); \(E(X^2)=0.5(1)+0.3(4)=1.7\).`},
  {before:L`\(\operatorname{Var}(X)=E(X^2)-(EX)^2=\) `, answer:'0.49', after:'.', why:L`\(1.7-1.21=0.49\).`}]);
mc('prob-1-moments', L`\(X\sim\mathrm{Uniform}(0,1)\). What is \(E(X^2)\)?`,
 [L`\(\tfrac13\)`, L`\(\tfrac12\)`, L`\(\tfrac14\)`, L`\(\tfrac1{12}\)`],
 L`\(E(X^2)=\int_0^1x^2\,dx=\tfrac13\) (so \(\operatorname{Var}X=\tfrac13-\tfrac14=\tfrac1{12}\)).`);
tf('prob-1-moments', 'Covariance and independence',
 [[L`If \(\operatorname{Cov}(X,Y)=0\) then \(X\) and \(Y\) are independent.`, false, L`Zero covariance does not imply independence: \(X\sim\mathrm{U}(-1,1)\), \(Y=X^2\) has \(\operatorname{Cov}=E(X^3)-E(X)E(X^2)=0\), yet \(Y\) is a function of \(X\).`],
  [L`If \(X\) and \(Y\) are independent then \(E(XY)=E(X)E(Y)\).`, true, L`The joint density factorises, so the expectation factorises; hence \(\operatorname{Cov}=0\).`],
  [L`\(\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)\) for any \(X,Y\).`, false, L`\(\operatorname{Var}(X+Y)=\operatorname{Var}X+\operatorname{Var}Y+2\operatorname{Cov}(X,Y)\).`],
  [L`\(\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y)\).`, true, L`Apply the sum formula to \(X\) and \(-Y\).`]]);
mc('prob-1-moments', L`\(\operatorname{Var}(X)=2\), \(\operatorname{Var}(Y)=3\), \(\operatorname{Cov}(X,Y)=-1\). What is \(\operatorname{Var}(X+Y)\)?`,
 [L`\(3\)`, L`\(5\)`, L`\(4\)`, L`\(7\)`],
 L`\(2+3+2(-1)=3\).`);
mc('prob-1-moments', L`\(\operatorname{Cov}(X,Y)=2\), \(\operatorname{Var}(X)=4\), \(\operatorname{Var}(Y)=9\). What is \(\operatorname{Corr}(X,Y)\)?`,
 [L`\(\tfrac13\)`, L`\(\tfrac2{13}\)`, L`\(\tfrac1{18}\)`, L`\(\tfrac29\)`],
 L`\(\operatorname{Corr}=\dfrac{\operatorname{Cov}}{\sigma_X\sigma_Y}=\dfrac{2}{2\cdot3}=\tfrac13\).`);
mc('prob-1-moments', L`\(X\) is continuous with density \(f\). How do you compute \(E(e^X)\)?`,
 [L`\(\int_{-\infty}^{\infty}e^{x}f(x)\,dx\)`, L`\(e^{E(X)}\)`, L`\(\int_{-\infty}^{\infty}xe^{x}\,dx\)`, L`You must first find the density of \(e^X\)`],
 L`\(E[g(X)]=\int g(x)f(x)\,dx\) — no need for the distribution of \(g(X)\). In general \(E(e^X)\ne e^{E X}\).`);
mc('prob-1-moments', L`What is the largest possible variance of a \(\mathrm{Bernoulli}(p)\) random variable?`,
 [L`\(\tfrac14\), at \(p=\tfrac12\)`, L`\(\tfrac12\), at \(p=\tfrac12\)`, L`\(1\), at \(p=1\)`, L`\(\tfrac14\), at \(p=\tfrac14\)`],
 L`\(\operatorname{Var}=p(1-p)\) is maximised at \(p=\tfrac12\), giving \(\tfrac14\).`);

// ---------------------------------------------------------------- PROB: distributions & MGFs
mc('prob-1-dists', L`\(X\sim\mathrm{Poisson}(3)\). What is \(P(X=0)\)?`,
 [L`\(e^{-3}\)`, L`\(3e^{-3}\)`, L`\(0\)`, L`\(1-e^{-3}\)`],
 L`\(P(X=k)=\dfrac{\lambda^ke^{-\lambda}}{k!}\), so \(P(X=0)=e^{-3}\).`);
mc('prob-1-dists', L`\(X\sim\mathrm{Bin}(10,0.3)\). What are \(E(X)\) and \(\operatorname{Var}(X)\)?`,
 [L`\(3\) and \(2.1\)`, L`\(3\) and \(0.21\)`, L`\(3\) and \(0.9\)`, L`\(0.3\) and \(2.1\)`],
 L`\(E=np=3\); \(\operatorname{Var}=np(1-p)=10(0.3)(0.7)=2.1\).`);
mc('prob-1-dists', L`\(X\sim\mathrm{Exponential}(\lambda=2)\) (rate 2). What is \(P(X>1)\)?`,
 [L`\(e^{-2}\)`, L`\(1-e^{-2}\)`, L`\(2e^{-2}\)`, L`\(e^{-1/2}\)`],
 L`\(P(X>x)=1-F(x)=e^{-\lambda x}=e^{-2}\).`);
mc('prob-1-dists', L`Which is the moment generating function of \(\mathrm{Poisson}(\lambda)\)?`,
 [L`\(\exp\!\big(\lambda(e^t-1)\big)\)`, L`\(\dfrac{\lambda}{\lambda-t}\)`, L`\(\exp(\lambda t)\)`, L`\((1-p+pe^t)^n\)`],
 L`\(M(t)=\sum_k e^{tk}e^{-\lambda}\lambda^k/k!=e^{-\lambda}e^{\lambda e^t}\). \(\lambda/(\lambda-t)\) is the Exponential MGF; the last is Binomial.`);
gap('prob-1-dists', L`A \(N(\mu,\sigma^2)\) random variable has MGF \(M(t)=\exp(\mu t+\tfrac12\sigma^2t^2)\). \(X\) has MGF \(M_X(t)=\exp(2t+4.5t^2)\).`,
 [{before:L`So \(\mu=\) `, answer:'2', after:L` and \(\sigma^2=\) `, answer2:'9', after2:'.', why:L`Match coefficients: \(\mu=2\) and \(\tfrac12\sigma^2=4.5\Rightarrow\sigma^2=9\).`}]);
mc('prob-1-dists', L`\(X\sim\mathrm{Poisson}(2)\) and \(Y\sim\mathrm{Poisson}(3)\) are independent. What is the distribution of \(X+Y\)?`,
 [L`\(\mathrm{Poisson}(5)\)`, L`\(\mathrm{Poisson}(6)\)`, L`\(\mathrm{Bin}(5,\tfrac12)\)`, 'Not Poisson'],
 L`\(M_{X+Y}(t)=M_X(t)M_Y(t)=e^{2(e^t-1)}e^{3(e^t-1)}=e^{5(e^t-1)}\), the \(\mathrm{Poisson}(5)\) MGF.`);
tf('prob-1-dists', 'Facts about named distributions',
 [[L`If \(X\sim\mathrm{Poisson}(\lambda)\) then \(E(X)=\operatorname{Var}(X)\).`, true, L`Both equal \(\lambda\).`],
  ['The Cauchy distribution has mean 0.', false, L`Its mean is undefined: \(\int|x|f(x)\,dx\) diverges.`],
  [L`\(X\sim\mathrm{Exponential}(\lambda)\) with rate \(\lambda\) has mean \(\lambda\).`, false, L`The mean is \(1/\lambda\) (variance \(1/\lambda^2\)).`],
  [L`\(\mathrm{Uniform}(a,b)\) has variance \((b-a)^2/12\).`, true, L`\(E(X^2)-(EX)^2=\tfrac{a^2+ab+b^2}{3}-\tfrac{(a+b)^2}{4}=\tfrac{(b-a)^2}{12}\).`]]);
mc('prob-1-dists', L`\(X\) has MGF \(M(t)=(1-2t)^{-3}\). What is \(E(X)\)?`,
 [L`\(6\)`, L`\(3\)`, L`\(2\)`, L`\(12\)`],
 L`\(E(X)=M'(0)\). \(M'(t)=-3(1-2t)^{-4}(-2)=6(1-2t)^{-4}\Rightarrow M'(0)=6\). (Gamma with shape 3, scale 2: mean \(k\theta=6\).)`,
 L`Differentiate and set \(t=0\).`);

// ---------------------------------------------------------------- STATS Ch2
mc('stat-2', L`Which correctly distinguishes \(\underline{X}=(X_1,\dots,X_n)\) from \(\underline{x}=(x_1,\dots,x_n)\)?`,
 [L`\(\underline{X}\) are random variables (before observation); \(\underline{x}\) are the fixed observed values`, L`\(\underline{X}\) is the population and \(\underline{x}\) is the sample`, L`\(\underline{X}\) are parameters and \(\underline{x}\) are statistics`, 'There is no difference; both denote the dataset'],
 'Capital letters: the random sample before observation. Lower case: the realised data.');
mc('stat-2', L`For the model \(X_1,\dots,X_n\overset{\text{iid}}{\sim}N(\mu,\sigma^2)\) with both parameters unknown, what is \(\Theta\)?`,
 [L`\(\mathbb{R}\times(0,\infty)\)`, L`\(\mathbb{R}\times\mathbb{R}\)`, L`\((0,\infty)\times(0,\infty)\)`, L`\(\mathbb{R}\times[0,\infty)\)`],
 L`\(\theta=(\mu,\sigma^2)\) with \(\mu\in\mathbb{R}\) and \(\sigma^2>0\).`);
mc('stat-2', L`Responses \(X_i=1\) (prefers space A) or \(0\) (prefers B) are modelled as iid \(\mathrm{Bernoulli}(p)\). What is \(\Theta\) in the notes?`,
 [L`\([0,1]\)`, L`\((0,\infty)\)`, L`\(\mathbb{R}\)`, L`\(\{0,1\}\)`],
 L`\(p\) is a probability, so \(\Theta=[0,1]\). \(\{0,1\}\) is the set of data values, not parameter values.`);
tf('stat-2', 'Samples, models and statistics',
 [[L`In this course, a "random sample" means \(X_1,\dots,X_n\) are iid.`, true, 'Independent and identically distributed from one population distribution.'],
  ['If the data are modelled as a random sample, they are guaranteed to represent the target population.', false, 'The iid model says nothing about recruitment; selection bias or non-response can make it inappropriate.'],
  [L`The sample mean \(\bar{X}\) is a parameter.`, false, L`\(\bar X\) is a statistic — computed from the sample. Parameters (like \(\mu\)) describe the population.`],
  [L`A statistical model is a family of distributions indexed by \(\theta\in\Theta\).`, true, 'One distribution for each parameter value.']]);
mc('stat-2', 'Customer satisfaction ratings ("poor", "fair", "good", "excellent") are which type of data?',
 ['Categorical, ordinal', 'Categorical, nominal', 'Discrete numeric', 'Continuous'],
 'Natural order but no numerical spacing — ordinal.');
mc('stat-2', '"Number of goals scored by the home team" is which type of data, and which model is natural?',
 ['Discrete numeric (a count); e.g. Poisson', 'Continuous; e.g. Normal', 'Categorical nominal; e.g. Multinomial', 'Ordinal; e.g. Bernoulli'],
 'Counts are discrete numeric data; Poisson (or Binomial/Geometric) models are natural.');
mc('stat-2', L`Sweets of 3 colours are drawn with replacement; \((R,B,G)\sim\mathrm{Multinomial}(n;p_R,p_B,p_G)\). How many free parameters are there?`,
 [L`\(2\)`, L`\(3\)`, L`\(1\)`, L`\(n\)`],
 L`\(p_R+p_B+p_G=1\), so the third is determined by the other two.`);
mc('stat-2', 'Why is statistical inference described as "inverse probability"?',
 [L`Probability goes from a known \(\theta\) to data; inference goes from observed data back to the unknown \(\theta\)`, L`It computes \(1-P(A)\) for every event`, 'It uses inverse cdfs to simulate data', 'It inverts the covariance matrix'],
 L`Probability: known \(\theta\Rightarrow\) probabilities of data. Inference: observed data \(\Rightarrow\) learn about \(\theta\).`);
mc('stat-2', '20 students volunteer via a social-media post and 12 prefer space A. What is the main concern about treating this as an iid sample from all eligible students?',
 ['Selection bias: volunteering may be related to preference', 'The sample is too small for the CLT', 'Preferences are continuous data', L`\(p\) is not in the parameter space`],
 'Self-selection can make the observed students unrepresentative of the target population.');

// ---------------------------------------------------------------- STATS Ch3
mc('stat-3', L`In frequentist inference, the parameter \(\theta\) is treated as…`,
 ['fixed but unknown', 'a random variable with a prior distribution', 'known exactly', 'a statistic computed from the data'],
 'Probability describes data and procedures under repeated sampling; the parameter is fixed.');
mc('stat-3', L`"Over repeated samples, this interval-producing method contains the fixed \(p\) in 95% of cases." This is…`,
 ['a frequentist confidence-interval statement', 'a Bayesian credible-interval statement', 'a p-value', 'a prior probability'],
 L`The 95% is the long-run coverage of a random procedure, with \(p\) fixed.`);
mc('stat-3', L`"Given these data and the stated prior, the posterior probability that \(p>0.5\) is \(0.91\)." This is…`,
 [L`a Bayesian statement about \(p\)`, 'a frequentist confidence statement', 'a statement about repeated sampling', L`a hypothesis test at level \(0.91\)`],
 'A probability about the parameter itself, conditional on data and prior.');
tf('stat-3', 'Interpreting inferential statements',
 [[L`After observing data, a 95% confidence interval \([0.41,0.58]\) contains \(p\) with probability \(0.95\).`, false, L`The endpoints and \(p\) are fixed, so it either contains \(p\) or not. 95% refers to the procedure.`],
  [L`A 95% credible interval satisfies \(P(\theta\in[L,U]\mid\underline{x})=0.95\).`, true, 'The Bayesian definition.'],
  ['A Bayesian prior must represent purely personal belief.', false, 'Priors can encode substantive information, weak information, or a reference convention.'],
  [L`Failing to reject \(H_0\) proves that \(H_0\) is true.`, false, L`It only means the data are compatible with \(H_0\).`]]);
mc('stat-3', 'Which inferential task is NOT examined in MAS2901?',
 ['Prediction', 'Point estimation', 'Interval estimation', 'Hypothesis testing'],
 'Prediction is for future courses.');
mc('stat-3', '"Assess the claim that the two study spaces are equally popular" is which inferential task?',
 ['Hypothesis testing', 'Point estimation', 'Interval estimation', 'Prediction'],
 L`Formalise \(H_0:p=0.5\) and judge whether the data are compatible with it.`);
mc('stat-3', 'Bayesian inference combines the prior with the data to produce…',
 [L`the posterior distribution \(\pi(\theta\mid\text{data})\)`, 'a p-value', 'the sampling distribution of an estimator', 'a confidence interval'],
 L`Prior \(\pi(\theta)\) + data \(\Rightarrow\) posterior \(\pi(\theta\mid\text{data})\).`);
mc('stat-3', 'Which of these is a Bayesian summary?',
 ['A credible interval', 'A confidence interval', 'A p-value', 'A standard error'],
 'Credible intervals, posterior means and Bayes factors are Bayesian.');

// ---------------------------------------------------------------- LA 1.1 Fields
mc('la-1.1', 'Which of these (with the usual + and ·) is NOT a field?',
 [L`\(\mathbb{Z}\)`, L`\(\mathbb{Q}\)`, L`\(\mathbb{Z}_5\)`, L`\(\mathbb{C}\)`],
 L`In \(\mathbb{Z}\), \(2\) has no multiplicative inverse, so axiom (viii) fails. \(\mathbb{Z}_5\) is a field because 5 is prime.`);
mc('la-1.1', L`Which field axiom fails for the integers \(\mathbb{Z}\)?`,
 ['Every nonzero element has a multiplicative inverse', 'Addition is commutative', L`There is an additive identity \(0\)`, 'Multiplication distributes over addition'],
 L`E.g. there is no integer \(\beta\) with \(2\beta=1\).`);
mc('la-1.1', L`Is \(\mathbb{Z}_6\) a field?`,
 [L`No — \(2\) has no multiplicative inverse mod 6`, L`Yes — \(\mathbb{Z}_n\) is always a field`, 'Yes, because every element has an additive inverse', L`No — \(\mathbb{Z}_6\) has no additive identity`],
 L`\(2\cdot3=0\) in \(\mathbb{Z}_6\), and \(2k\) is always even mod 6, never 1. \(\mathbb{Z}_p\) is a field only for \(p\) prime.`);
gap('la-1.1', L`Arithmetic in the field \(\mathbb{Z}_7\).`,
 [{before:L`The multiplicative inverse of \(3\) in \(\mathbb{Z}_7\) is `, answer:'5', after:'.', why:L`\(3\times5=15\equiv1\pmod 7\).`},
  {before:L`\(2+6=\) `, answer:'1', after:L` in \(\mathbb{Z}_7\).`, why:L`\(8\equiv1\pmod 7\).`}]);
tf('la-1.1', 'Fields',
 [['Every nonzero element of a field has a multiplicative inverse.', true, 'Axiom (viii).'],
  [L`In a field, \(0\) has a multiplicative inverse.`, false, L`Axiom (viii) is only for nonzero elements; \(0\cdot\beta=0\ne1\).`],
  [L`\(\mathrm{Mat}_{2\times2}(\mathbb{R})\) with the usual \(+\) and matrix multiplication is a field.`, false, 'Not commutative, and nonzero singular matrices have no inverse.'],
  [L`\(\mathbb{Z}_p\) is a field for every prime \(p\).`, true, 'These are the finite fields in the notes.']]);
mc('la-1.1', L`Which property does \(\mathbb{N}=\{1,2,3,\dots\}\) fail?`,
 ['Existence of additive inverses', 'Commutativity of addition', 'Associativity of multiplication', 'Distributivity'],
 L`The notes list (iii), (iv) and (viii) as failing for \(\mathbb{N}\).`);
mc('la-1.1', L`Apart from missing inverses, which field axiom fails for \(\mathrm{Mat}_{2\times2}(\mathbb{C})\)?`,
 ['Commutativity of multiplication', 'Associativity of addition', 'Existence of an additive identity', 'Distributivity'],
 L`\(AB\ne BA\) in general — see the example in the notes.`);
mc('la-1.1', L`Compute \(3\cdot4\) in the field \(\mathbb{Z}_5\).`,
 [L`\(2\)`, L`\(12\)`, L`\(7\)`, L`\(1\)`],
 L`\(12=2\cdot5+2\).`);

// ---------------------------------------------------------------- LA 1.2 Vector spaces
mc('la-1.2', L`In any vector space \(V\) over \(F\), what is \(0\bullet u\) (the scalar 0 times a vector \(u\))?`,
 [L`The zero vector \(\mathbf{0}\in V\)`, L`The scalar \(0\in F\)`, L`\(u\)`, L`It depends on \(V\)`],
 'Proposition 1.2.4(iii).');
mc('la-1.2', L`Which of these is NOT a vector space over \(\mathbb{R}\) with the usual operations?`,
 ['Polynomials of degree exactly 2', L`\(\mathbb{R}_2[x]\) (degree at most 2)`, L`\(\mathrm{Mat}_{2\times3}(\mathbb{R})\)`, L`All functions \(\mathbb{R}\to\mathbb{R}\)`],
 L`\(x^2+(-x^2+x)=x\) has degree 1: not closed under addition (and no zero polynomial).`);
tf('la-1.2', 'Vector space examples',
 [[L`\(\mathbb{C}^2\) is a vector space over \(\mathbb{C}\).`, true, L`\(F^n\) is a vector space over any field \(F\).`],
  [L`\(F^\infty\), the set of sequences over \(F\), is a vector space over \(F\).`, true, 'Example 1.2.3(iv), with termwise operations.'],
  [L`\(\{(x,y)\in\mathbb{R}^2:x\ge0\}\) with the usual operations is a vector space.`, false, L`\((-1)\bullet(1,0)=(-1,0)\) is not in the set.`],
  ['In a vector space, the additive inverse of each vector is unique.', true, L`Proposition 1.2.4(ii): if \(u+v=0=u+v'\) then \(v=v'\).`]]);
mc('la-1.2', L`On \(\mathbb{R}^2\), keep the usual addition but define \(\lambda\bullet(x,y)=(\lambda x,0)\). Which axiom fails?`,
 [L`\(1\bullet u=u\)`, 'Commutativity of addition', 'Existence of a zero vector', L`\(\alpha\bullet(u+v)=\alpha\bullet u+\alpha\bullet v\)`],
 L`\(1\bullet(x,y)=(x,0)\ne(x,y)\) when \(y\ne0\). The associativity and distributive laws still hold.`);
mc('la-1.2', 'Which identity holds in every vector space?',
 [L`\((-1)\bullet u=-u\)`, L`\(\lambda\bullet u=\mathbf 0\Rightarrow\lambda=0\) and \(u=\mathbf 0\)`, L`\(u+u=u\) for all \(u\)`, L`\(1\bullet u=\mathbf 0\)`],
 L`Proposition 1.2.4(v). (\(\lambda u=\mathbf0\) implies \(\lambda=0\) OR \(u=\mathbf0\).)`);
mc('la-1.2', L`What is the zero vector in \(\mathcal{F}(\mathbb{R})\), the space of functions \(\mathbb{R}\to\mathbb{R}\)?`,
 [L`The constant function \(f(x)=0\)`, L`The identity function \(f(x)=x\)`, 'The number 0', 'There is none'],
 L`With \((f+g)(x)=f(x)+g(x)\), the function that is 0 everywhere is the additive identity.`);
mc('la-1.2', L`What is the zero vector of \(\mathrm{Mat}_{2\times2}(\mathbb{R})\)?`,
 [L`The \(2\times2\) zero matrix`, L`The identity matrix \(I\)`, 'The real number 0', 'Any singular matrix'],
 L`\(A+O=A\). (\(I\) is the identity for multiplication.)`);
mc('la-1.2', L`\(\mathbb{R}_{>0}\) is a vector space over \(\mathbb{R}\) with \(u\oplus v=uv\) and \(\lambda\odot u=u^\lambda\). What is its zero vector?`,
 [L`\(1\)`, L`\(0\)`, L`\(e\)`, L`\(-1\)`],
 L`We need \(u\oplus z=u\), i.e. \(uz=u\), so \(z=1\).`,
 L`Solve \(u\oplus z=u\) for \(z\).`);

// ---------------------------------------------------------------- LA 1.3 Subspaces
mc('la-1.3', L`Which is a subspace of \(\mathbb{R}^3\)?`,
 [L`\(\{(x,y,z):x+2y-z=0\}\)`, L`\(\{(x,y,z):x+2y-z=1\}\)`, L`\(\{(x,y,z):xyz=0\}\)`, L`\(\{(x,y,z):x\ge0\}\)`],
 L`A homogeneous linear equation gives a null space. "\(=1\)" misses \(\mathbf0\); \(xyz=0\) fails \((1,1,0)+(0,0,1)\); \(x\ge0\) fails under \(\times(-1)\).`);
mc('la-1.3', L`Is \(W=\{A\in\mathrm{Mat}_{2\times2}(\mathbb{R}):A\text{ not invertible}\}\) a subspace? (Exercise 1.3.8)`,
 [L`No — \(\operatorname{diag}(1,0)+\operatorname{diag}(0,1)=I\) is invertible`, 'Yes — it contains the zero matrix', 'Yes — it is closed under scalar multiplication', 'No — it does not contain the zero matrix'],
 'It contains 0 and is closed under scalar multiplication, but not under addition.');
tf('la-1.3', 'Subspace facts',
 [[L`If \(\mathbf0\notin W\) then \(W\) is not a subspace.`, true, 'Every subspace contains 0 (Remark 1.3.4).'],
  [L`If \(\mathbf0\in W\) then \(W\) is a subspace.`, false, L`Necessary, not sufficient — e.g. the parabola \(y=x^2\).`],
  [L`\(\operatorname{null}(A)\) is a subspace of \(F^n\) for any \(m\times n\) matrix \(A\).`, true, L`\(A(x+y)=Ax+Ay=\mathbf0\) and \(A(\lambda x)=\lambda Ax=\mathbf0\).`],
  ['The union of two subspaces is always a subspace.', false, L`\(x\)-axis \(\cup\) \(y\)-axis: \((1,0)+(0,1)=(1,1)\) is in neither.`]]);
mc('la-1.3', L`Theorem 1.3.3 (subspace test): \(W\subseteq V\) is a subspace if and only if…`,
 [L`\(W\) is nonempty and closed under addition and scalar multiplication`, L`\(W\) is closed under addition`, L`\(W\) contains \(\mathbf0\) and is closed under multiplication of vectors`, L`\(W\) is finite`],
 L`The other axioms are inherited from \(V\).`);
mc('la-1.3', L`Let \(U\) be the \(x\)-axis and \(W\) the \(y\)-axis in \(\mathbb{R}^2\). What is \(U+W\)?`,
 [L`\(\mathbb{R}^2\)`, L`\(U\cup W\)`, L`\(\{\mathbf0\}\)`, L`The line \(y=x\)`],
 L`\((a,b)=(a,0)+(0,b)\).`);
mc('la-1.3', L`Which is a subspace of \(\mathbb{R}_2[x]\)?`,
 [L`\(\{p:p(1)=0\}\)`, L`\(\{p:p(0)=1\}\)`, L`\(\{p:\deg p=2\}\)`, L`\(\{p:p\text{ has integer coefficients}\}\)`],
 L`\((p+q)(1)=0\) and \((\lambda p)(1)=0\). The others fail: \(p(0)=1\) misses 0; exact degree fails \(+\); integer coefficients fail \(\times\tfrac12\).`);
mc('la-1.3', L`For a matrix \(A\) and \(b\ne\mathbf0\), why is \(\{x:Ax=b\}\) not a subspace?`,
 [L`It does not contain \(\mathbf0\), since \(A\mathbf0=\mathbf0\ne b\)`, 'It is always empty', L`It fails scalar multiplication only when \(b<0\)`, 'It is a subspace'],
 L`\(A\mathbf0=\mathbf0\ne b\).`);
mc('la-1.3', L`Why is the parabola \(\{(x,y):y=x^2\}\) not a subspace of \(\mathbb{R}^2\)?`,
 [L`\((1,1)+(1,1)=(2,2)\) is not on it`, L`It does not contain \((0,0)\)`, 'It is empty', L`\(\mathbb{R}^2\) has no nontrivial subspaces`],
 L`\(2\ne2^2\): not closed under addition, even though it contains \(\mathbf0\).`);

// ---------------------------------------------------------------- LA 1.4 Span
mc('la-1.4', L`What is \(\operatorname{span}\{(1,0,0),(0,1,0)\}\) in \(\mathbb{R}^3\)?`,
 [L`The \(xy\)-plane \(\{(x,y,0)\}\)`, L`All of \(\mathbb{R}^3\)`, L`The \(x\)-axis`, L`The line through \((1,1,0)\)`],
 L`\(a(1,0,0)+b(0,1,0)=(a,b,0)\).`);
gap('la-1.4', L`Example 1.4.3: \(v_1=(1,1,0,0)\), \(v_2=(0,2,1,0)\), \(v_3=(1,-1,0,1)\). Write \((-1,7,1,-3)=av_1+bv_2+cv_3\).`,
 [{before:L`Comparing 3rd and 4th components: \(b=\) `, answer:'1', after:L` and \(c=\) `, answer2:'-3', after2:'.', why:L`Only \(v_2\) has a 3rd component and only \(v_3\) a 4th.`},
  {before:L`From the 1st component \(a+c=-1\), so \(a=\) `, answer:'2', after:L` (check: \(2+2+3=7\) ✓).`, why:L`\(a=-1-c=2\).`}]);
mc('la-1.4', L`Is \(\{v_1,v_2,v_3\}\) (three vectors) a spanning set of \(\mathbb{R}^4\)?`,
 [L`No — \((v_1:v_2:v_3)\) has rank at most 3, so \(Ax=b\) is inconsistent for some \(b\)`, L`Yes — any three nonzero vectors span \(\mathbb{R}^4\)`, L`Yes, because \((-1,7,1,-3)\) lies in the span`, 'It depends on whether they are independent'],
 'Three vectors span at most a 3-dimensional subspace.');
tf('la-1.4', 'Properties of span',
 [[L`\(\operatorname{span}\varnothing=\{\mathbf0\}\).`, true, 'The convention in Definition 1.4.2.'],
  [L`Each \(v_j\) lies in \(\operatorname{span}\{v_1,\dots,v_n\}\).`, true, L`\(v_j=0v_1+\dots+1v_j+\dots+0v_n\).`],
  [L`\(\operatorname{span}\{v_1,\dots,v_n\}\) is the smallest subspace containing \(v_1,\dots,v_n\).`, true, 'Proposition 1.4.4(3).'],
  [L`If \(v\ne\mathbf0\) then \(\operatorname{span}\{v,2v\}\) is a plane.`, false, L`\(2v\) is a multiple of \(v\): the span is a line.`]]);
mc('la-1.4', L`Let \(A=(v_1:\dots:v_n)\). When is \(b\in\operatorname{col}(A)\)?`,
 [L`Exactly when \(Ax=b\) has a solution`, L`Exactly when \(Ax=\mathbf0\) has only the trivial solution`, L`Exactly when \(b\) is a column of \(A\)`, L`Exactly when \(A\) is square`],
 'Theorem 1.4.5 / Remark 1.4.7.');
mc('la-1.4', L`What is \(\operatorname{span}\{1+x,\,1-x\}\) in \(\mathbb{R}_1[x]\)?`,
 [L`All of \(\mathbb{R}_1[x]\)`, 'Only the constants', L`Only multiples of \(1+x\)`, L`\(\{0\}\)`],
 L`\(1=\tfrac12[(1+x)+(1-x)]\) and \(x=\tfrac12[(1+x)-(1-x)]\).`);
mc('la-1.4', L`For which \(k\) is \((1,k)\in\operatorname{span}\{(2,6)\}\)?`,
 [L`\(k=3\)`, L`\(k=6\)`, L`\(k=\tfrac13\)`, L`Every \(k\)`],
 L`\((1,k)=a(2,6)\Rightarrow a=\tfrac12\Rightarrow k=3\).`);
mc('la-1.4', L`What is \(\operatorname{span}\{(1,1),(2,2),(3,3)\}\) in \(\mathbb{R}^2\)?`,
 [L`The line \(y=x\)`, L`All of \(\mathbb{R}^2\)`, 'A 3-dimensional space', L`\(\{\mathbf0\}\)`],
 L`All three are multiples of \((1,1)\).`);

// ---------------------------------------------------------------- LA 1.5 Linear independence
gap('la-1.5', L`Exercise 1.5.4: \(v_1=(1,1,1)\), \(v_2=(0,1,-1)\), \(v_3=(1,2,1)\). Is \(\{v_1,v_2,v_3\}\) linearly independent?`,
 [{before:L`\(\det(v_1:v_2:v_3)=\) `, answer:'1', after:'.', why:L`\(\det\begin{pmatrix}1&0&1\\1&1&2\\1&-1&1\end{pmatrix}=1(1+2)-0+1(-1-1)=1\).`},
  {before:L`Nonzero, so \(\operatorname{null}(A)=\{\mathbf0\}\) and the set is linearly `, answer:['independent','linearly independent'], after:'.', why:'Proposition 1.5.9.'}]);
mc('la-1.5', L`Exercise 1.5.5: is \(\{\cos^2x,\ \cos2x,\ 3\}\) linearly independent in \(\mathcal{F}(\mathbb{R})\)?`,
 [L`No: \(6\cos^2x-3\cos2x-3=0\) for all \(x\)`, 'Yes: no function is a multiple of another', 'Yes: they are different kinds of function', L`No: \(\cos2x=2\cos x\)`],
 L`\(\cos2x=2\cos^2x-1\), so \(6\cos^2x-3(2\cos^2x-1)-3=0\): a nontrivial combination equal to the zero function.`);
tf('la-1.5', 'Independence facts',
 [['Any set containing the zero vector is linearly dependent.', true, L`\(1\cdot\mathbf0=\mathbf0\) is a nontrivial solution.`],
  [L`\(\{v\}\) is linearly independent if and only if \(v\ne\mathbf0\).`, true, L`\(av=\mathbf0\) with \(v\ne\mathbf0\) forces \(a=0\).`],
  [L`If \(\{v_1,v_2,v_3\}\) is dependent then \(v_3\) is a combination of \(v_1,v_2\).`, false, L`Some vector is — not necessarily \(v_3\). E.g. \(v_1=\mathbf0\), \(v_2=e_1\), \(v_3=e_2\).`],
  [L`The columns of \(A\) are independent iff \(\operatorname{null}(A)=\{\mathbf0\}\).`, true, 'Proposition 1.5.9.']]);
mc('la-1.5', L`For which \(k\) is \(\{(1,k),(k,4)\}\) linearly dependent?`,
 [L`\(k=\pm2\)`, L`\(k=2\) only`, L`\(k=4\)`, L`\(k=0\)`],
 L`\(\det\begin{pmatrix}1&k\\k&4\end{pmatrix}=4-k^2=0\iff k=\pm2\).`);
mc('la-1.5', 'Why does linear independence matter (Proposition 1.5.6)?',
 ['Every vector in the span has a unique expression as a linear combination', L`It guarantees the vectors span \(V\)`, 'It guarantees the vectors are orthogonal', 'It only means none of the vectors is zero'],
 'Independent ⟺ coefficients are uniquely determined.');
mc('la-1.5', L`Is \(\{(1,2,3),(2,4,6),(0,1,0)\}\) linearly independent?`,
 [L`No — \((2,4,6)=2(1,2,3)\)`, 'Yes — no vector is zero', L`Yes — there are 3 vectors in \(\mathbb{R}^3\)`, 'Cannot tell without a determinant'],
 L`\(2v_1-v_2+0v_3=\mathbf0\).`);
mc('la-1.5', L`The Linear Dependence Lemma (1.5.8) says that for a dependent set \(S\)…`,
 [L`some \(v_j\in\operatorname{span}(S\setminus\{v_j\})\), and removing it leaves the span unchanged`, L`every vector of \(S\) is a combination of the others`, L`\(S\) contains \(\mathbf0\)`, L`\(|S|>\dim V\)`],
 L`Only one suitable \(v_j\) is guaranteed.`);
mc('la-1.5', L`Is \(\{1+x,\ x+x^2,\ 1+x^2\}\) linearly independent in \(\mathbb{R}_2[x]\)?`,
 ['Yes', L`No — the sum is \(2(1+x+x^2)\)`, L`No — \((1+x)-(x+x^2)=1-x^2\)`, L`No — three polynomials in \(\mathbb{R}_2[x]\) are always dependent`],
 L`\(a+c=0,\ a+b=0,\ b+c=0\) force \(a=b=c=0\).`);

// ---------------------------------------------------------------- LA 1.6 Bases
mc('la-1.6', L`A set \(B\) is a basis of \(V\) if…`,
 [L`\(B\) spans \(V\) and is linearly independent`, L`\(B\) spans \(V\)`, L`\(B\) is linearly independent`, L`\(B\) contains the standard basis vectors`],
 'Definition 1.6.1: both conditions.');
gap('la-1.6', L`Example 1.6.3: \(v_1=(1,2,1)\), \(v_2=(2,9,0)\), \(v_3=(3,3,4)\). Show they form a basis of \(\mathbb{R}^3\).`,
 [{before:L`\(\det(v_1:v_2:v_3)=\) `, answer:'-1', after:'.', why:L`\(\det\begin{pmatrix}1&2&3\\2&9&3\\1&0&4\end{pmatrix}=36-2(8-3)+3(0-9)=-1\).`},
  {before:L`Nonzero, so the columns are independent and (3 vectors in \(\mathbb{R}^3\)) form a `, answer:'basis', after:'.', why:L`Independent and spanning (\(Ax=b\) always solvable).`}]);
mc('la-1.6', 'What does the Basis Reduction Theorem (1.6.5) guarantee?',
 [L`Every finite spanning set of \(V\ne\{\mathbf0\}\) contains a basis of \(V\)`, 'Every independent set can be reduced to a basis', 'Every basis has the same size', 'Every vector space has a finite basis'],
 'Remove redundant vectors (Linear Dependence Lemma) until independent but still spanning.');
mc('la-1.6', L`Which of these is a basis of \(\mathbb{R}_2[x]\)?`,
 [L`\(\{1,\ 1+x,\ 1+x+x^2\}\)`, L`\(\{x,\ x^2\}\)`, L`\(\{1,x,x^2,x^3\}\)`, L`\(\{1+x,\ 2+2x,\ x^2\}\)`],
 L`Three independent polynomials in the 3-dimensional \(\mathbb{R}_2[x]\).`);
tf('la-1.6', 'Bases',
 [[L`\(\mathbb{R}[x]\) is finite dimensional.`, false, 'A finite set of polynomials has a maximum degree, so cannot span.'],
  ['Every finite-dimensional vector space has a basis.', true, 'Theorem 1.6.10.'],
  ['A vector space has only one basis.', false, L`\(\{(1,0),(0,1)\}\) and \(\{(1,1),(1,-1)\}\) are both bases of \(\mathbb{R}^2\).`],
  ['Relative to a fixed basis, every vector has unique coordinates.', true, 'Spanning gives existence; independence gives uniqueness.']]);
mc('la-1.6', L`Write \((3,5)\) in the basis \(\{(1,1),(1,-1)\}\). The coordinates \((a,b)\) are…`,
 [L`\((4,-1)\)`, L`\((-1,4)\)`, L`\((3,5)\)`, L`\((1,4)\)`],
 L`\(a+b=3,\ a-b=5\Rightarrow a=4,\ b=-1\).`);
mc('la-1.6', L`Which is a basis of \(\mathrm{Mat}_{2\times2}(\mathbb{R})\)?`,
 [L`\(E_{11},E_{12},E_{21},E_{22}\)`, L`\(\{I\}\)`, L`\(\{I,E_{12}\}\)`, L`\(\{E_{11},E_{22}\}\)`],
 L`\(\begin{pmatrix}a&b\\c&d\end{pmatrix}=aE_{11}+bE_{12}+cE_{21}+dE_{22}\) uniquely.`);
mc('la-1.6', L`Find a basis of \(\operatorname{null}(A)\) for \(A=\begin{pmatrix}1&2\end{pmatrix}\).`,
 [L`\(\{(-2,1)\}\)`, L`\(\{(1,2)\}\)`, L`\(\{(2,-1),(-2,1)\}\)`, L`\(\{(1,0),(0,1)\}\)`],
 L`\(x+2y=0\Rightarrow(x,y)=y(-2,1)\).`);

// ---------------------------------------------------------------- LA 1.7 Dimension (Challenge)
mc('la-1.7', L`What is \(\dim\mathbb{R}_3[x]\)?`,
 [L`\(4\)`, L`\(3\)`, L`\(\infty\)`, L`\(8\)`],
 L`Basis \(\{1,x,x^2,x^3\}\): \(\dim\mathbb{R}_n[x]=n+1\).`);
mc('la-1.7', L`What is \(\dim\mathrm{Mat}_{2\times3}(\mathbb{R})\)?`,
 [L`\(6\)`, L`\(5\)`, L`\(3\)`, L`\(2\)`],
 L`\(\dim\mathrm{Mat}_{m\times n}=mn\).`);
mc('la-1.7', L`What are \(\dim_{\mathbb{R}}\mathbb{C}\) and \(\dim_{\mathbb{C}}\mathbb{C}\)?`,
 [L`\(2\) and \(1\)`, L`\(1\) and \(1\)`, L`\(2\) and \(2\)`, L`\(1\) and \(2\)`],
 L`Over \(\mathbb{R}\), \(\{1,i\}\) is a basis; over \(\mathbb{C}\), \(\{1\}\) (Remark 1.7.9).`);
tf('la-1.7', L`Corollary 1.7.12 in \(\mathbb{R}^3\) (dimension 3)`,
 [[L`Any 4 vectors in \(\mathbb{R}^3\) are linearly dependent.`, true, L`\(m>n\Rightarrow\) dependent.`],
  [L`No set of 2 vectors can span \(\mathbb{R}^3\).`, true, L`\(m<n\Rightarrow\) not spanning.`],
  [L`Any 3 linearly independent vectors in \(\mathbb{R}^3\) form a basis.`, true, L`\(m=n\): independent \(\iff\) spanning \(\iff\) basis.`],
  [L`Any 3 vectors in \(\mathbb{R}^3\) form a basis.`, false, 'They could lie in one plane.']]);
mc('la-1.7', L`Exchange Theorem: if \(\{v_1,\dots,v_r\}\) spans \(V\) and \(\{w_1,\dots,w_n\}\) is independent in \(V\), then…`,
 [L`\(n\le r\)`, L`\(n\ge r\)`, L`\(n=r\)`, L`\(n+r=\dim V\)`],
 'An independent set is never larger than a spanning set.');
gap('la-1.7', L`Exercise 1.7.8: find \(\dim\operatorname{null}(A)\) for \[A=\begin{pmatrix}2&2&-1&0&1\\-1&-1&2&-3&1\\1&1&-2&0&-1\\0&0&1&1&1\end{pmatrix}.\]`,
 [{before:'Row reducing, the number of pivot columns is ', answer:'3', after:'.', why:L`Pivot on row 3: \(r_1-2r_3=(0,0,3,0,3)\), \(r_2+r_3=(0,0,0,-3,0)\), and \(r_4\) reduces to zero. Pivots in columns 1, 3, 4.`},
  {before:L`So there are \(5-3\) free variables and \(\dim\operatorname{null}(A)=\) `, answer:'2', after:'.', why:L`\(x_2\) and \(x_5\) are free.`}],
 'Free variables = columns − pivots.');
mc('la-1.7', L`What is \(\dim W\) for \(W=\{(x,y,z,w)\in\mathbb{R}^4:x+y+z+w=0\}\)?`,
 [L`\(3\)`, L`\(4\)`, L`\(1\)`, L`\(2\)`],
 L`One constraint on 4 variables: \(y,z,w\) free.`);
mc('la-1.7', L`\(\dim V=5\) and \(S\) is a set of 5 vectors with \(\operatorname{span}S=V\). Then…`,
 [L`\(S\) is a basis of \(V\)`, L`\(S\) might be dependent`, L`a proper subset of \(S\) spans \(V\)`, 'nothing can be concluded'],
 'Corollary 1.7.12(iii).');
mc('la-1.7', L`\(U\) is a subspace of a finite-dimensional \(V\) with \(\dim U=\dim V\). Then…`,
 [L`\(U=V\)`, L`\(U\) could be a proper subspace`, L`\(U=\{\mathbf0\}\)`, L`\(\dim U=0\)`],
 L`A basis of \(U\) is \(n\) independent vectors in \(V\), hence a basis of \(V\).`);
mc('la-1.7', L`What is the dimension of the space of symmetric \(2\times2\) real matrices?`,
 [L`\(3\)`, L`\(4\)`, L`\(2\)`, L`\(1\)`],
 L`\(\begin{pmatrix}a&b\\b&c\end{pmatrix}=aE_{11}+cE_{22}+b(E_{12}+E_{21})\).`);

// ---------------------------------------------------------------- VC 1.1 Vectors
mc('vc-1.1', L`Find the area of the parallelogram with sides \(\mathbf a=(1,1,1)\) and \(\mathbf b=(-4,3,2)\).`,
 [L`\(\sqrt{86}\)`, L`\(86\)`, L`\(\sqrt{14}\)`, L`\(12\)`],
 L`\(\mathbf a\times\mathbf b=(-1,-6,7)\); area \(=\|\mathbf a\times\mathbf b\|=\sqrt{1+36+49}=\sqrt{86}\).`);
gap('vc-1.1', L`Let \(\mathbf a=(1,2,0)\) and \(\mathbf b=(0,1,3)\).`,
 [{before:L`\(\mathbf a\cdot\mathbf b=\) `, answer:'2', after:'.', why:L`\(0+2+0=2\).`},
  {before:L`\(\mathbf a\times\mathbf b=\) `, answer:['(6,-3,1)','6,-3,1'], show:L`\((6,-3,1)\)`, after:' (type as (x,y,z)).', why:L`\((2\cdot3-0\cdot1,\ 0\cdot0-1\cdot3,\ 1\cdot1-2\cdot0)=(6,-3,1)\).`}]);
mc('vc-1.1', L`What is the angle between \((1,0,1)\) and \((0,1,1)\)?`,
 [L`\(\pi/3\)`, L`\(\pi/4\)`, L`\(\pi/6\)`, L`\(\pi/2\)`],
 L`\(\cos\theta=\dfrac{1}{\sqrt2\sqrt2}=\tfrac12\Rightarrow\theta=\pi/3\).`);
tf('vc-1.1', 'Dot and cross products',
 [[L`\(\mathbf a\times\mathbf b\) is orthogonal to both \(\mathbf a\) and \(\mathbf b\).`, true, 'Geometric property of the cross product.'],
  [L`\(\mathbf a\times\mathbf b=\mathbf b\times\mathbf a\).`, false, L`Anti-commutative: \(\mathbf b\times\mathbf a=-(\mathbf a\times\mathbf b)\).`],
  [L`\(\mathbf a\cdot\mathbf a=\|\mathbf a\|^2\).`, true, 'Sum of squared components.'],
  [L`If \(\mathbf a\cdot\mathbf b=0\) with \(\mathbf a,\mathbf b\ne\mathbf0\), they are parallel.`, false, L`Orthogonal. Parallel vectors have \(\mathbf a\times\mathbf b=\mathbf0\).`]]);
mc('vc-1.1', L`What is the unit vector in the direction of \((3,0,4)\)?`,
 [L`\((\tfrac35,0,\tfrac45)\)`, L`\((3,0,4)/25\)`, L`\((1,0,1)\)`, L`\((\tfrac37,0,\tfrac47)\)`],
 L`\(\|(3,0,4)\|=5\).`);
mc('vc-1.1', L`For which \(k\) is \((1,k,2)\perp(3,1,-1)\)?`,
 [L`\(k=-1\)`, L`\(k=1\)`, L`\(k=5\)`, L`\(k=-5\)`],
 L`\(3+k-2=0\).`);
mc('vc-1.1', L`What is \(\mathbf e_x\times\mathbf e_y\)?`,
 [L`\(\mathbf e_z\)`, L`\(-\mathbf e_z\)`, L`\(\mathbf 0\)`, L`\(\mathbf e_x\)`],
 'Right-handed Cartesian basis.');
mc('vc-1.1', L`\(\|\mathbf a\|=2\), \(\|\mathbf b\|=3\), angle \(\pi/6\). What is \(\|\mathbf a\times\mathbf b\|\)?`,
 [L`\(3\)`, L`\(3\sqrt3\)`, L`\(6\)`, L`\(1.5\)`],
 L`\(\|\mathbf a\|\|\mathbf b\||\sin\theta|=2\cdot3\cdot\tfrac12=3\).`);

// ---------------------------------------------------------------- VC 1.2 Coordinates
mc('vc-1.2', L`Express \((x,y)=(0,-2)\) in plane polars \((\rho,\phi)\) with \(0\le\phi<2\pi\).`,
 [L`\((2,\ 3\pi/2)\)`, L`\((2,\ -\pi/2)\)`, L`\((-2,\ \pi/2)\)`, L`\((2,\ \pi/2)\)`],
 L`\(\rho=2\), negative \(y\)-axis: \(\phi=3\pi/2\) (\(-\pi/2\) is outside the range).`);
mc('vc-1.2', L`Spherical polars \(r=2,\ \theta=\pi/2,\ \phi=\pi/2\). Cartesian coordinates?`,
 [L`\((0,2,0)\)`, L`\((2,0,0)\)`, L`\((0,0,2)\)`, L`\((0,2,2)\)`],
 L`\(x=r\sin\theta\cos\phi=0,\ y=r\sin\theta\sin\phi=2,\ z=r\cos\theta=0\).`);
mc('vc-1.2', L`In the notes' spherical polars \((r,\theta,\phi)\), what does \(\theta\) measure?`,
 [L`The angle from the positive \(z\)-axis, \(0\le\theta\le\pi\)`, L`The angle from the \(x\)-axis in the \(xy\)-plane, \(0\le\theta<2\pi\)`, L`The distance from the \(z\)-axis`, L`The angle from the \(xy\)-plane`],
 L`\(\phi\) is the azimuthal angle as in plane polars.`);
mc('vc-1.2', L`In cylindrical polars \((\rho,\phi,z)\), what is \(\rho\)?`,
 [L`\(\sqrt{x^2+y^2}\), the distance from the \(z\)-axis`, L`\(\sqrt{x^2+y^2+z^2}\)`, L`The angle from the \(x\)-axis`, 'The height above the xy-plane'],
 'The perpendicular distance from the z-axis.');
gap('vc-1.2', L`Convert \((1,1,\sqrt2)\) to spherical polars \((r,\theta,\phi)\).`,
 [{before:L`\(r=\) `, answer:'2', after:'.', why:L`\(\sqrt{1+1+2}=2\).`},
  {before:L`\(\cos\theta=z/r=\sqrt2/2\), so \(\theta=\) `, answer:['π/4','pi/4'], show:L`\(\pi/4\)`, after:L` (and \(\phi=\pi/4\)).`, why:L`\(\arccos(\sqrt2/2)=\pi/4\).`}]);
tf('vc-1.2', 'Coordinate systems',
 [[L`\(\mathbf e_\rho\) and \(\mathbf e_\phi\) point in the same directions at every point.`, false, 'They vary with position.'],
  [L`In spherical polars, \(r=\|\mathbf x\|\).`, true, 'Example 1.2.'],
  [L`The surface \(r=1\) is the unit sphere.`, true, 'All points at distance 1 from the origin.'],
  [L`In cylindrical polars, \(\rho=1\) is a sphere.`, false, L`A cylinder of radius 1 about the \(z\)-axis.`]]);
mc('vc-1.2', L`What is \(x^2+y^2=4\) in cylindrical polars?`,
 [L`\(\rho=2\)`, L`\(\rho=4\)`, L`\(r=2\)`, L`\(\phi=2\)`],
 L`\(x^2+y^2=\rho^2\).`);
mc('vc-1.2', L`What is the cone \(z=\sqrt{x^2+y^2}\) in spherical polars?`,
 [L`\(\theta=\pi/4\)`, L`\(r=1\)`, L`\(\phi=\pi/4\)`, L`\(\theta=\pi/2\)`],
 L`\(r\cos\theta=r\sin\theta\Rightarrow\tan\theta=1\).`);

// ---------------------------------------------------------------- VC 1.3 Fields & gradient
mc('vc-1.3', L`Find \(\nabla f\) for \(f(x,y,z)=x^2y+yz^3\).`,
 [L`\((2xy,\ x^2+z^3,\ 3yz^2)\)`, L`\((2xy,\ x^2+3yz^2,\ z^3)\)`, L`\((2x,\ 1+3z^2,\ 3z^2)\)`, L`\(2xy+x^2+z^3+3yz^2\)`],
 'The gradient is a vector of partial derivatives.');
mc('vc-1.3', 'Which of these is naturally a vector field?',
 ['Wind velocity on a weather map', 'Temperature on a weather map', 'Air pressure at each point', 'Height of terrain'],
 L`Magnitude and direction at each point: \(\mathbb{R}^2\to\mathbb{R}^2\).`);
gap('vc-1.3', L`Let \(f(x,y,z)=xe^{yz}\). Evaluate its partial derivatives at \((1,0,2)\).`,
 [{before:L`\(\partial f/\partial y=xze^{yz}\), which at \((1,0,2)\) equals `, answer:'2', after:'.', why:L`\(1\cdot2\cdot e^0=2\).`},
  {before:L`\(\partial f/\partial z=xye^{yz}\), which at \((1,0,2)\) equals `, answer:'0', after:'.', why:L`\(y=0\).`}]);
mc('vc-1.3', L`What is \(\partial/\partial x\) of \(f(x,y)=\sin(xy)\)?`,
 [L`\(y\cos(xy)\)`, L`\(\cos(xy)\)`, L`\(x\cos(xy)\)`, L`\(-y\cos(xy)\)`],
 L`Chain rule, treating \(y\) as a constant.`);
tf('vc-1.3', 'Fields and partial derivatives',
 [['The gradient of a scalar field is a scalar field.', false, L`\(\nabla f\) is a vector field.`],
  [L`A vector field is a map \(\mathbb{R}^n\to\mathbb{R}^m\) with \(m>1\).`, true, 'Definition in §1.3.1.'],
  [L`When computing \(\partial f/\partial x\), \(y\) and \(z\) are held constant.`, true, 'That is what "partial" means.'],
  [L`\(f\) is continuous at \(\mathbf a\) if \(f(\mathbf x)\to f(\mathbf a)\) along every path.`, true, L`\(\lim_{\mathbf x\to\mathbf a}f(\mathbf x)=f(\mathbf a)\).`]]);
mc('vc-1.3', L`Find \(\nabla f\) for \(f(x,y)=\ln(x^2+y^2)\).`,
 [L`\(\left(\dfrac{2x}{x^2+y^2},\dfrac{2y}{x^2+y^2}\right)\)`, L`\(\left(\dfrac{1}{x^2+y^2},\dfrac{1}{x^2+y^2}\right)\)`, L`\((2x,2y)\)`, L`\(\left(\dfrac{x}{x^2+y^2},\dfrac{y}{x^2+y^2}\right)\)`],
 'Chain rule.');
mc('vc-1.3', L`In 3D, let \(f=r=\|\mathbf x\|\). What is \(\nabla f\) for \(\mathbf x\ne\mathbf0\)?`,
 [L`\(\mathbf x/r\)`, L`\(\mathbf x\)`, L`\(1\)`, L`\(r\mathbf x\)`],
 L`\(\partial r/\partial x=x/r\) etc., so \(\nabla r=\mathbf e_r\).`);
mc('vc-1.3', L`Which product rule holds for scalar fields \(f,g\)?`,
 [L`\(\nabla(fg)=f\nabla g+g\nabla f\)`, L`\(\nabla(fg)=\nabla f\,\nabla g\)`, L`\(\nabla(fg)=f\nabla g-g\nabla f\)`, L`\(\nabla(fg)=\nabla f\cdot\nabla g\)`],
 'Apply the ordinary product rule to each component.');

// ---------------------------------------------------------------- VC 1.4 Double integrals
gap('vc-1.4', L`Example 1.4: evaluate \(I=\displaystyle\int_0^1\!\int_{x^2}^{x}xy\,dy\,dx\).`,
 [{before:L`The inner integral gives \(\tfrac12x(x^2-x^4)\), so \(I=\tfrac12\int_0^1(x^3-x^5)\,dx\), and \(\int_0^1(x^3-x^5)\,dx=\) `, answer:'1/12', show:L`\(\tfrac1{12}\)`, after:'.', why:L`\(\tfrac14-\tfrac16=\tfrac1{12}\).`},
  {before:L`Hence \(I=\) `, answer:'1/24', show:L`\(\tfrac1{24}\)`, after:'.', why:L`\(\tfrac12\cdot\tfrac1{12}\).`}]);
mc('vc-1.4', L`Evaluate \(\iint_R(x+y)\,dA\) over \(R=[0,2]\times[0,1]\).`,
 [L`\(3\)`, L`\(2\)`, L`\(4\)`, L`\(\tfrac52\)`],
 L`\(\int_0^2(x+\tfrac12)\,dx=2+1\).`);
mc('vc-1.4', L`Reverse the order of \(\displaystyle\int_0^1\!\int_{x^2}^{x}f\,dy\,dx\).`,
 [L`\(\displaystyle\int_0^1\!\int_{y}^{\sqrt y}f\,dx\,dy\)`, L`\(\displaystyle\int_0^1\!\int_{x^2}^{x}f\,dx\,dy\)`, L`\(\displaystyle\int_0^1\!\int_{\sqrt y}^{y}f\,dx\,dy\)`, L`\(\displaystyle\int_0^1\!\int_0^1f\,dx\,dy\)`],
 L`\(x^2\le y\le x\) for \(0\le x\le1\) \(\iff\) \(y\le x\le\sqrt y\) for \(0\le y\le1\).`,
 L`Sketch the region between \(y=x^2\) and \(y=x\).`);
mc('vc-1.4', L`What is the area between \(y=x\) and \(y=x^2\) for \(0\le x\le1\)?`,
 [L`\(\tfrac16\)`, L`\(\tfrac12\)`, L`\(\tfrac13\)`, L`\(\tfrac1{12}\)`],
 L`\(\int_0^1(x-x^2)\,dx=\tfrac12-\tfrac13\).`);
mc('vc-1.4', L`Evaluate \(\iint(x^2+y^2)\,dA\) over the disc \(x^2+y^2\le4\).`,
 [L`\(8\pi\)`, L`\(\tfrac{16\pi}{3}\)`, L`\(4\pi\)`, L`\(32\pi\)`],
 L`\(\int_0^{2\pi}\!\int_0^2\rho^2\cdot\rho\,d\rho\,d\phi=2\pi\cdot4=8\pi\). (\(16\pi/3\) comes from forgetting the \(\rho\) in \(dA\).)`,
 L`\(dA=\rho\,d\rho\,d\phi\).`);
tf('vc-1.4', 'Double integrals',
 [['Non-constant limits can only appear on the inner integral.', true, 'The outer limits must be constants.'],
  [L`In plane polars, \(dA=d\rho\,d\phi\).`, false, L`\(dA=\rho\,d\rho\,d\phi\).`],
  [L`\(\iint_R1\,dA\) is the area of \(R\).`, true, L`Setting \(f=1\).`],
  ['Changing the order of integration never requires changing the limits.', false, 'Only for rectangles.']]);
mc('vc-1.4', L`Evaluate \(\displaystyle\int_0^1\!\int_0^1e^{x+y}\,dx\,dy\).`,
 [L`\((e-1)^2\)`, L`\(e^2-1\)`, L`\(e-1\)`, L`\(2(e-1)\)`],
 L`It factorises: \(\left(\int_0^1e^x\,dx\right)^2\).`);
mc('vc-1.4', L`What is the area of the quarter disc \(x^2+y^2\le9,\ x,y\ge0\)?`,
 [L`\(\tfrac{9\pi}{4}\)`, L`\(9\pi\)`, L`\(\tfrac{3\pi}{2}\)`, L`\(\tfrac{9\pi}{2}\)`],
 L`\(\int_0^{\pi/2}\!\int_0^3\rho\,d\rho\,d\phi=\tfrac\pi2\cdot\tfrac92\).`);

// ---------------------------------------------------------------- VC 1.5 Triple integrals
mc('vc-1.5', L`What is the volume element in spherical polars \((r,\theta,\phi)\)?`,
 [L`\(r^2\sin\theta\,dr\,d\theta\,d\phi\)`, L`\(r\,dr\,d\theta\,d\phi\)`, L`\(r^2\,dr\,d\theta\,d\phi\)`, L`\(\sin\theta\,dr\,d\theta\,d\phi\)`],
 L`\(dV=r^2\sin\theta\,dr\,d\theta\,d\phi\).`);
mc('vc-1.5', L`What is the volume element in cylindrical polars \((\rho,\phi,z)\)?`,
 [L`\(\rho\,d\rho\,d\phi\,dz\)`, L`\(d\rho\,d\phi\,dz\)`, L`\(\rho^2\,d\rho\,d\phi\,dz\)`, L`\(\rho\sin\phi\,d\rho\,d\phi\,dz\)`],
 L`The plane-polar area element times \(dz\).`);
gap('vc-1.5', L`Example 1.6: integrate \(f=z\) over the hemisphere between \(z=0\) and \(z=\sqrt{1-x^2-y^2}\).`,
 [{before:L`After the \(z\)-integral, \(I=\tfrac12\iint_R(1-x^2-y^2)\,dA\) over the unit disc. In polars, \(\int_0^1(1-\rho^2)\rho\,d\rho=\) `, answer:'1/4', show:L`\(\tfrac14\)`, after:'.', why:L`\(\tfrac12-\tfrac14\).`},
  {before:L`So \(I=\tfrac12\cdot2\pi\cdot\tfrac14=\) `, answer:['π/4','pi/4'], show:L`\(\pi/4\)`, after:'.', why:L`The \(\phi\)-integral contributes \(2\pi\).`}]);
mc('vc-1.5', L`Which integral gives the volume of a ball of radius \(a\)?`,
 [L`\(\displaystyle\int_0^{2\pi}\!\!\int_0^{\pi}\!\!\int_0^{a}r^2\sin\theta\,dr\,d\theta\,d\phi\)`, L`\(\displaystyle\int_0^{2\pi}\!\!\int_0^{2\pi}\!\!\int_0^{a}r^2\sin\theta\,dr\,d\theta\,d\phi\)`, L`\(\displaystyle\int_0^{\pi}\!\!\int_0^{\pi}\!\!\int_0^{a}r\,dr\,d\theta\,d\phi\)`, L`\(\displaystyle\int_0^{2\pi}\!\!\int_0^{\pi}\!\!\int_0^{a}dr\,d\theta\,d\phi\)`],
 L`\(\theta\in[0,\pi]\), \(\phi\in[0,2\pi)\); value \(\tfrac{a^3}{3}\cdot2\cdot2\pi=\tfrac43\pi a^3\).`);
mc('vc-1.5', L`Evaluate \(\iiint xyz\,dV\) over the unit cube \([0,1]^3\).`,
 [L`\(\tfrac18\)`, L`\(\tfrac16\)`, L`\(\tfrac12\)`, L`\(1\)`],
 L`\(\left(\tfrac12\right)^3\).`);
mc('vc-1.5', 'Using cylindrical polars, what is the volume of a cylinder of radius 2 and height 3?',
 [L`\(12\pi\)`, L`\(6\pi\)`, L`\(4\pi\)`, L`\(18\pi\)`],
 L`\(\int_0^3\!\int_0^{2\pi}\!\int_0^2\rho\,d\rho\,d\phi\,dz=3\cdot2\pi\cdot2\).`);
tf('vc-1.5', 'Volume integrals',
 [['The inner integrals are always evaluated first.', true, 'Note in §1.5.'],
  [L`\(\iiint_V1\,dV\) gives the volume of \(V\).`, true, L`Setting \(f=1\).`],
  [L`In spherical polars, \(\theta\) runs from \(0\) to \(2\pi\).`, false, L`\(0\le\theta\le\pi\); \(\phi\) runs over \([0,2\pi)\).`],
  [L`In cylindrical polars, \(dV=d\rho\,d\phi\,dz\).`, false, L`\(dV=\rho\,d\rho\,d\phi\,dz\).`]]);
mc('vc-1.5', L`What is the volume in the first octant under the plane \(z=1-x-y\)?`,
 [L`\(\tfrac16\)`, L`\(\tfrac13\)`, L`\(\tfrac12\)`, L`\(1\)`],
 L`\(\int_0^1\!\int_0^{1-x}(1-x-y)\,dy\,dx=\int_0^1\tfrac{(1-x)^2}{2}dx=\tfrac16\).`);

// ---------------------------------------------------------------- VC 2.1 Curves
mc('vc-2.1', L`Find the tangent vector to \(C:t\mapsto(t,t^2)\) at \(t=1\).`,
 [L`\((1,2)\)`, L`\((1,1)\)`, L`\((2,1)\)`, L`\((0,2)\)`],
 L`\(\mathbf v(t)=(1,2t)\).`);
mc('vc-2.1', L`Describe \(C:t\mapsto(a\sin t,\ a\cos t)\), \(0\le t\le\pi\) (\(a>0\)).`,
 [L`Half the circle of radius \(a\), clockwise from \((0,a)\) to \((0,-a)\)`, L`A full circle of radius \(a\), anticlockwise`, L`Half the circle, anticlockwise from \((a,0)\) to \((-a,0)\)`, L`A straight line from \((0,a)\) to \((0,-a)\)`],
 L`\(x^2+y^2=a^2\); \(t=0\): \((0,a)\), \(t=\tfrac\pi2\): \((a,0)\), \(t=\pi\): \((0,-a)\).`);
gap('vc-2.1', L`\(C:t\mapsto(3\cos t,\ 3\sin t)\), \(0\le t\le\pi/2\).`,
 [{before:L`The speed is \(v(t)=\|(-3\sin t,\ 3\cos t)\|=\) `, answer:'3', after:'.', why:L`\(\sqrt{9\sin^2t+9\cos^2t}=3\).`},
  {before:L`So \(L=\int_0^{\pi/2}3\,dt=\) `, answer:['3π/2','3pi/2'], show:L`\(3\pi/2\)`, after:'.', why:'A quarter circle of radius 3.'}]);
mc('vc-2.1', L`Which parametrisation describes the same curve as \(t\mapsto(t,t^2)\), \(0\le t\le2\)?`,
 [L`\(\lambda\mapsto(\lambda^2,\lambda^4)\), \(0\le\lambda\le\sqrt2\)`, L`\(\lambda\mapsto(\lambda^2,\lambda^4)\), \(0\le\lambda\le2\)`, L`\(\lambda\mapsto(2\lambda,\lambda^2)\), \(0\le\lambda\le1\)`, L`\(\lambda\mapsto(\lambda,\lambda^2)\), \(0\le\lambda\le4\)`],
 L`Substitute \(t=\lambda^2\) (note in §2.1.1).`);
mc('vc-2.1', L`Eliminating \(t\) from \(t\mapsto(\sin t,\cos t)\) gives \(x^2+y^2=1\). What information is lost?`,
 ['The start and end points and the direction of travel', 'The radius', 'The centre', 'Nothing'],
 'The geometric form contains less information than the parametric form.');
tf('vc-2.1', 'Tangents and lengths',
 [['The magnitude of the tangent vector depends on the parametrisation.', true, 'Reparametrising changes the speed.'],
  ['The length of a curve depends on the parametrisation.', false, L`\(L\) is independent of the parametrisation.`],
  [L`The unit tangent \(\mathbf v/\|\mathbf v\|\) does not depend on the parametrisation (same direction of travel).`, true, 'Only the magnitude changes.'],
  [L`The line element of the curve is \(d\mathbf x=\mathbf v\,dt\).`, true, 'Note in §2.1.3.']]);
mc('vc-2.1', L`Find the length of \(t\mapsto(1+3t,\ 2+4t)\), \(0\le t\le2\).`,
 [L`\(10\)`, L`\(5\)`, L`\(20\)`, L`\(7\)`],
 L`\(\mathbf v=(3,4)\), speed 5, \(L=\int_0^2 5\,dt\).`);
mc('vc-2.1', L`What is the speed of \(t\mapsto(e^t\cos t,\ e^t\sin t)\)?`,
 [L`\(\sqrt2\,e^t\)`, L`\(e^t\)`, L`\(2e^t\)`, L`\(\sqrt2\)`],
 L`\(\mathbf v=e^t(\cos t-\sin t,\ \sin t+\cos t)\), \(\|\mathbf v\|^2=2e^{2t}\).`);

// ---------------------------------------------------------------- VC 2.1.5 Arc length (Possible)
mc('vc-2.1.5', L`For the arc-length \(s(t)=\int_{t_1}^{t}v(t')\,dt'\), what is \(ds/dt\)?`,
 [L`\(v(t)\), the speed`, L`\(1\)`, L`\(s(t)/t\)`, L`\(0\)`],
 'Fundamental theorem of calculus.');
mc('vc-2.1.5', L`\(C:t\mapsto(a\sin t,a\cos t)\), \(0\le t\le\pi\), has \(v=a\). Its natural parametrisation is…`,
 [L`\(s\mapsto\big(a\sin(s/a),\ a\cos(s/a)\big)\), \(0\le s\le\pi a\)`, L`\(s\mapsto(\sin s,\cos s)\), \(0\le s\le\pi\)`, L`\(s\mapsto\big(a\sin(as),\ a\cos(as)\big)\), \(0\le s\le\pi\)`, L`\(s\mapsto(as,a)\), \(0\le s\le\pi\)`],
 L`\(s=at\Rightarrow t=s/a\) (Example 2.4).`);
mc('vc-2.1.5', 'What is special about the natural (arc-length) parametrisation?',
 ['Its tangent vector has unit length everywhere', 'It always starts at the origin', 'Its tangent vector is constant', 'It makes the curve closed'],
 L`\(v(s)=ds/ds=1\).`);
mc('vc-2.1.5', L`For a curve on \(t_1\le t\le t_2\), what are \(s(t_1)\) and \(s(t_2)\)?`,
 [L`\(0\) and \(L\)`, L`\(L\) and \(0\)`, L`\(t_1\) and \(t_2\)`, L`\(1\) and \(L\)`],
 L`\(s(t_1)=\int_{t_1}^{t_1}v=0\), \(s(t_2)=L\).`);

// ---------------------------------------------------------------- VC 2.2 Line integrals
gap('vc-2.2', L`Example 2.6: \(\mathbf F=(2xy,\ x^2)\) along \(y=x^2\) from \((0,0)\) to \((1,1)\), parametrised by \((t,t^2)\).`,
 [{before:L`\(\mathbf F(\mathbf x(t))\cdot\mathbf v(t)=(2t^3,t^2)\cdot(1,2t)=\) `, answer:['4t^3','4t³'], show:L`\(4t^3\)`, after:'.', why:L`\(2t^3+2t^3\).`},
  {before:L`So \(\int_C\mathbf F\cdot d\mathbf x=\int_0^14t^3\,dt=\) `, answer:'1', after:'.', why:L`\([t^4]_0^1\).`}]);
mc('vc-2.2', L`Example 2.5: find \(\int_C(x+y)^2\,ds\) along \(t\mapsto(2\cos t,2\sin t)\), \(0\le t\le\pi\).`,
 [L`\(8\pi\)`, L`\(4\pi\)`, L`\(8\pi+8\)`, L`\(16\pi\)`],
 L`\(v=2\), \((x+y)^2=4(1+\sin2t)\): \(\int_0^\pi8(1+\sin2t)\,dt=8\pi\).`);
mc('vc-2.2', L`What kind of quantity is \(\int_C\mathbf F\cdot d\mathbf x\)?`,
 ['A scalar', 'A vector', 'A vector field', 'A curve'],
 'The dot product makes the integrand scalar.');
mc('vc-2.2', L`Evaluate \(\oint_C\mathbf F\cdot d\mathbf x\) for \(\mathbf F=(-y,x)\) around the unit circle \((\cos t,\sin t)\), \(0\le t\le2\pi\).`,
 [L`\(2\pi\)`, L`\(0\)`, L`\(\pi\)`, L`\(-2\pi\)`],
 L`\(\mathbf F\cdot\mathbf v=\sin^2t+\cos^2t=1\).`);
mc('vc-2.2', L`Evaluate \(\int_Cx\,ds\) along the segment from \((0,0)\) to \((3,4)\).`,
 [L`\(\tfrac{15}{2}\)`, L`\(\tfrac32\)`, L`\(5\)`, L`\(\tfrac{25}{2}\)`],
 L`\((3t,4t)\), speed 5: \(\int_0^13t\cdot5\,dt\).`);
tf('vc-2.2', 'Line integrals',
 [[L`Only the component of \(\mathbf F\) tangent to \(C\) contributes to \(\int_C\mathbf F\cdot d\mathbf x\).`, true, 'Note in §2.2.2.'],
  [L`\(\int_C1\,ds\) is the length of \(C\).`, true, 'Equation (2.6).'],
  [L`\(\int_Cf\,ds\) depends on the parametrisation chosen.`, false, 'It is independent of the parametrisation.'],
  [L`Reversing the direction of \(C\) changes the sign of \(\int_C\mathbf F\cdot d\mathbf x\).`, true, L`\(\mathbf v\) reverses.`]]);
mc('vc-2.2', L`For \(C:t\mapsto(x(t),y(t))\), \(t_1\le t\le t_2\), \(\int_Cf\,ds\) equals…`,
 [L`\(\int_{t_1}^{t_2}f(x(t),y(t))\,v(t)\,dt\) with \(v=\|\mathbf v\|\)`, L`\(\int_{t_1}^{t_2}f(x(t),y(t))\,dt\)`, L`\(\int_{t_1}^{t_2}f(x(t),y(t))\,\mathbf v(t)\,dt\)`, L`\(\int_{t_1}^{t_2}\nabla f\cdot\mathbf v\,dt\)`],
 L`\(ds=v(t)\,dt\).`);
mc('vc-2.2', L`Evaluate \(\int_C\mathbf F\cdot d\mathbf x\) for \(\mathbf F=(y,x)\) along \(t\mapsto(t,t)\), \(0\le t\le1\).`,
 [L`\(1\)`, L`\(2\)`, L`\(\tfrac12\)`, L`\(0\)`],
 L`\(\mathbf F\cdot\mathbf v=2t\).`);

// ---------------------------------------------------------------- VC 2.3 3D curves
mc('vc-2.3', L`What is the speed of the helix \(t\mapsto(\sin t,\cos t,t)\)?`,
 [L`\(\sqrt2\)`, L`\(1\)`, L`\(2\)`, L`\(\sqrt{1+t^2}\)`],
 L`\(\mathbf v=(\cos t,-\sin t,1)\).`);
mc('vc-2.3', L`What is the length of the helix \((\sin t,\cos t,t)\), \(0\le t\le2\pi\)?`,
 [L`\(2\sqrt2\,\pi\)`, L`\(2\pi\)`, L`\(4\pi\)`, L`\(\sqrt2\,\pi\)`],
 L`\(\int_0^{2\pi}\sqrt2\,dt\).`);
gap('vc-2.3', L`\(C:t\mapsto(t,\ t^2,\ \tfrac23t^3)\), \(0\le t\le1\).`,
 [{before:L`\(\mathbf v=(1,2t,2t^2)\), so \(\|\mathbf v\|=\sqrt{1+4t^2+4t^4}=1+{}\)`, answer:'2', after:L`\(\,t^2\).`, why:L`\(1+4t^2+4t^4=(1+2t^2)^2\).`},
  {before:L`\(L=\int_0^1(1+2t^2)\,dt=\) `, answer:'5/3', show:L`\(\tfrac53\)`, after:'.', why:L`\(1+\tfrac23\).`}]);
mc('vc-2.3', L`Example 2.7: evaluate \(\int_C\mathbf F\cdot d\mathbf x\) for \(\mathbf F=(y,-x,z^2-3x)\) along \((\sin t,\cos t,t)\), \(0\le t\le2\pi\).`,
 [L`\(2\pi+\tfrac{8\pi^3}{3}\)`, L`\(\tfrac{8\pi^3}{3}\)`, L`\(2\pi\)`, L`\(2\pi+\tfrac{8\pi^3}{3}-6\)`],
 L`\(\mathbf F\cdot\mathbf v=\cos^2t+\sin^2t+t^2-3\sin t\); integrate over \([0,2\pi]\).`);
mc('vc-2.3', L`Tangent vector to \(t\mapsto(\cos t,\sin t,2t)\) at \(t=0\)?`,
 [L`\((0,1,2)\)`, L`\((1,0,0)\)`, L`\((-1,0,2)\)`, L`\((0,1,0)\)`],
 L`\(\mathbf v=(-\sin t,\cos t,2)\).`);
mc('vc-2.3', L`What is the projection of \((\sin t,\cos t,t)\) onto the \(xy\)-plane?`,
 ['The unit circle centred at the origin', 'A straight line', 'A parabola', 'A spiral of growing radius'],
 L`\(x^2+y^2=1\).`);
tf('vc-2.3', 'Curves in 3D',
 [[L`The helix \((\sin t,\cos t,t)\) has constant speed.`, true, L`\(\sqrt2\).`],
  [L`For a 3D curve, \(L=\int\sqrt{x'^2+y'^2+z'^2}\,dt\).`, true, 'Same formula with an extra component.'],
  [L`\(\int_C\mathbf F\cdot d\mathbf x\) of a 3D field is a vector.`, false, 'It is a scalar.'],
  [L`On the helix \((\sin t,\cos t,t)\), \(z\) increases with \(t\).`, true, L`\(z=t\).`]]);
mc('vc-2.3', L`What is the length of the segment from \((1,0,0)\) to \((1,2,2)\)?`,
 [L`\(2\sqrt2\)`, L`\(2\)`, L`\(4\)`, L`\(3\)`],
 L`\(\|(0,2,2)\|=\sqrt8\).`);
})();
