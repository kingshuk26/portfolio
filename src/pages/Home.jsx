// MULTI PAGE AI PORTFOLIO STRUCTURE
// Install:
// npm install react-router-dom framer-motion recharts
//
// Create routes:
// /
// /projects/xai-system
// /projects/ckd-ai
// /projects/quantum-engine
//
// Create pages folder:
// src/pages/Home.jsx
// src/pages/XAIProject.jsx
// src/pages/CKDProject.jsx
// src/pages/QuantumProject.jsx
//
// App.jsx
// ---------------------------------
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import XAIProject from './pages/XAIProject'
// import CKDProject from './pages/CKDProject'
// import QuantumProject from './pages/QuantumProject'
//
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects/xai-system" element={<XAIProject />} />
//         <Route path="/projects/ckd-ai" element={<CKDProject />} />
//         <Route path="/projects/quantum-engine" element={<QuantumProject />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }
// ---------------------------------

export default function Home() {
  return (
    <div className="min-h-screen bg-[#081c15] text-[#d8f3dc] overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#52b78833,transparent_40%),radial-gradient(circle_at_bottom_right,#74c69d22,transparent_40%)]"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-[#2d6a4f]/40 bg-[#081c15]/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide">
              Kingshuk<span className="text-[#74c69d]">.AI</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-[#b7e4c7]">
            <a href="#projects" className="hover:text-[#74c69d] transition">Projects</a>
            <a href="#skills" className="hover:text-[#74c69d] transition">Skills</a>
            <a href="#contact" className="hover:text-[#74c69d] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#40916c]/40 bg-[#1b4332]/40 text-[#95d5b2] text-sm mb-6">
              MACHINE LEARNING • ANALYTICS • INTELLIGENT SYSTEMS
            </div>

            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8">
              Kingshuk
              <br />
              Das
            </h1>

            <p className="text-xl text-[#b7e4c7] leading-relaxed max-w-2xl mb-10">
              Machine Learning & Data Analytics Enthusiast focused on building intelligent systems, explainable AI applications, and analytical solutions powered by data.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-[#52b788] text-[#081c15] font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="https://github.com/kingshuk26"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-[#40916c] hover:bg-[#1b4332] transition"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-8 py-4 rounded-2xl border border-[#52b788] text-[#74c69d] hover:bg-[#52b788] hover:text-[#081c15] transition font-medium"
                >
                Resume
                </a>
            </div>
          </div>

          <div className="relative">

  {/* Glow */}
  <div className="absolute inset-0 bg-[#52b788]/10 blur-[100px]" />

  {/* Main Card */}
  <div className="relative rounded-[2rem] border border-[#2d6a4f] bg-[#081c15]/80 p-8 backdrop-blur-xl overflow-hidden">

    {/* Floating Blur */}
    <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-[#52b788]/20 blur-[90px]" />

    <p className="uppercase tracking-[4px] text-[#74c69d] text-xs mb-6">
      Core Research Systems
    </p>

    <div className="space-y-5">

      {/* CARD 1 */}
      <div className="group rounded-2xl border border-[#2d6a4f] bg-[#0b241c] p-5 hover:translate-x-2 transition-all duration-500">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-2xl font-bold">
              Credit Risk XAI
            </h3>

            <p className="text-[#b7e4c7]/70 text-sm mt-1">
              SHAP • XGBoost • Analytics
            </p>
          </div>

          <div className="w-4 h-4 rounded-full bg-[#74c69d] animate-pulse" />

        </div>
      </div>

      {/* CARD 2 */}
      <div className="group rounded-2xl border border-[#2d6a4f] bg-[#0b241c] p-5 hover:translate-x-2 transition-all duration-500">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-2xl font-bold">
              CKD AI System
            </h3>

            <p className="text-[#b7e4c7]/70 text-sm mt-1">
              Ensemble ML • Healthcare AI
            </p>
          </div>

          <div className="w-4 h-4 rounded-full bg-[#52b788] animate-pulse" />

        </div>
      </div>

      {/* CARD 3 */}
      <div className="group rounded-2xl border border-[#2d6a4f] bg-[#0b241c] p-5 hover:translate-x-2 transition-all duration-500">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-2xl font-bold">
              Quantum Atom Engine
            </h3>

            <p className="text-[#b7e4c7]/70 text-sm mt-1">
              SCF • DFT • Kohn-Sham
            </p>
          </div>

          <div className="relative w-10 h-10 flex items-center justify-center">

            <div className="absolute w-10 h-10 border border-[#74c69d]/40 rounded-full animate-spin" />

            <div className="w-2 h-2 rounded-full bg-[#74c69d]" />

          </div>

        </div>
      </div>

    </div>

    {/* Bottom Stats */}
    <div className="grid grid-cols-3 gap-4 mt-8">

      <div className="rounded-xl border border-[#2d6a4f] p-4 bg-[#0b241c]">
        <p className="text-[#95d5b2] text-xs mb-2">Projects</p>
        <h4 className="text-3xl font-black text-[#74c69d]">3</h4>
      </div>

      <div className="rounded-xl border border-[#2d6a4f] p-4 bg-[#0b241c]">
        <p className="text-[#95d5b2] text-xs mb-2">AUC</p>
        <h4 className="text-3xl font-black text-[#74c69d]">0.987</h4>
      </div>

      <div className="rounded-xl border border-[#2d6a4f] p-4 bg-[#0b241c]">
        <p className="text-[#95d5b2] text-xs mb-2">Systems</p>
        <h4 className="text-3xl font-black text-[#74c69d]">AI</h4>
      </div>

    </div>

  </div>
</div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">
            About
          </p>

          <h2 className="text-5xl font-bold mb-10 leading-tight">
            Building analytical systems
            <br />
            powered by data & intelligence.
          </h2>

          <p className="text-[#b7e4c7] text-lg leading-loose max-w-4xl">
            I enjoy exploring intelligent systems, explainable AI, predictive analytics, and scientific computing. My focus revolves around extracting meaningful insights from data and building applications that combine machine learning, analytical thinking, and modern technology to solve real-world problems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">
              Technical Stack
            </p>

            <h2 className="text-5xl font-bold">
              AI & Analytics Toolkit
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Python',
              'SQL',
              'Pandas',
              'NumPy',
              'Scikit-learn',
              'Flask',
              'React',
              'Git',
              'Matplotlib'
            ].map((skill, i) => (
              <div
                key={i}
                className="group p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f] hover:border-[#52b788] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-xl font-semibold">{skill}</h3>
                  <span className="text-[#74c69d] text-sm">Model Confidence</span>
                </div>

                <div className="w-full h-2 bg-[#081c15] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#40916c] to-[#74c69d] rounded-full"
                    style={{ width: `${70 + i * 3}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">
              Featured Work
            </p>

            <h2 className="text-5xl font-bold">
              Featured AI & Scientific Systems
            </h2>
          </div>

          <div className="space-y-10">

            {/* Project Card */}
            {[
              {
                title: 'Credit Risk XAI Intelligence Platform',
                desc: 'Production-style Explainable AI analytics platform for credit risk assessment featuring SHAP explainability, ROC curve comparison, feature importance analysis, pipeline monitoring, SQL exploration, and interpretable ML workflows. Built using Logistic Regression and XGBoost with interactive dashboards and risk analytics.',
                github: 'https://github.com/kingshuk26/credit-risk-xai-system',
                tech: ['Python', 'SHAP', 'Scikit-learn', 'Flask']
              },
              {
                title: 'Quantum Atom Engine — Interactive SCF Simulator',
                desc: 'Browser-based quantum simulation engine that numerically solves radial Kohn–Sham equations using Self-Consistent Field (SCF) methods while visualizing electron density, orbital energy levels, convergence behavior, and atomic interactions in real time.',
                github: 'https://github.com/kingshuk26/quantum-atom-engine',
                tech: ['Python', 'Scientific Computing', 'Visualization']
              },
              {
                title: 'CKD Stage Prediction & Treatment Intelligence',
                desc: 'Healthcare AI system using stacking ensemble models (CatBoost, XGBoost, LightGBM) combined with SHAP explainability and clinical intelligence pipelines for Chronic Kidney Disease stage prediction and treatment analytics. Achieved 96.8% accuracy with AUC-ROC of 0.987.',
                github: 'https://github.com/kingshuk26/CKD-Stage-Prediction-and-Treatment-AI',
                tech: ['Machine Learning', 'Healthcare Analytics', 'Flask']
              }
            ].map((project, i) => (
              <div
                key={i}
                className="group grid lg:grid-cols-2 gap-10 bg-[#1b4332]/40 border border-[#2d6a4f] rounded-[2rem] p-8 hover:border-[#52b788] transition-all duration-500"
              >
                <div className="relative h-80 rounded-3xl overflow-hidden border border-[#2d6a4f] bg-[#081c15]">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d6a4f22_1px,transparent_1px),linear-gradient(to_bottom,#2d6a4f22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-[#52b788]/40 animate-pulse"></div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-[#74c69d] uppercase tracking-[3px] text-sm mb-4">
                    Featured Project
                  </p>

                  <h3 className="text-4xl font-bold mb-6 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[#b7e4c7] leading-loose mb-8 text-lg">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-[#081c15] border border-[#2d6a4f] text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-6 py-3 rounded-2xl bg-[#52b788] text-[#081c15] font-semibold hover:scale-105 transition"
                    >
                      GitHub
                    </a>

                    <a
                      href={
                        project.title.includes('XAI')
                          ? '/projects/xai-system'
                          : project.title.includes('CKD')
                          ? '/projects/ckd-ai'
                          : '/projects/quantum-engine'
                      }
                      className="px-6 py-3 rounded-2xl border border-[#40916c] hover:bg-[#1b4332] transition"
                    >
                      View Case Study
                    </a>

                    <button
                      className="px-6 py-3 rounded-2xl border border-[#40916c] hover:bg-[#1b4332] transition"
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Systems */}
<section className="py-28 overflow-hidden">

  <div className="px-6 mb-14 max-w-7xl mx-auto">
    <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">
      Research Systems
    </p>

    <h2 className="text-5xl md:text-6xl font-black leading-tight max-w-4xl">
      Interactive AI &
      <br />
      Scientific Computing
    </h2>
  </div>

  {/* AUTO SLIDER */}
  <div className="relative w-full overflow-hidden">

    <div className="flex animate-[slide_24s_infinite] w-[300%]">

      {/* ================= XAI ================= */}
      <div className="w-screen flex justify-center px-6 shrink-0">

        <div className="w-full max-w-7xl h-[520px] rounded-[2.5rem] bg-gradient-to-br from-[#0f2d23] to-[#081c15] border border-[#2d6a4f] p-10 relative overflow-hidden">

          <div className="absolute w-[400px] h-[400px] bg-[#52b788]/10 blur-[120px] rounded-full top-[-120px] right-[-80px]" />

          <div className="grid lg:grid-cols-2 gap-10 h-full relative z-10">

            <div className="flex flex-col justify-center">

              <p className="uppercase tracking-[4px] text-[#74c69d] text-xs mb-5">
                Explainable AI
              </p>

              <h3 className="text-6xl font-black leading-[1] mb-6">
                Credit Risk
                <br />
                XAI System
              </h3>

              <p className="text-[#b7e4c7] text-xl leading-relaxed mb-8 max-w-xl">
                SHAP-based explainability platform with
                model comparison pipelines, risk analytics,
                and predictive dashboards.
              </p>

              <div className="flex gap-5">

                <div className="flex-1 max-w-[220px] p-5 rounded-2xl bg-[#081c15]/70 border border-[#2d6a4f]">
                  <p className="text-[#95d5b2] text-xs mb-2">
                    ROC-AUC
                  </p>

                  <h4 className="text-5xl font-black text-[#74c69d]">
                    0.753
                  </h4>
                </div>

                <div className="flex-1 max-w-[220px] p-5 rounded-2xl bg-[#081c15]/70 border border-[#2d6a4f]">
                  <p className="text-[#95d5b2] text-xs mb-2">
                    MODEL
                  </p>

                  <h4 className="text-5xl font-black text-[#74c69d]">
                    XGB
                  </h4>
                </div>

              </div>
            </div>

            {/* Spiral */}
            <div className="flex items-center justify-center">

              <div className="relative w-[360px] h-[360px] flex items-center justify-center">

                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-[#52b788]/20"
                    style={{
                      width: `${90 + i * 42}px`,
                      height: `${90 + i * 42}px`,
                    }}
                  />
                ))}

                <div
                  className="absolute w-[280px] h-[280px] animate-spin"
                  style={{ animationDuration: "16s" }}
                >
                  <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full bg-[#74c69d] shadow-[0_0_20px_#74c69d]" />
                </div>

                <div
                  className="absolute w-[200px] h-[200px] animate-spin"
                  style={{
                    animationDuration: "10s",
                    animationDirection: "reverse",
                  }}
                >
                  <div className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full bg-[#95d5b2]" />
                </div>

                <div className="w-24 h-24 rounded-full bg-[#081c15] border border-[#74c69d] flex items-center justify-center shadow-[0_0_60px_rgba(116,198,157,0.3)]">
                  <div className="w-5 h-5 rounded-full bg-[#74c69d]" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= CKD ================= */}
      <div className="w-screen flex justify-center px-6 shrink-0">

        <div className="w-full max-w-7xl h-[520px] rounded-[2.5rem] bg-gradient-to-br from-[#0f2d23] to-[#081c15] border border-[#2d6a4f] p-10 relative overflow-hidden">

          <div className="absolute w-[400px] h-[400px] bg-[#74c69d]/10 blur-[120px] rounded-full bottom-[-120px] left-[-80px]" />

          <div className="grid lg:grid-cols-2 gap-10 h-full relative z-10">

            <div className="flex flex-col justify-center">

              <p className="uppercase tracking-[4px] text-[#74c69d] text-xs mb-5">
                Healthcare AI
              </p>

              <h3 className="text-6xl font-black leading-[1] mb-6">
                CKD Stage
                <br />
                Prediction
              </h3>

              <p className="text-[#b7e4c7] text-xl leading-relaxed mb-8 max-w-xl">
                Clinical intelligence system combining
                ensemble learning with explainable disease
                prediction analytics.
              </p>

              <div className="flex gap-5">

                <div className="flex-1 max-w-[220px] p-5 rounded-2xl bg-[#081c15]/70 border border-[#2d6a4f]">
                  <p className="text-[#95d5b2] text-xs mb-2">
                    ACCURACY
                  </p>

                  <h4 className="text-5xl font-black text-[#74c69d]">
                    96.8%
                  </h4>
                </div>

                <div className="flex-1 max-w-[220px] p-5 rounded-2xl bg-[#081c15]/70 border border-[#2d6a4f]">
                  <p className="text-[#95d5b2] text-xs mb-2">
                    AUC-ROC
                  </p>

                  <h4 className="text-5xl font-black text-[#74c69d]">
                    0.987
                  </h4>
                </div>

              </div>
            </div>

            {/* Pulse */}
            <div className="flex items-center justify-center">

              <div className="relative w-[360px] h-[360px] flex items-center justify-center">

                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full border border-[#52b788]/20 animate-ping"
                    style={{
                      width: `${90 + i * 42}px`,
                      height: `${90 + i * 42}px`,
                      animationDuration: `${4 + i}s`,
                    }}
                  />
                ))}

                <div className="w-28 h-28 rounded-full bg-[#081c15] border border-[#74c69d] flex items-center justify-center shadow-[0_0_60px_rgba(116,198,157,0.35)]">

                  <span className="text-5xl font-black text-[#74c69d]">
                    AI
                  </span>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= QUANTUM ================= */}
      <div className="w-screen flex justify-center px-6 shrink-0">

        <div className="w-full max-w-7xl h-[520px] rounded-[2.5rem] bg-gradient-to-br from-[#0f2d23] to-[#081c15] border border-[#2d6a4f] p-10 relative overflow-hidden">

          <div className="absolute w-[400px] h-[400px] bg-[#40916c]/10 blur-[120px] rounded-full top-[-100px] left-[20%]" />

          <div className="grid lg:grid-cols-2 gap-10 h-full relative z-10">

            <div className="flex flex-col justify-center">

              <p className="uppercase tracking-[4px] text-[#74c69d] text-xs mb-5">
                Quantum Simulation
              </p>

              <h3 className="text-6xl font-black leading-[1] mb-6">
                Quantum Atom
                <br />
                Engine
              </h3>

              <p className="text-[#b7e4c7] text-xl leading-relaxed mb-8 max-w-xl">
                Browser-based SCF simulation engine
                for solving radial Kohn–Sham equations
                and visualizing electron density.
              </p>

              <div className="flex gap-5">

                <div className="flex-1 max-w-[220px] p-5 rounded-2xl bg-[#081c15]/70 border border-[#2d6a4f]">
                  <p className="text-[#95d5b2] text-xs mb-2">
                    METHOD
                  </p>

                  <h4 className="text-5xl font-black text-[#74c69d]">
                    SCF
                  </h4>
                </div>

                <div className="flex-1 max-w-[220px] p-5 rounded-2xl bg-[#081c15]/70 border border-[#2d6a4f]">
                  <p className="text-[#95d5b2] text-xs mb-2">
                    THEORY
                  </p>

                  <h4 className="text-5xl font-black text-[#74c69d]">
                    DFT
                  </h4>
                </div>

              </div>
            </div>

            {/* Atom */}
            <div className="flex items-center justify-center">

              <div className="relative w-[360px] h-[360px] flex items-center justify-center">

                <div className="absolute w-[320px] h-[120px] border border-[#52b788]/40 rounded-full animate-spin"
                  style={{ animationDuration: "14s" }} />

                <div className="absolute w-[320px] h-[120px] border border-[#52b788]/40 rounded-full rotate-90 animate-spin"
                  style={{
                    animationDuration: "10s",
                    animationDirection: "reverse"
                  }} />

                <div className="absolute w-[260px] h-[260px] border border-[#52b788]/20 rounded-full" />

                <div className="absolute w-[320px] h-[120px] animate-spin"
                  style={{ animationDuration: "14s" }}>

                  <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-[#74c69d] shadow-[0_0_20px_#74c69d]" />

                </div>

                <div className="absolute w-[320px] h-[120px] rotate-90 animate-spin"
                  style={{
                    animationDuration: "10s",
                    animationDirection: "reverse"
                  }}>

                  <div className="absolute top-1/2 right-0 w-4 h-4 rounded-full bg-[#95d5b2]" />

                </div>

                <div className="w-24 h-24 rounded-full bg-[#081c15] border border-[#74c69d] flex items-center justify-center shadow-[0_0_60px_rgba(116,198,157,0.35)]">

                  <div className="w-6 h-6 rounded-full bg-[#74c69d]" />

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </div>

  {/* Animation */}
  <style>
    {`
      @keyframes slide {
        0% { transform: translateX(0%); }
        30% { transform: translateX(0%); }

        33% { transform: translateX(-33.333%); }
        63% { transform: translateX(-33.333%); }

        66% { transform: translateX(-66.666%); }
        96% { transform: translateX(-66.666%); }

        100% { transform: translateX(0%); }
      }

      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>

</section>
      {/* GitHub */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">
              GitHub Analytics
            </p>

            <h2 className="text-5xl font-bold">
              Development Intelligence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <div className="grid grid-cols-2 gap-5 mb-8">
                <div className="p-5 rounded-2xl bg-[#081c15] border border-[#2d6a4f]">
                  <p className="text-sm text-[#95d5b2] mb-2">Repositories</p>
                  <h3 className="text-4xl font-black text-[#74c69d]">192 Contributions</h3>
                </div>

                <div className="p-5 rounded-2xl bg-[#081c15] border border-[#2d6a4f]">
                  <p className="text-sm text-[#95d5b2] mb-2">AI Projects</p>
                  <h3 className="text-4xl font-black text-[#74c69d]">3 Major Systems</h3>
                </div>

                <div className="p-5 rounded-2xl bg-[#081c15] border border-[#2d6a4f]">
                  <p className="text-sm text-[#95d5b2] mb-2">Commits</p>
                  <h3 className="text-4xl font-black text-[#74c69d]">Active 2026</h3>
                </div>

                <div className="p-5 rounded-2xl bg-[#081c15] border border-[#2d6a4f]">
                  <p className="text-sm text-[#95d5b2] mb-2">Research Domains</p>
                  <h3 className="text-4xl font-black text-[#74c69d]">ML + Quantum</h3>
                </div>
              </div>

              <div className="h-72 rounded-3xl bg-[#081c15] border border-[#2d6a4f] p-6">
                <div className="grid grid-cols-12 gap-2 h-full">
                  {Array.from({ length: 84 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded ${
                        i % 5 === 0
                          ? 'bg-[#74c69d]'
                          : i % 3 === 0
                          ? 'bg-[#40916c]'
                          : 'bg-[#1b4332]'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
                <h2 className="text-3xl font-bold mb-6">
                  GitHub Contribution Graph
                </h2>

                <div className="h-48 rounded-2xl bg-[#081c15] border border-[#2d6a4f] relative overflow-hidden">
                  <svg viewBox="0 0 500 200" className="absolute inset-0 w-full h-full">
                    <path
                      d="M0 150 C100 100, 180 170, 260 80 C340 20, 430 100, 500 40"
                      fill="none"
                      stroke="#52b788"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
                <h2 className="text-3xl font-bold mb-4">
                  GitHub Profile
                </h2>

                <p className="text-[#b7e4c7] leading-loose mb-8 text-lg">
                  Focused on Explainable AI, healthcare intelligence systems, scientific computing, SCF simulations, predictive analytics, and interactive ML dashboards. GitHub showcases experimental systems, analytical workflows, and advanced computational projects.
                </p>

                <a
                  href="https://github.com/kingshuk26"
                  target="_blank"
                  className="w-fit px-8 py-4 rounded-2xl bg-[#52b788] text-[#081c15] font-semibold hover:scale-105 transition"
                >
                  Explore GitHub Intelligence
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-6xl font-bold mb-8">
            Let’s Build Something Intelligent.
          </h2>

          <p className="text-[#b7e4c7] text-lg leading-loose max-w-3xl mx-auto mb-12">
            Interested in machine learning systems, AI analytics, scientific computing, or intelligent applications? Let’s connect and create impactful solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://github.com/kingshuk26"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-[#52b788] text-[#081c15] font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>

            <button className="px-8 py-4 rounded-2xl border border-[#40916c] hover:bg-[#1b4332] transition">
              LinkedIn
            </button>

            <button className="px-8 py-4 rounded-2xl border border-[#40916c] hover:bg-[#1b4332] transition">
              Email
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

// =============================================
// CREATE THESE PAGES INSIDE src/pages/
// =============================================

// XAIProject.jsx
// ---------------------------------
// Sections:
// - Hero Overview
// - SHAP Explainability
// - ROC Curve Comparison
// - Pipeline Monitoring
// - Feature Importance Analysis
// - Dataset Cards
// - Model Comparison Metrics
// - SQL Explorer
// - Risk Segmentation
//
// Use your screenshots:
// - SHAP summary plot
// - ROC curve graph
// - pipeline monitor
// - feature importance comparison
// - explainability dashboard
//
// Add image gallery cards with hover zoom.
//
// Metrics:
// Logistic Regression ROC-AUC: 0.7315
// XGBoost ROC-AUC: 0.7260
//
// ---------------------------------
// CKDProject.jsx
// ---------------------------------
// Sections:
// - Healthcare AI Overview
// - Architecture Diagram
// - SHAP Interaction Analysis
// - Stage Prediction Metrics
// - Clinical Intelligence Pipeline
// - Ensemble Learning System
//
// Use architecture diagram screenshot.
// Use SHAP interaction screenshots.
//
// Show metrics cards:
// Accuracy: 96.8%
// Precision: 95.2%
// Recall: 94.7%
// F1: 94.9%
// AUC-ROC: 0.987
//
// ---------------------------------
// QuantumProject.jsx
// ---------------------------------
// Sections:
// - Quantum Simulation Overview
// - SCF Iteration Explanation
// - Kohn–Sham Equations
// - Electron Density Visualization
// - Orbital Energy Levels
// - Numerical Pipeline
// - Convergence Analysis
//
// Use screenshots:
// - 3D visualization
// - orbital energy graph
// - quantum math panel
// - periodic table interaction
//
// Add futuristic scientific UI.
