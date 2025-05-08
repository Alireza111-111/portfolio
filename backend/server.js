import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";
import validator from "validator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, ".env") });

const app = express();
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  message: { success: false, error: "Too many requests. Please try again later." },
});
app.use("/api/contact", limiter);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (
    !validator.isEmail(email) ||
    !validator.isLength(name, { min: 1, max: 100 }) ||
    !validator.isLength(message, { min: 1, max: 1000 })
  ) {
    return res.status(400).json({ success: false, error: "Invalid input." });
  }

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `Message:\n${message}\n\nFrom: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Email send error:", err.message);
    res.status(500).json({ success: false });
  }
});

app.listen(5001, () => {
  console.log("✅ Server is running on http://localhost:5001");
});