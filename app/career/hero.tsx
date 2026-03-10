/* eslint-disable react/no-unescaped-entities */
import Button from "@/components/button";

export default function Hero() {
  return (
    <main className="relative h-auto lg:h-[calc(100dvh-350px)] mt-22 lg:mt-0 ">
      <div
        className="absolute inset-0 bg-cover bg-center -z-20 object-center "
        style={{
          backgroundImage: "url('/img/elderly-caregiving.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="relative container-wrapper h-full flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center  pt-10 gap-5 mb-10  ">
          <h1 className="  text-5xl text-center  lg:text-6xl font-bold text-white ">
            Join Our <br /> Compassionate Team
          </h1>

          <p className="text-white w-full text-lg lg:w-2xl text-center ">
            Make a meaningful difference in people's lives every day. Build a
            rewarding career with us as a professional caregiver, where your
            compassion and skills create lasting impact in our community.
          </p>

          <div className=" flex justify-center  items-center gap-3 flex-wrap ">
            <Button variant="brand">Apply Now</Button>
            <Button variant="navbar">View Open Positions</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
