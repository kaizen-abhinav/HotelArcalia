import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const siteUrl = "https://arcaliahotel.com";

export const metadata: Metadata = {
  title: "Arcalia Hotel Changanassery | Best Budget Stay & Restaurant",
  description: "Stay at Arcalia Hotel Changanassery near KSRTC bus stand. Budget rooms, Kerala cuisine restaurant, AC hall & free parking. Call 04812423027 to book now!",
  keywords: [
    "Arcalia Hotel",
    "hotel in Changanassery",
    "best hotel Changanassery",
    "budget hotel Changanassery",
    "hotels near KSRTC Changanassery",
    "hotel with parking Changanassery",
    "restaurant Changanassery",
    "Kerala food Changanassery",
    "hall booking Changanassery",
    "hotel near Changanassery bus stand",
    "hotels near Changanassery railway station",
    "Kottayam district hotel",
    "biryani Changanassery",
    "non-veg meals Changanassery",
    "cheap hotel Changanassery",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Arcalia Hotel Changanassery | Budget Stay, Great Food & Free Parking",
    description: "Experience the best budget hotel in Changanassery, Kerala. Enjoy authentic Kerala cuisine, AC event hall, and dedicated parking near KSRTC bus stand. Book your stay today!",
    type: "website",
    siteName: "Arcalia Hotel",
    url: siteUrl,
    locale: "en_IN",
    images: [
      {
        url: "https://images.jdmagicbox.com/comp/kottayam/y4/9999px481.x481.110729114809.b7y4/catalogue/hotel-arcadia-changanacherry-kottayam-restaurants-16vby-250.jpg",
        width: 1200,
        height: 630,
        alt: "Arcalia Hotel Changanassery - Best Budget Hotel with Restaurant and Parking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcalia Hotel Changanassery | Best Budget Stay & Restaurant",
    description: "Best budget hotel in Changanassery near KSRTC bus stand. Kerala cuisine, AC hall & free parking. Book now!",
    images: ["https://images.jdmagicbox.com/comp/kottayam/y4/9999px481.x481.110729114809.b7y4/catalogue/hotel-arcadia-changanacherry-kottayam-restaurants-16vby-250.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Changanassery",
    "geo.position": "9.445305;76.540974",
    ICBM: "9.445305, 76.540974",
  },
  formatDetection: {
    telephone: true,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Hotel",
        "@id": "https://arcaliahotel.com/#hotel",
        name: "Arcalia Hotel",
        alternateName: "Hotel Arcalia Changanassery",
        slogan: "Tasty Food, Safe Stay",
        description: "Arcalia Hotel is the best budget hotel in Changanassery, Kerala, offering comfortable rooms, authentic Kerala cuisine restaurant, AC event hall, and free dedicated parking near KSRTC bus stand.",
        url: "https://arcaliahotel.com",
        telephone: "+914812423027",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
        image: [
          "https://images.jdmagicbox.com/comp/kottayam/y4/9999px481.x481.110729114809.b7y4/catalogue/hotel-arcadia-changanacherry-kottayam-restaurants-16vby-250.jpg",
          "https://images.jdmagicbox.com/comp/kottayam/y4/9999px481.x481.110729114809.b7y4/catalogue/hotel-arcadia-changanacherry-kottayam-restaurants-dg5wg-250.jpg"
        ],
        logo: "https://arcaliahotel.com/logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "KSRTC South Exit Road, near Janapriya Silks",
          addressLocality: "Changanassery",
          addressRegion: "Kerala",
          postalCode: "686101",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 9.445305,
          longitude: 76.540974,
        },
        hasMap: "https://maps.app.goo.gl/9YLm4PGhbAUAgAU26",
        servesCuisine: ["Kerala", "South Indian", "Indian", "Grills", "Biryani"],
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
          { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
          { "@type": "LocationFeatureSpecification", name: "AC Event Hall", value: true },
          { "@type": "LocationFeatureSpecification", name: "24/7 Front Desk", value: true },
          { "@type": "LocationFeatureSpecification", name: "Room Service", value: true },
          { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
        ],
        checkinTime: "15:00",
        checkoutTime: "11:00",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        starRating: {
          "@type": "Rating",
          ratingValue: "4.5",
          bestRating: "5",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.5",
          reviewCount: "150",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Ratish S" },
            datePublished: "2024-01-15",
            reviewBody: "Love the non-veg meals here. The Rs. 200/- meal is a wholesome package with fish curry, chicken fry, kakka irachi and more.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Satheesh SR" },
            datePublished: "2024-02-20",
            reviewBody: "Stayed more than 15 times; best budget friendly rooms with a restaurant and bar close to the bus stand and railway station.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Minu Menon" },
            datePublished: "2024-03-10",
            reviewBody: "Nice place, enough seating, good staff and good food.",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
          },
        ],
        sameAs: [
          "https://maps.app.goo.gl/9YLm4PGhbAUAgAU26",
          "http://zoma.to/r/20041234",
        ],
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: { "@type": "GeoCoordinates", latitude: 9.445305, longitude: 76.540974 },
          geoRadius: "50000",
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "tel:+914812423027",
            actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
          },
          result: { "@type": "Reservation", name: "Hotel Room Reservation" },
        },
      },
      {
        "@type": "Restaurant",
        "@id": "https://arcaliahotel.com/#restaurant",
        name: "Arcalia Restaurant",
        description: "Multi-cuisine restaurant serving authentic Kerala food, biryani, grills, and South Indian dishes in Changanassery.",
        url: "https://arcaliahotel.com/restaurant",
        telephone: "+914812423027",
        priceRange: "₹₹",
        servesCuisine: ["Kerala", "South Indian", "Indian", "Grills", "Biryani", "Seafood"],
        menu: "http://zoma.to/r/20041234",
        address: {
          "@type": "PostalAddress",
          streetAddress: "KSRTC South Exit Road, near Janapriya Silks",
          addressLocality: "Changanassery",
          addressRegion: "Kerala",
          postalCode: "686101",
          addressCountry: "IN",
        },
        geo: { "@type": "GeoCoordinates", latitude: 9.445305, longitude: 76.540974 },
        parentOrganization: { "@id": "https://arcaliahotel.com/#hotel" },
        acceptsReservations: "True",
        hasMenu: {
          "@type": "Menu",
          hasMenuSection: [
            { "@type": "MenuSection", name: "Kerala Meals", description: "Traditional Kerala thali with fish curry, chicken fry, and more" },
            { "@type": "MenuSection", name: "Biryani", description: "Authentic dum biryani varieties" },
            { "@type": "MenuSection", name: "Grills & Kebabs", description: "Charcoal grilled specialties" },
          ],
        },
      },
      {
        "@type": "EventVenue",
        "@id": "https://arcaliahotel.com/#hall",
        name: "Arcalia Hall",
        description: "AC event hall for meetings, celebrations, and gatherings in Changanassery with catering services.",
        url: "https://arcaliahotel.com/hall",
        telephone: "+914812423027",
        maximumAttendeeCapacity: 80,
        address: {
          "@type": "PostalAddress",
          streetAddress: "KSRTC South Exit Road, near Janapriya Silks",
          addressLocality: "Changanassery",
          addressRegion: "Kerala",
          postalCode: "686101",
          addressCountry: "IN",
        },
        amenityFeature: [
          { "@type": "LocationFeatureSpecification", name: "Air Conditioning", value: true },
          { "@type": "LocationFeatureSpecification", name: "Audio/Visual Equipment", value: true },
          { "@type": "LocationFeatureSpecification", name: "Catering", value: true },
          { "@type": "LocationFeatureSpecification", name: "Parking", value: true },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://arcaliahotel.com/#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://arcaliahotel.com" },
          { "@type": "ListItem", position: 2, name: "Restaurant", item: "https://arcaliahotel.com/restaurant" },
          { "@type": "ListItem", position: 3, name: "Hall", item: "https://arcaliahotel.com/hall" },
          { "@type": "ListItem", position: 4, name: "Order", item: "https://arcaliahotel.com/order" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://arcaliahotel.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where is Arcalia Hotel located in Changanassery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Arcalia Hotel is located on KSRTC South Exit Road, near Janapriya Silks, Changanassery, Kerala 686101. We are just 2 minutes walk from KSRTC bus stand and close to Changanassery railway station.",
            },
          },
          {
            "@type": "Question",
            name: "Does Arcalia Hotel have parking facilities?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Arcalia Hotel offers free dedicated parking for all guests and restaurant visitors. Our parking area is secure and conveniently located right next to the hotel entrance.",
            },
          },
          {
            "@type": "Question",
            name: "What type of food does Arcalia Restaurant serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Arcalia Restaurant serves authentic Kerala cuisine including traditional meals (thali), biryani, grilled specialties, seafood, and South Indian dishes. Our signature Kerala meal at ₹200 includes fish curry, chicken fry, and more.",
            },
          },
          {
            "@type": "Question",
            name: "Can I book the hall at Arcalia Hotel for events?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, our AC hall accommodates 30-80 guests and is perfect for meetings, birthday parties, small receptions, and corporate events. We provide catering, audio-visual equipment, and dedicated parking for event guests.",
            },
          },
          {
            "@type": "Question",
            name: "What are the check-in and check-out times at Arcalia Hotel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged based on availability. Our front desk is available 24/7.",
            },
          },
          {
            "@type": "Question",
            name: "How can I order food from Arcalia Restaurant for delivery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can order food online through Zomato for delivery or pickup. Simply visit our Zomato page or call us at 04812423027 to place your order.",
            },
          },
          {
            "@type": "Question",
            name: "Is Arcalia Hotel near Changanassery bus stand?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Arcalia Hotel is located right next to KSRTC South Exit Road, just a 2-minute walk from Changanassery KSRTC bus stand, making it the most convenient hotel for travelers.",
            },
          },
          {
            "@type": "Question",
            name: "What are the room rates at Arcalia Hotel?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Arcalia Hotel offers budget-friendly rooms starting at affordable rates. For current pricing and special offers, please call us at 04812423027 or visit in person.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://arcaliahotel.com/#website",
        url: "https://arcaliahotel.com",
        name: "Arcalia Hotel",
        description: "Best budget hotel in Changanassery with restaurant and parking",
        publisher: { "@id": "https://arcaliahotel.com/#hotel" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://arcaliahotel.com/?s={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://arcaliahotel.com/#webpage",
        url: "https://arcaliahotel.com",
        name: "Arcalia Hotel Changanassery | Best Budget Stay & Restaurant",
        isPartOf: { "@id": "https://arcaliahotel.com/#website" },
        about: { "@id": "https://arcaliahotel.com/#hotel" },
        description: "Stay at Arcalia Hotel Changanassery near KSRTC bus stand. Budget rooms, Kerala cuisine restaurant, AC hall & free parking.",
        breadcrumb: { "@id": "https://arcaliahotel.com/#breadcrumb" },
        inLanguage: "en-IN",
        datePublished: "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="geo.position" content="9.445305;76.540974" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Changanassery" />
        <meta name="ICBM" content="9.445305, 76.540974" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <div className="text-base sm:text-lg font-semibold tracking-wide whitespace-nowrap">Arcalia Hotel</div>
              <span className="hidden sm:inline text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Tasty Food, Safe Stay</span>
            </Link>
            {/* Mobile Menu Button */}
            <input type="checkbox" id="mobile-menu" className="peer hidden" />
            <label htmlFor="mobile-menu" className="md:hidden cursor-pointer p-2 -mr-2 hover:bg-muted rounded-md" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium text-foreground">
              <Link href="/restaurant" className="hover:text-primary transition-colors">Restaurant</Link>
              <Link href="/hall" className="hover:text-primary transition-colors">Hall</Link>
              <Link href="/order" className="hover:text-primary transition-colors">Order</Link>
              <a
                href="http://zoma.to/r/20041234"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
              >
                Order Food
              </a>
            </nav>
            {/* Mobile Navigation */}
            <nav className="hidden peer-checked:flex flex-col absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg md:hidden z-50">
              <Link href="/restaurant" className="px-4 py-3 hover:bg-muted transition-colors border-b border-border/50">Restaurant</Link>
              <Link href="/hall" className="px-4 py-3 hover:bg-muted transition-colors border-b border-border/50">Hall</Link>
              <Link href="/order" className="px-4 py-3 hover:bg-muted transition-colors border-b border-border/50">Order</Link>
              <a
                href="http://zoma.to/r/20041234"
                target="_blank"
                rel="noreferrer noopener"
                className="mx-4 my-3 text-center rounded-md bg-primary px-4 py-3 text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Order Food on Zomato
              </a>
            </nav>
          </div>
        </header>
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
