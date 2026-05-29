import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2, ChevronDown, Map, Layout, Users, Target, CalendarDays, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import logo from "/suryaxLogo.webp"

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Projects', 
    href: '/projects',
    dropdown: [
      { name: 'Residential', desc: 'Luxury villas and premium apartments.', icon: Building2, href: '/residential' },
      { name: 'Commercial', desc: 'Modern office spaces and retail hubs.', icon: Layout, href: '/commercial' },
      { name: 'Townships', desc: 'Integrated communities with world-class amenities.', icon: Map, href: '/townships' },
    ]
  },
  { 
    name: 'Property Map', 
    href: '/map',
    dropdown: [
      { name: 'Suryax Layout', desc: 'Master plan of our flagship community.', icon: Layout, href: '/map/suryax' },
      { name: 'Warehouse Plan', desc: 'Logistics and industrial layout designs.', icon: Building2, href: '/map/warehouse' },
    ]
  },
  { 
    name: 'Others', 
    href: '/others',
    dropdown: [
      { name: 'Testimonials', desc: 'What our happy families say about us.', icon: Users, href: '/testimonials' },
      { name: 'Vision & Mission', desc: 'Our core values and future roadmap.', icon: Target, href: '/vision' },
      { name: 'Events', desc: 'Updates from our latest ground-breaking events.', icon: CalendarDays, href: '/events' },
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-100 transition-all duration-500",
        scrolled 
          ? "bg-white shadow-xl py-3" 
          : "bg-white/90 backdrop-blur-xl shadow-lg py-5 border-b border-white/20"
      )}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group ml-0 lg:ml-12.5">
          <img 
            src={logo} 
            alt="Suryax Logo" 
            className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          />
        </Link>

        {/* Desktop Menu - Pill Container */}
        <div className="hidden xl:flex items-center bg-[#0B1F3A]/5 backdrop-blur-md border border-[#0B1F3A]/5 p-1.5 rounded-full relative">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) => cn(
                  "relative px-6 py-2 font-bold transition-all duration-300 rounded-full flex items-center gap-1.5 group/link whitespace-nowrap",
                  isActive && !item.dropdown
                    ? "text-white" 
                    : "text-[#0B1F3A]/70 hover:text-[#0B1F3A]"
                )}
              >
                {({ isActive }) => (
                  <>
                    {isActive && !item.dropdown && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-primary -z-10 shadow-lg shadow-primary/20"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                      />
                    )}
                    <span className={cn(
                      "relative z-10 transition-transform duration-300",
                      isActive && !item.dropdown && "scale-105"
                    )}>
                      {item.name}
                    </span>
                    {item.dropdown && (
                      <ChevronDown 
                        size={14} 
                        className={cn(
                          "transition-transform duration-300 opacity-50 group-hover/link:opacity-100",
                          activeDropdown === item.name && "rotate-180"
                        )} 
                      />
                    )}
                  </>
                )}
              </NavLink>

              {/* Mega Dropdown */}
              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                  >
                    <div className="bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)] border border-gray-100 p-8 min-w-135.5 overflow-hidden relative">
                      {/* Decorative Background Element */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                              {item.name === 'Projects' ? <Building2 size={20} /> : item.name === 'Property Map' ? <Map size={20} /> : <Layout size={20} />}
                            </div>
                            <div>
                              <h4 className="text-sm font-black uppercase tracking-widest text-primary">{item.name}</h4>
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Explore our premium selection</p>
                            </div>
                          </div>
                          <Link to={item.href} className="text-xs font-bold text-secondary flex items-center gap-1 hover:gap-2 transition-all">
                            View All <ArrowRight size={14} />
                          </Link>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {item.dropdown.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              to={subItem.href}
                              className="group/card p-5 rounded-3xl border border-gray-50 hover:bg-primary hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 flex flex-col gap-3"
                            >
                              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary group-hover/card:bg-white transition-all duration-500">
                                <subItem.icon size={24} />
                              </div>
                              <div>
                                <h5 className="font-bold text-[#0B1F3A] group-hover/card:text-white transition-colors mb-1">{subItem.name}</h5>
                                <p className="text-xs text-[#0B1F3A]/50 group-hover/card:text-white/70 transition-colors leading-relaxed line-clamp-2">
                                  {subItem.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Auth & CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/register" className="font-bold transition-colors text-[#0B1F3A]/70 hover:text-[#0B1F3A]">
            Register
          </Link>
          <Link 
            to="/login" 
            className="px-8 py-3 bg-secondary text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-[#ff6b0a] transition-all shadow-xl shadow-secondary/20 active:scale-95"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden p-2 text-[#0B1F3A]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-110 xl:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-100 bg-white z-120 shadow-2xl xl:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-6 flex items-center justify-between border-b border-gray-50">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img src={logo} alt="Logo" className="h-10 w-auto" />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Content - Hidden Scrollbar */}
              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-8 scrollbar-hide">
                <style>{`
                  .scrollbar-hide::-webkit-scrollbar { display: none; }
                  .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>

                {navItems.map((item) => (
                  <div key={item.name} className="space-y-4">
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.href}
                        className={({ isActive }) => cn(
                          "text-2xl font-black transition-colors flex-1",
                          isActive ? "text-primary" : "text-[#0B1F3A]/60"
                        )}
                        onClick={() => !item.dropdown && setIsOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                      {item.dropdown && (
                        <button 
                          onClick={() => toggleMobileDropdown(item.name)}
                          className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all",
                            mobileDropdown === item.name ? "bg-primary text-white" : "bg-gray-50 text-primary/40"
                          )}
                        >
                          <ChevronDown 
                            size={20} 
                            className={cn(
                              "transition-transform duration-300",
                              mobileDropdown === item.name && "rotate-180"
                            )} 
                          />
                        </button>
                      )}
                    </div>
                    
                    {item.dropdown && (
                      <AnimatePresence>
                        {mobileDropdown === item.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="grid grid-cols-1 gap-4 pl-4 border-l-2 border-primary/10 ml-1 py-2">
                              {item.dropdown.map((sub) => (
                                <Link 
                                  key={sub.name} 
                                  to={sub.href}
                                  className="group flex items-center gap-3"
                                  onClick={() => setIsOpen(false)}
                                >
                                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <sub.icon size={14} />
                                  </div>
                                  <div>
                                    <div className="text-sm font-bold text-[#0B1F3A]">{sub.name}</div>
                                    <div className="text-[10px] text-gray-400 font-medium">{sub.desc}</div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}

                <div className="pt-8 border-t border-gray-50 space-y-4">
                  <Link 
                    to="/login" 
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 text-center font-bold text-primary bg-primary/5 rounded-2xl"
                  >
                    Login to Account
                  </Link>
                  <Link 
                    to="/register" 
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 text-center font-bold bg-secondary text-white rounded-2xl shadow-lg shadow-secondary/20"
                  >
                    Create Account
                  </Link>
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="p-6 bg-gray-50/50">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/30 text-center">
                  © 2026 Suryax Group Jaipur
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
