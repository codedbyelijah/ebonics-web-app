import Button from "@/components/button";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative h-auto lg:h-[calc(100dvh-300px)] mt-22 lg:mt-0 ">
      <div
        className="absolute inset-0 bg-cover bg-top -z-20 "
        style={{ backgroundImage: "url('/img/ebonics.png')" }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="relative container-wrapper h-full flex flex-col ">
        <div className="flex flex-col justify-center items-center  gap-5 pt-30 mb-10 lg:pt-40 ">
          <h1 className="  text-5xl text-center  lg:text-6xl font-bold text-white ">
            Compassionate Care, <br /> Trusted Support
          </h1>

          <p className="text-white w-full text-lg lg:w-2xl text-center ">
            We provide personalized care services tailored to your needs. Our
            team of experienced caregivers is dedicated to providing you with
            the highest quality of care.
          </p>

          <div className=" flex justify-center  items-center gap-3 flex-wrap ">
            <Button variant="navbar">Free Consultation</Button>
            <Button variant="brand">Join Our Team</Button>
          </div>
        </div>

        <div className=" text-white font-fredoka pb-40 lg:pb-0">
          <h3 className="text-3xl mb-3 text-center ">Social Links</h3>

          <ul className="text-lg flex flex-wrap justify-center  items-center gap-3 ">
            <li>
              <Link href="#" className="hover:text-secondary">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-secondary">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
