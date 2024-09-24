import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send({ status: "active", message: "Server is running", version: "1.0.0", date: new Date().toISOString() });
});

app.post("/sendmail", async (req, res) => {
  try {
    const { to, from, subject, text } = req.body;

    const config = {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(config);

    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html: `<p>${text}</p>`,
    });

    console.log("Message sent: %s", info.messageId);

    res.status(200).send({ success: true, message: "Email sent successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
});

const PORT = process.env.PORT || 3665;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
