"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const existing = JSON.parse(localStorage.getItem("products")) || [];
    const newProduct = {
      id: Date.now(),
      ...formData,
    };
    localStorage.setItem("products", JSON.stringify([...existing, newProduct]));

    alert("✅ Product added successfully!");
    router.push("/products"); 
  };

  return (
    <div className="max-w-2xl mx-auto p-6  shadow-lg rounded-xl mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        ➕ Add New Product
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
            placeholder="Enter product name"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
            placeholder="Enter product description"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
            placeholder="Enter price"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-2"
            placeholder="Enter image URL"
          />
        </div>

        {/* Preview */}
        {formData.image && (
          <div className="mt-4">
            <p className="font-medium mb-1">Preview:</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={formData.image}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
