// ================================================================
// MAS2702 COMPLEX ANALYSIS — short written exam questions (LaTeX) and key points.
// Notation follows the notes: T is the anti-clockwise unit circle, n(γ; w) the winding number,
// Res_{z=p} f the residue, D(c; R) the open disc.
// sq(id, section, marks, question, mark scheme, parts?)
// ================================================================
(function(){
const L = String.raw;
const sq = (id, sec, marks, text, scheme, parts) => QUESTIONS.push({id, sec, type:'written', marks, text, scheme, parts});
const key = (sec, list) => { SECTION_BY_ID[sec].key = list; };

// ---------------------------------------------------------------- §1 Complex numbers
key('ca-1', [L`\(z=x+iy\), \(\bar z=x-iy\), \(|z|=\sqrt{x^2+y^2}\), \(z\bar z=|z|^2\), \(\frac1z=\frac{\bar z}{|z|^2}\).`,
  L`Polar form \(z=r(\cos\theta+i\sin\theta)\); principal argument \(\operatorname{Arg}z\in(-\pi,\pi]\).`,
  L`\(|zw|=|z||w|\); De Moivre: \(z^n=r^n(\cos n\theta+i\sin n\theta)\).`,
  L`The \(n\) roots of \(z\ne0\): \(r^{1/n}\big(\cos\frac{\theta+2k\pi}{n}+i\sin\frac{\theta+2k\pi}{n}\big)\), \(k=0,\dots,n-1\).`]);
sq('ca-1-01','ca-1',3, L`Let \(\alpha=1+2i\) and \(\beta=3-i\). Write \(\alpha+\beta\), \(\alpha\beta\) and \(\alpha/\beta\) in the form \(x+iy\).`,
 L`\(\alpha+\beta=4+i\) [1]. \(\alpha\beta=3-i+6i-2i^2=5+5i\) [1]. \(\alpha/\beta=\frac{(1+2i)(3+i)}{10}=\frac{1+7i}{10}\) [1].`);
sq('ca-1-02','ca-1',3, L`Let \(z=3-4i\). Find \(|z|\), \(z\bar z\) and \(1/z\) in the form \(x+iy\).`,
 L`\(|z|=5\) [1]; \(z\bar z=|z|^2=25\) [1]; \(\frac1z=\frac{\bar z}{|z|^2}=\frac{3+4i}{25}\) [1].`);
sq('ca-1-03','ca-1',2, L`Write \(-1+i\) in polar form, giving the principal argument.`,
 L`\(|-1+i|=\sqrt2\) [1], \(\operatorname{Arg}=\frac{3\pi}{4}\), so \(-1+i=\sqrt2\big(\cos\frac{3\pi}4+i\sin\frac{3\pi}4\big)\) [1].`);
sq('ca-1-04','ca-1',2, L`Find the principal argument of \(-\sqrt3-i\).`,
 L`Third quadrant, reference angle \(\pi/6\) [1], so \(\operatorname{Arg}(-\sqrt3-i)=-\frac{5\pi}{6}\) [1] (not \(\frac{7\pi}{6}\), which is outside \((-\pi,\pi]\)).`);
sq('ca-1-05','ca-1',2, L`Compute \((1+i)^8\).`,
 L`\(1+i=\sqrt2\,e^{i\pi/4}\) [1], so \((1+i)^8=(\sqrt2)^8e^{2\pi i}=16\) [1].`);
sq('ca-1-06','ca-1',3, L`Find all cube roots of \(-8\) in the form \(x+iy\).`,
 L`\(-8=8(\cos\pi+i\sin\pi)\) [1]. Roots \(2\big(\cos\frac{\pi+2k\pi}3+i\sin\frac{\pi+2k\pi}3\big)\), \(k=0,1,2\) [1]: \(1+i\sqrt3,\ -2,\ 1-i\sqrt3\) [1].`);
sq('ca-1-07','ca-1',2, L`Compute \((-1+i\sqrt3)^6\).`,
 L`Modulus 2, argument \(\frac{2\pi}3\) [1]; \(2^6\big(\cos4\pi+i\sin4\pi\big)=64\) [1].`);
sq('ca-1-08','ca-1',2, L`Prove that \(z\bar z=|z|^2\) for every \(z\in\mathbb C\).`,
 L`With \(z=x+iy\): \(z\bar z=(x+iy)(x-iy)=x^2-i^2y^2=x^2+y^2\) [1] \(=|z|^2\) [1].`);

// ---------------------------------------------------------------- §2 Exponential
key('ca-2', [L`\(e^z=e^x(\cos y+i\sin y)\) for \(z=x+iy\); \(|e^z|=e^x\).`,
  L`Euler: \(e^{i\theta}=\cos\theta+i\sin\theta\); \(|e^{i\theta}|=1\).`,
  L`\(\cos\theta=\frac12(e^{i\theta}+e^{-i\theta})\), \(\sin\theta=\frac1{2i}(e^{i\theta}-e^{-i\theta})\).`,
  L`\(e^z\) is \(2\pi i\)-periodic.`]);
sq('ca-2-01','ca-2',2, L`Write \(e^{2+i\pi/2}\) in the form \(x+iy\).`,
 L`\(e^2(\cos\frac\pi2+i\sin\frac\pi2)\) [1] \(=ie^2\) [1].`);
sq('ca-2-02','ca-2',2, L`Find \(|e^{3-4i}|\), justifying your answer.`,
 L`\(e^{3-4i}=e^3(\cos4-i\sin4)\) [1], so \(|e^{3-4i}|=e^3\) since \(|\cos4-i\sin4|=1\) [1].`);
sq('ca-2-03','ca-2',2, L`Show that \(e^{z+2\pi i}=e^z\) for all \(z\in\mathbb C\).`,
 L`\(e^{z+2\pi i}=e^x(\cos(y+2\pi)+i\sin(y+2\pi))\) [1] \(=e^x(\cos y+i\sin y)=e^z\) [1].`);
sq('ca-2-04','ca-2',3, L`Find all \(z\in\mathbb C\) with \(e^z=-1\).`,
 L`\(e^x(\cos y+i\sin y)=-1\Rightarrow e^x=1\), so \(x=0\) [1]; \(\cos y=-1,\ \sin y=0\) [1]; \(z=(2k+1)\pi i\), \(k\in\mathbb Z\) [1].`);
sq('ca-2-05','ca-2',3, L`Find all \(z\in\mathbb C\) with \(e^z=1+i\).`,
 L`\(|e^z|=e^x=\sqrt2\Rightarrow x=\tfrac12\ln2\) [1]; \(y=\frac\pi4+2k\pi\) [1]; \(z=\tfrac12\ln2+i\big(\frac\pi4+2k\pi\big)\), \(k\in\mathbb Z\) [1].`);
sq('ca-2-06','ca-2',2, L`Using \(\cos z=\frac12(e^{iz}+e^{-iz})\), show that \(\cos(iy)=\cosh y\) for real \(y\).`,
 L`\(\cos(iy)=\frac12(e^{i\cdot iy}+e^{-i\cdot iy})=\frac12(e^{-y}+e^{y})\) [1] \(=\cosh y\) [1].`);
sq('ca-2-07','ca-2',2, L`Express \(\sin^2\theta\) in terms of \(e^{i\theta}\) and \(e^{-i\theta}\).`,
 L`\(\sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}\) [1], so \(\sin^2\theta=-\frac14\big(e^{2i\theta}-2+e^{-2i\theta}\big)\) [1].`);

// ---------------------------------------------------------------- §3 Contours
key('ca-3', [L`Line segment \([z_1,z_2]\): \(\gamma(t)=(1-t)z_1+tz_2\), \(0\le t\le1\).`,
  L`Circular arc: \(\gamma(t)=z_0+Re^{it}\) over the required range of \(t\).`,
  L`\(\gamma'(t)=\alpha'(t)+i\beta'(t)\); length \(=\int_a^b|\gamma'(t)|\,dt\).`,
  'A contour is continuous and differentiable at all but finitely many points.']);
sq('ca-3-01','ca-3',2, L`Parametrise the straight line from \(1+i\) to \(3+2i\).`,
 L`\(\gamma(t)=(1-t)(1+i)+t(3+2i)\) [1] \(=(1+2t)+i(1+t)\), \(0\le t\le1\) [1].`);
sq('ca-3-02','ca-3',2, L`Find the length of the segment \([1+i,\,3+2i]\) using \(\int|\gamma'(t)|\,dt\).`,
 L`\(\gamma'(t)=2+i\) [1], so length \(=\int_0^1\sqrt5\,dt=\sqrt5\) [1].`);
sq('ca-3-03','ca-3',2, L`Parametrise the anti-clockwise circular arc of radius 4 centred at 0 from \(4\) to \(4i\).`,
 L`\(\gamma(t)=4e^{i\pi t/2}\) [1], \(0\le t\le1\) (check \(\gamma(0)=4\), \(\gamma(1)=4i\)) [1].`);
sq('ca-3-04','ca-3',2, L`Find \(\dfrac{d}{dt}e^{i\pi t}\) for \(t\in\mathbb R\).`,
 L`\(e^{i\pi t}=\cos\pi t+i\sin\pi t\), so the derivative is \(-\pi\sin\pi t+i\pi\cos\pi t\) [1] \(=i\pi e^{i\pi t}\) [1].`);
sq('ca-3-05','ca-3',2, L`Find the length of \(\gamma(t)=2+3e^{it}\), \(0\le t\le\pi\).`,
 L`\(|\gamma'(t)|=|3ie^{it}|=3\) [1], so length \(=3\pi\) [1].`);
sq('ca-3-06','ca-3',3, L`Parametrise the closed contour that goes along \([0,2]\) and then anti-clockwise around the circle \(|z-1|=1\) back to 0 along the upper half (from 2 to 0).`,
 L`\(\gamma_1(t)=2t\), \(0\le t\le1\) [1]; \(\gamma_2(t)=1+e^{i\pi(t-1)}\), \(1\le t\le2\) [1]; check \(\gamma_2(1)=2\), \(\gamma_2(2)=0\) [1].`);

// ---------------------------------------------------------------- §4 Contour integration
key('ca-4', [L`\(\int_a^bg(t)\,dt=\int_a^bu\,dt+i\int_a^bv\,dt\) for \(g=u+iv\).`,
  L`\(\int_\gamma f(z)\,dz=\int_a^bf(\gamma(t))\,\gamma'(t)\,dt\).`,
  'Parametrise, differentiate, substitute, integrate. Split piecewise contours.']);
sq('ca-4-01','ca-4',3, L`Evaluate \(\displaystyle\int_0^1(1+it)^2\,dt\).`,
 L`\((1+it)^2=1-t^2+2it\) [1]; \(\int_0^1(1-t^2)\,dt=\frac23\), \(\int_0^12t\,dt=1\) [1]; answer \(\frac23+i\) [1].`);
sq('ca-4-02','ca-4',3, L`Find \(\int_\gamma z^2\,dz\) where \(\gamma(t)=(1-t)5+6t\), \(0\le t\le1\).`,
 L`\(\gamma(t)=5+t\), \(\gamma'(t)=1\) [1]; \(\int_0^1(5+t)^2\,dt\) [1] \(=\frac{6^3-5^3}{3}=\frac{91}{3}\) [1].`);
sq('ca-4-03','ca-4',3, L`Evaluate \(\int_T\bar z\,dz\), where \(T\) is the anti-clockwise unit circle.`,
 L`\(\gamma(t)=e^{it}\), \(\gamma'=ie^{it}\), \(\bar\gamma=e^{-it}\) [1]; \(\int_0^{2\pi}e^{-it}ie^{it}\,dt\) [1] \(=2\pi i\) [1].`);
sq('ca-4-04','ca-4',3, L`Evaluate \(\int_\gamma\operatorname{Re}z\,dz\) along the segment \([0,1+i]\).`,
 L`\(\gamma(t)=t(1+i)\), \(\gamma'=1+i\), \(\operatorname{Re}\gamma=t\) [1]; \(\int_0^1t(1+i)\,dt\) [1] \(=\frac{1+i}{2}\) [1].`);
sq('ca-4-05','ca-4',2, L`Give the definition of \(\int_\gamma f(z)\,dz\) for a contour \(\gamma:[a,b]\to\mathbb C\).`,
 L`\(\int_\gamma f(z)\,dz=\int_a^bf(\gamma(t))\gamma'(t)\,dt\) [1], for \(f\) continuous on \(\gamma([a,b])\) [1].`);
sq('ca-4-06','ca-4',2, L`By parametrising, show that \(\int_Tz\,dz=0\).`,
 L`\(\int_0^{2\pi}e^{it}\,ie^{it}\,dt=i\int_0^{2\pi}e^{2it}\,dt\) [1] \(=i\big[\frac{e^{2it}}{2i}\big]_0^{2\pi}=0\) [1].`);
sq('ca-4-07','ca-4',4, L`Let \(\gamma\) go from \(1\) to \(1+i\) and then from \(1+i\) to \(i\) in straight lines. Find \(\int_\gamma\operatorname{Re}z\,dz\).`,
 L`\(\gamma_1(t)=1+it\), \(\gamma_1'=i\), \(\operatorname{Re}=1\): \(\int_0^1i\,dt=i\) [2]. \(\gamma_2(t)=(1-t)+i\), \(\gamma_2'=-1\), \(\operatorname{Re}=1-t\): \(\int_0^1-(1-t)\,dt=-\frac12\) [1]. Total \(-\frac12+i\) [1].`);

// ---------------------------------------------------------------- §5 Complex differentiation
key('ca-5', [L`\(f'(z)=\lim_{\delta z\to0}\frac{f(z+\delta z)-f(z)}{\delta z}\) — \(\delta z\) approaches 0 from every direction.`,
  L`Cauchy–Riemann: \(u_x=v_y\), \(u_y=-v_x\) (necessary). With continuous partials they are sufficient (Theorem 5.12).`,
  L`Analytic (holomorphic) on an open \(U\): complex differentiable at every point of \(U\).`,
  L`\((e^z)'=e^z\), \((\cos z)'=-\sin z\), \((\sin z)'=\cos z\).`]);
sq('ca-5-01','ca-5',3, L`Using the definition, show that \(f(z)=z^2\) is complex differentiable with \(f'(z)=2z\).`,
 L`\(\frac{(z+\delta z)^2-z^2}{\delta z}=\frac{2z\delta z+(\delta z)^2}{\delta z}\) [1] \(=2z+\delta z\) [1] \(\to2z\) as \(\delta z\to0\) [1].`);
sq('ca-5-02','ca-5',2, L`State the Cauchy–Riemann equations for \(f=u+iv\).`,
 L`\(\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}\) [1] and \(\frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}\) [1].`);
sq('ca-5-03','ca-5',2, L`Show that \(f(z)=\bar z\) is not complex differentiable anywhere.`,
 L`\(u=x\), \(v=-y\) [1]; \(u_x=1\ne-1=v_y\), so the CR equations fail at every point [1].`);
sq('ca-5-04','ca-5',3, L`Show that \(f(x+iy)=x^2-y^2+2ixy\) is analytic on \(\mathbb C\) and find \(f'\).`,
 L`\(u_x=2x=v_y\), \(u_y=-2y=-v_x\) [1]; partials continuous, so \(f\) is differentiable everywhere (Theorem 5.12) [1]; \(f=z^2\), \(f'=u_x+iv_x=2x+2iy=2z\) [1].`);
sq('ca-5-05','ca-5',3, L`Where is \(f(z)=|z|^2\) complex differentiable? Is it analytic anywhere?`,
 L`\(u=x^2+y^2\), \(v=0\): CR gives \(2x=0\), \(2y=0\) [1], so only \(z=0\) (partials continuous, so differentiable there) [1]. Not analytic anywhere: no open set of differentiability [1].`);
sq('ca-5-06','ca-5',4, L`(Example 5.11) Where is \(f(z)=x\sin y-i\cos y\) complex differentiable? Is it analytic anywhere?`,
 L`\(u=x\sin y\), \(v=-\cos y\) [1]. \(u_x=\sin y=v_y\) always; \(u_y=x\cos y\) and \(-v_x=0\), so need \(x\cos y=0\) [1]. Differentiable exactly on the line \(x=0\) and the lines \(y=\frac\pi2+k\pi\) [1]. These contain no open set, so \(f\) is analytic nowhere [1].`);
sq('ca-5-07','ca-5',2, L`Using \(\sin z=\frac1{2i}(e^{iz}-e^{-iz})\), show that \((\sin z)'=\cos z\).`,
 L`\((\sin z)'=\frac1{2i}(ie^{iz}+ie^{-iz})\) [1] \(=\frac12(e^{iz}+e^{-iz})=\cos z\) [1].`);
sq('ca-5-08','ca-5',2, L`Is \(D=\{z:|z|\le1\}\) open? Justify.`,
 L`No [1]: for \(|z_0|=1\) every disc centred at \(z_0\) contains points with \(|z|>1\), so it is not contained in \(D\) [1].`);

// ---------------------------------------------------------------- §6 Fundamental Theorem of Calculus
key('ca-6', [L`If \(F'=f\) on an open \(U\supset\gamma\), then \(\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a))\).`,
  L`So for a closed contour, \(\int_\gamma f\,dz=0\) whenever \(f\) has an antiderivative on \(U\).`,
  L`\(1/z\) has no antiderivative on \(\mathbb C\setminus\{0\}\) — which is why \(\int_T\frac{dz}{z}\ne0\).`]);
sq('ca-6-01','ca-6',2, L`\(\gamma\) is any contour from \(i\) to \(1\). Find \(\int_\gamma z^2\,dz\).`,
 L`\(F=\frac13z^3\) [1]; \(\frac13(1-i^3)=\frac{1+i}{3}\) [1].`);
sq('ca-6-02','ca-6',2, L`\(\gamma\) is any contour from \(0\) to \(i\pi\). Find \(\int_\gamma e^z\,dz\).`,
 L`\(F=e^z\) [1]; \(e^{i\pi}-e^0=-2\) [1].`);
sq('ca-6-03','ca-6',2, L`Let \(\gamma\) be any closed contour not passing through 0. Show \(\int_\gamma z^{-2}\,dz=0\).`,
 L`\(F(z)=-1/z\) is holomorphic on \(\mathbb C\setminus\{0\}\) with \(F'=z^{-2}\) [1]; by Corollary 6.6 the integral over a closed contour is 0 [1].`);
sq('ca-6-04','ca-6',2, L`\(\gamma\) is any contour from \(0\) to \(i\). Find \(\int_\gamma z\,e^{z^2}\,dz\).`,
 L`\(F=\frac12e^{z^2}\) [1]; \(\frac12(e^{-1}-1)\) [1].`);
sq('ca-6-05','ca-6',2, L`Why does the Fundamental Theorem of Calculus not show that \(\int_T\frac{dz}{z}=0\)?`,
 L`It needs an antiderivative holomorphic on an open set containing \(T\) [1]; \(\log z\) is multivalued, and \(1/z\) has no (single-valued) antiderivative on \(\mathbb C\setminus\{0\}\) [1].`);
sq('ca-6-06','ca-6',2, L`\(\gamma\) is any contour from \(0\) to \(1+i\). Find \(\int_\gamma\cos z\,dz\).`,
 L`\(F=\sin z\) [1]; answer \(\sin(1+i)\) [1].`);

// ---------------------------------------------------------------- §7 Winding numbers (Possible)
key('ca-7', [L`\(n(\gamma;w)=\frac1{2\pi i}\int_\gamma\frac{dz}{z-w}\), an integer: how many times \(\gamma\) winds anti-clockwise round \(w\).`,
  L`\(\int_Tz^n\,dz=0\) for \(n\ne-1\), and \(2\pi i\) for \(n=-1\).`,
  L`Real integrals over \([0,2\pi]\): put \(z=e^{i\theta}\), \(d\theta=\frac{dz}{iz}\), \(\cos\theta=\frac{z+z^{-1}}2\), \(\sin\theta=\frac{z-z^{-1}}{2i}\).`]);
sq('ca-7-01','ca-7',2, L`Define the winding number \(n(\gamma;w)\).`,
 L`For a closed contour \(\gamma\) and \(w\notin\gamma\) [1]: \(n(\gamma;w)=\frac1{2\pi i}\int_\gamma\frac{dz}{z-w}\) [1].`);
sq('ca-7-02','ca-7',2, L`Let \(\gamma(t)=e^{2\pi int}\), \(0\le t\le1\), \(n\in\mathbb Z\setminus\{0\}\). Find \(\int_\gamma\frac{dz}{z}\).`,
 L`\(\gamma'=2\pi in\,e^{2\pi int}\) [1]; \(\int_0^12\pi in\,dt=2\pi in\) [1].`);
sq('ca-7-03','ca-7',2, L`Evaluate \(\int_T\left(z^3+\frac4z-\frac2{z^2}\right)dz\).`,
 L`Only \(z^{-1}\) contributes (Theorem 7.9) [1]: \(4\cdot2\pi i=8\pi i\) [1].`);
sq('ca-7-04','ca-7',4, L`(Example 7.8) Evaluate \(\displaystyle\int_0^{2\pi}\frac{d\theta}{5+4\cos\theta}\) by contour integration.`,
 L`\(z=e^{i\theta}\): integral becomes \(\frac1i\int_T\frac{dz}{2z^2+5z+2}\) [1]. Roots \(-\frac12,-2\); only \(-\frac12\) inside [1]. \(\frac{1}{2z^2+5z+2}=\frac{1}{2(z+2)(z+\frac12)}\); Cauchy/residue at \(-\frac12\) gives \(\frac1i\cdot2\pi i\cdot\frac{1}{2\cdot\frac32}\) [1] \(=\frac{2\pi}3\) [1].`);
sq('ca-7-05','ca-7',4, L`Evaluate \(\displaystyle\int_0^{2\pi}\sin^2\theta\,d\theta\) by putting \(z=e^{i\theta}\).`,
 L`\(\sin^2\theta=-\frac14(z-z^{-1})^2\), \(d\theta=\frac{dz}{iz}\) [1]. Integral \(=-\frac{1}{4i}\int_T\big(z-2z^{-1}+z^{-3}\big)dz\) [1] \(=-\frac{1}{4i}(-2\cdot2\pi i)\) [1] \(=\pi\) [1].`);

// ---------------------------------------------------------------- §8 Closing contours
key('ca-8', [L`ML inequality: \(\left|\int_\gamma f\,dz\right|\le M\cdot\operatorname{length}(\gamma)\) when \(|f|\le M\) on \(\gamma\).`,
  L`On \(|z|=R\): \(|1+z^2|\ge R^2-1\) (reverse triangle inequality).`,
  L`Close \([-R,R]\) with the semicircle \(k_R\) (length \(\pi R\)), show \(\int_{k_R}\to0\), let \(R\to\infty\).`]);
sq('ca-8-01','ca-8',2, L`State the ML inequality (Theorem 8.1).`,
 L`If \(|f(z)|\le M\) for all \(z\) on the contour \(\gamma\) [1], then \(\left|\int_\gamma f(z)\,dz\right|\le M\cdot\operatorname{length}(\gamma)\) [1].`);
sq('ca-8-02','ca-8',3, L`Let \(k_R(t)=Re^{i\pi t}\), \(0\le t\le1\), \(R>1\). Show that \(\int_{k_R}\frac{dz}{1+z^2}\to0\) as \(R\to\infty\).`,
 L`On \(k_R\): \(|1+z^2|\ge|z|^2-1=R^2-1\) [1]. Length \(\pi R\), so \(\left|\int\right|\le\frac{\pi R}{R^2-1}\) [1] \(\to0\) [1].`);
sq('ca-8-03','ca-8',3, L`Show that \(\left|\int_{|z|=2}\frac{dz}{z^2+1}\right|\le\frac{4\pi}{3}\).`,
 L`On \(|z|=2\): \(|z^2+1|\ge4-1=3\) [1], so \(|f|\le\frac13\) [1]; length \(4\pi\) gives \(\le\frac{4\pi}{3}\) [1].`);
sq('ca-8-04','ca-8',4, L`Outline how closing the contour shows \(\displaystyle\int_{-\infty}^{\infty}\frac{dx}{1+x^2}=\pi\).`,
 L`Let \(\gamma_R=[-R,R]\) followed by \(k_R\) [1]. Only \(z=i\) is inside: \(\int_{\gamma_R}\frac{dz}{1+z^2}=2\pi i\cdot\frac{1}{2i}=\pi\) [1]. \(\int_{k_R}\to0\) by ML [1]. Hence \(\int_{-\infty}^\infty\frac{dx}{1+x^2}=\pi\) [1].`);

// ---------------------------------------------------------------- §9 Cauchy's Theorem
key('ca-9', [L`Starlike about \(z_0\): \([z_0,z]\subset U\) for all \(z\in U\).`,
  L`Cauchy's Theorem: \(f\) holomorphic on an open starlike \(U\) \(\Rightarrow\int_\gamma f\,dz=0\) for every closed contour \(\gamma\) in \(U\).`,
  L`Consequences: path independence; deformation of contours. Starlike matters: \(\int_T\frac{dz}{z}=2\pi i\) on \(\mathbb C\setminus\{0\}\).`]);
sq('ca-9-01','ca-9',2, L`State Cauchy's Theorem (Theorem 9.4).`,
 L`Let \(U\) be an open starlike set and \(f\) holomorphic on \(U\) [1]. Then \(\int_\gamma f(z)\,dz=0\) for every closed contour \(\gamma\) in \(U\) [1].`);
sq('ca-9-02','ca-9',2, L`Evaluate \(\int_Te^{z^2}\,dz\), justifying your answer.`,
 L`\(e^{z^2}\) is holomorphic on \(\mathbb C\), which is open and starlike [1], so the integral is \(0\) by Cauchy's Theorem [1].`);
sq('ca-9-03','ca-9',2, L`\(f(z)=1/z\) is holomorphic on \(\mathbb C\setminus\{0\}\) but \(\int_T\frac{dz}{z}=2\pi i\). Why does this not contradict Cauchy's Theorem?`,
 L`Cauchy's Theorem needs \(U\) starlike [1]; \(\mathbb C\setminus\{0\}\) is not starlike (the segment through 0 between \(z\) and \(-z\) leaves the set) [1].`);
sq('ca-9-04','ca-9',2, L`Evaluate \(\int_T\frac{dz}{z^2+4}\).`,
 L`Singularities at \(\pm2i\) lie outside \(D(0;2)\), on which \(f\) is holomorphic and which is starlike [1]; so the integral is \(0\) [1].`);
sq('ca-9-05','ca-9',2, L`Define what it means for \(U\subseteq\mathbb C\) to be starlike, and decide whether \(\mathbb C\setminus(-\infty,0]\) is starlike.`,
 L`\(U\) is starlike about \(z_0\) if \([z_0,z]\subset U\) for every \(z\in U\) [1]. \(\mathbb C\setminus(-\infty,0]\) is starlike about \(1\) [1].`);
sq('ca-9-06','ca-9',2, L`\(C_1,C_2\) are two contours from \(0\) to \(1+i\). Explain why \(\int_{C_1}z\sin z\,dz=\int_{C_2}z\sin z\,dz\).`,
 L`\(z\sin z\) is holomorphic on the starlike set \(\mathbb C\) [1]; \(C_1\) followed by \(C_2\) reversed is closed, so its integral is 0 (Corollary 9.7) [1].`);

// ---------------------------------------------------------------- §10 Cauchy's Integral Formula
key('ca-10', [L`\(\int_\gamma\frac{f(z)}{z-w}\,dz=2\pi i\,n(\gamma;w)\,f(w)\) for \(f\) holomorphic on open starlike \(U\supset\gamma\), \(w\notin\gamma\).`,
  L`Factor the denominator; put the factors with zeros outside \(\gamma\) into \(f\).`,
  'Values of a holomorphic f inside T are determined by its values on T.']);
sq('ca-10-01','ca-10',2, L`State Cauchy's Integral Formula.`,
 L`\(U\) open starlike, \(f\) holomorphic on \(U\), \(\gamma\) a closed contour in \(U\), \(w\in U\setminus\gamma\) [1]: \(\int_\gamma\frac{f(z)}{z-w}dz=2\pi i\,n(\gamma;w)f(w)\) [1].`);
sq('ca-10-02','ca-10',4, L`(Example 10.3) Evaluate \(\int_\gamma\frac{e^z}{z^2-\frac14}\,dz\), where \(\gamma\) is the anti-clockwise circle of radius 1 centred at 1.`,
 L`\(z^2-\frac14=(z-\frac12)(z+\frac12)\); only \(\frac12\) is inside \(\gamma\) [1]. Take \(f(z)=\frac{e^z}{z+\frac12}\), holomorphic on \(\{\operatorname{Re}z>-\frac12\}\) [1]. \(I=2\pi i\cdot f(\tfrac12)\) [1] \(=2\pi i\,e^{1/2}\) [1].`);
sq('ca-10-03','ca-10',3, L`Evaluate \(\int_{|z|=2}\frac{\cos z}{z-1}\,dz\) (anti-clockwise).`,
 L`\(f=\cos z\) holomorphic on \(\mathbb C\) [1]; \(n(\gamma;1)=1\) [1]; \(2\pi i\cos1\) [1].`);
sq('ca-10-04','ca-10',3, L`Evaluate \(\int_{|z-i|=1}\frac{dz}{z^2+1}\) (anti-clockwise).`,
 L`\(\frac{1}{z^2+1}=\frac{1/(z+i)}{z-i}\); only \(i\) inside [1]. \(f=\frac1{z+i}\) holomorphic near the disc [1]; \(2\pi i\cdot\frac{1}{2i}=\pi\) [1].`);
sq('ca-10-05','ca-10',4, L`(Example 7.7) Evaluate \(\int_T\frac{dz}{2z^2+5z+2}\).`,
 L`Roots \(-\frac12\) and \(-2\); only \(-\frac12\) inside \(T\) [1]. Write \(\frac{1}{2(z+2)(z+\frac12)}\), \(f=\frac{1}{2(z+2)}\) [1]. \(2\pi i\,f(-\tfrac12)=2\pi i\cdot\frac13\) [1] \(=\frac{2\pi i}{3}\) [1].`);
sq('ca-10-06','ca-10',2, L`Evaluate \(\int_T\frac{e^z}{z}\,dz\).`,
 L`Cauchy's Integral Formula with \(f=e^z\), \(w=0\), \(n(T;0)=1\) [1]: \(2\pi i\,e^0=2\pi i\) [1].`);

// ---------------------------------------------------------------- §11 Higher derivatives
key('ca-11', [L`Cauchy's Derivative Formula: \(n(\gamma;w)f^{(k)}(w)=\frac{k!}{2\pi i}\int_\gamma\frac{f(z)}{(z-w)^{k+1}}dz\).`,
  L`So \(\int_\gamma\frac{f(z)}{(z-w)^{k+1}}dz=\frac{2\pi i}{k!}n(\gamma;w)f^{(k)}(w)\).`]);
sq('ca-11-01','ca-11',2, L`State Cauchy's Derivative Formula.`,
 L`\(f\) holomorphic on open starlike \(U\), \(\gamma\) closed in \(U\), \(w\notin\gamma\) [1]: \(n(\gamma;w)f^{(k)}(w)=\frac{k!}{2\pi i}\int_\gamma\frac{f(z)}{(z-w)^{k+1}}dz\) [1].`);
sq('ca-11-02','ca-11',3, L`(Example 11.2) Find \(\int_\gamma\frac{e^{3z}}{(z-1)^3}\,dz\), where \(\gamma\) is the anti-clockwise circle \(|z|=2\).`,
 L`\(k=2\), \(f=e^{3z}\), \(w=1\) [1]; \(f''(1)=9e^3\) [1]; \(\frac{2\pi i}{2!}\cdot9e^3=9\pi e^3i\) [1].`);
sq('ca-11-03','ca-11',3, L`Evaluate \(\int_T\frac{\sin z}{z^2}\,dz\).`,
 L`\(k=1\), \(f=\sin z\), \(w=0\) [1]; \(f'(0)=\cos0=1\) [1]; \(2\pi i\) [1].`);
sq('ca-11-04','ca-11',3, L`Evaluate \(\int_{|z|=2}\frac{z^4}{(z-1)^2}\,dz\).`,
 L`\(k=1\), \(f=z^4\), \(w=1\) [1]; \(f'(1)=4\) [1]; \(2\pi i\cdot4=8\pi i\) [1].`);
sq('ca-11-05','ca-11',3, L`Evaluate \(\int_T\frac{e^z}{z^4}\,dz\).`,
 L`\(k=3\), \(f=e^z\) [1]; \(f'''(0)=1\) [1]; \(\frac{2\pi i}{3!}=\frac{\pi i}{3}\) [1].`);

// ---------------------------------------------------------------- §12 Liouville & FTA (Possible)
key('ca-12', ['Liouville: a bounded function that is complex differentiable on all of ℂ is constant.',
  L`Fundamental Theorem of Algebra: a degree-\(n\ge1\) polynomial has exactly \(n\) complex roots (with multiplicity).`]);
sq('ca-12-01','ca-12',2, L`State Liouville's Theorem.`,
 L`If \(f:\mathbb C\to\mathbb C\) is complex differentiable on \(\mathbb C\) [1] and bounded, then \(f\) is constant [1].`);
sq('ca-12-02','ca-12',2, L`Show that \(\sin z\) is unbounded on \(\mathbb C\).`,
 L`\(\sin(iy)=\frac{e^{-y}-e^{y}}{2i}=i\sinh y\) [1], and \(|\sinh y|\to\infty\) as \(y\to\infty\) [1]. (Consistent with Liouville: \(\sin\) is entire and non-constant.)`);
sq('ca-12-03','ca-12',3, L`(Example 12.3) Find all complex roots of \(x^3+x^2-2\).`,
 L`\(x=1\) is a root [1]; \(x^3+x^2-2=(x-1)(x^2+2x+2)\) [1]; roots \(1,\ -1\pm i\) [1].`);
sq('ca-12-04','ca-12',2, L`Use Liouville's Theorem to show that a non-constant polynomial \(P\) has a root.`,
 L`If \(P\) had no root, \(1/P\) would be entire [1] and bounded (since \(|P(z)|\to\infty\)), so constant by Liouville — contradiction [1].`);

// ---------------------------------------------------------------- §13 Power and Laurent series
key('ca-13', [L`\(\sum_{k\ge0}z^k=\frac1{1-z}\) for \(|z|<1\); for \(|z|>1\), \(\frac1{1-z}=-\sum_{n\ge1}z^{-n}\).`,
  L`Laurent series about \(a\): \(\sum_{n\in\mathbb Z}c_n(z-a)^n\), valid on an annulus \(r<|z-a|<R\).`,
  L`Taylor: \(f(z)=\sum\frac{f^{(n)}(c)}{n!}(z-c)^n\) on any disc \(D(c;R)\) where \(f\) is holomorphic.`,
  L`Method: rewrite as \(\frac{1}{1-q}\) with \(|q|<1\) in the required region; use partial fractions.`]);
sq('ca-13-01','ca-13',2, L`For which \(z\) does \(\sum_{k\ge0}z^k\) converge, and to what?`,
 L`Converges to \(\frac1{1-z}\) for \(|z|<1\) [1]; diverges for \(|z|\ge1\) since the terms do not tend to 0 [1].`);
sq('ca-13-02','ca-13',2, L`Find the Laurent expansion of \(\frac1{1-z}\) about 0 valid for \(|z|>1\).`,
 L`\(\frac1{1-z}=-\frac1z\cdot\frac{1}{1-1/z}\) [1] \(=-\sum_{n\ge1}z^{-n}\) [1].`);
sq('ca-13-03','ca-13',3, L`Find the Laurent expansion of \(\frac{1}{z(z-1)}\) valid for \(0<|z|<1\).`,
 L`\(\frac{1}{z(z-1)}=-\frac1z\cdot\frac1{1-z}\) [1] \(=-\frac1z\sum_{n\ge0}z^n\) [1] \(=-\frac1z-1-z-z^2-\dots\) [1].`);
sq('ca-13-04','ca-13',3, L`Find the Laurent expansion of \(\frac{1}{z(z-1)}\) valid for \(|z|>1\).`,
 L`\(\frac{1}{z(z-1)}=\frac{1}{z^2}\cdot\frac{1}{1-1/z}\) [1] \(=\frac1{z^2}\sum_{n\ge0}z^{-n}\) [1] \(=\sum_{n\ge2}z^{-n}\) [1].`);
sq('ca-13-05','ca-13',3, L`(Example 13.13) Find a power series in \((z+2)\) for \(\frac1{1-z}\) and its region of convergence.`,
 L`\(\frac{1}{1-z}=\frac{1}{3-(z+2)}=\frac13\cdot\frac{1}{1-\frac{z+2}{3}}\) [1] \(=\sum_{n\ge0}\frac{(z+2)^n}{3^{n+1}}\) [1], valid for \(|z+2|<3\) [1].`);
sq('ca-13-06','ca-13',3, L`(Example 13.17) Expand \(e^z\) in a power series about \(i\pi\).`,
 L`\(f^{(n)}=e^z\), \(f^{(n)}(i\pi)=e^{i\pi}=-1\) [1]; \(e^z=-\sum_{n\ge0}\frac{(z-i\pi)^n}{n!}\) [1], valid for all \(z\) [1].`);
sq('ca-13-07','ca-13',2, L`Give an example showing that \(z_m\to0\) does not imply that \(\sum z_m\) converges.`,
 L`\(z_m=\frac1m\) [1]: \(\frac1m\to0\) but the harmonic series diverges [1].`);
sq('ca-13-08','ca-13',4, L`Find the Laurent expansion of \(\frac{1}{(z-1)(z-2)}\) valid for \(1<|z|<2\).`,
 L`Partial fractions \(\frac{1}{z-2}-\frac{1}{z-1}\) [1]. \(\frac1{z-2}=-\frac12\sum_{n\ge0}\left(\frac z2\right)^n\) (as \(|z|<2\)) [1]. \(-\frac1{z-1}=-\frac1z\sum_{n\ge0}z^{-n}\) (as \(|z|>1\)) [1]. Sum: \(-\sum_{n\ge1}z^{-n}-\sum_{n\ge0}\frac{z^n}{2^{n+1}}\) [1].`);

// ---------------------------------------------------------------- §14 Singularities & residues
key('ca-14', [L`From the Laurent series about \(p\): removable (no negative powers), pole of order \(N\) (lowest power \(-N\)), essential (infinitely many negative powers).`,
  L`If \(f=\frac{g(z)}{(z-p)^n}\), \(g\) holomorphic with \(g(p)\ne0\), then \(p\) is a pole of order \(n\).`,
  L`\(\operatorname{Res}_{z=p}f=a_{-1}\). Simple pole: \(\lim_{z\to p}(z-p)f(z)\). Order 2: \(\lim_{z\to p}[(z-p)^2f]'\). Order \(m\): \(\frac1{(m-1)!}\lim\frac{d^{m-1}}{dz^{m-1}}[(z-p)^mf]\).`]);
sq('ca-14-01','ca-14',3, L`Define a removable singularity, a pole of order \(N\) and an essential singularity in terms of the Laurent expansion \(\sum a_n(z-p)^n\).`,
 L`Removable: \(a_n=0\) for all \(n<0\) [1]. Pole of order \(N\): \(a_{-N}\ne0\), \(a_{-n}=0\) for \(n>N\) [1]. Essential: \(a_n\ne0\) for infinitely many \(n<0\) [1].`);
sq('ca-14-02','ca-14',3, L`Classify the singularity at \(0\) of (a) \(\frac{\sin z}{z}\), (b) \(e^{1/z}\), (c) \(\frac{1}{z^3}\).`,
 L`(a) \(1-\frac{z^2}{3!}+\dots\): removable [1]. (b) \(\sum\frac{1}{n!z^n}\): essential [1]. (c) pole of order 3 [1].`);
sq('ca-14-03','ca-14',3, L`(Example 14.8) Find the poles and their orders of \(f(z)=\dfrac{(z^2-1)e^{2z}}{(z+2)^3(z-3)}\).`,
 L`At \(-2\): \(g=\frac{(z^2-1)e^{2z}}{z-3}\) is holomorphic near \(-2\) with \(g(-2)=\frac{3e^{-4}}{-5}\ne0\), so a pole of order 3 [2]. At \(3\): numerator \(8e^6\ne0\), so a simple pole [1].`);
sq('ca-14-04','ca-14',2, L`(Example 14.15) Find \(\operatorname{Res}_{z=3}\dfrac{\cos\pi z}{z-3}\).`,
 L`Simple pole since \(\cos3\pi\ne0\) [1]; residue \(\lim_{z\to3}\cos\pi z=\cos3\pi=-1\) [1].`);
sq('ca-14-05','ca-14',3, L`(Example 14.17) Find \(\operatorname{Res}_{z=1}\dfrac{z^3}{(z-1)^2}\).`,
 L`Pole of order 2 (\(g=z^3\), \(g(1)=1\ne0\)) [1]; residue \(=\lim_{z\to1}(z^3)'\) [1] \(=3\) [1].`);
sq('ca-14-06','ca-14',2, L`Find \(\operatorname{Res}_{z=0}e^{1/z}\).`,
 L`\(e^{1/z}=1+\frac1z+\frac{1}{2!z^2}+\dots\) [1]; coefficient of \(z^{-1}\) is \(1\) [1].`);
sq('ca-14-07','ca-14',2, L`Find \(\operatorname{Res}_{z=i}\dfrac{1}{z^2+1}\).`,
 L`Simple pole: \(\lim_{z\to i}\frac{z-i}{(z-i)(z+i)}\) [1] \(=\frac1{2i}=-\frac i2\) [1].`);
sq('ca-14-08','ca-14',3, L`Find \(\operatorname{Res}_{z=0}\dfrac{e^z}{z^3}\).`,
 L`Pole of order 3 [1]; residue \(=\frac{1}{2!}\frac{d^2}{dz^2}e^z\big|_0\) (or read off the \(z^2\) term of \(e^z\)) [1] \(=\frac12\) [1].`);

// ---------------------------------------------------------------- §15 Residue Theorem
key('ca-15', [L`\(\int_\gamma f\,dz=2\pi i\sum_k n(\gamma;p_k)\operatorname{Res}_{z=p_k}f\) for \(f\) holomorphic on starlike \(U\) except isolated singularities \(p_k\notin\gamma\).`,
  'Find the singularities, decide which are inside γ, compute those residues, add up.']);
sq('ca-15-01','ca-15',2, L`State the Residue Theorem.`,
 L`\(U\) open starlike, \(f\) holomorphic on \(U\) except isolated singularities \(p_1,\dots,p_n\), \(\gamma\) a closed contour in \(U\) avoiding them [1]: \(\int_\gamma f\,dz=2\pi i\sum_kn(\gamma;p_k)\operatorname{Res}_{z=p_k}f\) [1].`);
sq('ca-15-02','ca-15',4, L`(Example 15.2) Evaluate \(\displaystyle\int_{|z|=2}\frac{4-3z}{(z^2-1)(z-3)}\,dz\) (anti-clockwise).`,
 L`Simple poles at \(\pm1\) inside, \(3\) outside [1]. \(\operatorname{Res}_{z=1}=\frac{4-3}{2\cdot(-2)}=-\frac14\) [1]; \(\operatorname{Res}_{z=-1}=\frac{7}{(-2)(-4)}=\frac78\) [1]. Integral \(=2\pi i\cdot\frac58=\frac{5\pi i}{4}\) [1].`);
sq('ca-15-03','ca-15',4, L`Evaluate \(\displaystyle\int_{|z|=2}\frac{\sin z}{z^2+1}\,dz\) (anti-clockwise).`,
 L`Simple poles at \(\pm i\), both inside [1]. \(\operatorname{Res}_{i}=\frac{\sin i}{2i}=\frac{\sinh1}{2}\) [1]; \(\operatorname{Res}_{-i}=\frac{\sin(-i)}{-2i}=\frac{\sinh1}{2}\) [1]. Integral \(=2\pi i\sinh1=\pi i(e-e^{-1})\) [1].`);
sq('ca-15-04','ca-15',4, L`Evaluate \(\displaystyle\int_{|z|=3}\frac{dz}{z(z-1)(z-2)}\).`,
 L`All three simple poles inside [1]. Residues: at 0, \(\frac{1}{(-1)(-2)}=\frac12\); at 1, \(\frac{1}{1\cdot(-1)}=-1\); at 2, \(\frac{1}{2\cdot1}=\frac12\) [2]. Sum 0, so the integral is \(0\) [1].`);
sq('ca-15-05','ca-15',3, L`Evaluate \(\displaystyle\int_T\frac{e^z}{z(z-2)}\,dz\).`,
 L`Only \(z=0\) is inside \(T\) [1]; \(\operatorname{Res}_{z=0}=\frac{e^0}{0-2}=-\frac12\) [1]; integral \(=-\pi i\) [1].`);
sq('ca-15-06','ca-15',3, L`Evaluate \(\displaystyle\int_{|z|=2}\frac{z}{(z-1)^2}\,dz\).`,
 L`Pole of order 2 at 1, inside [1]; residue \(=\lim_{z\to1}(z)'=1\) [1]; integral \(=2\pi i\) [1].`);

// ---------------------------------------------------------------- §16 Real integrals & Jordan's lemma
key('ca-16', [L`\(\mathrm{PV}\int_{-\infty}^\infty f=\lim_{R\to\infty}\int_{-R}^Rf\); for even \(f\) it equals the improper integral.`,
  L`Close with the upper semicircle \(C_R\); use residues at poles in \(\operatorname{Im}z>0\); show \(\int_{C_R}\to0\) (ML, or Jordan's lemma for \(e^{iaz}\), \(a>0\)).`,
  L`For \(\cos ax\) or \(\sin ax\): integrate \(f(z)e^{iaz}\) and take real or imaginary parts.`]);
sq('ca-16-01','ca-16',5, L`(Example 16.6) Show that \(\displaystyle\int_{-\infty}^\infty\frac{\cos ax}{x^2+1}\,dx=\pi e^{-a}\) for \(a>0\).`,
 L`Consider \(\frac{e^{iaz}}{z^2+1}\) on \([-R,R]\cup C_R\) [1]. Only \(z=i\) inside: \(\operatorname{Res}=\frac{e^{-a}}{2i}\) [1], so the contour integral is \(\pi e^{-a}\) [1]. \(\int_{C_R}\to0\) by Jordan's lemma (or ML: \(|e^{iaz}|\le1\) on \(C_R\)) [1]. Take the real part: \(\pi e^{-a}\) [1].`);
sq('ca-16-02','ca-16',2, L`Show that \(\mathrm{PV}\int_{-\infty}^\infty x\,dx=0\), and explain why \(\int_{-\infty}^\infty x\,dx\) does not exist.`,
 L`\(\int_{-R}^Rx\,dx=0\) for every \(R\) [1]; but \(\int_0^\infty x\,dx\) diverges, so the improper integral (independent limits) does not exist [1].`);
sq('ca-16-03','ca-16',4, L`Evaluate \(\displaystyle\int_{-\infty}^\infty\frac{dx}{x^2+4}\) by residues.`,
 L`Pole \(2i\) in the upper half-plane [1]; \(\operatorname{Res}=\frac{1}{4i}\) [1]; \(\int_{C_R}\to0\) by ML [1]; answer \(2\pi i\cdot\frac{1}{4i}=\frac\pi2\) [1].`);
sq('ca-16-04','ca-16',5, L`Evaluate \(\displaystyle\int_{-\infty}^\infty\frac{dx}{(x^2+1)^2}\).`,
 L`Pole of order 2 at \(i\) [1]. \(\operatorname{Res}=\lim\frac{d}{dz}(z+i)^{-2}=-2(2i)^{-3}\) [1] \(=\frac{1}{4i}\) [1]. Semicircle integral \(\to0\) [1]. Answer \(2\pi i\cdot\frac1{4i}=\frac\pi2\) [1].`);
sq('ca-16-05','ca-16',5, L`(Example 16.7) Evaluate \(\displaystyle\int_{-\infty}^\infty\frac{x\sin2x}{x^2+3}\,dx\).`,
 L`Use \(f(z)e^{2iz}\), \(f=\frac{z}{z^2+3}\); pole \(i\sqrt3\) in the upper half-plane [1]. \(\operatorname{Res}=\frac{i\sqrt3\,e^{-2\sqrt3}}{2i\sqrt3}=\frac{e^{-2\sqrt3}}{2}\) [1]. Jordan's lemma (\(|f|\to0\) on \(C_R\)) [1]. \(\mathrm{PV}\int\frac{xe^{2ix}}{x^2+3}dx=\pi ie^{-2\sqrt3}\) [1]; imaginary part: \(\pi e^{-2\sqrt3}\) [1].`);
sq('ca-16-06','ca-16',2, L`Why is Jordan's lemma needed for \(\int\frac{x\,e^{2ix}}{x^2+3}dx\) rather than the ML inequality?`,
 L`On \(C_R\), \(\left|\frac{z}{z^2+3}\right|\sim\frac1R\) while the length is \(\pi R\), so ML only gives a bounded estimate [1]; Jordan's lemma uses the decay of \(e^{2iz}\) in the upper half-plane to show the integral \(\to0\) [1].`);

// ---------------------------------------------------------------- §17 Fourier transforms via residues
key('ca-17', [L`Integrals \(\int_{-\infty}^\infty f(x)e^{\pm ikx}dx\) are evaluated like §16: close in the half-plane where the exponential decays.`,
  L`\(e^{-ikz}\) decays for \(\operatorname{Im}z<0\) when \(k>0\): close in the lower half-plane (clockwise, so a minus sign).`]);
sq('ca-17-01','ca-17',4, L`Evaluate \(\displaystyle\int_{-\infty}^\infty\frac{e^{ikx}}{x^2+1}\,dx\) for \(k>0\).`,
 L`\(e^{ikz}\) decays in the upper half-plane, close there [1]; pole \(i\), \(\operatorname{Res}=\frac{e^{-k}}{2i}\) [1]; semicircle integral \(\to0\) [1]; answer \(\pi e^{-k}\) [1].`);
sq('ca-17-02','ca-17',3, L`Evaluate \(\displaystyle\int_{-\infty}^\infty\frac{e^{-ikx}}{x^2+1}\,dx\) for \(k>0\), and hence give the result for all real \(k\).`,
 L`Close in the lower half-plane (clockwise): pole \(-i\), \(\operatorname{Res}=\frac{e^{-k}}{-2i}\), integral \(=-2\pi i\cdot\frac{e^{-k}}{-2i}=\pi e^{-k}\) [2]. In general \(\pi e^{-|k|}\) [1].`);
sq('ca-17-03','ca-17',2, L`For \(k>0\), in which half-plane must you close the contour to evaluate \(\int f(x)e^{-ikx}dx\), and why?`,
 L`Lower half-plane [1]: \(|e^{-ikz}|=e^{k\operatorname{Im}z}\) is small when \(\operatorname{Im}z<0\) [1].`);

// ---------------------------------------------------------------- §18 Laplace transforms (Possible)
key('ca-18', [L`\(F(s)=\int_0^\infty e^{-st}f(t)\,dt\); inverse by residues: \(f(t)=\sum\operatorname{Res}\,e^{st}F(s)\) over the poles of \(F\).`]);
sq('ca-18-01','ca-18',2, L`(Example 18.1) Find \(f(t)\) with Laplace transform \(F(s)=\dfrac{12}{s+8}\).`,
 L`Simple pole at \(-8\) [1]; \(f(t)=\operatorname{Res}_{s=-8}\frac{12e^{st}}{s+8}=12e^{-8t}\) [1].`);
sq('ca-18-02','ca-18',2, L`Find the Laplace transform of \(f(t)=1\).`,
 L`\(\int_0^\infty e^{-st}dt=\left[-\frac{e^{-st}}{s}\right]_0^\infty\) [1] \(=\frac1s\) for \(\operatorname{Re}s>0\) [1].`);
sq('ca-18-03','ca-18',3, L`Use residues to invert \(F(s)=\dfrac{1}{s^2+1}\).`,
 L`Poles \(\pm i\) [1]. Residues of \(\frac{e^{st}}{s^2+1}\): \(\frac{e^{it}}{2i}\) and \(\frac{e^{-it}}{-2i}\) [1]; sum \(\sin t\) [1].`);
})();
