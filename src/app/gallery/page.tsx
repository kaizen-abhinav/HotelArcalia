
import Image from "next/image";

const images = [
    { src: "/gallery/gallery-1.jpeg", alt: "Arcalia Hotel Exterior View" },
    { src: "/gallery/gallery-2.jpeg", alt: "Premium AC Room" },
    { src: "/gallery/gallery-3.jpeg", alt: "Restaurant Interior" },
    { src: "/gallery/gallery-4.jpeg", alt: "Bedroom View" },
    { src: "/gallery/gallery-5.jpeg", alt: "Conference Hall" },
    { src: "/gallery/gallery-6.jpeg", alt: "Event Hall Stage" },
    { src: "/gallery/gallery-7.jpeg", alt: "Hall Seating Arrangement" },
    { src: "/gallery/gallery-8.jpeg", alt: "Hotel Lobby" },
    { src: "/gallery/gallery-9.jpeg", alt: "Elegant Restaurant Dining Area with Arched Windows" },
    { src: "/gallery/gallery-10.jpeg", alt: "Spacious Restaurant Seating" },
    { src: "/gallery/gallery-11.jpeg", alt: "Restaurant Interior with Modern Decor" },
    { src: "/gallery/gallery-12.jpeg", alt: "Arcalia Hotel Building Exterior" },
    { src: "/gallery/gallery-13.jpeg", alt: "Hotel Facade with Modern Glass Design" },
    { src: "/gallery/gallery-14.jpeg", alt: "Restaurant Ambiance View" },
    { src: "/gallery/gallery-15.jpeg", alt: "Dining Hall Setup" },
    { src: "/gallery/gallery-16.jpeg", alt: "Additional Hotel View" },
];

export const metadata = {
    title: "Gallery | Arcalia Hotel Changanassery Rooms & Facilities",
    description: "View photos of Arcalia Hotel Changanassery. Explore our clean rooms, restaurant, AC hall, and parking facilities. See why we are the best budget hotel in town.",
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="py-12 md:py-20 px-4 bg-secondary/20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 md:mb-4">Our Spaces</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 md:mb-6">Gallery</h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        Take a visual tour of Arcalia Hotel. From our comfortable rooms and authentic restaurant to our spacious event hall, experience the ambiance before you arrive.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 md:py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {images.map((image, i) => (
                            <div key={i} className={`relative break-inside-avoid rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-shadow`}>
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={1200}
                                    height={900}
                                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    quality={100}
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <p className="text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
