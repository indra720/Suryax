// import { motion } from 'framer-motion';
// import { Search, MapPin, Building, ChevronDown, MessageCircle } from 'lucide-react';

// export default function HomeHero() {
//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
//       {/* Background Image with refined overlay */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src="https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=2000" 
//           alt="Suryax Premium Living" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="inline-block px-5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-gold rounded-full text-[11px] font-bold uppercase tracking-[0.3em] mb-8 shadow-sm">
//               Real Estate Solutions
//             </span>
//             <h1 className="text-5xl md:text-7xl font-black text-white leading-[1] mb-8 tracking-tighter">
//               Find Your Ideal <br /> Property Today
//             </h1>
//             <p className="text-lg md:text-xl text-white/70 mb-16 max-w-2xl mx-auto font-semibold leading-relaxed">
//               At Suryax, we bring you a wide range of premium real estate opportunities tailored for your residential, commercial, and investment needs.
//             </p>
//           </motion.div>

//           {/* Real Estate Search Card */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="w-full bg-white p-4 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center border border-gray-100"
//           >
//             <div className="flex-1 w-full flex items-center px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100">
//               <Search className="text-primary mr-4" size={20} />
//               <input 
//                 type="text" 
//                 placeholder="Search Property, Locality..." 
//                 className="w-full outline-none text-navy font-semibold text-sm placeholder:text-navy/40"
//               />
//             </div>
            
//             <div className="flex-1 w-full flex items-center justify-between px-6 py-4 border-b md:border-b-0 md:border-r border-gray-100 cursor-pointer">
//               <span className="text-sm font-semibold text-navy/60">Property Type</span>
//               <ChevronDown size={16} className="text-navy/30" />
//             </div>

//             <button className="w-full md:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-navy transition-all text-sm tracking-widest uppercase">
//               Search
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import {
  Search,
  Building,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

export default function HomeHero() {
  const stats = [
    {
      number: "15+",
      label: "Years Experience",
    },
    {
      number: "5000+",
      label: "Happy Clients",
    },
    {
      number: "250+",
      label: "Projects Delivered",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=2500"
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#08101f]/80" />

      {/* Luxury Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-500/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full" />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">

        <div className="max-w-6xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8"
          >
            <Building size={18} className="text-yellow-400" />

            <span className="text-yellow-400 text-xs uppercase tracking-[4px] font-bold">
              Luxury Real Estate
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none"
          >
            Find Your
            <span className="block mt-3 bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              Dream Property
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-white/75 max-w-3xl mx-auto leading-relaxed"
          >
            Discover premium villas, luxury apartments,
            commercial spaces and investment opportunities
            with Jaipur's trusted real estate experts.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-5xl mx-auto mt-14 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-4 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          >
            <div className="grid lg:grid-cols-4 gap-4">

              {/* Search */}
              <div className="lg:col-span-2 flex items-center bg-white rounded-2xl px-5 py-4">
                <Search
                  size={20}
                  className="text-slate-500 mr-3"
                />

                <input
                  type="text"
                  placeholder="Search Property, Locality..."
                  className="w-full outline-none text-black"
                />
              </div>

              {/* Property Type */}
              <div className="flex items-center justify-between bg-white rounded-2xl px-5 py-4 cursor-pointer">
                <span className="text-slate-500">
                  Property Type
                </span>

                <ChevronDown
                  size={18}
                  className="text-slate-500"
                />
              </div>

              {/* Search Button */}
              <button
                className="
                rounded-2xl
                bg-gradient-to-r
                from-yellow-400
                to-yellow-600
                text-black
                font-bold
                px-8
                py-4
                hover:scale-105
                transition-all
                duration-300
                "
              >
                SEARCH
              </button>
            </div>
          </motion.div>

          {/* Statistics */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="
                bg-white/10
                backdrop-blur-xl
                border
                border-white/20
                rounded-3xl
                p-8
                "
              >
                <h3 className="text-4xl font-black text-yellow-400">
                  {item.number}
                </h3>

                <p className="text-white/70 mt-3">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Trusted Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
            }}
            className="mt-12"
          >
            <p className="text-white/60 uppercase tracking-[4px] text-sm">
              Trusted By Thousands Of Property Buyers Across Rajasthan
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ChevronDown
          size={40}
          className="text-yellow-400"
        />
      </motion.div>

      {/* WhatsApp Floating Button */}
      <a
        href="#"
        className="
        fixed
        bottom-6
        right-6
        w-16
        h-16
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        shadow-2xl
        z-50
        hover:scale-110
        transition-all
        "
      >
        <MessageCircle
          size={28}
          className="text-white"
        />
      </a>
    </section>
  );
}


