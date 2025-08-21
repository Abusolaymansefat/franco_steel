"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="bg-blue-600 text-white min-h-[70vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/hero.png')" }}
    >
      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 bg-black/40 p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MyShop
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the best products at unbeatable prices.
          </p>
          <div className="flex gap-4">
            <Link
              href="/products"
              className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
            >
              View Products
            </Link>
            <Link
              href="/login"
              className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Side can be empty now */}
        <div className="md:w-1/2 mt-8 md:mt-0"></div>
      </div>
    </section>
  );
}
