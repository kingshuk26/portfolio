import atom3dImg from "../assets/quantum/atom-3d.png";
import mathPanelImg from "../assets/quantum/math-panel.png";
import levelsImg from "../assets/quantum/energy-levels.png";

export default function QuantumProject() {
  return (
    <div className="min-h-screen bg-[#081c15] text-[#d8f3dc] overflow-x-hidden">

      {/* Back nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-[#2d6a4f]/40 bg-[#081c15]/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          <a
            href="/"
            className="text-[#74c69d] text-sm hover:text-[#b7e4c7] transition flex items-center gap-2"
          >
            ← Back
          </a>
          <span className="text-[#2d6a4f]">/</span>
          <span className="text-[#b7e4c7] text-sm">Quantum Atom Engine</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 border-b border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-6">
            Scientific Computing · TypeScript
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight max-w-6xl">
            Quantum Atom
            <br />
            Engine
          </h1>

          <p className="mt-10 text-xl text-[#b7e4c7] max-w-3xl leading-loose">
            A browser-based tool that numerically solves radial Kohn–Sham equations
            using SCF iteration and renders electron density behavior in real time.
            Built to make quantum mechanics explorable, not just computable.
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-5 mt-14 max-w-2xl">
            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-xs uppercase tracking-[2px] mb-3">Method</p>
              <h3 className="text-4xl font-black text-[#74c69d]">SCF</h3>
              <p className="text-sm text-[#b7e4c7] mt-2">Self-Consistent Field</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-xs uppercase tracking-[2px] mb-3">Theory</p>
              <h3 className="text-4xl font-black text-[#74c69d]">DFT</h3>
              <p className="text-sm text-[#b7e4c7] mt-2">Density Functional</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-xs uppercase tracking-[2px] mb-3">Rendering</p>
              <h3 className="text-3xl font-black text-[#74c69d]">Live</h3>
              <p className="text-sm text-[#b7e4c7] mt-2">Real-time in browser</p>
            </div>
          </div>

          {/* GitHub link */}
          <div className="mt-10">
            <a
              href="https://github.com/kingshuk26/quantum-atom-engine"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 rounded-2xl bg-[#52b788] text-[#081c15] font-semibold hover:scale-105 transition"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Overview</p>
          <h2 className="text-5xl font-bold mb-14">What this project does</h2>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-2xl font-bold mb-5">The idea</h3>
              <p className="text-[#b7e4c7] leading-loose text-lg">
                Most quantum chemistry software is a black box — you put in inputs, it gives
                you outputs. This project tries to open that up. You can watch SCF convergence
                happen step by step, see how electron density shifts, and observe what happens
                when the system diverges instead of converges. It's more of a learning tool
                than a production simulator.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-2xl font-bold mb-5">Concepts involved</h3>
              <ul className="space-y-3 text-[#b7e4c7] text-base leading-relaxed">
                {[
                  "Self-Consistent Field (SCF) iteration",
                  "Radial Kohn–Sham equations",
                  "Density Functional Theory (DFT)",
                  "Local Density Approximation (LDA)",
                  "Electron density visualization",
                  "Hartree & exchange-correlation potentials",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#74c69d] mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Interface</p>
          <h2 className="text-5xl font-bold mb-14">Visualizations</h2>

          {/* Top two */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {[
              { title: "3D Electron Density", img: atom3dImg },
              { title: "Mathematical Theory Panel", img: mathPanelImg },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] overflow-hidden border border-[#2d6a4f] bg-[#1b4332]/30 hover:border-[#52b788] transition-all duration-500"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Full width third */}
          <div className="group rounded-[2rem] overflow-hidden border border-[#2d6a4f] bg-[#1b4332]/30 hover:border-[#52b788] transition-all duration-500">
            <div className="overflow-hidden">
              <img
                src={levelsImg}
                alt="Orbital Energy Level Analysis"
                className="w-full group-hover:scale-105 transition duration-700"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">Orbital Energy Level Analysis</h3>
            </div>
          </div>
        </div>
      </section>

      {/* THEORY */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Theory</p>
          <h2 className="text-5xl font-bold mb-14">The math behind it</h2>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-2xl font-bold mb-6">Electron Density</h3>
              <div className="bg-[#081c15] p-6 rounded-2xl border border-[#2d6a4f] mb-6">
                <p className="text-3xl text-[#74c69d] font-bold font-mono">ρ(r) = |ψ(r)|²</p>
              </div>
              <p className="text-[#b7e4c7] leading-loose">
                Electron density distribution — how electrons are spatially distributed
                around the nucleus — is rendered dynamically as SCF iterations progress.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-2xl font-bold mb-6">Kohn–Sham Equation</h3>
              <div className="bg-[#081c15] p-6 rounded-2xl border border-[#2d6a4f] mb-6">
                <p className="text-2xl text-[#74c69d] font-bold font-mono">[-∇² + Veff(r)]ψ = εψ</p>
              </div>
              <p className="text-[#b7e4c7] leading-loose">
                Solved numerically using finite-difference approximations, with iterative
                SCF updates until the electron density converges (or doesn't).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* STATUS — honest section, keep it */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Status</p>
          <h2 className="text-5xl font-bold mb-14">Work in progress</h2>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-2xl font-bold mb-5 text-[#74c69d]">Known limitations</h3>
              <ul className="space-y-3 text-[#b7e4c7] text-base leading-relaxed">
                {[
                  "SCF convergence stability is still being worked on",
                  "Numerical damping and mixing need more tuning",
                  "Some atomic configurations don't converge yet",
                  "Energy values are qualitative, not fully physically accurate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#74c69d] mt-1">→</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-2xl font-bold mb-5 text-[#74c69d]">Why show this anyway</h3>
              <p className="text-[#b7e4c7] leading-loose">
                The convergence failures are part of the point. Instead of hiding instability,
                the engine exposes it — so you can actually see how iterative quantum systems
                evolve, diverge, or settle. It's a learning tool first, not a production
                physics solver.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Use cases</p>
          <h2 className="text-5xl font-bold mb-14">What you can explore</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hydrogen-like Atoms",    desc: "Visualize single-electron orbital behavior" },
              { title: "Nuclear Charge Effects", desc: "See how Z affects electron distribution" },
              { title: "SCF Convergence",        desc: "Watch iterations stabilize or diverge" },
              { title: "Ionic Charge Behavior",  desc: "Explore charged atom configurations" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#b7e4c7] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Stack</p>
          <h2 className="text-5xl font-bold mb-14">Built with</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Frontend",          tech: "React · TypeScript" },
              { label: "3D Rendering",      tech: "Three.js · WebGL"   },
              { label: "Numerics",          tech: "Finite Difference · SCF iteration" },
              { label: "Physics",           tech: "DFT · Kohn–Sham · LDA" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <p className="text-[#74c69d] text-xs uppercase tracking-[3px] mb-4">
                  {item.label}
                </p>
                <h3 className="text-xl font-bold leading-relaxed text-[#d8f3dc]">
                  {item.tech}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}