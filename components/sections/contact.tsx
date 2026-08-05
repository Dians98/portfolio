"use client"

import { useState, FormEvent } from "react"
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
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
              Besoin d&apos;aide ? <span className="text-primary">Contactez-moi !</span>
            </h2>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-primary shrink-0" />
            <p className="font-medium">Trou-aux-Biches, Mauritius</p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-primary shrink-0" />
            <p className="font-medium">+230 55 19 85 39</p>
          </div>

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
                Message envoyé avec succès !
              </p>
            )}

            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4" />
                Une erreur est survenue. Réessayez plus tard.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
