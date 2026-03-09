/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Button from "@/components/button";

const faqs = [
  {
    question: "What types of care services do you offer?",
    answer:
      "We offer comprehensive care services including personal care, companionship, elderly care, post-hospital care, nursing support, childcare, hospital escort, housekeeping, postpartum care, specialized abilities care, and driver services.",
  },
  {
    question: "How do I know which care service is right for my family?",
    answer:
      "We start with a free consultation to understand your specific needs, daily routines, and health requirements. Our experts then recommend the most suitable care plan tailored to your situation.",
  },
  {
    question: "Are your caregivers trained and certified?",
    answer:
      "Yes, all our caregivers undergo rigorous training, background checks, and certification processes. They are experienced professionals dedicated to providing compassionate, reliable care.",
  },
  {
    question: "Can care services be customized to our schedule?",
    answer:
      "Absolutely! We create flexible care plans that adapt to your schedule, whether you need 24/7 support, part-time care, or occasional assistance. Your routine determines our service timing.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We provide care services throughout the local metropolitan area. Contact us to confirm availability in your specific location, as we're continuously expanding our service areas.",
  },
  {
    question: "How do you ensure quality and consistency?",
    answer:
      "We maintain high standards through regular caregiver training, client feedback systems, and quality assurance checks. Each care plan includes ongoing supervision and support coordination.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-15">
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
          {faqs.map((faq, index) => (
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
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
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
            Still have questions? We're here to help.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="hero">Contact Us</Button>
            <Button variant="brand">Schedule Consultation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
