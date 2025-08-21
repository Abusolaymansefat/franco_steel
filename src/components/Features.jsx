"use client";
import { FaHardHat, FaTools, FaBox, FaIndustry } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaHardHat size={40} />,
      title: "Iron Making",
      desc: "New method of producing bar iron is more economical",
    },
    {
      icon: <FaTools size={40} />,
      title: "Manufacturing",
      desc: "We have examined all factors of manufacturing.",
    },
    {
      icon: <FaBox size={40} />,
      title: "Welding Services",
      desc: "Welding is a fabrication process that joins materials.",
    },
    {
      icon: <FaIndustry size={40} />,
      title: "Ore Purchase",
      desc: "Ore is the key ingredient of steel and most used metal.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-4 text-center">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center p-6 rounded shadow hover:shadow-lg transition"
          >
            {/* Icon with hover effect */}
            <div className="bg-orange-400 hover:bg-gray-800 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4 transform transition-transform duration-300 hover:scale-110">
              {feature.icon}
            </div>

            {/* Bold title */}
            <h3 className="text-lg text-white  font-bold mb-2">{feature.title}</h3>

            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
