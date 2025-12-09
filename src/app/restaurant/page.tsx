import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const specials = [
  {
    title: "Signature Meals",
    detail: "Hearty Kerala-style thali with fish curry, chicken fry, and seasonal specials.",
  },
  {
    title: "Grills & Kebabs",
    detail: "Charred to perfection with house-made spice rubs and fresh sides.",
  },
  {
    title: "Quick Bites",
    detail: "Tea-time snacks, parotta combos, and evening small plates ready for takeaway.",
  },
];

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-secondary/20 py-14 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Restaurant</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-5 md:mb-6">Comfort food, quick service, and dedicated parking</h1>
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-7 md:mb-8">
              Drop in for Kerala classics or order online. Guests and diners get a dedicated parking space right outside, making dine-in and takeaway effortless.
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Button asChild size="lg" className="px-5 md:px-6">
                <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer">Order on Zomato</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-5 md:px-6">
                <a href="tel:04812423027">Call 04812423027</a>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>KSRTC South Exit Road, near Janapriya Silks, Changanassery</span>
            </div>
          </div>
          <div className="relative h-56 sm:h-64 md:h-[320px] lg:h-[400px] rounded-sm overflow-hidden shadow-sm bg-white">
            <Image
              src="https://images.jdmagicbox.com/comp/kottayam/y4/9999px481.x481.110729114809.b7y4/catalogue/hotel-arcadia-changanacherry-kottayam-restaurants-16vby-250.jpg"
              alt="Restaurant interior"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {specials.map((item) => (
              <Card key={item.title} className="p-5 md:p-6 border-border shadow-sm">
                <h3 className="text-xl sm:text-2xl font-serif font-light mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed text-sm sm:text-base">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-3 md:mb-4">Dine-in, takeaway, or doorstep delivery</h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-6">
            Choose what works for you—grab a quick bite after check-in, book a table with parking assured, or order through Zomato and get your favorites delivered.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Button asChild>
              <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer">Open Zomato</a>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:04812423027" className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call the restaurant
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
