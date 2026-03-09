import { Eye, Target, Heart } from "lucide-react";

export default function Values() {
  const values = [
    {
      icon: <Eye className="text-primary" size={32} />,
      header: "Our Vision",
      text: "To become one of the most trusted homecare providers in Nigeria, recognized for excellence, compassion, and professionalism in caregiving services.",
    },
    {
      icon: <Target className="text-primary" size={32} />,
      header: "Our Mission",
      text: "To deliver high-quality homecare services that improve the health, comfort, and independence of our clients by providing trained caregivers, personalized care solutions, and reliable support for families.",
    },
    {
      icon: <Heart className="text-primary" size={32} />,
      header: "Our Core Values",
      text: "We operate with these fundamental principles:",
      list: [
        "Compassion",
        "Professionalism",
        "Dignity and Respect",
        "Reliability",
        "Client-Centered Care",
        "Integrity",
      ],
    },
  ];

  return (
    <section className="pb-10">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/20 backdrop-blur-lg p-10 rounded-xl shadow-xs flex flex-col "
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-3 font-fredoka">
                {value.header}
              </h3>
              <hr className="w-24 border-t-6 border-primary mb-4" />
              <p className="text-lg text-text-light leading-relaxed mb-4">
                {value.text}
              </p>
              {value.list && (
                <ul className="text-lg text-text-light leading-relaxed space-y-2">
                  {value.list.map((item, listIndex) => (
                    <li key={listIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
