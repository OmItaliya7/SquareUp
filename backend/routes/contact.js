import express from "express";
import { transporter } from "../config/mail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, message, services, budget } = req.body;

    const mailOptions = {
      from: `"SquareUp Website" <${process.env.EMAIL_USER}>`,
      replyTo: `${name} <${email}>`, 
      to: process.env.EMAIL_USER, 
      subject: `New Lead from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#0f0f0f; padding:20px; color:#ffffff;">
          
          <div style="max-width:600px; margin:auto; background:#1a1a1a; border-radius:10px; padding:25px; border:1px solid #2a2a2a;">
            
            <h2 style="color:#9EFF00; margin-bottom:10px;">
              🚀 New Contact Form Submission
            </h2>

            <p style="color:#aaa; margin-bottom:20px;">
              You have received a new inquiry from SquareUp website.
            </p>

            <div style="border-top:1px solid #333; margin:20px 0;"></div>

            <p><strong>👤 Name:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>🛠 Services:</strong> ${
              services.length ? services.join(", ") : "Not selected"
            }</p>
            <p><strong>💰 Budget:</strong> ${
              budget === 0 ? "Flexible / Not sure" : `$${budget}`
            }</p>

            <div style="margin-top:20px;">
              <p><strong>💬 Message:</strong></p>
              <div style="background:#262626; padding:15px; border-radius:6px; color:#ddd;">
                ${message}
              </div>
            </div>

          </div>
        </div>
      `,
    };

    const autoResponseOptions = {
      from: `"SquareUp Team" <${process.env.EMAIL_USER}>`,
      to: email, // 👉 USER EMAIL
      subject: "We received your request 🚀",
      html: `
        <div style="font-family: Arial; padding:20px;">
          <h2 style="color:#9EFF00;">Thanks for contacting SquareUp 🚀</h2>
          
          <p>Hi ${name},</p>

          <p>We’ve received your request regarding <b>${services.join(", ") || "your inquiry"}</b>.</p>

          <p>Our team will review your message and get back to you within <b>24 hours</b>.</p>

          <br/>

          <p><b>Your Message:</b></p>
          <div style="background:#f5f5f5; padding:10px; border-radius:6px;">
            ${message}
          </div>

          <br/>

          <p>Best regards,<br/>SquareUp Team</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoResponseOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

export default router;