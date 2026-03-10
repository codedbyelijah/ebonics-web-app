import { whyChooseUs } from "@/libs";

export default function WhyChooseUs() {
  return (
    <section className="py-10 bg-white ">
      <div className="container-wrapper">
        <div className="text-center mb-10">
          <span className="tag">Why Choose Us</span>
          <h2 className="text-3xl md:text-5xl font-medium font-fredoka mt-2">
            The Ebonics Caregivers Difference
          </h2>
          <p className="text-lg text-text-light max-w-3xl mx-auto mt-4">
            Choosing The Bliss Caregivers means opting for a team that truly
            prioritizes your well-being. We don&apos;t just provide basic
            caregiving; we focus on building meaningful relationships and
            fostering a nurturing environment for everyone we care for. With our
            dedicated, compassionate, and highly trained team, you can feel
            confident that your loved ones are in excellent hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto ">
          {whyChooseUs.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4 relative">
              {/* Step Number */}
              <div className="text-2xl md:text-3xl font-bold text-blue-600/30 shrink-0">
                {reason.number}
              </div>

              {/* Content */}
              <div className="space-y-2 flex-1">
                <h3 className="text-lg font-bold text-gray-900 font-fredoka">
                  {reason.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
