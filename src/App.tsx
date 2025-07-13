import { useState } from "react";
import UploadResume from "./components/UploadResume";
import CritiqueResults from "./components/CritiqueResults";

function App() {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">AI Resume Critique</h1>
      <UploadResume onCritique={setFeedback} />
      <CritiqueResults feedback={feedback} />
    </div>
  );
}

export default App;
