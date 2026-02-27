"use client";
/* eslint-disable react/no-unescaped-entities */
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Career", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full py-2 z-99 border-b border-secondary lg:border-none lg:py-4 ">
      <div className="container mx-auto px-4 lg:px-10 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex items-center space-x-.5 text">
          <div className="w-18 h-18 ">
            <Image
              src="/img/ebonics-logo.png"
              alt="Ebonics Home Care Service Limited Logo"
              width={50}
              height={50}
              className="w-full h-full object-fill"
            />
          </div>
          <p className="font-bold text-primary text-2xl ">EBONICS</p>
        </div>

        <div className="hidden  lg:flex items-center space-x-4 ">
          {/* navLinks */}
          <nav className="flex items-center space-x-2 font-medium font-[.95rem] text-text-light ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-primary transition-colors duration-300 px-2 py-1"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 pr-12 ">
            {/* Contact Info */}
            <div className="flex items-start justify-center  flex-col -space-y-1 text-[#eee] font-oswald ">
              <p className="">Call us anytime</p>
              <p className="">(+234) 9039746329</p>
            </div>

            {/* Button */}
            <button className="inline-flex items-center text-text-main bg-white p-1.5 pl-6 font-medium text-[.95rem] cursor-pointer border-none transition-all duration-300 rounded-[50px] hover:bg-[#2a1921] hover:text-white group ">
              <span>Let's Connect</span>
              <span className="bg-primary text-white w-9 h-9 flex items-center justify-center ml-4 font-[1.2rem] rounded-[50%] group-hover:bg-white group-hover:text-primary ">
                <ArrowUpRight size={22} />
              </span>
            </button>
          </div>
        </div>

        {/* hamburger menu */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="w-full bg-white absolute top-17 left-0 lg:hidden mt-4 pt-5 pb-4 border-t border-gray-300">
            <div className="flex flex-col space-y-4 items-center ">
              {/* Mobile NavLinks */}
              <div className="flex flex-col items-center space-y-5 font-bold text-lg">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-black hover:text-primary transition-colors duration-300 px-2 py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div className="w-full flex flex-col items-center space-y-3 pt-4 border-t border-gray-200  ">
                <div className="font-oswald flex flex-col items-center space-y-0.5 px-2">
                  <p className="text-gray-400 text-sm">Call us anytime</p>
                  <p className="text-black">(+234) 9039746329</p>
                </div>

                {/* Button */}
                <button className="w-[90%] inline-flex items-center justify-center  p-1.5 pl-6  font-medium text-[.95rem] cursor-pointer border-none transition-all duration-300 rounded-[50px] bg-[#2a1921] text-white  ">
                  <span>Let's Connect</span>
                  <span className="w-9 h-9 flex items-center justify-center ml-4 font-[1.2rem] rounded-[50%] bg-white text-primary ">
                    <ArrowUpRight size={22} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
