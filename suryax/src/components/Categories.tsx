import { motion } from 'framer-motion';
import { Home, Building, TreePine, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: 'Residential',
    description: 'Premium apartments and villas designed for modern living.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
    color: 'bg-primary'
  },
  {
    title: 'Commercial',
    description: 'Strategic spaces for businesses that aim for high growth.',
    icon: <Building className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    color: 'bg-secondary'
  },
  {
    title: 'Farmhouses & Resorts',
    description: 'Serene weekend getaways and luxury resort experiences.',
    icon: <TreePine className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=800',
    color: 'bg-accent'
  }
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            The World of <span className="text-secondary">Suryax</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl cursor-pointer aspect-4/5"
            >
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-liinear-to-t from-charcoal via-charcoal/20 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-12 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{cat.title}</h3>
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
                <div className="flex items-center gap-2 text-secondary font-bold group/btn">
                  Explore More 
                  <ArrowRight size={20} className="transition-transform group-hover/btn:translate-x-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
