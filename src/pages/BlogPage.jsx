import React from "react";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div>
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center">
          Our Blog
        </h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Discover the latest industry news, global trade insights, and tips to help your business grow.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Example blog post card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Blog Post"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                How to Expand Your Imports in 2025
              </h2>
              <p className="text-gray-600 flex-grow">
                Learn effective strategies to grow your import business with confidence and avoid common pitfalls.
              </p>
              <button className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                Read More
              </button>
            </div>
          </div>

          {/* Add more blog cards here */}
        </div>
      </div>
    </motion.main>
    </div>
  );
}
