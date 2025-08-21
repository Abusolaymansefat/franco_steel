import Link from "next/link";
import { products } from "@/lib/products";

export default function HighlightsPage() {
  // Example: take first 3 products as highlights
  const highlights = products.slice(0, 3);

  return (
    <div className="min-h-screen p-8 ">
      <h1 className="text-4xl font-bold mb-6 text-center">Highlights</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((p) => (
          <div
            key={p.id}
            className="border p-4 rounded shadow hover:shadow-lg transition "
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-bold">{p.name}</h2>
            <p className="text-gray-700">{p.description}</p>
            <p className="font-semibold mt-2">${p.price}</p>
            <Link href={`/products/${p.id}`}>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
