import React from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto bg-gradient-to-b from-green-50 to-white p-8 rounded-2xl shadow-lg flex flex-col space-y-4 border border-green-100"
      >
        <h2 className="text-3xl font-extrabold text-green-800 mb-2 text-center">
          Get in Touch
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="border border-green-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition bg-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="border border-green-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition bg-white"
        />

        <input
          type="tel"
          placeholder="Phone"
          className="border border-green-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition bg-white"
        />

        <textarea
          placeholder="Message"
          rows="5"
          className="border border-green-300 rounded-lg p-3 focus:outline-none focus:border-green-600 transition resize-none bg-white"
        ></textarea>

        <a
          href="https://wa.me/message/HSSSFL36LZXQF1"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition shadow-md hover:shadow-lg text-center block"
        >
          Send Message via WhatsApp
        </a>
      </motion.form>
    </div>
  );
}
