import Image from "next/image";
import { servicesList } from "@/libs";

export default function ServicesSection() {
  return (
    <section className="container-wrapper section-padding" id="services">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Services Header */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-25 h-fit">
          <span className="tag mb-3 ">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Care <br /> Designed for Everyday Needs
          </h2>

          {/* Service Cards */}
        </div>

        {/* Services List */}
        <div className="w-full lg:w-[50%] flex flex-col gap-8 lg:gap-16">
          {servicesList.map((service) => (
            <div key={service.id} className="service-item">
              <h3 className="text-[1.5rem] lg:text-[1.8rem] font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-[#5a5a5a] text-sm lg:text-base mb-8">
                {service.description}
              </p>
              {service.images && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-6">
                  <Image
                    src={service.images[0]}
                    alt={`${service.title} Service`}
                    width={400}
                    height={220}
                    className="rounded-2xl w-full h-48 lg:h-55 object-cover lg:block hidden"
                  />
                  <Image
                    src={service.images[1]}
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
