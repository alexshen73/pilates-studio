import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Poppins } from "next/font/google";

import "@/app/globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const bodyLatinFont = Poppins({
  variable: "--font-body-latin",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Online Pilates Landing",
    template: "%s | Pilates",
  },
  description: "Bilingual online pilates sessions with a certified trainer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${bodyLatinFont.variable}`}>
        {children}
      </body>
    </html>
  );
}

