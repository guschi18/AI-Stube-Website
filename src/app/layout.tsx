import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Stube | KI für alle — verständlich, praktisch, alltagsnah",
  description: "Dein Wohnzimmer für Künstliche Intelligenz. Täglich nutzbare KI-Tool-Tutorials & No-Code-Lösungen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
