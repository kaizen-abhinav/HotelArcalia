import Image from "next/image";
import { CalendarRange, Car, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const amenities = [
  "AC hall with flexible seating",
  "Dedicated parking for guests",
  "Catering from Arcalia Restaurant",
  "Stage, audio, and projector support",
];

export default function HallPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-20 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Hall</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-5 md:mb-6">Book our hall for meetings and celebrations</h1>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-7 md:mb-8">
              A comfortable, air-conditioned hall suited for family gatherings, small receptions, trainings, and off-sites—steps away from the KSRTC stand with on-site parking.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <Button asChild size="lg">
                <a href="tel:04812423027" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call to reserve
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:info@arcaliahotel.com">Email booking request</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-56 sm:h-64 md:h-[320px] lg:h-[420px] rounded-sm overflow-hidden shadow-sm bg-white">
            <Image
              src="https://images.jdmagicbox.com/comp/kottayam/y4/9999px481.x481.110729114809.b7y4/catalogue/hotel-arcadia-changanacherry-kottayam-restaurants-dg5wg-250.jpg"
              alt="Hall setup"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          <Card className="p-5 md:p-6 border-border shadow-sm">
            <h3 className="text-2xl font-serif font-light mb-3 flex items-center gap-2">
              <CalendarRange className="w-5 h-5" />
              Ready for your next event
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Flexible layouts for 30–80 guests, in-house catering, and support for A/V so you can focus on the gathering.
            </p>
          </Card>
          <Card className="p-5 md:p-6 border-border shadow-sm">
            <h3 className="text-2xl font-serif font-light mb-3 flex items-center gap-2">
              <Car className="w-5 h-5" />
              Easy access with parking
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Located near KSRTC South Exit Road with a dedicated parking space for hall guests, making arrivals simple.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-5 md:mb-6 text-center">What&apos;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {amenities.map((item) => (
              <Card key={item} className="p-4 md:p-5 border-border bg-white/80">
                <p className="font-light text-foreground text-sm sm:text-base">{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
