import Button from "@/components/button";

export default function Hero() {
  return (
    <main className="relative h-auto lg:h-[calc(100dvh-350px)] mt-22 lg:mt-0 ">
      <div
        className="absolute inset-0 bg-cover bg-center -z-20 object-center "
        style={{
          backgroundImage: "url('/img/ebonics-support.png')",
        }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="relative container-wrapper h-full flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center  pt-10 gap-5 mb-10  ">
          <h1 className="  text-5xl text-center  lg:text-6xl font-bold text-white ">
            YOU ARE NOT <br /> ALONE
          </h1>

          <h2 className="text-2xl text-center lg:text-3xl font-medium text-white">
            Let us put your mind at ease
          </h2>

          <p className="text-white w-full text-lg lg:w-2xl text-center ">
            Whether you require 24-hour live-in care or daily visiting care, we
            ensure we effectively manage and pair you up with the best caregiver
            for your distinct needs and situation.
          </p>

          <div className=" flex justify-center  items-center gap-3 flex-wrap ">
            <Button variant="brand">Get In Touch</Button>
            <Button variant="navbar">Book A Visit</Button>
          </div>
        </div>
      </div>
    </main>
  );
}
