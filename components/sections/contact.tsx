"use client"

import { useState, FormEvent } from "react"
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

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
              Besoin d&apos;aide ? <span className="text-primary">Contactez-nous !</span>
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

        <div className="relative overflow-hidden rounded-2xl">
          <div
            className="pointer-events-none absolute inset-[-50%] animate-[border-spin_3s_linear_infinite]"
            style={{
              background: "conic-gradient(from 0deg, transparent 70deg, var(--color-primary) 120deg, transparent 170deg)",
            }}
          />
          <div className="relative m-[1.5px] rounded-2xl bg-background p-6 md:p-8">

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Entrez votre nom..."
                  required
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Entrez votre email..."
                  required
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div>
                <input
                  name="subject"
                  type="text"
                  placeholder="Votre sujet"
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Votre message"
                  required
                  className="w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
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
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  Message envoyé avec succès !
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center  gap-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />
                  Une erreur est survenue. Réessayez plus tard.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
