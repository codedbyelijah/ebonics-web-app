"use client";

import { useState } from "react";
import { careerFAQs } from "@/libs";
import { ChevronDown } from "lucide-react";
import Button from "@/components/button";

export default function CareerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-10">
      <div className="container-wrapper">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag">Questions</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We&apos;re here to help you learn more about joining our team
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {careerFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index
                      ? "bg-blue-600 rotate-180"
                      : "bg-gray-300"
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
                <div className="px-6 py-4 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Ready to join our compassionate team?
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="hero" whatsapp>
              Contact Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
