import express from "express";
import { analyzeWithOllama } from "../services/ollamaService.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const { transcript } = req.body;

    if (!transcript) {
      return res.status(400).json({
        error: "Transcript required"
      });
    }

    const result = await analyzeWithOllama(transcript);

    const parsedResult = JSON.parse(result);

    res.json(parsedResult);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: "Analysis failed"
    });
  }

});

export default router;