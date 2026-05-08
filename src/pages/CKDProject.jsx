import shapLgbmImg from "../assets/ckd/shap-lgbm.png";
import shapXgbImg from "../assets/ckd/shap-xgb.png";
import architectureImg from "../assets/ckd/architecture.png";

export default function CKDProject() {
  return (
    <div className="min-h-screen bg-[#081c15] text-[#d8f3dc] overflow-x-hidden">

      {/* HERO */}
      <section className="px-6 py-24 border-b border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-6">
            Healthcare AI System
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            CKD Stage Prediction
            <br />
            & Treatment AI
          </h1>

          <p className="mt-10 text-xl text-[#b7e4c7] max-w-4xl leading-loose">
            AI-powered Chronic Kidney Disease prediction system
            designed to classify CKD stages using ensemble machine
            learning models, explainable AI techniques, and
            clinical rule-based recommendations.
          </p>

          <div className="grid md:grid-cols-5 gap-5 mt-14">

            {[
              { title: "Accuracy", value: "96.8%" },
              { title: "Precision", value: "95.2%" },
              { title: "Recall", value: "94.7%" },
              { title: "F1-Score", value: "94.9%" },
              { title: "AUC-ROC", value: "0.987" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <p className="text-[#95d5b2] text-sm mb-3">
                  {item.title}
                </p>

                <h3 className="text-4xl font-black text-[#74c69d]">
                  {item.value}
                </h3>
              </div>
            ))}

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
              Explainable Clinical Intelligence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-bold mb-6">
                Core Objective
              </h3>

              <p className="text-[#b7e4c7] leading-loose text-lg">
                The system predicts Chronic Kidney Disease stages
                using ensemble machine learning while maintaining
                interpretability through SHAP explainability.
                It combines predictive analytics with clinical
                logic to support transparent healthcare decisions.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-bold mb-6">
                Key Features
              </h3>

              <ul className="space-y-4 text-[#b7e4c7] text-lg">
                <li>• Multi-stage CKD Classification</li>
                <li>• Explainable AI using SHAP</li>
                <li>• Ensemble Stacking Architecture</li>
                <li>• Clinical Rule Engine</li>
                <li>• Feature Interaction Analysis</li>
                <li>• Real-Time Prediction Dashboard</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              System Design
            </p>

            <h2 className="text-5xl font-bold">
              ML Architecture Pipeline
            </h2>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-[#2d6a4f] bg-[#1b4332]/30">
            <img
              src={architectureImg}
              alt="Architecture"
              className="w-full"
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-10">

            {[
              "CatBoost + XGBoost + LightGBM Ensemble",
              "Meta-Model Risk Assessment Pipeline",
              "Clinical Rule Engine + eGFR Integration",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <h3 className="text-xl font-bold leading-relaxed">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SHAP VISUALIZATION */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Explainable AI
            </p>

            <h2 className="text-5xl font-bold">
              SHAP Interaction Analysis
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {[
              {
                title: "LightGBM SHAP Interaction Summary",
                img: shapLgbmImg,
              },
              {
                title: "XGBoost SHAP Interaction Summary",
                img: shapXgbImg,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-[2rem] overflow-hidden border border-[#2d6a4f] bg-[#1b4332]/30"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full"
                />

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

      {/* MODEL PERFORMANCE */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Classification Metrics
            </p>

            <h2 className="text-5xl font-bold">
              Stage-wise Performance
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-[#2d6a4f] bg-[#1b4332]/30">
            <table className="w-full text-left">
              <thead className="bg-[#1b4332]">
                <tr>
                  <th className="p-6 text-[#74c69d]">Stage</th>
                  <th className="p-6 text-[#74c69d]">Precision</th>
                  <th className="p-6 text-[#74c69d]">Recall</th>
                </tr>
              </thead>

              <tbody>

                {[
                  ["Stage 1", "98.2%", "97.8%"],
                  ["Stage 2", "96.5%", "95.9%"],
                  ["Stage 3a", "94.8%", "93.2%"],
                  ["Stage 3b", "93.1%", "94.5%"],
                  ["Stage 4", "95.7%", "96.1%"],
                  ["Stage 5", "97.3%", "98.0%"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-t border-[#2d6a4f]"
                  >
                    <td className="p-6">{row[0]}</td>
                    <td className="p-6">{row[1]}</td>
                    <td className="p-6">{row[2]}</td>
                  </tr>
                ))}

              </tbody>
            </table>
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
              AI & Clinical Analytics Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Machine Learning",
                tech: "CatBoost, XGBoost, LightGBM",
              },
              {
                title: "Explainability",
                tech: "SHAP Explainable AI",
              },
              {
                title: "Backend",
                tech: "Python + Flask",
              },
              {
                title: "Data Science",
                tech: "Pandas, NumPy, Scikit-learn",
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