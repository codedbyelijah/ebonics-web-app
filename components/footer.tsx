"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { X } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
          <a href="#" className="lg:justify-self-start">
            <Image
              src="/img/logo.svg"
              alt="Logo image"
              width={120}
              height={40}
              className="inline-block"
            />
          </a>
          <ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
            <li className="font-semibold">
              <a href="#" className="hover:text-blue-600 transition-colors">About us</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="hover:text-blue-600 transition-colors">Our services</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="hover:text-blue-600 transition-colors">Meet caregivers</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="hover:text-blue-600 transition-colors">Join us</a>
            </li>
            <li className="font-semibold">
              <a href="#" className="hover:text-blue-600 transition-colors">Contact us</a>
            </li>
          </ul>
          <div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <X className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="h-px w-full bg-black" />
        <div className="flex flex-col-reverse items-center justify-center justify-items-center pb-4 pt-6 text-sm md:flex-row md:gap-x-6 md:pb-0 md:pt-8">
          <ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
            <p className="mt-8 md:mt-0">© 2024 Homecare Agency. All rights reserved.</p>
          </ul>
        </div>
      </div>
    </footer>
  );
}
