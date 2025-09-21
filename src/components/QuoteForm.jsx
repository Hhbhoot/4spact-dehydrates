import React from "react";
import { motion } from "framer-motion";

export default function QuoteForm() {
  return (
    <div>
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Request a Quote
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition"
      />

      <input
        type="text"
        placeholder="Company"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition"
      />

      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition"
      />

      <input
        type="text"
        placeholder="Product"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition"
      />

      <input
        type="number"
        placeholder="Quantity"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition"
      />

      <textarea
        placeholder="Additional Details"
        rows="5"
        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition resize-none"
      ></textarea>

      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
      >
        Request Quote
      </button>
    </motion.form>
    </div>
  );
}
