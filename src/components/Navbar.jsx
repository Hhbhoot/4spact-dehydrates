import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logox.png';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const imagevariants = {
    initial: { x: '100%' },
    animate: {
      x: '0%',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white text-gray-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-md shadow-green-200"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-28 h-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Products', 'Services', 'Contact', 'Inquiry'].map(
            (item, index) => (
              <Link
                key={index}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative text-gray-800 font-medium transition group"
              >
                {item}
                {/* Animated underline with glow */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-600 group-hover:w-full transition-all duration-300 ease-in-out shadow-[0_0_6px_#22c55e]"></span>
              </Link>
            ),
          )}

          {/* Phone & Email (Desktop only) */}
          <div className="flex flex-col text-sm text-gray-700 border-l pl-6 border-gray-300 space-y-2">
            {/* Phone */}
            <a
              href="tel:+919512604868"
              className="flex items-center gap-2 hover:text-green-600 transition font-medium"
            >
              <FaPhoneAlt className="text-green-500" />
              +91 9512604868
            </a>

            {/* Phone 2 */}
            {/* <a
                href="tel:+919104751841"
                className="flex items-center gap-2 hover:text-green-600 transition font-medium"
              >
                <FaPhoneAlt className="text-green-500" />
                +91 9104751841
              </a> */}

            {/* Email */}
            <a
              href="mailto:info@4spactdehydrates.com"
              className="flex items-center gap-2 hover:text-green-600 transition font-medium"
            >
              <FaEnvelope className="text-green-500" />
              info@4spactdehydrates.com
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          variants={imagevariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="md:hidden bg-black text-white px-6 py-6 shadow-lg shadow-black"
        >
          <div className="flex flex-col space-y-4">
            {[
              'Home',
              'About',
              'Products',
              'Services',
              'Contact',
              'Inquiry',
            ].map((item, index) => (
              <Link
                key={index}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-green-400 transition font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Contact Info (Mobile) */}
          <div className="mt-6 border-t border-green-500 pt-4">
            <a
              href="tel:+919512604868"
              className="block text-white hover:text-green-400 transition mb-2"
            >
              📞 +91 9512604868
            </a>
            <a
              href="mailto:info@4spactdehydrates.com"
              className="block text-white hover:text-green-400 transition mb-2"
            >
              ✉ info@4spactdehydrates.coms
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/share/15uTHsZJt5/"
              className=" text-white hover:text-green-400 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/hardik-baraiya-9bb35a374"
              className=" text-white hover:text-green-400transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.instagram.com/4__spact?igsh=bzZxcmJvZGc0N3d5"
              className=" text-white hover:text-green-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://wa.me/message/HSSSFL36LZXQF1"
              className=" text-white hover:text-green-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
