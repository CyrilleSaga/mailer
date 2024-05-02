import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ hello: "World" });
});

app.post("/sendmail", async (req, res) => {
  try {
    const { to, from, subject, text } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
    });

    console.log("Message sent: %s", info.messageId);

    res.status(200).send({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
