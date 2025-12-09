"use client"

import Image from "next/image";
import Link from "next/link";
import { Car, MapPin, Mail, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const handleMapClick = () => {
    window.open("https://www.google.com/maps/place/KSRTC+South+Exit+Road,+near+Janapriya+Silks,+Changanassery,+Kerala+686101", "_blank");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const reviews = [
    {
      name: "Ratish S",
      rating: 5,
      comment: "Love the non-veg meals here. The Rs. 200/- meal is a wholesome package with fish curry, chicken fry, kakka irachi and more.",
      date: "Google Maps"
    },
    {
      name: "satheesh sr",
      rating: 5,
      comment: "Stayed more than 15 times; best budget friendly rooms with a restaurant and bar close to the bus stand and railway station.",
      date: "Google Maps"
    },
    {
      name: "Minu Menon",
      rating: 5,
      comment: "Nice place, enough seating, good staff n good food... Arcadia... 👍",
      date: "Google Maps"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center bg-white pt-16 md:pt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764785028701.png?width=8000&height=8000&resize=contain"
            alt="Hotel Exterior"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block w-16 h-0.5 bg-primary mb-8"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light text-foreground mb-6 tracking-wide leading-tight">
            Arcalia Hotel
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary font-medium mb-4 tracking-wide">
            Tast Food, Safety Stay
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 md:mb-12 font-light tracking-wide">
            Where Elegance Meets Tranquility
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("contact")}
              className="px-7 py-5 text-base sm:text-lg font-light tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Contact Us
            </Button>
            <Button size="lg" variant="outline" asChild className="px-7 py-5 text-base sm:text-lg font-light tracking-wider">
              <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer">
                Order on Zomato
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Nav Section */}
      <section className="py-14 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Link href="/restaurant" className="group block rounded-sm border border-border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl sm:text-2xl font-serif font-light mb-3 group-hover:text-primary transition-colors">Restaurant</h3>
            <p className="text-muted-foreground font-light text-sm sm:text-base">Experience regional specialties and hearty meals—including dedicated parking for dine-in guests.</p>
          </Link>
          <Link href="/hall" className="group block rounded-sm border border-border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl sm:text-2xl font-serif font-light mb-3 group-hover:text-primary transition-colors">Hall</h3>
            <p className="text-muted-foreground font-light text-sm sm:text-base">Book our AC hall for meetings or celebrations with easy access and on-site parking.</p>
          </Link>
          <Link href="/order" className="group block rounded-sm border border-border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl sm:text-2xl font-serif font-light mb-3 group-hover:text-primary transition-colors">Order</h3>
            <p className="text-muted-foreground font-light text-sm sm:text-base">Order your favorites online—redirects to our Zomato page for delivery or pickup.</p>
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Our Sanctuary</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">Experience refined luxury in every corner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-sm group">
                <Image
                  src={image}
                  alt={`Hotel view ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Culinary Delights</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">Savor the finest flavors from our kitchen</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden group bg-white shadow-sm rounded-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788887863.png?width=8000&height=8000&resize=contain"
                alt="Special Biryani"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden group bg-white shadow-sm rounded-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788898202.png?width=8000&height=8000&resize=contain"
                alt="Grilled Specialties"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden group bg-white shadow-sm rounded-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788906015.png?width=8000&height=8000&resize=contain"
                alt="Traditional Curry"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden group bg-white shadow-sm rounded-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788933393.png?width=8000&height=8000&resize=contain"
                alt="Signature Rice Dish"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Guest Testimonials</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">Cherished moments from our valued guests</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="flex h-full flex-col p-6 md:p-8 bg-white border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 font-light leading-relaxed text-sm sm:text-base">"{review.comment}"</p>
                <div className="border-t border-border pt-4 mt-auto">
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground font-light">{review.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Find Us</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">Located in Changanassery, Kerala — with dedicated parking space for guests and diners</p>
          </div>
          <div 
            className="relative h-72 sm:h-80 md:h-96 bg-muted cursor-pointer group overflow-hidden rounded-sm"
            onClick={handleMapClick}
          >
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80"
              alt="Hotel Location Map"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors flex items-center justify-center">
              <div className="bg-white px-8 py-4 rounded-sm shadow-lg group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-foreground font-medium">Click to view on Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 md:mb-6">Arcalia Hotel</h3>
              <p className="font-light opacity-90 leading-relaxed">
                Experience unparalleled luxury and sophistication in the heart of Changanassery.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm opacity-90">
                <Car className="w-4 h-4" />
                <span>Dedicated parking space for guests and restaurant visitors.</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 tracking-wide">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-light">04812423027</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span className="font-light">info@arcaliahotel.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="font-light">KSRTC South Exit Road, near Janapriya Silks, Changanassery, Kerala 686101</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 tracking-wide">Hours</h4>
              <div className="space-y-2 font-light">
                <p>Check-in: 3:00 PM</p>
                <p>Check-out: 11:00 AM</p>
                <p>Concierge: 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="font-light opacity-80">© 2025 Arcalia Hotel. All rights reserved.</p>
            <p className="mt-2 text-sm opacity-80">
              Site crafted by <a href="https://www.noxusdynamics.tech/" target="_blank" rel="noreferrer" className="underline font-medium">Noxus Dynamics</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}