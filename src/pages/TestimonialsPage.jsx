// import React, { useState } from "react";
// import { assets, testimonialsData } from "../assets/assets";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// function Testimonials() {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev === 0 ? testimonialsData.length - 1 : prev - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrent((prev) =>
//       prev === testimonialsData.length - 1 ? 0 : prev + 1
//     );
//   };

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center my-20 py-16 px-6 bg-gradient-to-b from-green-50 to-white"
//       initial={{ opacity: 0.2, y: 100 }}
//       transition={{ duration: 1 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     >
//       {/* Heading */}
//       <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-2">
//         Customer Testimonials
//       </h1>
//       <p className="text-gray-600 mb-10">What our users are saying</p>

//       {/* Slider Container */}
//       <div className="relative w-full max-w-xl">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={current}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -100 }}
//             transition={{ duration: 0.6 }}
//             className="bg-white p-8 rounded-2xl shadow-md w-full mx-auto text-center border border-green-100"
//           >
//             <div className="flex flex-col items-center">
//               <img
//                 src={testimonialsData[current].image}
//                 alt={testimonialsData[current].name}
//                 className="rounded-full w-16 h-16 mb-4 border-2 border-green-500"
//               />
//               <h2 className="text-lg font-semibold text-green-700">
//                 {testimonialsData[current].name}
//               </h2>
//               <p className="text-gray-500 mb-3">
//                 {testimonialsData[current].role}
//               </p>

//               {/* Stars */}
//               <div className="flex mb-4">
//                 {Array(testimonialsData[current].stars)
//                   .fill()
//                   .map((_, i) => (
//                     <img
//                       src={assets.rating_star}
//                       alt="star"
//                       className="w-5 h-5"
//                       key={i}
//                     />
//                   ))}
//               </div>

//               {/* Testimonial Text */}
//               <p className="text-gray-600 text-sm italic">
//                 “{testimonialsData[current].text}”
//               </p>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow hover:bg-green-700 transition"
//         >
//           <ChevronLeft size={20} />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow hover:bg-green-700 transition"
//         >
//           <ChevronRight size={20} />
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="flex mt-6 space-x-2">
//         {testimonialsData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full ${
//               current === index ? "bg-green-600" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default Testimonials;


import React, { useState } from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center my-20 py-16 px-6 bg-gradient-to-b from-green-50 via-white to-green-100"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-2">
        Customer Testimonials
      </h1>
      <p className="text-gray-600 mb-10">What our users are saying</p>

      {/* Slider Container */}
      <div className="relative w-full max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-full mx-auto text-center border-2 border-transparent hover:border-green-400 hover:shadow-[0_0_20px_#22c55e,0_0_40px_#22c55e] transition-all duration-500"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonialsData[current].image}
                alt={testimonialsData[current].name}
                className="rounded-full w-16 h-16 mb-4 border-2 border-green-500 shadow-lg"
              />
              <h2 className="text-lg font-semibold text-green-700">
                {testimonialsData[current].name}
              </h2>
              <p className="text-gray-500 mb-3">
                {testimonialsData[current].role}
              </p>

              {/* Stars */}
              <div className="flex mb-4">
                {Array(testimonialsData[current].stars)
                  .fill()
                  .map((_, i) => (
                    <img
                      src={assets.rating_star}
                      alt="star"
                      className="w-5 h-5"
                      key={i}
                    />
                  ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm italic">
                “{testimonialsData[current].text}”
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 hover:shadow-[0_0_15px_#22c55e] transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 hover:shadow-[0_0_15px_#22c55e] transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex mt-6 space-x-2">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-green-600 shadow-[0_0_8px_#22c55e]"
                : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;
