import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://192.168.1.7:5173",
    "https://square-upp.vercel.app/"
  ],
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("backend is running!");
});

app.use("/contact", contactRoute);

app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${process.env.PORT}`);
});