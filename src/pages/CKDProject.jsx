import shapLgbmImg from "../assets/ckd/shap-lgbm.png";
import shapXgbImg from "../assets/ckd/shap-xgb.png";
import architectureImg from "../assets/ckd/architecture.png";

export default function CKDProject() {
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
          <span className="text-[#b7e4c7] text-sm">CKD Stage Prediction</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 border-b border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-6">
            Healthcare AI · Machine Learning
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            CKD Stage Prediction
            <br />
            & Treatment AI
          </h1>

          <p className="mt-10 text-xl text-[#b7e4c7] max-w-3xl leading-loose">
            Chronic Kidney Disease stage classifier using a stacking ensemble of
            CatBoost, XGBoost, and LightGBM — with SHAP explainability and
            clinical rule-based treatment recommendations.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-14">
            {[
              { title: "Accuracy",  value: "96.8%" },
              { title: "Precision", value: "95.2%" },
              { title: "Recall",    value: "94.7%" },
              { title: "F1-Score",  value: "94.9%" },
              { title: "AUC-ROC",   value: "0.987" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <p className="text-[#95d5b2] text-xs uppercase tracking-[2px] mb-3">
                  {item.title}
                </p>
                <h3 className="text-4xl font-black text-[#74c69d]">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>

          {/* GitHub link */}
          <div className="mt-10">
            <a
              href="https://github.com/kingshuk26/CKD-Stage-Prediction-and-Treatment-AI"
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
              <h3 className="text-2xl font-bold mb-5">The problem</h3>
              <p className="text-[#b7e4c7] leading-loose text-lg">
                CKD is often detected late because early stages don't have obvious symptoms.
                The goal here was to build a model that can classify which stage a patient
                is at — and explain <em>why</em> it made that prediction, so it's actually
                useful in a clinical context rather than just a black box.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-2xl font-bold mb-5">What's inside</h3>
              <ul className="space-y-3 text-[#b7e4c7] text-base leading-relaxed">
                {[
                  "Multi-stage CKD classification (Stages 1–5)",
                  "Stacking ensemble: CatBoost + XGBoost + LightGBM",
                  "SHAP interaction plots for per-prediction explanations",
                  "Clinical rule engine with eGFR integration",
                  "Feature interaction analysis",
                  "Flask-based prediction dashboard",
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

      {/* ARCHITECTURE */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">System Design</p>
          <h2 className="text-5xl font-bold mb-14">Architecture</h2>

          <div className="rounded-[2rem] overflow-hidden border border-[#2d6a4f] bg-[#1b4332]/30">
            <img
              src={architectureImg}
              alt="ML Pipeline Architecture"
              className="w-full"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            {[
              { label: "Base Models",   desc: "CatBoost, XGBoost, and LightGBM trained independently on clinical features" },
              { label: "Meta-Model",    desc: "Stacking layer combines base model outputs for final stage prediction" },
              { label: "Clinical Layer", desc: "Rule engine uses eGFR and creatinine values to generate treatment recommendations" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <p className="text-[#74c69d] text-xs uppercase tracking-[3px] mb-3">{item.label}</p>
                <p className="text-[#b7e4c7] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAP */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Explainability</p>
          <h2 className="text-5xl font-bold mb-6">SHAP Analysis</h2>
          <p className="text-[#b7e4c7] text-lg mb-14 max-w-3xl leading-loose">
            SHAP interaction plots show which features are driving predictions for each model.
            This is what makes the system usable in practice — you can see exactly why a
            patient was classified at a particular stage.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "LightGBM — SHAP Interaction Summary", img: shapLgbmImg },
              { title: "XGBoost — SHAP Interaction Summary",  img: shapXgbImg  },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] overflow-hidden border border-[#2d6a4f] bg-[#1b4332]/30"
              >
                <img src={item.img} alt={item.title} className="w-full" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
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
              { label: "ML Models",      tech: "CatBoost · XGBoost · LightGBM" },
              { label: "Explainability", tech: "SHAP"                           },
              { label: "Backend",        tech: "Python · Flask"                 },
              { label: "Data",           tech: "Pandas · NumPy · Scikit-learn"  },
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