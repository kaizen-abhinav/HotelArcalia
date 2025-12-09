import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

const siteUrl = "https://arcaliahotel.com";

export const metadata: Metadata = {
  title: "Arcalia Hotel | Tast Food, Safety Stay",
  description: "Experience Arcalia Hotel in Changanassery with dedicated parking, great food, and warm hospitality.",
  keywords: [
    "Arcalia Hotel",
    "hotel changanassery",
    "best hotel changanassery",
    "hotels near KSRTC changanassery",
    "parking hotel changanassery",
    "restaurant changanassery",
    "hall changanassery",
    "kerala hotel arcalia",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Arcalia Hotel | Tast Food, Safety Stay",
    description: "Stay and dine at Arcalia Hotel in Changanassery with dedicated parking, great food, and warm hospitality.",
    type: "website",
    siteName: "Arcalia Hotel",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcalia Hotel | Tast Food, Safety Stay",
    description: "Stay and dine at Arcalia Hotel in Changanassery with dedicated parking and great food.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Arcalia Hotel",
    slogan: "Tast Food, Safety Stay",
    description: "Stay and dine at Arcalia Hotel in Changanassery with dedicated parking, great food, and warm hospitality.",
    url: "https://www.google.com/maps/place/Arcalia+Hotel/",
    telephone: "+914812423027",
    priceRange: "₹₹",
    image: "https://images.jdmagicbox.com/comp/kottayam/y4/9999px481.x481.110729114809.b7y4/catalogue/hotel-arcadia-changanacherry-kottayam-restaurants-16vby-250.jpg",
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
    hasMap: "https://www.google.com/maps/place/Arcalia+Hotel/",
    servesCuisine: ["Kerala", "Indian", "Grills"],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Dedicated parking",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Restaurant",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Event hall",
        value: true,
      },
    ],
    openingHours: "Mo-Su 00:00-23:59",
    sameAs: [
      "https://maps.app.goo.gl/9YLm4PGhbAUAgAU26",
      "http://zoma.to/r/20041234",
      "https://www.noxusdynamics.tech/",
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
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-lg font-semibold tracking-wide">Arcalia Hotel</div>
              <span className="text-sm text-muted-foreground">Tast Food, Safety Stay</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-foreground">
              <Link href="/restaurant" className="hover:text-primary transition-colors">Restaurant</Link>
              <Link href="/hall" className="hover:text-primary transition-colors">Hall</Link>
              <Link href="/order" className="hover:text-primary transition-colors">Order</Link>
              <a
                href="http://zoma.to/r/20041234"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-sm bg-primary px-3 py-2 text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Order Food
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
