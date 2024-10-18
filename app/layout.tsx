import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "J. S. Industries",
  description: "J. S. Industries is a leather goods manufacturer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#18181b" />
      <head>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
