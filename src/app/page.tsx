import Image from "next/image";
import Link from "next/link";
import { Car, MapPin, Mail, Phone, Clock, Utensils, Users, CheckCircle, ExternalLink, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ReviewSystem from "@/components/ReviewSystem";
import LocationSection from "@/components/LocationSection"; // Import the new component

import { placeholderReviews } from "@/lib/data";
import { getReviews } from "@/app/actions";

export default async function Home() {
  const dbReviews = await getReviews();

  // Merge logic: Real reviews first, then fill remaining spots with placeholders
  // We want a total of 5 reviews shown
  const totalSlots = 5;

  // Cast dbReviews to match the shape if needed, or rely on loose matching since schema is similar
  // Note: DB reviews might have different ID types or fields, ensuring compatibility
  const normalizedDbReviews = dbReviews.map(r => ({
    ...r,
    id: Number(r.id), // Ensure ID is number if needed
    source: r.source || "Website", // Fallback
    formattedDate: r.date, // Store original date string
  }));

  const reviews = [...normalizedDbReviews, ...placeholderReviews]
    .slice(0, totalSlots);



  const galleryImages = [
    { src: "/gallery/gallery-1.jpeg", alt: "Arcalia Hotel Changanassery exterior view - best budget hotel near KSRTC bus stand Kerala" },
    { src: "/gallery/gallery-2.jpeg", alt: "Comfortable hotel room at Arcalia Hotel Changanassery with modern amenities and clean bedding" },
    { src: "/gallery/gallery-3.jpeg", alt: "Spacious budget accommodation at Arcalia Hotel Kerala with parking facility" },
    { src: "/gallery/gallery-4.jpeg", alt: "Well-maintained hotel interior near KSRTC Changanassery bus stand and railway station" }
  ];

  const amenities = [
    { icon: Car, title: "Free Parking", description: "Dedicated parking space for all guests" },
    { icon: Utensils, title: "Multi-Cuisine Restaurant", description: "Authentic Kerala food & biryani" },
    { icon: Users, title: "AC Event Hall", description: "Capacity for 30-80 guests" },
    { icon: Bed, title: "AC & Non-AC Rooms", description: "Comfortable stays for every budget" },
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
      answer: "You can order food online through Zomato for delivery or pickup. Simply visit our Zomato page or call us at 0481 2423027 to place your order."
    },
    {
      question: "Is Arcalia Hotel near Changanassery bus stand?",
      answer: "Yes, Arcalia Hotel is located right next to KSRTC South Exit Road, just a 2-minute walk from Changanassery KSRTC bus stand, making it the most convenient hotel for travelers."
    },
    {
      question: "What are the room rates at Arcalia Hotel?",
      answer: "Arcalia Hotel offers budget-friendly rooms starting at affordable rates. A/C Double Room: ₹2000, Non A/C Double Room: ₹1500. For current pricing and special offers, please call us at 0481 2423027 / 9656511777."
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
            Where Elegance Meets Comfort
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-primary font-medium mb-4 tracking-wide">
            Arcalia Hotel — A Legacy of Hospitality
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 font-light tracking-wide">
            Experience Timeless Luxury in the Heart of Changanassery, Kerala
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
                Call 0481 2423027
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-7 py-5 text-base sm:text-lg font-light tracking-wider">
              <Link href="/rooms" aria-label="View rooms and pricing details">
                <Bed className="w-4 h-4 mr-2" />
                View Rooms & Pricing
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-7 py-5 text-base sm:text-lg font-light tracking-wider">
              <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer noopener" aria-label="Order food from Arcalia Restaurant on Zomato">
                <ExternalLink className="w-4 h-4 mr-2" />
                Order on Zomato
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group bg-muted h-64 sm:h-72 md:h-80"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index < 2 ? "eager" : "lazy"}
                  quality={90}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhMf/aAAwDAQACEQMRAD8AzHbG3dPu9DgursySXEgLh1kKgAMQBgfOpv4KKAMHoEfaKKluTJMi0Gf/2Q=="
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link href="/gallery">View All Photos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Rooms Promo Section */}
      <section id="tariff" className="py-16 md:py-24 px-4 bg-primary/5 border-y border-border" aria-labelledby="rooms-heading">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-72 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/gallery/gallery-2.jpeg"
                alt="Comfortable rooms at Arcalia Hotel Changanassery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
              <h2 id="rooms-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
                Comfortable Stays
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-light mb-4">
                Choose from our AC and Non-AC rooms, designed for your comfort.
              </p>
              <p className="text-2xl font-serif text-primary mb-6">
                Starting from <span className="font-semibold">₹800/-</span> per night
              </p>
              <Button asChild size="lg" className="px-8">
                <Link href="/rooms">View Rooms & Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


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

      {/* Reviews Section - Interactive Review System */}
      <ReviewSystem initialReviewData={reviews} />

      {/* Location Section - H2 with local SEO keywords */}
      <LocationSection />

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
                Call 0481 2423027
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
                  <a href="tel:04812423027" className="font-light hover:underline">0481 2423027</a>
                  <span className="text-muted-foreground">/</span>
                  <a href="tel:9656511777" className="font-light hover:underline">9656511777</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <a href="mailto:arcaliachry@gmail.com" className="font-light hover:underline">arcaliachry@gmail.com</a>
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
              <div className="text-center md:text-right">
                <p className="text-sm opacity-80">
                  Developed by <a href="https://noxusdynamics.tech" target="_blank" rel="noreferrer noopener" className="underline font-medium hover:opacity-100">Noxus Dynamics</a>
                </p>
                <p className="text-xs opacity-70 mt-1">
                  <a href="tel:8590173610" className="hover:underline">📞 8590173610</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}