import Image from "next/image";

export default function Statistics() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 lg:mb-0">
            What the numbers show
          </h2>
          <p className="text-sm text-gray-500 max-w-md">
            Real results from families who trusted us with their loved ones
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Stat card */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center">
            <div className="text-sm font-medium text-gray-600 mb-6">
              Families served with care
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              2,400+
            </div>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Across multiple years of dedicated service and support
            </p>
          </div>

          {/* Card 2 - Image card */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center">
            <div className="w-full h-32 md:h-40 bg-gray-200 rounded-xl flex items-center justify-center">
              <Image
                src="/img/ebonics-caregiver-3.jpg"
                alt="Caregiver attending to an elderly man"
                width={500}
                height={500}
                className="w-full h-full object-cover object-top rounded-xl "
              />
            </div>
          </div>

          {/* Card 3 - Stat card */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center">
            <div className="text-sm font-medium text-gray-600 mb-6">
              Client satisfaction rate
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              98%
            </div>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Families return to us because we deliver on our promises
            </p>
          </div>

          {/* Card 4 - Stat card */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center">
            <div className="text-sm font-medium text-gray-600 mb-6">
              Trained caregivers on staff
            </div>
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              850+
            </div>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              Each one selected for skill, compassion, and genuine commitment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
