import { ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">Order</p>
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-6">Order Arcalia favorites online</h1>
          <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
            Tap below to open our Zomato page. On phones with Zomato installed, it will open in the app; otherwise it loads in your browser.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-6">
              <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Order on Zomato
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-6">
              <a href="tel:04812423027" className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call the restaurant
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 border-border shadow-sm">
            <h3 className="text-2xl font-serif font-light mb-3">Fast pickup</h3>
            <p className="text-muted-foreground font-light leading-relaxed">Place your order on Zomato and collect from our dedicated pickup counter with reserved parking.</p>
          </Card>
          <Card className="p-6 border-border shadow-sm">
            <h3 className="text-2xl font-serif font-light mb-3">Delivery ready</h3>
            <p className="text-muted-foreground font-light leading-relaxed">Let Zomato bring your favorites—biryani, grills, and quick bites—straight to your door.</p>
          </Card>
          <Card className="p-6 border-border shadow-sm">
            <h3 className="text-2xl font-serif font-light mb-3">Need help?</h3>
            <p className="text-muted-foreground font-light leading-relaxed">Call us if you have dietary requests or need guidance on the menu before ordering.</p>
          </Card>
        </div>
      </section>
    </div>
  );
}
