"use client"

import Image from "next/image";
import Link from "next/link";
import { Car, MapPin, Mail, Phone, Star, Clock, Utensils, Users, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const handleMapClick = () => {
    window.open("https://maps.app.goo.gl/9YLm4PGhbAUAgAU26", "_blank");
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
      date: "Google Maps Review"
    },
    {
      name: "Satheesh SR",
      rating: 5,
      comment: "Stayed more than 15 times; best budget friendly rooms with a restaurant and bar close to the bus stand and railway station.",
      date: "Google Maps Review"
    },
    {
      name: "Minu Menon",
      rating: 5,
      comment: "Nice place, enough seating, good staff and good food... Arcalia... 👍",
      date: "Google Maps Review"
    }
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80", alt: "Comfortable hotel room at Arcalia Hotel Changanassery with modern amenities" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80", alt: "Spacious budget room with clean bedding at Arcalia Hotel Kerala" },
    { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80", alt: "Well-maintained hotel room interior near KSRTC Changanassery bus stand" },
    { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80", alt: "Cozy accommodation at best hotel in Changanassery with free parking" },
    { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80", alt: "Clean and affordable hotel room at Arcalia near Changanassery railway station" },
    { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80", alt: "Premium budget stay at Arcalia Hotel Kottayam district" }
  ];

  const amenities = [
    { icon: Car, title: "Free Parking", description: "Dedicated parking space for all guests" },
    { icon: Utensils, title: "Multi-Cuisine Restaurant", description: "Authentic Kerala food & biryani" },
    { icon: Users, title: "AC Event Hall", description: "Capacity for 30-80 guests" },
    { icon: Clock, title: "24/7 Front Desk", description: "Round-the-clock assistance" },
  ];

  const faqs = [
    {
      question: "Where is Arcalia Hotel located in Changanassery?",
      answer: "Arcalia Hotel is located on KSRTC South Exit Road, near Janapriya Silks, Changanassery, Kerala 686101. We are just 2 minutes walk from KSRTC bus stand and close to Changanassery railway station."
    },
    {
      question: "Does Arcalia Hotel have parking facilities?",
      answer: "Yes, Arcalia Hotel offers free dedicated parking for all guests and restaurant visitors. Our parking area is secure and conveniently located right next to the hotel entrance."
    },
    {
      question: "What type of food does Arcalia Restaurant serve?",
      answer: "Arcalia Restaurant serves authentic Kerala cuisine including traditional meals (thali), biryani, grilled specialties, seafood, and South Indian dishes. Our signature Kerala meal at ₹200 includes fish curry, chicken fry, and more."
    },
    {
      question: "Can I book the hall at Arcalia Hotel for events?",
      answer: "Yes, our AC hall accommodates 30-80 guests and is perfect for meetings, birthday parties, small receptions, and corporate events. We provide catering, audio-visual equipment, and dedicated parking for event guests."
    },
    {
      question: "What are the check-in and check-out times?",
      answer: "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged based on availability. Our front desk is available 24/7."
    },
    {
      question: "How can I order food from Arcalia Restaurant?",
      answer: "You can order food online through Zomato for delivery or pickup. Simply visit our Zomato page or call us at 04812423027 to place your order."
    },
    {
      question: "Is Arcalia Hotel near Changanassery bus stand?",
      answer: "Yes, Arcalia Hotel is located right next to KSRTC South Exit Road, just a 2-minute walk from Changanassery KSRTC bus stand, making it the most convenient hotel for travelers."
    },
    {
      question: "What are the room rates at Arcalia Hotel?",
      answer: "Arcalia Hotel offers budget-friendly rooms starting at affordable rates. For current pricing and special offers, please call us at 04812423027 or visit in person."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Primary H1 with target keyword */}
      <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center bg-white pt-16 md:pt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764785028701.png?width=8000&height=8000&resize=contain"
            alt="Arcalia Hotel exterior view - Best budget hotel in Changanassery Kerala with free parking"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-block w-16 h-0.5 bg-primary mb-8"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-foreground mb-6 tracking-wide leading-tight">
            Best Budget Hotel in Changanassery with Restaurant & Free Parking
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary font-medium mb-4 tracking-wide">
            Arcalia Hotel — Tasty Food, Safe Stay
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 font-light tracking-wide">
            Located Near KSRTC Bus Stand & Railway Station, Kerala
          </p>
          {/* Featured Snippet Optimized Content */}
          <p className="text-sm sm:text-base text-muted-foreground mb-10 md:mb-12 font-light max-w-2xl mx-auto">
            Arcalia Hotel is the top-rated budget hotel in Changanassery offering comfortable rooms, authentic Kerala cuisine restaurant, AC event hall, and complimentary parking—just 2 minutes from KSRTC bus stand.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
            <Button 
              size="lg" 
              asChild
              className="px-7 py-5 text-base sm:text-lg font-light tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="tel:04812423027" aria-label="Call Arcalia Hotel to book your stay">
                <Phone className="w-4 h-4 mr-2" />
                Call 04812423027
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-7 py-5 text-base sm:text-lg font-light tracking-wider">
              <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer noopener" aria-label="Order food from Arcalia Restaurant on Zomato">
                <ExternalLink className="w-4 h-4 mr-2" />
                Order on Zomato
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-7 py-5 text-base sm:text-lg font-light tracking-wider">
              <a href="https://maps.app.goo.gl/9YLm4PGhbAUAgAU26" target="_blank" rel="noreferrer noopener" aria-label="Get directions to Arcalia Hotel on Google Maps">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Section - Above the fold value proposition */}
      <section className="py-10 px-4 bg-primary/5 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((amenity) => (
              <div key={amenity.title} className="flex flex-col items-center text-center p-4">
                <amenity.icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-medium text-foreground mb-1">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - H2 with semantic keywords */}
      <section className="py-14 px-4 bg-secondary/20" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-foreground mb-3">
              Hotel Services in Changanassery
            </h2>
            <p className="text-muted-foreground font-light">Everything you need for a comfortable stay in Kerala</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <Link href="/restaurant" className="group block rounded-sm border border-border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow" aria-label="Visit Arcalia Restaurant page">
              <h3 className="text-xl sm:text-2xl font-serif font-light mb-3 group-hover:text-primary transition-colors">Kerala Restaurant</h3>
              <p className="text-muted-foreground font-light text-sm sm:text-base mb-4">Authentic Kerala cuisine, biryani, grills, and seafood. Enjoy traditional meals starting at ₹200 with fish curry, chicken fry, and more.</p>
              <span className="text-primary text-sm font-medium">View Menu →</span>
            </Link>
            <Link href="/hall" className="group block rounded-sm border border-border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow" aria-label="Book AC Hall for events">
              <h3 className="text-xl sm:text-2xl font-serif font-light mb-3 group-hover:text-primary transition-colors">AC Event Hall</h3>
              <p className="text-muted-foreground font-light text-sm sm:text-base mb-4">Book our air-conditioned hall for meetings, celebrations, and gatherings. Capacity for 30-80 guests with catering and A/V support.</p>
              <span className="text-primary text-sm font-medium">Book Hall →</span>
            </Link>
            <Link href="/order" className="group block rounded-sm border border-border bg-white p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow" aria-label="Order food online from Arcalia">
              <h3 className="text-xl sm:text-2xl font-serif font-light mb-3 group-hover:text-primary transition-colors">Online Food Order</h3>
              <p className="text-muted-foreground font-light text-sm sm:text-base mb-4">Order your favorite Kerala dishes online via Zomato. Fast delivery and pickup available in Changanassery and nearby areas.</p>
              <span className="text-primary text-sm font-medium">Order Now →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section - H2 with descriptive alt text */}
      <section id="gallery" className="py-16 md:py-24 px-4 bg-white" aria-labelledby="gallery-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 id="gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Hotel Rooms & Facilities</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">Comfortable budget accommodation near Changanassery bus stand</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-sm group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section - H2 with food-related keywords */}
      <section id="menu" className="py-16 md:py-24 px-4 bg-secondary/30" aria-labelledby="menu-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 id="menu-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Kerala Cuisine & Restaurant Menu</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">Authentic South Indian food, biryani, grills & seafood in Changanassery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden group bg-white shadow-sm rounded-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788887863.png?width=8000&height=8000&resize=contain"
                alt="Special Chicken Biryani at Arcalia Restaurant Changanassery - Best biryani in Kottayam district"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-medium">Signature Biryani</h3>
                <p className="text-white/80 text-sm">Authentic dum biryani varieties</p>
              </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden group bg-white shadow-sm rounded-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788898202.png?width=8000&height=8000&resize=contain"
                alt="Grilled chicken and kebabs at Arcalia Hotel restaurant - Best grills in Changanassery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-medium">Grills & Kebabs</h3>
                <p className="text-white/80 text-sm">Charcoal grilled specialties</p>
              </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden group bg-white shadow-sm rounded-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788906015.png?width=8000&height=8000&resize=contain"
                alt="Traditional Kerala fish curry and meals at Arcalia - Authentic Kerala food Changanassery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-medium">Kerala Meals</h3>
                <p className="text-white/80 text-sm">Traditional thali with fish curry & chicken fry</p>
              </div>
            </div>
            <div className="relative h-64 sm:h-72 md:h-96 overflow-hidden group bg-white shadow-sm rounded-sm">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1764788933393.png?width=8000&height=8000&resize=contain"
                alt="South Indian rice dishes and seafood at Arcalia Restaurant Kerala"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-medium">Seafood Specials</h3>
                <p className="text-white/80 text-sm">Fresh catch prepared Kerala style</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer noopener" aria-label="View full menu and order on Zomato">
                View Full Menu on Zomato
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section - H2 with social proof */}
      <section className="py-16 md:py-24 px-4 bg-white" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 id="reviews-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Guest Reviews & Testimonials</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">What our guests say about Arcalia Hotel Changanassery</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <span className="text-foreground font-medium">4.5/5</span>
              <span className="text-muted-foreground">based on 150+ reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="flex h-full flex-col p-6 md:p-8 bg-white border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 font-light leading-relaxed text-sm sm:text-base">"{review.comment}"</blockquote>
                <div className="border-t border-border pt-4 mt-auto">
                  <p className="font-medium text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground font-light">{review.date}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <a href="https://maps.app.goo.gl/9YLm4PGhbAUAgAU26" target="_blank" rel="noreferrer noopener" aria-label="Read more reviews on Google Maps">
                Read More Reviews on Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section - H2 with local SEO keywords */}
      <section id="location" className="py-16 md:py-24 px-4 bg-secondary/20" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 id="location-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Hotel Location & Directions</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">Conveniently located near KSRTC Changanassery Bus Stand & Railway Station</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif font-light mb-6">How to Reach Arcalia Hotel</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">From KSRTC Bus Stand</p>
                    <p className="text-muted-foreground text-sm">2-minute walk via South Exit Road</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">From Changanassery Railway Station</p>
                    <p className="text-muted-foreground text-sm">5-minute drive or 15-minute walk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">Landmark</p>
                    <p className="text-muted-foreground text-sm">Near Janapriya Silks, KSRTC South Exit Road</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium text-foreground">Free Parking Available</p>
                    <p className="text-muted-foreground text-sm">Dedicated parking space for guests and diners</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <a href="https://maps.app.goo.gl/9YLm4PGhbAUAgAU26" target="_blank" rel="noreferrer noopener" aria-label="Get directions to Arcalia Hotel on Google Maps">
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                </Button>
              </div>
            </div>
            <div 
              className="relative h-72 sm:h-80 md:h-96 bg-muted cursor-pointer group overflow-hidden rounded-sm"
              onClick={handleMapClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleMapClick()}
              aria-label="Click to view Arcalia Hotel location on Google Maps"
            >
              {/* Embedded Google Maps iframe for better SEO */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.7!2d76.540974!3d9.445305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sArcalia%20Hotel!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Arcalia Hotel Changanassery Location Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Critical for SEO and Featured Snippets */}
      <section id="faq" className="py-16 md:py-24 px-4 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light">Common questions about Arcalia Hotel Changanassery</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group border border-border rounded-sm bg-white shadow-sm">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-foreground hover:text-primary transition-colors">
                  <span>{faq.question}</span>
                  <span className="ml-4 flex-shrink-0 text-primary group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-muted-foreground font-light leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Conversion focused */}
      <section className="py-16 md:py-20 px-4 bg-primary text-primary-foreground" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6">Book Your Stay at Arcalia Hotel</h2>
          <p className="text-lg sm:text-xl font-light opacity-90 mb-8 max-w-2xl mx-auto">
            Experience the best budget accommodation in Changanassery. Call now to reserve your room, book our hall, or make a restaurant reservation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              asChild
              className="px-8 py-6 text-lg"
            >
              <a href="tel:04812423027" aria-label="Call Arcalia Hotel">
                <Phone className="w-5 h-5 mr-2" />
                Call 04812423027
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              asChild
              className="px-8 py-6 text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href="https://maps.app.goo.gl/9YLm4PGhbAUAgAU26" target="_blank" rel="noreferrer noopener" aria-label="Get directions on Google Maps">
                <MapPin className="w-5 h-5 mr-2" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - NAP Consistency */}
      <footer id="contact" className="bg-foreground text-background py-14 px-4" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4 md:mb-6">Arcalia Hotel</h3>
              <p className="font-light opacity-90 leading-relaxed mb-4">
                The best budget hotel in Changanassery, Kerala, offering comfortable rooms, authentic Kerala cuisine, AC event hall, and free parking near KSRTC bus stand.
              </p>
              <div className="flex items-center gap-2 text-sm opacity-90">
                <Car className="w-4 h-4" aria-hidden="true" />
                <span>Free dedicated parking for all guests</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 tracking-wide">Contact Us</h4>
              <address className="not-italic space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <a href="tel:04812423027" className="font-light hover:underline">04812423027</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <a href="mailto:info@arcaliahotel.com" className="font-light hover:underline">info@arcaliahotel.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" aria-hidden="true" />
                  <span className="font-light">KSRTC South Exit Road, near Janapriya Silks, Changanassery, Kerala 686101</span>
                </div>
              </address>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-6 tracking-wide">Quick Links</h4>
              <nav className="space-y-3 font-light" aria-label="Footer navigation">
                <Link href="/restaurant" className="block hover:underline">Restaurant</Link>
                <Link href="/hall" className="block hover:underline">Hall Booking</Link>
                <Link href="/order" className="block hover:underline">Order Online</Link>
                <a href="https://maps.app.goo.gl/9YLm4PGhbAUAgAU26" target="_blank" rel="noreferrer noopener" className="block hover:underline">Google Maps</a>
                <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer noopener" className="block hover:underline">Zomato</a>
              </nav>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <p className="font-light opacity-80">© 2025 Arcalia Hotel, Changanassery. All rights reserved.</p>
                <p className="text-sm opacity-70 mt-1">Best Budget Hotel in Changanassery, Kerala | Near KSRTC Bus Stand</p>
              </div>
              <p className="text-sm opacity-80">
                Site crafted by <a href="https://www.noxusdynamics.tech/" target="_blank" rel="noreferrer noopener" className="underline font-medium hover:opacity-100">Noxus Dynamics</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}