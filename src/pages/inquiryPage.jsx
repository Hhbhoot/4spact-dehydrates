import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  const pageTitle = 'Inquiry | 4spact Dehydrates';
  const pageDesc =
    'Discover a wide range of spices, herbs, and dehydrated products from 4spact Dehydrates';

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
      </Helmet>
      <div>
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-br from-green-100 via-white to-blue-100 py-20 px-4 min-h-screen"
        >
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              Got questions? We’re here to help you with all your import-export
              needs. Reach out and our team will get back to you promptly.
            </p>
          </div>

          {/* Contact Card */}
          <motion.div
            whileHover={{
              scale: 1.03,
              background:
                'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(59,130,246,0.1))',
              boxShadow: '0px 12px 40px rgba(16, 185, 129, 0.25)',
            }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto rounded-2xl bg-white shadow-xl p-8 relative overflow-hidden"
          >
            {/* Subtle Background Animation */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.15))',
              }}
              animate={{
                opacity: [0.4, 0.7, 0.4],
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Contact Form */}
            <div className="relative z-10">
              <ContactForm />
            </div>
          </motion.div>

          {/* Floating WhatsApp Button */}
          <motion.a
            href="https://wa.me/message/HSSSFL36LZXQF1"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl p-4 transition duration-300 z-50"
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <FaWhatsapp size={28} />
          </motion.a>
        </motion.main>
      </div>
    </>
  );
}
