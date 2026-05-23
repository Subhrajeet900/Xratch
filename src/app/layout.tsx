import type { Metadata, Viewport } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#DEDAD4",
};

export const metadata: Metadata = {
  title: "Xratch – Build Beautifully",
  description: "Xratch is a premium creative and tech partner for ambitious clients.",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
      className={`${outfit.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
