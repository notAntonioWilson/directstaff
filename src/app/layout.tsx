import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Direct Staff Inc. | Executive & Technical Search",
  description:
    "For over 30 years, Direct Staff has placed the engineers, designers, and technical experts that move the automotive, defense, and industrial sectors forward. Contract staffing and direct hire, nationwide.",
  metadataBase: new URL("https://www.dirstaff.com"),
  openGraph: {
    title: "Direct Staff Inc. | Executive & Technical Search",
    description:
      "Technical and engineering staffing for automotive, defense, and industrial programs. Contract and direct placement, nationwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-plum-900 focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
