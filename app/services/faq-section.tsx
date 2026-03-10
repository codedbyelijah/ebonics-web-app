"use client";

import { useState } from "react";
import Button from "@/components/button";
import { servicesFAQs, whatsappMsg } from "@/libs";
import { useWhatsapp } from "@/hooks/useWhatsapp";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const { openWhatsApp } = useWhatsapp();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-15" id="faq">
      <div className="container-wrapper">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 border border-[#d1cec5] rounded-[20px] text-sm text-[#5a5a5a] mb-4">
            FAQ
          </span>
          <h2 className="text-[clamp(2rem,4vw,2.75rem)] leading-tight font-medium mb-4 tracking-[-0.01em] text-[#1c1c1c]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5a5a5a] text-base max-w-2xl mx-auto">
            Find answers to common questions about our care services and
            approach.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {servicesFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#e5e3db] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-medium text-[#1c1c1c] pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index
                      ? "bg-[#3e2632] rotate-180"
                      : "bg-[#eacfb9]"
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-white" />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 text-[#5a5a5a]">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-[#5a5a5a] mb-6">
            Still have questions? We&apos;re here to help.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="hero" path="/contact">
              Contact Us
            </Button>
            <Button
              variant="brand"
              onClick={() => openWhatsApp(whatsappMsg.client)}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
