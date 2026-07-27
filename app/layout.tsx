import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const pacifico = Pacifico({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-pacifico" });

export const metadata: Metadata = {
  title: "Dian's Portfolio",
  description: "Portfolio personnel",
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
      className={`h-full antialiased ${pacifico.variable}`}
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
