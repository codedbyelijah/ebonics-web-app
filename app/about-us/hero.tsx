import Button from "@/components/button";

export default function Hero() {
  return (
    <main className="relative h-auto lg:h-[calc(100dvh-350px)] mt-22 lg:mt-0 ">
      <div
        className="absolute inset-0 bg-cover bg-top -z-20 "
        style={{ backgroundImage: "url('/img/ebonics.png')" }}
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />

      <div className="relative container-wrapper h-full flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center  pt-10 gap-5 mb-10  ">
          <h1 className="  text-5xl text-center  lg:text-6xl font-bold text-white ">
            Compassionate Care, <br /> Trusted Support
          </h1>

          <p className="text-white w-full text-lg lg:w-2xl text-center ">
            We provide personalized care services tailored to your needs. Our
            team of experienced caregivers is dedicated to providing you with
            the highest quality of care.
          </p>

          <div className=" flex justify-center  items-center gap-3 flex-wrap ">
            <Button variant="navbar" whatsapp>
              Free Consultation
            </Button>
            <Button variant="brand" path="/career">
              Join Our Team
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
