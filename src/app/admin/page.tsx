"use client";

import { useState, useEffect, useRef } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, LogOut, Save, ImagePlus, Trash2, ExternalLink, Upload, Loader2 } from "lucide-react";
import { addGalleryImage, getGalleryImages, deleteGalleryImage } from "@/app/actions";

// Admin credentials
const ADMIN_EMAIL = "rajesharcadia13@gmail.com";
const ADMIN_PASSWORD = "rajesh@arcalia#0";

// ImgBB API key for image uploads (free tier)
const IMGBB_API_KEY = "7a1d89c8e6b6e8c3e9f4d5a6b7c8d9e0";

// Placeholder for now, real implementation would fetch from DB
const initialTariffs = [
    { id: 1, type: "AC Double Room", price: 2000 },
    { id: 2, type: "Non-AC Double Room", price: 1500 },
];

interface GalleryImage {
    id: number;
    url: string;
    alt: string;
    createdAt: Date;
}

export default function AdminPage() {
    const session = authClient.useSession();
    const [tariffs, setTariffs] = useState(initialTariffs);
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [isLocalAuth, setIsLocalAuth] = useState(false);
    
    // Gallery state
    const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
    const [newImageAlt, setNewImageAlt] = useState("");
    const [isAddingImage, setIsAddingImage] = useState(false);
    const [imageError, setImageError] = useState("");
    const [uploadProgress, setUploadProgress] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Check for local authentication on mount and load gallery images
    useEffect(() => {
        const localAuth = localStorage.getItem("arcalia_admin_auth");
        if (localAuth === "true") {
            setIsLocalAuth(true);
        }
    }, []);

    // Load gallery images when authenticated
    useEffect(() => {
        if (session.data || isLocalAuth) {
            loadGalleryImages();
        }
    }, [session.data, isLocalAuth]);

    const loadGalleryImages = async () => {
        const images = await getGalleryImages();
        setGalleryImages(images as GalleryImage[]);
    };

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoginLoading(true);
        
        // Check for hardcoded admin credentials
        if (loginData.email === ADMIN_EMAIL && loginData.password === ADMIN_PASSWORD) {
            localStorage.setItem("arcalia_admin_auth", "true");
            setIsLocalAuth(true);
            setIsLoginLoading(false);
            return;
        }
        
        // Try better-auth
        await authClient.signIn.email({
            email: loginData.email,
            password: loginData.password,
        }, {
            onSuccess: () => {
                window.location.reload();
            },
            onError: (ctx) => {
                alert(ctx.error.message);
                setIsLoginLoading(false);
            }
        });
    };

    const handleSignOut = () => {
        localStorage.removeItem("arcalia_admin_auth");
        setIsLocalAuth(false);
        authClient.signOut();
    };

    const handleUpdateTariff = (id: number, newPrice: number) => {
        setTariffs(tariffs.map(t => t.id === id ? { ...t, price: newPrice } : t));
    };

    const uploadToImageHost = async (file: File): Promise<string> => {
        // Convert file to base64
        const base64 = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                // Remove data:image/...;base64, prefix
                const base64Data = result.split(",")[1];
                resolve(base64Data);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

        // Try ImgBB first
        try {
            const formData = new FormData();
            formData.append("image", base64);
            
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                if (data.success) {
                    return data.data.url;
                }
            }
        } catch (e) {
            console.log("ImgBB failed, trying fallback...");
        }

        // Fallback: Try freeimage.host
        try {
            const formData = new FormData();
            formData.append("source", base64);
            formData.append("type", "base64");
            formData.append("action", "upload");
            
            const response = await fetch("https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                if (data.status_code === 200) {
                    return data.image.url;
                }
            }
        } catch (e) {
            console.log("FreeImage.host failed...");
        }

        throw new Error("All image hosts failed. Please try using a URL instead.");
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith("image/")) {
            setImageError("Please select an image file");
            return;
        }

        // Validate file size (max 10MB for Imgur)
        if (file.size > 10 * 1024 * 1024) {
            setImageError("Image size must be less than 10MB");
            return;
        }

        if (!newImageAlt.trim()) {
            setImageError("Please enter an image description first");
            return;
        }

        setImageError("");
        setIsAddingImage(true);
        setUploadProgress("Uploading image...");

        try {
            const imageUrl = await uploadToImageHost(file);
            setUploadProgress("Saving to gallery...");
            
            const result = await addGalleryImage({ url: imageUrl, alt: newImageAlt.trim() });
            
            if (result.success) {
                setNewImageAlt("");
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
                await loadGalleryImages();
                setUploadProgress("");
            } else {
                setImageError(result.error || "Failed to save image");
            }
        } catch (error) {
            console.error("Upload error:", error);
            setImageError("Failed to upload image. Please try again.");
        }
        
        setIsAddingImage(false);
        setUploadProgress("");
    };

    const handleDeleteImage = async (id: number) => {
        if (!confirm("Are you sure you want to delete this image?")) return;
        
        const result = await deleteGalleryImage(id);
        if (result.success) {
            await loadGalleryImages();
        } else {
            alert("Failed to delete image");
        }
    };

    if (!session.data && !isLocalAuth) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <Card className="w-full max-w-md p-8">
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-serif font-bold">Admin Login</h1>
                        <p className="text-muted-foreground">Manage Hotel Arcalia</p>
                    </div>
                    <form onSubmit={handleAuth} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                value={loginData.email}
                                onChange={e => setLoginData({ ...loginData, email: e.target.value })}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                type="password"
                                value={loginData.password}
                                onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full" disabled={isLoginLoading}>
                            {isLoginLoading ? "Processing..." : "Sign In"}
                        </Button>
                    </form>
                </Card>
            </div>
        );
    }

    const userName = session.data?.user?.name || "Admin";

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-serif font-medium">Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, {userName}</p>
                    </div>
                    <Button variant="outline" onClick={handleSignOut}>
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                    </Button>
                </div>

                <div className="grid gap-6">
                    {/* Tariff Management */}
                    <Card className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-medium">Room Tariffs</h2>
                            <Button size="sm" className="gap-2">
                                <Save className="w-4 h-4" /> Save Changes
                            </Button>
                        </div>
                        <div className="space-y-4">
                            {tariffs.map(tariff => (
                                <div key={tariff.id} className="flex items-center justify-between p-4 border rounded-lg bg-white">
                                    <span className="font-medium">{tariff.type}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-muted-foreground">₹</span>
                                        <input
                                            type="number"
                                            value={tariff.price}
                                            onChange={(e) => handleUpdateTariff(tariff.id, parseInt(e.target.value))}
                                            className="w-24 p-2 border rounded-md text-right font-medium"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>

                    {/* Gallery Image Management */}
                    <Card className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-medium">Gallery Images</h2>
                            <a href="/gallery" target="_blank" className="text-sm text-primary hover:underline flex items-center gap-1">
                                View Gallery <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                        
                        {/* Add New Image Form */}
                        <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
                            <h3 className="font-medium mb-3 flex items-center gap-2">
                                <Upload className="w-4 h-4" /> Upload New Image
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Image Description *</label>
                                    <input
                                        type="text"
                                        value={newImageAlt}
                                        onChange={(e) => setNewImageAlt(e.target.value)}
                                        placeholder="e.g., Hotel room interior, Restaurant view"
                                        className="w-full p-2 border rounded-md text-sm"
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Enter a description before selecting an image
                                    </p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Select Image *</label>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        disabled={isAddingImage || !newImageAlt.trim()}
                                        className="w-full p-2 border rounded-md text-sm file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 disabled:opacity-50"
                                    />
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Supported formats: JPG, PNG, GIF (max 10MB)
                                    </p>
                                </div>
                                {uploadProgress && (
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        {uploadProgress}
                                    </div>
                                )}
                                {imageError && (
                                    <div className="space-y-2">
                                        <p className="text-sm text-red-600">{imageError}</p>
                                        <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                                            <p className="text-sm text-yellow-800 font-medium">Alternative: Use URL</p>
                                            <p className="text-xs text-yellow-700 mb-2">
                                                Upload your image to <a href="https://imgbb.com" target="_blank" rel="noopener noreferrer" className="underline">imgbb.com</a> or <a href="https://postimages.org" target="_blank" rel="noopener noreferrer" className="underline">postimages.org</a> and paste the direct link below:
                                            </p>
                                            <div className="flex gap-2">
                                                <input
                                                    type="url"
                                                    placeholder="https://i.ibb.co/xxxxx/image.jpg"
                                                    className="flex-1 p-2 border rounded-md text-sm"
                                                    id="fallback-url"
                                                />
                                                <Button
                                                    size="sm"
                                                    onClick={async () => {
                                                        const urlInput = document.getElementById("fallback-url") as HTMLInputElement;
                                                        const url = urlInput?.value?.trim();
                                                        if (!url || !newImageAlt.trim()) {
                                                            alert("Please enter both URL and description");
                                                            return;
                                                        }
                                                        setIsAddingImage(true);
                                                        const result = await addGalleryImage({ url, alt: newImageAlt.trim() });
                                                        if (result.success) {
                                                            setNewImageAlt("");
                                                            urlInput.value = "";
                                                            setImageError("");
                                                            await loadGalleryImages();
                                                        } else {
                                                            alert(result.error || "Failed to add image");
                                                        }
                                                        setIsAddingImage(false);
                                                    }}
                                                    disabled={isAddingImage}
                                                >
                                                    Add URL
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Existing Images */}
                        <div>
                            <h3 className="font-medium mb-3">Uploaded Images ({galleryImages.length})</h3>
                            {galleryImages.length === 0 ? (
                                <p className="text-muted-foreground text-sm">No images uploaded yet. Add your first image above.</p>
                            ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {galleryImages.map((image) => (
                                        <div key={image.id} className="relative group">
                                            <img
                                                src={image.url}
                                                alt={image.alt}
                                                className="w-full h-32 object-cover rounded-lg border"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23f0f0f0' width='100' height='100'/%3E%3Ctext fill='%23999' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EError%3C/text%3E%3C/svg%3E";
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                                <Button
                                                    size="sm"
                                                    variant="destructive"
                                                    onClick={() => handleDeleteImage(image.id)}
                                                    className="gap-1"
                                                >
                                                    <Trash2 className="w-3 h-3" /> Delete
                                                </Button>
                                            </div>
                                            <p className="text-xs text-muted-foreground mt-1 truncate">{image.alt}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
