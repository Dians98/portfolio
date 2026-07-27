import type { Metadata } from "next";
import { Satisfy } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const satisfy = Satisfy({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-satisfy" });

export const metadata: Metadata = {
  title: "Portfolio",
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
      className={`h-full antialiased ${satisfy.variable}`}
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
