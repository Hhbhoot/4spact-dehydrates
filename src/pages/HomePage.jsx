// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroBanner from '../components/HeroBanner';
import TestimonialsSlider from '../components/TestimonialsSlider';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Slider images
import p12 from '../assets/c1.jpg';
import p10 from '../assets/c2.jpg';
import p11 from '../assets/c4.jpg';
import p13 from '../assets/c5.jpg';
import p14 from '../assets/spicex.png';
import mapp from '../assets/mappp.png';

// Product images
import spicesBanner from '../assets/spx.png';
import herbsBanner from '../assets/hubs.png';
import dehydratedBanner from '../assets/dehy.png';
import paste from '../assets/vp.jpg';

export default function HomePage() {
  const slides = [p12, p10, p11, p13, p14];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextSlide();
    } else if (info.offset.x > 100) {
      prevSlide();
    }
  };

  return (
    <div>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-b from-green-50 via-white to-orange-50 text-gray-900"
      >
        {/* Hero Section */}
        <HeroBanner
          title="Your Trusted Partner in Global Trade"
          subtitle="Quality Products Delivered Worldwide"
        />

        {/* Info Section */}
        <motion.section
          className="py-20 bg-gradient-to-r from-orange-50 via-white to-green-50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
            {/* Left Image */}
            <div>
              <motion.img
                src={mapp}
                alt="Agricultural Products"
                className="rounded-2xl shadow-2xl object-cover w-full h-[450px] border-4 border-green-400 shadow-green-500/40"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Right Text */}
            <div className="space-y-6">
              <h2 className="text-5xl font-extrabold text-green-800 leading-tight">
                🌍 Building{' '}
                <span className="text-green-600">Global Connections</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to{' '}
                <span className="font-semibold text-green-700">
                  bridge the gap
                </span>{' '}
                between <span className="italic">local growers</span> and{' '}
                <span className="italic">international markets</span> by
                delivering{' '}
                <span className="text-green-800 font-bold">
                  premium-quality products
                </span>
                . We combine <span className="underline">tradition</span> with{' '}
                <span className="underline">innovation</span> to bring the{' '}
                <span className="font-semibold">best of nature</span> to the
                world.
              </p>

              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">
                  ✨ What We Offer
                </h3>
                <div className="grid gap-4">
                  {[
                    {
                      icon: '✔',
                      title: 'Dehydrated Products',
                      desc: 'Fresh fruits & vegetables, processed with care to preserve flavor, aroma, and nutrients.',
                    },
                    {
                      icon: '✔',
                      title: 'Spices',
                      desc: 'Authentic, aromatic, and sourced from trusted farms for unmatched purity.',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="relative group p-4 rounded-xl bg-gradient-to-br from-white to-green-50 border-2 border-transparent hover:border-orange-400 transition overflow-hidden"
                    >
                      <div className="absolute inset-0 rounded-xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 shadow-[0_0_25px_6px_rgba(249,115,22,0.6)] transition duration-500"></div>
                      <div className="relative z-10 flex items-start">
                        <span className="text-green-600 text-xl mr-2">
                          {item.icon}
                        </span>
                        <p>
                          <strong className="text-green-800">
                            {item.title}:
                          </strong>{' '}
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-700 mb-3">
                  🌟 Why Choose Us?
                </h3>
                <div className="grid gap-4">
                  {[
                    {
                      icon: '🌱',
                      title: 'Quality Assurance',
                      desc: 'Every step monitored with strict quality checks.',
                    },
                    {
                      icon: '🌐',
                      title: 'Global Reach',
                      desc: 'Delivering trusted exports with tailored trade solutions.',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="relative group p-4 rounded-xl bg-gradient-to-br from-white to-orange-50 border-2 border-transparent hover:border-orange-400 transition overflow-hidden"
                    >
                      <div className="absolute inset-0 rounded-xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 shadow-[0_0_25px_6px_rgba(249,115,22,0.6)] transition duration-500"></div>
                      <div className="relative z-10 flex items-start">
                        <span className="text-green-600 text-xl mr-2">
                          {item.icon}
                        </span>
                        <p>
                          <strong className="text-green-800">
                            {item.title}:
                          </strong>{' '}
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Read More Button with Glow */}
              <Link
                to="/about"
                className="relative inline-block px-8 py-3 font-semibold tracking-wide rounded-full text-white bg-gradient-to-r from-green-600 to-green-700 transition transform hover:scale-105"
              >
                <span className="relative z-10">Read More →</span>
                <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 border-2 border-green-400 shadow-[0_0_25px_6px_rgba(34,197,94,0.7)] transition duration-500"></div>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Featured Products */}
        <section className="py-20 bg-gradient-to-r from-green-50 to-green-100">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-800 mb-10">
            🌿 Our Products
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
            {[
              { img: spicesBanner, title: 'Spices', link: '/products/spices' },
              { img: herbsBanner, title: 'Herbs', link: '/products/herbs' },
              {
                img: dehydratedBanner,
                title: 'Dehydrated products',
                link: '/products/dehydrated',
              },
              {
                img: paste,
                title: 'Vegetable Paste',
                link: '/products/Vegetable',
              },
            ].map((product, idx) => (
              <div
                key={idx}
                className="relative group bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-orange-400 transition hover:-translate-y-2"
              >
                <div className="absolute inset-0 rounded-xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 shadow-[0_0_25px_6px_rgba(249,115,22,0.6)] transition duration-500"></div>
                <div className="overflow-hidden relative z-10">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center relative z-10">
                  <a
                    href={product.link}
                    className="text-xl font-bold text-green-700 hover:text-green-900 transition-colors duration-300 inline-block mt-2"
                  >
                    {product.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSlider />

        {/* Manual Slider */}
        <section className="py-20 bg-gradient-to-r from-orange-50 via-white to-green-50 flex justify-center relative">
          <div className="w-full max-w-4xl relative overflow-hidden shadow-lg border border-green-200 rounded-xl">
            <motion.img
              key={current}
              src={slides[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-[500px] object-contain select-none rounded-xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            />

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-green-700 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-green-700 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === current ? 'bg-green-700' : 'bg-green-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 bg-gradient-to-r from-green-100 via-white to-orange-100">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-green-700">
              Let’s talk about your next big trade opportunity. We’re ready to
              help.
            </p>
            <br />
            <a
              href="https://wa.me/message/HSSSFL36LZXQF1"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block px-8 py-3 font-semibold tracking-wide rounded-full text-white bg-gradient-to-r from-green-600 to-green-700 transition transform hover:scale-105"
            >
              <span className="relative z-10">Send Message via WhatsApp</span>
              <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 border-2 border-green-400 shadow-[0_0_25px_6px_rgba(34,197,94,0.7)] transition duration-500"></div>
            </a>
          </div>
        </section>
      </motion.main>

      {/* Floating WhatsApp */}
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
    </div>
  );
}
