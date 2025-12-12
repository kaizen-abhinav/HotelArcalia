"use client";

import { useState } from "react";
import { Star, Send, User, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  source: string;
  helpful: number;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Ratish S",
    rating: 5,
    comment: "Love the non-veg meals here. The Rs. 200/- meal is a wholesome package with fish curry, chicken fry, kakka irachi and more. Best value for money in Changanassery!",
    date: "2024-11-15",
    source: "Google Maps",
    helpful: 12,
  },
  {
    id: 2,
    name: "Satheesh SR",
    rating: 5,
    comment: "Stayed more than 15 times; best budget friendly rooms with a restaurant and bar close to the bus stand and railway station. Always my first choice when in Changanassery.",
    date: "2024-10-20",
    source: "Google Maps",
    helpful: 8,
  },
  {
    id: 3,
    name: "Minu Menon",
    rating: 5,
    comment: "Nice place, enough seating, good staff and good food. The parking facility is a huge plus. Highly recommended for families!",
    date: "2024-09-10",
    source: "Google Maps",
    helpful: 6,
  },
  {
    id: 4,
    name: "Arun Kumar",
    rating: 4,
    comment: "Good budget hotel near the bus stand. Clean rooms and tasty food. The biryani here is one of the best in town. Will definitely come back.",
    date: "2024-08-25",
    source: "Zomato",
    helpful: 4,
  },
  {
    id: 5,
    name: "Priya Thomas",
    rating: 5,
    comment: "We booked the hall for my daughter's birthday party. The staff was very helpful and the catering was excellent. Great venue for small events!",
    date: "2024-07-12",
    source: "Google Maps",
    helpful: 10,
  },
];

export default function ReviewSystem() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState<number[]>([]);

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newReview: Review = {
      id: Date.now(),
      name: formData.name,
      rating: formData.rating,
      comment: formData.comment,
      date: new Date().toISOString().split("T")[0],
      source: "Website",
      helpful: 0,
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", rating: 5, comment: "" });
    setIsSubmitting(false);
    setSubmitted(true);
    setShowForm(false);

    // Reset submitted message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleHelpful = (id: number) => {
    if (helpfulClicked.includes(id)) return;
    setHelpfulClicked([...helpfulClicked, id]);
    setReviews(
      reviews.map((r) =>
        r.id === id ? { ...r, helpful: r.helpful + 1 } : r
      )
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-secondary/10" id="reviews">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-block w-16 h-0.5 bg-primary mb-6"></div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-foreground mb-4">
            Guest Reviews & Ratings
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    star <= Math.round(averageRating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xl sm:text-2xl font-semibold text-foreground">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-muted-foreground text-sm sm:text-base">
              ({reviews.length} reviews)
            </span>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base">
            See what our guests are saying about Arcalia Hotel
          </p>
        </div>

        {/* Write Review Button */}
        <div className="text-center mb-8">
          {submitted && (
            <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md text-sm">
              Thank you for your review! It has been submitted successfully.
            </div>
          )}
          <Button
            onClick={() => setShowForm(!showForm)}
            variant={showForm ? "outline" : "default"}
            className="gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            {showForm ? "Cancel" : "Write a Review"}
          </Button>
        </div>

        {/* Review Form */}
        {showForm && (
          <Card className="max-w-2xl mx-auto mb-10 p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Rating *</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-1 hover:scale-110 transition-transform"
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star
                        className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                          star <= formData.rating
                            ? "fill-primary text-primary"
                            : "text-muted-foreground hover:text-primary/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="comment" className="block text-sm font-medium mb-1.5">
                  Your Review *
                </label>
                <textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none text-sm sm:text-base"
                  placeholder="Share your experience at Arcalia Hotel..."
                  required
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Review
                  </>
                )}
              </Button>
            </form>
          </Card>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="p-4 sm:p-6 bg-white border-none shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{formatDate(review.date)}</p>
                  </div>
                </div>
                <span className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground">
                  {review.source}
                </span>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= review.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-foreground text-sm leading-relaxed flex-1 mb-4">
                "{review.comment}"
              </blockquote>

              {/* Helpful Button */}
              <div className="pt-3 border-t border-border">
                <button
                  onClick={() => handleHelpful(review.id)}
                  disabled={helpfulClicked.includes(review.id)}
                  className={`flex items-center gap-1.5 text-xs transition-colors ${
                    helpfulClicked.includes(review.id)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${helpfulClicked.includes(review.id) ? "fill-primary" : ""}`} />
                  <span>Helpful ({review.helpful})</span>
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* View More on Google */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg">
            <a
              href="https://maps.app.goo.gl/9YLm4PGhbAUAgAU26"
              target="_blank"
              rel="noreferrer noopener"
            >
              View All Reviews on Google Maps
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
