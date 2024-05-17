import { useState } from "react";
import openai from "../utils/OpenAI";

const OpenAI = () => {
    const [input, setPrompt] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
  
    const handleClick = async () => {
      setLoading(true);
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          // prompt: input,
          temperature: 0.5,
          max_tokens: 100,
          messages: [{ role: "user", content: input },],
        });
        console.log (response)
        setResult(response.choices[0].message.content);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
  
    return (
      <main className="main flex justify-center items-center min-h-screen bg-orange-500 p-2 rounded-lg">
      <div className="container mx-auto max-w-lg bg-white p-6 rounded-lg shadow-md">
      <div className="text-center flex justify-center mb-5">OpenAi</div>
        <div className="mb-4">
          <textarea
            value={input}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Tulis Pertanyaanmu.."
            className="w-full h-32 p-2 border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="text-center mb-4">
          <button
            onClick={handleClick}
            disabled={loading}
            className={`btn ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Generating...
              </>
            ) : (
              'Generate'
            )}
          </button>
        </div>
        <div className="result p-4 border border-gray-300 rounded-md bg-gray-50">
          {result}
        </div>
      </div>
    </main>
    );
  };
  
  export default OpenAI;