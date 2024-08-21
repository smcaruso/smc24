import type { Metadata } from "next";
import { Cormorant_Upright, Barlow } from "next/font/google";
import NavHeader from "./components/pageNavHeader"
import "./globals.css";

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
      <body className={barlow.className}>
        <NavHeader />
        {children}
    </body>
    </html>
  );
}
