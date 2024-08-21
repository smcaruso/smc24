import type { Metadata } from "next";
import { Cormorant_Upright, Barlow } from "next/font/google";
import "./globals.css";

const cormorantUpright = Cormorant_Upright({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });
const barlow = Barlow({ weight: ["100", "300", "600"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Steven M. Caruso",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
