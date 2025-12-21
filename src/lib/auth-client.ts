
import { createAuthClient } from "better-auth/react";

// Dynamically determine the base URL based on environment
const getBaseURL = () => {
    if (typeof window !== "undefined") {
        return window.location.origin;
    }
    // Fallback for SSR
    return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
};

export const authClient = createAuthClient({
    baseURL: getBaseURL(),
});
