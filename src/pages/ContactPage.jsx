import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMapPin,
} from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export default function InquiryPage() {
  const pageTitle = 'Contact | 4spact Dehydrates';
  const pageDesc =
    'Discover a wide range of spices, herbs, and dehydrated products from 4spact Dehydrates';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Helmet>
      <main className="relative min-h-screen py-20 bg-gray-50">
        {/* Decorative blurred background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.4, type: 'spring', stiffness: 200 },
            }}
            className="relative rounded-3xl shadow-lg p-10 space-y-6 overflow-hidden 
                     bg-white/80 backdrop-blur-lg hover:shadow-[0_0_30px_8px_rgba(34,197,94,0.6)] 
                     transition-all duration-500"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_12px_rgba(34,197,94,0.35)] opacity-50 pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6 relative z-10">
              Get in Touch
            </h2>

            <div className="space-y-6 relative z-10">
              {/* Address */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 group"
              >
                <div className="bg-green-100 p-3 rounded-full shadow group-hover:bg-green-600 transition-all duration-300">
                  <FaMapMarkerAlt className="text-green-700 group-hover:text-white text-xl transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  4Spact Dehydrates
                  <br />
                  police line, Vidhyanagar, Bhavnagar,
                  <br />
                  Gujarat, India - 364002
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                <div className="bg-green-100 p-3 rounded-full shadow group-hover:bg-green-600 transition-all duration-300">
                  <FaPhoneAlt className="text-green-700 group-hover:text-white text-xl transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-gray-700">+91 9512604868</p>
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 group"
              >
                <div className="bg-green-100 p-3 rounded-full shadow group-hover:bg-green-600 transition-all duration-300">
                  <FaEnvelope className="text-green-700 group-hover:text-white text-xl transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="text-gray-700">info@4spactdehydrates.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Google Map Section (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative rounded-none overflow-hidden shadow-lg h-[500px] mt-12"
        >
          <iframe
            title="Vidhyanagar New Police Line Bhavnagar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.639189586!2d72.1409603!3d21.7644729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051c6caaaabcf%3A0xf3a34e75dd70f9e5!2sNew%20Police%20Line%2C%20Vidhyanagar%2C%20Bhavnagar%2C%20Gujarat%20364002!5e0!3m2!1sen!2sin!4v1726320000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

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
        </motion.div>
      </main>
    </>
  );
}
