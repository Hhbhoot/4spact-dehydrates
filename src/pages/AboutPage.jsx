import React, { useState } from "react";
import { motion } from "framer-motion";

// ✅ Import your images
import bannerImg from "../assets/a2.png"; 
import spicesImg from "../assets/bannenr.png";
import fruitsImg from "../assets/a1.png";
import mi from "../assets/miss.jpg";
import mii from "../assets/mis.jpg";


import aa1 from "../assets/aa1.png";
import aa2 from "../assets/aa2.png";
import aa3 from "../assets/aa3.png";
import { FaWhatsapp } from "react-icons/fa";


import s from "../assets/SPX.PNG";
import h from "../assets/hubs.png";
import d from "../assets/dehy.png";
import p from "../assets/vp.jpg";


export default function AboutUs() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      title: "Quality Assurance",
      desc: "Strict quality control ensures that every product meets the highest global standards.",
      img: aa1,
    },
    {
      title: "Global Reach",
      desc: "An extensive network that exports products across international destinations.",
      img: aa2,
    },
    {
      title: "Customer-Centric Approach",
      desc: "Building long-term relationships with reliable service, competitive pricing, and tailored solutions.",
      img: aa3,
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-green-50 via-white to-orange-50 text-gray-800"
    >
      {/* Banner Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={bannerImg}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold drop-shadow-lg"
          >
            4spact <span className="text-amber-400">Dehydrates</span>
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-6 text-lg md:text-2xl leading-relaxed text-gray-200"
          >
            Leading manufacturer of high-quality dehydrated products and premium
            spices exported across the globe.
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.08,
              boxShadow:
                "0px 0px 20px rgba(249, 115, 22, 0.8), 0px 0px 40px rgba(249, 115, 22, 0.6)",
            }}
            transition={{ duration: 0.3 }}
            className="inline-block mt-8 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full shadow-lg transition"
          >
            Get in Touch
          </motion.a>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            <strong>4spact Dehydrates</strong> is a leading company specializing
            in the manufacturing of high-quality dehydrated products and the
            export of a wide range of premium spices. We are committed to
            providing our clients with exceptional products that meet global
            standards of quality and freshness.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 via-white to-orange-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to bridge the gap between local growers and
              international markets by delivering the finest agricultural
              products. From sourcing the best raw materials to employing
              advanced dehydration techniques, we ensure every product retains
              its natural flavor, aroma, and nutritional value.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={mii}
              alt="Mission"
              className="rounded-2xl shadow-lg border-4 border-orange-400 shadow-orange-500/40"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {[
              {
                title: "Dehydrated Products",
                desc: "A diverse selection of dehydrated fruits, vegetables, and more. Our process preserves natural goodness for culinary and industrial use.",
              },
              {
                title: "Spices",
                desc: "Exporting authentic, pure, and aromatic spices directly from trusted farms, loved by clients worldwide.",
              },
              {
                title: "Vegetable Pastes",
                desc: "Ready-to-use pastes made from fresh vegetables, ensuring convenience and authentic taste for kitchens and industries.",
              },
              {
                title: "Herbs",
                desc: "Premium dried herbs with natural aroma and flavor, perfect for seasoning, herbal blends, and medicinal use.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0px 0px 20px rgba(249, 115, 22, 0.8), 0px 0px 40px rgba(249, 115, 22, 0.6)",
                }}
                transition={{ duration: 0.3 }}
                className="relative group p-6 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg border-2 border-transparent hover:border-orange-400 transition overflow-hidden"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}



      {/* What We Offer */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10">What We Offer</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
      {[
        {
          title: "Dehydrated Products",
          desc: "A diverse selection of dehydrated fruits, vegetables, and more. Our process preserves natural goodness for culinary and industrial use.",
          img: d,
        },
        {
          title: "Spices",
          desc: "Exporting authentic, pure, and aromatic spices directly from trusted farms, loved by clients worldwide.",
          img: s,
        },
        {
          title: "Vegetable Pastes",
          desc: "Ready-to-use pastes made from fresh vegetables, ensuring convenience and authentic taste for kitchens and industries.",
          img: p,
        },
        {
          title: "Herbs",
          desc: "Premium dried herbs with natural aroma and flavor, perfect for seasoning, herbal blends, and medicinal use.",
          img: h,
        },
      ].map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0px 0px 25px rgba(249, 115, 22, 0.8), 0px 0px 50px rgba(249, 115, 22, 0.6)",
          }}
          transition={{ duration: 0.3 }}
          className="relative group p-6 rounded-2xl border-2 border-transparent overflow-hidden"
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Glowing Border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 shadow-[0_0_25px_6px_rgba(249,115,22,0.7)] transition duration-500"></div>

          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition">
              {item.title}
            </h3>
            <p className="text-gray-100 group-hover:text-white transition">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Collage Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <div className="relative flex justify-center lg:justify-start min-h-[400px]">
            <motion.img
              initial={{ scale: 0.9, rotate: -5, x: 20 }}
              whileInView={{ scale: 1, rotate: 0, x: 0 }}
              transition={{ duration: 0.8 }}
              src={spicesImg}
              alt="Spices"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-xl absolute top-0 left-0 lg:left-24 lg:top-12 opacity-90 border-4 border-orange-400 shadow-orange-500/40"
              loading="lazy"
            />
            <motion.img
              initial={{ scale: 0.9, rotate: 5, x: -20 }}
              whileInView={{ scale: 1, rotate: 0, x: 0 }}
              transition={{ duration: 0.8 }}
              src={fruitsImg}
              alt="Dried Fruits"
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl shadow-2xl relative z-10 border-4 border-green-400 shadow-green-500/40 transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Natural Goodness Preserved
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <strong>4spact Dehydrates</strong>, we blend tradition with
              innovation. Our advanced drying technology preserves the vibrant
              colors, rich flavors, and nutrition of every product, making them
              ideal for global kitchens and industries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether it’s aromatic spices, nourishing fruits, or flavorful
              vegetable pastes, our products are crafted to bring authentic taste
              and quality to your table.
            </p>
            <motion.a
              href="/products"
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0px 0px 20px rgba(249, 115, 22, 0.8), 0px 0px 40px rgba(249, 115, 22, 0.6)",
              }}
              transition={{ duration: 0.3 }}
              className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-full shadow-lg transition"
            >
              Explore Products
            </motion.a>
          </div>
        </div>
      </section>

    {/* Why Choose Us */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-10 text-left">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0px 0px 25px rgba(34, 197, 94, 0.8), 0px 0px 50px rgba(34, 197, 94, 0.6)",
              }}
              transition={{ duration: 0.3 }}
              className="relative group p-6 rounded-2xl shadow-lg border-2 border-transparent hover:border-green-500 overflow-hidden"
              style={{
                backgroundImage: `url(${feature.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-200 transition">
                  {feature.title}
                </h3>
                <p className="text-gray-200 group-hover:text-white transition">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


      {/* Contact Us */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-green-50 via-white to-orange-50"
      >
        <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <p className="text-lg text-gray-700">
            📧 Email: info@4spactdehydrates.com
            <br/>
            📧 Email: export@4spactdehydrates.com
            <br/>
            📧 Email: sales@4spactdehydrates.com
          </p>
        </div>
      </section>

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
               ease: "easeInOut",
             }}
           >
             <FaWhatsapp size={28} />
           </motion.a>
    </motion.main>
  );
}
