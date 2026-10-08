"use client"

import { useState, FormEvent } from "react"
import { MapPin, Mail, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const inputClasses =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = new FormData(e.currentTarget)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
        }),
      })

      if (!res.ok) throw new Error()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-6 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-1">
              Parlons de <span className="text-primary">votre projet</span>
            </h2>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
            <p className="font-medium">Trou-aux-Biches, Maurice</p>
          </div>

          {/* wa.me ouvre l'app WhatsApp sur mobile, WhatsApp Web/Desktop sur ordinateur */}
          <a
            href="https://wa.me/23055198539"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Écrire sur WhatsApp au +230 55 19 85 39"
            className="flex items-start gap-3 transition-colors hover:text-primary"
          >
            <svg aria-hidden viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-current text-primary"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            <span className="font-medium">+230 55 19 85 39</span>
          </a>

          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-primary shrink-0" />
            <p className="font-medium">diano.faniry@gmail.com</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border bg-muted/40 px-6 py-3 font-mono text-xs text-muted-foreground">
            $ send_message.sh --to diano
          </div>
          <form className="flex flex-col gap-5 p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact-name" className="text-sm font-medium">
                Nom
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Votre nom"
                required
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="vous@exemple.com"
                required
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-subject" className="text-sm font-medium">
                Sujet
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Le sujet de votre message"
                className={inputClasses}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Votre message"
                required
                className={`${inputClasses} resize-none`}
              />
            </div>

            <Button type="submit" disabled={status === "loading"} className="w-full cursor-pointer gap-2">
              {status === "loading" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
              {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
            </Button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="h-4 w-4" />
                Message envoyé.
              </p>
            )}

            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />
                L&apos;envoi a échoué. Réessayez, ou écrivez directement à diano.faniry@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
