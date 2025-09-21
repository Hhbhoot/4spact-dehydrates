

// src/pages/CategoryPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { categories } from "../assets/productData";
import { motion } from "framer-motion";
import InquiryPage from "./inquiryPage";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return <div className="p-10 text-center text-red-600 font-bold">Category not found</div>;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 text-gray-900 bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Category Title */}
        <h1 className="text-4xl font-extrabold text-green-800 drop-shadow-md mb-6 text-center">
          {category.name}
        </h1>
        <p className="text-gray-700 mb-12 text-center text-lg">{category.description}</p>

        {/* Product List */}
        <div className="space-y-12">
          {category.products.map((product, index) => (
            <motion.div
              key={product.id}
              className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl bg-white shadow-lg border-2 border-transparent hover:border-green-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-500 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-md"
              />

              {/* Details */}
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-bold text-green-700">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition">
                  {/* {product.ctaText} */}
                    <Link to="/inquiry">{product.ctaText}</Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}



