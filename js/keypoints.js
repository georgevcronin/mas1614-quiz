// ================================================================
// KEY POINTS — shown on the Present and Fix-the-gaps screens. LaTeX throughout.
// ================================================================
(function(){
const L = String.raw;
const KEYS = {
// ---------------------------------------------------------------- Probability / Stats
'prob-1-events': [
  L`A probability space is \((\Omega,\mathcal F,P)\): \(0\le P(A)\le1\), \(P(\Omega)=1\), and \(P(\bigcup A_i)=\sum P(A_i)\) for pairwise disjoint \(A_i\).`,
  L`Inclusion–exclusion: \(P(A\cup B)=P(A)+P(B)-P(A\cap B)\).`,
  L`Conditional probability: \(P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}\) for \(P(B)>0\).`,
  L`Total probability: for a partition \(B_1,\dots,B_n\), \(P(A)=\sum_i P(A\mid B_i)P(B_i)\).`,
  L`Bayes: \(P(B\mid A)=\dfrac{P(A\mid B)P(B)}{P(A\mid B)P(B)+P(A\mid B^c)P(B^c)}\).`,
  L`Independent: \(P(A\cap B)=P(A)P(B)\). Mutually exclusive (\(A\cap B=\varnothing\)) is different — disjoint events with positive probability are never independent.`],
'prob-1-rvs': [
  L`A random variable is a function \(X:\Omega\to\mathbb R\).`,
  L`Discrete: pmf \(p(k)=P(X=k)\ge0\) with \(\sum_k p(k)=1\).`,
  L`cdf \(F(s)=P(X\le s)\): increasing, \(F(-\infty)=0\), \(F(\infty)=1\); a step function for discrete \(X\).`,
  L`Continuous: \(F(s)=\int_{-\infty}^s f(x)\,dx\) and \(f=F'\). A density is not a probability — \(f(x)\) can exceed 1.`,
  L`\(P(a<X\le b)=F(b)-F(a)\).`],
'prob-1-moments': [
  L`\(E(X)=\sum_k kP(X=k)\) or \(\int xf(x)\,dx\); \(E[g(X)]=\int g(x)f(x)\,dx\).`,
  L`\(\operatorname{Var}(X)=E[(X-\mu)^2]=E(X^2)-(EX)^2\).`,
  L`\(E(aX+b)=aE(X)+b\) and \(\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)\).`,
  L`\(\operatorname{Cov}(X,Y)=E(XY)-E(X)E(Y)\); \(\operatorname{Corr}=\operatorname{Cov}/(\sigma_X\sigma_Y)\in[-1,1]\).`,
  L`Independent \(\Rightarrow\operatorname{Cov}=0\), but \(\operatorname{Cov}=0\not\Rightarrow\) independent.`,
  L`\(\operatorname{Var}(X+Y)=\operatorname{Var}X+\operatorname{Var}Y+2\operatorname{Cov}(X,Y)\).`],
'prob-1-dists': [
  L`\(\mathrm{Bernoulli}(p)\): mean \(p\), var \(p(1-p)\). \(\mathrm{Bin}(n,p)\): mean \(np\), var \(np(1-p)\).`,
  L`\(\mathrm{Poisson}(\lambda)\): mean = var = \(\lambda\). \(\mathrm{Exp}(\lambda)\): mean \(1/\lambda\), var \(1/\lambda^2\), \(F(x)=1-e^{-\lambda x}\).`,
  L`\(\mathrm{U}(a,b)\): mean \(\tfrac{a+b}2\), var \(\tfrac{(b-a)^2}{12}\). \(N(\mu,\sigma^2)\): mean \(\mu\), var \(\sigma^2\).`,
  L`\(\mathrm{Gamma}(k,\theta)\): mean \(k\theta\), var \(k\theta^2\). \(\mathrm{Beta}(\alpha,\beta)\): mean \(\tfrac{\alpha}{\alpha+\beta}\). \(\chi^2_k\): mean \(k\), var \(2k\). Cauchy: no mean.`,
  L`MGF \(M_X(t)=E[e^{tX}]\) and \(M_X^{(n)}(0)=E(X^n)\). Poisson: \(M(t)=e^{\lambda(e^t-1)}\).`,
  L`Independent \(X,Y\): \(M_{X+Y}(t)=M_X(t)M_Y(t)\).`],
'stat-2': [
  L`Inference is "inverse probability": observe \(\underline x\), learn about the unknown \(\theta\).`,
  L`Random sample \(\underline X=(X_1,\dots,X_n)\) (before observation) vs data \(\underline x=(x_1,\dots,x_n)\) (fixed numbers).`,
  L`Random sample: \(X_1,\dots,X_n\overset{\text{iid}}{\sim}\mathrm{Distribution}(\theta)\). This does not guarantee representativeness — selection bias can break it.`,
  L`A statistical model is a family of distributions indexed by \(\theta\in\Theta\); e.g. \(N(\mu,\sigma^2)\) has \(\Theta=\mathbb R\times(0,\infty)\).`,
  L`Parameter (population feature, e.g. \(p,\mu\)) \(\ne\) statistic (computed from the sample, e.g. \(\bar X\)).`,
  'Data types: univariate/multivariate; continuous, discrete (counts), categorical nominal/ordinal.'],
'stat-3': [
  L`Frequentist: \(\theta\) fixed but unknown; probability describes data and procedures under repeated sampling.`,
  L`Bayesian: prior \(\pi(\theta)\) updated to posterior \(\pi(\theta\mid\text{data})\).`,
  L`95% confidence interval: the procedure covers the fixed \(\theta\) in 95% of repeated samples.`,
  L`95% credible interval: \(P(\theta\in[L,U]\mid\underline x)=0.95\).`,
  'Examined tasks: point estimation, interval estimation, hypothesis testing. Prediction is not examined.',
  L`Failing to reject \(H_0\) does not prove \(H_0\).`],
// ---------------------------------------------------------------- Linear Algebra
'la-1.1': [
  L`A field \(F\): \(+\) and \(\cdot\) commutative, associative, distributive, with \(0\), \(1\), additive inverses, and multiplicative inverses for every nonzero element.`,
  L`Fields: \(\mathbb Q,\mathbb R,\mathbb C\), and \(\mathbb Z_p\) for \(p\) prime.`,
  L`Not fields: \(\mathbb N\) (no 0, negatives or reciprocals), \(\mathbb Z\) (2 has no inverse), \(\mathrm{Mat}_{n\times n}\) (not commutative; singular matrices).`],
'la-1.2': [
  L`A vector space over \(F\): a set \(V\) with vector addition and scalar multiplication satisfying 8 axioms (commutativity, associativity, zero, inverses, \(1\bullet u=u\), \(\alpha\bullet(\beta\bullet u)=(\alpha\beta)\bullet u\), two distributive laws).`,
  L`Examples: \(F^n\), \(\mathrm{Mat}_{m\times n}(F)\), \(F[x]\), \(F^\infty\), functions \(\mathbb R\to\mathbb R\).`,
  L`Consequences: \(\mathbf0\) and inverses are unique; \(0\bullet u=\mathbf0\), \(\lambda\bullet\mathbf0=\mathbf0\), \((-1)\bullet u=-u\).`],
'la-1.3': [
  L`Subspace test: nonempty \(W\subseteq V\) is a subspace iff closed under addition and scalar multiplication.`,
  L`Quick check: \(\mathbf0\notin W\Rightarrow\) not a subspace (but \(\mathbf0\in W\) alone is not enough).`,
  L`Examples: \(\{\mathbf0\}\), \(V\), \(\mathbb R_n[x]\le\mathbb R[x]\), \(\operatorname{null}(A)=\{x:Ax=\mathbf0\}\le F^n\).`,
  L`\(U+W=\{u+w\}\) is the smallest subspace containing \(U\) and \(W\).`],
'la-1.4': [
  L`\(\operatorname{span}\{v_1,\dots,v_n\}=\{a_1v_1+\dots+a_nv_n\}\); \(\operatorname{span}\varnothing=\{\mathbf0\}\).`,
  'The span is the smallest subspace containing the vectors.',
  L`\(b\in\operatorname{span}\{v_1,\dots,v_n\}\iff Ax=b\) is consistent, where \(A=(v_1:\dots:v_n)\).`,
  L`\(\operatorname{col}(A)\) = span of the columns; \(b\in\operatorname{col}(A)\iff Ax=b\) has a solution.`],
'la-1.5': [
  L`\(\{v_1,\dots,v_n\}\) is independent if \(a_1v_1+\dots+a_nv_n=\mathbf0\Rightarrow a_1=\dots=a_n=0\).`,
  'Independent ⟺ every vector in the span has unique coefficients.',
  L`Linear Dependence Lemma: if \(S\) is dependent, some \(v_j\in\operatorname{span}(S\setminus\{v_j\})\) and removing it keeps the span.`,
  L`Columns of \(A\) independent \(\iff\operatorname{null}(A)=\{\mathbf0\}\) (for square \(A\): \(\det A\ne0\)).`,
  L`Any set containing \(\mathbf0\) is dependent.`],
'la-1.6': [
  'A basis is a linearly independent spanning set: unique coordinates for every vector.',
  L`Standard basis \(e_1,\dots,e_n\) of \(F^n\); \(\{1,x,\dots,x^n\}\) for \(\mathbb R_n[x]\).`,
  'Basis reduction theorem: any finite spanning set contains a basis.',
  L`Finite dimensional = finite spanning set \(\Rightarrow\) has a basis. \(F[x]\) and \(F^\infty\) are infinite dimensional.`],
'la-1.7': [
  L`Exchange Theorem: \(\{v_1,\dots,v_r\}\) spanning and \(\{w_1,\dots,w_n\}\) independent \(\Rightarrow n\le r\).`,
  L`All bases have the same size, \(\dim V\); \(\dim\{\mathbf0\}=0\).`,
  L`\(\dim F^n=n\), \(\dim\mathbb R_n[x]=n+1\), \(\dim\mathrm{Mat}_{m\times n}=mn\); \(\dim_{\mathbb R}\mathbb C=2\), \(\dim_{\mathbb C}\mathbb C=1\).`,
  'Any independent set extends to a basis.',
  L`In an \(n\)-dimensional space: \(>n\) vectors \(\Rightarrow\) dependent; \(<n\Rightarrow\) not spanning; exactly \(n\): independent \(\iff\) spanning \(\iff\) basis.`],
// ---------------------------------------------------------------- Vector Calculus
'vc-1.1': [
  L`\(\|\mathbf u\|=\sqrt{u_x^2+u_y^2+u_z^2}\); unit vector \(\hat{\mathbf u}=\mathbf u/\|\mathbf u\|\).`,
  L`\(\mathbf a\cdot\mathbf b=a_xb_x+a_yb_y+a_zb_z=\|\mathbf a\|\|\mathbf b\|\cos\theta\); \(\mathbf a\cdot\mathbf b=0\iff\) orthogonal.`,
  L`\(\mathbf a\times\mathbf b=\begin{vmatrix}\mathbf e_x&\mathbf e_y&\mathbf e_z\\a_x&a_y&a_z\\b_x&b_y&b_z\end{vmatrix}\) is orthogonal to \(\mathbf a\) and \(\mathbf b\).`,
  L`\(\|\mathbf a\times\mathbf b\|=\|\mathbf a\|\|\mathbf b\||\sin\theta|\) = area of the parallelogram.`],
'vc-1.2': [
  L`Plane polars: \(x=\rho\cos\phi\), \(y=\rho\sin\phi\), \(\rho\ge0\), \(0\le\phi<2\pi\).`,
  L`Cylindrical \((\rho,\phi,z)\): plane polars plus \(z\); \(\rho=\sqrt{x^2+y^2}\).`,
  L`Spherical \((r,\theta,\phi)\): \(x=r\sin\theta\cos\phi\), \(y=r\sin\theta\sin\phi\), \(z=r\cos\theta\); \(r=\|\mathbf x\|\), \(\theta\in[0,\pi]\) from the \(z\)-axis.`,
  L`\(\mathbf e_\rho,\mathbf e_\phi\) (and \(\mathbf e_r,\mathbf e_\theta\)) are orthonormal but vary with position.`],
'vc-1.3': [
  L`Scalar field \(f:\mathbb R^n\to\mathbb R\); vector field \(\mathbf F:\mathbb R^n\to\mathbb R^m\), \(m>1\).`,
  L`\(\partial f/\partial x\): differentiate in \(x\) holding the other variables fixed.`,
  L`\(\nabla f=\left(\dfrac{\partial f}{\partial x},\dfrac{\partial f}{\partial y},\dfrac{\partial f}{\partial z}\right)\) is a vector field.`],
'vc-1.4': [
  L`\(\iint_R f\,dA\) by successive integration; the inner integral first.`,
  'Non-constant limits only on inner integrals. To swap the order, redraw the region.',
  L`\(\iint_R1\,dA\) = area. In plane polars \(dA=\rho\,d\rho\,d\phi\).`],
'vc-1.5': [
  L`\(\iiint_V f\,dV\), \(dV=dx\,dy\,dz\); \(\iiint_V1\,dV\) = volume.`,
  L`Project \(V\) onto the \(xy\)-plane, integrate \(z\) from \(z_1(x,y)\) to \(z_2(x,y)\) first.`,
  L`Cylindrical: \(dV=\rho\,d\rho\,d\phi\,dz\). Spherical: \(dV=r^2\sin\theta\,dr\,d\theta\,d\phi\).`],
'vc-2.1': [
  L`\(C:t\mapsto(x(t),y(t))\), \(t_1\le t\le t_2\); parametrisations are not unique.`,
  L`Eliminating \(t\) gives \(y=f(x)\) or \(F(x,y)=0\) — losing start/end points and direction.`,
  L`Tangent \(\mathbf v=(x',y')\), speed \(v=\|\mathbf v\|\), line element \(d\mathbf x=\mathbf v\,dt\).`,
  L`Length \(L=\int_{t_1}^{t_2}\sqrt{x'^2+y'^2}\,dt\), independent of the parametrisation.`],
'vc-2.1.5': [
  L`Arc-length \(s(t)=\int_{t_1}^t v(t')\,dt'\), so \(ds/dt=v\).`,
  'Natural parametrisation: use s as the parameter; its tangent vector has unit length.'],
'vc-2.2': [
  L`Scalar: \(\int_C f\,ds=\int_{t_1}^{t_2}f(x(t),y(t))\,v(t)\,dt\).`,
  L`Vector: \(\int_C\mathbf F\cdot d\mathbf x=\int_{t_1}^{t_2}\mathbf F(\mathbf x(t))\cdot\mathbf v(t)\,dt\) — a scalar; only the tangential component contributes.`,
  L`\(\oint\) for a closed curve; \(f=1\) gives the length.`],
'vc-2.3': [
  L`In 3D: \(\mathbf v=(x',y',z')\), \(L=\int\|\mathbf v\|\,dt\).`,
  L`Helix \((\sin t,\cos t,t)\): projects to the unit circle, \(\mathbf v=(\cos t,-\sin t,1)\), speed \(\sqrt2\).`],
// ---------------------------------------------------------------- Differential Equations (from the specimen-paper formula sheet)
'de-1a': [
  L`Constant coefficients: try \(y=e^{rx}\), solve the characteristic equation.`,
  L`Reduction of order: \(y_2=y_1\displaystyle\int\frac{e^{-\int p\,dx}}{y_1^2}\,dx\) for \(y''+p\,y'+q\,y=0\).`,
  L`Always divide by the coefficient of \(y''\) before reading off \(p\).`],
'de-1b': [
  L`Write the ODE as \(y''+p(x)y'+q(x)y=0\).`,
  L`Ordinary point \(x_0\): \(p,q\) analytic there — two power-series solutions.`,
  L`Regular singular: \(p\) or \(q\) not analytic, but \((x-x_0)p\) and \((x-x_0)^2q\) are — Frobenius.`,
  'Essential singular: otherwise — no series solutions expected.'],
'de-2': [
  L`Substitute \(y=\sum a_nx^n\), \(y'=\sum na_nx^{n-1}\), \(y''=\sum n(n-1)a_nx^{n-2}\).`,
  'Re-index so every sum has the same power; pull out the leftover low terms; set each coefficient to zero.',
  L`\(a_0,a_1\) are arbitrary: \(y=a_0y_1+a_1y_2\).`],
'de-3': [
  L`Frobenius: \(y=\sum a_nx^{n+\lambda}\), \(a_0\ne0\).`,
  L`Lowest power \(\Rightarrow\) indicial equation for \(\lambda\); remaining powers \(\Rightarrow\) recurrence.`,
  'Repeated root: one series. Roots differing by an integer: use the larger root. Then reduction of order for y₂.',
  'If the recurrence gives a zero coefficient, the series terminates in a polynomial (Legendre, Laguerre).'],
'de-4': [
  L`Bessel of order \(\nu\): \(x^2y''+xy'+(x^2-\nu^2)y=0\), indicial roots \(\pm\nu\).`,
  L`Spherical Bessel of order 2: \(x^2y''+2xy'+(x^2-6)y=0\), roots \(2,-3\); recurrence steps by 2.`,
  'Section B Q5 pattern: classify → substitute → re-index → indicial equation → recurrence → y₁ → y₂ by reduction of order.'],
'de-5': [
  L`Eigenvalue problem: find \(\lambda\) giving non-trivial solutions of a homogeneous ODE with homogeneous BCs.`,
  L`Take \(\lambda=\omega^2\) to get oscillatory solutions; apply BCs; \(\omega=0\) usually gives the trivial solution.`,
  L`Tricks: \(y=A\sin(\omega(x+1))\) builds in \(y(-1)=0\); adding/subtracting BCs separates sine and cosine families.`],
'de-6': [
  L`\(f=\sum_{n\ge0}a_n\cos\frac{n\pi x}{\ell}+b_n\sin\frac{n\pi x}{\ell}\), \(a_0=\frac1{2\ell}\int_{-\ell}^\ell f\), \(a_n=\frac1\ell\int_{-\ell}^\ell f\cos\frac{n\pi x}\ell\), \(b_n=\frac1\ell\int_{-\ell}^\ell f\sin\frac{n\pi x}\ell\).`,
  'Orthogonality: multiply by one basis function and integrate — every other term vanishes.',
  L`Dirichlet: at a jump the series converges to \(\tfrac12[f(x^-)+f(x^+)]\).`,
  L`Smoother \(f\) ⇒ faster decay of coefficients (continuous \(f,f'\) ⇒ \(1/n^3\)).`],
'de-7a': [
  'Odd f: sine terms only. Even f: cosine terms only. odd × odd = even.',
  L`Half-range sine series on \([0,\ell]\): \(b_n=\frac2\ell\int_0^\ell f\sin\frac{n\pi x}{\ell}\,dx\).`,
  L`Term-by-term differentiation is allowed when \(f'\) is piecewise continuous (\(f\) piecewise smooth).`],
'de-7b': [
  L`Expand \(y\) and the forcing \(f\) in the same half-range series (chosen to satisfy the BCs).`,
  L`Substitute and match coefficients: e.g. \(y''+5y=f\Rightarrow y_n=\frac{f_n}{5-n^2}\).`,
  L`Swapping sum and integral gives a Green's function \(G(x,z)=\frac2\pi\sum\frac{\sin nz\sin nx}{5-n^2}\).`,
  L`If a coefficient \((c-n^2)\) vanishes: resonance.`],
'de-8': [
  L`\(\hat f(k)=\frac{1}{\sqrt{2\pi}}\int f(x)e^{-ikx}dx\), \(f(x)=\frac{1}{\sqrt{2\pi}}\int\hat f(k)e^{ikx}dk\).`,
  L`Shift: \(\mathcal F[f(x-a)]=e^{-iak}\hat f\). Scaling: \(\mathcal F[f(ax)]=\frac1{|a|}\hat f(k/a)\).`,
  L`\(\mathcal F[e^{-|x|}]=\sqrt{2/\pi}\,\frac1{1+k^2}\); top hat on \(|x|<a\): \(\sqrt{2/\pi}\,\frac{\sin ka}{k}\).`,
  'Real even ⇒ real transform; real odd ⇒ imaginary transform.'],
'de-9a': [
  L`\(\mathcal F[f']=ik\hat f\), \(\mathcal F[f'']=-k^2\hat f\) (needs \(f\to0\) at \(\pm\infty\)).`,
  L`An ODE becomes algebraic: \(\hat y=\hat f/P(k)\).`,
  L`Convolution: \(\mathcal F^{-1}[\hat f\hat g]=\frac1{\sqrt{2\pi}}\int g(x-u)f(u)\,du\).`],
'de-9b': [
  L`\(\delta(x-a)=0\) for \(x\ne a\), \(\int\delta=1\), \(\int f(x)\delta(x-a)\,dx=f(a)\).`,
  L`For \(y''+py'+qy=\delta(x-z)\): \([y]_{z^-}^{z^+}=0\), \([y']_{z^-}^{z^+}=1\) (divide by the \(y''\) coefficient first).`],
'de-10': [
  L`Solve in \(x<z\) and \(x>z\), keeping solutions that satisfy the BCs/decay; then apply continuity and the jump.`,
  L`\(G(x;z)\) is that solution; \(y(x)=\int G(x;z)f(z)\,dz\).`,
  L`Convert "\(x<z\)" and "\(x>z\)" into ranges of \(z\) when splitting the integral.`,
  L`Initial-value problems on \(x>0\): \(G=0\) for \(x<z\), so \(y(x)=\int_0^xG\,f\,dz\).`],
};
SECTIONS.forEach(s => { if(KEYS[s.id]) s.key = KEYS[s.id]; });
})();
