"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc"; 
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      await signIn("google", { callbackUrl: "/products" });
      toast.success("✅ Google login initiated!");
    } catch (error) {
      toast.error("❌ Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded mb-4 hover:bg-blue-700 transition"
        >
          <FcGoogle size={24} />
          Login with Google
        </button>
      </div>
    </div>
  );
}
