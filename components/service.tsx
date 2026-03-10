import { Car, ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Service() {
  return (
    <section className="bg-light py-10">
      <div className="container-wrapper">
        <div className="flex flex-col items-center justify-center space-y-1 mb-10 md:mb-12 ">
          <p className="tag text-lg">Services</p>
          <h1 className="text-4xl md:text-6xl font-medium font-fredoka -mt-2 ">
            What we provide
          </h1>
          <p className="md:text-md  text-text-light text-lg">
            Professional support tailored to individual needs
          </p>
        </div>

        <div className="grid auto-cols-fr gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <div className="row-span-2 flex flex-col sm:col-span-2 sm:grid-cols-2 lg:col-span-1 bg-white/20 backdrop-blur-md shadow-sm rounded-lg overflow-hidden ">
            <div className="block p-6  sm:flex sm:flex-col sm:justify-center md:p-8">
              <div className="">
                <p className="mb-2 font-semibold text-lg">Elderly</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Elderly care with dignity and respect
                </h2>
                <p className="text-lg">
                  Daily assistance, medication management, and companionship for
                  aging parents
                </p>
              </div>

              <div className="mt-5 md:mt-6">
                <Link
                  href="/services"
                  className="flex items-center justify-start space-x-1"
                >
                  Learn
                  <ChevronRight />
                </Link>
              </div>
            </div>

            <div className="flex size-full flex-1 flex-col items-center justify-center self-start lg:h-auto">
              <Image
                src="/img/ebonics-caregiver-2.jpg"
                alt="Caregiver with elderly man"
                width={200}
                height={200}
                className="w-full h-full object-cover lg:object-bottom"
              />
            </div>
          </div>

          <div className="grid auto-cols-fr grid-cols-1 sm:col-span-2 sm:grid-cols-2 bg-white/20 backdrop-blur-md shadow-sm rounded-lg overflow-hidden ">
            <div className="block p-6 first-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8  ">
              <div className="">
                <p className="mb-2 font-semibold text-lg">Recovery</p>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Post-surgery care when you need it most
                </h2>
                <p className="text-lg">
                  Skilled support during healing, from wound care to mobility
                  assistance
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/services"
                  className="flex items-center justify-start space-x-1"
                >
                  Learn
                  <ChevronRight />
                </Link>
              </div>
            </div>

            <div className="flex size-full flex-col items-center justify-center self-start lg:h-auto">
              <Image
                src="/img/ebonics-caregiver-2.jpg"
                alt="Caregiver with elderly man"
                width={500}
                height={500}
                className="w-full h-full object-cover lg:object-bottom"
              />
            </div>
          </div>

          <div className="flex flex-col bg-white/20 backdrop-blur-md shadow-sm rounded-lg overflow-hidden">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8 ">
              <div>
                <div className="rb-5 mb-5 md:mb-6">
                  <Clock size={30} />
                </div>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Round-the-clock care in your home
                </h2>
                <p className="text-lg">
                  Full-time caregivers who live with clients for continuous,
                  seamless support
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/services"
                  className="flex items-center justify-start space-x-1"
                >
                  Learn
                  <ChevronRight />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white/20 backdrop-blur-md shadow-sm rounded-lg overflow-hidden">
            <div className="flex flex-1 flex-col justify-center p-6 md:p-8 ">
              <div>
                <div className="rb-5 mb-5 md:mb-6">
                  <Car size={30} />
                </div>
                <h2 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Mobility Support & Safety
                </h2>
                <p className="text-lg">
                  Specialized assistance with walking, transfers, fall
                  prevention, and home safety modifications to ensure secure
                  movement.
                </p>
              </div>
              <div className="mt-5 md:mt-6">
                <Link
                  href="/services"
                  className="flex items-center justify-start space-x-1"
                >
                  Learn
                  <ChevronRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
