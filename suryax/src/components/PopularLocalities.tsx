import { motion } from 'framer-motion';
import { localities } from '../data/mockData';
import { ArrowRight, MapPin } from 'lucide-react';

export default function PopularLocalities() {
  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Regional Coverage</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">Prime Localities</h2>
            <div className="w-16 h-1.5 bg-gold mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {localities.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 group cursor-pointer hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="flex justify-between items-start mb-10">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <span className="text-[10px] font-black text-navy/30 uppercase tracking-widest">{loc.status}</span>
              </div>

              <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors">{loc.name}</h3>
              <div className="text-sm font-semibold text-navy/60 mb-8">{loc.avgPrice} • {loc.projects} Projects</div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-50 group-hover:border-primary/10 transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-[11px] font-bold text-green-600 uppercase tracking-wider">{loc.growth} Growth</span>
                </div>
                <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-navy group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
