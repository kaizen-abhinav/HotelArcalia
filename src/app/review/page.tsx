import ReviewSystem from "@/components/ReviewSystem";
import { getReviews } from "@/app/actions";
import { placeholderReviews } from "@/lib/data";

export const metadata = {
    title: "Reviews | Arcalia Hotel Changanassery",
    description: "Read guest reviews and share your experience at Arcalia Hotel Changanassery. See what our guests say about our rooms, restaurant, and service.",
};

export default async function ReviewPage() {
    const dbReviews = await getReviews();

    const totalSlots = 10;

    const normalizedDbReviews = dbReviews.map(r => ({
        ...r,
        id: Number(r.id),
        source: r.source || "Website",
        formattedDate: r.date,
    }));

    const reviews = [...normalizedDbReviews, ...placeholderReviews].slice(0, totalSlots);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <section className="py-12 md:py-20 px-4 bg-secondary/20">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 md:mb-4">Guest Experiences</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-4 md:mb-6">Reviews & Ratings</h1>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
                        See what our guests are saying about their stay at Arcalia Hotel. Share your own experience and help others discover our hospitality.
                    </p>
                </div>
            </section>

            {/* Reviews Section */}
            <ReviewSystem initialReviewData={reviews} />
        </div>
    );
}
