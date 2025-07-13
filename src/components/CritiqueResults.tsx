import { useState } from "react";

interface CritiqueResultsProps {
  feedback: string;
}

export default function CritiqueResults({ feedback }: CritiqueResultsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(feedback);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!feedback) return null;

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 bg-gray-100 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-800">Critique Results</h2>
        <button
          onClick={handleCopy}
          className="text-sm text-blue-600 hover:underline focus:outline-none"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
        {feedback}
      </pre>
    </div>
  );
}
