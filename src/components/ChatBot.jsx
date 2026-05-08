import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MessageCircle, X, Send } from "lucide-react";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi, I'm Kingshuk's AI assistant. Ask me about projects, AI research, ML systems, or software engineering work.",
    },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
  const prompt = `
You are Kingshuk's AI portfolio assistant.

You answer recruiter questions professionally and technically.
Keep answers concise, smart, and confident.

Focus on:
- AI
- Machine Learning
- Explainable AI
- Quantum Atom Engine
- CKD Stage Prediction AI
- Credit Risk XAI System
- Software engineering
- Research projects

User Question:
${currentInput}
`;

  const result = await model.generateContent(prompt);

  const response = await result.response.text();

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      text: response,
    },
  ]);

} catch (error) {

  console.log(error);

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      text: "Something went wrong. Please try again.",
    },
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
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] rounded-3xl border border-[#2d6a4f] bg-[#081c15]/95 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="p-4 border-b border-[#2d6a4f] flex items-center justify-between">
            <div>
              <h2 className="font-bold text-lg">Kingshuk AI</h2>
              <p className="text-xs text-[#95d5b2]">
                Portfolio Assistant
              </p>
            </div>

            <div className="w-3 h-3 rounded-full bg-[#52b788] animate-pulse"></div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-[#52b788] text-black"
                    : "bg-[#1b4332] text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="bg-[#1b4332] text-white px-4 py-2 rounded-2xl w-fit text-sm animate-pulse">
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-[#2d6a4f] flex gap-2">
            <input
              type="text"
              placeholder="Ask about projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
              className="flex-1 bg-[#1b4332] border border-[#2d6a4f] rounded-xl px-4 py-3 outline-none text-sm"
            />

            <button
              onClick={sendMessage}
              className="w-12 rounded-xl bg-[#52b788] text-black flex items-center justify-center hover:scale-105 transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}