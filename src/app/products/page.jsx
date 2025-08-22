"use client";

import Link from "next/link";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "Latest iPhone with A17 Pro chip",
    price: 1200,
    image: "https://via.placeholder.com/300x200.png?text=iPhone+15+Pro",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    description: "Flagship Samsung phone with Snapdragon 8 Gen 2",
    price: 1100,
    image: "https://via.placeholder.com/300x200.png?text=Galaxy+S23",
  },
  {
    id: 3,
    name: "Google Pixel 8",
    description: "Pixel with Google Tensor G3 chip",
    price: 999,
    image: "https://via.placeholder.com/300x200.png?text=Pixel+8",
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow p-4 bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="font-bold mt-2">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
