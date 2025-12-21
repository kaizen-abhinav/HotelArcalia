import Link from "next/link";
import { Phone, Bed, Snowflake, Fan, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = {
    title: "Rooms & Pricing | Arcalia Hotel Changanassery",
    description: "View our comfortable AC and Non-AC rooms at Arcalia Hotel Changanassery. Affordable rates starting from ₹800. Book your stay today!",
};

const rooms = [
    {
        type: "AC Double Room",
        price: 2000,
        icon: Snowflake,
        features: ["Air Conditioning", "Double Bed", "Attached Bathroom", "Room Service", "Free WiFi"],
    },
    {
        type: "AC Single Room",
        price: 1500,
        icon: Snowflake,
        features: ["Air Conditioning", "Single Bed", "Attached Bathroom", "Room Service", "Free WiFi"],
    },
    {
        type: "Non-AC Double Room",
        price: 1500,
        icon: Fan,
        features: ["Ceiling Fan", "Double Bed", "Attached Bathroom", "Room Service", "Free WiFi"],
    },
    {
        type: "Non-AC Single Room",
        price: 800,
        icon: Fan,
        features: ["Ceiling Fan", "Single Bed", "Attached Bathroom", "Room Service", "Free WiFi"],
    },
];

export default function RoomsPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="py-12 md:py-20 px-4 bg-secondary/20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 md:mb-4">Accommodation</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 md:mb-6">Rooms & Pricing</h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        Choose from our comfortable AC and Non-AC rooms. All rooms come with attached bathrooms, room service, and complimentary WiFi.
                    </p>
                </div>
            </section>

            {/* Rooms Grid */}
            <section className="py-12 md:py-16 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {rooms.map((room, index) => (
                            <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <room.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-serif font-medium">{room.type}</h3>
                                    </div>
                                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-lg">
                                        ₹{room.price}/-
                                    </div>
                                </div>
                                <ul className="space-y-2 mb-5">
                                    {room.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                                            <CheckCircle className="w-4 h-4 text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button asChild className="w-full">
                                    <a href="tel:04812423027">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Book Now
                                    </a>
                                </Button>
                            </Card>
                        ))}
                    </div>

                    {/* Extra Bed Info */}
                    <div className="mt-12 text-center">
                        <div className="inline-block bg-primary/5 px-8 py-4 rounded-lg border border-border">
                            <p className="text-muted-foreground font-light">
                                <Bed className="w-5 h-5 inline-block mr-2 text-primary" />
                                Extra Bed Available: <span className="font-semibold text-foreground ml-1">₹250/-</span>
                            </p>
                        </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-muted-foreground mb-4">For reservations and inquiries:</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button size="lg" asChild>
                                <a href="tel:04812423027">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call 0481 2423027
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="tel:9656511777">
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call 9656511777
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Check-in/out Info */}
            <section className="py-12 px-4 bg-primary/5 border-y border-border">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl font-serif font-light mb-6">Hotel Policies</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="p-4">
                            <p className="font-medium text-foreground">Check-in Time</p>
                            <p className="text-muted-foreground">3:00 PM</p>
                        </div>
                        <div className="p-4">
                            <p className="font-medium text-foreground">Check-out Time</p>
                            <p className="text-muted-foreground">11:00 AM</p>
                        </div>
                        <div className="p-4">
                            <p className="font-medium text-foreground">Front Desk</p>
                            <p className="text-muted-foreground">24/7 Available</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
