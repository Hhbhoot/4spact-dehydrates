// src/pages/ServicePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Truck,
  Globe,
  FileText,
  Calendar,
  Package,
  ShieldCheck,
  Headset,
  TrendingUp,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ServicePage() {
  const pageTitle = 'Services | 4spact Dehydrates';
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
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6"
        >
          {/* Decorative glowing blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-300 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

          <div className="relative max-w-7xl mx-auto text-center">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At <span className="font-semibold text-green-600">4Spact</span>,
              we provide end-to-end{' '}
              <span className="font-semibold">import-export solutions</span> to
              make your business global. From logistics to compliance, we ensure{' '}
              <span className="font-semibold">
                smooth operations, timely delivery
              </span>
              , and <span className="font-semibold">hassle-free trade</span>.
            </p>

            {/* Services Grid */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[
                {
                  icon: <Truck className="w-8 h-8 text-green-600" />,
                  title: 'Logistics & Freight',
                  desc: 'Sea & air freight, consolidation, and door-to-door delivery.',
                },
                {
                  icon: <Globe className="w-8 h-8 text-green-600" />,
                  title: 'Market Entry',
                  desc: 'Market research, compliance, and international buyer connections.',
                },
                {
                  icon: <FileText className="w-8 h-8 text-green-600" />,
                  title: 'Compliance & Documentation',
                  desc: 'Certificates, quality testing, customs clearance, and paperwork.',
                },
                {
                  icon: <Calendar className="w-8 h-8 text-green-600" />,
                  title: 'Scheduling & Warehousing',
                  desc: 'FCL/LCL scheduling, storage, and efficient inventory management.',
                },
                {
                  icon: <Package className="w-8 h-8 text-green-600" />,
                  title: 'Inspection & Packaging',
                  desc: 'Export-grade packaging with strict quality checks.',
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
                  title: 'Risk Management',
                  desc: 'Insurance, compliance checks, and safe shipment handling.',
                },
                {
                  icon: <Headset className="w-8 h-8 text-green-600" />,
                  title: '24/7 Support',
                  desc: 'Dedicated customer support at every step of your shipment.',
                },
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                  title: 'Business Growth',
                  desc: 'Helping you expand globally with reliable trade solutions.',
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.06, rotate: 1 }}
                  className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-md 
                           hover:shadow-[0_0_25px_6px_rgba(34,197,94,0.5)] 
                           border border-transparent hover:border-green-500
                           transition-all duration-500 flex flex-col items-center text-center"
                >
                  <div className="p-4 bg-green-50 rounded-full mb-4 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-24">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-10">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {[
                  { icon: '🚛', title: 'Reliable Logistics' },
                  { icon: '📜', title: 'Transparent Process' },
                  { icon: '🌍', title: 'Global Network' },
                  { icon: '💼', title: 'Experienced Team' },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.08, y: -5 }}
                    className="relative bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-md 
                             hover:shadow-[0_0_20px_5px_rgba(34,197,94,0.5)] 
                             border border-transparent hover:border-green-500
                             transition-all duration-500 flex flex-col items-center text-center"
                  >
                    <span className="text-4xl mb-3">{item.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating WhatsApp Button */}
          <motion.a
            href="https://wa.me/message/HSSSFL36LZXQF1"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition duration-300 z-50"
            animate={{
              y: [0, -10, 0],
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
