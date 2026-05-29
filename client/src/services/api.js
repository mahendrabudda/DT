
import axios from "axios";

const API = "http://localhost:5000/api/analyze";

export const analyzeTranscript = async (transcript) => {

  const response = await axios.post(API, {
    transcript
  });

  return response.data;
};