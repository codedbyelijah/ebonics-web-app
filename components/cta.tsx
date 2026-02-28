import Button from "./button";

/* eslint-disable react/no-unescaped-entities */
export default function CTA() {
  return (
    <section className="py-10 bg-primary text-white ">
      <div className="container-wrapper">
        <div className="mx-auto w-full text-center">
          <h1 className="w-full font-fredoka text-5xl lg:text-[60px] font-medium ">
            Start with a free assessment
          </h1>
          <h1 className="mb-5 block text-3xl font-fredoka md:mb-6 ">
            Let's talk about care
          </h1>
          <p className="md:text-md">
            We listen to you situation and build a care plan that fits your
            family's needs and budget.
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            <Button variant="navbar">Let Connect Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
