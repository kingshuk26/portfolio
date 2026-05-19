import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send } from "lucide-react";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const SYSTEM_PROMPT = `You are a helpful assistant on Kingshuk Das's portfolio website.

About Kingshuk:
- Third-year CSE student at College of Engineering Roorkee (graduating 2026)
- Interned as Python Developer at Oasis Infobyte (Aug–Dec 2024)
- Interests: ML, data analytics, explainable AI, competitive programming

Projects:
1. Credit Risk Analytics Dashboard — XGBoost + Logistic Regression on 300K+ loan records, SHAP explainability, K-Means risk segmentation, Streamlit multi-page app, SQLite. AUC: 0.75.
2. CKD Stage Prediction — Stacking ensemble (CatBoost, XGBoost, LightGBM) for Chronic Kidney Disease classification. 96.8% accuracy, AUC-ROC 0.987, SHAP interaction plots, Flask backend.
3. Voice Assistant — Flask + Python, SpeechRecognition, pyttsx3, MediaRecorder API, integrates YouTube/Wikipedia/OpenWeatherMap.
4. Quantum Atom Engine — Browser-based SCF solver for radial Kohn-Sham equations, real-time electron density visualization, built in TypeScript with Three.js.

Skills: Python, C/C++, SQL, JavaScript, TensorFlow, PyTorch, Scikit-learn, XGBoost, SHAP, Pandas, NumPy, Flask, React, Streamlit, Git.

Contact: kingshukdas089@gmail.com | github.com/kingshuk26 | linkedin.com/in/kingshuk-das-250990257

Instructions:
- Answer questions about Kingshuk's background, projects, and skills
- Keep answers short and conversational — 2-4 sentences max unless more detail is asked
- If asked something unrelated to Kingshuk or his work, politely redirect
- Don't make up information that isn't listed above
- Don't use bullet points unless specifically helpful`;

export default function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef        = useRef(null);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey! I can answer questions about Kingshuk's projects, skills, or background. What would you like to know?",
    },
  ]);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const conversationHistory = messages
        .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.text}`)
        .join("\n");

      const fullPrompt = `${SYSTEM_PROMPT}

Conversation so far:
${conversationHistory}

User: ${currentInput}
Assistant:`;

      const result   = await model.generateContent(fullPrompt);
      const response = await result.response.text();

      setMessages((prev) => [...prev, { role: "assistant", text: response }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Something went wrong. Please try again." },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#52b788] text-black flex items-center justify-center shadow-2xl hover:scale-110 transition"
        aria-label="Toggle chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] rounded-3xl border border-[#2d6a4f] bg-[#081c15]/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">

          {/* Header */}
          <div className="p-4 border-b border-[#2d6a4f] flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">Ask me anything</h2>
              <p className="text-xs text-[#95d5b2]">About Kingshuk's work</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#52b788] animate-pulse" />
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-[#52b788] text-black"
                    : "bg-[#1b4332] text-[#d8f3dc]"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-[#1b4332] text-[#95d5b2] px-4 py-2 rounded-2xl w-fit text-sm animate-pulse">
                Typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#2d6a4f] flex gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 bg-[#1b4332] border border-[#2d6a4f] rounded-xl px-4 py-3 outline-none text-sm text-[#d8f3dc] placeholder-[#2d6a4f]"
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="w-12 rounded-xl bg-[#52b788] text-black flex items-center justify-center hover:scale-105 transition disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}