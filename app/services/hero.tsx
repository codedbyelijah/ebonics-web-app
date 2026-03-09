"use client";

import { useState, useEffect } from "react";
import Button from "@/components/button";

const slides = [
  {
    id: 1,
    title: "Professional Care Services",
    subtitle: "Expert Support When You Need It",
    description:
      "Our comprehensive care services are designed to meet your unique needs with compassion and professionalism.",
    image: "/img/ebonics-caregiver-2.jpg",
    primaryButton: "Get Started",
    secondaryButton: "Learn More",
  },
  {
    id: 2,
    title: "24/7 Home Care",
    subtitle: "Round-the-Clock Assistance",
    description:
      "We provide continuous care and support to ensure your loved ones are never alone and always safe.",
    image: "/img/ebonics-caregiver-3.jpg",
    primaryButton: "Schedule Care",
    secondaryButton: "Our Services",
  },
  {
    id: 3,
    title: "Companion Care",
    subtitle: "Building Meaningful Connections",
    description:
      "Our caregivers provide not just assistance, but friendship and emotional support to enhance quality of life.",
    image: "/img/ebonics-caregiver-4.jpg",
    primaryButton: "Find a Companion",
    secondaryButton: "Contact Us",
  },
  {
    id: 4,
    title: "Specialized Care",
    subtitle: "Tailored to Your Needs",
    description:
      "From dementia care to post-surgery recovery, we offer specialized services for every situation.",
    image: "/img/ebonics-caregiver-5.jpg",
    primaryButton: "Custom Plan",
    secondaryButton: "Consultation",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="relative h-auto lg:h-[calc(100dvh-350px)] mt-22 lg:mt-0 overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0 -z-20">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Content */}
      <div className="relative container-wrapper h-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pt-10 gap-5 mb-10">
          {/* Slide content with fade animation */}
          {slides.map((slide, index) => (
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
                <Button variant="navbar">{slide.primaryButton}</Button>
                <Button variant="brand">{slide.secondaryButton}</Button>
              </div>
            </div>
          ))}

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
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
