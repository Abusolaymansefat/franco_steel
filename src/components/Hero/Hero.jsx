"use client";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center"
      style={{ backgroundImage: "url('/hero/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-1/2 text-white p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MyShop
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the best products at unbeatable prices.
          </p>
        </div>

      </div>
    </section>
  );
}
