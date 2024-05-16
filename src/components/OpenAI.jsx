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
          prompt: input,
          temperature: 0.5,
          max_tokens: 100,
        });
        setResult(response.data.choices[0].text);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };
  
    return (
      <main className="main">
        <div className="w-2/4 mx-auto">
          <textarea
            type="text"
            // value={prompt}
            defaultValue={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Tulis Pertanyaanmu.."
            className="textarea"
          ></textarea>
  
          <button
            onClick={handleClick}
            disabled={loading}
            className="btn"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
  
          <pre className="result">{result}</pre>
        </div>
      </main>
    );
  };
  
  export default OpenAI;