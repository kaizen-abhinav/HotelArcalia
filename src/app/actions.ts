"use server";

import { db } from "@/lib/db";
import { review, galleryImage } from "@/db/schema";
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

export async function addGalleryImage(data: { url: string; alt: string }) {
    if (!data.url || !data.alt) {
        return { success: false, error: "Missing fields" };
    }

    try {
        await db.insert(galleryImage).values({
            url: data.url,
            alt: data.alt,
            createdAt: new Date(),
        });

        revalidatePath("/gallery");
        revalidatePath("/");
        return { success: true };
    } catch (e) {
        console.error("Gallery image error:", e);
        return { success: false, error: "Database error" };
    }
}

export async function getGalleryImages() {
    try {
        return await db.select().from(galleryImage).orderBy(desc(galleryImage.createdAt));
    } catch (e) {
        console.error("Get gallery images error:", e);
        return [];
    }
}

export async function deleteGalleryImage(id: number) {
    try {
        await db.delete(galleryImage).where(eq(galleryImage.id, id));
        revalidatePath("/gallery");
        revalidatePath("/");
        return { success: true };
    } catch (e) {
        console.error("Delete gallery image error:", e);
        return { success: false, error: "Database error" };
    }
}
