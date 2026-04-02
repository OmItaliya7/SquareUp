import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();

// ✅ Connect DB
connectDB();

// ✅ Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://192.168.1.7:5173",
    "https://square-upp.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());

// ✅ Routes
app.use("/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("API running 🚀");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});