// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import contactRoute from "./routes/contact.js";

// dotenv.config();

// const app = express();
// app.use(express.json());

// const PORT = process.env.PORT;

// app.use(cors({
//   origin: [
//     "http://localhost:5173",
//     "http://192.168.1.7:5173",
//     "https://square-upp.vercel.app"
//   ],
//   credentials: true
// }));

// // Routes
// app.use("/contact", contactRoute);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// export default app;


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoute from "./routes/contact.js";

dotenv.config();

const app = express();

// ✅ CORS (local)
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://192.168.1.7:5173", 
    "https://square-upp.vercel.app"
  ],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());

// ✅ route
app.use("/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = 8080;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});