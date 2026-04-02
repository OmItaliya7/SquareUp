// import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

// export const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });


import nodemailer from "nodemailer";


export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // ✅ IMPORTANT (NOT 465)
  secure: false, // ✅ MUST be false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});