import { motion } from 'framer-motion';
import { ShieldCheck, MapPinned, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    title: 'Prime Locations',
    description: 'We strategically select locations that offer high appreciation potential and excellent connectivity.',
    icon: <MapPinned className="w-10 h-10" />
  },
  {
    title: 'Trusted & Transparent',
    description: 'Our legacy is built on transparency. No hidden costs, only clear communication and legal clarity.',
    icon: <ShieldCheck className="w-10 h-10" />
  },
  {
    title: 'Customer-First Approach',
    description: 'From site visits to possession, we ensure a seamless and delightful journey for every customer.',
    icon: <HeartHandshake className="w-10 h-10" />
  }
];

export default function WhyChoose() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Dynamic Background with Teal and Orange Split */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="flex-1 bg-primary"></div>
        <div className="flex-1 bg-secondary"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Why Choose <span className="text-accent">Suryax Group?</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-xl group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-white/80 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
