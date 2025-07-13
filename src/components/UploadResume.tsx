import { useState } from "react";

interface UploadResumeProps {
  onCritique: (feedback: string) => void;
}

export default function UploadResume({ onCritique }: UploadResumeProps) {
  const [resumeText, setResumeText] = useState("");
  const [jobText, setJobText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/critique", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resume_text: resumeText,
          job_description: jobText,
        }),
      });

      const data = await response.json();
      onCritique(data.feedback);
    } catch (error) {
      console.error("Error submitting resume:", error);
      onCritique("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 space-y-4">
      <textarea
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your resume here..."
        className="w-full h-40 p-2 border border-gray-300 rounded-md resize-none"
      />
      <textarea
        value={jobText}
        onChange={(e) => setJobText(e.target.value)}
        placeholder="Optional: Paste job description"
        className="w-full h-24 p-2 border border-gray-300 rounded-md resize-none"
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
}
