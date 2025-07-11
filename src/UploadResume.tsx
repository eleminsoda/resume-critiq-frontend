export default function UploadResume() {
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-bold mb-4">Upload Your Resume</h1>
      <textarea
        placeholder="Paste your resume here..."
        className="w-full h-40 p-2 border border-gray-300 rounded-md resize-none"
      />
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit for Critique
      </button>
    </div>
  );
}
