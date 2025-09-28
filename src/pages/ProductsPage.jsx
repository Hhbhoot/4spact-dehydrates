import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../assets/productData';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export default function ProductsPage() {
  const pageTitle = 'Products | 4spact Dehydrates';
  const pageDesc =
    'Discover a wide range of spices, herbs, and dehydrated products from 4spact Dehydrates';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Helmet>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-4 text-gray-900"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent drop-shadow-md">
            Our Categories
          </h1>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
            {categories.map((category) => (
              <Link key={category.id} to={`/products/${category.id}`}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-green-500 hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transition-all duration-500 group h-80"
                >
                  {/* Background image */}
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Floating text box */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-lg w-[85%] text-center transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                      {category.name}
                    </h2>
                    <p className="text-sm text-gray-600 group-hover:text-green-500 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <motion.a
          href="https://wa.me/message/HSSSFL36LZXQF1"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition duration-300 z-50"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <FaWhatsapp size={28} />
        </motion.a>
      </motion.main>
    </>
  );
}
