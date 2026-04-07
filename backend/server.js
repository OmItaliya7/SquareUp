import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import contactRoute from "./routes/contact.js";

import rateLimit from "express-rate-limit";
import helmet from "helmet";

dotenv.config();

// Trust first proxy
const app = express();

app.set("trust proxy", 1); 

//  Connect DB
connectDB();

app.use(helmet());


const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin 
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
    credentials: true,
  })
);

//body parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Rate Limiting(contact only)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many requests. Please wait 15 minutes and try again..",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

//  Routes
app.use("/contact", contactLimiter , contactRoute);

app.get("/", (req,res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});