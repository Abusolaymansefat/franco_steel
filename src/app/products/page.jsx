// import Link from "next/link";
// import { products } from "@/lib/products";

// export default function ProductsPage() {
//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">Products</h1>
//       <div className="grid gap-6 md:grid-cols-3">
//         {products.map((p) => (
//           <div key={p.id} className="border p-4 rounded shadow">
//             <h2 className="text-xl font-bold">{p.name}</h2>
//             <p>{p.description}</p>
//             <p className="font-semibold">${p.price}</p>
//             <Link href={`/products/${p.id}`}>
//               <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
//                 Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
