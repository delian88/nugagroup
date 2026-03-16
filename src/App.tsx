/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Building2, 
  CreditCard, 
  Stethoscope, 
  Globe, 
  Activity, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Users,
  Target,
  Zap,
  Award,
  MapPin,
  Newspaper,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const subsidiaries = [
  {
    name: "Nuga Best West Africa",
    url: "https://nugabestwestafrica.com",
    description: "Leading provider of thermal massage beds and wellness solutions across West Africa.",
    icon: Heart,
    color: "bg-brand",
    category: "Wellness"
  },
  {
    name: "Nuga Hospital",
    url: "https://www.nugahospital.ng",
    description: "State-of-the-art medical facility providing comprehensive healthcare services.",
    icon: Stethoscope,
    color: "bg-brand",
    category: "Healthcare"
  },
  {
    name: "Nuga Pay",
    url: "https://www.nugapay.com",
    description: "Innovative fintech solutions for seamless digital payments and financial management.",
    icon: CreditCard,
    color: "bg-brand",
    category: "Fintech"
  },
  {
    name: "Nuga Best Properties",
    url: "https://nugabestproperties.com",
    description: "Premium real estate development and property management services.",
    icon: Building2,
    color: "bg-brand",
    category: "Real Estate"
  },
  {
    name: "Chify Rehab",
    url: "https://chifyrehab.vercel.app",
    description: "Specialized rehabilitation and physiotherapy services for holistic recovery.",
    icon: Activity,
    color: "bg-brand",
    category: "Rehabilitation"
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Nugabest Group Logo" className="w-10 h-10 object-contain" />
          <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-brand' : 'text-brand'}`}>
            NUGABEST GROUP
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Subsidiaries', 'About', 'Values', 'Leadership', 'News', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-dark transition-all shadow-lg shadow-brand/10">
            Get in Touch
          </a>
        </div>

        <button className="md:hidden text-zinc-900 z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center p-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {['Subsidiaries', 'About', 'Values', 'Leadership', 'News', 'Contact'].map((item) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-4xl font-bold text-zinc-900 hover:text-brand transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={() => setIsOpen(false)}
                className="bg-brand text-white px-10 py-4 rounded-full font-bold mt-4 shadow-lg shadow-brand/10"
              >
                Get in Touch
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      url: "https://picsum.photos/seed/hospital-modern/1920/1080",
      title: "Innovating for a",
      highlight: "Better Tomorrow.",
      description: "Nugabest Group is a diversified conglomerate dedicated to improving lives through healthcare, financial technology, and global wellness solutions.",
      tag: "Established Excellence"
    },
    {
      url: "https://picsum.photos/seed/wellness-spa/1920/1080",
      title: "World-Class",
      highlight: "Wellness Solutions.",
      description: "Experience the future of health with our advanced thermal massage beds and holistic wellness products designed for your well-being.",
      tag: "Global Wellness"
    },
    {
      url: "https://picsum.photos/seed/fintech-digital/1920/1080",
      title: "Seamless Digital",
      highlight: "Financial Future.",
      description: "Empowering businesses and individuals with innovative fintech solutions for secure and efficient digital payments.",
      tag: "Fintech Innovation"
    },
    {
      url: "https://picsum.photos/seed/realestate-luxury/1920/1080",
      title: "Building Sustainable",
      highlight: "Living Spaces.",
      description: "Redefining real estate with premium developments that combine luxury, functionality, and environmental consciousness.",
      tag: "Real Estate Excellence"
    },
    {
      url: "https://picsum.photos/seed/rehab-therapy/1920/1080",
      title: "Holistic Path to",
      highlight: "Full Recovery.",
      description: "Specialized rehabilitation and physiotherapy services dedicated to restoring health and mobility through expert care.",
      tag: "Specialized Care"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <img 
              src={slides[currentSlide].url} 
              className="w-full h-full object-cover" 
              alt="Background" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 backdrop-blur-md text-brand-light text-xs font-bold uppercase tracking-wider mb-6 border border-brand/30">
              <ShieldCheck size={14} />
              {slides[currentSlide].tag}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              {slides[currentSlide].title} <br />
              <span className="text-brand-light">{slides[currentSlide].highlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-200 mb-8 leading-relaxed max-w-xl">
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#subsidiaries" className="bg-brand text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-brand-dark transition-all shadow-lg shadow-brand/20">
                Explore Our Group <ArrowRight size={18} />
              </a>
              <a href="#about" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                Learn More
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-brand' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </section>
  );
};

const SubsidiaryCard = ({ sub, index }: { sub: typeof subsidiaries[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white border border-zinc-100 p-8 rounded-3xl hover:shadow-xl hover:border-zinc-200 transition-all duration-300 flex flex-col h-full"
    >
      <div className={`w-14 h-14 ${sub.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand/10`}>
        <sub.icon size={28} />
      </div>
      <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">{sub.category}</div>
      <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-brand transition-colors">
        {sub.name}
      </h3>
      <p className="text-zinc-500 leading-relaxed mb-8 flex-grow">
        {sub.description}
      </p>
      <a 
        href={sub.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-bold text-zinc-900 group-hover:gap-3 transition-all"
      >
        Visit Website <ExternalLink size={14} />
      </a>
    </motion.div>
  );
};

const Stats = () => {
  const stats = [
    { label: "Years of Excellence", value: "20+" },
    { label: "Global Locations", value: "10+" },
    { label: "Team Members", value: "10+" },
    { label: "Subsidiaries", value: "6" }
  ];

  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/nuga1/400/600" alt="" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/nuga2/400/400" alt="" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/nuga3/400/400" alt="" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/nuga4/400/600" alt="" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-zinc-900 mb-8 leading-tight">
              A Legacy of Care and <br />
              <span className="text-zinc-400">Technological Advancement.</span>
            </h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed text-lg">
              <p>
                Founded on the principles of integrity and service, Nugabest Group has grown from a single wellness center into a global network of enterprises. Our mission is to bridge the gap between advanced technology and human well-being.
              </p>
              <p>
                Whether it's through the life-saving services at Nuga Hospital, the financial empowerment of Nuga Pay, or the world-class wellness products of Nuga Best, we are committed to excellence in every sector we touch.
              </p>
            </div>
            <div className="mt-10 pt-10 border-t border-zinc-100 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-12 h-12 rounded-full border-4 border-white object-cover" alt="" />
                ))}
              </div>
              <p className="text-sm text-zinc-500 font-medium">
                Trusted by thousands of <br /> partners and clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical behavior in all our dealings.",
      icon: ShieldCheck,
      color: "text-brand"
    },
    {
      title: "Innovation",
      description: "Continuously pushing boundaries to find better solutions for global challenges.",
      icon: Zap,
      color: "text-brand"
    },
    {
      title: "Service",
      description: "Dedicated to serving humanity through care, compassion, and excellence.",
      icon: Heart,
      color: "text-brand"
    },
    {
      title: "Excellence",
      description: "Striving for the best in everything we do, across all our subsidiaries.",
      icon: Award,
      color: "text-brand"
    }
  ];

  return (
    <section id="values" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Core Values</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">The principles that guide our decisions and define our culture across the globe.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-brand/20 transition-all group">
              <value.icon className={`w-10 h-10 ${value.color} mb-6 group-hover:scale-110 transition-transform`} />
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{value.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Leadership = () => {
  return (
    <section id="leadership" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/leader/800/1000" 
                alt="Visionary Leadership" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="italic text-zinc-300 mb-4">"Our goal is not just to build businesses, but to build a legacy of health and prosperity for all."</p>
              <p className="font-bold">The Visionary Team</p>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Nugabest Group Leadership</p>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold uppercase tracking-wider mb-6">
              <Target size={14} />
              Our Leadership
            </div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-8 leading-tight">Visionary Minds <br /> Behind the Group.</h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed">
              <p>
                The Nugabest Group is led by a team of seasoned professionals with decades of experience in healthcare, finance, and international business. Their collective vision has steered the group through periods of rapid expansion and technological shifts.
              </p>
              <p>
                We believe in leadership that empowers. Our executives are not just decision-makers; they are mentors and innovators who foster a culture of creativity and accountability across all our subsidiaries.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-2xl font-bold text-zinc-900">Global</div>
                  <div className="text-sm text-zinc-500">Perspective</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zinc-900">Local</div>
                  <div className="text-sm text-zinc-500">Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GlobalPresence = () => {
  const locations = [
    { name: "West Africa", status: "Regional Hub" },
    { name: "Philippines", status: "Strategic Expansion" },
    { name: "South Korea", status: "Innovation Center" },
    { name: "Europe", status: "Emerging Market" }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Global Presence</h2>
            <p className="text-zinc-500">From our roots in wellness to our global reach in technology and healthcare, we are making an impact across continents.</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-900">
              <div className="w-3 h-3 bg-brand rounded-full" /> Active Hubs
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-zinc-900">
              <div className="w-3 h-3 bg-zinc-200 rounded-full" /> Future Expansion
            </div>
          </div>
        </div>
        
        <div className="relative bg-zinc-900 rounded-[40px] p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://picsum.photos/seed/worldmap/1920/1080?blur=10" 
              className="w-full h-full object-cover" 
              alt="" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((loc, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                <MapPin className="text-brand-light mb-4" size={24} />
                <h3 className="text-xl font-bold text-white mb-2">{loc.name}</h3>
                <p className="text-zinc-400 text-sm">{loc.status}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center relative z-10">
            <p className="text-zinc-400 mb-8">Operating in over 10+ locations worldwide with a unified mission.</p>
            <button className="bg-white text-zinc-900 px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all">
              View All Locations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const News = () => {
  const articles = [
    {
      title: "Nuga Hospital Launches New Oncology Center",
      date: "Feb 15, 2026",
      category: "Healthcare",
      image: "https://picsum.photos/seed/news1/600/400"
    },
    {
      title: "Nuga Pay Reaches 500k Active Users Milestone",
      date: "Jan 28, 2026",
      category: "Fintech",
      image: "https://picsum.photos/seed/news2/600/400"
    },
    {
      title: "Expansion Plans for Nuga Best in East Africa",
      date: "Jan 10, 2026",
      category: "Wellness",
      image: "https://picsum.photos/seed/news3/600/400"
    }
  ];

  return (
    <section id="news" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-4">Latest Insights</h2>
            <p className="text-zinc-500">Stay updated with the latest developments across the Nugabest Group.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-zinc-900 font-bold group">
            View All News <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-brand uppercase tracking-widest">{article.category}</span>
                <span className="text-zinc-300">•</span>
                <span className="text-xs text-zinc-400">{article.date}</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-brand transition-colors">{article.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Get in Touch</h2>
            <p className="text-zinc-600 text-lg mb-12">
              Have questions about our services or interested in a partnership? Our team is here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Our Headquarters</h4>
                  <p className="text-zinc-500">Plot 1987, Umaru Musa Yaradua expressway, Opp. Police signboard Lugbe.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center text-brand shrink-0">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Global Support</h4>
                  <p className="text-zinc-500">support@nugagroup.com</p>
                  <p className="text-zinc-500">+234 707 111 1391</p>
                  <p className="text-zinc-500">+234 815 555 1225</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-50 p-8 md:p-12 rounded-[40px] border border-zinc-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-900 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-900 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-900 mb-2">Subject</label>
                <select className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all">
                  <option>General Inquiry</option>
                  <option>Partnership Proposal</option>
                  <option>Healthcare Services</option>
                  <option>Fintech Support</option>
                  <option>Real Estate Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-900 mb-2">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-50 pt-24 pb-12 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="Nugabest Group Logo" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg tracking-tight text-brand">
                NUGABEST GROUP
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              The global hub for excellence in healthcare, wellness, and technology. Improving lives through innovation.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/nugagroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-brand hover:text-white hover:border-brand transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com/nugagroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-brand hover:text-white hover:border-brand transition-all">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com/nugagroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-brand hover:text-white hover:border-brand transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/nugagroup" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-600 hover:bg-brand hover:text-white hover:border-brand transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Subsidiaries</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              {subsidiaries.map(sub => (
                <li key={sub.name}>
                  <a href={sub.url} className="hover:text-zinc-900 transition-colors">{sub.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><a href="#" className="hover:text-zinc-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Our Vision</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-zinc-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 mb-6">Newsletter</h4>
            <p className="text-sm text-zinc-500 mb-4">Stay updated with our latest news and innovations.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white border border-zinc-200 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-brand/10 focus:border-brand"
              />
              <button className="bg-brand text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-dark transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-400 text-xs">
            © {new Date().getFullYear()} Nugabest Group. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-zinc-400 font-medium">
            <a href="#" className="hover:text-zinc-900">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900">Terms of Service</a>
            <a href="#" className="hover:text-zinc-900">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <Hero />
      
      <section id="subsidiaries" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-zinc-900 mb-6">Our Global Subsidiaries</h2>
            <p className="text-zinc-600 text-lg">
              A diverse portfolio of companies working in synergy to deliver world-class services across multiple industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((sub, i) => (
              <div key={sub.name}>
                <SubsidiaryCard sub={sub} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Values />
      <About />
      <Leadership />
      <GlobalPresence />
      <News />
      <Contact />
      
      <section className="py-24 bg-brand text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-light/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to partner with us?</h2>
          <p className="text-brand-light text-xl mb-12 max-w-2xl mx-auto">
            Join our mission to create a healthier, more connected world. We are always looking for innovative partners and talented individuals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-brand px-10 py-4 rounded-full font-bold hover:bg-brand-light hover:text-white transition-all">
              Contact Our Team
            </button>
            <button className="bg-brand-dark text-white border border-brand-light/30 px-10 py-4 rounded-full font-bold hover:bg-brand transition-all">
              View Opportunities
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
