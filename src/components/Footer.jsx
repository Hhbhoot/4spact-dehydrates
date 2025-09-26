import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  // Falocattion,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-black via-black-900 to-black text-black py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">
              4spact Dehydrates
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Your trusted partner for global trade and logistics solutions.
            </p>
            <p className="text-sm text-gray-500">Monday - Friday</p>
            <p className="text-sm text-gray-500">9:00AM - 6:00PM</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">
              Contact Info
            </h3>
            <a
              href="tel:+919512604868"
              className="relative flex items-center gap-2 text-gray-400 font-medium mb-2 group transition"
            >
              <FaPhoneAlt className="text-green-400" />
              +91 9512604868
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_8px_#22c55e]"></span>
            </a>
            <a
              href="tel:+919104751841"
              className="relative flex items-center gap-2 text-gray-400 font-medium mb-2 group transition"
            >
              <FaPhoneAlt className="text-green-400" />
              +91 9104751841
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_8px_#22c55e]"></span>
            </a>

            <a
              href="tel:+919104751841"
              className="relative flex items-center gap-2 text-gray-400 font-medium mb-2 group transition"
            >
              <FaPhoneAlt className="text-green-400" />
              +91 8320141430
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_8px_#22c55e]"></span>
            </a>
            <a
              href="mailto:info@4spactdehydrates.com"
              className="relative flex items-center gap-2 text-gray-400 font-medium mb-2 group transition"
            >
              <FaEnvelope className="text-green-400" />
              info@4spactdehydrates.com
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_8px_#22c55e]"></span>
            </a>
            <p className="relative flex items-center gap-4 text-gray-400 font-medium mb-2 group transition">
              <FaMapMarkerAlt className="text-green-400" />
              New police line, Vidhyanagar, Bhavnagar, Gujarat, India - 364002
              <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_8px_#22c55e]"></span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">
              Quick Links
            </h3>
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/products', label: 'Products' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' },
              { href: '/inquiry', label: 'inquiry' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="relative block text-gray-400 font-medium mb-2 group transition"
              >
                {link.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_8px_#22c55e]"></span>
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold text-green-400 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/share/15uTHsZJt5/"
                className="text-gray-400 hover:text-green-400 transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hardik-baraiya-9bb35a374"
                className="text-gray-400 hover:text-green-400 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.instagram.com/4__spact?igsh=bzZxcmJvZGc0N3d5"
                className="text-gray-400 hover:text-green-400 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} 4spact Import-Export. All rights
            reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
