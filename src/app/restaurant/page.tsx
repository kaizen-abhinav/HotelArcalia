import Image from "next/image";
import { MapPin, Phone, Star, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const specials = [
  {
    title: "Signature Meals",
    detail: "Hearty Kerala-style thali with fish curry, chicken fry, and seasonal specials.",
    price: "₹200",
  },
  {
    title: "Grills & Kebabs",
    detail: "Charred to perfection with house-made spice rubs and fresh sides.",
    price: "₹180+",
  },
  {
    title: "Quick Bites",
    detail: "Tea-time snacks, parotta combos, and evening small plates ready for takeaway.",
    price: "₹60+",
  },
];

const menuItems = [
  { category: "Kerala Meals", items: [
    { name: "Veg Meals (Thali)", price: "₹120", desc: "Rice, sambar, rasam, 2 vegetables, papad, pickle" },
    { name: "Non-Veg Meals", price: "₹200", desc: "Rice, fish curry, chicken fry, kakka irachi, vegetables" },
    { name: "Fish Meals Special", price: "₹180", desc: "Rice with premium fish curry and sides" },
  ]},
  { category: "Biryani", items: [
    { name: "Chicken Biryani", price: "₹180", desc: "Fragrant basmati rice with tender chicken pieces" },
    { name: "Mutton Biryani", price: "₹250", desc: "Slow-cooked mutton with aromatic spices" },
    { name: "Fish Biryani", price: "₹220", desc: "Kerala-style fish biryani with coconut" },
    { name: "Veg Biryani", price: "₹140", desc: "Mixed vegetables in spiced rice" },
  ]},
  { category: "Grills & Tandoor", items: [
    { name: "Chicken Grill (Full)", price: "₹320", desc: "Whole marinated chicken grilled to perfection" },
    { name: "Chicken Grill (Half)", price: "₹180", desc: "Half portion of grilled chicken" },
    { name: "Fish Grill", price: "₹200", desc: "Fresh catch grilled with Kerala spices" },
    { name: "Chicken Tikka", price: "₹160", desc: "Boneless chicken in tandoor" },
  ]},
  { category: "Starters", items: [
    { name: "Chicken 65", price: "₹150", desc: "Spicy deep-fried chicken" },
    { name: "Prawns Fry", price: "₹180", desc: "Crispy fried prawns with masala" },
    { name: "Fish Fry", price: "₹140", desc: "Kerala-style fish fry" },
    { name: "Beef Fry", price: "₹160", desc: "Spicy Kerala beef fry" },
  ]},
  { category: "Parotta Combos", items: [
    { name: "Parotta + Chicken Curry", price: "₹100", desc: "2 parottas with chicken curry" },
    { name: "Parotta + Beef Curry", price: "₹110", desc: "2 parottas with beef curry" },
    { name: "Parotta + Egg Curry", price: "₹70", desc: "2 parottas with egg curry" },
  ]},
  { category: "Beverages", items: [
    { name: "Fresh Lime Soda", price: "₹40", desc: "Sweet or salted" },
    { name: "Buttermilk", price: "₹30", desc: "Spiced Kerala moru" },
    { name: "Tea/Coffee", price: "₹20", desc: "Hot beverages" },
  ]},
];

export default function RestaurantPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/20 py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 md:mb-4">Restaurant</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light mb-4 md:mb-6">Authentic Kerala Cuisine in Changanassery</h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-6 md:mb-8">
              Drop in for Kerala classics or order online. Guests and diners get a dedicated parking space right outside, making dine-in and takeaway effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer noopener">Order on Zomato</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="tel:04812423027" className="inline-flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call 04812423027
                </a>
              </Button>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>KSRTC South Exit Road, near Janapriya Silks, Changanassery</span>
            </div>
          </div>
          <div className="relative h-56 sm:h-64 md:h-[320px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg bg-muted">
            <Image
              src="/gallery/gallery-1.jpeg"
              alt="Arcalia Restaurant interior - authentic Kerala cuisine in Changanassery"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
              quality={90}
            />
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-10 md:py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light mb-6 md:mb-8 text-center">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {specials.map((item) => (
              <Card key={item.title} className="p-4 md:p-6 border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg sm:text-xl font-serif font-light">{item.title}</h3>
                  <span className="text-primary font-semibold text-sm">{item.price}</span>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.detail}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Full Menu Section */}
      <section className="py-10 md:py-16 px-4 bg-secondary/10" id="menu">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <Utensils className="w-8 h-8 text-primary mx-auto mb-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light mb-2">Our Menu</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Authentic Kerala flavors at affordable prices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {menuItems.map((category) => (
              <Card key={category.category} className="p-4 md:p-6 bg-white">
                <h3 className="text-lg sm:text-xl font-serif font-medium mb-4 pb-2 border-b border-primary/20 text-primary">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground text-sm sm:text-base">{item.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="text-primary font-semibold text-sm whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-xs sm:text-sm text-muted-foreground mt-8">
            * Prices are subject to change. For the latest menu and prices, please call us or check Zomato.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light mb-3 md:mb-4">Dine-in, Takeaway, or Delivery</h2>
          <p className="text-sm sm:text-base font-light opacity-90 leading-relaxed mb-6 max-w-2xl mx-auto">
            Choose what works for you—grab a quick bite after check-in, book a table with parking assured, or order through Zomato and get your favorites delivered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
              <a href="http://zoma.to/r/20041234" target="_blank" rel="noreferrer noopener">Order on Zomato</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:04812423027" className="inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Restaurant
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
