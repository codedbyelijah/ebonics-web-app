"use client";
/* eslint-disable react/no-unescaped-entities */
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./button";
import { navLinks } from "@/libs";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const navbar = document.querySelector("nav");

      if (navbar && !navbar.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full py-2 z-99 transition-all duration-300  ${
        isScrolled
          ? "bg-white/10 backdrop-blur-md border-b border-secondary lg:py-1 "
          : "border-b border-secondary lg:border-none lg:py-4 "
      }`}
    >
      <div className="container mx-auto px-4 lg:px-10 flex justify-between items-center ">
        {/* Logo */}

        <Link href="/" className="flex items-center space-x-.5 text">
          <div className="w-18 h-18 ">
            <Image
              src="/img/ebonics-logo.png"
              alt="Ebonics Home Care Service Limited Logo"
              width={50}
              height={50}
              className="w-full h-full object-fill"
            />
          </div>
          <p className="font-bold text-primary text-xl">EBONICS</p>
        </Link>

        <div className="hidden  lg:flex items-center space-x-4 ">
          {/* navLinks */}
          <nav className="flex items-center space-x-2 font-medium font-[.95rem] text-text-light ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`  hover:text-primary transition-colors duration-300 px-2 py-1 ${isScrolled ? "text-black" : "text-white"} `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-2 pr-12 ">
            {/* Contact Info */}
            <div
              className={`flex items-start justify-center  flex-col -space-y-1  font-oswald ${isScrolled ? "text-gray-900" : "text-[#eee]"} `}
            >
              <p className="text-lg">Call us anytime</p>
              <p className="text-lg">(+234) 9039746329</p>
            </div>

            {/* Button */}
            <Button variant="navbar">Let's Connect</Button>
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
                  <p className="text-gray-400 text-sm ">Call us anytime</p>
                  <p className="text-black text-lg">(+234) 9039746329</p>
                </div>

                {/* Button */}
                <Button variant="navbar" className="w-[90%] justify-center">
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
