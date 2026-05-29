import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import { properties } from '../data/mockData';

const commercialData = properties.filter(p => p.type === 'Commercial');

export default function Commercial() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-40 bg-surface min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Business Growth</span>
          <h1 className="text-6xl md:text-8xl font-black text-primary leading-tight tracking-tighter mb-8">
            Commercial <br /> Excellence.
          </h1>
          <p className="text-xl text-primary/60 font-semibold leading-relaxed">
            From strategic office spaces in the city center to sprawling industrial parks, Suryax Group provides the foundation for your business success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {commercialData.map((prop) => (
            <div key={prop.id} className="bg-white rounded-[4rem] overflow-hidden flex flex-col md:flex-row shadow-xl border border-gray-50 group hover:shadow-2xl transition-all duration-500">
              <div className="md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden">
                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
              </div>
              <div className="md:w-1/2 p-12 md:p-16 flex flex-col">
                <div className="flex items-center gap-2 text-secondary text-[10px] font-black uppercase tracking-widest mb-4">
                  <MapPin size={12} />
                  {prop.location}
                </div>
                <h3 className="text-3xl font-black text-primary mb-6 leading-tight">{prop.title}</h3>
                <p className="text-primary/50 font-semibold mb-10 line-clamp-3">{prop.description}</p>
                <div className="mt-auto pt-8 border-t border-gray-50 flex items-center justify-between">
                   <div className="text-2xl font-black text-primary">{prop.price}</div>
                   <button className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors">
                     <ArrowRight size={20} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Park Highlight */}
        <section className="bg-primary rounded-[5rem] p-16 md:p-32 text-white relative overflow-hidden mb-32">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="relative z-10 max-w-4xl">
             <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Special Project</span>
             <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">Surya Industrial Park</h2>
             <p className="text-2xl text-white/60 font-semibold mb-16 leading-relaxed">A world-class industrial ecosystem designed for manufacturing, logistics, and innovation. Secure your future in Jaipur's fastest-growing hub.</p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div>
                 <Target className="text-secondary mb-4" size={32} />
                 <h4 className="text-xl font-bold mb-2">Prime Location</h4>
                 <p className="text-white/40 font-semibold">Easy highway connectivity.</p>
               </div>
               <div>
                 <Zap className="text-secondary mb-4" size={32} />
                 <h4 className="text-xl font-bold mb-2">Power Ready</h4>
                 <p className="text-white/40 font-semibold">High-tension connections.</p>
               </div>
               <div>
                 <TrendingUp className="text-secondary mb-4" size={32} />
                 <h4 className="text-xl font-bold mb-2">High ROI</h4>
                 <p className="text-white/40 font-semibold">Rapid area development.</p>
               </div>
             </div>
           </div>
        </section>
      </div>
    </motion.div>
  );
}
