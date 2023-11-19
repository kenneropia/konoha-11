import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Konoha 11",
  description:
    "Discover your inner ninja with the Konoha 11! Answer questions and find your character match!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
