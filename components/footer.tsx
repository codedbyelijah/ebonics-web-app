/* eslint-disable react/jsx-key */

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { footerLinks, contactInfo } from "@/libs";

export default function Footer() {
  const socials = [<Facebook />, <Instagram />, <Twitter />, <Linkedin />];

  return (
    <>
      <footer className="bg-white  rounded-xl">
        <div className="container-wrapper pt-20 pb-8 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16 ">
            <div className="flex flex-col items-start justify-start gap-3">
              <div className="w-25 h-25 ">
                <Image
                  src="/img/ebonics-logo.png"
                  alt="Ebonics Home Care Service Limited Logo"
                  width={150}
                  height={150}
                  className="w-full h-full object-fill"
                />
              </div>

              <h2 className="text-xl lg:text-2xl text-gray-900 font-medium font-fredoka ">
                EBONICS HOMECARE SERVICES LTD{" "}
              </h2>
              <h2 className="text-lg lg:text-xl text-gray-700">
                Schedule Care for Your Family Now
              </h2>
              <Button variant="brand" whatsapp>
                Let&apos;s Connect
              </Button>
              <div className="flex justify-start items-center space-x-2">
                {socials.map((social, i) => (
                  <Link key={i} href="#">
                    {social}
                  </Link>
                ))}
              </div>
            </div>

            {footerLinks.map((link) => (
              <div className="flex flex-col justify-start " key={link.header}>
                <h4 className="text-2xl mb-3 font-medium font-fredoka text-gray-900 ">
                  {link.header}
                </h4>
                <ul className="flex flex-col gap-3 ">
                  {link.links.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-text-light text-[.95rem]"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="">
              <h4 className="text-2xl mb-3 font-medium font-fredoka text-gray-900 ">
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                {contactInfo.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-gray-900">
                      {item.title}:{" "}
                    </span>
                    <Link href="#" className="text-text-light text-[.95rem]">
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center pt-8 border-t-4 border-border-color text-text-light text-[.85rem] ">
            <p className="text-center text-lg">
              © Copyright 2026 | Ebonics Homecare Services LTD | All Right
              Reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
