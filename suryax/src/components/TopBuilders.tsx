import { motion } from 'framer-motion';
import { builders } from '../data/mockData';
import { ShieldCheck, Award } from 'lucide-react';

export default function TopBuilders() {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-1 bg-gold rounded-full"></span>
              <span className="text-gold font-black uppercase tracking-[0.3em] text-xs">Industry Leaders</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Trusted by Thousands, <br />
              <span className="text-gold">Built by the Best</span>
            </h2>
            <p className="text-lg text-white/50 mb-12 max-w-lg leading-relaxed font-semibold">
              We partner exclusively with Jaipur's most reputable developers to ensure your investment is safe, legally clear, and built to the highest standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold shrink-0">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1 text-lg">RERA Certified</h4>
                  <p className="text-sm text-white/30 font-semibold">100% legally verified projects only.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gold shrink-0">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Award Winning</h4>
                  <p className="text-sm text-white/40">Projects recognized for excellence.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {builders.map((builder: any, index: number) => (
              <motion.div
                key={builder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-4xl flex flex-col items-center justify-center group hover:bg-white/10 transition-all cursor-pointer aspect-square"
              >
                <div 
                  className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-black text-white mb-6 shadow-2xl group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: builder.color }}
                >
                  {builder.logo}
                </div>
                <h4 className="text-white font-bold text-center group-hover:text-gold transition-colors">{builder.name}</h4>
                <span className="text-[10px] text-white/40 font-black uppercase tracking-[0.2em] mt-2">Certified Partner</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
