import Button from "@/components/button";

export default function CareerCTABanner() {
  return (
    <section className="bg-primary py-16">
      <div className="container-wrapper">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>

          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join our compassionate team of caregivers and start a rewarding
            career where you can truly impact lives every day. Your journey in
            professional caregiving begins here.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="navbar" whatsapp>
              Join Our Team
            </Button>
            <Button variant="brand" whatsapp>
              Learn More About Careers
            </Button>
          </div>

          <p className="text-white/70 text-sm mt-8">
            Immediate openings available • Competitive benefits • Supportive
            team environment
          </p>
        </div>
      </div>
    </section>
  );
}
