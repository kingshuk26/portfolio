import explainabilityImg from "../assets/xai/explainability.png";
import shapImg from "../assets/xai/shap-summary.png";
import modelComparisonImg from "../assets/xai/model-comparison.png";
import featureImportanceImg from "../assets/xai/feature-importance.png";
import pipelineImg from "../assets/xai/pipeline-monitor.png";
import rocImg from "../assets/xai/roc-curve.png";

export default function XAIProject() {
  return (
    <div className="min-h-screen bg-[#081c15] text-[#d8f3dc] overflow-x-hidden">

      {/* HERO */}
      <section className="px-6 py-24 border-b border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-6">
            Explainable AI Platform
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight max-w-5xl">
            Credit Risk XAI
            <br />
            Intelligence Platform
          </h1>

          <p className="mt-10 text-xl text-[#b7e4c7] max-w-4xl leading-loose">
            Production-style Explainable AI analytics platform for
            credit risk prediction using SHAP explainability,
            interpretable machine learning, feature importance
            analysis, ROC curve evaluation, SQL exploration,
            and pipeline intelligence dashboards.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mt-14">

            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-sm mb-3">
                Primary Metric
              </p>

              <h3 className="text-4xl font-black text-[#74c69d]">
                0.753
              </h3>

              <p className="text-sm text-[#b7e4c7] mt-3">
                XGBoost ROC-AUC
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-sm mb-3">
                Explainability
              </p>

              <h3 className="text-4xl font-black text-[#74c69d]">
                SHAP
              </h3>

              <p className="text-sm text-[#b7e4c7] mt-3">
                Interpretable ML System
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
              <p className="text-[#95d5b2] text-sm mb-3">
                Data Pipeline
              </p>

              <h3 className="text-4xl font-black text-[#74c69d]">
                300K+
              </h3>

              <p className="text-sm text-[#b7e4c7] mt-3">
                Financial Records Processed
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Project Overview
            </p>

            <h2 className="text-5xl font-bold">
              Explainable Credit Intelligence
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-bold mb-6">
                Problem Statement
              </h3>

              <p className="text-[#b7e4c7] leading-loose text-lg">
                Traditional credit scoring systems often behave like
                black-box models, making it difficult to understand
                why a loan application is classified as risky.
                This project focuses on creating a transparent,
                interpretable, and analytics-driven AI platform
                capable of explaining prediction behavior using
                SHAP explainability and interactive dashboards.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-bold mb-6">
                Core Features
              </h3>

              <ul className="space-y-4 text-[#b7e4c7] text-lg">
                <li>• SHAP Explainability Analysis</li>
                <li>• ROC Curve Comparison</li>
                <li>• Pipeline Monitoring Dashboard</li>
                <li>• SQL Data Exploration</li>
                <li>• Risk Segmentation Analytics</li>
                <li>• Feature Importance Visualization</li>
                <li>• Model Comparison Engine</li>
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
              Dashboards
            </p>

            <h2 className="text-5xl font-bold">
              Explainability & Analytics
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {[
              {
                title: "Explainability Dashboard",
                img: explainabilityImg,
              },
              {
                title: "SHAP Summary Plot",
                img: shapImg,
              },
              {
                title: "Model Comparison",
                img: modelComparisonImg,
              },
              {
                title: "Feature Importance Analysis",
                img: featureImportanceImg,
              },
              {
                title: "Pipeline Monitoring",
                img: pipelineImg,
              },
              {
                title: "ROC Curve Analytics",
                img: rocImg,
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

      {/* MODEL PERFORMANCE */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Model Evaluation
            </p>

            <h2 className="text-5xl font-bold">
              Performance Metrics
            </h2>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-[#2d6a4f] bg-[#1b4332]/40">
            <table className="w-full">

              <thead className="border-b border-[#2d6a4f]">
                <tr>
                  <th className="text-left p-6 text-[#74c69d]">
                    Model
                  </th>

                  <th className="text-left p-6 text-[#74c69d]">
                    ROC-AUC
                  </th>

                  <th className="text-left p-6 text-[#74c69d]">
                    Precision
                  </th>

                  <th className="text-left p-6 text-[#74c69d]">
                    Recall
                  </th>

                  <th className="text-left p-6 text-[#74c69d]">
                    F1 Score
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-[#2d6a4f]/40">
                  <td className="p-6 font-semibold">
                    Logistic Regression
                  </td>

                  <td className="p-6">0.722</td>
                  <td className="p-6">0.15</td>
                  <td className="p-6">0.65</td>
                  <td className="p-6">0.25</td>
                </tr>

                <tr>
                  <td className="p-6 font-semibold">
                    XGBoost
                  </td>

                  <td className="p-6 text-[#74c69d] font-bold">
                    0.753
                  </td>

                  <td className="p-6">0.17</td>
                  <td className="p-6">0.68</td>
                  <td className="p-6">0.27</td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 rounded-3xl bg-[#1b4332]/40 border border-[#2d6a4f]">
            <p className="text-[#b7e4c7] text-lg leading-loose">
              <span className="text-[#74c69d] font-semibold">
                Note:
              </span>{" "}
              Class imbalance (8% default rate) affects precision metrics.
              ROC-AUC is treated as the primary evaluation metric for
              model comparison and system performance analysis.
            </p>
          </div>

        </div>
      </section>

      {/* DATASET */}
      <section className="px-6 py-24 border-t border-[#1b4332]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="uppercase tracking-[4px] text-[#74c69d] text-sm mb-4">
              Dataset Intelligence
            </p>

            <h2 className="text-5xl font-bold">
              Financial Data Pipeline
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-black text-[#74c69d] mb-4">
                application_train.csv
              </h3>

              <p className="text-[#b7e4c7] leading-loose">
                Core loan application dataset containing borrower
                financial details, employment information,
                credit behavior, and repayment records.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-black text-[#74c69d] mb-4">
                bureau.csv
              </h3>

              <p className="text-[#b7e4c7] leading-loose">
                Historical credit bureau records used for
                risk analysis, repayment trends,
                and borrower profiling.
              </p>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#1b4332]/40 border border-[#2d6a4f]">
              <h3 className="text-3xl font-black text-[#74c69d] mb-4">
                previous_application.csv
              </h3>

              <p className="text-[#b7e4c7] leading-loose">
                Historical loan application records enabling
                behavioral analysis and previous
                financial decision tracking.
              </p>
            </div>

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
              AI Engineering Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Frontend",
                tech: "Streamlit, Plotly",
              },
              {
                title: "Database",
                tech: "SQLite + SQLAlchemy",
              },
              {
                title: "Machine Learning",
                tech: "Scikit-learn, XGBoost, SHAP",
              },
              {
                title: "Data Processing",
                tech: "Pandas, NumPy",
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