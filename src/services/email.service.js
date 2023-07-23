import nodeMailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodeMailer.createTransport({
  service: process.env.MAILING_SERVICE_PROVIDER,
  auth: {
    user: process.env.MAILING_SERVICE_EMAIL,
    pass: process.env.MAILING_SERVICE_PASSWORD,
  },
});

export const sendEmail = async (email, receipt) => {
  const mailOptions = {
    from: process.env.MAILING_SERVICE_EMAIL,
    to: email,
    subject: "Your Purchase Receipt",
    text: receipt,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
