
import Image from "next/image";

const images = [
    { src: "/gallery/gallery-1.jpeg", alt: "Arcalia Hotel Exterior View", span: "row-span-2" },
    { src: "/gallery/gallery-2.jpeg", alt: "Premium AC Room", span: "" },
    { src: "/gallery/gallery-5.jpeg", alt: "Conference Hall", span: "" },
    { src: "/gallery/gallery-3.jpeg", alt: "Restaurant Interior", span: "row-span-2" },
    { src: "/gallery/gallery-4.jpeg", alt: "Bedroom View", span: "" },
    { src: "/gallery/gallery-6.jpeg", alt: "Event Hall Stage", span: "" },
    { src: "/gallery/gallery-7.jpeg", alt: "Hall Seating Arrangement", span: "row-span-2" },
    { src: "/gallery/gallery-8.jpeg", alt: "Hotel Lobby", span: "" },
];

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
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
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
