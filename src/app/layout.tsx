import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Functional Implementation Consultant Lead at Prometheus Group. Enterprise software implementation, forward-deployed delivery, and applied AI.";

export const metadata: Metadata = {
  title: "Josiah Woltjer | Implementation Consultant Lead",
  description,
  openGraph: {
    title: "Josiah Woltjer",
    description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sourceSans.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
