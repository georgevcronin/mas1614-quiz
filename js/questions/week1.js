// ================================================================
// WEEK 1 QUESTIONS
// Short written exam questions, all maths in LaTeX (\( \) inline, \[ \] display).
// sq(id, section, marks, question, mark scheme, parts?)
// ================================================================
(function(){
const L = String.raw;
const sq = (id, sec, marks, text, scheme, parts) => QUESTIONS.push({id, sec, type:'written', marks, text, scheme, parts});

// ---------------------------------------------------------------- prob-1-events — Probability, conditioning & Bayes
sq('prob-1-events-01', 'prob-1-events', 2, L`\(P(A)=0.5\), \(P(B)=0.4\) and \(P(A\cap B)=0.2\). What is \(P(A\cup B)\)?`,
 L`Answer: \(0.7\).
Inclusion–exclusion: \(P(A\cup B)=P(A)+P(B)-P(A\cap B)=0.5+0.4-0.2=0.7\).`);
sq('prob-1-events-02', 'prob-1-events', 2, L`\(P(A)=0.5\), \(P(B)=0.4\) and \(P(A\cap B)=0.2\). Find \(P(A\mid B)\) and determine whether \(A\) and \(B\) are independent.`,
 L`Answer: \(P(A\mid B)=0.5\) and \(A,B\) are independent.
\(P(A\mid B)=P(A\cap B)/P(B)=0.2/0.4=0.5=P(A)\). Equivalently \(P(A)P(B)=0.2=P(A\cap B)\), so \(A\) and \(B\) are independent. They are not mutually exclusive since \(P(A\cap B)\neq 0\).`);
sq('prob-1-events-03', 'prob-1-events', 2, L`A disease affects 1% of people. A test is positive for 95% of people with the disease and for 5% of people without it. Find \(P(D\mid +)\). (Give decimals.) Find each missing value, showing your working.`,
 L`(a) \(0.059\). \(P(+)=P(+\mid D)P(D)+P(+\mid D^c)P(D^c)=0.0095+0.0495=0.059\).
(b) \(0.161\). \(0.0095/0.059\approx0.161\) — only about 16%, because most positives come from the large healthy group.`,
 [L`By total probability, \(P(+)=0.95\times0.01+0.05\times0.99=\) \(\underline{\qquad}\).`, L`By Bayes, \(P(D\mid +)=0.0095/P(+)\approx\) \(\underline{\qquad}\) (to 3 d.p.).`]);
sq('prob-1-events-04a', 'prob-1-events', 2, L`Prove or disprove (give a counterexample if false): If \(A\) and \(B\) are mutually exclusive with \(P(A)>0\) and \(P(B)>0\), they cannot be independent.`,
 L`True. \(P(A\cap B)=0\) but \(P(A)P(B)>0\), so the product rule fails.`);
sq('prob-1-events-04b', 'prob-1-events', 2, L`Prove or disprove (give a counterexample if false): If \(A\) and \(B\) are independent, then \(A^c\) and \(B\) are also independent.`,
 L`True. \(P(A^c\cap B)=P(B)-P(A\cap B)=P(B)-P(A)P(B)=P(A^c)P(B)\).`);
sq('prob-1-events-04c', 'prob-1-events', 2, L`Prove or disprove (give a counterexample if false): \(P(A\mid B)=P(B\mid A)\) for any events with positive probability.`,
 L`False. \(P(A\mid B)=P(A\cap B)/P(B)\) and \(P(B\mid A)=P(A\cap B)/P(A)\); these agree only when \(P(A)=P(B)\).`);
sq('prob-1-events-04d', 'prob-1-events', 2, L`Prove or disprove (give a counterexample if false): If \(A\) and \(B\) are mutually exclusive then \(P(A\cup B)=P(A)+P(B)\).`,
 L`True. Inclusion–exclusion with \(P(A\cap B)=0\) (or the additivity axiom).`);
sq('prob-1-events-05', 'prob-1-events', 2, L`Machines \(M_1,M_2,M_3\) make 50%, 30%, 20% of items, with defect rates 1%, 2%, 3% respectively. What is \(P(\text{defective})\)?`,
 L`Answer: \(0.017\).
Law of total probability: \(0.5(0.01)+0.3(0.02)+0.2(0.03)=0.005+0.006+0.006=0.017\).`);
sq('prob-1-events-06', 'prob-1-events', 2, L`Using the machine data (50/30/20% of output; 1/2/3% defective), given an item is defective, what is the probability it came from \(M_3\)?`,
 L`Answer: \(\tfrac{6}{17}\approx0.353\).
Bayes: \(P(M_3\mid D)=\dfrac{P(D\mid M_3)P(M_3)}{P(D)}=\dfrac{0.006}{0.017}=\dfrac{6}{17}\).`);
sq('prob-1-events-07', 'prob-1-events', 2, L`State the axioms of a probability measure \(P\). Is \(P(A\cup B)=P(A)+P(B)\) true for all events \(A,B\)? Justify.`,
 L`Answer: \(P(A\cup B)=P(A)+P(B)\) for all events \(A,B\).
Additivity only holds for disjoint events. In general \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\).`);
sq('prob-1-events-08', 'prob-1-events', 2, L`\(P(A)=P(B)=P(C)=0.3\), each pairwise intersection has probability \(0.1\), and \(P(A\cap B\cap C)=0.05\). Find \(P(A\cup B\cup C)\).`,
 L`Answer: \(0.65\).
Inclusion–exclusion: \(0.9-3(0.1)+0.05=0.65\).`);
// ---------------------------------------------------------------- prob-1-rvs — Random variables: pmf, pdf and cdf
sq('prob-1-rvs-01', 'prob-1-rvs', 2, L`\(X\) takes values \(0,1,2\) with probabilities \(0.2,0.5,0.3\). What is \(F(1.5)=P(X\le1.5)\)?`,
 L`Answer: \(0.7\).
\(F(1.5)=P(X=0)+P(X=1)=0.7\). The cdf is a step function that only jumps at \(0,1,2\).`);
sq('prob-1-rvs-02', 'prob-1-rvs', 3, L`Show that \(f(x)=2x\) for \(0\le x\le1\) (and \(0\) otherwise) is a valid probability density function, and explain why \(g(x)=1-2x\) on \([0,1]\) is not.`,
 L`Answer: \(f(x)=2x\) on \([0,1]\), 0 otherwise.
\(2x\ge0\) and \(\int_0^1 2x\,dx=1\). The others integrate to \(\tfrac12\), \(8\) and \(0\) (and \(1-2x<0\) for \(x>\tfrac12\)).`);
sq('prob-1-rvs-03', 'prob-1-rvs', 2, L`\(X\) has density \(f(x)=cx^2\) for \(0\le x\le1\) (0 otherwise). Find each missing value, showing your working.`,
 L`(a) \(3\). The density must integrate to 1.
(b) \(\tfrac18\). \([x^3]_0^{1/2}=\tfrac18\).`,
 [L`Since \(\int_0^1 cx^2\,dx=c/3=1\), \(c=\) \(\underline{\qquad}\).`, L`\(P(X\le\tfrac12)=\int_0^{1/2}3x^2\,dx=\) \(\underline{\qquad}\).`]);
sq('prob-1-rvs-04a', 'prob-1-rvs', 2, L`Prove or disprove (give a counterexample if false): A probability density function can take values greater than 1.`,
 L`True. Density is not probability: e.g. \(\mathrm{Uniform}(0,\tfrac12)\) has density \(2\) on its support.`);
sq('prob-1-rvs-04b', 'prob-1-rvs', 2, L`Prove or disprove (give a counterexample if false): For a continuous random variable, \(P(X=a)=0\) for every \(a\).`,
 L`True. \(P(X=a)=\int_a^a f(x)\,dx=0\).`);
sq('prob-1-rvs-04c', 'prob-1-rvs', 2, L`Prove or disprove (give a counterexample if false): A cdf can decrease on some interval.`,
 L`False. If \(s<t\) then \(\{X\le s\}\subseteq\{X\le t\}\), so \(F(s)\le F(t)\).`);
sq('prob-1-rvs-04d', 'prob-1-rvs', 2, L`Prove or disprove (give a counterexample if false): The cdf of a discrete random variable is a step function.`,
 L`True. It jumps by \(P(X=k)\) at each value \(k\) and is flat in between.`);
sq('prob-1-rvs-05', 'prob-1-rvs', 2, L`\(X\) has cdf \(F(x)=1-e^{-2x}\) for \(x\ge0\) (and 0 for \(x<0\)). What is its density?`,
 L`Answer: \(f(x)=2e^{-2x},\ x\ge0\).
\(f=F'=2e^{-2x}\): the \(\mathrm{Exponential}(2)\) distribution.`);
sq('prob-1-rvs-06', 'prob-1-rvs', 2, L`For \(F(x)=1-e^{-2x}\ (x\ge0)\), what is \(P(1<X\le2)\)?`,
 L`Answer: \(e^{-2}-e^{-4}\).
\(F(2)-F(1)=(1-e^{-4})-(1-e^{-2})=e^{-2}-e^{-4}\).`);
sq('prob-1-rvs-07', 'prob-1-rvs', 2, L`Give the formal definition of a random variable.`,
 L`Answer: a function \(X:\Omega\to\mathbb{R}\).
A random variable attaches a number \(X(\omega)\) to each outcome \(\omega\). It is a function, not a variable.`);
sq('prob-1-rvs-08', 'prob-1-rvs', 2, L`\(X\) has pmf \(p(k)=c/k\) for \(k=1,2,3\). What is \(c\)?`,
 L`Answer: \(\tfrac{6}{11}\).
\(c\left(1+\tfrac12+\tfrac13\right)=\tfrac{11}{6}c=1\Rightarrow c=\tfrac{6}{11}\).`);
// ---------------------------------------------------------------- prob-1-moments — Expectation, variance & covariance
sq('prob-1-moments-01', 'prob-1-moments', 2, L`\(E(X)=3\) and \(\operatorname{Var}(X)=4\). Find \(E(2X-1)\) and \(\operatorname{Var}(2X-1)\).`,
 L`Answer: \(5\) and \(16\).
\(E(aX+b)=aE(X)+b=5\); \(\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)=16\). The shift \(b\) does not affect the variance.`);
sq('prob-1-moments-02', 'prob-1-moments', 3, L`\(X\) takes values \(0,1,2\) with probabilities \(0.2,0.5,0.3\). Find each missing value, showing your working.`,
 L`(a) \(1.1\) and \(1.7\). \(E(X)=0.5+0.6=1.1\); \(E(X^2)=0.5(1)+0.3(4)=1.7\).
(b) \(0.49\). \(1.7-1.21=0.49\).`,
 [L`\(E(X)=\) \(\underline{\qquad}\) and \(E(X^2)=\) \(\underline{\qquad}\).`, L`\(\operatorname{Var}(X)=E(X^2)-(EX)^2=\) \(\underline{\qquad}\).`]);
sq('prob-1-moments-03', 'prob-1-moments', 2, L`\(X\sim\mathrm{Uniform}(0,1)\). What is \(E(X^2)\)?`,
 L`Answer: \(\tfrac13\).
\(E(X^2)=\int_0^1x^2\,dx=\tfrac13\) (so \(\operatorname{Var}X=\tfrac13-\tfrac14=\tfrac1{12}\)).`);
sq('prob-1-moments-04a', 'prob-1-moments', 2, L`Prove or disprove (give a counterexample if false): If \(\operatorname{Cov}(X,Y)=0\) then \(X\) and \(Y\) are independent.`,
 L`False. Zero covariance does not imply independence: \(X\sim\mathrm{U}(-1,1)\), \(Y=X^2\) has \(\operatorname{Cov}=E(X^3)-E(X)E(X^2)=0\), yet \(Y\) is a function of \(X\).`);
sq('prob-1-moments-04b', 'prob-1-moments', 2, L`Prove or disprove (give a counterexample if false): If \(X\) and \(Y\) are independent then \(E(XY)=E(X)E(Y)\).`,
 L`True. The joint density factorises, so the expectation factorises; hence \(\operatorname{Cov}=0\).`);
sq('prob-1-moments-04c', 'prob-1-moments', 2, L`Prove or disprove (give a counterexample if false): \(\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)\) for any \(X,Y\).`,
 L`False. \(\operatorname{Var}(X+Y)=\operatorname{Var}X+\operatorname{Var}Y+2\operatorname{Cov}(X,Y)\).`);
sq('prob-1-moments-04d', 'prob-1-moments', 2, L`Prove or disprove (give a counterexample if false): \(\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y)\).`,
 L`True. Apply the sum formula to \(X\) and \(-Y\).`);
sq('prob-1-moments-05', 'prob-1-moments', 2, L`\(\operatorname{Var}(X)=2\), \(\operatorname{Var}(Y)=3\), \(\operatorname{Cov}(X,Y)=-1\). What is \(\operatorname{Var}(X+Y)\)?`,
 L`Answer: \(3\).
\(2+3+2(-1)=3\).`);
sq('prob-1-moments-06', 'prob-1-moments', 2, L`\(\operatorname{Cov}(X,Y)=2\), \(\operatorname{Var}(X)=4\), \(\operatorname{Var}(Y)=9\). What is \(\operatorname{Corr}(X,Y)\)?`,
 L`Answer: \(\tfrac13\).
\(\operatorname{Corr}=\dfrac{\operatorname{Cov}}{\sigma_X\sigma_Y}=\dfrac{2}{2\cdot3}=\tfrac13\).`);
sq('prob-1-moments-07', 'prob-1-moments', 2, L`\(X\) is continuous with density \(f\). How do you compute \(E(e^X)\)?`,
 L`Answer: \(\int_{-\infty}^{\infty}e^{x}f(x)\,dx\).
\(E[g(X)]=\int g(x)f(x)\,dx\) — no need for the distribution of \(g(X)\). In general \(E(e^X)\ne e^{E X}\).`);
sq('prob-1-moments-08', 'prob-1-moments', 2, L`What is the largest possible variance of a \(\mathrm{Bernoulli}(p)\) random variable?`,
 L`Answer: \(\tfrac14\), at \(p=\tfrac12\).
\(\operatorname{Var}=p(1-p)\) is maximised at \(p=\tfrac12\), giving \(\tfrac14\).`);
// ---------------------------------------------------------------- prob-1-dists — Common distributions & MGFs
sq('prob-1-dists-01', 'prob-1-dists', 2, L`\(X\sim\mathrm{Poisson}(3)\). What is \(P(X=0)\)?`,
 L`Answer: \(e^{-3}\).
\(P(X=k)=\dfrac{\lambda^ke^{-\lambda}}{k!}\), so \(P(X=0)=e^{-3}\).`);
sq('prob-1-dists-02', 'prob-1-dists', 2, L`\(X\sim\mathrm{Bin}(10,0.3)\). What are \(E(X)\) and \(\operatorname{Var}(X)\)?`,
 L`Answer: \(3\) and \(2.1\).
\(E=np=3\); \(\operatorname{Var}=np(1-p)=10(0.3)(0.7)=2.1\).`);
sq('prob-1-dists-03', 'prob-1-dists', 2, L`\(X\sim\mathrm{Exponential}(\lambda=2)\) (rate 2). What is \(P(X>1)\)?`,
 L`Answer: \(e^{-2}\).
\(P(X>x)=1-F(x)=e^{-\lambda x}=e^{-2}\).`);
sq('prob-1-dists-04', 'prob-1-dists', 3, L`Derive the moment generating function of \(X\sim\mathrm{Poisson}(\lambda)\).`,
 L`Answer: \(\exp\!\big(\lambda(e^t-1)\big)\).
\(M(t)=\sum_k e^{tk}e^{-\lambda}\lambda^k/k!=e^{-\lambda}e^{\lambda e^t}\). \(\lambda/(\lambda-t)\) is the Exponential MGF; the last is Binomial.`);
sq('prob-1-dists-05', 'prob-1-dists', 2, L`A \(N(\mu,\sigma^2)\) random variable has MGF \(M(t)=\exp(\mu t+\tfrac12\sigma^2t^2)\). \(X\) has MGF \(M_X(t)=\exp(2t+4.5t^2)\). Find each missing value, showing your working.`,
 L`(a) \(2\) and \(9\). Match coefficients: \(\mu=2\) and \(\tfrac12\sigma^2=4.5\Rightarrow\sigma^2=9\).`,
 [L`So \(\mu=\) \(\underline{\qquad}\) and \(\sigma^2=\) \(\underline{\qquad}\).`]);
sq('prob-1-dists-06', 'prob-1-dists', 2, L`\(X\sim\mathrm{Poisson}(2)\) and \(Y\sim\mathrm{Poisson}(3)\) are independent. What is the distribution of \(X+Y\)?`,
 L`Answer: \(\mathrm{Poisson}(5)\).
\(M_{X+Y}(t)=M_X(t)M_Y(t)=e^{2(e^t-1)}e^{3(e^t-1)}=e^{5(e^t-1)}\), the \(\mathrm{Poisson}(5)\) MGF.`);
sq('prob-1-dists-07a', 'prob-1-dists', 2, L`Prove or disprove (give a counterexample if false): If \(X\sim\mathrm{Poisson}(\lambda)\) then \(E(X)=\operatorname{Var}(X)\).`,
 L`True. Both equal \(\lambda\).`);
sq('prob-1-dists-07b', 'prob-1-dists', 2, L`Prove or disprove (give a counterexample if false): The Cauchy distribution has mean 0.`,
 L`False. Its mean is undefined: \(\int|x|f(x)\,dx\) diverges.`);
sq('prob-1-dists-07c', 'prob-1-dists', 2, L`Prove or disprove (give a counterexample if false): \(X\sim\mathrm{Exponential}(\lambda)\) with rate \(\lambda\) has mean \(\lambda\).`,
 L`False. The mean is \(1/\lambda\) (variance \(1/\lambda^2\)).`);
sq('prob-1-dists-07d', 'prob-1-dists', 2, L`Prove or disprove (give a counterexample if false): \(\mathrm{Uniform}(a,b)\) has variance \((b-a)^2/12\).`,
 L`True. \(E(X^2)-(EX)^2=\tfrac{a^2+ab+b^2}{3}-\tfrac{(a+b)^2}{4}=\tfrac{(b-a)^2}{12}\).`);
sq('prob-1-dists-08', 'prob-1-dists', 2, L`\(X\) has MGF \(M(t)=(1-2t)^{-3}\). What is \(E(X)\)?`,
 L`Answer: \(6\).
\(E(X)=M'(0)\). \(M'(t)=-3(1-2t)^{-4}(-2)=6(1-2t)^{-4}\Rightarrow M'(0)=6\). (Gamma with shape 3, scale 2: mean \(k\theta=6\).)`);
// ---------------------------------------------------------------- stat-2 — What is statistical inference?
sq('stat-2-01', 'stat-2', 2, L`Explain the difference between the random sample \(\underline{X}=(X_1,\dots,X_n)\) and the observed data \(\underline{x}=(x_1,\dots,x_n)\).`,
 L`Answer: \(\underline{X}\) are random variables (before observation); \(\underline{x}\) are the fixed observed values.
Capital letters: the random sample before observation. Lower case: the realised data.`);
sq('stat-2-02', 'stat-2', 2, L`For the model \(X_1,\dots,X_n\overset{\text{iid}}{\sim}N(\mu,\sigma^2)\) with both parameters unknown, what is \(\Theta\)?`,
 L`Answer: \(\mathbb{R}\times(0,\infty)\).
\(\theta=(\mu,\sigma^2)\) with \(\mu\in\mathbb{R}\) and \(\sigma^2>0\).`);
sq('stat-2-03', 'stat-2', 2, L`Responses \(X_i=1\) (prefers space A) or \(0\) (prefers B) are modelled as iid \(\mathrm{Bernoulli}(p)\). What is \(\Theta\) in the notes?`,
 L`Answer: \([0,1]\).
\(p\) is a probability, so \(\Theta=[0,1]\). \(\{0,1\}\) is the set of data values, not parameter values.`);
sq('stat-2-04a', 'stat-2', 2, L`Prove or disprove (give a counterexample if false): In this course, a "random sample" means \(X_1,\dots,X_n\) are iid.`,
 L`True. Independent and identically distributed from one population distribution.`);
sq('stat-2-04b', 'stat-2', 2, L`Prove or disprove (give a counterexample if false): If the data are modelled as a random sample, they are guaranteed to represent the target population.`,
 L`False. The iid model says nothing about recruitment; selection bias or non-response can make it inappropriate.`);
sq('stat-2-04c', 'stat-2', 2, L`Prove or disprove (give a counterexample if false): The sample mean \(\bar{X}\) is a parameter.`,
 L`False. \(\bar X\) is a statistic — computed from the sample. Parameters (like \(\mu\)) describe the population.`);
sq('stat-2-04d', 'stat-2', 2, L`Prove or disprove (give a counterexample if false): A statistical model is a family of distributions indexed by \(\theta\in\Theta\).`,
 L`True. One distribution for each parameter value.`);
sq('stat-2-05', 'stat-2', 2, L`Classify customer satisfaction ratings ("poor", "fair", "good", "excellent") as a type of data, justifying your answer.`,
 L`Answer: Categorical, ordinal.
Natural order but no numerical spacing — ordinal.`);
sq('stat-2-06', 'stat-2', 2, L`Classify "number of goals scored by the home team" as a type of data and suggest a suitable probability model.`,
 L`Answer: Discrete numeric (a count); e.g. Poisson.
Counts are discrete numeric data; Poisson (or Binomial/Geometric) models are natural.`);
sq('stat-2-07', 'stat-2', 2, L`Sweets of 3 colours are drawn with replacement; \((R,B,G)\sim\mathrm{Multinomial}(n;p_R,p_B,p_G)\). How many free parameters are there?`,
 L`Answer: \(2\).
\(p_R+p_B+p_G=1\), so the third is determined by the other two.`);
sq('stat-2-08', 'stat-2', 2, L`Why is statistical inference described as "inverse probability"?`,
 L`Answer: Probability goes from a known \(\theta\) to data; inference goes from observed data back to the unknown \(\theta\).
Probability: known \(\theta\Rightarrow\) probabilities of data. Inference: observed data \(\Rightarrow\) learn about \(\theta\).`);
sq('stat-2-09', 'stat-2', 2, L`20 students volunteer via a social-media post and 12 prefer space A. What is the main concern about treating this as an iid sample from all eligible students?`,
 L`Answer: Selection bias: volunteering may be related to preference.
Self-selection can make the observed students unrepresentative of the target population.`);
// ---------------------------------------------------------------- stat-3 — Types of inference
sq('stat-3-01', 'stat-3', 2, L`How is the parameter \(\theta\) treated in frequentist inference, and how does this differ from Bayesian inference?`,
 L`Answer: fixed but unknown.
Probability describes data and procedures under repeated sampling; the parameter is fixed.`);
sq('stat-3-02', 'stat-3', 2, L`"Over repeated samples, this interval-producing method contains the fixed \(p\) in 95% of cases." State which framework this statement belongs to and what the probability refers to.`,
 L`Answer: a frequentist confidence-interval statement.
The 95% is the long-run coverage of a random procedure, with \(p\) fixed.`);
sq('stat-3-03', 'stat-3', 2, L`"Given these data and the stated prior, the posterior probability that \(p>0.5\) is \(0.91\)." State which framework this statement belongs to and what the probability refers to.`,
 L`Answer: a Bayesian statement about \(p\).
A probability about the parameter itself, conditional on data and prior.`);
sq('stat-3-04a', 'stat-3', 2, L`Prove or disprove (give a counterexample if false): After observing data, a 95% confidence interval \([0.41,0.58]\) contains \(p\) with probability \(0.95\).`,
 L`False. The endpoints and \(p\) are fixed, so it either contains \(p\) or not. 95% refers to the procedure.`);
sq('stat-3-04b', 'stat-3', 2, L`Prove or disprove (give a counterexample if false): A 95% credible interval satisfies \(P(\theta\in[L,U]\mid\underline{x})=0.95\).`,
 L`True. The Bayesian definition.`);
sq('stat-3-04c', 'stat-3', 2, L`Prove or disprove (give a counterexample if false): A Bayesian prior must represent purely personal belief.`,
 L`False. Priors can encode substantive information, weak information, or a reference convention.`);
sq('stat-3-04d', 'stat-3', 2, L`Prove or disprove (give a counterexample if false): Failing to reject \(H_0\) proves that \(H_0\) is true.`,
 L`False. It only means the data are compatible with \(H_0\).`);
sq('stat-3-05', 'stat-3', 2, L`List the four main inferential tasks and state which one is not examined in MAS2901.`,
 L`Answer: Prediction.
Prediction is for future courses.`);
sq('stat-3-06', 'stat-3', 2, L`"Assess the claim that the two study spaces are equally popular." Name the inferential task and write down a suitable null hypothesis.`,
 L`Answer: Hypothesis testing.
Formalise \(H_0:p=0.5\) and judge whether the data are compatible with it.`);
sq('stat-3-07', 'stat-3', 2, L`In Bayesian inference, what is obtained by combining the prior \(\pi(\theta)\) with the data? Write down how it is described.`,
 L`Answer: the posterior distribution \(\pi(\theta\mid\text{data})\).
Prior \(\pi(\theta)\) + data \(\Rightarrow\) posterior \(\pi(\theta\mid\text{data})\).`);
sq('stat-3-08', 'stat-3', 2, L`Name two Bayesian summaries of uncertainty and their frequentist counterparts.`,
 L`Answer: A credible interval.
Credible intervals, posterior means and Bayes factors are Bayesian.`);
// ---------------------------------------------------------------- la-1.1 — Fields
sq('la-1.1-01', 'la-1.1', 2, L`Is \(\mathbb{Z}\) (with the usual \(+\) and \(\cdot\)) a field? Justify your answer.`,
 L`Answer: \(\mathbb{Z}\).
In \(\mathbb{Z}\), \(2\) has no multiplicative inverse, so axiom (viii) fails. \(\mathbb{Z}_5\) is a field because 5 is prime.`);
sq('la-1.1-02', 'la-1.1', 2, L`State precisely which field axiom fails for \(\mathbb{Z}\), giving an example.`,
 L`Answer: Every nonzero element has a multiplicative inverse.
E.g. there is no integer \(\beta\) with \(2\beta=1\).`);
sq('la-1.1-03', 'la-1.1', 2, L`Is \(\mathbb{Z}_6\) a field?`,
 L`Answer: No — \(2\) has no multiplicative inverse mod 6.
\(2\cdot3=0\) in \(\mathbb{Z}_6\), and \(2k\) is always even mod 6, never 1. \(\mathbb{Z}_p\) is a field only for \(p\) prime.`);
sq('la-1.1-04', 'la-1.1', 2, L`Arithmetic in the field \(\mathbb{Z}_7\). Find each missing value, showing your working.`,
 L`(a) \(5\). \(3\times5=15\equiv1\pmod 7\).
(b) \(1\). \(8\equiv1\pmod 7\).`,
 [L`The multiplicative inverse of \(3\) in \(\mathbb{Z}_7\) is \(\underline{\qquad}\).`, L`\(2+6=\) \(\underline{\qquad}\) in \(\mathbb{Z}_7\).`]);
sq('la-1.1-05a', 'la-1.1', 2, L`Prove or disprove (give a counterexample if false): Every nonzero element of a field has a multiplicative inverse.`,
 L`True. Axiom (viii).`);
sq('la-1.1-05b', 'la-1.1', 2, L`Prove or disprove (give a counterexample if false): In a field, \(0\) has a multiplicative inverse.`,
 L`False. Axiom (viii) is only for nonzero elements; \(0\cdot\beta=0\ne1\).`);
sq('la-1.1-05c', 'la-1.1', 2, L`Prove or disprove (give a counterexample if false): \(\mathrm{Mat}_{2\times2}(\mathbb{R})\) with the usual \(+\) and matrix multiplication is a field.`,
 L`False. Not commutative, and nonzero singular matrices have no inverse.`);
sq('la-1.1-05d', 'la-1.1', 2, L`Prove or disprove (give a counterexample if false): \(\mathbb{Z}_p\) is a field for every prime \(p\).`,
 L`True. These are the finite fields in the notes.`);
sq('la-1.1-06', 'la-1.1', 2, L`Give one field axiom that fails for \(\mathbb{N}=\{1,2,3,\dots\}\), with a reason.`,
 L`Answer: Existence of additive inverses.
The notes list (iii), (iv) and (viii) as failing for \(\mathbb{N}\).`);
sq('la-1.1-07', 'la-1.1', 2, L`Apart from the existence of inverses, which field axiom fails for \(\mathrm{Mat}_{2\times2}(\mathbb{C})\)? Give an explicit example.`,
 L`Answer: Commutativity of multiplication.
\(AB\ne BA\) in general — see the example in the notes.`);
sq('la-1.1-08', 'la-1.1', 2, L`Compute \(3\cdot4\) in the field \(\mathbb{Z}_5\).`,
 L`Answer: \(2\).
\(12=2\cdot5+2\).`);
// ---------------------------------------------------------------- la-1.2 — Vector spaces
sq('la-1.2-01', 'la-1.2', 2, L`In any vector space \(V\) over \(F\), what is \(0\bullet u\) (the scalar 0 times a vector \(u\))?`,
 L`Answer: The zero vector \(\mathbf{0}\in V\).
Proposition 1.2.4(iii).`);
sq('la-1.2-02', 'la-1.2', 2, L`Is the set of real polynomials of degree exactly 2 a vector space over \(\mathbb{R}\) with the usual operations? Justify.`,
 L`Answer: Polynomials of degree exactly 2.
\(x^2+(-x^2+x)=x\) has degree 1: not closed under addition (and no zero polynomial).`);
sq('la-1.2-03a', 'la-1.2', 2, L`Prove or disprove (give a counterexample if false): \(\mathbb{C}^2\) is a vector space over \(\mathbb{C}\).`,
 L`True. \(F^n\) is a vector space over any field \(F\).`);
sq('la-1.2-03b', 'la-1.2', 2, L`Prove or disprove (give a counterexample if false): \(F^\infty\), the set of sequences over \(F\), is a vector space over \(F\).`,
 L`True. Example 1.2.3(iv), with termwise operations.`);
sq('la-1.2-03c', 'la-1.2', 2, L`Prove or disprove (give a counterexample if false): \(\{(x,y)\in\mathbb{R}^2:x\ge0\}\) with the usual operations is a vector space.`,
 L`False. \((-1)\bullet(1,0)=(-1,0)\) is not in the set.`);
sq('la-1.2-03d', 'la-1.2', 2, L`Prove or disprove (give a counterexample if false): In a vector space, the additive inverse of each vector is unique.`,
 L`True. Proposition 1.2.4(ii): if \(u+v=0=u+v'\) then \(v=v'\).`);
sq('la-1.2-04', 'la-1.2', 3, L`On \(\mathbb{R}^2\), keep the usual addition but define \(\lambda\bullet(x,y)=(\lambda x,0)\). Show that this is not a vector space by identifying an axiom that fails.`,
 L`Answer: \(1\bullet u=u\).
\(1\bullet(x,y)=(x,0)\ne(x,y)\) when \(y\ne0\). The associativity and distributive laws still hold.`);
sq('la-1.2-05', 'la-1.2', 3, L`Prove that \((-1)\bullet u=-u\) in any vector space.`,
 L`Answer: \((-1)\bullet u=-u\).
Proposition 1.2.4(v). (\(\lambda u=\mathbf0\) implies \(\lambda=0\) OR \(u=\mathbf0\).)`);
sq('la-1.2-06', 'la-1.2', 2, L`What is the zero vector in \(\mathcal{F}(\mathbb{R})\), the space of functions \(\mathbb{R}\to\mathbb{R}\)?`,
 L`Answer: The constant function \(f(x)=0\).
With \((f+g)(x)=f(x)+g(x)\), the function that is 0 everywhere is the additive identity.`);
sq('la-1.2-07', 'la-1.2', 2, L`What is the zero vector of \(\mathrm{Mat}_{2\times2}(\mathbb{R})\)?`,
 L`Answer: The \(2\times2\) zero matrix.
\(A+O=A\). (\(I\) is the identity for multiplication.)`);
sq('la-1.2-08', 'la-1.2', 2, L`\(\mathbb{R}_{>0}\) is a vector space over \(\mathbb{R}\) with \(u\oplus v=uv\) and \(\lambda\odot u=u^\lambda\). What is its zero vector?`,
 L`Answer: \(1\).
We need \(u\oplus z=u\), i.e. \(uz=u\), so \(z=1\).`);
// ---------------------------------------------------------------- la-1.3 — Subspaces
sq('la-1.3-01', 'la-1.3', 3, L`Show that \(W=\{(x,y,z)\in\mathbb{R}^3:x+2y-z=0\}\) is a subspace of \(\mathbb{R}^3\), and that \(\{(x,y,z):x+2y-z=1\}\) is not.`,
 L`Answer: \(\{(x,y,z):x+2y-z=0\}\).
A homogeneous linear equation gives a null space. "\(=1\)" misses \(\mathbf0\); \(xyz=0\) fails \((1,1,0)+(0,0,1)\); \(x\ge0\) fails under \(\times(-1)\).`);
sq('la-1.3-02', 'la-1.3', 2, L`Is \(W=\{A\in\mathrm{Mat}_{2\times2}(\mathbb{R}):A\text{ not invertible}\}\) a subspace? (Exercise 1.3.8)`,
 L`Answer: No — \(\operatorname{diag}(1,0)+\operatorname{diag}(0,1)=I\) is invertible.
It contains 0 and is closed under scalar multiplication, but not under addition.`);
sq('la-1.3-03a', 'la-1.3', 2, L`Prove or disprove (give a counterexample if false): If \(\mathbf0\notin W\) then \(W\) is not a subspace.`,
 L`True. Every subspace contains 0 (Remark 1.3.4).`);
sq('la-1.3-03b', 'la-1.3', 2, L`Prove or disprove (give a counterexample if false): If \(\mathbf0\in W\) then \(W\) is a subspace.`,
 L`False. Necessary, not sufficient — e.g. the parabola \(y=x^2\).`);
sq('la-1.3-03c', 'la-1.3', 2, L`Prove or disprove (give a counterexample if false): \(\operatorname{null}(A)\) is a subspace of \(F^n\) for any \(m\times n\) matrix \(A\).`,
 L`True. \(A(x+y)=Ax+Ay=\mathbf0\) and \(A(\lambda x)=\lambda Ax=\mathbf0\).`);
sq('la-1.3-03d', 'la-1.3', 2, L`Prove or disprove (give a counterexample if false): The union of two subspaces is always a subspace.`,
 L`False. \(x\)-axis \(\cup\) \(y\)-axis: \((1,0)+(0,1)=(1,1)\) is in neither.`);
sq('la-1.3-04', 'la-1.3', 2, L`State the subspace test (Theorem 1.3.3).`,
 L`Answer: \(W\) is nonempty and closed under addition and scalar multiplication.
The other axioms are inherited from \(V\).`);
sq('la-1.3-05', 'la-1.3', 2, L`Let \(U\) be the \(x\)-axis and \(W\) the \(y\)-axis in \(\mathbb{R}^2\). What is \(U+W\)?`,
 L`Answer: \(\mathbb{R}^2\).
\((a,b)=(a,0)+(0,b)\).`);
sq('la-1.3-06', 'la-1.3', 3, L`Show that \(U=\{p\in\mathbb{R}_2[x]:p(1)=0\}\) is a subspace of \(\mathbb{R}_2[x]\), and that \(\{p:p(0)=1\}\) is not.`,
 L`Answer: \(\{p:p(1)=0\}\).
\((p+q)(1)=0\) and \((\lambda p)(1)=0\). The others fail: \(p(0)=1\) misses 0; exact degree fails \(+\); integer coefficients fail \(\times\tfrac12\).`);
sq('la-1.3-07', 'la-1.3', 2, L`For a matrix \(A\) and \(b\ne\mathbf0\), why is \(\{x:Ax=b\}\) not a subspace?`,
 L`Answer: It does not contain \(\mathbf0\), since \(A\mathbf0=\mathbf0\ne b\).
\(A\mathbf0=\mathbf0\ne b\).`);
sq('la-1.3-08', 'la-1.3', 2, L`Why is the parabola \(\{(x,y):y=x^2\}\) not a subspace of \(\mathbb{R}^2\)?`,
 L`Answer: \((1,1)+(1,1)=(2,2)\) is not on it.
\(2\ne2^2\): not closed under addition, even though it contains \(\mathbf0\).`);
// ---------------------------------------------------------------- la-1.4 — Span
sq('la-1.4-01', 'la-1.4', 2, L`What is \(\operatorname{span}\{(1,0,0),(0,1,0)\}\) in \(\mathbb{R}^3\)?`,
 L`Answer: The \(xy\)-plane \(\{(x,y,0)\}\).
\(a(1,0,0)+b(0,1,0)=(a,b,0)\).`);
sq('la-1.4-02', 'la-1.4', 3, L`Example 1.4.3: \(v_1=(1,1,0,0)\), \(v_2=(0,2,1,0)\), \(v_3=(1,-1,0,1)\). Write \((-1,7,1,-3)=av_1+bv_2+cv_3\). Find each missing value, showing your working.`,
 L`(a) \(1\) and \(-3\). Only \(v_2\) has a 3rd component and only \(v_3\) a 4th.
(b) \(2\). \(a=-1-c=2\).`,
 [L`Comparing 3rd and 4th components: \(b=\) \(\underline{\qquad}\) and \(c=\) \(\underline{\qquad}\).`, L`From the 1st component \(a+c=-1\), so \(a=\) \(\underline{\qquad}\) (check: \(2+2+3=7\) ✓).`]);
sq('la-1.4-03', 'la-1.4', 2, L`Is \(\{v_1,v_2,v_3\}\) (three vectors) a spanning set of \(\mathbb{R}^4\)?`,
 L`Answer: No — \((v_1:v_2:v_3)\) has rank at most 3, so \(Ax=b\) is inconsistent for some \(b\).
Three vectors span at most a 3-dimensional subspace.`);
sq('la-1.4-04a', 'la-1.4', 2, L`Prove or disprove (give a counterexample if false): \(\operatorname{span}\varnothing=\{\mathbf0\}\).`,
 L`True. The convention in Definition 1.4.2.`);
sq('la-1.4-04b', 'la-1.4', 2, L`Prove or disprove (give a counterexample if false): Each \(v_j\) lies in \(\operatorname{span}\{v_1,\dots,v_n\}\).`,
 L`True. \(v_j=0v_1+\dots+1v_j+\dots+0v_n\).`);
sq('la-1.4-04c', 'la-1.4', 2, L`Prove or disprove (give a counterexample if false): \(\operatorname{span}\{v_1,\dots,v_n\}\) is the smallest subspace containing \(v_1,\dots,v_n\).`,
 L`True. Proposition 1.4.4(3).`);
sq('la-1.4-04d', 'la-1.4', 2, L`Prove or disprove (give a counterexample if false): If \(v\ne\mathbf0\) then \(\operatorname{span}\{v,2v\}\) is a plane.`,
 L`False. \(2v\) is a multiple of \(v\): the span is a line.`);
sq('la-1.4-05', 'la-1.4', 2, L`Let \(A=(v_1:\dots:v_n)\). When is \(b\in\operatorname{col}(A)\)?`,
 L`Answer: Exactly when \(Ax=b\) has a solution.
Theorem 1.4.5 / Remark 1.4.7.`);
sq('la-1.4-06', 'la-1.4', 2, L`What is \(\operatorname{span}\{1+x,\,1-x\}\) in \(\mathbb{R}_1[x]\)?`,
 L`Answer: All of \(\mathbb{R}_1[x]\).
\(1=\tfrac12[(1+x)+(1-x)]\) and \(x=\tfrac12[(1+x)-(1-x)]\).`);
sq('la-1.4-07', 'la-1.4', 3, L`Find all \(k\) such that \((1,k)\in\operatorname{span}\{(2,6)\}\).`,
 L`Answer: \(k=3\).
\((1,k)=a(2,6)\Rightarrow a=\tfrac12\Rightarrow k=3\).`);
sq('la-1.4-08', 'la-1.4', 2, L`What is \(\operatorname{span}\{(1,1),(2,2),(3,3)\}\) in \(\mathbb{R}^2\)?`,
 L`Answer: The line \(y=x\).
All three are multiples of \((1,1)\).`);
// ---------------------------------------------------------------- la-1.5 — Linear independence
sq('la-1.5-01', 'la-1.5', 2, L`Exercise 1.5.4: \(v_1=(1,1,1)\), \(v_2=(0,1,-1)\), \(v_3=(1,2,1)\). Is \(\{v_1,v_2,v_3\}\) linearly independent? Find each missing value, showing your working.`,
 L`(a) \(1\). \(\det\begin{pmatrix}1&0&1\\1&1&2\\1&-1&1\end{pmatrix}=1(1+2)-0+1(-1-1)=1\).
(b) independent. Proposition 1.5.9.`,
 [L`\(\det(v_1:v_2:v_3)=\) \(\underline{\qquad}\).`, L`Nonzero, so \(\operatorname{null}(A)=\{\mathbf0\}\) and the set is linearly \(\underline{\qquad}\).`]);
sq('la-1.5-02', 'la-1.5', 2, L`Exercise 1.5.5: is \(\{\cos^2x,\ \cos2x,\ 3\}\) linearly independent in \(\mathcal{F}(\mathbb{R})\)?`,
 L`Answer: No: \(6\cos^2x-3\cos2x-3=0\) for all \(x\).
\(\cos2x=2\cos^2x-1\), so \(6\cos^2x-3(2\cos^2x-1)-3=0\): a nontrivial combination equal to the zero function.`);
sq('la-1.5-03a', 'la-1.5', 2, L`Prove or disprove (give a counterexample if false): Any set containing the zero vector is linearly dependent.`,
 L`True. \(1\cdot\mathbf0=\mathbf0\) is a nontrivial solution.`);
sq('la-1.5-03b', 'la-1.5', 2, L`Prove or disprove (give a counterexample if false): \(\{v\}\) is linearly independent if and only if \(v\ne\mathbf0\).`,
 L`True. \(av=\mathbf0\) with \(v\ne\mathbf0\) forces \(a=0\).`);
sq('la-1.5-03c', 'la-1.5', 2, L`Prove or disprove (give a counterexample if false): If \(\{v_1,v_2,v_3\}\) is dependent then \(v_3\) is a combination of \(v_1,v_2\).`,
 L`False. Some vector is — not necessarily \(v_3\). E.g. \(v_1=\mathbf0\), \(v_2=e_1\), \(v_3=e_2\).`);
sq('la-1.5-03d', 'la-1.5', 2, L`Prove or disprove (give a counterexample if false): The columns of \(A\) are independent iff \(\operatorname{null}(A)=\{\mathbf0\}\).`,
 L`True. Proposition 1.5.9.`);
sq('la-1.5-04', 'la-1.5', 3, L`Find all \(k\) for which \(\{(1,k),(k,4)\}\) is linearly dependent.`,
 L`Answer: \(k=\pm2\).
\(\det\begin{pmatrix}1&k\\k&4\end{pmatrix}=4-k^2=0\iff k=\pm2\).`);
sq('la-1.5-05', 'la-1.5', 2, L`Why does linear independence matter (Proposition 1.5.6)?`,
 L`Answer: Every vector in the span has a unique expression as a linear combination.
Independent ⟺ coefficients are uniquely determined.`);
sq('la-1.5-06', 'la-1.5', 2, L`Is \(\{(1,2,3),(2,4,6),(0,1,0)\}\) linearly independent?`,
 L`Answer: No — \((2,4,6)=2(1,2,3)\).
\(2v_1-v_2+0v_3=\mathbf0\).`);
sq('la-1.5-07', 'la-1.5', 2, L`State the Linear Dependence Lemma (Proposition 1.5.8).`,
 L`Answer: some \(v_j\in\operatorname{span}(S\setminus\{v_j\})\), and removing it leaves the span unchanged.
Only one suitable \(v_j\) is guaranteed.`);
sq('la-1.5-08', 'la-1.5', 2, L`Is \(\{1+x,\ x+x^2,\ 1+x^2\}\) linearly independent in \(\mathbb{R}_2[x]\)?`,
 L`Answer: Yes.
\(a+c=0,\ a+b=0,\ b+c=0\) force \(a=b=c=0\).`);
// ---------------------------------------------------------------- la-1.6 — Bases
sq('la-1.6-01', 'la-1.6', 2, L`Define a basis of a vector space \(V\).`,
 L`Answer: \(B\) spans \(V\) and is linearly independent.
Definition 1.6.1: both conditions.`);
sq('la-1.6-02', 'la-1.6', 2, L`Example 1.6.3: \(v_1=(1,2,1)\), \(v_2=(2,9,0)\), \(v_3=(3,3,4)\). Show they form a basis of \(\mathbb{R}^3\). Find each missing value, showing your working.`,
 L`(a) \(-1\). \(\det\begin{pmatrix}1&2&3\\2&9&3\\1&0&4\end{pmatrix}=36-2(8-3)+3(0-9)=-1\).
(b) basis. Independent and spanning (\(Ax=b\) always solvable).`,
 [L`\(\det(v_1:v_2:v_3)=\) \(\underline{\qquad}\).`, L`Nonzero, so the columns are independent and (3 vectors in \(\mathbb{R}^3\)) form a \(\underline{\qquad}\).`]);
sq('la-1.6-03', 'la-1.6', 2, L`What does the Basis Reduction Theorem (1.6.5) guarantee?`,
 L`Answer: Every finite spanning set of \(V\ne\{\mathbf0\}\) contains a basis of \(V\).
Remove redundant vectors (Linear Dependence Lemma) until independent but still spanning.`);
sq('la-1.6-04', 'la-1.6', 3, L`Show that \(\{1,\ 1+x,\ 1+x+x^2\}\) is a basis of \(\mathbb{R}_2[x]\).`,
 L`Answer: \(\{1,\ 1+x,\ 1+x+x^2\}\).
Three independent polynomials in the 3-dimensional \(\mathbb{R}_2[x]\).`);
sq('la-1.6-05a', 'la-1.6', 2, L`Prove or disprove (give a counterexample if false): \(\mathbb{R}[x]\) is finite dimensional.`,
 L`False. A finite set of polynomials has a maximum degree, so cannot span.`);
sq('la-1.6-05b', 'la-1.6', 2, L`Prove or disprove (give a counterexample if false): Every finite-dimensional vector space has a basis.`,
 L`True. Theorem 1.6.10.`);
sq('la-1.6-05c', 'la-1.6', 2, L`Prove or disprove (give a counterexample if false): A vector space has only one basis.`,
 L`False. \(\{(1,0),(0,1)\}\) and \(\{(1,1),(1,-1)\}\) are both bases of \(\mathbb{R}^2\).`);
sq('la-1.6-05d', 'la-1.6', 2, L`Prove or disprove (give a counterexample if false): Relative to a fixed basis, every vector has unique coordinates.`,
 L`True. Spanning gives existence; independence gives uniqueness.`);
sq('la-1.6-06', 'la-1.6', 2, L`Find the coordinates of \((3,5)\) with respect to the basis \(\{(1,1),(1,-1)\}\) of \(\mathbb{R}^2\).`,
 L`Answer: \((4,-1)\).
\(a+b=3,\ a-b=5\Rightarrow a=4,\ b=-1\).`);
sq('la-1.6-07', 'la-1.6', 2, L`Write down a basis of \(\mathrm{Mat}_{2\times2}(\mathbb{R})\) and hence state its dimension.`,
 L`Answer: \(E_{11},E_{12},E_{21},E_{22}\).
\(\begin{pmatrix}a&b\\c&d\end{pmatrix}=aE_{11}+bE_{12}+cE_{21}+dE_{22}\) uniquely.`);
sq('la-1.6-08', 'la-1.6', 2, L`Find a basis of \(\operatorname{null}(A)\) for \(A=\begin{pmatrix}1&2\end{pmatrix}\).`,
 L`Answer: \(\{(-2,1)\}\).
\(x+2y=0\Rightarrow(x,y)=y(-2,1)\).`);
// ---------------------------------------------------------------- la-1.7 — Dimension
sq('la-1.7-01', 'la-1.7', 2, L`What is \(\dim\mathbb{R}_3[x]\)?`,
 L`Answer: \(4\).
Basis \(\{1,x,x^2,x^3\}\): \(\dim\mathbb{R}_n[x]=n+1\).`);
sq('la-1.7-02', 'la-1.7', 2, L`What is \(\dim\mathrm{Mat}_{2\times3}(\mathbb{R})\)?`,
 L`Answer: \(6\).
\(\dim\mathrm{Mat}_{m\times n}=mn\).`);
sq('la-1.7-03', 'la-1.7', 2, L`What are \(\dim_{\mathbb{R}}\mathbb{C}\) and \(\dim_{\mathbb{C}}\mathbb{C}\)?`,
 L`Answer: \(2\) and \(1\).
Over \(\mathbb{R}\), \(\{1,i\}\) is a basis; over \(\mathbb{C}\), \(\{1\}\) (Remark 1.7.9).`);
sq('la-1.7-04a', 'la-1.7', 2, L`Prove or disprove (give a counterexample if false): Any 4 vectors in \(\mathbb{R}^3\) are linearly dependent.`,
 L`True. \(m>n\Rightarrow\) dependent.`);
sq('la-1.7-04b', 'la-1.7', 2, L`Prove or disprove (give a counterexample if false): No set of 2 vectors can span \(\mathbb{R}^3\).`,
 L`True. \(m<n\Rightarrow\) not spanning.`);
sq('la-1.7-04c', 'la-1.7', 2, L`Prove or disprove (give a counterexample if false): Any 3 linearly independent vectors in \(\mathbb{R}^3\) form a basis.`,
 L`True. \(m=n\): independent \(\iff\) spanning \(\iff\) basis.`);
sq('la-1.7-04d', 'la-1.7', 2, L`Prove or disprove (give a counterexample if false): Any 3 vectors in \(\mathbb{R}^3\) form a basis.`,
 L`False. They could lie in one plane.`);
sq('la-1.7-05', 'la-1.7', 2, L`State the Exchange Theorem.`,
 L`Answer: \(n\le r\).
An independent set is never larger than a spanning set.`);
sq('la-1.7-06', 'la-1.7', 2, L`Exercise 1.7.8: find \(\dim\operatorname{null}(A)\) for \[A=\begin{pmatrix}2&2&-1&0&1\\-1&-1&2&-3&1\\1&1&-2&0&-1\\0&0&1&1&1\end{pmatrix}.\] Find each missing value, showing your working.`,
 L`(a) \(3\). Pivot on row 3: \(r_1-2r_3=(0,0,3,0,3)\), \(r_2+r_3=(0,0,0,-3,0)\), and \(r_4\) reduces to zero. Pivots in columns 1, 3, 4.
(b) \(2\). \(x_2\) and \(x_5\) are free.`,
 [L`Row reducing, the number of pivot columns is \(\underline{\qquad}\).`, L`So there are \(5-3\) free variables and \(\dim\operatorname{null}(A)=\) \(\underline{\qquad}\).`]);
sq('la-1.7-07', 'la-1.7', 2, L`What is \(\dim W\) for \(W=\{(x,y,z,w)\in\mathbb{R}^4:x+y+z+w=0\}\)?`,
 L`Answer: \(3\).
One constraint on 4 variables: \(y,z,w\) free.`);
sq('la-1.7-08', 'la-1.7', 2, L`\(\dim V=5\) and \(S\) is a set of 5 vectors with \(\operatorname{span}S=V\). What can you conclude about \(S\)? Justify.`,
 L`Answer: \(S\) is a basis of \(V\).
Corollary 1.7.12(iii).`);
sq('la-1.7-09', 'la-1.7', 2, L`\(U\) is a subspace of a finite-dimensional space \(V\) with \(\dim U=\dim V\). Prove that \(U=V\).`,
 L`Answer: \(U=V\).
A basis of \(U\) is \(n\) independent vectors in \(V\), hence a basis of \(V\).`);
sq('la-1.7-10', 'la-1.7', 2, L`What is the dimension of the space of symmetric \(2\times2\) real matrices?`,
 L`Answer: \(3\).
\(\begin{pmatrix}a&b\\b&c\end{pmatrix}=aE_{11}+cE_{22}+b(E_{12}+E_{21})\).`);
// ---------------------------------------------------------------- vc-1.1 — Vector review: dot & cross products
sq('vc-1.1-01', 'vc-1.1', 2, L`Find the area of the parallelogram with sides \(\mathbf a=(1,1,1)\) and \(\mathbf b=(-4,3,2)\).`,
 L`Answer: \(\sqrt{86}\).
\(\mathbf a\times\mathbf b=(-1,-6,7)\); area \(=\|\mathbf a\times\mathbf b\|=\sqrt{1+36+49}=\sqrt{86}\).`);
sq('vc-1.1-02', 'vc-1.1', 2, L`Let \(\mathbf a=(1,2,0)\) and \(\mathbf b=(0,1,3)\). Find each missing value, showing your working.`,
 L`(a) \(2\). \(0+2+0=2\).
(b) \((6,-3,1)\). \((2\cdot3-0\cdot1,\ 0\cdot0-1\cdot3,\ 1\cdot1-2\cdot0)=(6,-3,1)\).`,
 [L`\(\mathbf a\cdot\mathbf b=\) \(\underline{\qquad}\).`, L`\(\mathbf a\times\mathbf b=\) \(\underline{\qquad}\).`]);
sq('vc-1.1-03', 'vc-1.1', 2, L`What is the angle between \((1,0,1)\) and \((0,1,1)\)?`,
 L`Answer: \(\pi/3\).
\(\cos\theta=\dfrac{1}{\sqrt2\sqrt2}=\tfrac12\Rightarrow\theta=\pi/3\).`);
sq('vc-1.1-04a', 'vc-1.1', 2, L`Prove or disprove (give a counterexample if false): \(\mathbf a\times\mathbf b\) is orthogonal to both \(\mathbf a\) and \(\mathbf b\).`,
 L`True. Geometric property of the cross product.`);
sq('vc-1.1-04b', 'vc-1.1', 2, L`Prove or disprove (give a counterexample if false): \(\mathbf a\times\mathbf b=\mathbf b\times\mathbf a\).`,
 L`False. Anti-commutative: \(\mathbf b\times\mathbf a=-(\mathbf a\times\mathbf b)\).`);
sq('vc-1.1-04c', 'vc-1.1', 2, L`Prove or disprove (give a counterexample if false): \(\mathbf a\cdot\mathbf a=\|\mathbf a\|^2\).`,
 L`True. Sum of squared components.`);
sq('vc-1.1-04d', 'vc-1.1', 2, L`Prove or disprove (give a counterexample if false): If \(\mathbf a\cdot\mathbf b=0\) with \(\mathbf a,\mathbf b\ne\mathbf0\), they are parallel.`,
 L`False. Orthogonal. Parallel vectors have \(\mathbf a\times\mathbf b=\mathbf0\).`);
sq('vc-1.1-05', 'vc-1.1', 2, L`What is the unit vector in the direction of \((3,0,4)\)?`,
 L`Answer: \((\tfrac35,0,\tfrac45)\).
\(\|(3,0,4)\|=5\).`);
sq('vc-1.1-06', 'vc-1.1', 2, L`Find \(k\) such that \((1,k,2)\) is orthogonal to \((3,1,-1)\).`,
 L`Answer: \(k=-1\).
\(3+k-2=0\).`);
sq('vc-1.1-07', 'vc-1.1', 2, L`What is \(\mathbf e_x\times\mathbf e_y\)?`,
 L`Answer: \(\mathbf e_z\).
Right-handed Cartesian basis.`);
sq('vc-1.1-08', 'vc-1.1', 2, L`\(\|\mathbf a\|=2\), \(\|\mathbf b\|=3\), angle \(\pi/6\). What is \(\|\mathbf a\times\mathbf b\|\)?`,
 L`Answer: \(3\).
\(\|\mathbf a\|\|\mathbf b\||\sin\theta|=2\cdot3\cdot\tfrac12=3\).`);
// ---------------------------------------------------------------- vc-1.2 — Polar, cylindrical & spherical coordinates
sq('vc-1.2-01', 'vc-1.2', 2, L`Express \((x,y)=(0,-2)\) in plane polars \((\rho,\phi)\) with \(0\le\phi<2\pi\).`,
 L`Answer: \((2,\ 3\pi/2)\).
\(\rho=2\), negative \(y\)-axis: \(\phi=3\pi/2\) (\(-\pi/2\) is outside the range).`);
sq('vc-1.2-02', 'vc-1.2', 2, L`Spherical polars \(r=2,\ \theta=\pi/2,\ \phi=\pi/2\). Cartesian coordinates?`,
 L`Answer: \((0,2,0)\).
\(x=r\sin\theta\cos\phi=0,\ y=r\sin\theta\sin\phi=2,\ z=r\cos\theta=0\).`);
sq('vc-1.2-03', 'vc-1.2', 2, L`In the notes' spherical polars \((r,\theta,\phi)\), what does \(\theta\) measure?`,
 L`Answer: The angle from the positive \(z\)-axis, \(0\le\theta\le\pi\).
\(\phi\) is the azimuthal angle as in plane polars.`);
sq('vc-1.2-04', 'vc-1.2', 2, L`In cylindrical polars \((\rho,\phi,z)\), what is \(\rho\)?`,
 L`Answer: \(\sqrt{x^2+y^2}\), the distance from the \(z\)-axis.
The perpendicular distance from the z-axis.`);
sq('vc-1.2-05', 'vc-1.2', 2, L`Convert \((1,1,\sqrt2)\) to spherical polars \((r,\theta,\phi)\). Find each missing value, showing your working.`,
 L`(a) \(2\). \(\sqrt{1+1+2}=2\).
(b) \(\pi/4\). \(\arccos(\sqrt2/2)=\pi/4\).`,
 [L`\(r=\) \(\underline{\qquad}\).`, L`\(\cos\theta=z/r=\sqrt2/2\), so \(\theta=\) \(\underline{\qquad}\) (and \(\phi=\pi/4\)).`]);
sq('vc-1.2-06a', 'vc-1.2', 2, L`Prove or disprove (give a counterexample if false): \(\mathbf e_\rho\) and \(\mathbf e_\phi\) point in the same directions at every point.`,
 L`False. They vary with position.`);
sq('vc-1.2-06b', 'vc-1.2', 2, L`Prove or disprove (give a counterexample if false): In spherical polars, \(r=\|\mathbf x\|\).`,
 L`True. Example 1.2.`);
sq('vc-1.2-06c', 'vc-1.2', 2, L`Prove or disprove (give a counterexample if false): The surface \(r=1\) is the unit sphere.`,
 L`True. All points at distance 1 from the origin.`);
sq('vc-1.2-06d', 'vc-1.2', 2, L`Prove or disprove (give a counterexample if false): In cylindrical polars, \(\rho=1\) is a sphere.`,
 L`False. A cylinder of radius 1 about the \(z\)-axis.`);
sq('vc-1.2-07', 'vc-1.2', 2, L`What is \(x^2+y^2=4\) in cylindrical polars?`,
 L`Answer: \(\rho=2\).
\(x^2+y^2=\rho^2\).`);
sq('vc-1.2-08', 'vc-1.2', 2, L`What is the cone \(z=\sqrt{x^2+y^2}\) in spherical polars?`,
 L`Answer: \(\theta=\pi/4\).
\(r\cos\theta=r\sin\theta\Rightarrow\tan\theta=1\).`);
// ---------------------------------------------------------------- vc-1.3 — Scalar & vector fields; gradient
sq('vc-1.3-01', 'vc-1.3', 2, L`Find \(\nabla f\) for \(f(x,y,z)=x^2y+yz^3\).`,
 L`Answer: \((2xy,\ x^2+z^3,\ 3yz^2)\).
The gradient is a vector of partial derivatives.`);
sq('vc-1.3-02', 'vc-1.3', 2, L`Define a scalar field and a vector field, giving one physical example of each.`,
 L`Answer: Wind velocity on a weather map.
Magnitude and direction at each point: \(\mathbb{R}^2\to\mathbb{R}^2\).`);
sq('vc-1.3-03', 'vc-1.3', 2, L`Let \(f(x,y,z)=xe^{yz}\). Evaluate its partial derivatives at \((1,0,2)\). Find each missing value, showing your working.`,
 L`(a) \(2\). \(1\cdot2\cdot e^0=2\).
(b) \(0\). \(y=0\).`,
 [L`\(\partial f/\partial y=xze^{yz}\), which at \((1,0,2)\) equals \(\underline{\qquad}\).`, L`\(\partial f/\partial z=xye^{yz}\), which at \((1,0,2)\) equals \(\underline{\qquad}\).`]);
sq('vc-1.3-04', 'vc-1.3', 2, L`What is \(\partial/\partial x\) of \(f(x,y)=\sin(xy)\)?`,
 L`Answer: \(y\cos(xy)\).
Chain rule, treating \(y\) as a constant.`);
sq('vc-1.3-05a', 'vc-1.3', 2, L`Prove or disprove (give a counterexample if false): The gradient of a scalar field is a scalar field.`,
 L`False. \(\nabla f\) is a vector field.`);
sq('vc-1.3-05b', 'vc-1.3', 2, L`Prove or disprove (give a counterexample if false): A vector field is a map \(\mathbb{R}^n\to\mathbb{R}^m\) with \(m>1\).`,
 L`True. Definition in §1.3.1.`);
sq('vc-1.3-05c', 'vc-1.3', 2, L`Prove or disprove (give a counterexample if false): When computing \(\partial f/\partial x\), \(y\) and \(z\) are held constant.`,
 L`True. That is what "partial" means.`);
sq('vc-1.3-05d', 'vc-1.3', 2, L`Prove or disprove (give a counterexample if false): \(f\) is continuous at \(\mathbf a\) if \(f(\mathbf x)\to f(\mathbf a)\) along every path.`,
 L`True. \(\lim_{\mathbf x\to\mathbf a}f(\mathbf x)=f(\mathbf a)\).`);
sq('vc-1.3-06', 'vc-1.3', 2, L`Find \(\nabla f\) for \(f(x,y)=\ln(x^2+y^2)\).`,
 L`Answer: \(\left(\dfrac{2x}{x^2+y^2},\dfrac{2y}{x^2+y^2}\right)\).
Chain rule.`);
sq('vc-1.3-07', 'vc-1.3', 2, L`In 3D, let \(f=r=\|\mathbf x\|\). What is \(\nabla f\) for \(\mathbf x\ne\mathbf0\)?`,
 L`Answer: \(\mathbf x/r\).
\(\partial r/\partial x=x/r\) etc., so \(\nabla r=\mathbf e_r\).`);
sq('vc-1.3-08', 'vc-1.3', 3, L`Show that \(\nabla(fg)=f\nabla g+g\nabla f\) for scalar fields \(f,g\).`,
 L`Answer: \(\nabla(fg)=f\nabla g+g\nabla f\).
Apply the ordinary product rule to each component.`);
// ---------------------------------------------------------------- vc-1.4 — Double integrals
sq('vc-1.4-01', 'vc-1.4', 2, L`Example 1.4: evaluate \(I=\displaystyle\int_0^1\!\int_{x^2}^{x}xy\,dy\,dx\). Find each missing value, showing your working.`,
 L`(a) \(\tfrac1{12}\). \(\tfrac14-\tfrac16=\tfrac1{12}\).
(b) \(\tfrac1{24}\). \(\tfrac12\cdot\tfrac1{12}\).`,
 [L`The inner integral gives \(\tfrac12x(x^2-x^4)\), so \(I=\tfrac12\int_0^1(x^3-x^5)\,dx\), and \(\int_0^1(x^3-x^5)\,dx=\) \(\underline{\qquad}\).`, L`Hence \(I=\) \(\underline{\qquad}\).`]);
sq('vc-1.4-02', 'vc-1.4', 2, L`Evaluate \(\iint_R(x+y)\,dA\) over \(R=[0,2]\times[0,1]\).`,
 L`Answer: \(3\).
\(\int_0^2(x+\tfrac12)\,dx=2+1\).`);
sq('vc-1.4-03', 'vc-1.4', 2, L`Reverse the order of \(\displaystyle\int_0^1\!\int_{x^2}^{x}f\,dy\,dx\).`,
 L`Answer: \(\displaystyle\int_0^1\!\int_{y}^{\sqrt y}f\,dx\,dy\).
\(x^2\le y\le x\) for \(0\le x\le1\) \(\iff\) \(y\le x\le\sqrt y\) for \(0\le y\le1\).`);
sq('vc-1.4-04', 'vc-1.4', 2, L`What is the area between \(y=x\) and \(y=x^2\) for \(0\le x\le1\)?`,
 L`Answer: \(\tfrac16\).
\(\int_0^1(x-x^2)\,dx=\tfrac12-\tfrac13\).`);
sq('vc-1.4-05', 'vc-1.4', 2, L`Evaluate \(\iint(x^2+y^2)\,dA\) over the disc \(x^2+y^2\le4\).`,
 L`Answer: \(8\pi\).
\(\int_0^{2\pi}\!\int_0^2\rho^2\cdot\rho\,d\rho\,d\phi=2\pi\cdot4=8\pi\). (\(16\pi/3\) comes from forgetting the \(\rho\) in \(dA\).)`);
sq('vc-1.4-06a', 'vc-1.4', 2, L`Prove or disprove (give a counterexample if false): Non-constant limits can only appear on the inner integral.`,
 L`True. The outer limits must be constants.`);
sq('vc-1.4-06b', 'vc-1.4', 2, L`Prove or disprove (give a counterexample if false): In plane polars, \(dA=d\rho\,d\phi\).`,
 L`False. \(dA=\rho\,d\rho\,d\phi\).`);
sq('vc-1.4-06c', 'vc-1.4', 2, L`Prove or disprove (give a counterexample if false): \(\iint_R1\,dA\) is the area of \(R\).`,
 L`True. Setting \(f=1\).`);
sq('vc-1.4-06d', 'vc-1.4', 2, L`Prove or disprove (give a counterexample if false): Changing the order of integration never requires changing the limits.`,
 L`False. Only for rectangles.`);
sq('vc-1.4-07', 'vc-1.4', 2, L`Evaluate \(\displaystyle\int_0^1\!\int_0^1e^{x+y}\,dx\,dy\).`,
 L`Answer: \((e-1)^2\).
It factorises: \(\left(\int_0^1e^x\,dx\right)^2\).`);
sq('vc-1.4-08', 'vc-1.4', 2, L`What is the area of the quarter disc \(x^2+y^2\le9,\ x,y\ge0\)?`,
 L`Answer: \(\tfrac{9\pi}{4}\).
\(\int_0^{\pi/2}\!\int_0^3\rho\,d\rho\,d\phi=\tfrac\pi2\cdot\tfrac92\).`);
// ---------------------------------------------------------------- vc-1.5 — Volume (triple) integrals
sq('vc-1.5-01', 'vc-1.5', 2, L`What is the volume element in spherical polars \((r,\theta,\phi)\)?`,
 L`Answer: \(r^2\sin\theta\,dr\,d\theta\,d\phi\).
\(dV=r^2\sin\theta\,dr\,d\theta\,d\phi\).`);
sq('vc-1.5-02', 'vc-1.5', 2, L`What is the volume element in cylindrical polars \((\rho,\phi,z)\)?`,
 L`Answer: \(\rho\,d\rho\,d\phi\,dz\).
The plane-polar area element times \(dz\).`);
sq('vc-1.5-03', 'vc-1.5', 2, L`Example 1.6: integrate \(f=z\) over the hemisphere between \(z=0\) and \(z=\sqrt{1-x^2-y^2}\). Find each missing value, showing your working.`,
 L`(a) \(\tfrac14\). \(\tfrac12-\tfrac14\).
(b) \(\pi/4\). The \(\phi\)-integral contributes \(2\pi\).`,
 [L`After the \(z\)-integral, \(I=\tfrac12\iint_R(1-x^2-y^2)\,dA\) over the unit disc. In polars, \(\int_0^1(1-\rho^2)\rho\,d\rho=\) \(\underline{\qquad}\).`, L`So \(I=\tfrac12\cdot2\pi\cdot\tfrac14=\) \(\underline{\qquad}\).`]);
sq('vc-1.5-04', 'vc-1.5', 2, L`Write down a triple integral in spherical polars for the volume of a ball of radius \(a\), and evaluate it.`,
 L`Answer: \(\displaystyle\int_0^{2\pi}\!\!\int_0^{\pi}\!\!\int_0^{a}r^2\sin\theta\,dr\,d\theta\,d\phi\).
\(\theta\in[0,\pi]\), \(\phi\in[0,2\pi)\); value \(\tfrac{a^3}{3}\cdot2\cdot2\pi=\tfrac43\pi a^3\).`);
sq('vc-1.5-05', 'vc-1.5', 2, L`Evaluate \(\iiint xyz\,dV\) over the unit cube \([0,1]^3\).`,
 L`Answer: \(\tfrac18\).
\(\left(\tfrac12\right)^3\).`);
sq('vc-1.5-06', 'vc-1.5', 2, L`Using cylindrical polars, what is the volume of a cylinder of radius 2 and height 3?`,
 L`Answer: \(12\pi\).
\(\int_0^3\!\int_0^{2\pi}\!\int_0^2\rho\,d\rho\,d\phi\,dz=3\cdot2\pi\cdot2\).`);
sq('vc-1.5-07a', 'vc-1.5', 2, L`Prove or disprove (give a counterexample if false): The inner integrals are always evaluated first.`,
 L`True. Note in §1.5.`);
sq('vc-1.5-07b', 'vc-1.5', 2, L`Prove or disprove (give a counterexample if false): \(\iiint_V1\,dV\) gives the volume of \(V\).`,
 L`True. Setting \(f=1\).`);
sq('vc-1.5-07c', 'vc-1.5', 2, L`Prove or disprove (give a counterexample if false): In spherical polars, \(\theta\) runs from \(0\) to \(2\pi\).`,
 L`False. \(0\le\theta\le\pi\); \(\phi\) runs over \([0,2\pi)\).`);
sq('vc-1.5-07d', 'vc-1.5', 2, L`Prove or disprove (give a counterexample if false): In cylindrical polars, \(dV=d\rho\,d\phi\,dz\).`,
 L`False. \(dV=\rho\,d\rho\,d\phi\,dz\).`);
sq('vc-1.5-08', 'vc-1.5', 2, L`What is the volume in the first octant under the plane \(z=1-x-y\)?`,
 L`Answer: \(\tfrac16\).
\(\int_0^1\!\int_0^{1-x}(1-x-y)\,dy\,dx=\int_0^1\tfrac{(1-x)^2}{2}dx=\tfrac16\).`);
// ---------------------------------------------------------------- vc-2.1 — Curves in 2D: parametrisation, tangent & length
sq('vc-2.1-01', 'vc-2.1', 2, L`Find the tangent vector to \(C:t\mapsto(t,t^2)\) at \(t=1\).`,
 L`Answer: \((1,2)\).
\(\mathbf v(t)=(1,2t)\).`);
sq('vc-2.1-02', 'vc-2.1', 2, L`Describe \(C:t\mapsto(a\sin t,\ a\cos t)\), \(0\le t\le\pi\) (\(a>0\)).`,
 L`Answer: Half the circle of radius \(a\), clockwise from \((0,a)\) to \((0,-a)\).
\(x^2+y^2=a^2\); \(t=0\): \((0,a)\), \(t=\tfrac\pi2\): \((a,0)\), \(t=\pi\): \((0,-a)\).`);
sq('vc-2.1-03', 'vc-2.1', 2, L`\(C:t\mapsto(3\cos t,\ 3\sin t)\), \(0\le t\le\pi/2\). Find each missing value, showing your working.`,
 L`(a) \(3\). \(\sqrt{9\sin^2t+9\cos^2t}=3\).
(b) \(3\pi/2\). A quarter circle of radius 3.`,
 [L`The speed is \(v(t)=\|(-3\sin t,\ 3\cos t)\|=\) \(\underline{\qquad}\).`, L`So \(L=\int_0^{\pi/2}3\,dt=\) \(\underline{\qquad}\).`]);
sq('vc-2.1-04', 'vc-2.1', 3, L`Show that \(\lambda\mapsto(\lambda^2,\lambda^4)\), \(0\le\lambda\le\sqrt2\), describes the same curve as \(t\mapsto(t,t^2)\), \(0\le t\le2\).`,
 L`Answer: \(\lambda\mapsto(\lambda^2,\lambda^4)\), \(0\le\lambda\le\sqrt2\).
Substitute \(t=\lambda^2\) (note in §2.1.1).`);
sq('vc-2.1-05', 'vc-2.1', 2, L`Eliminating \(t\) from \(t\mapsto(\sin t,\cos t)\) gives \(x^2+y^2=1\). What information is lost?`,
 L`Answer: The start and end points and the direction of travel.
The geometric form contains less information than the parametric form.`);
sq('vc-2.1-06a', 'vc-2.1', 2, L`Prove or disprove (give a counterexample if false): The magnitude of the tangent vector depends on the parametrisation.`,
 L`True. Reparametrising changes the speed.`);
sq('vc-2.1-06b', 'vc-2.1', 2, L`Prove or disprove (give a counterexample if false): The length of a curve depends on the parametrisation.`,
 L`False. \(L\) is independent of the parametrisation.`);
sq('vc-2.1-06c', 'vc-2.1', 2, L`Prove or disprove (give a counterexample if false): The unit tangent \(\mathbf v/\|\mathbf v\|\) does not depend on the parametrisation (same direction of travel).`,
 L`True. Only the magnitude changes.`);
sq('vc-2.1-06d', 'vc-2.1', 2, L`Prove or disprove (give a counterexample if false): The line element of the curve is \(d\mathbf x=\mathbf v\,dt\).`,
 L`True. Note in §2.1.3.`);
sq('vc-2.1-07', 'vc-2.1', 2, L`Find the length of \(t\mapsto(1+3t,\ 2+4t)\), \(0\le t\le2\).`,
 L`Answer: \(10\).
\(\mathbf v=(3,4)\), speed 5, \(L=\int_0^2 5\,dt\).`);
sq('vc-2.1-08', 'vc-2.1', 2, L`What is the speed of \(t\mapsto(e^t\cos t,\ e^t\sin t)\)?`,
 L`Answer: \(\sqrt2\,e^t\).
\(\mathbf v=e^t(\cos t-\sin t,\ \sin t+\cos t)\), \(\|\mathbf v\|^2=2e^{2t}\).`);
// ---------------------------------------------------------------- vc-2.1.5 — Arc-length & the natural parametrisation
sq('vc-2.1.5-01', 'vc-2.1.5', 2, L`For the arc-length \(s(t)=\int_{t_1}^{t}v(t')\,dt'\), what is \(ds/dt\)?`,
 L`Answer: \(v(t)\), the speed.
Fundamental theorem of calculus.`);
sq('vc-2.1.5-02', 'vc-2.1.5', 2, L`\(C:t\mapsto(a\sin t,a\cos t)\), \(0\le t\le\pi\), has speed \(v=a\). Find its natural (arc-length) parametrisation.`,
 L`Answer: \(s\mapsto\big(a\sin(s/a),\ a\cos(s/a)\big)\), \(0\le s\le\pi a\).
\(s=at\Rightarrow t=s/a\) (Example 2.4).`);
sq('vc-2.1.5-03', 'vc-2.1.5', 2, L`What is special about the natural (arc-length) parametrisation?`,
 L`Answer: Its tangent vector has unit length everywhere.
\(v(s)=ds/ds=1\).`);
sq('vc-2.1.5-04', 'vc-2.1.5', 2, L`For a curve on \(t_1\le t\le t_2\), what are \(s(t_1)\) and \(s(t_2)\)?`,
 L`Answer: \(0\) and \(L\).
\(s(t_1)=\int_{t_1}^{t_1}v=0\), \(s(t_2)=L\).`);
// ---------------------------------------------------------------- vc-2.2 — Line integrals of scalar & vector fields
sq('vc-2.2-01', 'vc-2.2', 2, L`Example 2.6: \(\mathbf F=(2xy,\ x^2)\) along \(y=x^2\) from \((0,0)\) to \((1,1)\), parametrised by \((t,t^2)\). Find each missing value, showing your working.`,
 L`(a) \(4t^3\). \(2t^3+2t^3\).
(b) \(1\). \([t^4]_0^1\).`,
 [L`\(\mathbf F(\mathbf x(t))\cdot\mathbf v(t)=(2t^3,t^2)\cdot(1,2t)=\) \(\underline{\qquad}\).`, L`So \(\int_C\mathbf F\cdot d\mathbf x=\int_0^14t^3\,dt=\) \(\underline{\qquad}\).`]);
sq('vc-2.2-02', 'vc-2.2', 2, L`Example 2.5: find \(\int_C(x+y)^2\,ds\) along \(t\mapsto(2\cos t,2\sin t)\), \(0\le t\le\pi\).`,
 L`Answer: \(8\pi\).
\(v=2\), \((x+y)^2=4(1+\sin2t)\): \(\int_0^\pi8(1+\sin2t)\,dt=8\pi\).`);
sq('vc-2.2-03', 'vc-2.2', 2, L`What kind of quantity is \(\int_C\mathbf F\cdot d\mathbf x\)?`,
 L`Answer: A scalar.
The dot product makes the integrand scalar.`);
sq('vc-2.2-04', 'vc-2.2', 2, L`Evaluate \(\oint_C\mathbf F\cdot d\mathbf x\) for \(\mathbf F=(-y,x)\) around the unit circle \((\cos t,\sin t)\), \(0\le t\le2\pi\).`,
 L`Answer: \(2\pi\).
\(\mathbf F\cdot\mathbf v=\sin^2t+\cos^2t=1\).`);
sq('vc-2.2-05', 'vc-2.2', 2, L`Evaluate \(\int_Cx\,ds\) along the segment from \((0,0)\) to \((3,4)\).`,
 L`Answer: \(\tfrac{15}{2}\).
\((3t,4t)\), speed 5: \(\int_0^13t\cdot5\,dt\).`);
sq('vc-2.2-06a', 'vc-2.2', 2, L`Prove or disprove (give a counterexample if false): Only the component of \(\mathbf F\) tangent to \(C\) contributes to \(\int_C\mathbf F\cdot d\mathbf x\).`,
 L`True. Note in §2.2.2.`);
sq('vc-2.2-06b', 'vc-2.2', 2, L`Prove or disprove (give a counterexample if false): \(\int_C1\,ds\) is the length of \(C\).`,
 L`True. Equation (2.6).`);
sq('vc-2.2-06c', 'vc-2.2', 2, L`Prove or disprove (give a counterexample if false): \(\int_Cf\,ds\) depends on the parametrisation chosen.`,
 L`False. It is independent of the parametrisation.`);
sq('vc-2.2-06d', 'vc-2.2', 2, L`Prove or disprove (give a counterexample if false): Reversing the direction of \(C\) changes the sign of \(\int_C\mathbf F\cdot d\mathbf x\).`,
 L`True. \(\mathbf v\) reverses.`);
sq('vc-2.2-07', 'vc-2.2', 2, L`For \(C:t\mapsto(x(t),y(t))\), \(t_1\le t\le t_2\), express \(\int_Cf\,ds\) as an integral over \(t\).`,
 L`Answer: \(\int_{t_1}^{t_2}f(x(t),y(t))\,v(t)\,dt\) with \(v=\|\mathbf v\|\).
\(ds=v(t)\,dt\).`);
sq('vc-2.2-08', 'vc-2.2', 2, L`Evaluate \(\int_C\mathbf F\cdot d\mathbf x\) for \(\mathbf F=(y,x)\) along \(t\mapsto(t,t)\), \(0\le t\le1\).`,
 L`Answer: \(1\).
\(\mathbf F\cdot\mathbf v=2t\).`);
// ---------------------------------------------------------------- vc-2.3 — Curves in 3D
sq('vc-2.3-01', 'vc-2.3', 2, L`What is the speed of the helix \(t\mapsto(\sin t,\cos t,t)\)?`,
 L`Answer: \(\sqrt2\).
\(\mathbf v=(\cos t,-\sin t,1)\).`);
sq('vc-2.3-02', 'vc-2.3', 2, L`What is the length of the helix \((\sin t,\cos t,t)\), \(0\le t\le2\pi\)?`,
 L`Answer: \(2\sqrt2\,\pi\).
\(\int_0^{2\pi}\sqrt2\,dt\).`);
sq('vc-2.3-03', 'vc-2.3', 2, L`\(C:t\mapsto(t,\ t^2,\ \tfrac23t^3)\), \(0\le t\le1\). Find each missing value, showing your working.`,
 L`(a) \(2\). \(1+4t^2+4t^4=(1+2t^2)^2\).
(b) \(\tfrac53\). \(1+\tfrac23\).`,
 [L`\(\mathbf v=(1,2t,2t^2)\), so \(\|\mathbf v\|=\sqrt{1+4t^2+4t^4}=1+{}\)\(\underline{\qquad}\)\(\,t^2\).`, L`\(L=\int_0^1(1+2t^2)\,dt=\) \(\underline{\qquad}\).`]);
sq('vc-2.3-04', 'vc-2.3', 2, L`Example 2.7: evaluate \(\int_C\mathbf F\cdot d\mathbf x\) for \(\mathbf F=(y,-x,z^2-3x)\) along \((\sin t,\cos t,t)\), \(0\le t\le2\pi\).`,
 L`Answer: \(2\pi+\tfrac{8\pi^3}{3}\).
\(\mathbf F\cdot\mathbf v=\cos^2t+\sin^2t+t^2-3\sin t\); integrate over \([0,2\pi]\).`);
sq('vc-2.3-05', 'vc-2.3', 2, L`Tangent vector to \(t\mapsto(\cos t,\sin t,2t)\) at \(t=0\)?`,
 L`Answer: \((0,1,2)\).
\(\mathbf v=(-\sin t,\cos t,2)\).`);
sq('vc-2.3-06', 'vc-2.3', 2, L`What is the projection of \((\sin t,\cos t,t)\) onto the \(xy\)-plane?`,
 L`Answer: The unit circle centred at the origin.
\(x^2+y^2=1\).`);
sq('vc-2.3-07a', 'vc-2.3', 2, L`Prove or disprove (give a counterexample if false): The helix \((\sin t,\cos t,t)\) has constant speed.`,
 L`True. \(\sqrt2\).`);
sq('vc-2.3-07b', 'vc-2.3', 2, L`Prove or disprove (give a counterexample if false): For a 3D curve, \(L=\int\sqrt{x'^2+y'^2+z'^2}\,dt\).`,
 L`True. Same formula with an extra component.`);
sq('vc-2.3-07c', 'vc-2.3', 2, L`Prove or disprove (give a counterexample if false): \(\int_C\mathbf F\cdot d\mathbf x\) of a 3D field is a vector.`,
 L`False. It is a scalar.`);
sq('vc-2.3-07d', 'vc-2.3', 2, L`Prove or disprove (give a counterexample if false): On the helix \((\sin t,\cos t,t)\), \(z\) increases with \(t\).`,
 L`True. \(z=t\).`);
sq('vc-2.3-08', 'vc-2.3', 2, L`What is the length of the segment from \((1,0,0)\) to \((1,2,2)\)?`,
 L`Answer: \(2\sqrt2\).
\(\|(0,2,2)\|=\sqrt8\).`);
})();
