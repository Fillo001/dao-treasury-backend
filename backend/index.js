import express from "express";
import cors from "cors";

import treasuryRoutes from "./routes/treasury.js";
import advisorRoutes from "./routes/advisor.js";
import privacyRoutes from "./routes/privacy.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/treasury", treasuryRoutes);
app.use("/api/advisor", advisorRoutes);
app.use("/api/privacy", privacyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
