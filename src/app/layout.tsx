import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RapidFundi by Lantei - Verified Plumbers Anywhere in Nairobi",
  description: "Nearest NITA-licensed fundi dispatched across Nairobi. Typically 30-60 mins depending on area and traffic. Upfront pricing, photo proof, M-Pesa to LANTEI till. One hotline: +254 722 819 877. RapidFundi is a product of Lantei Supplies.",
  icons: {
    icon: "/rapidfundi.png",
    apple: "/rapidfundi.png",
  },
  metadataBase: new URL("https://rapidfundi.vercel.app"),
  openGraph: {
    title: "RapidFundi by Lantei - Verified Plumbers Anywhere in Nairobi",
    description: "Book in 30 seconds, get nearest verified fundi, pay via M-Pesa to LANTEI. Emergency line 24/7, standard visits 8am-7pm.",
    url: "https://rapidfundi.vercel.app",
    siteName: "RapidFundi",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}