import type { Metadata } from "next";
import { Sora, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
// Uniquement pour le fond terminal du hero (décoratif, masqué sur mobile) : pas de préchargement
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap", preload: false });

export const metadata: Metadata = {
  title: "Diano ANDRIANTSALAMA, Software Engineer à Maurice",
  description:
    "Applications web et mobiles, automatisation avec n8n et configuration Odoo. Basé à Trou-aux-Biches, Maurice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`h-full antialiased ${sora.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
