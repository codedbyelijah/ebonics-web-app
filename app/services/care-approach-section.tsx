/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Button from "@/components/button";
import { ArrowRight } from "lucide-react";

export default function CareApproachSection() {
  return (
    <section className="py-15">
      <div className=" container-wrapper grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-full w-full overflow-hidden rounded-xl bg-gray-200">
          <Image
            src="/img/ebonics-caregiver-4.jpg"
            alt="Caregiver assisting elderly person"
            width={600}
            height={420}
            className="object-cover w-full h-full "
          />
        </div>

        {/* Content */}
        <div className="max-w-xl">
          <span className="inline-block px-4 py-1.5 border border-[#d1cec5] rounded-[20px] text-sm text-[#5a5a5a] mb-4">
            Approach
          </span>

          <h2 className="mt-3 text-[clamp(2rem,4vw,2.75rem)] leading-tight font-medium mb-4 tracking-[-0.01em] text-[#1c1c1c]">
            Care built around you
          </h2>

          <p className="mt-4 text-[#5a5a5a] text-base">
            No two situations are the same, so neither are our plans.
          </p>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Feature 1 */}
            <div>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#eacfb9]">
                <span className="text-sm text-[#3e2632]">✓</span>
              </div>

              <h3 className="text-lg font-semibold text-[#1c1c1c]">
                Plans that adapt to your changing needs
              </h3>

              <p className="mt-2 text-sm text-[#5a5a5a]">
                We start by listening. Your circumstances shape everything we
                do, from hours and frequency to specific skills your caregiver
                brings.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#eacfb9]">
                <span className="text-sm text-[#3e2632]">✓</span>
              </div>

              <h3 className="text-lg font-semibold text-[#1c1c1c]">
                Flexibility that works
              </h3>

              <p className="mt-2 text-sm text-[#5a5a5a]">
                Every family's situation is different, and we build care plans
                that match your needs.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-4">
            <Button variant="brand">Explore</Button>

            <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors duration-300 cursor-pointer ">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
