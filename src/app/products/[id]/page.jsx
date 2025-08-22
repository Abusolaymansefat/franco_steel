"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductDetails({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p._id === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <Image
        src={product.image}
        width={600}
        height={400}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-semibold mb-2">${product.price}</p>
      <p className="text-gray-500">Product ID: {product._id}</p>
    </div>
  );
}
