import express from "express";
import { getTreasuryBalance } from "../services/blockchain.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const balance = await getTreasuryBalance();
    res.json({ balance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
