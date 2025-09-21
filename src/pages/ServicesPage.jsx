// // src/components/ServicesAndProcess.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { Truck, Globe, FileText, Calendar, MapPin } from "lucide-react";

// export default function ServicesAndProcess() {
//   return (
//     <div>
//       {/* SERVICES */}
//       <section id="services" className="py-14">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-extrabold">What we do</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto mt-2">
//               A carefully designed suite of services to make export/import
//               painless and profitable.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               {
//                 icon: <Truck className="w-6 h-6 text-green-600" />,
//                 title: "Logistics & Freight",
//                 text: "Sea & air freight, consolidation and door delivery.",
//               },
//               {
//                 icon: <Globe className="w-6 h-6 text-green-600" />,
//                 title: "Market Entry",
//                 text: "Target market research, compliance & buyer introductions.",
//               },
//               {
//                 icon: <FileText className="w-6 h-6 text-green-600" />,
//                 title: "Compliance & Docs",
//                 text: "Export docs, certificates, testing, and customs clearance.",
//               },
//               {
//                 icon: <Calendar className="w-6 h-6 text-green-600" />,
//                 title: "Scheduling & Warehousing",
//                 text: "Storage, FCL/LCL scheduling and inventory management.",
//               },
//             ].map((s, i) => (
//               <motion.div
//                 key={i}
//                 whileHover={{ y: -6 }}
//                 className="bg-white rounded-2xl p-6 shadow transition"
//               >
//                 <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-lg mb-4">
//                   {s.icon}
//                 </div>
//                 <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
//                 <p className="text-sm text-gray-600">{s.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PROCESS / HOW IT WORKS */}
//       <section className="py-14">
//         <div className="max-w-6xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//             {/* Steps */}
//             <div>
//               <h2 className="text-3xl font-extrabold mb-4">How it works</h2>
//               <p className="text-gray-600 mb-6">
//                 Simple 4-step workflow to get your goods from factory to buyer.
//               </p>

//               <ol className="space-y-6">
//                 {[
//                   {
//                     title: "Enquiry & Quote",
//                     desc: "Tell us product, qty and destination — we quote competitively.",
//                   },
//                   {
//                     title: "Inspection & Packing",
//                     desc: "Quality checks, lab tests, and export-grade packaging.",
//                   },
//                   {
//                     title: "Customs & Freight",
//                     desc: "Documentation, customs clearance and global freight booking.",
//                   },
//                   {
//                     title: "Delivery & Support",
//                     desc: "Tracking, delivery and after-sales support.",
//                   },
//                 ].map((step, idx) => (
//                   <motion.li
//                     key={idx}
//                     initial={{ opacity: 0, x: -10 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     className="flex gap-4 items-start bg-white p-4 rounded-lg shadow"
//                   >
//                     <div className="flex-shrink-0 p-3 bg-green-50 rounded-lg">
//                       <MapPin className="w-5 h-5 text-green-600" />
//                     </div>
//                     <div>
//                       <div className="font-semibold">{step.title}</div>
//                       <div className="text-sm text-gray-600">{step.desc}</div>
//                     </div>
//                   </motion.li>
//                 ))}
//               </ol>
//             </div>

//             {/* Quote Form */}
//             <div>
//               <div className="bg-white rounded-2xl p-6 shadow">
//                 <h3 className="font-bold text-lg mb-3">Quick Quote</h3>
//                 <form className="space-y-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <input
//                       className="border border-gray-200 rounded-lg px-3 py-2"
//                       placeholder="Your name"
//                       aria-label="Your name"
//                     />
//                     <input
//                       className="border border-gray-200 rounded-lg px-3 py-2"
//                       placeholder="Company"
//                       aria-label="Company"
//                     />
//                   </div>
//                   <input
//                     className="border border-gray-200 rounded-lg px-3 py-2 w-full"
//                     placeholder="Product (e.g. Dehydrated Garlic)"
//                     aria-label="Product"
//                   />
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     <input
//                       className="border border-gray-200 rounded-lg px-3 py-2"
//                       placeholder="Quantity"
//                     />
//                     <input
//                       className="border border-gray-200 rounded-lg px-3 py-2"
//                       placeholder="Destination country"
//                     />
//                   </div>
//                   <button
//                     type="button"
//                     className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
//                   >
//                     Request Quote
//                   </button>
//                 </form>
//               </div>

//               <div className="mt-6 text-sm text-gray-600">
//                 <div className="flex items-center gap-2">
//                   <span className="font-semibold">Need help?</span>
//                   <a href="#contact" className="text-green-600 hover:underline">
//                     Contact sales
//                   </a>
//                 </div>
//                 <div className="mt-2">
//                   We reply within 24 hours on business days.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }











// // src/pages/ServicePage.jsx
// import React from "react";
// import { motion } from "framer-motion";
// import { FaWhatsapp } from "react-icons/fa";
// import {
//   Truck,
//   Globe,
//   FileText,
//   Calendar,
//   Package,
//   ShieldCheck,
//   Headset,
//   TrendingUp,
// } from "lucide-react";

// export default function ServicePage() {
//   return (
//     <div>
//       <motion.main
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="bg-gradient-to-b from-white via-green-50 to-white py-20 px-4"
//       >
//         <div className="max-w-6xl mx-auto text-center">
//           {/* Title */}
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
//             Our Services
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
//             At <span className="font-semibold text-green-600">4Spact</span>, we
//             provide end-to-end <span className="font-semibold">import-export solutions</span> to
//             make your business global. From logistics to compliance, we ensure{" "}
//             <span className="font-semibold">smooth operations, timely delivery</span>, and{" "}
//             <span className="font-semibold">hassle-free trade</span>.
//           </p>

//           {/* Services Grid */}
//           <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Truck className="w-8 h-8 text-green-600" />,
//                 title: "Logistics & Freight",
//                 desc: "Sea & air freight, consolidation, and door-to-door delivery.",
//               },
//               {
//                 icon: <Globe className="w-8 h-8 text-green-600" />,
//                 title: "Market Entry",
//                 desc: "Market research, compliance, and international buyer connections.",
//               },
//               {
//                 icon: <FileText className="w-8 h-8 text-green-600" />,
//                 title: "Compliance & Documentation",
//                 desc: "Certificates, quality testing, customs clearance, and paperwork.",
//               },
//               {
//                 icon: <Calendar className="w-8 h-8 text-green-600" />,
//                 title: "Scheduling & Warehousing",
//                 desc: "FCL/LCL scheduling, storage, and efficient inventory management.",
//               },
//               {
//                 icon: <Package className="w-8 h-8 text-green-600" />,
//                 title: "Inspection & Packaging",
//                 desc: "Export-grade packaging with strict quality checks.",
//               },
//               {
//                 icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
//                 title: "Risk Management",
//                 desc: "Insurance, compliance checks, and safe shipment handling.",
//               },
//               {
//                 icon: <Headset className="w-8 h-8 text-green-600" />,
//                 title: "24/7 Support",
//                 desc: "Dedicated customer support at every step of your shipment.",
//               },
//               {
//                 icon: <TrendingUp className="w-8 h-8 text-green-600" />,
//                 title: "Business Growth",
//                 desc: "Helping you expand globally with reliable trade solutions.",
//               },
//             ].map((service, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
//               >
//                 <div className="p-4 bg-green-50 rounded-full mb-4">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-gray-600">{service.desc}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Why Choose Us Section */}
//           <div className="mt-20">
//             <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
//               Why Choose Us?
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { icon: "🚛", title: "Reliable Logistics" },
//                 { icon: "📜", title: "Transparent Process" },
//                 { icon: "🌍", title: "Global Network" },
//                 { icon: "💼", title: "Experienced Team" },
//               ].map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   whileHover={{ scale: 1.08 }}
//                   className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center"
//                 >
//                   <span className="text-4xl mb-3">{item.icon}</span>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {item.title}
//                   </h3>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>









//          {/* Floating WhatsApp Button */}
//               <motion.a
//                 href="https://wa.me/message/HSSSFL36LZXQF1"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 transition duration-300 z-50"
//                 animate={{
//                   y: [0, -50, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 1,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <FaWhatsapp size={28} />
//               </motion.a>
//       </motion.main>
//     </div>
//   );
// }







// src/pages/ServicePage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  Truck,
  Globe,
  FileText,
  Calendar,
  Package,
  ShieldCheck,
  Headset,
  TrendingUp,
} from "lucide-react";

export default function ServicePage() {
  return (
    <div>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
            At <span className="font-semibold text-green-600">4Spact</span>, we
            provide end-to-end{" "}
            <span className="font-semibold">import-export solutions</span> to
            make your business global. From logistics to compliance, we ensure{" "}
            <span className="font-semibold">smooth operations, timely delivery</span>, and{" "}
            <span className="font-semibold">hassle-free trade</span>.
          </p>

          {/* Services Grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Truck className="w-8 h-8 text-green-600" />,
                title: "Logistics & Freight",
                desc: "Sea & air freight, consolidation, and door-to-door delivery.",
              },
              {
                icon: <Globe className="w-8 h-8 text-green-600" />,
                title: "Market Entry",
                desc: "Market research, compliance, and international buyer connections.",
              },
              {
                icon: <FileText className="w-8 h-8 text-green-600" />,
                title: "Compliance & Documentation",
                desc: "Certificates, quality testing, customs clearance, and paperwork.",
              },
              {
                icon: <Calendar className="w-8 h-8 text-green-600" />,
                title: "Scheduling & Warehousing",
                desc: "FCL/LCL scheduling, storage, and efficient inventory management.",
              },
              {
                icon: <Package className="w-8 h-8 text-green-600" />,
                title: "Inspection & Packaging",
                desc: "Export-grade packaging with strict quality checks.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
                title: "Risk Management",
                desc: "Insurance, compliance checks, and safe shipment handling.",
              },
              {
                icon: <Headset className="w-8 h-8 text-green-600" />,
                title: "24/7 Support",
                desc: "Dedicated customer support at every step of your shipment.",
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                title: "Business Growth",
                desc: "Helping you expand globally with reliable trade solutions.",
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
                { icon: "🚛", title: "Reliable Logistics" },
                { icon: "📜", title: "Transparent Process" },
                { icon: "🌍", title: "Global Network" },
                { icon: "💼", title: "Experienced Team" },
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
            ease: "easeInOut",
          }}
        >
          <FaWhatsapp size={28} />
        </motion.a>
      </motion.main>
    </div>
  );
}
