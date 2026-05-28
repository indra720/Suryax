import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner, Elite Heights',
    content: "The transparency and professionalism shown by Suryax Group were refreshing. They delivered my flat on time with exceptional quality. Highly recommended!",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Priya Verma',
    role: 'Investor, Business Park',
    content: "I've invested in multiple projects with Suryax. Their strategic location choices have provided excellent returns on my investments over the years.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Amit Agarwal',
    role: 'Resident, Green Valley',
    content: "Living in a Suryax project feels like living in luxury every day. The amenities and the community environment are exactly what my family needed.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  }
];

export default function Testimonials() {
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
            Our Customers Think We're <span className="text-secondary italic">The Best</span>
          </motion.h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-off-white p-10 rounded-[3rem] relative shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-10 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-primary text-xl">{testimonial.name}</h4>
                  <p className="text-secondary font-semibold text-sm uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
