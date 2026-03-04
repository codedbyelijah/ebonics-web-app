import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import Button from "./button";

export default function Hero() {
  return (
    <main className="h-auto w-full pt-1 pb-4 mb-10 ">
      <div className="container mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-11 gap-8 ">
        {/* left content */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10 items-start pt-30 lg:pl-3">
          <div className=" font-fredoka flex flex-col justify-center items-start space-y-6  ">
            <h2 className="text-5xl md:text-6xl">
              Care at Home, <br /> Done Right
            </h2>
            <p className="text-sm md:text-md w-full md:w-125 text-gray-500">
              Ebonics HomeCare Services brings trained, compassionate caregivers
              to your loved ones. We handle the details so families can focus on
              what matters.
            </p>
            {/* Button */}
            <Button variant="brand">Free Consultation</Button>
          </div>

          {/* hero card */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 ">
            <div className="bg-white w-full h-full sm:w-auto rounded-md flex items-center space-x-1 shadow-sm sm:m-w-45">
              <Image
                src="/img/ebonics-caregiver-2.jpg"
                alt="Ebonics Caregiver offering Care to a client"
                width={200}
                height={200}
                className="h-full  rounded-sm object-fill flex-1"
              />
              <span
                className="text-text-light text-[1rem] font-oswald "
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                Watch this video
              </span>
            </div>

            {/* quote card */}
            <div className=" bg-white p-6 rounded-md shadow-sm  flex-1">
              <QuoteIcon className="text-secondary mb-2" size={22} />
              <p>
                The care felt personal, not rushed. Our caregiver treated my
                father with real kindness and respect.
              </p>
              <span className="">— Diane Lawson</span>
            </div>
          </div>
        </div>

        {/* right image */}
        <div className=" relative lg:col-span-6 h-80 md:h-100 lg:h-200 rounded-3xl overflow-hidden ">
          <div className="absolute top-0 left-0 w-full h-full bg-black/25 "></div>
          <Image
            src="/img/ebonics-caregiver.png"
            alt="Caregiver with elderly man"
            width={500}
            height={500}
            className="w-full h-full object-cover lg:object-bottom"
          />
        </div>
      </div>
    </main>
  );
}
