import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_TO,
    subject: subject || `[Portfolio] Nouveau message de ${name}`,
    html: `
      <h2>Nouveau message depuis le portfolio</h2>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      ${subject ? `<p><strong>Sujet :</strong> ${subject}</p>` : ""}
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });
}
