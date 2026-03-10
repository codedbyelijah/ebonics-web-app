/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";

export default function CareerFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What qualifications do I need to become a caregiver?",
      answer:
        "We look for compassionate individuals with experience in caregiving. While formal certifications are valued, we also provide comprehensive training to qualified candidates. Most importantly, we seek people with genuine passion for helping others.",
    },
    {
      question: "What kind of training do you provide?",
      answer:
        "We offer extensive on-the-job training, professional development workshops, and continuing education opportunities. Our training covers everything from specialized care techniques to communication skills and emergency response protocols.",
    },
    {
      question: "How flexible are the work schedules?",
      answer:
        "We understand the importance of work-life balance. We offer various scheduling options including full-time, part-time, weekend, and live-in positions. Our goal is to accommodate both your needs and our clients' requirements.",
    },
    {
      question: "What opportunities for career growth are available?",
      answer:
        "CareBridge provides clear pathways for advancement. From senior caregiver positions to care coordination roles, we support your professional growth. Many of our team leaders started as caregivers and advanced within the organization.",
    },
    {
      question: "What benefits do you offer?",
      answer:
        "We provide competitive compensation, comprehensive health insurance, paid time off, and retirement plans. Additionally, we offer ongoing education support and wellness programs to ensure your overall well-being.",
    },
    {
      question: "How do you support work-life balance?",
      answer:
        "We believe in supporting our team members both inside and outside of work. This includes flexible scheduling, family support resources, and creating a positive work environment where you can thrive both personally and professionally.",
    },
  ];

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
            We're here to help you learn more about joining our team
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
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
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-indigo-800 cursor-pointer ">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
