import { motion } from 'framer-motion';
import { MapPin, Maximize2, BedDouble, Tag, Heart } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Suryax Elite Heights',
    price: '₹95 Lakh',
    location: 'Vaishali Nagar, Jaipur',
    bhk: '3 BHK',
    sqft: '1850 Sq.ft',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Green Valley Villas',
    price: '₹1.2 Cr',
    location: 'Jagatpura, Jaipur',
    bhk: '4 BHK',
    sqft: '2400 Sq.ft',
    status: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Suryax Business Park',
    price: '₹60 Lakh',
    location: 'Mansarovar, Jaipur',
    bhk: 'Office Space',
    sqft: '850 Sq.ft',
    status: 'New Launch',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Royal Heritage Residency',
    price: '₹85 Lakh',
    location: 'Tonk Road, Jaipur',
    bhk: '3 BHK',
    sqft: '1650 Sq.ft',
    status: 'Possession Soon',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 5,
    title: 'Suryax Urban Living',
    price: '₹1.5 Cr',
    location: 'Malviya Nagar, Jaipur',
    bhk: '4 BHK Penthouse',
    sqft: '3200 Sq.ft',
    status: 'Under Construction',
    image: 'https://images.unsplash.com/photo-1600607687940-c52af084399b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 6,
    title: 'The Orchard Farmhouses',
    price: '₹2.5 Cr',
    location: 'Ajmer Road, Jaipur',
    bhk: 'Luxury Farmhouse',
    sqft: '1 Acre',
    status: 'Available',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  }
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              The Cityscape <span className="text-secondary">Collection</span>
            </h2>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-8 py-4 bg-primary/5 text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 border border-primary/10"
          >
            View All Projects
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-off-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                   <span className="px-4 py-1.5 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
                    {project.status}
                  </span>
                </div>
                <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-secondary transition-colors">
                  <Heart size={20} />
                </button>
                <div className="absolute bottom-6 left-6">
                   <span className="px-5 py-2 bg-secondary text-white text-lg font-bold rounded-xl shadow-lg">
                    {project.price}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <MapPin size={16} className="text-secondary" />
                  {project.location}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 py-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-gray-600">
                    <BedDouble size={20} className="text-primary/60" />
                    <span className="font-semibold text-sm">{project.bhk}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Maximize2 size={20} className="text-primary/60" />
                    <span className="font-semibold text-sm">{project.sqft}</span>
                  </div>
                </div>

                <button className="w-full py-4 mt-2 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-teal-900 transition-all group/btn shadow-lg shadow-primary/10">
                  Property Details
                  <Tag size={18} className="transition-transform group-hover/btn:scale-125" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
