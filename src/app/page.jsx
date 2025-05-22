// pages/index.js
'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
// import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Counter animation setup
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counters, setCounters] = useState({
    year: 0,
    water: 0,
    programs: 0,
    children: 0,
  });

  const counterTargets = {
    year: 2018,
    water: 5000,
    programs: 50,
    children: 8000,
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeOut',
      },
    }),
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (statsInView) {
      const duration = 2000; // ms
      const interval = 20; // ms
      const steps = duration / interval;

      const incrementCounters = () => {
        setCounters(prev => ({
          year: Math.min(prev.year + Math.ceil(counterTargets.year / steps), counterTargets.year),
          water: Math.min(prev.water + Math.ceil(counterTargets.water / steps), counterTargets.water),
          programs: Math.min(prev.programs + Math.ceil(counterTargets.programs / steps), counterTargets.programs),
          children: Math.min(prev.children + Math.ceil(counterTargets.children / steps), counterTargets.children),
        }));
      };

      const timer = setInterval(() => {
        incrementCounters();
        if (
          counters.year >= counterTargets.year &&
          counters.water >= counterTargets.water &&
          counters.programs >= counterTargets.programs &&
          counters.children >= counterTargets.children
        ) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [statsInView, counters]);

  const testimonials = [
    {
      quote: "Joyful Impact is doing a fantastic job in the field of education, our school children get to know so many things during this program",
      author: "Aditya Birla",
      designation: "Principal, Sun Hermitage School"
    },
    {
      quote: "The dedication and passion shown by the Joyful Impact team is truly inspiring. They're changing lives every day.",
      author: "Meera Patel",
      designation: "Community Leader"
    },
    {
      quote: "Working with Joyful Impact has been one of the most rewarding experiences of my life. The impact they make is immeasurable.",
      author: "Raj Kumar",
      designation: "Volunteer Coordinator"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Joyful Impact - Nonprofit Organization</title>
        <meta name="description" content="Making a difference in children's lives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#2D2142] shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              <span className="text-amber-400">Joyful</span> Minds
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-amber-400 transition-colors">Main Pages</a>
            <a href="#" className="text-white hover:text-amber-400 transition-colors">Documentation</a>
            <a href="#" className="text-white hover:text-amber-400 transition-colors">Support</a>
            <a href="#" className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-full transition-colors font-medium">Get Started</a>
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2D2142] px-4 py-2">
            <a href="#" className="block text-white py-2 hover:text-amber-400">Main Pages</a>
            <a href="#" className="block text-white py-2 hover:text-amber-400">Documentation</a>
            <a href="#" className="block text-white py-2 hover:text-amber-400">Support</a>
            <a href="#" className="block bg-amber-400 text-white px-4 py-2 my-2 rounded-full text-center font-medium">Get Started</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 bg-[#2D2142] min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D2142] to-transparent z-10"></div>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center z-20">
          <motion.div 
            className="md:w-1/2 md:pr-12 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-wider mb-2 opacity-80">REACH THE WORLD</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Giving Made Easy with Impact</h2>
            <p className="mb-6 opacity-90">
              A theme made for Nonprofit and Education. Impact will allow you more time to focus on 
              what matters most, impacting the world.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button 
                className="bg-amber-400 hover:bg-amber-500 transition-colors text-white px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate Now
              </motion.button>
              <motion.button 
                className="border border-white hover:bg-white hover:text-[#2D2142] transition-colors text-white px-6 py-3 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Partner
              </motion.button>
            </div>

            {/* <div className="mt-12">
              <p className="text-sm mb-4">As seen on:</p>
              <div className="flex flex-wrap gap-6">
                <div className="text-white font-semibold">impact</div>
                <div className="text-white font-semibold">impact</div>
                <div className="text-white font-semibold">impact</div>
              </div>
            </div> */}
          </motion.div>

          <motion.div 
            className="md:w-1/2 mt-12 md:mt-0 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://cdn.pixabay.com/photo/2015/06/22/08/35/child-817364_1280.jpg" 
                alt="Children smiling" 
                className="rounded-lg object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 to-transparent"></div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full opacity-50"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-30"
                animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 -right-8 w-12 h-12 bg-green-400 rounded-full opacity-40"
                animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 text-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-12">OUR IMPACT IN THE LAST YEAR</h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
          >
            {/* Year Founded */}
            <motion.div className="text-center" variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <motion.div 
                className="inline-flex items-center justify-center p-4 bg-purple-100 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1, rotate: [0, 5, 0] } : {}}
                transition={{ duration: 0.5, delay: 0, ease: "backOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <motion.div 
                className="text-4xl font-bold text-[#2D2142] mb-2"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {counters.year}
              </motion.div>
              <motion.p 
                className="text-gray-500"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Your Amazing Stat Goes Here
              </motion.p>
            </motion.div>

            {/* Water Provided */}
            <motion.div className="text-center" variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <motion.div 
                className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1, rotate: [0, 5, 0] } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </motion.div>
              <motion.div 
                className="text-4xl font-bold text-[#2D2142] mb-2"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {counters.water}k
              </motion.div>
              <motion.p 
                className="text-gray-500"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Your Amazing Stat Goes Here
              </motion.p>
            </motion.div>

            {/* Programs */}
            <motion.div className="text-center" variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <motion.div 
                className="inline-flex items-center justify-center p-4 bg-amber-100 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1, rotate: [0, 5, 0] } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </motion.div>
              <motion.div 
                className="text-4xl font-bold text-[#2D2142] mb-2"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {counters.programs}+
              </motion.div>
              <motion.p 
                className="text-gray-500"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Your Amazing Stat Goes Here
              </motion.p>
            </motion.div>

            {/* Children Helped */}
            <motion.div className="text-center" variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <motion.div 
                className="inline-flex items-center justify-center p-4 bg-green-100 rounded-full mb-4"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1, rotate: [0, 5, 0] } : {}}
                transition={{ duration: 0.5, delay: 0.4, ease: "backOut" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.div>
              <motion.div 
                className="text-4xl font-bold text-[#2D2142] mb-2"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {counters.children}+
              </motion.div>
              <motion.p 
                className="text-gray-500"
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Your Amazing Stat Goes Here
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    
      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 md:pr-12 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#2D2142] mb-4">
                More time to focus on what matters most, impacting the world around you.
              </h3>
              <p className="text-gray-600 mb-6">
                At Joyful Minds, we&apos;re dedicated to enriching the lives of children in society. It is our mission to fulfill their needs, helping them thrive and flourish. Our organization is wholeheartedly dedicated to brightening the lives of children from diverse backgrounds across society.
              </p>
              <p className="text-gray-600 mb-6">
                We are driven by an unwavering determination to empower these young minds, creating a safe, joyful, and nurturing environment for their growth and development.
              </p>
            </motion.div>

            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://cdn.pixabay.com/photo/2020/10/24/03/10/pottery-5680464_1280.jpg" 
                alt="Children playing" 
                className="rounded-lg shadow-xl w-full object-cover h-80"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center"
          >
            {/* Text Content */}
            <motion.div
              custom={0}
              variants={fadeUp}
              className="md:w-1/2 md:pl-12 mb-8 md:mb-0"
            >
              <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2">OUR MISSION</h4>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2D2142] mb-4">
                Built for Nonprofit and Education
              </h3>
              <p className="text-gray-600 mb-6">
                Our mission at Joyful Minds is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support...
              </p>
              <p className="text-gray-600 mb-6">
                Our ultimate goal is to enable every child to blossom into a joyful, well-rounded individual...
              </p>

              {/* Values */}
              <motion.div custom={1} variants={fadeUp} className="mt-8">
                <h5 className="text-lg font-semibold mb-2 text-gray-700">Our Values:</h5>
                <ul className="text-gray-600 space-y-2">
                  {[
                    "Empathy: We approach each child cautiously and with understanding.",
                    "Transparency: We believe in honesty and accountability...",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586..." clipRule="evenodd" />
                      </svg>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Progress */}
              <motion.div custom={2} variants={fadeUp} className="mt-8 flex gap-4">
                <div className="w-full md:w-64">
                  <div className="mb-2 flex justify-between">
                    <span className="text-sm font-medium text-gray-700">Raised</span>
                    <span className="text-sm font-medium text-gray-700">Goal</span>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span className="text-sm font-medium text-gray-700">$24,000</span>
                    <span className="text-sm font-medium text-gray-700">$50,000</span>
                  </div>
                </div>
              </motion.div>

              {/* Buttons */}
              <motion.div custom={3} variants={fadeUp} className="mt-6 flex gap-4">
                <button className="bg-amber-400 hover:bg-amber-500 transition-colors text-white px-6 py-3 rounded-full font-medium">
                  Donate Now
                </button>
                <button className="border border-[#2D2142] hover:bg-[#2D2142] hover:text-white transition-colors text-[#2D2142] px-6 py-3 rounded-full font-medium">
                  Learn More
                </button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              custom={1}
              variants={fadeUp}
              className="md:w-1/2 relative"
            >
              <div className="rounded-full border-8 border-white shadow-xl overflow-hidden relative max-w-md mx-auto">
                <img
                  src="https://cdn.pixabay.com/photo/2017/10/03/19/53/kids-2813848_1280.jpg"
                  alt="Child smiling"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 z-0"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-30 z-0"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Around You */}
      <section className="py-16 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-2 text-center">
        OUR MISSION
      </h4>
      <h3 className="text-3xl md:text-4xl font-bold text-[#2D2142] mb-12 text-center">
        Impact the World Around You
      </h3>
    </motion.div>

    <div className="flex flex-col md:flex-row items-center">
      {/* Image with motion */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0 relative z-10"
        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", type: "spring" }}
      >
        <div className="rounded-full border-8 border-white shadow-xl overflow-hidden relative max-w-md mx-auto">
          <img 
            src="https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg"
            alt="Child smiling" 
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Decorative floating circles */}
        <motion.div
          className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-400 rounded-full opacity-20 blur-xl"
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute -top-4 -left-4 w-16 h-16 bg-amber-500 rounded-full opacity-30 blur-xl"
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="md:w-1/2 md:pl-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="text-gray-600 mb-6">
          We are currently situated in 20 states and 3 Union Territories of India and have impacted the lives of over 48,000 children positively with the collective efforts of our team, volunteers and donors.
        </p>
        <p className="text-gray-600 mb-6">
          At Joyful Minds, we firmly believe that positive change requires collective efforts. We sincerely invite you to join hands with us in nurturing young minds and shaping the future of our work. Your support, in any capacity, will make a significant difference.
        </p>

        {/* Progress Bar */}
        <motion.div
          className="mt-8 w-full md:w-64"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="mb-2 flex justify-between">
            <span className="text-sm font-medium text-gray-700">Raised</span>
            <span className="text-sm font-medium text-gray-700">Goal</span>
          </div>
          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "75%" }}
              transition={{ duration: 2, type: "spring", bounce: 0.4 }}
            />
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-sm font-medium text-gray-700">$45,000</span>
            <span className="text-sm font-medium text-gray-700">$60,000</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="mt-6 flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-400 hover:bg-amber-500 transition-colors text-white px-6 py-3 rounded-full font-medium"
          >
            Donate Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#2D2142] hover:bg-[#2D2142] hover:text-white transition-colors text-[#2D2142] px-6 py-3 rounded-full font-medium"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

  {/* Testimonials Section */}
  <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h3 
            className="text-center text-2xl md:text-3xl font-bold text-[#2D2142] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What the world thinks about us
          </motion.h3>

          <div className="max-w-3xl mx-auto relative">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl text-amber-400 absolute top-4 left-4">&quot;</div>
              <div className="pt-6">
                <motion.p 
                  className="text-gray-600 text-lg mb-6"
                  key={activeTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonials[activeTestimonial].quote}
                </motion.p>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonials[activeTestimonial].author}</h4>
                    <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].designation}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="flex justify-end mt-6 space-x-2">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h3 
            className="text-center text-2xl md:text-3xl font-bold text-[#2D2142] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Partners
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src="https://cdn.pixabay.com/photo/2012/11/07/07/42/facebook-65051_1280.jpg" alt="Partner 1" className="h-12" />
            </motion.div>
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src="https://cdn.pixabay.com/photo/2018/02/15/15/13/architecture-3155498_1280.jpg" alt="Partner 2" className="h-12" />
            </motion.div>
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src="https://cdn.pixabay.com/photo/2016/03/25/22/57/mustang-1279782_1280.jpg" alt="Partner 3" className="h-12" />
            </motion.div>
            <motion.div 
              className="grayscale hover:grayscale-0 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <img src="https://cdn.pixabay.com/photo/2015/10/29/08/17/building-1011876_1280.jpg" alt="Partner 4" className="h-12" />
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* These Things Matter */}
      <section className="relative py-16 bg-[#2D2142] text-white overflow-hidden">
      {/* Spinning Gradient Orb */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-spin-slow opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Glitch Header */}
        <motion.h4
          className="text-sm uppercase tracking-wider text-gray-300 mb-2 glitch"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          OUR MISSION
        </motion.h4>

        <motion.h3
          className="text-3xl md:text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          These Things Matter to Us
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            className="bg-[#3D2F54] rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/01/12/04/girls-2564803_1280.jpg"
                alt="Education program"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Education for All</h4>
            <p className="text-gray-300 mb-4">
              We believe every child deserves access to quality education regardless of their socio-economic background.
            </p>
            <button className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#3D2F54] rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg"
                alt="Healthcare program"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Sponsor a Child</h4>
            <p className="text-gray-300 mb-4">
              Your sponsorship can change a child's life by providing education, healthcare, and basic necessities.
            </p>
            <button className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-[#3D2F54] rounded-lg p-6"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            whileHover={{ rotate: 3, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2019/07/14/15/42/mission-beach-4337407_1280.jpg"
                alt="Pledge for a cause"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2">Pledge For A Cause</h4>
            <p className="text-gray-300 mb-4">
              Join our mission by pledging for a specific cause that resonates with your values and vision.
            </p>
            <button className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>

            {/* Footer */}
            <footer className="bg-[#2D2142] text-gray-300 pt-16 pb-10">
  <motion.div
    className="container mx-auto px-4 sm:px-6 lg:px-8"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { when: "beforeChildren" } },
    }}
  >
    {/* Footer Grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Brand Info */}
      <div>
        <h2 className="text-2xl font-bold text-amber-400 mb-4">Joyful Minds</h2>
        <p className="text-gray-400 text-sm mb-4">
          Empowering individuals through knowledge, kindness, and joyful experiences. Igniting potential through learning and empathy.
        </p>
        <div className="flex space-x-4 mt-4">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon) => (
            <motion.a
              key={icon}
              href="#"
              className="text-gray-400 hover:text-amber-400 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <i className={`fab fa-${icon} text-lg`}></i>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          {['Home', 'About Us', 'Initiatives', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ x: 6 }}
              className="transition-all duration-300 hover:text-amber-400"
            >
              <a href="#">{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
        <ul className="space-y-3 text-sm">
          {['Blog', 'FAQs', 'Privacy Policy', 'Terms of Service'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ x: 6 }}
              className="transition-all duration-300 hover:text-amber-400"
            >
              <a href="#">{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
        <p className="text-sm mb-2">
          Email: <a href="mailto:hello@joyfulminds.org" className="hover:text-amber-400">hello@joyfulminds.org</a>
        </p>
        <p className="text-sm mb-2">
          Phone: <a href="tel:+1234567890" className="hover:text-amber-400">+1 (234) 567-890</a>
        </p>
        <p className="text-sm">Location: 123 Kindness Street, Thought City</p>
      </div>
    </motion.div>

    {/* Divider and Bottom Text */}
    <motion.div
      className="mt-12 border-t border-[#3D2F54] pt-6 text-center"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="text-amber-400 font-semibold">Joyful Minds</span>. All rights reserved.
      </p>
    </motion.div>
  </motion.div>
</footer>

            </div>
            )
            }