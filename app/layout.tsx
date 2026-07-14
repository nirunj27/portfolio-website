import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import GsapProvider from "@/components/animations/GsapProvider";
import Navbar from "@/components/layout/Navbar";
import { siteConfig } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: aboutDescription(),
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: aboutDescription(),
    type: "website",
  },
};

function aboutDescription() {
  return "Experienced Software Engineer specializing in React.js, TypeScript, and high-performance web applications.";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">
        <GsapProvider>
          <Navbar />
          <main>{children}</main>
        </GsapProvider>
      </body>
    </html>
  );
}
