import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import p6 from "../assets/p6.jpg";
import H4 from "../assets/h4.jpg";
import p9 from "../assets/onionxx.png";
import p11 from "../assets/ppp.png";

export default function HeroBanner() {
  const slides = [
    {
      image: p11,
      title: "Wide Range Supplier of Spices",
      subtitle: "Your trusted partner in global import-export solutions.",
    },
    {
      image: p6,
      title: "Manufacturer & Exporter",
      subtitle: "Specialized in Dehydrated Onion & Garlic",
    },
    {
      image: p9,
      title: "Delivering Quality Products",
      subtitle: "Supplying around the world with excellence.",
    },
    {
      image: H4,
      title: "Vegetabel paste",
      subtitle: "We provided best qulity of pastes",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      2000 // change every 4s
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={`Slide ${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Text overlay */}
      <div className="relative z-20 flex flex-col justify-center h-full px-10 md:px-20 text-white max-w-2xl">
        <motion.h2
          key={currentSlide.title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
        >
          {currentSlide.title}
        </motion.h2>

        <motion.p
          key={currentSlide.subtitle}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-2xl opacity-95 drop-shadow-md"
        >
          {currentSlide.subtitle}
        </motion.p>

        {/* CTA button (extra small, white bg, black text) */}
        <motion.a
      href="products"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      ><motion.button
      className="mt-8 bg-green-600 text-white rounded-full px-6 py-4">
      View Products
    </motion.button>
    </motion.a>


      </div>
    </section>
  );
}
