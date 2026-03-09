/* eslint-disable react/no-unescaped-entities */
import Button from "./button";

export default function Stats() {
  return (
    <section className="sections border-b-2 ">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4 text-lg">Numbers</p>
            <h2 className="font-fredoka text-[60px] font-medium">
              Trusted by families across the region
            </h2>
          </div>
          <div>
            <p className="mb-6 md:mb-8 md:text-md text-lg">
              CareBridge has supported hundreds of families through life's
              difficult moments. Our caregivers bring years of experience and
              genuine commitment to every home they enter.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  500+
                </h3>
                <p className="text-lg">
                  Families trust us with their loved ones
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  98%
                </h3>
                <p className="text-lg">
                  Client satisfaction across all care types
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button variant="outline">Learn</Button>
              <Button variant="primary">More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
