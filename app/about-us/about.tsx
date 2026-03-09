import Button from "@/components/button";
import Image from "next/image";

export default function About() {
  return (
    <section className=" py-10">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10  justify-center items-center">
          <div className="flex flex-col gap-5 justify-center items-start">
            <span className="tag pb-2">About Us</span>

            <p className="text-lg text-justify lg:text-start">
              Ebonics Homecare Services Ltd is a homecare agency in Nigeria
              committed to providing reliable and compassionate care to
              individuals who need support at home. Our services are designed to
              help elderly people, recovering patients, and individuals who
              require daily assistance maintain comfort, dignity, and
              independence in their own homes. We provide trained caregivers and
              personalized care plans tailored to each client’s needs. Our focus
              is to deliver professional, dependable, and respectful care that
              families can trust.
            </p>
            <div className=" flex  items-center gap-3 flex-wrap justify-self-end ">
              <Button variant="navbar">Free Consultation</Button>
              <Button variant="brand">Join Our Team</Button>
            </div>
          </div>
          {/* grid 2 */}
          <div>
            <div className="w-full lg:w-auto overflow-hidden rounded-xl ">
              <Image
                src="/img/ebonics-caregiver-2.jpg"
                alt="Caregiver attending to an elderly man"
                width={500}
                height={500}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
