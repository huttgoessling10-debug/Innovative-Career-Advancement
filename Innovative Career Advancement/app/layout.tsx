import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Innovative Career Advancement Co. — Promotional Video Production",
  description:
    "Short promotional videos that get watched, not scrolled past. Social, ads, hiring pages, and product drops — starting at $50.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <div className="noise" aria-hidden="true" />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
