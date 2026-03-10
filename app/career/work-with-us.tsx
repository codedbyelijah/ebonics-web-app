import { ChevronRight, MoveRight } from "lucide-react";
import { workWithUsCards } from "@/libs";

export default function WorkWithUs() {
  return (
    <section className="py-10">
      <div className="container-wrapper">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag">Why</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Work with us</h2>
          <p className="text-gray-600 text-lg ">
            CareBridge values caregivers who are committed to excellence
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:px-20 lg:grid-cols-4 cursor-pointer ">
          {workWithUsCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`rounded-lg p-10 bg-white/20 backdrop-blur-lg shadow-sm hover:shadow-md transition
                ${card.large ? "md:col-span-2" : ""}`}
              >
                <Icon className="w-9 h-9 text-black mb-6" />

                <h3 className="text-3xl font-semibold mb-3">
                  {index === 0 ? (
                    <>
                      Competitive
                      <br />
                      compensation
                    </>
                  ) : (
                    card.title
                  )}
                </h3>

                <p className="text-gray-600 mb-6 text-lg">{card.desc}</p>

                <div className="flex items-center space-x-2">
                  {card.button && (
                    <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100">
                      {card.button}
                    </button>
                  )}
                  <MoveRight size={22} />
                  <ChevronRight size={22} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
