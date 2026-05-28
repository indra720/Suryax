import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Residential from './pages/Residential';
import Commercial from './pages/Commercial';
import Townships from './pages/Townships';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';

// Placeholder for remaining dynamic pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="pt-60 pb-20 container mx-auto px-8 min-h-[70vh]">
    <h1 className="text-8xl font-black text-primary mb-8 tracking-tighter">{title}</h1>
    <p className="text-xl text-primary/40 font-bold uppercase tracking-[0.3em]">Redesigning for 2026 Luxury Launch.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="residential" element={<Residential />} />
          <Route path="commercial" element={<Commercial />} />
          <Route path="townships" element={<Townships />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          
          <Route path="projects" element={<Placeholder title="All Projects" />} />
          <Route path="blog" element={<Placeholder title="Latest News" />} />
          <Route path="map" element={<Placeholder title="Property Map" />} />
          <Route path="others" element={<Placeholder title="Other Services" />} />
          <Route path="property-details" element={<Placeholder title="Property Details" />} />
        </Route>
      </Routes>
      
      {/* Floating WhatsApp Button (Global) */}
      <a 
        href="https://wa.me/917240200300" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-14.1 8.38 8.38 0 0 1 3.8.9L22 2l-1.5 5.5Z"></path>
        </svg>
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-primary px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-100">
          Chat with us
        </span>
      </a>
    </Router>
  );
}

export default App;
