import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 });
    }

    await sendContactEmail({ name, email, subject, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
