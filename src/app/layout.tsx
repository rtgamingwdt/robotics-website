"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [showNavBackground, setShowNavBackground] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavBackground(window.scrollY > 10);
      setShowScrollButton(window.scrollY > window.innerHeight / 2);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Team 7202 - Cyber Orioles</title>
        <meta name="description" content="The official website of the FRC Team 7202" />
        <meta name="keywords" content="Cyber, Orioles, FRC, 7202" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <Navbar showBackground={showNavBackground} />
        {children}
        {showScrollButton && <button onClick={() => window.scrollTo({ "top": 0, "behavior": "smooth" })} className="scroll-up"><FaArrowCircleUp /></button>}
        <Footer />
      </body>
    </html>
  );
}
