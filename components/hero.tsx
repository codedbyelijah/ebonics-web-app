"use client";

import { motion } from "motion/react";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <main className="h-auto w-full py-4 mb-10">
      <div className="container mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-11 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10 items-start pt-30 lg:pl-3">
          <div className="font-fredoka flex flex-col justify-center items-start space-y-6">
            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight"
            >
              Care at Home, <br /> Done Right
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:text-md w-full md:w-125 text-gray-500 text-lg"
            >
              Ebonics HomeCare Services brings trained, compassionate caregivers
              to your loved ones. We handle the details so families can focus on
              what matters.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button variant="brand" whatsapp>
                Free Consultation
              </Button>
            </motion.div>
          </div>

          {/* Hero Cards */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Caregiver Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white w-full h-full sm:w-auto rounded-md flex items-center space-x-1 shadow-sm sm:m-w-45"
            >
              <Image
                src="/img/ebonics-caregiver-2.jpg"
                alt="Ebonics Caregiver offering Care to a client"
                width={200}
                height={200}
                className="h-full rounded-sm object-fill flex-1"
                priority
              />
              <span
                className="text-text-light text-[1rem] font-oswald"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                Watch this video
              </span>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-md shadow-sm flex-1"
            >
              <QuoteIcon className="text-secondary mb-2" size={22} />
              <p className="text-lg text-gray-700">
                The care felt personal, not rushed. Our caregiver treated my
                father with real kindness and respect.
              </p>
              <span className="text-gray-600 font-medium">— Diane Lawson</span>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:col-span-6 h-80 md:h-100 lg:h-200 rounded-3xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/25"></div>
          <Image
            src="/img/ebonics-caregiver.png"
            alt="Caregiver with elderly man"
            width={500}
            height={500}
            className="w-full h-full object-cover lg:object-bottom"
            priority
          />
        </motion.div>
      </div>
    </main>
  );
}
