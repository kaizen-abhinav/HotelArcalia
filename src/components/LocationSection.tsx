"use client";

import { CheckCircle, Car, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LocationSection() {
    const handleMapClick = () => {
        window.open("https://maps.app.goo.gl/9YLm4PGhbAUAgAU26", "_blank");
    };

    return (
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
    );
}
