export default function Process() {
  const processSteps = [
    {
      number: "01",
      title: "Free Consultation",
      description:
        "We start by understanding your loved one’s unique needs, daily routines, and medical requirements in a no-obligation meeting.",
    },
    {
      number: "02",
      title: "Custom Care Plan",
      description:
        "Our experts design a personalized care plan tailored specifically for safety, comfort, and maintaining independence.",
    },
    {
      number: "03",
      title: "Match & Support",
      description:
        "We pair you with a compassionate, vetted caregiver and provide ongoing support to ensure the highest quality of care.",
    },
  ];

  return (
    <section className="py-10">
      <div className="container-wrapper border-b-2 border-gray-400">
        <div className="text-center mb-10">
          <span className="tag">Our Process</span>
          <h2 className="text-3xl md:text-5xl font-medium font-fredoka  mt-2">
            How we Begin Your Care Journey
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-0 w-full max-w-6xl mx-auto relative">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {/* Step Content */}
              <div className="px-4 lg:px-6 py-4">
                {/* Step Number */}
                <div className="text-3xl md:text-4xl font-bold text-blue-600/30 mb-4">
                  {step.number}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 max-w-xs">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Vertical Line Separator */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-px h-16 bg-linear-to-b from-transparent via-blue-300 to-transparent" />
              )}
            </div>
          ))}

          {/* Mobile horizontal lines */}
          <div className="lg:hidden flex flex-col gap-4 w-full max-w-xs">
            {processSteps.slice(1).map((_, index) => (
              <div
                key={index}
                className="w-full h-px bg-linear-to-r from-transparent via-blue-300 to-transparent"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
