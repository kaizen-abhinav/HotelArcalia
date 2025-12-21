import Image from "next/image";
import { CalendarRange, Car, Users, Music, Utensils, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import BookingForm from "@/components/BookingForm";

const amenities = [
  { icon: Users, title: "Flexible Seating", desc: "30-80 guests capacity" },
  { icon: Car, title: "Free Parking", desc: "Dedicated parking for guests" },
  { icon: Utensils, title: "In-house Catering", desc: "From Arcalia Restaurant" },
  { icon: Music, title: "A/V Equipment", desc: "Stage, audio & projector" },
];

const features = [
  "Air-conditioned comfortable hall",
  "Customizable seating arrangements",
  "Professional catering services",
  "Audio-visual equipment included",
  "Dedicated parking space",
  "Convenient location near KSRTC",
  "Affordable pricing",
  "Clean and well-maintained",
];

const eventTypes = [
  "Birthday Parties",
  "Family Gatherings",
  "Corporate Meetings",
  "Training Sessions",
  "Small Receptions",
  "Engagements",
  "Get-togethers",
  "Workshops",
];

export default function HallPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-secondary/20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 md:mb-4">Event Hall</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4 md:mb-6">AC Hall for Events & Celebrations in Changanassery</h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-6 md:mb-8">
              A comfortable, air-conditioned hall perfect for family gatherings, small receptions, trainings, and corporate events—steps away from KSRTC with free parking.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle className="w-5 h-5" /> <span>30-80 Pax Capacity</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <CheckCircle className="w-5 h-5" /> <span>Ample Parking</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:ml-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light mb-6 md:mb-8 text-center">Hall Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((item) => (
              <Card key={item.title} className="p-4 md:p-6 text-center border-border shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-medium text-foreground text-sm sm:text-base mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Event Types */}
      <section className="py-10 md:py-16 px-4 bg-secondary/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-light mb-4 md:mb-6 flex items-center gap-2">
              <CalendarRange className="w-5 h-5 text-primary" />
              What&apos;s Included
            </h2>
            <div className="grid grid-cols-1 gap-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-serif font-light mb-4 md:mb-6">Perfect For</h2>
            <div className="flex flex-wrap gap-2">
              {eventTypes.map((event) => (
                <span key={event} className="inline-block bg-white border border-border rounded-full px-3 py-1.5 text-xs sm:text-sm text-foreground shadow-sm">
                  {event}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light mb-6 md:mb-8 text-center">Hall Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {["/gallery/gallery-5.jpeg", "/gallery/gallery-6.jpeg", "/gallery/gallery-7.jpeg"].map((src, index) => (
              <div key={index} className="relative h-40 sm:h-48 md:h-56 rounded-lg overflow-hidden bg-muted">
                <Image
                  src={src}
                  alt={`Arcalia Hotel hall view ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 768px) 33vw, 50vw"
                  quality={90}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light mb-3 md:mb-4">Ready to Book Your Event?</h2>
          <p className="text-sm sm:text-base font-light opacity-90 leading-relaxed mb-6 max-w-2xl mx-auto">
            Contact us to check availability and discuss your requirements. We offer competitive pricing and can customize the setup for your event.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <a href="tel:04812423027" className="inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call 04812423027
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="mailto:info@arcaliahotel.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
