import axios from "axios";
import systemPrompt from "../prompts/systemPrompt.js";

export const analyzeWithOllama = async (transcript) => {

  const response = await axios.post(
    "http://localhost:11434/api/generate",
    {
      model: "llama3.2",

      prompt: `
${systemPrompt}

Transcript:
${transcript}
      `,

      stream: false,

      format: "json",

      options: {
        temperature: 0.2
      }
    }
  );

  return response.data.response;
};