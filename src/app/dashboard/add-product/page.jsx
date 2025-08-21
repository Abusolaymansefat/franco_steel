"use client";

import { useSession, signIn } from "next-auth/react";
import { useState } from "react";

export default function AddProductPage() {
  const { data: session } = useSession();
  const [product, setProduct] = useState({ name: "", description: "", price: "" });

  if (!session) {
    signIn(); // redirect to login
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", product);
    alert("Product Added Successfully!");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="border p-2 w-full"
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="border p-2 w-full"
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          className="border p-2 w-full"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
