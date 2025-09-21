// import React, { useState, useEffect, useRef } from "react";
// import { assets, testimonialsData } from "../assets/assets.js";

// function TestimonialsSlider() {
//   const [current, setCurrent] = useState(0);
//   const total = testimonialsData.length;
//   const intervalRef = useRef(null);

//   const startAutoSlide = () => {
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % total);
//     }, 2000); // 2 seconds
//   };

//   const stopAutoSlide = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   }, []);

//   return (
//     <section className="py-20 bg-green-50 flex justify-center relative">
//       <div className="flex flex-col items-center justify-center py-16 px-6 bg-gradient-to-b from-green-50 to-white w-full">
//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mb-2">
//           Customer Testimonials
//         </h1>
//         <p className="text-gray-600 mb-10">What our users are saying</p>

//         {/* Slider */}
//         <div
//           className="relative w-full max-w-lg overflow-hidden"
//           onMouseEnter={stopAutoSlide}
//           onMouseLeave={startAutoSlide}
//         >
//           {/* Slides wrapper */}
//           <div
//             className="flex transition-transform duration-700 ease-in-out"
//             style={{ transform: `translateX(-${current * 100}%)` }}
//           >
//             {testimonialsData.map((t, i) => (
//               <div
//                 key={i}
//                 className="w-full flex-shrink-0 p-6 bg-white rounded-2xl shadow-md border border-green-100 text-center"
//               >
//                 {/* User Image */}
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="rounded-full w-16 h-16 mb-4 border-2 border-green-500 mx-auto"
//                 />
//                 <h2 className="text-lg font-semibold text-green-700">
//                   {t.name}
//                 </h2>
//                 <p className="text-gray-500 mb-3">{t.role}</p>

//                 {/* Stars */}
//                 <div className="flex justify-center mb-4">
//                   {Array(t.stars)
//                     .fill()
//                     .map((_, idx) => (
//                       <img
//                         src={assets.rating_star}
//                         alt="star"
//                         className="w-5 h-5"
//                         key={idx}
//                       />
//                     ))}
//                 </div>

//                 {/* Text */}
//                 <p className="text-gray-600 text-sm italic">“{t.text}”</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex gap-2 mt-6">
//           {testimonialsData.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`w-3 h-3 rounded-full transition ${
//                 i === current ? "bg-green-600" : "bg-gray-300"
//               }`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TestimonialsSlider;


import React, { useState, useEffect, useRef } from "react";
import { assets, testimonialsData } from "../assets/assets.js";

function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // 3 seconds for smoother rotation
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50 flex justify-center relative">
      <div className="flex flex-col items-center justify-center py-16 px-6 w-full">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-2">
          Customer Testimonials
        </h1>
        <p className="text-gray-600 mb-10">What our users are saying</p>

        {/* Slider */}
        <div
          className="relative w-full max-w-lg overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Slides wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonialsData.map((t, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 p-6 bg-white rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] transform transition-all duration-500 hover:-translate-y-2 text-center"
              >
                {/* User Image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-full w-16 h-16 mb-4 border-2 border-green-500 shadow-md mx-auto"
                />
                <h2 className="text-lg font-semibold text-green-700">
                  {t.name}
                </h2>
                <p className="text-gray-500 mb-3">{t.role}</p>

                {/* Stars */}
                <div className="flex justify-center mb-4">
                  {Array(t.stars)
                    .fill()
                    .map((_, idx) => (
                      <img
                        src={assets.rating_star}
                        alt="star"
                        className="w-5 h-5"
                        key={idx}
                      />
                    ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm italic">“{t.text}”</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex gap-2 mt-6">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-green-600 shadow-[0_0_12px_rgba(34,197,94,0.8)] scale-110"
                  : "bg-gray-300 hover:bg-green-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSlider;
