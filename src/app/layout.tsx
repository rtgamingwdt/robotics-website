"use client";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showNavBackground, setShowNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavBackground(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar showBackground={showNavBackground} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
