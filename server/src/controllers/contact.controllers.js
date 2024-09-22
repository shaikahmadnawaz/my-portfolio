import { sendMail } from "../utils/mailer.js";

export const acceptContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const mailContent = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="background-color: #f2f2f2; padding: 20px; border-radius: 5px;">
          <h3 style="color: #4CAF50; font-size: 24px;">New Contact Request from Your Portfolio</h3>
          <p style="font-size: 16px;">
            <strong>Name:</strong> <span style="color: #555;">${name}</span>
          </p>
          <p style="font-size: 16px;">
            <strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a>
          </p>
          <p style="font-size: 16px;">
            <strong>Message:</strong> 
          </p>
          <div style="border-left: 4px solid #4CAF50; padding-left: 10px; margin-top: 10px; color: #555;">
            ${message}
          </div>
        </div>
        <footer style="margin-top: 20px; font-size: 14px; text-align: center; color: #777;">
          <p>Sent from your portfolio</p>
        </footer>
      </div>
    `;

    await sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Portfolio Contact Form - Message from ${name}`,
      html: mailContent,
    });

    return res
      .status(200)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error sending your message. Please try again later." });
  }
};
