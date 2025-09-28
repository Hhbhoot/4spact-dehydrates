import { useParams, Link } from 'react-router-dom';
import { categories } from '../assets/productData';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ProductPage() {
  const { id } = useParams();
  let product = null;

  categories.forEach((cat) => {
    const found = cat.products.find((p) => p.id === parseInt(id));
    if (found) product = found;
  });

  if (!product) {
    return (
      <div className="text-center py-20 text-red-600 font-bold">
        Product not found!
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row gap-12 items-center">
        {/* Left: Product Image */}
        <motion.div
          className="flex-1 flex justify-center items-start"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="max-w-full h-auto rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-500"
          />
        </motion.div>

        {/* Right: Product Info */}
        <motion.div
          className="flex-1 flex flex-col justify-center space-y-6 bg-white rounded-2xl p-8 shadow-md hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] transition-all duration-500"
          whileHover={{ y: -5 }}
        >
          <h1 className="text-4xl font-extrabold text-green-800">
            {product.name}
          </h1>
          <p className="text-gray-700 text-lg">{product.description}</p>

          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {product.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>

          <button>
            <Link
              to="/contact"
              className="mt-6 inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-green-400 hover:scale-105 transform transition-all duration-300 font-semibold tracking-wide text-center"
            >
              {product.ctaText}
            </Link>
          </button>
        </motion.div>
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
    </section>
  );
}
