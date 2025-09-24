import express from "express";
import { runPrivacyCheck } from "../services/privacy.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await runPrivacyCheck();
    res.json({ result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
