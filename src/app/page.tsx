"use client"

import Image from "next/image";
import { Star, MapPin, Phone, Mail } from "lucide-react";
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
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely stunning hotel with impeccable service. The attention to detail is extraordinary.",
      date: "December 2024"
    },
    {
      name: "Michael Chen",
      rating: 5,
      comment: "A truly luxurious experience. The rooms are elegant and the staff went above and beyond.",
      date: "November 2024"
    },
    {
      name: "Emma Williams",
      rating: 5,
      comment: "The perfect blend of sophistication and comfort. Will definitely be returning.",
      date: "November 2024"
    },
    {
      name: "James Rodriguez",
      rating: 5,
      comment: "Exceptional hospitality in a beautiful setting. Every moment was memorable.",
      date: "October 2024"
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
      <section className="relative h-screen flex items-center justify-center bg-white">
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-foreground mb-6 tracking-wide">
            Arcalia Hotel
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light tracking-wide">
            Where Elegance Meets Tranquility
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="px-8 py-6 text-lg font-light tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-5xl font-serif font-light text-foreground mb-4">Our Sanctuary</h2>
            <p className="text-lg text-muted-foreground font-light">Experience refined luxury in every corner</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-80 overflow-hidden group">
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
      <section id="menu" className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-5xl font-serif font-light text-foreground mb-4">Culinary Delights</h2>
            <p className="text-lg text-muted-foreground font-light">Savor the finest flavors from our kitchen</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96 overflow-hidden group bg-white shadow-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788887863.png?width=8000&height=8000&resize=contain"
                alt="Special Biryani"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative h-96 overflow-hidden group bg-white shadow-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788898202.png?width=8000&height=8000&resize=contain"
                alt="Grilled Specialties"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative h-96 overflow-hidden group bg-white shadow-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788906015.png?width=8000&height=8000&resize=contain"
                alt="Traditional Curry"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="relative h-96 overflow-hidden group bg-white shadow-sm">
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
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-5xl font-serif font-light text-foreground mb-4">Guest Testimonials</h2>
            <p className="text-lg text-muted-foreground font-light">Cherished moments from our valued guests</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-8 bg-white border-none shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 font-light leading-relaxed">"{review.comment}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground font-light">{review.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 className="text-5xl font-serif font-light text-foreground mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground font-light">Located in Changanassery, Kerala</p>
          </div>
          <div 
            className="relative h-96 bg-muted cursor-pointer group overflow-hidden"
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
      <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-serif font-light mb-6">Arcalia Hotel</h3>
              <p className="font-light opacity-90 leading-relaxed">
                Experience unparalleled luxury and sophistication in the heart of Changanassery.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 tracking-wide">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-light">0481 242 3027</span>
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
            <p className="font-light opacity-80">© 2024 Arcalia Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}