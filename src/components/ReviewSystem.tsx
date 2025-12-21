"use client";

import { useState } from "react";
import { Star, Send, User, ThumbsUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { submitReview, markHelpful } from "@/app/actions";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  source: string;
  helpful: number;
}


export default function ReviewSystem({ initialReviewData }: { initialReviewData: Review[] }) {
  // If initialReviewData is provided, use it. Otherwise empty array (though page.tsx provides data now)
  const [reviews, setReviews] = useState<Review[]>(initialReviewData);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState<number[]>([]);

  const averageRating = reviews.length > 0 ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length : 5;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) return;

    setIsSubmitting(true);

    const result = await submitReview(formData);

    if (result.success) {
      const newReview: Review = {
        id: Date.now(),
        name: formData.name,
        rating: formData.rating,
        comment: formData.comment,
        date: new Date().toISOString().split("T")[0],
        source: "Website",
        helpful: 0,
      };

      setReviews([newReview, ...reviews].slice(0, 5));
      setFormData({ name: "", rating: 5, comment: "" });
      setSubmitted(true);
      setShowForm(false);
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);
  };

  const handleHelpful = async (id: number) => {
    if (helpfulClicked.includes(id)) return;
    setHelpfulClicked([...helpfulClicked, id]);
    setReviews(
      reviews.map((r) =>
        r.id === id ? { ...r, helpful: r.helpful + 1 } : r
      )
    );
    await markHelpful(id);
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
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${star <= Math.round(averageRating)
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

        {/* Write Review & Google Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            onClick={() => setShowForm(!showForm)}
            variant={showForm ? "outline" : "default"}
            className="gap-2 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            {showForm ? "Cancel" : "Write a Review"}
          </Button>

          <Button
            asChild
            variant="outline"
            className="gap-2 w-full sm:w-auto bg-white hover:bg-gray-50 text-blue-600 border-blue-200 hover:border-blue-300"
          >
            <a
              href="https://maps.app.goo.gl/9YLm4PGhbAUAgAU26"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Write a review on Google Maps"
            >
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png" alt="Google" className="w-4 h-4" />
              Review on Google
            </a>
          </Button>
        </div>

        {/* Success Message & Copy Workflow */}
        {submitted && (
          <Card className="max-w-2xl mx-auto mb-10 p-6 bg-green-50 border-green-200 text-center animate-in fade-in zoom-in duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-medium text-green-800 mb-2">Thank you for your review!</h3>
            <p className="text-green-700 mb-6">Your review has been submitted to our website. Would you like to post this on Google too?</p>

            <Button
              onClick={() => {
                // Copy to clipboard
                const reviewText = `${reviews[0].comment}\n\n- ${reviews[0].name}`;
                navigator.clipboard.writeText(reviews[0].comment).then(() => {
                  // Open Google Maps
                  window.open("https://maps.app.goo.gl/9YLm4PGhbAUAgAU26", "_blank");
                });
              }}
              className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 gap-2 shadow-sm"
              variant="outline"
            >
              <span className="text-lg">📋</span>
              Copy Text & Post on Google
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              Clicking this will copy your review and open Google Maps for you to paste it.
            </p>
          </Card>
        )}

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
                        className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${star <= formData.rating
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
                    className={`w-4 h-4 ${star <= review.rating
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
                  className={`flex items-center gap-1.5 text-xs transition-colors ${helpfulClicked.includes(review.id)
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
