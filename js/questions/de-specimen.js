// ================================================================
// MSP2802 QUESTIONS — built from Specimen Papers 1–3 and their mark schemes.
// Tagged "(SP1 A3)" etc. so you can find the full question and solution.
// Format as in week1.js; all maths in LaTeX.
// ================================================================
(function(){
const L = String.raw;
let n = {};
const id = s => s + '-' + String(n[s] = (n[s] || 0) + 1).padStart(2, '0');
const mc  = (sec, text, opts, why, hint) => QUESTIONS.push({id:id(sec), sec, type:'mc', text, opts, ans:0, why, hint});
const tf  = (sec, text, st) => QUESTIONS.push({id:id(sec), sec, type:'tf', text, statements:st.map(([s,ans,why]) => ({s, ans, why}))});
const gap = (sec, text, steps, hint) => QUESTIONS.push({id:id(sec), sec, type:'gap', text, steps, hint});

// ---------------------------------------------------------------- de-1a  Second-order ODEs & reduction of order
mc('de-1a', L`By reduction of order (formula sheet), the second solution of \(y''+p(x)y'+q(x)y=0\) is…`,
 [L`\(y_2=y_1\displaystyle\int\frac{e^{-\int p\,dx}}{y_1^2}\,dx\)`, L`\(y_2=y_1\displaystyle\int\frac{e^{\int p\,dx}}{y_1^2}\,dx\)`, L`\(y_2=y_1\displaystyle\int e^{-\int p\,dx}\,y_1^2\,dx\)`, L`\(y_2=\dfrac{1}{y_1}\displaystyle\int e^{-\int p\,dx}\,dx\)`],
 L`\(y_2(x)=y_1(x)\int e^{-\int p(x)\,dx}\,\dfrac{dx}{y_1^2(x)}\), with \(p\) the coefficient of \(y'\) after dividing by the coefficient of \(y''\).`);
mc('de-1a', L`(SP1 B5d) For \(x(2-x)y''-2(x-1)y'+12y=0\), which \(p(x)\) goes in the reduction-of-order formula?`,
 [L`\(p(x)=\dfrac{-2(x-1)}{x(2-x)}\)`, L`\(p(x)=-2(x-1)\)`, L`\(p(x)=\dfrac{12}{x(2-x)}\)`, L`\(p(x)=x(2-x)\)`],
 L`Divide by \(x(2-x)\) first — the mark scheme stresses "NOT \(-2(x-1)\)". Then \(\int p\,dx=\log x+\log(x-2)\) and \(y_2=y_1\int\frac{dx}{x(x-2)y_1^2}\).`,
 L`Put the equation in the form \(y''+p y'+q y=0\).`);
gap('de-1a', L`(SP2 B5d) Spherical Bessel equation \(x^2y''+2xy'+(x^2-6)y=0\).`,
 [{before:L`Dividing by \(x^2\), \(p(x)=\) `, answer:'2/x', show:L`\(2/x\)`, after:'.', why:L`The coefficient of \(y'\) is \(2x/x^2\).`},
  {before:L`\(e^{-\int p\,dx}=e^{-2\log x}=x^{k}\) with \(k=\) `, answer:'-2', after:L`, so \(y_2=y_1\int\frac{dx}{x^2y_1^2}\).`, why:L`\(\int\frac2x\,dx=2\log x\).`}]);
mc('de-1a', L`(SP3 B5d) Laguerre equation \(xy''+(1-x)y'+\nu y=0\). Reduction of order gives \(y_2=y_1\int\frac{A(x)\,dx}{B(x)\,y_1^2}\) with…`,
 [L`\(A=e^x,\ B=x\)`, L`\(A=e^{-x},\ B=x\)`, L`\(A=x,\ B=e^x\)`, L`\(A=1,\ B=x^2\)`],
 L`\(p=\frac{1-x}{x}=\frac1x-1\), \(\int p=\log x-x\), \(e^{-\int p}=e^{x}x^{-1}\).`);
gap('de-1a', L`(SP1 B6a) Solve the homogeneous equation \(y''+y'-2y=0\).`,
 [{before:L`The characteristic equation \(r^2+r-2=0\) has roots \(r=\) `, answer:'1', after:L` and \(r=\) `, answer2:'-2', after2:L`, so \(y=Ae^{x}+Be^{-2x}\).`, why:L`\(r^2+r-2=(r-1)(r+2)\).`}]);
tf('de-1a', 'Reduction of order',
 [[L`Reduction of order needs one known solution \(y_1\).`, true, L`It builds \(y_2=v(x)y_1\) from \(y_1\).`],
  [L`You can read \(p(x)\) straight off \(a(x)y''+b(x)y'+c(x)y=0\) as \(b(x)\).`, false, L`\(p=b/a\): divide by the coefficient of \(y''\) first.`],
  [L`\(\int p\,dx\) and \(\int p\,dx+C\) give equivalent \(y_2\).`, true, L`The constant only rescales \(y_2\) by \(e^{-C}\).`],
  [L`For \(y''+y'-2y=0\) the general solution is \(Ae^{x}+Be^{-2x}\).`, true, L`Roots \(1\) and \(-2\).`]]);

// ---------------------------------------------------------------- de-1b  Classifying points
mc('de-1b', L`For \(y''+p(x)y'+q(x)y=0\), the point \(x_0\) is an ordinary point if…`,
 [L`\(p\) and \(q\) are both analytic at \(x_0\)`, L`\((x-x_0)p\) and \((x-x_0)^2q\) are analytic but \(p\) or \(q\) is not`, L`\(p(x_0)=q(x_0)=0\)`, L`the equation has constant coefficients`],
 'Ordinary: p, q analytic. Regular singular: not ordinary, but (x−x₀)p and (x−x₀)²q analytic. Otherwise essential singular.');
mc('de-1b', L`(SP1 A1a) Classify \(x=0\) for \(y''+x^2y'-4y=0\).`,
 [L`Ordinary point — two independent series solutions`, L`Regular singular point — one series solution`, L`Essential singular point — no series solutions`, L`Regular singular point — two series solutions`],
 L`\(p=x^2\), \(q=-4\) are analytic, and there are always two series solutions at an ordinary point.`);
mc('de-1b', L`(SP1 A1b) Classify \(x=0\) for \(x^3y''-5y'+x^2y=0\).`,
 [L`Essential singular: \(xp(x)=-5/x^2\) is not analytic — no series solutions expected`, L`Regular singular: two series solutions`, L`Ordinary point`, L`Regular singular: one series solution`],
 L`\(p=-5/x^3\), \(q=1/x\) are singular, and \(xp=-5/x^2\) is still not analytic.`);
mc('de-1b', L`(SP1 A1c) Classify \(x=0\) for \((x-1)^2x\,y''+y=0\), assuming the indicial roots differ by an integer.`,
 [L`Regular singular; do not expect two series solutions`, L`Ordinary; two series solutions`, L`Essential singular; no series solutions`, L`Regular singular; two series solutions guaranteed`],
 L`\(q=\frac{1}{x(x-1)^2}\) is singular, but \(xp=0\) and \(x^2q=\frac{x}{(x-1)^2}\) are analytic at 0. Roots differing by an integer ⇒ not two series solutions.`);
mc('de-1b', L`(SP2 A1a) Classify \(x=0\) for \(y''-x^2y=0\).`,
 [L`Ordinary point: \(p=0\), \(q=-x^2\) are analytic`, 'Regular singular point', 'Essential singular point', 'It cannot be classified'],
 'Both coefficients are polynomials.');
mc('de-1b', L`(SP3 B5a) Classify \(x=0\) for the Laguerre equation \(xy''+(1-x)y'+\nu y=0\).`,
 [L`Regular singular: \(xp=1-x\) and \(x^2q=\nu x\) are analytic`, L`Ordinary: all coefficients are polynomials`, L`Essential singular: \(p=(1-x)/x\) blows up`, 'Regular singular only if ν is an integer'],
 L`\(p=(1-x)/x\) and \(q=\nu/x\) are singular, but \(xp\) and \(x^2q\) are analytic.`,
 L`Divide by \(x\) first.`);
mc('de-1b', L`(SP2 B5a) Classify \(x=0\) for \(x^2y''+2xy'+(x^2-6)y=0\).`,
 [L`Regular singular: \(xp=2\) and \(x^2q=x^2-6\) are analytic`, 'Ordinary point', L`Essential singular: \(q=1-6/x^2\)`, 'Ordinary, because the equation is a Bessel equation'],
 L`\(p=2/x\) and \(q=1-6/x^2\) are singular at 0; multiplying by \(x\) and \(x^2\) removes the singularities.`);
tf('de-1b', 'Analytic functions and singular points',
 [[L`A function is analytic at \(x_0\) if it equals its Taylor series in a neighbourhood of \(x_0\).`, true, 'That is the definition used for classifying points.'],
  [L`\(1/x\) is analytic at \(x=0\).`, false, 'It is not even defined there.'],
  [L`At a regular singular point there is always at least one Frobenius series solution.`, true, 'The larger indicial root always gives one.'],
  [L`At an essential singular point we expect two Frobenius series solutions.`, false, 'We do not expect any (SP1 A1b).']]);

// ---------------------------------------------------------------- de-2  Series at ordinary points
gap('de-2', L`(SP2 A1b) Solve \(y''-x^2y=0\) with \(y=\sum a_nx^n\).`,
 [{before:L`Substituting and matching powers gives \(a_2=\) `, answer:'0', after:L`, \(a_3=\) `, answer2:'0', after2:L` and \(a_n=\dfrac{a_{n-4}}{n(n-1)}\).`, why:L`The \(x^0\) and \(x^1\) coefficients are \(2a_2\) and \(6a_3\): nothing else contributes.`},
  {before:L`So \(a_4=a_0/k\) with \(k=\) `, answer:'12', after:L` and \(a_8=a_0/m\) with \(m=\) `, answer2:'672', after2:'.', why:L`\(a_4=a_0/(4\cdot3)\); \(a_8=a_4/(8\cdot7)=a_0/672\).`}]);
mc('de-2', L`(SP2 A1b) The fundamental solution \(y_2\) (the \(a_1\) part) of \(y''-x^2y=0\) up to \(x^9\) is…`,
 [L`\(x+\tfrac{1}{20}x^5+\tfrac{1}{1440}x^9\)`, L`\(x+\tfrac{1}{12}x^5+\tfrac{1}{672}x^9\)`, L`\(x-\tfrac{1}{20}x^5+\tfrac{1}{1440}x^9\)`, L`\(x+\tfrac{1}{20}x^4+\tfrac{1}{1440}x^8\)`],
 L`\(a_5=a_1/(5\cdot4)\), \(a_9=a_5/(9\cdot8)=a_1/1440\).`);
gap('de-2', L`(SP3 A1b) Solve \(y''+x^3y=0\) with \(y=\sum a_nx^n\).`,
 [{before:L`The recurrence is \(a_n=-\dfrac{a_{n-5}}{n(n-1)}\) with \(a_2=a_3=a_4=0\). So \(a_5=-a_0/k\), \(k=\) `, answer:'20', after:'.', why:L`\(a_5=-a_0/(5\cdot4)\).`},
  {before:L`\(a_{10}=a_0/m\) with \(m=\) `, answer:'1800', after:L` and \(a_{11}=a_1/p\) with \(p=\) `, answer2:'3300', after2:'.', why:L`\(a_{10}=-a_5/90=a_0/1800\); \(a_6=-a_1/30\), \(a_{11}=-a_6/110=a_1/3300\).`}]);
mc('de-2', L`(SP3 A1) Which recurrence relation comes from \(y''+x^3y=0\)?`,
 [L`\(a_{k+5}=-\dfrac{a_k}{(k+5)(k+4)}\)`, L`\(a_{k+5}=\dfrac{a_k}{(k+5)(k+4)}\)`, L`\(a_{k+3}=-\dfrac{a_k}{(k+3)(k+2)}\)`, L`\(a_{k+2}=-\dfrac{a_{k-3}}{(k+2)(k+1)}\cdot\tfrac12\)`],
 L`\(\sum(k+5)(k+4)a_{k+5}x^{k+3}+\sum a_kx^{k+3}=0\) — the alternative re-indexing in the mark scheme.`);
mc('de-2', L`Why is \(a_2=0\) for \(y''-x^2y=0\)?`,
 [L`The \(x^0\) coefficient is \(2a_2\) and no other term contributes at that power`, L`Because \(a_0=0\)`, L`Because the equation is even`, L`Because \(a_2\) is arbitrary`],
 L`\(-x^2y\) only contributes from \(x^2\) upwards.`);
mc('de-2', L`Apply the method to \(y''+y=0\). The recurrence is…`,
 [L`\(a_{n+2}=-\dfrac{a_n}{(n+2)(n+1)}\), giving \(a_0\cos x+a_1\sin x\)`, L`\(a_{n+2}=\dfrac{a_n}{(n+2)(n+1)}\), giving \(a_0\cosh x+a_1\sinh x\)`, L`\(a_{n+1}=-\dfrac{a_n}{n+1}\), giving \(e^{-x}\)`, L`\(a_{n+2}=-a_n\)`],
 'The even and odd series are exactly the Taylor series of cos and sin.');
tf('de-2', 'Series at an ordinary point',
 [['At an ordinary point there are always two independent power-series solutions.', true, 'SP1 A1a mark scheme.'],
  [L`\(a_0\) and \(a_1\) are arbitrary and play the role of \(A_1\) and \(A_2\).`, true, 'They multiply the two fundamental solutions.'],
  ['You should re-index sums so they share the same power of x before combining.', true, 'Then set each coefficient to zero.'],
  [L`For \(y''-x^2y=0\), the odd coefficients \(a_3,a_7,\dots\) are nonzero.`, false, L`\(a_3=0\), so \(a_7=a_3/42=0\) too.`]]);

// ---------------------------------------------------------------- de-3  Regular singular points & Frobenius
gap('de-3', L`(SP1 B5) Shifted Legendre equation \(x(2-x)y''-2(x-1)y'+12y=0\) with \(y=\sum a_nx^{n+\lambda}\). The indicial equation is \(\lambda^2=0\) and \(a_{n+1}=\dfrac{(n+\lambda)(n+\lambda+1)-12}{2(n+1+\lambda)^2}a_n\).`,
 [{before:L`With \(\lambda=0\): \(a_1=c\,a_0\) with \(c=\) `, answer:'-6', after:L` and \(a_2=d\,a_0\) with \(d=\) `, answer2:'15/2', show2:L`\(\tfrac{15}{2}\)`, after2:'.', why:L`\(a_1=\frac{0-12}{2}a_0=-6a_0\); \(a_2=\frac{2-12}{8}a_1=-\tfrac54a_1=\tfrac{15}{2}a_0\).`},
  {before:L`\(a_3=e\,a_0\) with \(e=\) `, answer:'-5/2', show:L`-\tfrac52`, after:L`, and \(a_4=\) `, answer2:'0', after2:L` so the series terminates.`, why:L`\(a_3=\frac{6-12}{18}a_2=-\tfrac13a_2\); \(a_4=\frac{12-12}{32}a_3=0\).`}]);
mc('de-3', L`(SP1 B5c) Why can only one series solution be found for the shifted Legendre equation?`,
 [L`The indicial equation \(\lambda^2=0\) has a repeated root`, 'x = 0 is an essential singular point', 'The recurrence relation terminates', 'The roots differ by a non-integer'],
 L`Only one value of \(\lambda\) to use. (The second solution comes from reduction of order.)`);
mc('de-3', L`(SP1 B5c) The resulting \(y_1\) is…`,
 [L`\(a_0\left(1-6x+\tfrac{15}{2}x^2-\tfrac52x^3\right)\)`, L`\(a_0\left(1-6x+\tfrac{15}{2}x^2-\tfrac52x^3+\dots\right)\)`, L`\(a_0\left(1+6x+\tfrac{15}{2}x^2+\tfrac52x^3\right)\)`, L`\(a_0\left(1-6x+\tfrac{5}{4}x^2\right)\)`],
 L`A polynomial — "the usual \(\dots\) should NOT be included" since \(a_n=0\) for \(n\ge4\). (It is \(P_3(x-1)\).)`);
mc('de-3', L`(SP3 B5b) For the Laguerre equation \(xy''+(1-x)y'+\nu y=0\), the indicial equation and recurrence are…`,
 [L`\(\lambda^2=0\) and \(a_{n+1}=\dfrac{n+\lambda-\nu}{(n+\lambda+1)^2}a_n\)`, L`\(\lambda(\lambda-1)=0\) and \(a_{n+1}=\dfrac{n+\lambda+\nu}{(n+\lambda+1)^2}a_n\)`, L`\(\lambda^2=\nu\) and \(a_{n+1}=\dfrac{a_n}{n+1}\)`, L`\(\lambda^2=0\) and \(a_{n+1}=\dfrac{\nu-n}{n+1}a_n\)`],
 L`Combining gives \(\lambda^2a_0+\sum\big[(n+\lambda+1)^2a_{n+1}-(n+\lambda-\nu)a_n\big]x^{n+\lambda}=0\).`);
gap('de-3', L`Laguerre with \(\nu=2\) and \(\lambda=0\): \(a_{n+1}=\dfrac{n-2}{(n+1)^2}a_n\).`,
 [{before:L`\(a_1=c\,a_0\) with \(c=\) `, answer:'-2', after:L`, \(a_2=d\,a_0\) with \(d=\) `, answer2:'1/2', show2:L`\(\tfrac12\)`, after2:'.', why:L`\(a_1=-2a_0\); \(a_2=\frac{-1}{4}a_1=\tfrac12a_0\).`},
  {before:L`\(a_3=\) `, answer:'0', after:L`, so \(y_1=a_0(1-2x+\tfrac12x^2)\) — a polynomial.`, why:L`\(a_3=\frac{0}{9}a_2\). For integer \(\nu\) the series stops after \(\nu+1\) terms.`}]);
mc('de-3', 'In the method of Frobenius we seek solutions of the form…',
 [L`\(y=\sum_{n\ge0}a_nx^{n+\lambda}\) with \(a_0\ne0\)`, L`\(y=\sum_{n\ge0}a_nx^{n}\) only`, L`\(y=e^{\lambda x}\)`, L`\(y=x^\lambda\ln x\) only`],
 L`\(\lambda\) is fixed by the indicial equation (the lowest power).`);
tf('de-3', 'Indicial roots (as used in this module)',
 [['A repeated indicial root gives only one Frobenius series.', true, 'SP1 B5, SP3 B5.'],
  ['If the roots differ by an integer, the larger root gives a series solution.', true, 'SP2 B5c: use λ = 2, not −3.'],
  ['If the roots differ by an integer, the smaller root always gives a second series.', false, 'It is not expected to; use reduction of order instead.'],
  ['The indicial equation comes from the coefficient of the lowest power of x.', true, L`E.g. \(2\lambda^2a_0x^{\lambda-1}\) in SP1 B5.`]]);

// ---------------------------------------------------------------- de-4  Bessel-type equations & summary
gap('de-4', L`(SP2 B5) Spherical Bessel equation \(x^2y''+2xy'+(x^2-6)y=0\), \(y=\sum a_nx^{n+\lambda}\).`,
 [{before:L`The indicial equation \(\lambda^2+\lambda-6=0\) has roots \(\lambda=\) `, answer:'2', after:L` and \(\lambda=\) `, answer2:'-3', after2:'.', why:L`\((\lambda+3)(\lambda-2)=0\).`},
  {before:L`With \(\lambda=2\): \(a_2=-a_0/k\) with \(k=\) `, answer:'14', after:L` and \(a_4=a_0/m\) with \(m=\) `, answer2:'504', after2:'.', why:L`\(a_n=\frac{a_{n-2}}{6-(n+2)(n+3)}\): \(a_2=\frac{a_0}{6-20}\), \(a_4=\frac{a_2}{6-42}=\frac{a_0}{504}\).`}]);
mc('de-4', L`(SP2 B5c) Which indicial root is expected to give \(y_1\), and why?`,
 [L`\(\lambda=2\): the roots differ by an integer, so only the larger is guaranteed`, L`\(\lambda=-3\): the smaller root always works`, 'Both, since the equation is regular', L`Neither, as \(x=0\) is essential singular`],
 L`\(2-(-3)=5\in\mathbb Z\).`);
mc('de-4', L`(SP2 B5c) \(y_1\) up to \(x^6\) is…`,
 [L`\(a_0\left(x^2-\tfrac{x^4}{14}+\tfrac{x^6}{504}\right)\)`, L`\(a_0\left(1-\tfrac{x^2}{14}+\tfrac{x^4}{504}\right)\)`, L`\(a_0\left(x^2+\tfrac{x^4}{14}+\tfrac{x^6}{504}\right)\)`, L`\(a_0\left(x^{-3}-\tfrac{x^{-1}}{14}\right)\)`],
 L`Multiply the coefficients by \(x^{n+2}\); \(a_1=a_3=0\).`);
mc('de-4', L`(SP2 B5b) Why is \(a_1=0\) for the spherical Bessel equation with \(\lambda=2\)?`,
 [L`Its coefficient is \(\lambda^2+3\lambda-4=6\ne0\), so \(a_1=0\)`, L`\(a_1\) is arbitrary`, 'The equation is even', L`Because \(a_0=0\)`],
 L`\((\lambda^2+3\lambda-4)a_1=0\) and \(\lambda=2\) gives \(6a_1=0\).`);
mc('de-4', L`Bessel's equation of order \(\nu\), \(x^2y''+xy'+(x^2-\nu^2)y=0\), has indicial roots…`,
 [L`\(\lambda=\pm\nu\)`, L`\(\lambda=0,\nu\)`, L`\(\lambda=\nu^2\)`, L`\(\lambda=\pm1\)`],
 L`Lowest power: \(\lambda(\lambda-1)+\lambda-\nu^2=\lambda^2-\nu^2=0\).`);
mc('de-4', 'Summary of the series method. Which order of steps is right?',
 ['Classify the point → substitute the series → re-index to a common power → extract the lowest terms (indicial equation) → recurrence → pick valid λ → write out y₁ → reduction of order for y₂ if needed',
  'Write out y₁ → find the recurrence → classify the point → indicial equation',
  'Reduction of order → substitute the series → classify',
  'Substitute the series → set every aₙ = 0 → classify'],
 'This is the structure of every Section B Q5 in the specimen papers.');

// ---------------------------------------------------------------- de-5  Boundary value problems
gap('de-5', L`(SP1 A3) \(y''-4y'+(\lambda+4)y=0\) on \(0<x<1\), \(y(0)=0\), \(y'(1)-2y(1)=0\). With \(\lambda=\omega^2\), \(r=2\pm i\omega\) and \(y=e^{2x}(A\sin\omega x+B\cos\omega x)\).`,
 [{before:L`\(y(0)=0\) gives \(B=0\); the second condition reduces to \(\omega\cos\omega=0\), so the smallest eigenvalue is \(\lambda_0=\) `, answer:['π^2/4','pi^2/4'], show:L`\(\pi^2/4\)`, after:'.', why:L`\(\omega_n=(n+\tfrac12)\pi\) (\(\omega=0\) is trivial), \(\lambda_n=(n+\tfrac12)^2\pi^2\).`, tol:0.005}]);
mc('de-5', L`(SP1 A3) The eigenfunctions are…`,
 [L`\(y_n=A_ne^{2x}\sin\big((n+\tfrac12)\pi x\big)\)`, L`\(y_n=A_n\sin\big((n+\tfrac12)\pi x\big)\)`, L`\(y_n=A_ne^{2x}\cos(n\pi x)\)`, L`\(y_n=A_ne^{-2x}\sin(n\pi x)\)`],
 L`\(e^{2x}\) comes from the real part of \(r\); \(B=0\) from \(y(0)=0\).`);
gap('de-5', L`(SP2 A3) \(y''+\lambda y=0\), \(y(-1)=0\), \(y'(1)=0\). Using \(y=A\sin\big(\omega(x+1)\big)\) with \(\lambda=\omega^2\):`,
 [{before:L`\(y'(1)=A\omega\cos(2\omega)=0\), so \(\omega_n=(\tfrac14+\tfrac n2)\pi\) and the smallest eigenvalue is \(\lambda_0=\) `, answer:['π^2/16','pi^2/16'], show:L`\(\pi^2/16\)`, after:'.', why:L`\(2\omega=(n+\tfrac12)\pi\Rightarrow\lambda_n=(\tfrac14+\tfrac n2)^2\pi^2\).`, tol:0.005}]);
gap('de-5', L`(SP3 A3) \(y''+\lambda y=0\) on \([-\pi,\pi]\), \(y(-\pi)=y(\pi)=0\). There are two families: \(\sin(nx)\) with \(\lambda=n^2\) and \(\cos\big((n+\tfrac12)x\big)\) with \(\lambda=(n+\tfrac12)^2\).`,
 [{before:L`The smallest eigenvalue is \(\lambda=\) `, answer:'1/4', show:L`\(\tfrac14\)`, after:L`, with eigenfunction \(\cos(x/2)\).`, why:L`\(n=0\) in the cosine family beats \(\lambda=1\) from \(\sin x\).`}]);
mc('de-5', L`(SP3 A3) Why must we take \(\lambda=\omega^2>0\) here?`,
 [L`We need oscillatory (sine/cosine) solutions to meet the homogeneous boundary conditions non-trivially`, L`Because \(\lambda\) is a probability`, L`Negative \(\lambda\) gives complex solutions`, L`Because \(\lambda=0\) is the only other option and it works`],
 L`For \(\lambda\le0\) the solutions (linear or exponential) can only satisfy \(y(\pm\pi)=0\) trivially.`);
mc('de-5', L`(SP3 A3) Adding and subtracting the two boundary conditions gives \(2A\cos\omega\pi=0\) and \(2B\sin\omega\pi=0\). The solutions are…`,
 [L`\(A=0,\ \sin\omega\pi=0\) or \(B=0,\ \cos\omega\pi=0\)`, L`\(A=B=0\) only`, L`\(\cos\omega\pi=\sin\omega\pi=0\)`, L`\(A=B\) and \(\tan\omega\pi=1\)`],
 L`One coefficient must be nonzero, and \(\sin\) and \(\cos\) cannot vanish together.`);
mc('de-5', L`\(y''+\lambda y=0\), \(y(0)=y(L)=0\). The eigenvalues are…`,
 [L`\(\lambda_n=\left(\dfrac{n\pi}{L}\right)^2,\ n=1,2,\dots\)`, L`\(\lambda_n=\dfrac{n\pi}{L},\ n=1,2,\dots\)`, L`\(\lambda_n=\left(\dfrac{(n+\frac12)\pi}{L}\right)^2\)`, L`\(\lambda_n=n^2L^2\)`],
 L`\(y=B\sin(\omega x)\) and \(\sin(\omega L)=0\).`);
tf('de-5', 'Boundary value problems',
 [['An eigenfunction is only determined up to a constant multiple.', true, L`Hence the arbitrary \(A_n\).`],
  [L`\(\omega=0\) is included in SP1 A3's list of eigenvalues.`, false, 'It gives the trivial solution y = 0.'],
  ['A homogeneous BVP always has the zero solution.', true, 'The eigenvalue problem is to find when it has others.'],
  [L`With \(y(-1)=0\), writing \(y=A\sin(\omega(x+1))\) satisfies that condition automatically.`, true, 'The "much quicker solution" noted in the SP2 A3 mark scheme.']]);

// ---------------------------------------------------------------- de-6  Fourier series coefficients
gap('de-6', L`(SP1 A4a) \(f(x)=0\) for \(-\pi\le x<0\) and \(x(\pi-x)\) for \(0\le x\le\pi\) (so \(\ell=\pi\)).`,
 [{before:L`\(a_0=\dfrac{1}{2\pi}\displaystyle\int_0^\pi x(\pi-x)\,dx=\) `, answer:['π^2/12','pi^2/12'], show:L`\(\pi^2/12\)`, after:'.', why:L`\(\int_0^\pi x(\pi-x)\,dx=\pi^3/6\).`, tol:0.005},
  {before:L`\(a_n=-\dfrac{1+(-1)^n}{n^2}\), so \(a_2=\) `, answer:'-1/2', show:L`-\tfrac12`, after:L`; \(b_n=\dfrac{2[1-(-1)^n]}{\pi n^3}\), so \(b_1=\) `, answer2:['4/π','4/pi'], show2:L`\(4/\pi\)`, after2:'.', why:L`\(a_2=-2/4\); \(b_1=2\cdot2/\pi\).`}]);
mc('de-6', L`(SP2 A4c) \(f(x)=x(x-1)(x+1)\) on \([-1,1]\) with \(f=\sum a_n\sin(n\pi x)\). Using the given integrals, \(a_n=\)…`,
 [L`\(\dfrac{12(-1)^n}{n^3\pi^3}\)`, L`\(\dfrac{2(-1)^{n+1}}{n\pi}\)`, L`\(\dfrac{12}{n^3\pi^3}\)`, L`\(\dfrac{(-1)^n2(6-n^2\pi^2)}{n^3\pi^3}\)`],
 L`\(a_n=\int_{-1}^1(x^3-x)\sin(n\pi x)\,dx=\frac{(-1)^n2(6-n^2\pi^2)}{n^3\pi^3}-\frac{(-1)^{n+1}2}{n\pi}\); the \(1/n\) terms cancel. Decay like \(1/n^3\): f and f′ are continuous across the ends.`);
mc('de-6', L`(SP2 A4b) \(\displaystyle\int_{-1}^{1}\sin(n\pi x)\sin(m\pi x)\,dx=\)…`,
 [L`\(1\) if \(m=n\), \(0\) if \(m\ne n\)`, L`\(2\) if \(m=n\), \(0\) otherwise`, L`\(\tfrac12\) if \(m=n\), \(0\) otherwise`, L`\(0\) always`],
 L`Use \(2\sin A\sin B=\cos(A-B)-\cos(A+B)\); for \(m=n\), \(\int_{-1}^1\sin^2(n\pi x)\,dx=1\).`);
gap('de-6', L`(SP3 A4) \(f(x)=x\sin x\) on \([-\pi,\pi]\) as \(\sum a_n\cos(nx)\).`,
 [{before:L`\(a_0=\dfrac{1}{2\pi}\displaystyle\int_{-\pi}^{\pi}x\sin x\,dx=\) `, answer:'1', after:L` and \(a_1=\) `, answer2:'-1/2', show2:L`-\tfrac12`, after2:'.', why:L`\(\int_{-\pi}^\pi x\sin x=2\pi\); \(a_1=\frac{1}{2\pi}\int x\sin2x\,dx=\frac{1}{2\pi}(-\pi)\).`},
  {before:L`For \(n\ge2\), \(a_n=\dfrac{2(-1)^{n+1}}{n^2-1}\), so \(a_2=\) `, answer:'-2/3', show:L`-\tfrac23`, after:'.', why:L`\(2(-1)^3/3\).`}]);
mc('de-6', L`On the formula sheet (period \(2\ell\)), \(a_0\) is…`,
 [L`\(\dfrac{1}{2\ell}\displaystyle\int_{-\ell}^{\ell}f(x)\,dx\)`, L`\(\dfrac{1}{\ell}\displaystyle\int_{-\ell}^{\ell}f(x)\,dx\)`, L`\(\dfrac{1}{2}\displaystyle\int_{-\ell}^{\ell}f(x)\,dx\)`, L`\(\dfrac{2}{\ell}\displaystyle\int_{0}^{\ell}f(x)\,dx\)`],
 L`The series is written \(\sum_{n\ge0}\), so \(a_0\) is the mean value (no \(\tfrac12\) in front).`);
mc('de-6', L`Dirichlet's theorem: at a jump discontinuity \(x_0\), the Fourier series converges to…`,
 [L`\(\tfrac12\big[f(x_0^-)+f(x_0^+)\big]\)`, L`\(f(x_0^-)\)`, L`\(f(x_0^+)\)`, L`\(0\)`],
 'The average of the one-sided limits.');
tf('de-6', 'Orthogonality',
 [[L`\(\int_{-\pi}^{\pi}\cos(nx)\sin(mx)\,dx=0\) for all integers \(n,m\).`, true, 'The integrand is odd.'],
  [L`\(\int_{-\ell}^{\ell}\cos\frac{n\pi x}{\ell}\cos\frac{m\pi x}{\ell}\,dx=\ell\) when \(m=n\ne0\).`, true, 'The relation given in SP3 A4.'],
  [L`\(\int_{-\ell}^{\ell}\cos^2\frac{0\cdot\pi x}{\ell}\,dx=\ell\).`, false, L`For \(m=n=0\) it is \(2\ell\).`],
  ['To find a coefficient you multiply by one basis function and integrate over the period.', true, 'All other terms vanish by orthogonality.']]);

// ---------------------------------------------------------------- de-7a  Odd/even, half-range, term-by-term differentiation
mc('de-7a', L`(SP2 A4a) Why are the cosine coefficients zero for \(f(x)=x(x-1)(x+1)\) on \([-1,1]\)?`,
 [L`\(f(-x)=-f(x)\): \(f\) is odd, and \(f\cos\) is odd so its integral vanishes`, L`\(f\) is even`, L`\(f(0)=0\)`, L`\(f\) is a polynomial`],
 L`Only the odd (sine) terms survive.`);
mc('de-7a', L`(SP3 A4a) Why are the \(b_n\) zero for \(f(x)=x\sin x\)?`,
 [L`\(x\sin x\) is even (odd × odd), so \(f(x)\sin(nx)\) is odd and integrates to 0 over \([-\pi,\pi]\)`, L`\(x\sin x\) is odd`, L`\(\sin(nx)\) is even`, L`\(f(\pi)=0\)`],
 'Three marks: f even; the integrand odd; odd integrals over a symmetric domain vanish.');
mc('de-7a', L`(SP1 A4b) When can the Fourier series of \(f\) be differentiated term by term (as taught in this module)?`,
 [L`When \(f'(x)\) is piecewise continuous (\(f\) piecewise smooth)`, L`Always`, L`Only when \(f\) is odd`, L`Only when the coefficients decay like \(1/n\)`],
 'The mark scheme accepts "f′ is piecewise continuous" or "f is piecewise smooth".');
mc('de-7a', L`(SP1 A4c) With \(f\) from A4a, \(g(x)=\pi-2x\) on \([0,\pi]\) (0 on \([-\pi,0)\)) is \(g=f'\). Its Fourier series is…`,
 [L`\(\sum\left[\dfrac{1+(-1)^n}{n}\sin nx+\dfrac{2[1-(-1)^n]}{\pi n^2}\cos nx\right]\)`, L`\(\sum\left[-\dfrac{1+(-1)^n}{n^3}\sin nx+\dfrac{2[1-(-1)^n]}{\pi n^4}\cos nx\right]\)`, L`\(\dfrac{\pi^2}{12}+\sum\left[\dfrac{1+(-1)^n}{n}\cos nx\right]\)`, L`\(\sum\dfrac{2[1-(-1)^n]}{\pi n^2}\sin nx\)`],
 L`Differentiate term by term: \((a_n\cos nx)'=-na_n\sin nx\), \((b_n\sin nx)'=nb_n\cos nx\); the constant \(a_0\) disappears.`);
mc('de-7a', L`The half-range sine series of \(g\) on \(0\le x\le\ell\) has coefficients…`,
 [L`\(b_n=\dfrac{2}{\ell}\displaystyle\int_0^\ell g(x)\sin\dfrac{n\pi x}{\ell}\,dx\)`, L`\(b_n=\dfrac{1}{\ell}\displaystyle\int_0^\ell g(x)\sin\dfrac{n\pi x}{\ell}\,dx\)`, L`\(b_n=\dfrac{1}{2\ell}\displaystyle\int_{-\ell}^\ell g(x)\sin\dfrac{n\pi x}{\ell}\,dx\)`, L`\(b_n=\dfrac{2}{\ell}\displaystyle\int_0^\ell g(x)\cos\dfrac{n\pi x}{\ell}\,dx\)`],
 'The hint in SP2 B6: extend g as an odd function, which doubles the half-interval integral.');
tf('de-7a', 'Odd and even functions',
 [['The product of two odd functions is even.', true, L`\((-f)(-g)=fg\).`],
  [L`\(\int_{-a}^a h(x)\,dx=0\) for every odd \(h\).`, true, 'The two halves cancel.'],
  ['An odd function has only cosine terms in its Fourier series.', false, 'Only sine terms.'],
  [L`\(x^2\sin x\) is odd.`, true, 'even × odd.']]);

// ---------------------------------------------------------------- de-7b  Fourier series for inhomogeneous ODEs
gap('de-7b', L`(SP2 B6a) \(y''+5y=f(x)\), \(y(0)=y(\pi)=0\). Write \(y=\sum y_n\sin nx\), \(f=\sum f_n\sin nx\).`,
 [{before:L`Substituting gives \((5-n^2)y_n=f_n\). For \(n=2\), \(y_2=f_2/c\) with \(c=\) `, answer:'1', after:'.', why:L`\(5-4=1\).`},
  {before:L`For \(n=3\), \(y_3=f_3/d\) with \(d=\) `, answer:'-4', after:'.', why:L`\(5-9=-4\).`}]);
mc('de-7b', L`(SP2 B6a) Why use half-range sine series for \(y\) and \(f\)?`,
 [L`Each \(\sin(nx)\) already satisfies \(y(0)=y(\pi)=0\)`, 'Because f is odd', 'Because cosine series do not converge', 'Because the ODE has constant coefficients'],
 'The basis functions satisfy the boundary conditions term by term.');
mc('de-7b', L`(SP2 B6b) \(\displaystyle\int_0^\pi e^{-x}\sin(nx)\,dx=\)…`,
 [L`\(\dfrac{n\big[1-e^{-\pi}(-1)^n\big]}{1+n^2}\)`, L`\(\dfrac{1-e^{-\pi}(-1)^n}{1+n^2}\)`, L`\(\dfrac{n\big[1+e^{-\pi}(-1)^n\big]}{1+n^2}\)`, L`\(\dfrac{n}{1+n^2}\)`],
 L`Integrate by parts twice and solve for the integral: \((1+n^2)I=n[1-e^{-\pi}(-1)^n]\).`);
mc('de-7b', L`(SP2 B6c) Writing \(y(x)=\int_0^\pi f(z)G(x,z)\,dz\), the Green's function is…`,
 [L`\(G(x,z)=\dfrac2\pi\displaystyle\sum_{n\ge1}\frac{\sin(nz)\sin(nx)}{5-n^2}\)`, L`\(G(x,z)=\displaystyle\sum_{n\ge1}\frac{\sin(nz)\sin(nx)}{5-n^2}\)`, L`\(G(x,z)=\dfrac2\pi\displaystyle\sum_{n\ge1}\frac{\sin(nx)}{5-n^2}\)`, L`\(G(x,z)=\dfrac2\pi\displaystyle\sum_{n\ge1}(5-n^2)\sin(nz)\sin(nx)\)`],
 L`Insert \(f_n=\frac2\pi\int_0^\pi f(z)\sin(nz)\,dz\) and swap sum and integral.`);
mc('de-7b', L`What would go wrong with this method for \(y''+4y=f\), \(y(0)=y(\pi)=0\)?`,
 [L`For \(n=2\), \((4-n^2)y_2=f_2\) has no solution unless \(f_2=0\) (resonance)`, 'Nothing', 'The sine series would not satisfy the boundary conditions', 'The coefficients would not decay'],
 L`\(\sin 2x\) solves the homogeneous problem, so the forcing must have no \(\sin 2x\) component.`);

// ---------------------------------------------------------------- de-8  Fourier transform: definition & properties
mc('de-8', 'Which Fourier transform convention does the formula sheet use?',
 [L`\(\hat f(k)=\dfrac{1}{\sqrt{2\pi}}\displaystyle\int_{-\infty}^\infty f(x)e^{-ikx}\,dx\)`, L`\(\hat f(k)=\displaystyle\int_{-\infty}^\infty f(x)e^{-2\pi ikx}\,dx\)`, L`\(\hat f(k)=\dfrac{1}{2\pi}\displaystyle\int_{-\infty}^\infty f(x)e^{ikx}\,dx\)`, L`\(\hat f(k)=\dfrac{1}{\sqrt{2\pi}}\displaystyle\int_{0}^\infty f(x)e^{-kx}\,dx\)`],
 L`Symmetric \(1/\sqrt{2\pi}\), with \(e^{+ikx}\) in the inverse.`);
mc('de-8', L`(SP1 A2) For \(f(x)=-e^{x}\ (x<0)\), \(e^{-x}\ (x\ge0)\), \(\mathcal F[f]=ik\,A(k)\) with \(A(k)=\)…`,
 [L`\(-\sqrt{\dfrac2\pi}\,\dfrac{1}{1+k^2}\)`, L`\(\sqrt{\dfrac2\pi}\,\dfrac{1}{1+k^2}\)`, L`\(-\dfrac{1}{\sqrt{2\pi}}\,\dfrac{1}{1-k^2}\)`, L`\(\dfrac{2}{1+k^2}\)`],
 L`\(\frac{1}{\sqrt{2\pi}}\left[-\frac{1}{1-ik}-\frac{1}{-1-ik}\right]=\frac{1}{\sqrt{2\pi}}\frac{-2ik}{1+k^2}\).`);
mc('de-8', L`(SP2 A2b) \(\mathcal F[f(x-a)]=\)…`,
 [L`\(e^{-iak}\hat f(k)\)`, L`\(e^{iak}\hat f(k)\)`, L`\(\hat f(k-a)\)`, L`\(\hat f(k)-a\)`],
 L`Substitute \(y=x-a\): \(e^{-ik(y+a)}=e^{-iky}e^{-ika}\).`);
mc('de-8', L`(SP2 A2c) \(\mathcal F[f(ax)]=\)…`,
 [L`\(\dfrac{1}{|a|}\hat f\!\left(\dfrac ka\right)\)`, L`\(a\,\hat f(ak)\)`, L`\(\dfrac1a\hat f\!\left(\dfrac ka\right)\) for all \(a\ne0\)`, L`\(\hat f(k/a)\)`],
 L`Substituting \(y=ax\) flips the limits when \(a<0\), giving \(\mathrm{sgn}(a)/a=1/|a|\).`);
gap('de-8', L`(SP3 A2) \(f(x)=1\) for \(|x|<a\), \(0\) otherwise (\(a>0\)).`,
 [{before:L`\(\hat f(k)=\sqrt{\dfrac2\pi}\,\dfrac{\sin(ka)}{k}\). Inverting at \(x=0\) gives \(\dfrac1\pi\displaystyle\int_{-\infty}^\infty\frac{\sin ka}{k}\,dk=f(0)\), so \(\displaystyle\int_{-\infty}^\infty\frac{\sin ka}{k}\,dk=\) `, answer:['π','pi'], show:L`\(\pi\)`, after:'.', why:L`\(f(0)=1\).`, tol:0.005}]);
mc('de-8', L`What is \(\mathcal F\big[e^{-|x|}\big]\)?`,
 [L`\(\sqrt{\dfrac2\pi}\,\dfrac{1}{1+k^2}\)`, L`\(\dfrac{1}{1+k^2}\)`, L`\(\sqrt{\dfrac2\pi}\,\dfrac{ik}{1+k^2}\)`, L`\(\dfrac{2}{1-k^2}\)`],
 L`\(\frac{1}{\sqrt{2\pi}}\left[\frac{1}{1-ik}+\frac{1}{1+ik}\right]=\frac{1}{\sqrt{2\pi}}\frac{2}{1+k^2}\).`);
tf('de-8', 'Symmetry and the Fourier transform',
 [['The transform of a real odd function is purely imaginary.', true, L`As in SP1 A2: \(ik\,A(k)\) with \(A\) real.`],
  ['The transform of a real even function is real.', true, L`E.g. \(e^{-|x|}\) and the top hat.`],
  [L`The formula-sheet definition requires \(f(x)\to0\) as \(|x|\to\infty\).`, true, 'Stated on the formula sheet.'],
  [L`\(\mathcal F\) is linear: \(\mathcal F[af+bg]=a\hat f+b\hat g\).`, true, 'Integration is linear.']]);

// ---------------------------------------------------------------- de-9a  Derivative theorem & convolution
mc('de-9a', L`(SP2 A2a) \(\mathcal F[f'(x)]=\)…`,
 [L`\(ik\,\hat f(k)\)`, L`\(-ik\,\hat f(k)\)`, L`\(\hat f'(k)\)`, L`\(k^2\hat f(k)\)`],
 L`Integrate by parts: the boundary term vanishes because \(f\to0\) at \(\pm\infty\).`);
mc('de-9a', L`\(\mathcal F[y''(x)]=\)…`,
 [L`\(-k^2\hat y(k)\)`, L`\(k^2\hat y(k)\)`, L`\(2ik\,\hat y(k)\)`, L`\(-ik^2\hat y(k)\)`],
 L`Apply the derivative rule twice: \((ik)^2=-k^2\).`);
mc('de-9a', L`(SP1 B6c) Taking the transform of \(y''+y'-2y=f\) gives…`,
 [L`\((-k^2+ik-2)\,\hat y=\hat f\)`, L`\((k^2+ik-2)\,\hat y=\hat f\)`, L`\((-k^2-ik-2)\,\hat y=\hat f\)`, L`\((-k^2+ik+2)\,\hat y=\hat f\)`],
 L`\(y''\to-k^2\hat y\), \(y'\to ik\hat y\).`);
mc('de-9a', 'The convolution theorem on the specimen paper states…',
 [L`\(\mathcal F^{-1}[\hat f\,\hat g]=\dfrac{1}{\sqrt{2\pi}}\displaystyle\int_{-\infty}^\infty g(x-u)f(u)\,du\)`, L`\(\mathcal F^{-1}[\hat f\,\hat g]=\displaystyle\int_{-\infty}^\infty g(x-u)f(u)\,du\)`, L`\(\mathcal F^{-1}[\hat f\,\hat g]=f(x)g(x)\)`, L`\(\mathcal F^{-1}[\hat f+\hat g]=f*g\)`],
 L`With the symmetric convention a factor \(1/\sqrt{2\pi}\) appears.`);
gap('de-9a', L`(SP1 B6c) \(\hat y=\hat f\,\hat g\) with \(\hat g=\dfrac{1}{-k^2+ik-2}\). You are given \(\mathcal F[h]=\dfrac{3}{\sqrt{2\pi}}\dfrac{1}{k^2-ik+2}\) for \(h=e^{x}\ (x<0)\), \(e^{-2x}\ (x>0)\).`,
 [{before:L`So \(\hat g=-\dfrac{\sqrt{2\pi}}{3}\hat h\) and \(y(x)=c\displaystyle\int_{-\infty}^{\infty}h(x-u)f(u)\,du\) with \(c=\) `, answer:'-1/3', show:L`-\tfrac13`, after:'.', why:L`\(y=\frac{1}{\sqrt{2\pi}}\int g(x-u)f(u)\,du\) and \(g=-\frac{\sqrt{2\pi}}{3}h\).`}]);

// ---------------------------------------------------------------- de-9b  Dirac delta
mc('de-9b', L`For \(y''+p(x)y'+q(x)y=\delta(x-z)\), the conditions at \(x=z\) are…`,
 [L`\([y]_{z^-}^{z^+}=0\) and \([y']_{z^-}^{z^+}=1\)`, L`\([y]=1\) and \([y']=0\)`, L`\([y]=0\) and \([y']=0\)`, L`\(y(z)=0\) and \(y'(z)=1\)`],
 'Continuity and jump conditions from the formula sheet.');
mc('de-9b', L`\(\displaystyle\int_{-\infty}^{\infty}f(x)\,\delta(x-a)\,dx=\)…`,
 [L`\(f(a)\)`, L`\(f(0)\)`, L`\(1\)`, L`\(0\)`],
 'The sifting property.');
mc('de-9b', L`Why does \(y'\) jump by 1 across \(x=z\) (while \(y\) is continuous)?`,
 [L`Integrating the ODE over \([z-\epsilon,z+\epsilon]\) gives \([y']=\int\delta=1\) as \(\epsilon\to0\); the other terms vanish`, L`Because \(\delta(0)=1\)`, L`Because \(y\) must be discontinuous`, 'It is an arbitrary convention'],
 L`If \(y\) jumped, \(y'\) would contain a delta and \(y''\) a derivative of a delta.`);
mc('de-9b', L`For \(2y''+y=\delta(x-z)\), the jump in \(y'\) at \(x=z\) is…`,
 [L`\(\tfrac12\)`, L`\(1\)`, L`\(2\)`, L`\(0\)`],
 L`Divide by 2 first: \(y''+\tfrac12y=\tfrac12\delta(x-z)\).`);
tf('de-9b', 'The delta function',
 [[L`\(\int_{-\infty}^\infty\delta(x)\,dx=1\).`, true, 'Unit area.'],
  [L`\(\delta(x-z)=0\) for \(x\ne z\).`, true, 'It is concentrated at z.'],
  [L`\(\mathcal F[\delta(x)]=\dfrac{1}{\sqrt{2\pi}}\).`, true, L`Sifting with \(e^{-ikx}\) at \(x=0\) gives 1, times \(1/\sqrt{2\pi}\).`],
  [L`The solution of \(y''+py'+qy=\delta(x-z)\) is discontinuous at \(z\).`, false, L`\(y\) is continuous; \(y'\) jumps.`]]);

// ---------------------------------------------------------------- de-10  Green's functions
gap('de-10', L`(SP1 B6a) \(y''+y'-2y=\delta(x-z)\) with \(y,y'\to0\) as \(|x|\to\infty\): \(y=Ae^x\) for \(x<z\), \(De^{-2x}\) for \(x>z\).`,
 [{before:L`Continuity and the jump give \(A=c\,e^{-z}\) with \(c=\) `, answer:'-1/3', show:L`-\tfrac13`, after:L` and \(D=d\,e^{2z}\) with \(d=\) `, answer2:'-1/3', show2:L`-\tfrac13`, after2:'.', why:L`\(De^{-2z}=Ae^z\) and \(-2De^{-2z}-Ae^z=1\Rightarrow-3Ae^z=1\).`}]);
mc('de-10', L`(SP1 B6a) Why is \(B=0\) in \(y=Ae^x+Be^{-2x}\) for \(x<z\)?`,
 [L`\(e^{-2x}\to\infty\) as \(x\to-\infty\), violating \(y\to0\)`, L`\(e^{x}\to\infty\) as \(x\to-\infty\)`, L`Because of the jump condition`, L`Because \(B\) must equal \(A\)`],
 'Keep only the solution that decays in each region.');
mc('de-10', L`(SP1 B6b) With \(G(x;z)=-\frac13e^{x-z}\) for \(x<z\) and \(-\frac13e^{-2(x-z)}\) for \(x>z\), \(y(x)=\int G(x;z)f(z)\,dz\) becomes…`,
 [L`\(-\dfrac13\displaystyle\int_{-\infty}^{x}e^{-2(x-z)}f(z)\,dz-\dfrac13\displaystyle\int_{x}^{\infty}e^{x-z}f(z)\,dz\)`, L`\(-\dfrac13\displaystyle\int_{-\infty}^{x}e^{x-z}f(z)\,dz-\dfrac13\displaystyle\int_{x}^{\infty}e^{-2(x-z)}f(z)\,dz\)`, L`\(-\dfrac13\displaystyle\int_{-\infty}^{\infty}e^{x-z}f(z)\,dz\)`, L`\(\displaystyle\int_{-\infty}^{x}e^{-2(x-z)}f(z)\,dz\)`],
 L`"\(x>z\)" means \(z<x\): that piece goes on \(\int_{-\infty}^x\). The mark scheme flags this as the usual source of confusion.`);
gap('de-10', L`(SP3 B6a) \(y''+6y'=\delta(x-z)\) on \(0<x<\infty\), \(y(0)=y'(0)=0\).`,
 [{before:L`For \(0<x<z\), the conditions at 0 force \(y=\) `, answer:'0', after:L`. For \(x>z\), \(y=C+De^{-6x}\) with \(C=\) `, answer2:'1/6', show2:L`\(\tfrac16\)`, after2:'.', why:L`Continuity: \(C+De^{-6z}=0\); jump: \(-6De^{-6z}=1\Rightarrow D=-\tfrac16e^{6z}\), \(C=\tfrac16\).`}]);
mc('de-10', L`(SP3 B6b) With \(G=0\) for \(x<z\) and \(\tfrac16\big(1-e^{-6(x-z)}\big)\) for \(x>z\), \(y(x)=\)…`,
 [L`\(\dfrac16\displaystyle\int_0^x\big(1-e^{-6(x-z)}\big)f(z)\,dz\)`, L`\(\dfrac16\displaystyle\int_x^\infty\big(1-e^{-6(x-z)}\big)f(z)\,dz\)`, L`\(\dfrac16\displaystyle\int_0^\infty\big(1-e^{-6(x-z)}\big)f(z)\,dz\)`, L`\(\dfrac16\big(1-e^{-6x}\big)\displaystyle\int_0^x f(z)\,dz\)`],
 L`\(G\) is nonzero only for \(z<x\) — the solution depends only on the forcing up to time \(x\).`);
gap('de-10', L`(SP3 B6c) Now take \(f(x)=e^{-5x}\): \(y=\tfrac16\int_0^x\big(1-e^{-6(x-z)}\big)e^{-5z}\,dz=\alpha+\beta e^{-5x}+\gamma e^{-6x}\).`,
 [{before:L`\(\alpha=\) `, answer:'1/30', show:L`\(\tfrac1{30}\)`, after:L`, \(\beta=\) `, answer2:'-1/5', show2:L`-\tfrac15`, after2:'.', why:L`\(\tfrac1{30}(1-e^{-5x})-\tfrac16(e^{-5x}-e^{-6x})\).`},
  {before:L`\(\gamma=\) `, answer:'1/6', show:L`\(\tfrac16\)`, after:L` (check: \(y(0)=\tfrac1{30}-\tfrac15+\tfrac16=0\) ✓).`, why:L`From \(-\tfrac16\cdot(-e^{-6x})\).`}]);
tf('de-10', "Green's functions",
 [[L`\(G(x;z)\) satisfies the ODE with \(f\) replaced by \(\delta(x-z)\), plus the same boundary conditions.`, true, L`Then \(y=\int G(x;z)f(z)\,dz\).`],
  [L`\(G\) is continuous at \(x=z\) and \(\partial G/\partial x\) jumps by 1 (for leading coefficient 1).`, true, 'Continuity and jump conditions.'],
  ['The Fourier-transform route (SP1 B6c) gives a different y from the Green\'s function route.', false, 'They agree — that is the point of part (c).'],
  [L`For an initial-value problem on \(x>0\), \(G=0\) for \(x<z\).`, true, 'Causality: nothing happens before the impulse (SP3 B6).']]);
})();
