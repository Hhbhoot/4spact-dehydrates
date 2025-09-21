import React from "react";
import { motion } from "framer-motion";

export default function CertificationsPage() {
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4">
          Our Certifications
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We proudly hold globally recognized certifications like ISO, FSSAI, APEDA, CE and more. Explore our credentials that guarantee trust, quality, and compliance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example certification card */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col items-center p-6">
            <img
              src="https://via.placeholder.com/200x120"
              alt="ISO Certification"
              className="w-auto h-32 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">ISO 9001:2015</h2>
            <p className="text-gray-600 text-center text-sm mt-2">
              International standard for quality management systems.
            </p>
          </div>

          {/* Add more certification cards */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col items-center p-6">
            <img
              src="https://via.placeholder.com/200x120"
              alt="FSSAI Certification"
              className="w-auto h-32 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">FSSAI Certified</h2>
            <p className="text-gray-600 text-center text-sm mt-2">
              Compliance with Food Safety and Standards Authority of India.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col items-center p-6">
            <img
              src="https://via.placeholder.com/200x120"
              alt="CE Marking"
              className="w-auto h-32 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">CE Marking</h2>
            <p className="text-gray-600 text-center text-sm mt-2">
              Conforms to European Union health, safety, and environmental standards.
            </p>
          </div>
        </div>
      </div>
    </motion.main>
    </div>
  );
}
