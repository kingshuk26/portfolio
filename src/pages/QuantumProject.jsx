import atom3dImg from "../assets/quantum/atom-3d.png";
import mathPanelImg from "../assets/quantum/math-panel.png";
import levelsImg from "../assets/quantum/energy-levels.png";

export default function QuantumProject() {
  return (
    <div className="min-h-screen bg-[#081c15] text-[#d8f3dc] overflow-x-hidden">

      {/* HERO */}
      <section className="px-6 py-24 border-b border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-6">
            Quantum Simulation Engine
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight max-w-6xl">
            Quantum Atom
            <br />
            Engine
          </h1>

          <p className="mt-10 text-xl text-[#b7e4c7] max-w-4xl leading-loose">
            Browser-based quantum simulation engine that numerically
            solves radial Kohn–Sham equations using Self-Consistent
            Field (SCF) methods and visualizes electron density
            behavior in real time using interactive scientific
            visualizations.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-14">

            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-sm mb-3">
                Numerical Method
              </p>

              <h3 className="text-4xl font-black text-[#74c69d]">
                SCF
              </h3>

              <p className="text-sm text-[#b7e4c7] mt-3">
                Self-Consistent Field Iteration
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-sm mb-3">
                Theory
              </p>

              <h3 className="text-4xl font-black text-[#74c69d]">
                DFT
              </h3>

              <p className="text-sm text-[#b7e4c7] mt-3">
                Density Functional Theory
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-sm mb-3">
                Visualization
              </p>

              <h3 className="text-4xl font-black text-[#74c69d]">
                Real-Time
              </h3>

              <p className="text-sm text-[#b7e4c7] mt-3">
                Electron Density Rendering
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Project Overview
            </p>

            <h2 className="text-5xl font-bold">
              Interactive Quantum Learning System
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-bold mb-6">
                Core Objective
              </h3>

              <p className="text-[#b7e4c7] leading-loose text-lg">
                Most quantum chemistry software behaves like a
                black box where users only see final outputs.
                This engine focuses on making quantum mechanics
                visually understandable by allowing users to
                observe SCF convergence behavior, electron density,
                orbital energy changes, and numerical instability
                directly inside the browser.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-bold mb-6">
                Core Concepts
              </h3>

              <ul className="space-y-4 text-[#b7e4c7] text-lg">
                <li>• Self-Consistent Field (SCF) Iteration</li>
                <li>• Radial Kohn–Sham Equations</li>
                <li>• Density Functional Theory (DFT)</li>
                <li>• Local Density Approximation (LDA)</li>
                <li>• Electron Density Visualization</li>
                <li>• Hartree Potentials</li>
                <li>• Exchange-Correlation Potentials</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Simulation Interface
            </p>

            <h2 className="text-5xl font-bold">
              Quantum Visualizations
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {[
              {
                title: "3D Electron Density Visualization",
                img: atom3dImg,
              },
              {
                title: "Mathematical Theory Panel",
                img: mathPanelImg,
              },
              {
                title: "Orbital Energy Level Analysis",
                img: levelsImg,
              },
            ].map((item, i) => (
              <div
                key={i}
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
                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* THEORY */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Mathematical Foundation
            </p>

            <h2 className="text-5xl font-bold">
              Quantum Numerical Framework
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-bold mb-6">
                Electron Density
              </h3>

              <div className="bg-[#081c15] p-6 rounded-2xl border border-[#2d6a4f]">
                <p className="text-3xl text-[#74c69d] font-bold">
                  ρ(r) = |ψ(r)|²
                </p>
              </div>

              <p className="text-[#b7e4c7] leading-loose text-lg mt-6">
                Electron density distribution is visualized
                dynamically to help understand how electrons
                spatially distribute around atomic nuclei.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-bold mb-6">
                Kohn–Sham Framework
              </h3>

              <div className="bg-[#081c15] p-6 rounded-2xl border border-[#2d6a4f]">
                <p className="text-2xl text-[#74c69d] font-bold">
                  [-∇² + Veff(r)]ψ = εψ
                </p>
              </div>

              <p className="text-[#b7e4c7] leading-loose text-lg mt-6">
                The engine numerically solves radial
                Kohn–Sham equations using finite-difference
                approximations and iterative SCF updates.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CURRENT STATUS */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Development Status
            </p>

            <h2 className="text-5xl font-bold">
              Active Numerical Research
            </h2>
          </div>

          <div className="p-10 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">

            <div className="mb-10">
              <h3 className="text-3xl font-bold mb-6 text-[#74c69d]">
                Current Challenges
              </h3>

              <ul className="space-y-4 text-[#b7e4c7] text-lg">
                <li>
                  • SCF convergence stability is still under active development
                </li>

                <li>
                  • Numerical damping and mixing optimization are in progress
                </li>

                <li>
                  • Some atomic configurations may fail to converge
                </li>

                <li>
                  • Energy values are currently qualitative
                  rather than fully physically accurate
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6 text-[#74c69d]">
                Why This Matters
              </h3>

              <p className="text-[#b7e4c7] leading-loose text-lg">
                Instead of hiding convergence failures,
                this engine intentionally exposes instability
                behavior so users can understand how iterative
                quantum systems evolve, diverge, or stabilize.
                The project prioritizes learning and visualization
                over black-box computation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Scientific Applications
            </p>

            <h2 className="text-5xl font-bold">
              Educational Use Cases
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              "Visualizing Hydrogen-like Atoms",
              "Exploring Nuclear Charge Effects",
              "Understanding SCF Convergence",
              "Studying Ionic Charge Behavior",
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <h3 className="text-2xl font-bold leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Technology Stack
            </p>

            <h2 className="text-5xl font-bold">
              Scientific Computing Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Frontend",
                tech: "React + TypeScript",
              },
              {
                title: "Visualization",
                tech: "Three.js + WebGL",
              },
              {
                title: "Numerical Methods",
                tech: "Finite Difference + SCF",
              },
              {
                title: "Physics",
                tech: "DFT + Kohn–Sham Theory",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <p className="text-[#74c69d] text-sm uppercase tracking-[3px] mb-4">
                  {item.title}
                </p>

                <h3 className="text-2xl font-bold leading-relaxed">
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