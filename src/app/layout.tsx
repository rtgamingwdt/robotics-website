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
      <head>
        <title>Team 7202 - Cyber Orioles</title>
        <meta name="description" content="The official website of the FRC Team 7202"/>
        <meta name="keywords" content="Cyber, Orioles, FRC, 7202"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className={inter.className}>
        <Navbar showBackground={showNavBackground} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
