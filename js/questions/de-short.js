// ================================================================
// MSP2802 SHORT QUESTIONS — built from Specimen Papers 1–3 (tagged e.g. "(SP1 A3)").
// Short written exam questions, all maths in LaTeX (\( \) inline, \[ \] display).
// sq(id, section, marks, question, mark scheme, parts?)
// ================================================================
(function(){
const L = String.raw;
const sq = (id, sec, marks, text, scheme, parts) => QUESTIONS.push({id, sec, type:'written', marks, text, scheme, parts});

// ---------------------------------------------------------------- de-1a — Second-order ODEs & reduction of order
sq('de-1a-01', 'de-1a', 2, L`State the reduction-of-order formula for a second solution \(y_2\) of \(y''+p(x)y'+q(x)y=0\), given one solution \(y_1\).`,
 L`Answer: \(y_2=y_1\displaystyle\int\frac{e^{-\int p\,dx}}{y_1^2}\,dx\).
\(y_2(x)=y_1(x)\int e^{-\int p(x)\,dx}\,\dfrac{dx}{y_1^2(x)}\), with \(p\) the coefficient of \(y'\) after dividing by the coefficient of \(y''\).`);
sq('de-1a-02', 'de-1a', 2, L`(SP1 B5d) For \(x(2-x)y''-2(x-1)y'+12y=0\), write down the \(p(x)\) used in the reduction-of-order formula and compute \(\int p\,dx\).`,
 L`Answer: \(p(x)=\dfrac{-2(x-1)}{x(2-x)}\).
Divide by \(x(2-x)\) first — the mark scheme stresses "NOT \(-2(x-1)\)". Then \(\int p\,dx=\log x+\log(x-2)\) and \(y_2=y_1\int\frac{dx}{x(x-2)y_1^2}\).`);
sq('de-1a-03', 'de-1a', 2, L`(SP2 B5d) Spherical Bessel equation \(x^2y''+2xy'+(x^2-6)y=0\). Find each missing value, showing your working.`,
 L`(a) \(2/x\). The coefficient of \(y'\) is \(2x/x^2\).
(b) \(-2\). \(\int\frac2x\,dx=2\log x\).`,
 [L`Dividing by \(x^2\), \(p(x)=\) \(\underline{\qquad}\).`, L`\(e^{-\int p\,dx}=e^{-2\log x}=x^{k}\) with \(k=\) \(\underline{\qquad}\), so \(y_2=y_1\int\frac{dx}{x^2y_1^2}\).`]);
sq('de-1a-04', 'de-1a', 2, L`(SP3 B5d) For the Laguerre equation \(xy''+(1-x)y'+\nu y=0\), write \(y_2=y_1\int\frac{A(x)\,dx}{B(x)\,y_1^2}\), finding \(A\) and \(B\).`,
 L`Answer: \(A=e^x,\ B=x\).
\(p=\frac{1-x}{x}=\frac1x-1\), \(\int p=\log x-x\), \(e^{-\int p}=e^{x}x^{-1}\).`);
sq('de-1a-05', 'de-1a', 2, L`(SP1 B6a) Solve the homogeneous equation \(y''+y'-2y=0\). Find each missing value, showing your working.`,
 L`(a) \(1\) and \(-2\). \(r^2+r-2=(r-1)(r+2)\).`,
 [L`The characteristic equation \(r^2+r-2=0\) has roots \(r=\) \(\underline{\qquad}\) and \(r=\) \(\underline{\qquad}\), so \(y=Ae^{x}+Be^{-2x}\).`]);
sq('de-1a-06a', 'de-1a', 2, L`Prove or disprove (give a counterexample if false): Reduction of order needs one known solution \(y_1\).`,
 L`True. It builds \(y_2=v(x)y_1\) from \(y_1\).`);
sq('de-1a-06b', 'de-1a', 2, L`Prove or disprove (give a counterexample if false): You can read \(p(x)\) straight off \(a(x)y''+b(x)y'+c(x)y=0\) as \(b(x)\).`,
 L`False. \(p=b/a\): divide by the coefficient of \(y''\) first.`);
sq('de-1a-06c', 'de-1a', 2, L`Prove or disprove (give a counterexample if false): \(\int p\,dx\) and \(\int p\,dx+C\) give equivalent \(y_2\).`,
 L`True. The constant only rescales \(y_2\) by \(e^{-C}\).`);
sq('de-1a-06d', 'de-1a', 2, L`Prove or disprove (give a counterexample if false): For \(y''+y'-2y=0\) the general solution is \(Ae^{x}+Be^{-2x}\).`,
 L`True. Roots \(1\) and \(-2\).`);
// ---------------------------------------------------------------- de-1b — Differential operators & analytic functions
sq('de-1b-01', 'de-1b', 2, L`For \(y''+p(x)y'+q(x)y=0\), define what it means for \(x_0\) to be an ordinary point and a regular singular point.`,
 L`Answer: \(p\) and \(q\) are both analytic at \(x_0\).
Ordinary: p, q analytic. Regular singular: not ordinary, but (x−x₀)p and (x−x₀)²q analytic. Otherwise essential singular.`);
sq('de-1b-02', 'de-1b', 2, L`(SP1 A1a) Classify \(x=0\) for \(y''+x^2y'-4y=0\).`,
 L`Answer: Ordinary point — two independent series solutions.
\(p=x^2\), \(q=-4\) are analytic, and there are always two series solutions at an ordinary point.`);
sq('de-1b-03', 'de-1b', 2, L`(SP1 A1b) Classify \(x=0\) for \(x^3y''-5y'+x^2y=0\).`,
 L`Answer: Essential singular: \(xp(x)=-5/x^2\) is not analytic — no series solutions expected.
\(p=-5/x^3\), \(q=1/x\) are singular, and \(xp=-5/x^2\) is still not analytic.`);
sq('de-1b-04', 'de-1b', 2, L`(SP1 A1c) Classify \(x=0\) for \((x-1)^2x\,y''+y=0\), assuming the indicial roots differ by an integer.`,
 L`Answer: Regular singular; do not expect two series solutions.
\(q=\frac{1}{x(x-1)^2}\) is singular, but \(xp=0\) and \(x^2q=\frac{x}{(x-1)^2}\) are analytic at 0. Roots differing by an integer ⇒ not two series solutions.`);
sq('de-1b-05', 'de-1b', 2, L`(SP2 A1a) Classify \(x=0\) for \(y''-x^2y=0\).`,
 L`Answer: Ordinary point: \(p=0\), \(q=-x^2\) are analytic.
Both coefficients are polynomials.`);
sq('de-1b-06', 'de-1b', 2, L`(SP3 B5a) Classify \(x=0\) for the Laguerre equation \(xy''+(1-x)y'+\nu y=0\).`,
 L`Answer: Regular singular: \(xp=1-x\) and \(x^2q=\nu x\) are analytic.
\(p=(1-x)/x\) and \(q=\nu/x\) are singular, but \(xp\) and \(x^2q\) are analytic.`);
sq('de-1b-07', 'de-1b', 2, L`(SP2 B5a) Classify \(x=0\) for \(x^2y''+2xy'+(x^2-6)y=0\).`,
 L`Answer: Regular singular: \(xp=2\) and \(x^2q=x^2-6\) are analytic.
\(p=2/x\) and \(q=1-6/x^2\) are singular at 0; multiplying by \(x\) and \(x^2\) removes the singularities.`);
sq('de-1b-08a', 'de-1b', 2, L`Prove or disprove (give a counterexample if false): A function is analytic at \(x_0\) if it equals its Taylor series in a neighbourhood of \(x_0\).`,
 L`True. That is the definition used for classifying points.`);
sq('de-1b-08b', 'de-1b', 2, L`Prove or disprove (give a counterexample if false): \(1/x\) is analytic at \(x=0\).`,
 L`False. It is not even defined there.`);
sq('de-1b-08c', 'de-1b', 2, L`Prove or disprove (give a counterexample if false): At a regular singular point there is always at least one Frobenius series solution.`,
 L`True. The larger indicial root always gives one.`);
sq('de-1b-08d', 'de-1b', 2, L`Prove or disprove (give a counterexample if false): At an essential singular point we expect two Frobenius series solutions.`,
 L`False. We do not expect any (SP1 A1b).`);
// ---------------------------------------------------------------- de-2 — Series solutions at ordinary points
sq('de-2-01', 'de-2', 4, L`(SP2 A1b) Solve \(y''-x^2y=0\) with \(y=\sum a_nx^n\). Find each missing value, showing your working.`,
 L`(a) \(0\) and \(0\). The \(x^0\) and \(x^1\) coefficients are \(2a_2\) and \(6a_3\): nothing else contributes.
(b) \(12\) and \(672\). \(a_4=a_0/(4\cdot3)\); \(a_8=a_4/(8\cdot7)=a_0/672\).`,
 [L`Substituting and matching powers gives \(a_2=\) \(\underline{\qquad}\), \(a_3=\) \(\underline{\qquad}\) and \(a_n=\dfrac{a_{n-4}}{n(n-1)}\).`, L`So \(a_4=a_0/k\) with \(k=\) \(\underline{\qquad}\) and \(a_8=a_0/m\) with \(m=\) \(\underline{\qquad}\).`]);
sq('de-2-02', 'de-2', 2, L`(SP2 A1b) For \(y''-x^2y=0\), write down the fundamental solution multiplying \(a_1\), up to \(x^9\).`,
 L`Answer: \(x+\tfrac{1}{20}x^5+\tfrac{1}{1440}x^9\).
\(a_5=a_1/(5\cdot4)\), \(a_9=a_5/(9\cdot8)=a_1/1440\).`);
sq('de-2-03', 'de-2', 3, L`(SP3 A1b) Solve \(y''+x^3y=0\) with \(y=\sum a_nx^n\). Find each missing value, showing your working.`,
 L`(a) \(20\). \(a_5=-a_0/(5\cdot4)\).
(b) \(1800\) and \(3300\). \(a_{10}=-a_5/90=a_0/1800\); \(a_6=-a_1/30\), \(a_{11}=-a_6/110=a_1/3300\).`,
 [L`The recurrence is \(a_n=-\dfrac{a_{n-5}}{n(n-1)}\) with \(a_2=a_3=a_4=0\). So \(a_5=-a_0/k\), \(k=\) \(\underline{\qquad}\).`, L`\(a_{10}=a_0/m\) with \(m=\) \(\underline{\qquad}\) and \(a_{11}=a_1/p\) with \(p=\) \(\underline{\qquad}\).`]);
sq('de-2-04', 'de-2', 3, L`(SP3 A1) Derive the recurrence relation for power-series solutions \(y=\sum a_kx^k\) of \(y''+x^3y=0\).`,
 L`Answer: \(a_{k+5}=-\dfrac{a_k}{(k+5)(k+4)}\).
\(\sum(k+5)(k+4)a_{k+5}x^{k+3}+\sum a_kx^{k+3}=0\) — the alternative re-indexing in the mark scheme.`);
sq('de-2-05', 'de-2', 2, L`Why is \(a_2=0\) for \(y''-x^2y=0\)?`,
 L`Answer: The \(x^0\) coefficient is \(2a_2\) and no other term contributes at that power.
\(-x^2y\) only contributes from \(x^2\) upwards.`);
sq('de-2-06', 'de-2', 3, L`Use \(y=\sum a_nx^n\) to solve \(y''+y=0\). Find the recurrence relation and identify the two fundamental solutions.`,
 L`Answer: \(a_{n+2}=-\dfrac{a_n}{(n+2)(n+1)}\), giving \(a_0\cos x+a_1\sin x\).
The even and odd series are exactly the Taylor series of cos and sin.`);
sq('de-2-07a', 'de-2', 2, L`Prove or disprove (give a counterexample if false): At an ordinary point there are always two independent power-series solutions.`,
 L`True. SP1 A1a mark scheme.`);
sq('de-2-07b', 'de-2', 2, L`Prove or disprove (give a counterexample if false): \(a_0\) and \(a_1\) are arbitrary and play the role of \(A_1\) and \(A_2\).`,
 L`True. They multiply the two fundamental solutions.`);
sq('de-2-07c', 'de-2', 2, L`Prove or disprove (give a counterexample if false): You should re-index sums so they share the same power of x before combining.`,
 L`True. Then set each coefficient to zero.`);
sq('de-2-07d', 'de-2', 2, L`Prove or disprove (give a counterexample if false): For \(y''-x^2y=0\), the odd coefficients \(a_3,a_7,\dots\) are nonzero.`,
 L`False. \(a_3=0\), so \(a_7=a_3/42=0\) too.`);
// ---------------------------------------------------------------- de-3 — Regular singular points & Frobenius
sq('de-3-01', 'de-3', 4, L`(SP1 B5) Shifted Legendre equation \(x(2-x)y''-2(x-1)y'+12y=0\) with \(y=\sum a_nx^{n+\lambda}\). The indicial equation is \(\lambda^2=0\) and \(a_{n+1}=\dfrac{(n+\lambda)(n+\lambda+1)-12}{2(n+1+\lambda)^2}a_n\). Find each missing value, showing your working.`,
 L`(a) \(-6\) and \(\tfrac{15}{2}\). \(a_1=\frac{0-12}{2}a_0=-6a_0\); \(a_2=\frac{2-12}{8}a_1=-\tfrac54a_1=\tfrac{15}{2}a_0\).
(b) \(-\tfrac52\) and \(0\). \(a_3=\frac{6-12}{18}a_2=-\tfrac13a_2\); \(a_4=\frac{12-12}{32}a_3=0\).`,
 [L`With \(\lambda=0\): \(a_1=c\,a_0\) with \(c=\) \(\underline{\qquad}\) and \(a_2=d\,a_0\) with \(d=\) \(\underline{\qquad}\).`, L`\(a_3=e\,a_0\) with \(e=\) \(\underline{\qquad}\), and \(a_4=\) \(\underline{\qquad}\) so the series terminates.`]);
sq('de-3-02', 'de-3', 2, L`(SP1 B5c) Why can only one series solution be found for the shifted Legendre equation?`,
 L`Answer: The indicial equation \(\lambda^2=0\) has a repeated root.
Only one value of \(\lambda\) to use. (The second solution comes from reduction of order.)`);
sq('de-3-03', 'de-3', 2, L`(SP1 B5c) Using \(a_{n+1}=\frac{n(n+1)-12}{2(n+1)^2}a_n\) (with \(\lambda=0\)), write down \(y_1\) for \(x(2-x)y''-2(x-1)y'+12y=0\).`,
 L`Answer: \(a_0\left(1-6x+\tfrac{15}{2}x^2-\tfrac52x^3\right)\).
A polynomial — "the usual \(\dots\) should NOT be included" since \(a_n=0\) for \(n\ge4\). (It is \(P_3(x-1)\).)`);
sq('de-3-04', 'de-3', 2, L`(SP3 B5b) For \(xy''+(1-x)y'+\nu y=0\), find the indicial equation and the recurrence relation for \(y=\sum a_nx^{n+\lambda}\).`,
 L`Answer: \(\lambda^2=0\) and \(a_{n+1}=\dfrac{n+\lambda-\nu}{(n+\lambda+1)^2}a_n\).
Combining gives \(\lambda^2a_0+\sum\big[(n+\lambda+1)^2a_{n+1}-(n+\lambda-\nu)a_n\big]x^{n+\lambda}=0\).`);
sq('de-3-05', 'de-3', 3, L`Laguerre with \(\nu=2\) and \(\lambda=0\): \(a_{n+1}=\dfrac{n-2}{(n+1)^2}a_n\). Find each missing value, showing your working.`,
 L`(a) \(-2\) and \(\tfrac12\). \(a_1=-2a_0\); \(a_2=\frac{-1}{4}a_1=\tfrac12a_0\).
(b) \(0\). \(a_3=\frac{0}{9}a_2\). For integer \(\nu\) the series stops after \(\nu+1\) terms.`,
 [L`\(a_1=c\,a_0\) with \(c=\) \(\underline{\qquad}\), \(a_2=d\,a_0\) with \(d=\) \(\underline{\qquad}\).`, L`\(a_3=\) \(\underline{\qquad}\), so \(y_1=a_0(1-2x+\tfrac12x^2)\) — a polynomial.`]);
sq('de-3-06', 'de-3', 2, L`Write down the form of solution sought in the method of Frobenius, and say how \(\lambda\) is determined.`,
 L`Answer: \(y=\sum_{n\ge0}a_nx^{n+\lambda}\) with \(a_0\ne0\).
\(\lambda\) is fixed by the indicial equation (the lowest power).`);
sq('de-3-07a', 'de-3', 2, L`Prove or disprove (give a counterexample if false): A repeated indicial root gives only one Frobenius series.`,
 L`True. SP1 B5, SP3 B5.`);
sq('de-3-07b', 'de-3', 2, L`Prove or disprove (give a counterexample if false): If the roots differ by an integer, the larger root gives a series solution.`,
 L`True. SP2 B5c: use λ = 2, not −3.`);
sq('de-3-07c', 'de-3', 2, L`Prove or disprove (give a counterexample if false): If the roots differ by an integer, the smaller root always gives a second series.`,
 L`False. It is not expected to; use reduction of order instead.`);
sq('de-3-07d', 'de-3', 2, L`Prove or disprove (give a counterexample if false): The indicial equation comes from the coefficient of the lowest power of x.`,
 L`True. E.g. \(2\lambda^2a_0x^{\lambda-1}\) in SP1 B5.`);
// ---------------------------------------------------------------- de-4 — Bessel’s equation & series summary
sq('de-4-01', 'de-4', 4, L`(SP2 B5) Spherical Bessel equation \(x^2y''+2xy'+(x^2-6)y=0\), \(y=\sum a_nx^{n+\lambda}\). Find each missing value, showing your working.`,
 L`(a) \(2\) and \(-3\). \((\lambda+3)(\lambda-2)=0\).
(b) \(14\) and \(504\). \(a_n=\frac{a_{n-2}}{6-(n+2)(n+3)}\): \(a_2=\frac{a_0}{6-20}\), \(a_4=\frac{a_2}{6-42}=\frac{a_0}{504}\).`,
 [L`The indicial equation \(\lambda^2+\lambda-6=0\) has roots \(\lambda=\) \(\underline{\qquad}\) and \(\lambda=\) \(\underline{\qquad}\).`, L`With \(\lambda=2\): \(a_2=-a_0/k\) with \(k=\) \(\underline{\qquad}\) and \(a_4=a_0/m\) with \(m=\) \(\underline{\qquad}\).`]);
sq('de-4-02', 'de-4', 2, L`(SP2 B5c) The indicial roots for \(x^2y''+2xy'+(x^2-6)y=0\) are \(2\) and \(-3\). Which root is expected to give a series solution \(y_1\), and why?`,
 L`Answer: \(\lambda=2\): the roots differ by an integer, so only the larger is guaranteed.
\(2-(-3)=5\in\mathbb Z\).`);
sq('de-4-03', 'de-4', 2, L`(SP2 B5c) Using \(a_n=\frac{a_{n-2}}{6-(n+2)(n+3)}\) and \(a_1=0\), write \(y_1\) up to \(x^6\).`,
 L`Answer: \(a_0\left(x^2-\tfrac{x^4}{14}+\tfrac{x^6}{504}\right)\).
Multiply the coefficients by \(x^{n+2}\); \(a_1=a_3=0\).`);
sq('de-4-04', 'de-4', 2, L`(SP2 B5b) Why is \(a_1=0\) for the spherical Bessel equation with \(\lambda=2\)?`,
 L`Answer: Its coefficient is \(\lambda^2+3\lambda-4=6\ne0\), so \(a_1=0\).
\((\lambda^2+3\lambda-4)a_1=0\) and \(\lambda=2\) gives \(6a_1=0\).`);
sq('de-4-05', 'de-4', 2, L`Find the indicial roots of Bessel's equation of order \(\nu\), \(x^2y''+xy'+(x^2-\nu^2)y=0\), at \(x=0\).`,
 L`Answer: \(\lambda=\pm\nu\).
Lowest power: \(\lambda(\lambda-1)+\lambda-\nu^2=\lambda^2-\nu^2=0\).`);
sq('de-4-06', 'de-4', 2, L`List, in order, the steps of the series-solution method for a Section B question about a regular singular point.`,
 L`Answer: Classify the point → substitute the series → re-index to a common power → extract the lowest terms (indicial equation) → recurrence → pick valid λ → write out y₁ → reduction of order for y₂ if needed.
This is the structure of every Section B Q5 in the specimen papers.`);
// ---------------------------------------------------------------- de-5 — Boundary value problems
sq('de-5-01', 'de-5', 1, L`(SP1 A3) \(y''-4y'+(\lambda+4)y=0\) on \(0<x<1\), \(y(0)=0\), \(y'(1)-2y(1)=0\). With \(\lambda=\omega^2\), \(r=2\pm i\omega\) and \(y=e^{2x}(A\sin\omega x+B\cos\omega x)\). Find each missing value, showing your working.`,
 L`(a) \(\pi^2/4\). \(\omega_n=(n+\tfrac12)\pi\) (\(\omega=0\) is trivial), \(\lambda_n=(n+\tfrac12)^2\pi^2\).`,
 [L`\(y(0)=0\) gives \(B=0\); the second condition reduces to \(\omega\cos\omega=0\), so the smallest eigenvalue is \(\lambda_0=\) \(\underline{\qquad}\).`]);
sq('de-5-02', 'de-5', 2, L`(SP1 A3) Given \(y=e^{2x}(A\sin\omega x+B\cos\omega x)\), \(y(0)=0\) and \(\omega_n=(n+\tfrac12)\pi\), write down the eigenfunctions \(y_n\).`,
 L`Answer: \(y_n=A_ne^{2x}\sin\big((n+\tfrac12)\pi x\big)\).
\(e^{2x}\) comes from the real part of \(r\); \(B=0\) from \(y(0)=0\).`);
sq('de-5-03', 'de-5', 1, L`(SP2 A3) \(y''+\lambda y=0\), \(y(-1)=0\), \(y'(1)=0\). Using \(y=A\sin\big(\omega(x+1)\big)\) with \(\lambda=\omega^2\): Find each missing value, showing your working.`,
 L`(a) \(\pi^2/16\). \(2\omega=(n+\tfrac12)\pi\Rightarrow\lambda_n=(\tfrac14+\tfrac n2)^2\pi^2\).`,
 [L`\(y'(1)=A\omega\cos(2\omega)=0\), so \(\omega_n=(\tfrac14+\tfrac n2)\pi\) and the smallest eigenvalue is \(\lambda_0=\) \(\underline{\qquad}\).`]);
sq('de-5-04', 'de-5', 1, L`(SP3 A3) \(y''+\lambda y=0\) on \([-\pi,\pi]\), \(y(-\pi)=y(\pi)=0\). There are two families: \(\sin(nx)\) with \(\lambda=n^2\) and \(\cos\big((n+\tfrac12)x\big)\) with \(\lambda=(n+\tfrac12)^2\). Find each missing value, showing your working.`,
 L`(a) \(\tfrac14\). \(n=0\) in the cosine family beats \(\lambda=1\) from \(\sin x\).`,
 [L`The smallest eigenvalue is \(\lambda=\) \(\underline{\qquad}\), with eigenfunction \(\cos(x/2)\).`]);
sq('de-5-05', 'de-5', 2, L`(SP3 A3) Why must we take \(\lambda=\omega^2>0\) here?`,
 L`Answer: We need oscillatory (sine/cosine) solutions to meet the homogeneous boundary conditions non-trivially.
For \(\lambda\le0\) the solutions (linear or exponential) can only satisfy \(y(\pm\pi)=0\) trivially.`);
sq('de-5-06', 'de-5', 2, L`(SP3 A3) Adding and subtracting the boundary conditions gives \(2A\cos\omega\pi=0\) and \(2B\sin\omega\pi=0\). Deduce the two families of eigenvalues.`,
 L`Answer: \(A=0,\ \sin\omega\pi=0\) or \(B=0,\ \cos\omega\pi=0\).
One coefficient must be nonzero, and \(\sin\) and \(\cos\) cannot vanish together.`);
sq('de-5-07', 'de-5', 2, L`Find the eigenvalues and eigenfunctions of \(y''+\lambda y=0\), \(y(0)=y(L)=0\).`,
 L`Answer: \(\lambda_n=\left(\dfrac{n\pi}{L}\right)^2,\ n=1,2,\dots\).
\(y=B\sin(\omega x)\) and \(\sin(\omega L)=0\).`);
sq('de-5-08a', 'de-5', 2, L`Prove or disprove (give a counterexample if false): An eigenfunction is only determined up to a constant multiple.`,
 L`True. Hence the arbitrary \(A_n\).`);
sq('de-5-08b', 'de-5', 2, L`Prove or disprove (give a counterexample if false): \(\omega=0\) is included in SP1 A3's list of eigenvalues.`,
 L`False. It gives the trivial solution y = 0.`);
sq('de-5-08c', 'de-5', 2, L`Prove or disprove (give a counterexample if false): A homogeneous BVP always has the zero solution.`,
 L`True. The eigenvalue problem is to find when it has others.`);
sq('de-5-08d', 'de-5', 2, L`Prove or disprove (give a counterexample if false): With \(y(-1)=0\), writing \(y=A\sin(\omega(x+1))\) satisfies that condition automatically.`,
 L`True. The "much quicker solution" noted in the SP2 A3 mark scheme.`);
// ---------------------------------------------------------------- de-6 — Fourier series: Dirichlet, orthogonality, coefficients
sq('de-6-01', 'de-6', 3, L`(SP1 A4a) \(f(x)=0\) for \(-\pi\le x<0\) and \(x(\pi-x)\) for \(0\le x\le\pi\) (so \(\ell=\pi\)). Find each missing value, showing your working.`,
 L`(a) \(\pi^2/12\). \(\int_0^\pi x(\pi-x)\,dx=\pi^3/6\).
(b) \(-\tfrac12\) and \(4/\pi\). \(a_2=-2/4\); \(b_1=2\cdot2/\pi\).`,
 [L`\(a_0=\dfrac{1}{2\pi}\displaystyle\int_0^\pi x(\pi-x)\,dx=\) \(\underline{\qquad}\).`, L`\(a_n=-\dfrac{1+(-1)^n}{n^2}\), so \(a_2=\) \(\underline{\qquad}\); \(b_n=\dfrac{2[1-(-1)^n]}{\pi n^3}\), so \(b_1=\) \(\underline{\qquad}\).`]);
sq('de-6-02', 'de-6', 2, L`(SP2 A4c) For \(f(x)=x(x-1)(x+1)=\sum a_n\sin(n\pi x)\) on \([-1,1]\), find \(a_n\), given \(\int_{-1}^1x\sin(n\pi x)dx=\frac{2(-1)^{n+1}}{n\pi}\) and \(\int_{-1}^1x^3\sin(n\pi x)dx=\frac{2(-1)^n(6-n^2\pi^2)}{n^3\pi^3}\).`,
 L`Answer: \(\dfrac{12(-1)^n}{n^3\pi^3}\).
\(a_n=\int_{-1}^1(x^3-x)\sin(n\pi x)\,dx=\frac{(-1)^n2(6-n^2\pi^2)}{n^3\pi^3}-\frac{(-1)^{n+1}2}{n\pi}\); the \(1/n\) terms cancel. Decay like \(1/n^3\): f and f′ are continuous across the ends.`);
sq('de-6-03', 'de-6', 2, L`(SP2 A4b) Evaluate \(\displaystyle\int_{-1}^{1}\sin(n\pi x)\sin(m\pi x)\,dx\) for positive integers \(m,n\).`,
 L`Answer: \(1\) if \(m=n\), \(0\) if \(m\ne n\).
Use \(2\sin A\sin B=\cos(A-B)-\cos(A+B)\); for \(m=n\), \(\int_{-1}^1\sin^2(n\pi x)\,dx=1\).`);
sq('de-6-04', 'de-6', 3, L`(SP3 A4) \(f(x)=x\sin x\) on \([-\pi,\pi]\) as \(\sum a_n\cos(nx)\). Find each missing value, showing your working.`,
 L`(a) \(1\) and \(-\tfrac12\). \(\int_{-\pi}^\pi x\sin x=2\pi\); \(a_1=\frac{1}{2\pi}\int x\sin2x\,dx=\frac{1}{2\pi}(-\pi)\).
(b) \(-\tfrac23\). \(2(-1)^3/3\).`,
 [L`\(a_0=\dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi}x\sin x\,dx=\) \(\underline{\qquad}\) and \(a_1=\) \(\underline{\qquad}\).`, L`For \(n\ge2\), \(a_n=\dfrac{2(-1)^{n+1}}{n^2-1}\), so \(a_2=\) \(\underline{\qquad}\).`]);
sq('de-6-05', 'de-6', 2, L`Write down the formula-sheet expression for \(a_0\) in the Fourier series of \(f\) on \([-\ell,\ell]\).`,
 L`Answer: \(\dfrac{1}{2\ell}\displaystyle\int_{-\ell}^{\ell}f(x)\,dx\).
The series is written \(\sum_{n\ge0}\), so \(a_0\) is the mean value (no \(\tfrac12\) in front).`);
sq('de-6-06', 'de-6', 2, L`State what the Fourier series of a piecewise smooth \(f\) converges to at a jump discontinuity \(x_0\) (Dirichlet's theorem).`,
 L`Answer: \(\tfrac12\big[f(x_0^-)+f(x_0^+)\big]\).
The average of the one-sided limits.`);
sq('de-6-07a', 'de-6', 2, L`Prove or disprove (give a counterexample if false): \(\int_{-\pi}^{\pi}\cos(nx)\sin(mx)\,dx=0\) for all integers \(n,m\).`,
 L`True. The integrand is odd.`);
sq('de-6-07b', 'de-6', 2, L`Prove or disprove (give a counterexample if false): \(\int_{-\ell}^{\ell}\cos\frac{n\pi x}{\ell}\cos\frac{m\pi x}{\ell}\,dx=\ell\) when \(m=n\ne0\).`,
 L`True. The relation given in SP3 A4.`);
sq('de-6-07c', 'de-6', 2, L`Prove or disprove (give a counterexample if false): \(\int_{-\ell}^{\ell}\cos^2\frac{0\cdot\pi x}{\ell}\,dx=\ell\).`,
 L`False. For \(m=n=0\) it is \(2\ell\).`);
sq('de-6-07d', 'de-6', 2, L`Prove or disprove (give a counterexample if false): To find a coefficient you multiply by one basis function and integrate over the period.`,
 L`True. All other terms vanish by orthogonality.`);
// ---------------------------------------------------------------- de-7a — Odd/even functions & half-range expansions
sq('de-7a-01', 'de-7a', 2, L`(SP2 A4a) Why are the cosine coefficients zero for \(f(x)=x(x-1)(x+1)\) on \([-1,1]\)?`,
 L`Answer: \(f(-x)=-f(x)\): \(f\) is odd, and \(f\cos\) is odd so its integral vanishes.
Only the odd (sine) terms survive.`);
sq('de-7a-02', 'de-7a', 2, L`(SP3 A4a) Why are the \(b_n\) zero for \(f(x)=x\sin x\)?`,
 L`Answer: \(x\sin x\) is even (odd × odd), so \(f(x)\sin(nx)\) is odd and integrates to 0 over \([-\pi,\pi]\).
Three marks: f even; the integrand odd; odd integrals over a symmetric domain vanish.`);
sq('de-7a-03', 'de-7a', 2, L`(SP1 A4b) When can the Fourier series of \(f\) be differentiated term by term (as taught in this module)?`,
 L`Answer: When \(f'(x)\) is piecewise continuous (\(f\) piecewise smooth).
The mark scheme accepts "f′ is piecewise continuous" or "f is piecewise smooth".`);
sq('de-7a-04', 'de-7a', 2, L`(SP1 A4c) \(f=\frac{\pi^2}{12}+\sum\left[-\frac{1+(-1)^n}{n^2}\cos nx+\frac{2[1-(-1)^n]}{\pi n^3}\sin nx\right]\) and \(g=f'\). Write down the Fourier series of \(g\).`,
 L`Answer: \(\sum\left[\dfrac{1+(-1)^n}{n}\sin nx+\dfrac{2[1-(-1)^n]}{\pi n^2}\cos nx\right]\).
Differentiate term by term: \((a_n\cos nx)'=-na_n\sin nx\), \((b_n\sin nx)'=nb_n\cos nx\); the constant \(a_0\) disappears.`);
sq('de-7a-05', 'de-7a', 2, L`Write down the coefficients of the half-range sine series of \(g\) on \(0\le x\le\ell\).`,
 L`Answer: \(b_n=\dfrac{2}{\ell}\displaystyle\int_0^\ell g(x)\sin\dfrac{n\pi x}{\ell}\,dx\).
The hint in SP2 B6: extend g as an odd function, which doubles the half-interval integral.`);
sq('de-7a-06a', 'de-7a', 2, L`Prove or disprove (give a counterexample if false): The product of two odd functions is even.`,
 L`True. \((-f)(-g)=fg\).`);
sq('de-7a-06b', 'de-7a', 2, L`Prove or disprove (give a counterexample if false): \(\int_{-a}^a h(x)\,dx=0\) for every odd \(h\).`,
 L`True. The two halves cancel.`);
sq('de-7a-06c', 'de-7a', 2, L`Prove or disprove (give a counterexample if false): An odd function has only cosine terms in its Fourier series.`,
 L`False. Only sine terms.`);
sq('de-7a-06d', 'de-7a', 2, L`Prove or disprove (give a counterexample if false): \(x^2\sin x\) is odd.`,
 L`True. even × odd.`);
// ---------------------------------------------------------------- de-7b — Fourier series for inhomogeneous ODEs
sq('de-7b-01', 'de-7b', 2, L`(SP2 B6a) \(y''+5y=f(x)\), \(y(0)=y(\pi)=0\). Write \(y=\sum y_n\sin nx\), \(f=\sum f_n\sin nx\). Find each missing value, showing your working.`,
 L`(a) \(1\). \(5-4=1\).
(b) \(-4\). \(5-9=-4\).`,
 [L`Substituting gives \((5-n^2)y_n=f_n\). For \(n=2\), \(y_2=f_2/c\) with \(c=\) \(\underline{\qquad}\).`, L`For \(n=3\), \(y_3=f_3/d\) with \(d=\) \(\underline{\qquad}\).`]);
sq('de-7b-02', 'de-7b', 2, L`(SP2 B6a) Why use half-range sine series for \(y\) and \(f\)?`,
 L`Answer: Each \(\sin(nx)\) already satisfies \(y(0)=y(\pi)=0\).
The basis functions satisfy the boundary conditions term by term.`);
sq('de-7b-03', 'de-7b', 2, L`(SP2 B6b) Evaluate \(\displaystyle\int_0^\pi e^{-x}\sin(nx)\,dx\).`,
 L`Answer: \(\dfrac{n\big[1-e^{-\pi}(-1)^n\big]}{1+n^2}\).
Integrate by parts twice and solve for the integral: \((1+n^2)I=n[1-e^{-\pi}(-1)^n]\).`);
sq('de-7b-04', 'de-7b', 2, L`(SP2 B6c) With \(y_n=\frac{2}{\pi(5-n^2)}\int_0^\pi f\sin nx\,dx\), write \(y=\int_0^\pi f(z)G(x,z)\,dz\) and find \(G\).`,
 L`Answer: \(G(x,z)=\dfrac2\pi\displaystyle\sum_{n\ge1}\frac{\sin(nz)\sin(nx)}{5-n^2}\).
Insert \(f_n=\frac2\pi\int_0^\pi f(z)\sin(nz)\,dz\) and swap sum and integral.`);
sq('de-7b-05', 'de-7b', 2, L`What would go wrong with this method for \(y''+4y=f\), \(y(0)=y(\pi)=0\)?`,
 L`Answer: For \(n=2\), \((4-n^2)y_2=f_2\) has no solution unless \(f_2=0\) (resonance).
\(\sin 2x\) solves the homogeneous problem, so the forcing must have no \(\sin 2x\) component.`);
// ---------------------------------------------------------------- de-8 — Fourier transform: definition & properties
sq('de-8-01', 'de-8', 2, L`State the definition of the Fourier transform \(\hat f(k)\) and its inverse, as on the formula sheet.`,
 L`Answer: \(\hat f(k)=\dfrac{1}{\sqrt{2\pi}}\displaystyle\int_{-\infty}^\infty f(x)e^{-ikx}\,dx\).
Symmetric \(1/\sqrt{2\pi}\), with \(e^{+ikx}\) in the inverse.`);
sq('de-8-02', 'de-8', 2, L`(SP1 A2) For \(f(x)=-e^{x}\ (x<0)\), \(e^{-x}\ (x\ge0)\), write \(\mathcal F[f]=ik\,A(k)\) and find \(A(k)\).`,
 L`Answer: \(-\sqrt{\dfrac2\pi}\,\dfrac{1}{1+k^2}\).
\(\frac{1}{\sqrt{2\pi}}\left[-\frac{1}{1-ik}-\frac{1}{-1-ik}\right]=\frac{1}{\sqrt{2\pi}}\frac{-2ik}{1+k^2}\).`);
sq('de-8-03', 'de-8', 3, L`(SP2 A2b) Show that \(\mathcal F[f(x-a)]=e^{-iak}\hat f(k)\).`,
 L`Answer: \(e^{-iak}\hat f(k)\).
Substitute \(y=x-a\): \(e^{-ik(y+a)}=e^{-iky}e^{-ika}\).`);
sq('de-8-04', 'de-8', 2, L`(SP2 A2c) Find \(\mathcal F[f(ax)]\) in terms of \(\hat f\), for \(a\ne0\).`,
 L`Answer: \(\dfrac{1}{|a|}\hat f\!\left(\dfrac ka\right)\).
Substituting \(y=ax\) flips the limits when \(a<0\), giving \(\mathrm{sgn}(a)/a=1/|a|\).`);
sq('de-8-05', 'de-8', 1, L`(SP3 A2) \(f(x)=1\) for \(|x|<a\), \(0\) otherwise (\(a>0\)). Find each missing value, showing your working.`,
 L`(a) \(\pi\). \(f(0)=1\).`,
 [L`\(\hat f(k)=\sqrt{\dfrac2\pi}\,\dfrac{\sin(ka)}{k}\). Inverting at \(x=0\) gives \(\dfrac1\pi\displaystyle\int_{-\infty}^\infty\frac{\sin ka}{k}\,dk=f(0)\), so \(\displaystyle\int_{-\infty}^\infty\frac{\sin ka}{k}\,dk=\) \(\underline{\qquad}\).`]);
sq('de-8-06', 'de-8', 2, L`What is \(\mathcal F\big[e^{-|x|}\big]\)?`,
 L`Answer: \(\sqrt{\dfrac2\pi}\,\dfrac{1}{1+k^2}\).
\(\frac{1}{\sqrt{2\pi}}\left[\frac{1}{1-ik}+\frac{1}{1+ik}\right]=\frac{1}{\sqrt{2\pi}}\frac{2}{1+k^2}\).`);
sq('de-8-07a', 'de-8', 2, L`Prove or disprove (give a counterexample if false): The transform of a real odd function is purely imaginary.`,
 L`True. As in SP1 A2: \(ik\,A(k)\) with \(A\) real.`);
sq('de-8-07b', 'de-8', 2, L`Prove or disprove (give a counterexample if false): The transform of a real even function is real.`,
 L`True. E.g. \(e^{-|x|}\) and the top hat.`);
sq('de-8-07c', 'de-8', 2, L`Prove or disprove (give a counterexample if false): The formula-sheet definition requires \(f(x)\to0\) as \(|x|\to\infty\).`,
 L`True. Stated on the formula sheet.`);
sq('de-8-07d', 'de-8', 2, L`Prove or disprove (give a counterexample if false): \(\mathcal F\) is linear: \(\mathcal F[af+bg]=a\hat f+b\hat g\).`,
 L`True. Integration is linear.`);
// ---------------------------------------------------------------- de-9a — Derivative theorem & convolution
sq('de-9a-01', 'de-9a', 2, L`(SP2 A2a) Express \(\mathcal F[f'(x)]\) in terms of \(\hat f\), stating the assumption needed.`,
 L`Answer: \(ik\,\hat f(k)\).
Integrate by parts: the boundary term vanishes because \(f\to0\) at \(\pm\infty\).`);
sq('de-9a-02', 'de-9a', 2, L`Express \(\mathcal F[y''(x)]\) in terms of \(\hat y(k)\).`,
 L`Answer: \(-k^2\hat y(k)\).
Apply the derivative rule twice: \((ik)^2=-k^2\).`);
sq('de-9a-03', 'de-9a', 2, L`(SP1 B6c) Take the Fourier transform of \(y''+y'-2y=f\) and solve for \(\hat y\).`,
 L`Answer: \((-k^2+ik-2)\,\hat y=\hat f\).
\(y''\to-k^2\hat y\), \(y'\to ik\hat y\).`);
sq('de-9a-04', 'de-9a', 2, L`State the convolution theorem in the form used on the specimen papers.`,
 L`Answer: \(\mathcal F^{-1}[\hat f\,\hat g]=\dfrac{1}{\sqrt{2\pi}}\displaystyle\int_{-\infty}^\infty g(x-u)f(u)\,du\).
With the symmetric convention a factor \(1/\sqrt{2\pi}\) appears.`);
sq('de-9a-05', 'de-9a', 1, L`(SP1 B6c) \(\hat y=\hat f\,\hat g\) with \(\hat g=\dfrac{1}{-k^2+ik-2}\). You are given \(\mathcal F[h]=\dfrac{3}{\sqrt{2\pi}}\dfrac{1}{k^2-ik+2}\) for \(h=e^{x}\ (x<0)\), \(e^{-2x}\ (x>0)\). Find each missing value, showing your working.`,
 L`(a) \(-\tfrac13\). \(y=\frac{1}{\sqrt{2\pi}}\int g(x-u)f(u)\,du\) and \(g=-\frac{\sqrt{2\pi}}{3}h\).`,
 [L`So \(\hat g=-\dfrac{\sqrt{2\pi}}{3}\hat h\) and \(y(x)=c\displaystyle\int_{-\infty}^{\infty}h(x-u)f(u)\,du\) with \(c=\) \(\underline{\qquad}\).`]);
// ---------------------------------------------------------------- de-9b — The Dirac delta function
sq('de-9b-01', 'de-9b', 2, L`For \(y''+p(x)y'+q(x)y=\delta(x-z)\), state the conditions satisfied by \(y\) and \(y'\) at \(x=z\).`,
 L`Answer: \([y]_{z^-}^{z^+}=0\) and \([y']_{z^-}^{z^+}=1\).
Continuity and jump conditions from the formula sheet.`);
sq('de-9b-02', 'de-9b', 2, L`Evaluate \(\displaystyle\int_{-\infty}^{\infty}f(x)\,\delta(x-a)\,dx\).`,
 L`Answer: \(f(a)\).
The sifting property.`);
sq('de-9b-03', 'de-9b', 2, L`Why does \(y'\) jump by 1 across \(x=z\) (while \(y\) is continuous)?`,
 L`Answer: Integrating the ODE over \([z-\epsilon,z+\epsilon]\) gives \([y']=\int\delta=1\) as \(\epsilon\to0\); the other terms vanish.
If \(y\) jumped, \(y'\) would contain a delta and \(y''\) a derivative of a delta.`);
sq('de-9b-04', 'de-9b', 2, L`For \(2y''+y=\delta(x-z)\), find the jump in \(y'\) at \(x=z\).`,
 L`Answer: \(\tfrac12\).
Divide by 2 first: \(y''+\tfrac12y=\tfrac12\delta(x-z)\).`);
sq('de-9b-05a', 'de-9b', 2, L`Prove or disprove (give a counterexample if false): \(\int_{-\infty}^\infty\delta(x)\,dx=1\).`,
 L`True. Unit area.`);
sq('de-9b-05b', 'de-9b', 2, L`Prove or disprove (give a counterexample if false): \(\delta(x-z)=0\) for \(x\ne z\).`,
 L`True. It is concentrated at z.`);
sq('de-9b-05c', 'de-9b', 2, L`Prove or disprove (give a counterexample if false): \(\mathcal F[\delta(x)]=\dfrac{1}{\sqrt{2\pi}}\).`,
 L`True. Sifting with \(e^{-ikx}\) at \(x=0\) gives 1, times \(1/\sqrt{2\pi}\).`);
sq('de-9b-05d', 'de-9b', 2, L`Prove or disprove (give a counterexample if false): The solution of \(y''+py'+qy=\delta(x-z)\) is discontinuous at \(z\).`,
 L`False. \(y\) is continuous; \(y'\) jumps.`);
// ---------------------------------------------------------------- de-10 — Impulse forcing & Green’s functions
sq('de-10-01', 'de-10', 2, L`(SP1 B6a) \(y''+y'-2y=\delta(x-z)\) with \(y,y'\to0\) as \(|x|\to\infty\): \(y=Ae^x\) for \(x<z\), \(De^{-2x}\) for \(x>z\). Find each missing value, showing your working.`,
 L`(a) \(-\tfrac13\) and \(-\tfrac13\). \(De^{-2z}=Ae^z\) and \(-2De^{-2z}-Ae^z=1\Rightarrow-3Ae^z=1\).`,
 [L`Continuity and the jump give \(A=c\,e^{-z}\) with \(c=\) \(\underline{\qquad}\) and \(D=d\,e^{2z}\) with \(d=\) \(\underline{\qquad}\).`]);
sq('de-10-02', 'de-10', 2, L`(SP1 B6a) Why is \(B=0\) in \(y=Ae^x+Be^{-2x}\) for \(x<z\)?`,
 L`Answer: \(e^{-2x}\to\infty\) as \(x\to-\infty\), violating \(y\to0\).
Keep only the solution that decays in each region.`);
sq('de-10-03', 'de-10', 2, L`(SP1 B6b) With \(G(x;z)=-\frac13e^{x-z}\) for \(x<z\) and \(-\frac13e^{-2(x-z)}\) for \(x>z\), write \(y(x)=\int G(x;z)f(z)\,dz\) as explicit integrals of \(f\).`,
 L`Answer: \(-\dfrac13\displaystyle\int_{-\infty}^{x}e^{-2(x-z)}f(z)\,dz-\dfrac13\displaystyle\int_{x}^{\infty}e^{x-z}f(z)\,dz\).
"\(x>z\)" means \(z<x\): that piece goes on \(\int_{-\infty}^x\). The mark scheme flags this as the usual source of confusion.`);
sq('de-10-04', 'de-10', 2, L`(SP3 B6a) \(y''+6y'=\delta(x-z)\) on \(0<x<\infty\), \(y(0)=y'(0)=0\). Find each missing value, showing your working.`,
 L`(a) \(0\) and \(\tfrac16\). Continuity: \(C+De^{-6z}=0\); jump: \(-6De^{-6z}=1\Rightarrow D=-\tfrac16e^{6z}\), \(C=\tfrac16\).`,
 [L`For \(0<x<z\), the conditions at 0 force \(y=\) \(\underline{\qquad}\). For \(x>z\), \(y=C+De^{-6x}\) with \(C=\) \(\underline{\qquad}\).`]);
sq('de-10-05', 'de-10', 2, L`(SP3 B6b) With \(G=0\) for \(x<z\) and \(\tfrac16\big(1-e^{-6(x-z)}\big)\) for \(x>z\) on \(0<x<\infty\), write \(y(x)=\int_0^\infty G(x;z)f(z)\,dz\) explicitly.`,
 L`Answer: \(\dfrac16\displaystyle\int_0^x\big(1-e^{-6(x-z)}\big)f(z)\,dz\).
\(G\) is nonzero only for \(z<x\) — the solution depends only on the forcing up to time \(x\).`);
sq('de-10-06', 'de-10', 3, L`(SP3 B6c) Now take \(f(x)=e^{-5x}\): \(y=\tfrac16\int_0^x\big(1-e^{-6(x-z)}\big)e^{-5z}\,dz=\alpha+\beta e^{-5x}+\gamma e^{-6x}\). Find each missing value, showing your working.`,
 L`(a) \(\tfrac1{30}\) and \(-\tfrac15\). \(\tfrac1{30}(1-e^{-5x})-\tfrac16(e^{-5x}-e^{-6x})\).
(b) \(\tfrac16\). From \(-\tfrac16\cdot(-e^{-6x})\).`,
 [L`\(\alpha=\) \(\underline{\qquad}\), \(\beta=\) \(\underline{\qquad}\).`, L`\(\gamma=\) \(\underline{\qquad}\) (check: \(y(0)=\tfrac1{30}-\tfrac15+\tfrac16=0\) ✓).`]);
sq('de-10-07a', 'de-10', 2, L`Prove or disprove (give a counterexample if false): \(G(x;z)\) satisfies the ODE with \(f\) replaced by \(\delta(x-z)\), plus the same boundary conditions.`,
 L`True. Then \(y=\int G(x;z)f(z)\,dz\).`);
sq('de-10-07b', 'de-10', 2, L`Prove or disprove (give a counterexample if false): \(G\) is continuous at \(x=z\) and \(\partial G/\partial x\) jumps by 1 (for leading coefficient 1).`,
 L`True. Continuity and jump conditions.`);
sq('de-10-07c', 'de-10', 2, L`Prove or disprove (give a counterexample if false): The Fourier-transform route (SP1 B6c) gives a different y from the Green's function route.`,
 L`False. They agree — that is the point of part (c).`);
sq('de-10-07d', 'de-10', 2, L`Prove or disprove (give a counterexample if false): For an initial-value problem on \(x>0\), \(G=0\) for \(x<z\).`,
 L`True. Causality: nothing happens before the impulse (SP3 B6).`);
})();
