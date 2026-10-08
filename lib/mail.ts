import { Resend } from "resend";

// Destinataire des messages du formulaire de contact
const CONTACT_TO = process.env.CONTACT_TO || "diano.faniry@gmail.com";
// onboarding@resend.dev ne livre qu'à l'adresse du compte Resend : définir RESEND_FROM avec un domaine vérifié en production
const CONTACT_FROM = process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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
  // Instancié à l'appel : sans RESEND_API_KEY, le build ne doit pas échouer, seul l'envoi échoue
  const resend = new Resend(process.env.RESEND_API_KEY);
  const title = (subject || `Nouveau message de ${name}`).replace(/[\r\n]+/g, " ");

  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: email,
    subject: `[Portfolio] ${title}`,
    text: `Nom : ${name}\nEmail : ${email}\n${subject ? `Sujet : ${subject}\n` : ""}\n${message}`,
    html: `
      <h2>Nouveau message depuis le portfolio</h2>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      ${subject ? `<p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>` : ""}
      <p><strong>Message :</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    throw new Error(`Resend : ${error.name} ${error.message}`);
  }
}
