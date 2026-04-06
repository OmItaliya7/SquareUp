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
    const lead = await Lead.create({
      name,
      email,
      message,
      services,
      budget,
    });

    res.status(201).json({
      success: true,
      message: "Lead stored successfully",
      data: lead,
    });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;