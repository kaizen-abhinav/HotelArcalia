"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lock, LogOut, Save } from "lucide-react";

// Placeholder for now, real implementation would fetch from DB
const initialTariffs = [
    { id: 1, type: "AC Double Room", price: 2000 },
    { id: 2, type: "Non-AC Double Room", price: 1500 },
];

export default function AdminPage() {
    const session = authClient.useSession();
    const [tariffs, setTariffs] = useState(initialTariffs);
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoginLoading(true);
        if (isLogin) {
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
        } else {
            await authClient.signUp.email({
                email: loginData.email,
                password: loginData.password,
                name: "Admin User",
            }, {
                onSuccess: () => {
                    window.location.reload();
                },
                onError: (ctx) => {
                    alert(ctx.error.message);
                    setIsLoginLoading(false);
                }
            });
        }
    };

    const handleUpdateTariff = (id: number, newPrice: number) => {
        setTariffs(tariffs.map(t => t.id === id ? { ...t, price: newPrice } : t));
    };

    if (!session.data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
                <Card className="w-full max-w-md p-8">
                    <div className="text-center mb-8">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <h1 className="text-2xl font-serif font-bold">Admin {isLogin ? "Login" : "Sign Up"}</h1>
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
                            {isLoginLoading ? "Processing..." : (isLogin ? "Sign In" : "Create Account")}
                        </Button>
                    </form>
                    <div className="mt-4 text-center">
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-sm text-primary hover:underline"
                        >
                            {isLogin ? "Need an account? Sign Up" : "Already have an account? Sign In"}
                        </button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-serif font-medium">Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, {session.data.user.name}</p>
                    </div>
                    <Button variant="outline" onClick={() => authClient.signOut()}>
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

                    {/* Review Management (Placeholder) */}
                    <Card className="p-6 opacity-60">
                        <h2 className="text-xl font-medium mb-4">Reviews (Coming Soon)</h2>
                        <p className="text-muted-foreground">Review moderation will be enabled in the next update.</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
