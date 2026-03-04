/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

export default function Footer() {
  const footerLink = [
    {
      header: "Quick Links",
      links: [
        {
          title: "Our Services",
          href: "/service",
        },
        {
          title: "About Us",
          href: "/about-us",
        },
        {
          title: "FAQ",
          href: "/about-us#faq",
        },
        {
          title: "Blog",
          href: "/",
        },
      ],
    },
    {
      header: "Service",
      links: [
        {
          title: "In-Home Care",
          href: "/service",
        },
        {
          title: "Personal Care",
          href: "/service",
        },
        {
          title: "Medication Support",
          href: "/service",
        },
        {
          title: "Companionship",
          href: "/service",
        },
        {
          title: "Mobility Support",
          href: "/service",
        },
        {
          title: "Respite Care",
          href: "/service",
        },
      ],
    },
  ];

  const contact = [
    {
      title: "Contact",
      content: "(+234) 9039746329",
    },
    {
      title: "Email",
      content: "ebonicshomecareservices98@gmail.com",
    },
    {
      title: "Location",
      content: "M5 HADEJA STREET/IBRAHIM TAIWO RD KADUNA, KADUNA STATE",
    },
  ];

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

              <h2 className=" text-xl lg:text-2xl  font-medium font-fredoka ">
                EBONICS HOMECARE SERVICES LTD{" "}
              </h2>
              <h2 className="text-lg lg:text-xl">
                Schedule Care for Your Family Now
              </h2>
              <Button variant="brand">Let's Connect</Button>
              <div className="flex justify-start items-center space-x-2">
                {socials.map((social, i) => (
                  <Link key={i} href="#">
                    {social}
                  </Link>
                ))}
              </div>
            </div>

            {footerLink.map((link) => (
              <div className="flex flex-col justify-start " key={link.header}>
                <h4 className="text-2xl mb-3 font-medium font-fredoka  ">
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
              <h4 className="text-2xl mb-3 font-medium font-fredoka ">
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                {contact.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold">{item.title}: </span>
                    <Link href="#" className="text-text-light text-[.95rem]">
                      {item.content}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center items-center pt-8 border-t-4 border-border-color text-text-light text-[.85rem] ">
            <p className="text-center">
              © Copyright 2026 | Ebonics Homecare Services LTD | All Right
              Reserved{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
