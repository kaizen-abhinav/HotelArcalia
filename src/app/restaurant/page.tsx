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
  {
    category: "Breakfast", items: [
      { name: "Palappam", price: "₹10", desc: "Traditional rice pancake" },
      { name: "Chapathi", price: "₹15", desc: "Whole wheat flatbread" },
      { name: "Porotta", price: "₹15", desc: "Layered flatbread" },
      { name: "Wheat Porotta", price: "₹18", desc: "Whole wheat layered flatbread" },
      { name: "Masaladosa", price: "₹70", desc: "Crispy dosa with potato filling" },
      { name: "Ghee Roast", price: "₹70", desc: "Crispy dosa roast with ghee" },
      { name: "Idly", price: "₹15", desc: "Steamed rice cake" },
      { name: "Poori Set", price: "₹70", desc: "Puffy bread with potato curry" },
    ]
  },
  {
    category: "Vegetarian", items: [
      { name: "Veg Curry", price: "₹60", desc: "Mixed vegetable curry" },
      { name: "Gobimanjurian", price: "₹110", desc: "Cauliflower in manchurian sauce" },
      { name: "Chilly Gobi", price: "₹110", desc: "Spicy cauliflower fry" },
      { name: "Tomato Fry", price: "₹100", desc: "Tangy tomato preparation" },
      { name: "Paneer B. Masala", price: "₹140", desc: "Paneer cubes in butter masala gravy" },
      { name: "Veg Salad", price: "₹150", desc: "Fresh vegetable salad" },
      { name: "Peanut Masala", price: "₹150", desc: "Spicy peanut mix" },
    ]
  },
  {
    category: "Non Veg", items: [
      { name: "Egg Roast", price: "₹40", desc: "Spicy egg roast" },
      { name: "C. Rost / C. Curry", price: "₹160", desc: "Chicken roast or curry" },
      { name: "Mutton Chaps", price: "₹210", desc: "Traditional mutton chops" },
      { name: "Beef Curry / Rost", price: "₹170", desc: "Spicy beef preparation" },
      { name: "Beef Fry", price: "₹160", desc: "Kerala style beef fry" },
      { name: "B.D.F", price: "₹190", desc: "Beef Dry Fry" },
      { name: "Chilly Beef", price: "₹190", desc: "Indo-Chinese style beef" },
      { name: "Chilly Chicken", price: "₹160", desc: "Spicy chicken stir fry" },
      { name: "Butter Chicken", price: "₹180", desc: "Creamy chicken curry" },
      { name: "Garlic Chicken", price: "₹150", desc: "Chicken in garlic sauce" },
      { name: "Chicken Manjurian", price: "₹160", desc: "Indo-Chinese chicken dish" },
      { name: "Pepper Chicken", price: "₹170", desc: "Spicy black pepper chicken" },
      { name: "Chicken Fry", price: "₹160", desc: "Deep fried chicken" },
      { name: "Chicken 65 (H)", price: "₹320", desc: "Spicy deep fried chicken (Half)" },
      { name: "Chicken Pepper Fry", price: "₹160", desc: "Chicken fried with pepper" },
      { name: "Chilly Fish (H)", price: "₹360", desc: "Spicy fish preparation" },
    ]
  },
  {
    category: "Meals & Biriyani", items: [
      { name: "Sp. Meals Curry", price: "₹150", desc: "Special meals with curry" },
      { name: "Meals Curry", price: "₹100", desc: "Standard meals with curry" },
      { name: "Fish Rost", price: "₹160", desc: "Spicy fish roast" },
      { name: "Fish Masala", price: "₹160", desc: "Fish in spicy masala gravy" },
      { name: "Fish Curry", price: "₹100", desc: "Traditional fish curry" },
      { name: "Fish Fry (as per Size)", price: "", desc: "Fried fresh fish" },
      { name: "Fish Mappas", price: "₹140", desc: "Fish in coconut milk gravy" },
      { name: "Meals Biriyani Rice", price: "", desc: "Biryani rice with meals" },
      { name: "Mutton Biriyani", price: "₹320", desc: "Rich mutton biryani" },
      { name: "Special Meals", price: "₹200", desc: "Elaborate Kerala feast" },
      { name: "Chicken Biriyani", price: "₹190", desc: "Classic chicken biryani" },
      { name: "Veg. Biriyani", price: "₹150", desc: "Vegetable biryani" },
      { name: "Beef Biriyani", price: "₹220", desc: "Beef biryani Kerala style" },
      { name: "Fish Biriyani", price: "₹200", desc: "Fish biryani" },
      { name: "Egg Biriyani", price: "₹130", desc: "Biryani with boiled eggs" },
    ]
  },
  {
    category: "Chinese/Rice/Noodles", items: [
      { name: "Egg Fried Rice", price: "₹140", desc: "Fried rice with eggs" },
      { name: "Chicken Fried Rice", price: "₹160", desc: "Fried rice with chicken" },
      { name: "Mixed Fried Rice", price: "₹170", desc: "Fried rice with mixed meats" },
      { name: "Veg.Fried Rice", price: "₹140", desc: "Fried rice with vegetables" },
      { name: "White Rice", price: "₹120", desc: "Steamed white rice" },
      { name: "Egg Noodles", price: "₹140", desc: "Noodles stir-fried with egg" },
      { name: "Veg Noodles", price: "₹150", desc: "Noodles with vegetables" },
      { name: "Chicken Noodles", price: "₹160", desc: "Noodles with chicken" },
      { name: "Mixed Noodles", price: "₹170", desc: "Noodles with mixed meats" },
    ]
  },
  {
    category: "Soups & Soft Drinks", items: [
      { name: "Sweet Corn Chicken", price: "₹60", desc: "Creamy corn and chicken soup" },
      { name: "Veg. Soup", price: "₹50", desc: "Mixed vegetable soup" },
      { name: "Tomato Soup", price: "₹50", desc: "Tangy tomato soup" },
      { name: "Lime Juice", price: "₹30", desc: "Fresh lime water" },
      { name: "Mineral Water", price: "₹20", desc: "Packaged drinking water" },
      { name: "Soda", price: "₹20", desc: "Carbonated soda" },
      { name: "Soft Drinks", price: "₹40", desc: "Chilled soft drinks" },
    ]
  },
];


export const metadata = {
  title: "Arcalia Restaurant Changanassery | Authentic Kerala Cuisine & Biryani",
  description: "Best restaurant in Changanassery for Kerala meals, biryani, and grilled dishes. Visit Arcalia Restaurant near KSRTC bus stand for tasty food starting at ₹200.",
};

export default function RestaurantPage() {
  // transform menuItems into JSON-LD structure
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "Arcalia Restaurant Menu",
    "description": "Authentic Kerala cuisine, Biryani, and Chinese dishes",
    "hasMenuSection": menuItems.map(section => ({
      "@type": "MenuSection",
      "name": section.category,
      "hasMenuItem": section.items.map(item => ({
        "@type": "MenuItem",
        "name": item.name,
        "description": item.desc,
        "offers": {
          "@type": "Offer",
          "price": item.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "INR"
        }
      }))
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
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
