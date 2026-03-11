"use client";

import { useState, useEffect } from "react";
import Button from "@/components/button";
import { servicesHeroSlides } from "@/libs";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % servicesHeroSlides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main className="relative h-auto lg:h-[calc(100dvh-350px)] mt-22 lg:mt-0 overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0 -z-20">
        {servicesHeroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt="Hero"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Content */}
      <div className="relative container-wrapper h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-10 gap-5 mb-10">
          {/* Slide content with fade animation */}
          {servicesHeroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`flex flex-col justify-center items-center gap-5 transition-all duration-1000 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute"
              }`}
            >
              <h1 className="text-5xl text-center lg:text-6xl font-bold text-white">
                {slide.title}
                <br />
                <span className="text-3xl lg:text-4xl font-normal text-gray-200">
                  {slide.subtitle}
                </span>
              </h1>

              <p className="text-white w-full text-lg lg:w-2xl text-center">
                {slide.description}
              </p>

              <div className="flex justify-center items-center gap-3 flex-wrap">
                <Button variant="navbar" whatsapp>
                  {slide.primaryButton}
                </Button>
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {servicesHeroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
