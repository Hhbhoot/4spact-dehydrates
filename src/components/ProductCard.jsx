// src/pages/ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "../assets/productData";

export default function ProductPage() {
  const { id } = useParams();
  let product = null;

  categories.forEach((cat) => {
    const found = cat.products.find((p) => p.id === parseInt(id));
    if (found) product = found;
  });

  if (!product) {
    return (
      <div className="text-center py-20 text-red-600 font-bold text-xl">
        🚫 Product not found!
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 items-start">
        {/* Product Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 flex justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-lg rounded-2xl shadow-lg hover:shadow-green-300 transition"
          />
        </motion.div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col space-y-6">
          <h1 className="text-4xl font-extrabold text-green-700">
            {product.name}
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* Features List */}
          <ul className="list-disc list-inside text-gray-700 space-y-2 bg-white/70 p-6 rounded-xl shadow">
            {product.features.map((feat, idx) => (
              <li
                key={idx}
                className="hover:text-green-600 transition-colors duration-200"
              >
                {feat}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="self-start mt-6 inline-block bg-green-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition"
          >
            {product.ctaText || "Enquire Now"}
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}
