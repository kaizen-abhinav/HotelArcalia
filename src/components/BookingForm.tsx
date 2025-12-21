"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Send, Calendar, Users, Phone } from "lucide-react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        guests: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1200));

        console.log("Booking Inquiry:", formData);

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", phone: "", date: "", guests: "", message: "" });
    };

    if (submitted) {
        return (
            <Card className="p-8 text-center bg-primary/5 border-primary/20 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-medium text-foreground mb-3">
                    Request Sent!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
                    Thank you for your inquiry. Our team will check availability for your selected date and call you shortly to confirm details.
                </p>
                <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="min-w-[140px]"
                >
                    Send Another
                </Button>
            </Card>
        );
    }

    return (
        <Card className="p-6 md:p-8 bg-white border-border shadow-lg">
            <div className="mb-6">
                <h3 className="text-2xl font-serif font-medium mb-2">Check Availability</h3>
                <p className="text-sm text-muted-foreground">
                    Fill out the form below and we'll get back to you with a quote.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                        Your Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                        Phone Number *
                    </label>
                    <div className="relative">
                        <Phone className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                        <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="+91 99999 99999"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium mb-1.5">
                            Event Date *
                        </label>
                        <div className="relative">
                            <input
                                type="date"
                                id="date"
                                required
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="guests" className="block text-sm font-medium mb-1.5">
                            Est. Guests
                        </label>
                        <div className="relative">
                            <Users className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                            <input
                                type="number"
                                id="guests"
                                value={formData.guests}
                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                className="w-full pl-9 pr-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                placeholder="50"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                        Event Type / Message
                    </label>
                    <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                        placeholder="e.g. Birthday party for 50 people via lunch..."
                    />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full gap-2 mt-2">
                    {isSubmitting ? (
                        <>
                            <span className="animate-spin">⏳</span>
                            Sending Request...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            Send Booking Inquiry
                        </>
                    )}
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-3">
                    Or call us directly at <a href="tel:04812423027" className="font-medium text-foreground hover:underline">0481 2423027</a>
                </p>
            </form>
        </Card>
    );
}
