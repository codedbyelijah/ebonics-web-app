/* eslint-disable react/no-unescaped-entities */
export default function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      title: "Police Verification",
      description: "Verify that our Caregivers do not have any criminal record",
    },
    {
      number: "02",
      title: "Medical Checks",
      description:
        "Confirm that our Caregivers are medically fit to perform their duties effectively",
    },
    {
      number: "03",
      title: "Address Verification",
      description:
        "Conduct physical verification of our Caregiver's home address",
    },
    {
      number: "04",
      title: "Third Party Verification",
      description:
        "Run necessary background checks on each guarantor provided by our Caregivers",
    },
    {
      number: "05",
      title: "Compassionate, Client-Centered Care",
      description:
        "We're all about more than just providing care—we're dedicated to building real relationships. Our caregivers are selected not just for their expertise but also for their heartfelt compassion and commitment to making a difference in the lives of others.",
    },
    {
      number: "06",
      title: "Highly Qualified and Trained Caregivers",
      description:
        "Our team is made up of seasoned professionals who go through extensive training and ongoing education. From certified nursing assistants to specialists in dementia care, our caregivers have the skills and knowledge to meet a wide variety of needs.",
    },
    {
      number: "07",
      title: "Customized Care Plans",
      description:
        "We understand that everyone is different, and so are their care needs. That's why we create personalized care plans tailored to your specific situation—whether you need occasional companionship, 24/7 assistance, or specialized care for a chronic condition.",
    },
    {
      number: "08",
      title: "A Family-Centered Approach",
      description:
        "To us, caregiving is a collaborative effort. We partner closely with families to keep them informed and involved, boosting their confidence in the care their loved ones receive. Our clear communication and regular updates ensure everyone is aligned, building trust and fostering teamwork.",
    },
    {
      number: "09",
      title: "A Track Record of Excellence",
      description:
        "Our track record truly speaks for itself. We've earned the trust of countless satisfied clients and families, creating a legacy built on reliability and exceptional care.",
    },
    {
      number: "10",
      title: "Peace of Mind for Families",
      description:
        "Taking care of a loved one can feel like a lot to handle, but you don't have to face it by yourself. At Bliss Caregivers, we offer dependable, professional support that helps families find the peace of mind they truly deserve.",
    },
  ];

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
            prioritizes your well-being. We don't just provide basic caregiving;
            we focus on building meaningful relationships and fostering a
            nurturing environment for everyone we care for. With our dedicated,
            compassionate, and highly trained team, you can feel confident that
            your loved ones are in excellent hands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto ">
          {reasons.map((reason, index) => (
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
