import express from "express";
import { getAIRecommendation } from "../services/aiAgent.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recommendation = await getAIRecommendation();
    res.json({ recommendation });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
