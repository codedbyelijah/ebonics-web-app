import { Star } from "lucide-react";
import Image from "next/image";
import { testimonialContent } from "@/libs";

export default function Testimonial() {
  return (
    <section className="pb-10">
      <div className="container-wrapper">
        <div className="text-center mb-10">
          <span className="tag">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-medium font-fredoka  mt-2">
            What Families Say About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {testimonialContent.map((item, i) => (
            <div
              className="bg-white p-8 rounded-md border border-border-color flex flex-col justify-between items-start "
              key={i}
            >
              <p className="text-text-light text-[1rem] mb-8 text-lg">
                &quot;{item.content}&quot;
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
