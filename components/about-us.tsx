import Image from "next/image";
import Button from "./button";

export default function AboutUs() {
  return (
    <section className=" mt-15 lg:mt-20 py-10 ">
      <div className="container-wrapper grid grid-cols-1 lg:grid-cols-11 lg:gap-1 ">
        {/* left-content */}
        <div className="lg:col-span-5 lg:pl-20 relative flex flex-col items-start space-y-6 ">
          {/* social-proof */}
          <div className="flex items-center space-x-3">
            {/* avatar */}
            <div className="flex">
              {[1, 2, 3, 4].map((ava) => (
                <div
                  className={` lg:w-14 h-14 rounded-[50%] ${ava > 1 ? "-ml-6" : "ml-0"}`}
                  key={ava}
                >
                  <Image
                    src="/img/passport.jpg"
                    alt="Ebonics Client"
                    width={50}
                    height={50}
                    className="w-full h-full object-fill rounded-[50%] "
                  />
                </div>
              ))}
            </div>
            <p className="text-md font-semibold font-fredoka text-text-main text-lg  ">
              Over 2,000 Satisfied
              <br />
              Families and Growing
            </p>
          </div>
          {/* about image */}
          <div className="w-full lg:w-auto h-90 overflow-hidden rounded-xl ">
            <Image
              src="/img/ebonics-caregiver-2.jpg"
              alt="Caregiver attending to an elderly man"
              width={500}
              height={500}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Right content */}
        <div className="lg:col-span-6 pr-5 ">
          <span className="tag">About Us</span>
          <h2 className="text-3xl text-left md:text-5xl font-fredoka md:leading-13 mb-4  ">
            Every care plan is designed with compassion and reliability,
            ensuring seniors receive support.
          </h2>
          <p className="text-text-light text-md mb-8 text-lg ">
            Our elderly care services are built on trust, compassion, and
            professional responsibility. We focus on creating a calm, supportive
            care experience that adapts to changing needs and honors each
            person&apos;s routine, comfort, and independence.
          </p>

          {/* btn */}
          <Button variant="brand">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
