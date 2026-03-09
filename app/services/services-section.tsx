"use client";

import Image from "next/image";

export const services = [
  {
    title: "Personal Care",
    description:
      "Respectful assistance with daily routines such as bathing, dressing, grooming, and mobility to help individuals live comfortably and safely at home.",
    images: ["ebonics-caregiver-6.jpg", "ebonics-caregiver-7.jpg"],
  },
  {
    title: "Companionship & Social Support",
    description:
      "Friendly support and meaningful interaction for individuals who need social connection, conversation, and emotional companionship.",
    images: ["ebonics-caregiver-8.jpg", "ebonics-caregiver-9.jpg"],
  },
  {
    title: "Elderly & Post-Hospital Care",
    description:
      "Comprehensive care for seniors and individuals recovering after hospital discharge, helping them regain strength and safely transition back to daily life while maintaining independence and comfort.",
    images: ["ebonics-caregiver-10.jpg", "ebonics-caregiver-12.jpg"],
  },
  {
    title: "Nursing & Medical Support",
    description:
      "Professional care focused on medication support, health monitoring, and assistance with basic medical needs in the home.",
    images: ["ebonics-caregiver-13.jpg", "ebonics-caregiver-14.jpg"],
  },
  {
    title: "Childcare & Postpartum Support",
    description:
      "Compassionate support for families including reliable childcare assistance and postpartum care for mothers and newborns, helping families adjust during early stages.",
    images: ["ebonics-caregiver-15.jpg", "ebonics-member.png"],
  },
  {
    title: "Specialized Care Services",
    description:
      "Personalized care for individuals with special needs including disabilities care, hospital escort services, professional driving, and light housekeeping support.",
    images: ["ebonics-caregiver-2.jpg", "ebonics-caregiver-3.jpg"],
  },
];

export default function ServicesSection() {
  return (
    <section className="container-wrapper section-padding">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Services Header */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-25 h-fit">
          <span className="inline-block px-4 py-1.5 border border-[#d1cec5] rounded-[20px] text-sm text-[#5a5a5a] mb-4">
            Our Services
          </span>
          <h2 className="text-[clamp(1.3rem,4vw,2rem)] leading-tight font-medium mb-4 tracking-[-0.01em]">
            Professional home care, each built on the same foundation of trust
            and skill.
          </h2>
        </div>

        {/* Services List */}
        <div className="w-full lg:w-[50%] flex flex-col gap-8 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h3 className="text-[1.5rem] lg:text-[1.8rem] font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-[#5a5a5a] text-sm lg:text-base mb-8">
                {service.description}
              </p>
              {service.images && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-6">
                  <Image
                    src={`/img/${service.images[0]}`}
                    alt={`${service.title} Service`}
                    width={400}
                    height={220}
                    className="rounded-2xl w-full h-48 lg:h-55 object-cover lg:block hidden"
                  />
                  <Image
                    src={`/img/${service.images[1]}`}
                    alt={`${service.title} Support`}
                    width={400}
                    height={220}
                    className="rounded-2xl w-full h-48 lg:h-55 object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .section-padding {
          padding: 6rem 1rem;
        }
        @media (min-width: 768px) {
          .section-padding {
            padding: 6rem 0;
          }
        }
      `}</style>
    </section>
  );
}
