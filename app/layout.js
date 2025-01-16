"use client";
import { useState } from "react";

import "./globals.css";
import Image from "next/image";
import Menu from "../public/svg/menu.svg";
import Button from "./ui/headerButton";
import Logo from "./ui/logo";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Footer from "./footer";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Exclude RootLayout for dashboard routes
  if (pathname.startsWith("/dashboard")) {
    return (
      <html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header
          className="sticky top-0 h-[48px] sm:h-[80px] px-[16px] sm:px-[32px] md:px-[40px]
            font-outfit flex justify-between items-center bg-white z-50"
        >
          <Logo classname="text-xl sm:text-[28px] lg:text-2xl" />

          <div className="flex gap-[32px] items-center">
            <ul
              className="hidden md:flex text-greyscale_title py-[24px] gap-[32px]
      font-medium"
            >
              <li className="hover:text-primary transition duration-300">
                <Link href="/">Events</Link>
              </li>
              <li className="hover:text-primary transition duration-300">
                <Link href="/">Partners & Sponsors</Link>
              </li>
              <li className="hover:text-primary transition duration-300">
                <Link href="/">About Us</Link>
              </li>
              <li className="hover:text-primary transition duration-300">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            <Button classname="hidden sm:block">Login</Button>
            <div>
              <Image
                src={Menu}
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden"
                alt="menu icon"
              />
            </div>
          </div>
        </header>

        {menuOpen && (
          <div
            className="fixed left-0 w-full md:hidden h-[85vh] bg-white shadow-lg z-40 
                py-4 px-6 flex flex-col justify-between"
          >
            <ul className="text-greyscale_title font-medium flex flex-col flex-grow overflow-auto">
              <li className="hover:text-primary transition duration-300 py-6">
                <Link href="/">Events</Link>
              </li>
              <li className="hover:text-primary transition duration-300 py-6">
                <Link href="/">Partners & Sponsors</Link>
              </li>
              <li className="hover:text-primary transition duration-300 py-6">
                <Link href="/">About Us</Link>
              </li>
              <li className="hover:text-primary transition duration-300 py-6">
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
            <Button classname="w-full">Login</Button>
          </div>
        )}

        {children}

      </body>
      <Footer />
    </html>
  );
}
