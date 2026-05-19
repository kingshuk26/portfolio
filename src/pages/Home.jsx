export default function Home() {
  return (
    <div className="min-h-screen bg-[#081c15] text-[#d8f3dc] overflow-x-hidden">

      {/* Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,#52b78833,transparent_40%),radial-gradient(circle_at_bottom_right,#74c69d22,transparent_40%)]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-[#2d6a4f]/40 bg-[#081c15]/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Kingshuk<span className="text-[#74c69d]">.</span>
          </h1>
          <div className="hidden md:flex items-center gap-8 text-sm text-[#b7e4c7]">
            <a href="#about"    className="hover:text-[#74c69d] transition">About</a>
            <a href="#projects" className="hover:text-[#74c69d] transition">Projects</a>
            <a href="#skills"   className="hover:text-[#74c69d] transition">Skills</a>
            <a href="#contact"  className="hover:text-[#74c69d] transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <p className="text-[#74c69d] text-sm uppercase tracking-[4px] mb-6">
              CSE Student · ML & Data Analytics
            </p>

            <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8">
              Kingshuk
              <br />
              Das
            </h1>

            <p className="text-xl text-[#b7e4c7] leading-relaxed max-w-xl mb-10">
              I build ML-powered systems — from credit risk dashboards to
              healthcare AI — with a focus on making models interpretable
              and results actually useful.
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
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl border border-[#40916c] hover:bg-[#1b4332] transition"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-2xl border border-[#52b788] text-[#74c69d] hover:bg-[#52b788] hover:text-[#081c15] transition font-medium"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right – project cards */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#52b788]/10 blur-[100px]" />
            <div className="relative rounded-[2rem] border border-[#2d6a4f] bg-[#081c15]/80 p-8 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-[-80px] right-[-80px] w-[220px] h-[220px] rounded-full bg-[#52b788]/20 blur-[90px]" />

              <p className="uppercase tracking-[4px] text-[#74c69d] text-xs mb-6">
                Projects
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Credit Risk Dashboard',  sub: 'XGBoost · SHAP · Streamlit',  dot: '#74c69d' },
                  { title: 'CKD Prediction System',  sub: 'Ensemble ML · Healthcare',     dot: '#52b788' },
                  { title: 'Voice Assistant',         sub: 'Flask · SpeechRecognition',    dot: '#95d5b2' },
                ].map(({ title, sub, dot }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#2d6a4f] bg-[#0b241c] p-5 hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="text-[#b7e4c7]/60 text-sm mt-0.5">{sub}</p>
                      </div>
                      <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: dot }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="rounded-xl border border-[#2d6a4f] p-4 bg-[#0b241c]">
                  <p className="text-[#95d5b2] text-xs mb-1">Repos</p>
                  <h4 className="text-3xl font-black text-[#74c69d]">23</h4>
                </div>
                <div className="rounded-xl border border-[#2d6a4f] p-4 bg-[#0b241c]">
                  <p className="text-[#95d5b2] text-xs mb-1">AUC</p>
                  <h4 className="text-3xl font-black text-[#74c69d]">0.987</h4>
                </div>
                <div className="rounded-xl border border-[#2d6a4f] p-4 bg-[#0b241c]">
                  <p className="text-[#95d5b2] text-xs mb-1">Year</p>
                  <h4 className="text-3xl font-black text-[#74c69d]">'26</h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">About</p>
          <h2 className="text-5xl font-bold mb-8 leading-tight">
            CS student who likes
            <br />
            building things with data.
          </h2>
          <p className="text-[#b7e4c7] text-lg leading-loose max-w-3xl">
            I'm a third-year CSE student at College of Engineering Roorkee. I've been working on
            ML projects for a while — mostly around predictive analytics, explainability, and
            building tools that make model outputs understandable. I also did a Python Developer
            internship at Oasis Infobyte where I worked on chat applications and ML-enhanced
            voice assistants. Outside of that, I'm into competitive programming and tinkering
            with whatever problem seems interesting at the time.
          </p>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────── */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">Skills</p>
          <h2 className="text-5xl font-bold mb-14">What I work with</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: 'Languages',
                items: ['Python', 'C/C++', 'SQL', 'JavaScript', 'Java', 'HTML/CSS'],
              },
              {
                label: 'ML / Data',
                items: ['Scikit-learn', 'TensorFlow', 'Keras', 'PyTorch', 'XGBoost', 'SHAP'],
              },
              {
                label: 'Libraries',
                items: ['Pandas', 'NumPy', 'Matplotlib', 'Streamlit', 'Flask', 'React'],
              },
              {
                label: 'Tools',
                items: ['Git', 'VS Code', 'PyCharm', 'SQLite / Postgres', 'Vercel'],
              },
            ].map(({ label, items }) => (
              <div
                key={label}
                className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f] hover:border-[#52b788] transition-all duration-300"
              >
                <p className="text-[#74c69d] text-xs uppercase tracking-[3px] mb-4">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-[#081c15] border border-[#2d6a4f] text-sm text-[#b7e4c7]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────── */}
      <section id="projects" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">Projects</p>
          <h2 className="text-5xl font-bold mb-14">Things I've built</h2>

          <div className="space-y-8">
            {[
              {
                title: 'Credit Risk Analytics Dashboard',
                desc: 'ML dashboard that runs over 300K loan records to predict defaults. Built Logistic Regression and XGBoost models (AUC 0.75), added K-Means risk segmentation, SHAP explainability, and a multi-page Streamlit interface with SQL querying.',
                github: 'https://github.com/kingshuk26/credit-risk-xai-system',
                details: '/projects/xai-system',
                tech: ['Python', 'XGBoost', 'SHAP', 'Streamlit', 'SQLite', 'K-Means'],
              },
              {
                title: 'CKD Stage Prediction & Treatment AI',
                desc: 'Healthcare model for Chronic Kidney Disease stage prediction using a stacking ensemble of CatBoost, XGBoost, and LightGBM. 96.8% accuracy, AUC-ROC of 0.987. Includes SHAP-based explanations and a clinical intelligence pipeline.',
                github: 'https://github.com/kingshuk26/CKD-Stage-Prediction-and-Treatment-AI',
                details: '/projects/ckd-ai',
                tech: ['Python', 'CatBoost', 'XGBoost', 'LightGBM', 'SHAP', 'Flask'],
              },
              {
                title: 'Voice Assistant',
                desc: 'Browser-based voice assistant built with Flask. Captures audio via MediaRecorder API, processes it with SpeechRecognition and pyttsx3, and handles commands like playing YouTube, fetching weather, and answering questions via Wikipedia.',
                github: 'https://github.com/kingshuk26',
                tech: ['Python', 'Flask', 'SpeechRecognition', 'pyttsx3', 'Bootstrap'],
              },
              {
                title: 'Quantum Atom Engine',
                desc: 'Interactive browser tool that numerically solves radial Kohn–Sham equations using Self-Consistent Field (SCF) methods. Visualizes electron density, orbital energy levels, and convergence behavior in real time.',
                github: 'https://github.com/kingshuk26/quantum-atom-engine',
                details: '/projects/quantum-engine',
                tech: ['TypeScript', 'DFT', 'SCF', 'Scientific Computing'],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group grid lg:grid-cols-[1fr_2fr] gap-10 bg-[#1b4332]/40 border border-[#2d6a4f] rounded-[2rem] p-8 hover:border-[#52b788] transition-all duration-500"
              >
                {/* Visual placeholder */}
                <div className="relative h-56 lg:h-auto rounded-3xl overflow-hidden border border-[#2d6a4f] bg-[#081c15] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#2d6a4f18_1px,transparent_1px),linear-gradient(to_bottom,#2d6a4f18_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="relative z-10 text-center px-6">
                    <p className="text-[#74c69d] text-xs uppercase tracking-[3px] mb-2">GitHub</p>
                    <p className="text-[#b7e4c7]/50 text-sm">kingshuk26</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 leading-tight">{project.title}</h3>
                  <p className="text-[#b7e4c7] leading-loose mb-6 text-base">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full bg-[#081c15] border border-[#2d6a4f] text-sm text-[#b7e4c7]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-2xl bg-[#52b788] text-[#081c15] font-semibold hover:scale-105 transition text-sm"
                    >
                      View on GitHub
                    </a>
                    {project.details && (
                      <a
                        href={project.details}
                        className="px-6 py-3 rounded-2xl border border-[#52b788] text-[#b7e4c7] font-semibold hover:bg-[#1b4332] transition text-sm"
                        >
                          Project Details
                        </a>
                     )}    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GITHUB ───────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">GitHub</p>
          <h2 className="text-5xl font-bold mb-14">Activity</h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Stats images from github-readme-stats — real data */}
            <div className="space-y-6">
              <div className="p-6 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
                <p className="text-[#74c69d] text-xs uppercase tracking-[3px] mb-4">Stats</p>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=kingshuk26&theme=dark&hide_border=true&include_all_commits=false&count_private=false&bg_color=0b241c&title_color=74c69d&text_color=b7e4c7&icon_color=52b788"
                  alt="Kingshuk's GitHub Stats"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="p-6 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
                <p className="text-[#74c69d] text-xs uppercase tracking-[3px] mb-4">Top Languages</p>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=kingshuk26&theme=dark&hide_border=true&include_all_commits=false&count_private=false&layout=compact&bg_color=0b241c&title_color=74c69d&text_color=b7e4c7"
                  alt="Top Languages"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Streak + link */}
            <div className="space-y-6">
              <div className="p-6 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
                <p className="text-[#74c69d] text-xs uppercase tracking-[3px] mb-4">Streak</p>
                <img
                  src="https://nirzak-streak-stats.vercel.app/?user=kingshuk26&theme=dark&hide_border=true&background=0b241c&ring=74c69d&fire=52b788&currStreakLabel=74c69d"
                  alt="GitHub Streak"
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
                <h3 className="text-2xl font-bold mb-3">23 public repos</h3>
                <p className="text-[#b7e4c7] leading-loose mb-6 text-base">
                  Mostly Python and ML work — credit risk, healthcare AI, voice tools, and some
                  C++ algorithms. All code is open and on GitHub.
                </p>
                <a
                  href="https://github.com/kingshuk26"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-8 py-4 rounded-2xl bg-[#52b788] text-[#081c15] font-semibold hover:scale-105 transition"
                >
                  See all repos →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#74c69d] uppercase tracking-[4px] mb-4 text-sm">Contact</p>
          <h2 className="text-5xl font-bold mb-6">Get in touch</h2>
          <p className="text-[#b7e4c7] text-lg leading-loose max-w-2xl mx-auto mb-12">
            Open to internship opportunities, collaborations, or just talking about ML stuff.
            Reach out on any of these.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="https://github.com/kingshuk26"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-[#52b788] text-[#081c15] font-semibold hover:scale-105 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kingshuk-das-250990257/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl border border-[#40916c] hover:bg-[#1b4332] transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:kingshukdas089@gmail.com"
              className="px-8 py-4 rounded-2xl border border-[#40916c] hover:bg-[#1b4332] transition"
            >
              Email
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}