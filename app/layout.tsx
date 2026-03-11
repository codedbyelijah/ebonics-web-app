import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato, Fredoka, Oswald } from "next/font/google";
import "./globals.css";
import { Footer, Navbar, ChatWidget, StructuredData } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ebonics Homecare Services | Professional Home Care Services",
  description:
    "Ebonics Homecare Services provides compassionate, reliable home care for the elderly and individuals in need. Offering personalized support, caregiver assistance, and peace of mind for families.",
  keywords: [
    "home care",
    "elderly care",
    "caregiver services",
    "home health",
    "personalized care",
    "Ebonics Homecare Services",
    "Kaduna home care",
  ],
  authors: [{ name: "Ebonics Homecare Services" }],
  openGraph: {
    title: "Ebonics Homecare Services – Professional Home Care in [Your City]",
    description:
      "Compassionate and reliable home care services for the elderly and those in need. Personalized caregiver support and home health assistance.",
    type: "website",
    // url: "https://www.ebonicshomecare.com", // replace with your domain
    siteName: "Ebonics Homecare Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ebonics Homecare Services – Professional Home Care",
    description:
      "Compassionate and reliable home care services for the elderly and those in need.",
    // site: "@ebonicshomecare",
  },
  alternates: {
    canonical: "https://www.ebonicshomecare.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${fredoka.variable} ${oswald.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <ChatWidget />
        <StructuredData />
      </body>
    </html>
  );
}
