import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIChatbot from "./components/ChatBot";

import Home from "./pages/Home";
import XAIProject from "./pages/XAIProject";
import CKDProject from "./pages/CKDProject";
import QuantumProject from "./pages/QuantumProject";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/projects/xai-system"
          element={<XAIProject />}
        />

        <Route
          path="/projects/ckd-ai"
          element={<CKDProject />}
        />

        <Route
          path="/projects/quantum-engine"
          element={<QuantumProject />}
        />

      </Routes>

      {/* FLOATING CHATBOT */}
      <AIChatbot />

    </BrowserRouter>
  );
}