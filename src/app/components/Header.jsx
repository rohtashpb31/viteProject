"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar desktop-header  fixed w-full z-50">
        <div className="nav-container container mx-auto flex items-center justify-between ">

          {/* Logo */}
          <div className="nav-left">
            {/* <Image src="/logo.png" width={140} height={60} alt="logo" /> */}
            <Link href={'/'}>
            <h2 className="text-white text-xl font-bold">VIPL</h2>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="nav-links hidden md:flex gap-8 text-white text-sm font-medium">
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT US</Link></li>
            <li><Link href="/gallery">GALLERY</Link></li>
            <li><Link href="/services">SERVICES</Link></li>
            <li><Link href="/equipments">EQUIPMENT</Link></li>
            <li><Link href="/careers">CAREERS</Link></li>
          </ul>

          {/* Desktop Button */}
          <Link
            href="/contact"
            className="nav-btn hidden md:block bg-red-600  text-white rounded"
          >
            CONTACT US
          </Link>


        </div>
      </nav>

      <nav className="navbar mobile-header">

        <div className="nav-container container mx-auto flex items-center justify-between py-4 px-4">

          {/* Logo */}
          <div className="nav-left">
            {/* <Image src="/logo.png" width={140} height={60} alt="logo" /> */}
            <Link href={'/'}>
            <h2 className="text-white text-xl font-bold">VIPL</h2>
            </Link>
          </div>

          
<button
          className=" text-white"
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
         


        </div>

        {/* Mobile Hamburger Icon */}
        
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-50 transform ${open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h2 className="text-xl font-bold">MENU</h2>

          {/* Close Button */}
          <button onClick={() => setOpen(false)}>
            <X size={30} />
          </button>
        </div>

        <ul className="flex flex-col text-lg gap-6 mt-10  mobile-menu-list">
          <li onClick={() => setOpen(false)}><Link href="/" className="text-white">HOME</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/about" className="text-white">ABOUT US</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/gallery" className="text-white">GALLERY</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/services" className="text-white">SERVICES</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/equipments" className="text-white">EQUIPMENT</Link></li>
          <li onClick={() => setOpen(false)}><Link href="/careers" className="text-white">CAREERS</Link></li>
          <li className="mt-6">
            <Link
              onClick={() => setOpen(false)}
              href="/contact"
              className="primary-btn"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
