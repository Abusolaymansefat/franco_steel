"use client";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('/hero/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center text-white px-6 md:px-0 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          HIGH-QUALITY STEEL SUPPLIER
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We Are Professional Carbon Steel Manufacturer Guangdong Kruper Steel
          Co., Ltd is a professional manufacturer with more than 20 years of
          experience in manufacturing Carbon steel, alloy materials established
          in 2001.
        </p>
      </div>
    </section>
  );
}
