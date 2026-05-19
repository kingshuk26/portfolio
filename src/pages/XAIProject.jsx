import explainabilityImg from "../assets/xai/explainability.png";
import shapImg from "../assets/xai/shap-summary.png";
import modelComparisonImg from "../assets/xai/model-comparison.png";
import featureImportanceImg from "../assets/xai/feature-importance.png";
import pipelineImg from "../assets/xai/pipeline-monitor.png";
import rocImg from "../assets/xai/roc-curve.png";

export default function XAIProject() {
  return (
    <div className="min-h-screen bg-[#081c15] text-[#d8f3dc] overflow-x-hidden">

      {/* Back nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-[#2d6a4f]/40 bg-[#081c15]/80">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          <a
            href="/"
            className="text-[#74c69d] text-sm hover:text-[#b7e4c7] transition"
          >
            ← Back
          </a>
          <span className="text-[#2d6a4f]">/</span>
          <span className="text-[#b7e4c7] text-sm">Credit Risk XAI</span>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 border-b border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-6">
            Machine Learning · Explainable AI
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight max-w-5xl">
            Credit Risk
            <br />
            Analytics Dashboard
          </h1>

          <p className="mt-10 text-xl text-[#b7e4c7] max-w-3xl leading-loose">
            ML dashboard for credit default prediction across 300K+ loan records.
            Built with SHAP explainability, ROC curve comparison, feature importance
            analysis, K-Means risk segmentation, and SQL-based data exploration —
            all in a multi-page Streamlit app.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-5 mt-14 max-w-2xl">
            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-xs uppercase tracking-[2px] mb-3">XGBoost AUC</p>
              <h3 className="text-4xl font-black text-[#74c69d]">0.753</h3>
            </div>
            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-xs uppercase tracking-[2px] mb-3">Explainability</p>
              <h3 className="text-4xl font-black text-[#74c69d]">SHAP</h3>
            </div>
            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-xs uppercase tracking-[2px] mb-3">Records</p>
              <h3 className="text-4xl font-black text-[#74c69d]">300K+</h3>
            </div>
          </div>

          {/* GitHub */}
          <div className="mt-10">
            <a
              href="https://github.com/kingshuk26/credit-risk-xai-system"
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
                Credit scoring models are often black boxes — a loan gets rejected
                and there's no way to know why. This project tries to fix that by
                pairing the prediction model with SHAP explanations so you can
                actually see which features drove a decision, and by how much.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-2xl font-bold mb-5">What's inside</h3>
              <ul className="space-y-3 text-[#b7e4c7] text-base leading-relaxed">
                {[
                  "SHAP summary and interaction plots",
                  "ROC curve comparison (LR vs XGBoost)",
                  "Feature importance visualization",
                  "K-Means risk segmentation",
                  "Pipeline monitoring dashboard",
                  "SQL explorer with live queries on SQLite",
                  "Multi-page Streamlit app",
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

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Dashboards</p>
          <h2 className="text-5xl font-bold mb-14">Screenshots</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              { title: "Explainability Dashboard", img: explainabilityImg     },
              { title: "SHAP Summary Plot",        img: shapImg               },
              { title: "Model Comparison",         img: modelComparisonImg    },
              { title: "Feature Importance",       img: featureImportanceImg  },
              { title: "Pipeline Monitor",         img: pipelineImg           },
              { title: "ROC Curve",                img: rocImg                },
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
        </div>
      </section>

      {/* MODEL PERFORMANCE */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Results</p>
          <h2 className="text-5xl font-bold mb-14">Model performance</h2>

          <div className="overflow-x-auto rounded-[2rem] border border-[#2d6a4f] bg-[#1b4332]/40">
            <table className="w-full">
              <thead className="border-b border-[#2d6a4f]">
                <tr>
                  <th className="text-left p-6 text-[#74c69d]">Model</th>
                  <th className="text-left p-6 text-[#74c69d]">ROC-AUC</th>
                  <th className="text-left p-6 text-[#74c69d]">Precision</th>
                  <th className="text-left p-6 text-[#74c69d]">Recall</th>
                  <th className="text-left p-6 text-[#74c69d]">F1</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#2d6a4f]/40">
                  <td className="p-6 font-semibold">Logistic Regression</td>
                  <td className="p-6">0.722</td>
                  <td className="p-6">0.15</td>
                  <td className="p-6">0.65</td>
                  <td className="p-6">0.25</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">XGBoost</td>
                  <td className="p-6 text-[#74c69d] font-bold">0.753</td>
                  <td className="p-6">0.17</td>
                  <td className="p-6">0.68</td>
                  <td className="p-6">0.27</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Honest note — keep this, it's good */}
          <div className="mt-6 p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
            <p className="text-[#b7e4c7] text-base leading-loose">
              <span className="text-[#74c69d] font-semibold">Note: </span>
              The dataset has an 8% default rate, so precision and F1 look low due to class
              imbalance — that's expected. ROC-AUC is the more meaningful metric here
              and is what the models were evaluated against.
            </p>
          </div>
        </div>
      </section>

      {/* DATASET */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">Data</p>
          <h2 className="text-5xl font-bold mb-14">Dataset</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                file: "application_train.csv",
                desc: "Core loan application data — borrower financials, employment, credit history, and repayment records.",
              },
              {
                file: "bureau.csv",
                desc: "Historical credit bureau records used for risk analysis and borrower profiling.",
              },
              {
                file: "previous_application.csv",
                desc: "Prior loan application history for behavioral analysis and financial decision tracking.",
              },
            ].map((item) => (
              <div
                key={item.file}
                className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]"
              >
                <h3 className="text-lg font-black text-[#74c69d] mb-4 font-mono break-all">
                  {item.file}
                </h3>
                <p className="text-[#b7e4c7] leading-loose text-sm">{item.desc}</p>
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
              { label: "Dashboard",   tech: "Streamlit · Plotly"          },
              { label: "Database",    tech: "SQLite · SQLAlchemy"          },
              { label: "ML",          tech: "Scikit-learn · XGBoost · SHAP" },
              { label: "Data",        tech: "Pandas · NumPy"               },
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