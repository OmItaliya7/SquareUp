import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message, services, budget } = req.body;

    //  Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    //  Save to DB
    await Lead.create({
      name,
      email,
      message,
      services,
      budget,
    });

    res.status(201).json({
      success: true,
      message: "We 'll be in touch soon!",
    });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;