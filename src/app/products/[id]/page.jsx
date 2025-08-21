import { products } from "@/lib/products";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id == params.id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-64 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-semibold mb-2">${product.price}</p>
      <p className="text-gray-500">Product ID: {product.id}</p>
    </div>
  );
}
