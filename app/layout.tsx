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
  title: {
    default: "O.MURPHIS GLOBAL LTD. | Building Progress",
    template: "%s | O.MURPHIS GLOBAL LTD.",
  },
  description:
    "O.MURPHIS GLOBAL LTD. is a Lagos-based private limited company operating in building, construction and heavy machinery.",
  openGraph: {
    title: "O.MURPHIS GLOBAL LTD. | Building Progress",
    description:
      "Building progress. Powering possibilities. Based in Lagos, Nigeria.",
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
