"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("/api/products")
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error("API did not return an array:", data);
        setProducts([]);
      }
    })
    .catch(err => console.error(err));
}, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p._id} className="rounded-lg shadow p-4 ">
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl text-black font-semibold mt-4">{p.name}</h2>
            <p className="text-gray-600">{p.description}</p>
            <p className="font-bold mt-2">$price: {p.price}</p>
            <Link
              href={`/products/${p._id}`}
              className="inline-block mt-4 bg-[#84cae6] hover:bg-[#2d87aa] text-white px-4 py-2 rounded "
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
