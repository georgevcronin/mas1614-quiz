// ================================================================
// MSP2802 EXAM-STYLE WRITTEN QUESTIONS — the specimen-paper questions themselves,
// with their mark allocations and (condensed) official mark schemes.
// wq(sec, text, marks, scheme, parts?)   parts: optional list of sub-parts shown as (a), (b)…
// ================================================================
(function(){
const L = String.raw;
let n = {};
const id = s => s + '-w' + String(n[s] = (n[s] || 0) + 1).padStart(2, '0');
const wq = (sec, text, marks, scheme, parts) => QUESTIONS.push({id:id(sec), sec, type:'written', past:true, text, marks, scheme, parts});

// ---------------------------------------------------------------- Specimen Paper 1
wq('de-1b', L`(SP1 A1) For each equation, classify the point \(x=0\) and explain whether you expect two independent power series solutions. You may assume any indicial roots are separated by an integer.`, 10,
L`(a) \(p=x^2\), \(q=-4\) analytic ⇒ ordinary point [1]; always two series solutions at an ordinary point [1].
(b) \(p=-5/x^3\), \(q=1/x\) not analytic ⇒ singular [1]; \(xp=-5/x^2\) not analytic ⇒ essential singular point [1]; no series solutions expected [1].
(c) \(p=0\), \(q=\frac{1}{x(x-1)^2}\) ⇒ singular [1]; \(xp=0\), \(x^2q=\frac{x}{(x-1)^2}\) analytic ⇒ regular singular [2]; roots differ by an integer ⇒ do not expect two series solutions [2].`,
 [L`\(y''+x^2y'-4y=0\)`, L`\(x^3y''-5y'+x^2y=0\)`, L`\((x-1)^2x\,y''+y=0\)`]);
wq('de-8', L`(SP1 A2) Calculate the Fourier transform of \(f(x)=-e^{x}\) for \(x<0\) and \(f(x)=e^{-x}\) for \(x\ge0\), writing your answer in the form \(\mathcal F[f(x)]=ik\,A(k)\).`, 10,
L`Set up: \(\frac{1}{\sqrt{2\pi}}\left[-\int_{-\infty}^0e^{(1-ik)x}dx+\int_0^\infty e^{(-1-ik)x}dx\right]\) [3].
Integrate: \(\frac{1}{\sqrt{2\pi}}\left[-\frac{1}{1-ik}e^{(1-ik)x}\Big|_{-\infty}^0+\frac{1}{-1-ik}e^{(-1-ik)x}\Big|_0^\infty\right]\) [2].
Evaluate using decay at \(\pm\infty\): \(\frac{1}{\sqrt{2\pi}}\left[-\frac{1}{1-ik}-\frac{1}{-1-ik}\right]\) [3].
Simplify: \(\mathcal F[f]=\frac{1}{\sqrt{2\pi}}\frac{2ik}{-k^2-1}=-\sqrt{\frac2\pi}\,\frac{ik}{1+k^2}\), i.e. \(A(k)=-\sqrt{2/\pi}\,/(1+k^2)\) [2].`);
wq('de-5', L`(SP1 A3) Solve \(y''-4y'+(\lambda+4)y=0\) for \(0<x<1\), subject to \(y(0)=0\) and \(y'(1)-2y(1)=0\), for the eigenvalues \(\lambda_n\) and eigenfunctions \(y_n(x)\).`, 15,
L`Characteristic equation \(r^2-4r+(\lambda+4)=0\Rightarrow r=2\pm\sqrt{-\lambda}\) [2]. Need complex roots: \(\lambda=\omega^2\), \(r=2\pm i\omega\) [2].
General solution \(y=[A\sin\omega x+B\cos\omega x]e^{2x}\) [2].
\(y(0)=0\Rightarrow B=0\) [2]. \(y'(1)-2y(1)=0\Rightarrow A(2\sin\omega+\omega\cos\omega)e^2-2A\sin\omega\,e^2=0\) [2] \(\Rightarrow\omega\cos\omega=0\Rightarrow\omega=(n+\tfrac12)\pi\), \(n=0,1,2,\dots\) (\(\omega=0\) trivial) [3].
\(\lambda_n=(n+\tfrac12)^2\pi^2\), \(y_n=A_ne^{2x}\sin(\omega_nx)\) [2].`);
wq('de-6', L`(SP1 A4a) Calculate the Fourier series of \(f(x)=0\) for \(-\pi\le x<0\) and \(f(x)=x(\pi-x)\) for \(0\le x\le\pi\). You may use \(\int_0^\pi x^2\sin mx\,dx=\frac{(2-\pi^2m^2)(-1)^m-2}{m^3}\) and \(\int_0^\pi x^2\cos mx\,dx=\frac{2\pi(-1)^m}{m^2}\).`, 10,
L`\(\ell=\pi\) [1]. \(a_0=\frac{1}{2\pi}\int_0^\pi x(\pi-x)dx=\frac{\pi^2}{12}\) [1].
\(a_n=\int_0^\pi x\cos nx\,dx-\frac1\pi\int_0^\pi x^2\cos nx\,dx\), \(b_n=\int_0^\pi x\sin nx\,dx-\frac1\pi\int_0^\pi x^2\sin nx\,dx\) [2].
By parts: \(\int_0^\pi x\sin mx=\frac{\pi}{m}(-1)^{m+1}\), \(\int_0^\pi x\cos mx=\frac{(-1)^m-1}{m^2}\) [2].
\(a_n=-\frac{1+(-1)^n}{n^2}\) [1]; \(b_n=\frac{2[1-(-1)^n]}{\pi n^3}\) [2].
\(f(x)=\frac{\pi^2}{12}+\sum_{n\ge1}\left[-\frac{1+(-1)^n}{n^2}\cos nx+\frac{2[1-(-1)^n]}{\pi n^3}\sin nx\right]\) [1].`);
wq('de-7a', L`(SP1 A4b, c) Let \(f\) be as in SP1 A4a, with Fourier series \(\frac{\pi^2}{12}+\sum\left[-\frac{1+(-1)^n}{n^2}\cos nx+\frac{2[1-(-1)^n]}{\pi n^3}\sin nx\right]\).`, 5,
L`(a) "\(f'\) is piecewise continuous" (or "\(f\) is piecewise smooth") [1].
(b) \(g=f'\) [1]; \(f'\) is piecewise continuous so differentiate term by term [1];
\(g(x)=\sum_{n\ge1}\left[\frac{1+(-1)^n}{n}\sin nx+\frac{2[1-(-1)^n]}{\pi n^2}\cos nx\right]\) [2].`,
 ['State the conditions under which a Fourier series can be differentiated term by term.', L`Hence write down the Fourier series of \(g(x)=0\) for \(-\pi\le x<0\), \(g(x)=\pi-2x\) for \(0\le x\le\pi\).`]);
wq('de-3', L`(SP1 B5a, b) Consider the Legendre equation of order 3, \(x(2-x)y''-2(x-1)y'+12y=0\) for \(0<x<2\).`, 15,
L`(a) Regular singular point [1]: \(p,q\) not analytic at 0 but \(xp\) and \(x^2q\) are [2].
(b) \(y'=\sum(n+\lambda)a_nx^{n+\lambda-1}\), \(y''=\sum(n+\lambda)(n+\lambda-1)a_nx^{n+\lambda-2}\) [2]. Correct substitution [2].
Combine: \(\sum2(n+\lambda)^2a_nx^{n+\lambda-1}+\sum[12-(n+\lambda)(n+\lambda+1)]a_nx^{n+\lambda}=0\); re-index, extract first term:
\(2\lambda^2a_0x^{\lambda-1}+\sum\{2(n+1+\lambda)^2a_{n+1}+[12-(n+\lambda)(n+\lambda+1)]a_n\}x^{n+\lambda}=0\) [6].
Indicial equation \(\lambda^2=0\) [1]; \(a_{n+1}=\frac{(n+\lambda)(n+\lambda+1)-12}{2(n+1+\lambda)^2}a_n\) [1].`,
 [L`Is \(x=0\) an ordinary, regular singular or essential singular point? Justify.`, L`Seeking \(y=\sum a_nx^{n+\lambda}\), derive the indicial equation and a recurrence \(a_{n+1}=A(n,\lambda)a_n\).`]);
wq('de-3', L`(SP1 B5c, d) For \(x(2-x)y''-2(x-1)y'+12y=0\) the indicial equation is \(\lambda^2=0\) and \(a_{n+1}=\frac{(n+\lambda)(n+\lambda+1)-12}{2(n+1+\lambda)^2}a_n\).`, 10,
L`(a) Repeated root \(\lambda=0\) ⇒ only one series solution [1]. \(a_1=-6a_0\), \(a_2=\frac{15}{2}a_0\), \(a_3=-\frac52a_0\), \(a_4=0\) [3]; so \(a_n=0\) for \(n\ge4\) [1]; \(y_1=a_0(1-6x+\frac{15}{2}x^2-\frac52x^3)\) with no "…" [1].
(b) \(p=\frac{-2(x-1)}{x(2-x)}\) (NOT \(-2(x-1)\)) [1]; \(\int p\,dx=\log x+\log(x-2)\) [2]; \(y_2=y_1\int\frac{dx}{x(x-2)y_1^2}\) [1].`,
 [L`Why can only one series solution be found? Find \(a_1,\dots,a_4\), \(a_n\) for \(n\ge4\), and hence \(y_1(x)\).`, L`Using reduction of order, write \(y_2\) in terms of an integral involving \(y_1\).`]);
wq('de-10', L`(SP1 B6a) Solve \(y''+y'-2y=\delta(x-z)\) for \(-\infty<x<\infty\), where \(y,y'\to0\) as \(|x|\to\infty\).`, 10,
L`\(x<z\): \(y=Ae^x+Be^{-2x}\) [2]; decay as \(x\to-\infty\) ⇒ \(B=0\) [1]. \(x>z\): \(y=Ce^x+De^{-2x}\) [1]; decay ⇒ \(C=0\) [1].
Continuity: \(De^{-2z}=Ae^z\) [1]. Jump: \(-2De^{-2z}-Ae^z=1\) [1]. ⇒ \(A=-\frac13e^{-z}\), \(D=-\frac13e^{2z}\) [2].
\(y=-\frac13e^{x-z}\) for \(x<z\), \(-\frac13e^{-2(x-z)}\) for \(x>z\) [1].`);
wq('de-10', L`(SP1 B6b) For \(y''+y'-2y=f(x)\) on \(-\infty<x<\infty\) with \(y,y',f\to0\) as \(|x|\to\infty\), use \(y''+y'-2y=\delta(x-z)\) ⇒ \(y=-\frac13e^{x-z}\ (x<z)\), \(-\frac13e^{-2(x-z)}\ (x>z)\) to find the Green's function \(G(x;z)\) and an expression for \(y(x)\) in terms of integrals of \(f\).`, 8,
L`\(G\) satisfies \(G''+G'-2G=\delta(x-z)\) with the same decay, so \(G(x;z)\) is the solution above [3: 1 for \(G\), 2 for justification].
\(y(x)=\int_{-\infty}^{\infty}G(x;z)f(z)\,dz\) [2: limits, integrand].
\(y(x)=-\frac13\int_{-\infty}^{x}e^{-2(x-z)}f(z)\,dz-\frac13\int_x^\infty e^{x-z}f(z)\,dz\) [3: split at \(z=x\); exponentials the right way round].`);
wq('de-9a', L`(SP1 B6c) By Fourier-transforming \(y''+y'-2y=f(x)\) and using the convolution theorem \(\mathcal F^{-1}[\hat f\hat g]=\frac{1}{\sqrt{2\pi}}\int g(x-u)f(u)\,du\), show that \(y(x)=-\frac13\int_{-\infty}^{x}e^{-2(x-u)}f(u)\,du-\frac13\int_x^\infty e^{x-u}f(u)\,du\). You are given that \(h=e^x\ (x<0)\), \(e^{-2x}\ (x>0)\) has \(\hat h=\frac{3}{\sqrt{2\pi}}\frac{1}{k^2-ik+2}\).`, 7,
L`Transform: \((-k^2+ik-2)\hat y=\hat f\) [2] ⇒ \(\hat y=\frac{\hat f}{-k^2+ik-2}\) [1].
Let \(\hat g=\frac{1}{-k^2+ik-2}\); \(y=\frac{1}{\sqrt{2\pi}}\int g(x-u)f(u)\,du\) [1].
\(\hat g=-\frac{\sqrt{2\pi}}{3}\hat h\Rightarrow g=-\frac{\sqrt{2\pi}}{3}h\) [1].
\(y=-\frac13\int h(x-u)f(u)\,du\), splitting at \(u=x\) gives the result [2].`);

// ---------------------------------------------------------------- Specimen Paper 2
wq('de-2', L`(SP2 A1) Consider \(y''-x^2y=0\).`, 15,
L`(a) Ordinary point [1]: \(p=0\), \(q=-x^2\) analytic [1].
(b) \(y'=\sum na_nx^{n-1}\), \(y''=\sum n(n-1)a_nx^{n-2}\) [2]; substitute \(\sum n(n-1)a_nx^{n-2}-\sum a_nx^{n+2}=0\) [1]; re-index \(\sum_{k\ge4}a_{k-4}x^{k-2}\) [1]; extract \(2a_2+6a_3x\) [2]; combine \(\sum_{n\ge4}[n(n-1)a_n-a_{n-4}]x^{n-2}\) [1];
\(a_2=a_3=0\), \(a_n=\frac{a_{n-4}}{n(n-1)}\) [3]. \(y=a_0\left(1+\frac{x^4}{12}+\frac{x^8}{672}+\dots\right)+a_1\left(x+\frac{x^5}{20}+\frac{x^9}{1440}+\dots\right)\) [3].`,
 [L`Is \(x=0\) an ordinary, regular singular or essential singular point? Justify.`, L`Seeking \(y=\sum a_nx^n\), find the general solution \(y=A_1y_1+A_2y_2\), keeping powers up to \(x^9\).`]);
wq('de-8', L`(SP2 A2) Show that:`, 15,
L`(a) By parts: \(\frac{1}{\sqrt{2\pi}}\int f'e^{-ikx}dx=\big[fe^{-ikx}\big]_{-\infty}^\infty-\frac{1}{\sqrt{2\pi}}\int f(-ik)e^{-ikx}dx\) [3]; boundary term vanishes as \(f\to0\) [1]; \(=ik\hat f\) [1].
(b) Substitute \(y=x-a\): \(\frac{1}{\sqrt{2\pi}}\int f(y)e^{-ik(y+a)}dy\) [3]; split exponential [1]; \(=e^{-ika}\hat f\) [1].
(c) Substitute \(y=ax\): \(\frac{\mathrm{sgn}(a)}{\sqrt{2\pi}}\int f(y)e^{-iky/a}\frac{dy}{a}\) [3: 1 substitution, 1 sign of \(a\), 1 working]; take \(1/a\) out [1]; \(=\frac{1}{|a|}\hat f(k/a)\) [1].`,
 [L`\(\mathcal F[f'(x)]=ik\hat f(k)\)`, L`\(\mathcal F[f(x-a)]=e^{-iak}\hat f(k)\)`, L`\(\mathcal F[f(ax)]=\frac{1}{|a|}\hat f\!\left(\frac ka\right)\)`]);
wq('de-5', L`(SP2 A3) Solve \(y''+\lambda y=0\) with \(y(-1)=0\), \(y'(1)=0\) for the eigenvalues \(\lambda_n\) and eigenfunctions \(y_n\). (You may use \(\cos^2t-\sin^2t=\cos2t\).)`, 10,
L`Only \(\lambda=\omega^2>0\) gives non-trivial solutions: \(y=A\sin\omega x+B\cos\omega x\) [1], \(y'=\omega A\cos\omega x-\omega B\sin\omega x\) [1].
BCs: \(-A\sin\omega+B\cos\omega=0\) [1], \(\omega A\cos\omega-\omega B\sin\omega=0\) [1] ⇒ \(B=A\tan\omega\) [1] ⇒ \(\omega A(\cos\omega-\tan\omega\sin\omega)=0\) [1] ⇒ \(\omega A\cos2\omega=0\) [1].
\(\omega_n=(\frac14+\frac n2)\pi\) [1]; \(y_n=A_n[\sin\omega_nx+\tan\omega_n\cos\omega_nx]\) (equivalently \(A_n\sin(\omega_n(x+1))\)), \(\lambda_n=(\frac14+\frac n2)^2\pi^2\), \(n=0,1,2,\dots\) [2].`);
wq('de-6', L`(SP2 A4) Let \(f(x)=x(x-1)(x+1)\) on \([-1,1]\), represented as \(\sum_{n\ge0}[a_n\sin(n\pi x)+b_n\cos(n\pi x)]\). You may use \(2\sin A\sin B=\cos(A-B)-\cos(A+B)\), \(\int_{-1}^1x\sin(n\pi x)dx=\frac{2(-1)^{n+1}}{n\pi}\) and \(\int_{-1}^1x^3\sin(n\pi x)dx=\frac{2(-1)^n(6-n^2\pi^2)}{n^3\pi^3}\).`, 10,
L`(a) \(f(-x)=-f(x)\), so \(f\) is odd [1]; only odd (sine) terms, so \(b_n=0\) [1].
(b) \(m=n\): \(\int_{-1}^1\sin^2(n\pi x)dx=\int\frac12[1-\cos2n\pi x]dx=1\) [2]; \(m\ne n\): use the identity [1], integrate to 0 [1].
(c) Multiply by \(\sin m\pi x\) and integrate: \(a_m=\int_{-1}^1(x^3-x)\sin(m\pi x)dx\) [2] ⇒ \(a_n=\frac{12(-1)^n}{n^3\pi^3}\) [2].`,
 [L`Explain why \(b_n=0\) for all \(n\).`, L`Show \(\int_{-1}^1\sin(n\pi x)\sin(m\pi x)dx=1\) if \(m=n\) and \(0\) if \(m\ne n\).`, L`Using this orthogonality, determine \(a_n\).`]);
wq('de-4', L`(SP2 B5a, b) Consider the spherical Bessel equation of order 2, \(x^2y''+2xy'+(x^2-6)y=0\).`, 15,
L`(a) Regular singular [1]: \(p=2/x\), \(q=1-6/x^2\) singular; \(xp=2\), \(x^2q=x^2-6\) analytic [2].
(b) Derivatives of \(\sum a_nx^{n+\lambda}\) [2]; substitute [2]; re-index the \(x^2y\) sum [1]; extract \(n=0,1\) terms [2]; combine:
\((\lambda^2+\lambda-6)a_0+(\lambda^2+3\lambda-4)a_1+\sum_{n\ge2}\{[(n+\lambda)(n+\lambda+1)-6]a_n+a_{n-2}\}x^{n+\lambda}=0\) [3].
Indicial \(\lambda^2+\lambda-6=0\) [1]; \(a_n=\frac{a_{n-2}}{6-(n+\lambda)(n+\lambda+1)}\) [1].`,
 [L`Is \(x=0\) ordinary, regular singular or essential singular? Justify.`, L`Seeking \(y=\sum a_nx^{n+\lambda}\), derive the indicial equation and a recurrence \(a_n=A(n,\lambda)a_{n-2}\).`]);
wq('de-4', L`(SP2 B5c, d) For \(x^2y''+2xy'+(x^2-6)y=0\) the indicial equation is \(\lambda^2+\lambda-6=0\) and \(a_n=\frac{a_{n-2}}{6-(n+\lambda)(n+\lambda+1)}\), with \((\lambda^2+3\lambda-4)a_1=0\).`, 10,
L`(a) Roots \(\lambda=2,-3\) [1]; separated by an integer, so only the larger \(\lambda=2\) is expected to work [1]. \(a_1=0\); \(a_2=-\frac{a_0}{14}\), \(a_3=0\), \(a_4=\frac{a_0}{504}\) [3]; \(y_1=a_0\left(x^2-\frac{x^4}{14}+\frac{x^6}{504}+\dots\right)\) [1]. (Max 2/3 for coefficients if wrong \(\lambda\).)
(b) \(p=2/x\) (NOT \(2x\)) [1]; \(\int p=2\log x\) [1]; \(e^{-\int p}=x^{-2}\) [1]; \(y_2=y_1\int\frac{dx}{x^2y_1^2}\) [1].`,
 [L`Which indicial root gives \(y=y_1(x)\)? Write \(y_1\) up to \(x^6\).`, L`Using reduction of order, write \(y_2\) in terms of \(y_1\).`]);
wq('de-7b', L`(SP2 B6a) Consider \(y''+5y=f(x)\) with \(y(0)=y(\pi)=0\). By writing \(y\) and \(f\) as half-range Fourier sine series, determine the coefficients of \(y\) in terms of integrals of \(f\).`, 10,
L`\(\ell=\pi\): \(y=\sum y_n\sin nx\), \(f=\sum f_n\sin nx\) [3].
Substitute: \(\sum(-n^2)y_n\sin nx+5\sum y_n\sin nx=\sum f_n\sin nx\) [2] ⇒ \(\sum(5-n^2)y_n\sin nx=\sum f_n\sin nx\) [1].
Equate coefficients: \(y_n=\frac{f_n}{5-n^2}\) [2] \(=\frac{2}{\pi(5-n^2)}\int_0^\pi f(x)\sin nx\,dx\) [2].`);
wq('de-7b', L`(SP2 B6b) For \(y''+5y=f\), \(y(0)=y(\pi)=0\), the sine coefficients are \(y_n=\frac{2}{\pi(5-n^2)}\int_0^\pi f\sin nx\,dx\). Take \(f(x)=e^{-x}\) and find \(y(x)\) as a Fourier series.`, 10,
L`Integrate by parts twice: \(\int_0^\pi e^{-x}\sin nx\,dx=n\int_0^\pi e^{-x}\cos nx\,dx=n[1-e^{-\pi}(-1)^n]-n^2\int_0^\pi e^{-x}\sin nx\,dx\) ⇒ \(\int_0^\pi e^{-x}\sin nx\,dx=\frac{n[1-e^{-\pi}(-1)^n]}{1+n^2}\) [8, any valid method].
\(y_n=\frac{2n[1-e^{-\pi}(-1)^n]}{\pi(5-n^2)(1+n^2)}\) [1]; \(y=\sum_{n\ge1}y_n\sin nx\) [1].`);
wq('de-7b', L`(SP2 B6c) Using \(y_n=\frac{2}{\pi(5-n^2)}\int_0^\pi f\sin nx\,dx\), show that the solution of \(y''+5y=f\), \(y(0)=y(\pi)=0\) can be written \(y(x)=\int_0^\pi f(z)G(x,z)\,dz\), and give \(G\).`, 5,
L`Write \(y=\sum\left[\frac{2}{\pi(5-n^2)}\int_0^\pi f\sin nx\right]\sin nx\) [1]; rename the dummy variable to \(z\) and take the sum inside the integral [2]; \(y=\int_0^\pi f(z)\left[\frac2\pi\sum\frac{\sin nz\sin nx}{5-n^2}\right]dz\) [1], so \(G(x,z)=\frac2\pi\sum_{n\ge1}\frac{\sin nz\sin nx}{5-n^2}\) [1].`);

// ---------------------------------------------------------------- Specimen Paper 3
wq('de-2', L`(SP3 A1) Consider \(y''+x^3y=0\).`, 15,
L`(a) Ordinary point [1]: \(p=0\), \(q=x^3\) analytic [1].
(b) Derivatives [2]; substitute \(\sum n(n-1)a_nx^{n-2}+\sum a_nx^{n+3}=0\) [1]; re-index \(\sum_{k\ge5}a_{k-5}x^{k-2}\) [1]; extract \(2a_2+6a_3x+12a_4x^2\) [2]; combine [1];
\(a_2=a_3=a_4=0\), \(a_n=-\frac{a_{n-5}}{n(n-1)}\) [3]. \(y=a_0\left(1-\frac{x^5}{20}+\frac{x^{10}}{1800}+\dots\right)+a_1\left(x-\frac{x^6}{30}+\frac{x^{11}}{3300}+\dots\right)\) [3].`,
 [L`Is \(x=0\) an ordinary, regular singular or essential singular point? Justify.`, L`Seeking \(y=\sum a_nx^n\), find the general solution \(y=A_1y_1+A_2y_2\), keeping powers up to \(x^{11}\).`]);
wq('de-8', L`(SP3 A2) Calculate the Fourier transform of \(f(x)=1\) for \(|x|<a\), \(0\) for \(|x|>a\) (\(a>0\)). By considering \(f(0)\), show that \(\int_{-\infty}^\infty\frac{\sin ka}{k}\,dk=\pi\).`, 10,
L`\(\hat f=\frac{1}{\sqrt{2\pi}}\int_{-a}^ae^{-ikx}dx=\frac{1}{\sqrt{2\pi}}\left[\frac{-1}{ik}e^{-ikx}\right]_{-a}^a=\frac{1}{\sqrt{2\pi}}\frac{e^{ika}-e^{-ika}}{ik}=\sqrt{\frac2\pi}\frac{\sin ka}{k}\) [6].
Inverse: \(\frac1\pi\int\frac{\sin ka}{k}e^{ikx}dk=f(x)\) [2]; at \(x=0\): \(\frac1\pi\int\frac{\sin ka}{k}dk=f(0)\) [1]; \(f(0)=1\) gives \(\pi\) [1].`);
wq('de-5', L`(SP3 A3) Solve \(y''+\lambda y=0\) on \(-\pi\le x\le\pi\) with \(y(-\pi)=y(\pi)=0\). There are two distinct families of solutions — find all eigenvalues and eigenfunctions.`, 10,
L`\(\lambda=\omega^2\) [1]; \(y=A\cos\omega x+B\sin\omega x\) [3].
BCs: \(A\cos\omega\pi-B\sin\omega\pi=0\) [1], \(A\cos\omega\pi+B\sin\omega\pi=0\) [1]; add/subtract: \(2A\cos\omega\pi=0\), \(2B\sin\omega\pi=0\) [1]; one coefficient nonzero ⇒ \(A=0,\sin\omega\pi=0\) or \(B=0,\cos\omega\pi=0\) [1].
\(y_n=B_n\sin nx\), \(\lambda_n=n^2\), \(n=1,2,\dots\) [1]; \(y_n=A_n\cos(n+\frac12)x\), \(\lambda_n=(n+\frac12)^2\), \(n=0,1,\dots\) [1]. Both families needed for full marks.`);
wq('de-6', L`(SP3 A4) Let \(f(x)=x\sin x\) on \([-\pi,\pi]\), represented as \(\sum_{n\ge0}\left[a_n\cos\frac{n\pi x}{\ell}+b_n\sin\frac{n\pi x}{\ell}\right]\). You may use \(\sin A\cos B=\frac12[\sin(A+B)+\sin(A-B)]\), \(\int_{-\pi}^\pi x\sin kx\,dx=\frac{2\pi}{k}(-1)^{k+1}\), and the orthogonality relation \(\int_{-\ell}^{\ell}\cos\frac{n\pi x}{\ell}\cos\frac{m\pi x}{\ell}dx=\ell\) (\(m=n\ne0\)), \(2\ell\) (\(m=n=0\)), \(0\) (\(m\ne n\)).`, 15,
L`(a) \(x\sin x\) is even (odd × odd) [1]; \(b_n\) are integrals of the odd function \(f\sin nx\) [1]; over a symmetric domain these vanish [1].
(b) \(\ell=\pi\); multiply by \(\cos mx\) and integrate [1+2]. \(a_0=\frac{1}{2\pi}\int x\sin x=1\) [1+1]. \(\int x\sin x\cos mx=\pi a_m\) [1].
\(a_1=\frac{1}{2\pi}\int x\sin2x=-\frac12\) [2]. For \(m\ge2\): \(a_m=\frac{1}{2\pi}\int x[\sin(m+1)x-\sin(m-1)x]dx=\frac{2(-1)^{m+1}}{m^2-1}\) [4].`,
 [L`Explain why \(b_n=0\) for all \(n\).`, L`Using orthogonality, determine the \(a_n\) and write down the Fourier series.`]);
wq('de-3', L`(SP3 B5a, b) Consider the Laguerre equation of order \(\nu\), \(xy''+(1-x)y'+\nu y=0\).`, 15,
L`(a) Regular singular [1]: \(p=(1-x)/x\), \(q=\nu/x\) singular; \(xp=1-x\), \(x^2q=\nu x\) analytic [2].
(b) Derivatives [2]; substitute \(\sum(n+\lambda)(n+\lambda-1)a_nx^{n+\lambda-1}+\sum(n+\lambda)a_nx^{n+\lambda-1}-\sum(n+\lambda)a_nx^{n+\lambda}+\sum\nu a_nx^{n+\lambda}=0\) [2]; re-index [2]; extract \(\lambda(\lambda-1)a_0+\lambda a_0\) [2]; combine \(\lambda^2a_0+\sum[(n+\lambda+1)^2a_{n+1}-(n+\lambda-\nu)a_n]x^{n+\lambda}=0\) [3].
Indicial \(\lambda^2=0\) [1]; \(a_{n+1}=\frac{n+\lambda-\nu}{(n+\lambda+1)^2}a_n\) [1].`,
 [L`Is \(x=0\) ordinary, regular singular or essential singular? Justify.`, L`Seeking \(y=\sum a_nx^{n+\lambda}\), derive the indicial equation and a recurrence \(a_{n+1}=A(n,\nu,\lambda)a_n\).`]);
wq('de-3', L`(SP3 B5c, d) For the Laguerre equation \(xy''+(1-x)y'+\nu y=0\), the indicial equation is \(\lambda^2=0\) and \(a_{n+1}=\frac{n+\lambda-\nu}{(n+\lambda+1)^2}a_n\).`, 10,
L`(a) Repeated root \(\lambda=0\) [1]; repeated roots give only one series solution [1]. \(a_1=-\nu a_0\), \(a_2=\frac{1-\nu}{2^2}\cdot\frac{-\nu}{1^2}a_0\), \(a_3=\frac{2-\nu}{3^2}\frac{1-\nu}{2^2}\frac{-\nu}{1^2}a_0\) [3]; \(y_1=a_0\left(1-\nu x-\frac{\nu(1-\nu)}{2^2\cdot1^2}x^2-\frac{\nu(1-\nu)(2-\nu)}{3^2\cdot2^2\cdot1^2}x^3+\dots\right)\) [1].
(b) \(p=\frac1x-1\) (NOT \(1-x\)) [1]; \(\int p=\log x-x\) [1]; \(e^{-\int p}=e^xx^{-1}\) [1]; \(y_2=y_1\int\frac{e^x\,dx}{xy_1^2}\), i.e. \(A=e^x\), \(B=x\) [1].`,
 [L`Explain why only one series solution exists. Write \(y_1\) up to \(x^3\).`, L`Using reduction of order, write \(y_2=y_1\int\frac{A(x)\,dx}{B(x)y_1^2}\), finding \(A\) and \(B\).`]);
wq('de-10', L`(SP3 B6a) Solve \(y''+6y'=\delta(x-z)\) for \(0<x<\infty\), subject to \(y(0)=y'(0)=0\).`, 12,
L`Consider \(0<x<z\) and \(x>z\) separately [1]. \(0<x<z\): \(y=A+Be^{-6x}\) [1]; \(x>z\): \(y=C+De^{-6x}\) [1].
\(y(0)=0\Rightarrow A+B=0\) [1]; \(y'(0)=0\Rightarrow-6B=0\) [1] ⇒ \(A=B=0\) [1].
Continuity \(C+De^{-6z}=0\) [2]; jump \(-6De^{-6z}=1\) [2] ⇒ \(D=-\frac{e^{6z}}{6}\), \(C=\frac16\) [1].
\(y=0\) for \(0<x<z\); \(y=\frac16\left(1-e^{-6(x-z)}\right)\) for \(x>z\) [1].`);
wq('de-10', L`(SP3 B6b, c) For \(y''+6y'=f(x)\) on \(0<x<\infty\) with \(y(0)=y'(0)=0\):`, 13,
L`(a) \(G\) satisfies \(G''+6G'=\delta(x-z)\), \(G=G'=0\) at 0, so \(G=0\ (x<z)\), \(\frac16(1-e^{-6(x-z)})\ (x>z)\) [3]. \(y=\int_0^\infty G(x;z)f(z)dz\) [2] \(=\int_0^x\frac16(1-e^{-6(x-z)})f(z)dz+\int_x^\infty0\,dz\) [2] \(=\frac16\int_0^x(1-e^{-6(x-z)})f(z)dz\) [1].
(b) \(y=\frac16\int_0^x(e^{-5z}-e^{-6x}e^{z})dz\) [2] \(=\frac{1}{30}(1-e^{-5x})-\frac16(e^{-5x}-e^{-6x})\) [2] \(=\frac1{30}-\frac15e^{-5x}+\frac16e^{-6x}\) [1].`,
 [L`Using the solution of \(y''+6y'=\delta(x-z)\) with the same conditions (\(0\) for \(x<z\), \(\frac16(1-e^{-6(x-z)})\) for \(x>z\)), find the Green's function and an integral expression for \(y(x)\).`, L`Calculate \(y(x)\) for \(f(x)=e^{-5x}\).`]);
})();
