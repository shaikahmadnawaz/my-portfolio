import nodemailer from "nodemailer";

export const sendMail = async ({ from, to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    // console.log("Email sent successfully");
  } catch (error) {
    // console.error("Error sending email: ", error);
    throw new Error("Failed to send email");
  }
};
