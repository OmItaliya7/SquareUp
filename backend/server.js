import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();

// ✅ Connect DB
connectDB();


const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(",") : [];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
    } 

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    }
    
    else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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