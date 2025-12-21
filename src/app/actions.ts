"use server";

import { db } from "@/lib/db";
import { review } from "@/db/schema";
import { desc, eq, sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function submitReview(data: { name: string; rating: number; comment: string }) {
    if (!data.name || !data.rating || !data.comment) {
        return { success: false, error: "Missing fields" };
    }

    try {
        await db.insert(review).values({
            name: data.name,
            rating: data.rating,
            comment: data.comment,
            date: new Date().toISOString(),
            source: "Website",
            helpful: 0,
            isApproved: true, // Auto-approve for now, change to false for moderation
        });

        revalidatePath("/"); // Update home page
        return { success: true };
    } catch (e) {
        console.error("Submission error:", e);
        return { success: false, error: "Database error" };
    }
}

export async function getReviews() {
    // Fetch approved reviews, ordered by date descending
    return await db.select().from(review).where(eq(review.isApproved, true)).orderBy(desc(review.date));
}

export async function markHelpful(id: number) {
    try {
        await db.update(review)
            .set({ helpful: sql`${review.helpful} + 1` })
            .where(eq(review.id, id));

        revalidatePath("/");
        return { success: true };
    } catch (e) {
        return { success: false };
    }
}
