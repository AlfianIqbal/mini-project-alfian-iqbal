
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY || "your_openai_api_key_here",
  dangerouslyAllowBrowser: true
});

export default openai

