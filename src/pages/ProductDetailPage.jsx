import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetailPage() {
  const { id } = useParams();
  // TODO: Fetch product by ID logic (replace placeholder below)

  return (
    <div>
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-20 px-4"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/600x400"
            alt={`Product ${id}`}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Product Detail: {id}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            This is a detailed description of the product. Highlight unique features, use cases,
            and what makes this product stand out in your export portfolio.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li><span className="font-semibold">Minimum Order Quantity:</span> 500 Units</li>
            <li><span className="font-semibold">HS Code:</span> 1234.56</li>
            <li><span className="font-semibold">Specifications:</span> High-quality, export-grade standards.</li>
            <li><span className="font-semibold">Availability:</span> Ready for global shipping.</li>
          </ul>

          <button className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
            Request a Quote
          </button>
        </div>
      </div>
    </motion.main>
    </div>
  );
}
