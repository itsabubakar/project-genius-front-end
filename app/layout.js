"use client"
import { useState } from "react";


import "./globals.css";
import Image from 'next/image';
import Menu from "../public/svg/menu.svg"
import Button from "./ui/headerButton";
import Subscribe from "./components/landing_page/subscribe.js"
import DualButtons from "./ui/dualButtons";
import Logo from "./ui/logo"
import Link from "next/link";

import insta from "../public/icons/instagram.svg"
import x from "../public/icons/x.svg"
import linkedin from "../public/icons/linkedin.svg"
import mail from "../public/icons/mail.svg"
export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <html lang="en">
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
                    
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
        </head>
        <body
        
      >
      <header className="sticky top-0 h-[48px] sm:h-[80px] px-[16px] sm:px-[32px] md:px-[40px]
  font-outfit flex justify-between items-center bg-white z-50">
  <Logo 
    classname="text-xl sm:text-[28px] lg:text-2xl"/>

  <div className="flex gap-[32px] items-center">
    <ul className="hidden md:flex text-greyscale_title py-[24px] gap-[32px]
      font-medium">
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
        <Link href="/">Contact Us</Link>
      </li>
    </ul>
    <Button
      classname="hidden sm:block">Login</Button>
    <div>
      <Image 
        src={Menu} 
        onClick={() => setMenuOpen(!menuOpen)} 
        className="md:hidden" 
        alt="menu icon"/>
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
        <Link href="/">Contact Us</Link>
      </li>
    </ul>
    <Button classname="w-full">Login</Button>
  </div>
)}



        {children}

        <footer className="bg-primary_dark text-greyscale_surface_subtle px-[20px] py-[64px] gap-16 sm:gap-14 mt-10
          flex flex-col md:items-center">
          <Subscribe />

          <div className="flex flex-col gap-8 md:items-center lg:flex-row">
            <h2 className="text-3xl font-[800] sm:text-[44px] lg:text-[52px]">Turn Your Ideas into Reality</h2>
            <DualButtons 
              classname="flex-col sm:flex-row-reverse justify-end xs:mx-auto sm:mx-0 
                "
              text_color="text-greyscale_surface_subtle"
            />

          </div>

          <Logo 
          classname="text-4xl font-[700] text-greyscale_surface_subtle
            md:text-center"
          />

          <div className=" md:mx-auto grid grid-cols-1 xs:grid-cols-2 gap-10
            md:grid-cols-4
            md:gap-[72px]">
            
            <div className="flex flex-col gap-7 xs:order-1">
              <h4 className="text-xl font-bold">About Us</h4>
              <ul className="flex flex-col gap-3 inter">
                  <li>
                    <Link href="/">Learn more</Link>
                  </li>
                  <li>
                    <Link href="/">Our mission</Link>
                  </li>
                  <li>
                    <Link href="/">Our vision</Link>
                  </li>
              </ul>
            </div>

            <div className="flex flex-col gap-7">
              <h4 className="text-xl font-bold">Events</h4>
              <ul className="flex flex-col gap-3 inter">
                  <li>
                    <Link href="/">Past highlights</Link>
                  </li>
                  <li>
                    <Link href="/">Upcoming events</Link>
                  </li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-7">
              <h4 className="text-xl font-bold">Partners & Sponsors</h4>
              <ul className="flex flex-col gap-3 inter">
                  <li>
                    <Link href="/">Meet our sponsors</Link>
                  </li>
                  <li>
                    <Link href="/">Partnership opportunities</Link>
                  </li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-7 order-1">
              <h4 className="text-xl font-bold">Contact us</h4>
              <ul className="flex gap-3">
                  <li>
                    <Link href="/">
                      <Image src={mail} alt="mail"/>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Image src={insta} alt="mail"/>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Image src={x} alt="mail"/>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <Image src={linkedin} alt="mail"/>
                    </Link>
                  </li>
              </ul>
            </div>
          </div>

          
          

          <div className="flex flex-col pt-8 sm:flex-row-reverse justify-between gap-4 border-t w-full border-t-greyscale_text">
            <ol className="flex gap-4 inter">
                <li>
                  <Link href="/">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    Cookies
                  </Link>
                </li>

            </ol>

            <p>© 2077 Untitled UI. All rights reserved.</p>

          </div>

        </footer>
      </body>
    </html>
  );
}
