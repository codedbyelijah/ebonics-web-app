import { Star } from "lucide-react";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
export default function Testimonial() {
  const testContent = [
    {
      content:
        "The caregivers have been an absolute blessing to our family. They handle every situation with grace, patience, and true professionalism. Highly recommended for better care.",
      name: "Morgan Kaplan",
    },
    {
      content:
        "Moving to home care was a big step, but Ebonics made the transition seamless. We have peace of mind knowing our father is safe an happy in his own environment.",
      name: "Richard Roe",
    },
    {
      content:
        "The care felt personal, not rushed. Our caregiver treated my mother with real kindness and respect. It's rare to find an agency that genuinely cares this much.",
      name: "Diane Lawson",
    },
  ];
  return (
    <section className="">
      <div className="container-wrapper">
        <div className="text-center mb-10">
          <span className="tag">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-medium font-fredoka  mt-2">
            What Families Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {testContent.map((item, i) => (
            <div
              className="bg-white p-8 rounded-md border border-border-color flex flex-col justify-between items-start "
              key={i}
            >
              <p className="text-text-light text-[1rem] mb-8 text-lg">
                "{item.content}"
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/img/passport.jpg"
                  alt="Ebonics Client"
                  width={50}
                  height={50}
                  className="w-10 h-10  rounded-[50%] "
                />
                <div>
                  <h4 className="font-semibold  mb-0.5 font-[.9rem]">
                    {item.name}
                  </h4>
                  <div className=" flex items-center justify-start space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div className="" key={i}>
                        <Star
                          className="text-[#f4b400]"
                          fill="#f4b400"
                          size={22}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
