import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Years of Trust', value: '12+', icon: <CheckCircle2 className="text-secondary" /> },
  { label: 'Asset Value', value: '2000 Cr+', icon: <Award className="text-secondary" /> },
  { label: 'Expert Team', value: '500+', icon: <Users className="text-secondary" /> },
  { label: 'Annual Growth', value: '40%', icon: <TrendingUp className="text-secondary" /> },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-off-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Architecture" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            {/* Magnifying glass decorative element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary rounded-full flex items-center justify-center p-8 shadow-2xl z-20 hidden md:flex"
            >
              <div className="text-white text-center">
                <div className="text-4xl font-bold mb-1">12</div>
                <div className="text-xs uppercase tracking-widest font-bold">Years of Excellence</div>
              </div>
            </motion.div>

            {/* Background Decorative Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Building Dreams With <span className="text-secondary italic">Trust</span> & Transparency
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                At Suryax Group, we don't just build structures; we create environments where dreams flourish. Based in Jaipur, we have established ourselves as a benchmark for quality and innovation in the real estate sector.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-secondary/10 rounded-lg">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-secondary transition-all duration-300 shadow-xl shadow-primary/20">
                Learn More About Us
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
