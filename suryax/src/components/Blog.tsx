import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'Why Jaipur is the Best Place for Real Estate Investment in 2026',
    excerpt: 'Explore the rising trends and infrastructure projects that make Jaipur a goldmine for investors.',
    date: 'May 20, 2026',
    author: 'Suryax Editorial',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Modern Interior Design Trends for Luxury Apartments',
    excerpt: 'From smart homes to sustainable materials, here is what is trending in luxury interiors.',
    date: 'May 15, 2026',
    author: 'Design Team',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'The Future of Commercial Spaces: Post-Pandemic Era',
    excerpt: 'How office spaces are evolving to provide more collaboration and health-focused environments.',
    date: 'May 10, 2026',
    author: 'Market Expert',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-off-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Latest <span className="text-secondary italic">Property News</span> & Market Trends
          </motion.h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                    <Calendar size={16} className="text-secondary" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                    <User size={16} className="text-secondary" />
                    {post.author}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group/link">
                  Read More 
                  <ArrowRight size={20} className="transition-transform group-hover/link:translate-x-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
