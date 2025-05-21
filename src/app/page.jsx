'use client'
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useAnimation, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0.5]);
  
  // Animation controls
  const controlsHero = useAnimation();
  const controlsAbout = useAnimation();
  const controlsEngagement = useAnimation();
  const controlsCampaigns = useAnimation();
  const controlsPartners = useAnimation();
  const controlsTestimonials = useAnimation();
  const controlsFooter = useAnimation();

  // Refs for sections
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [engagementRef, engagementInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [campaignsRef, campaignsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialRef, testimonialInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (heroInView) controlsHero.start('visible');
    if (aboutInView) controlsAbout.start('visible');
    if (engagementInView) controlsEngagement.start('visible');
    if (campaignsInView) controlsCampaigns.start('visible');
    if (partnersInView) controlsPartners.start('visible');
    if (testimonialInView) controlsTestimonials.start('visible');
    if (footerInView) controlsFooter.start('visible');
  }, [
    heroInView, aboutInView, engagementInView, campaignsInView, 
    partnersInView, testimonialInView, footerInView,
    controlsHero, controlsAbout, controlsEngagement, controlsCampaigns,
    controlsPartners, controlsTestimonials, controlsFooter
  ]);
  const cursorRef = useRef(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorScale = useMotionValue(1);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const scaleSpring = useSpring(cursorScale, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleHover = (scale, text = "") => {
      cursorScale.set(scale);
      if (cursorRef.current) {
        cursorRef.current.querySelector('span').textContent = text;
      }
    };

    const handleLeave = () => {
      cursorScale.set(1);
      if (cursorRef.current) {
        cursorRef.current.querySelector('span').textContent = "";
      }
    };

    window.addEventListener('mousemove', moveCursor);

    // Add hover effects to interactive elements
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => handleHover(1, "→"));
      link.addEventListener('mouseleave', handleLeave);
    });

    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => handleHover(1, "👆"));
      button.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      links.forEach(link => {
        link.removeEventListener('mouseenter', () => handleHover(2, "→"));
        link.removeEventListener('mouseleave', handleLeave);
      });
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => handleHover(3, "👆"));
        button.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, [cursorX, cursorY, cursorScale]);
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // const containerVariants = {
  //   hidden: {},
  //   show: {
  //     transition: {
  //       staggerChildren: 0.25,
  //       delayChildren: 0.3,
  //     },
  //   },
  // };
  
  // const cardVariants = {
  //   hidden: { 
  //     opacity: 0, 
  //     y: 100, 
  //     rotateY: 90, 
  //     scale: 0.8 
  //   },
  //   show: { 
  //     opacity: 1, 
  //     y: 0, 
  //     rotateY: 0, 
  //     scale: 1,
  //     transition: {
  //       type: "spring",
  //       stiffness: 100,
  //       damping: 15
  //     }
  //   },
  //   hover: {
  //     y: -10,
  //     rotateZ: 2,
  //     boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
  //     transition: { type: "spring", stiffness: 200 },
  //   },
  // };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        ease: "easeOut",
      },
    },
  };
  
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateZ: -10,
      scale: 0.8,
      filter: "blur(4px)",
    },
    show: {
      opacity: 1,
      y: 0,
      rotateZ: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.6,
      },
    },
    hover: {
      y: -12,
      rotateZ: 2,
      scale: 1.03,
      boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 18,
      },
    },
  };

  const volunteers = [
    { id: 1, name: "Leslie Alexander", role: "Senior Manager", image: "https://cdn.pixabay.com/photo/2017/12/08/11/53/event-party-3005668_1280.jpg" },
    { id: 2, name: "Dianne Russell", role: "Junior Manager", image: "https://cdn.pixabay.com/photo/2016/11/29/13/08/skateboard-1869727_1280.jpg" },
    { id: 3, name: "Ralph Edwards", role: "Junior Manager", image: "https://cdn.pixabay.com/photo/2017/03/27/21/31/money-2180330_1280.jpg" },
    { id: 4, name: "Annette Black", role: "Junior Manager", image: "https://cdn.pixabay.com/photo/2016/02/13/04/28/new-steps-in-peru-1197329_1280.jpg" },
  ];

  const campaigns = [
    {
      id: 1,
      title: "Suri Harmony School Support",
      description: "Help young students receive an equal chance of exceptional education and development.",
      image: "https://cdn.pixabay.com/photo/2024/10/22/07/09/kids-9138810_1280.jpg",
      raised: 57000,
      goal: 65000,
      progress: 88
    },
    {
      id: 2,
      title: "Joyful Minds Medical Volunteers",
      description: "At Joyful Minds, we aim to provide all underprivileged children with necessary medical care.",
      image: "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg",
      raised: 30000,
      goal: 50000,
      progress: 60
    },
    {
      id: 3,
      title: "Elevating Minds, Empowering Lives",
      description: "Educating children to prepare them for a brighter future.",
      image: "https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_1280.jpg",
      raised: 40000,
      goal: 60000,
      progress: 67
    },
    {
      id: 4,
      title: "Empowering Children's Learnings",
      description: "We are dedicated to providing children a high-quality education that prepares them for big, bright futures.",
      image: "https://cdn.pixabay.com/photo/2016/11/21/12/30/new-years-eve-1845065_1280.jpg",
      raised: 115000,
      goal: 150000,
      progress: 77
    }
  ];

  const initiatives = [
    { id: 1, title: "Healthcare Outreach", description: "Ensuring healthcare reaches even the most remote communities" },
    { id: 2, title: "Elderly Care", description: "Looking after those who built our future with dignity and respect" },
    { id: 3, title: "Clean Water Access", description: "Making clean water available to underserved communities" },
    { id: 4, title: "Food Security", description: "Ensuring nutrition needs are met for vulnerable populations" }
  ];

  const categories = [
    { id: 1, title: "Improving Health", description: "Creating a healthier life for young members of our community", icon: "/health.svg" },
    { id: 2, title: "Food Banks", description: "Providing essential food support to underprivileged families around the world", icon: "/food.svg" },
    { id: 3, title: "Education For All", description: "Providing quality education to underprivileged children in need", icon: "/education.svg" }
  ];

  const engagementTracks = [
    { id: 1, title: "Immersion", icon: "👥" },
    { id: 2, title: "Learning", icon: "☕" },
    { id: 3, title: "Impact", icon: "🎯" }
  ];

  return (
    <div className="bg-amber-50 min-h-screen">
      <Head>
        <title>Joyful Minds - A Little Help, A Big Change</title>
        <meta name="description" content="Providing nutritious food to needy ones" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Navigation */}
      {/* Custom Mouse Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 pointer-events-none z-50 mix-blend-difference"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: scaleSpring
        }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-xs text-white font-medium" />
      </motion.div>
      
      {/* Cursor Trail */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-4 h-4 rounded-full bg-white/20 backdrop-blur-sm pointer-events-none z-40 mix-blend-difference"
          style={{
            translateX: useSpring(cursorX, { damping: 30, stiffness: 200, mass: 0.1 + i * 0.1 }),
            translateY: useSpring(cursorY, { damping: 30, stiffness: 200, mass: 0.1 + i * 0.1 }),
            opacity: 1 - (i * 0.2),
            scale: 1 - (i * 0.15)
          }}
          transition={{ delay: i * 0.01 }}
        />
      ))}

      {/* Your Existing Navigation and Hero Section */}
      <nav className="relative z-10 bg-amber-50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <motion.div 
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mr-2 text-2xl font-bold text-green-700">Joyful Minds</div>
                <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-xl">🧠</span>
                </div>
              </motion.div>
              
              <div className="hidden md:flex ml-10 space-x-6">
                <motion.a 
                  href="#about" 
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </motion.a>
                <motion.a 
                  href="#missions" 
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Missions
                </motion.a>
                <motion.a 
                  href="#campaigns" 
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Campaigns
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="text-gray-700 hover:text-green-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </div>
            </div>
            
            <div className="flex items-center">
              <motion.button 
                className="hidden md:block bg-amber-400 hover:bg-amber-500 text-white py-2 px-6 rounded-full font-semibold transition-colors duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                DONATE NOW
              </motion.button>
              
              <motion.button 
                className="md:hidden text-gray-700"
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative pt-16 pb-24 overflow-hidden"
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-amber-100 opacity-50 z-0"
          style={{ y: y1, opacity: opacity1 }}
        />
        
        <div className="relative z-1 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between"
            initial="hidden"
            animate={controlsHero}
            variants={staggerChildren}
          >
            <motion.div 
              className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8"
              variants={fadeInUpVariant}
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm text-green-700 font-medium mb-2"
              >
                ALWAYS READY FOR OUR JOURNEY
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.3 }
                  }
                }}
              >
                A Little Help A Big
              </motion.h1>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-400"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.5 }
                  }
                }}
              >
                Change for <span className="text-green-700">Children</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.7 }
                  }
                }}
              >
                Providing Nutritious Food To Needy Ones and supporting education, healthcare, and emotional growth for all children.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, delay: 0.9 }
                  }
                }}
              >
                <motion.button 
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.15)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  JOIN US NOW
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
                <motion.button 
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 rounded-full font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  LEARN MORE
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2 relative"
              variants={fadeInUpVariant}
            >
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 to-green-400/30 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                <Image
                  src="https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg"
                  alt="Child education"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full text-green-700 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Children Helped</p>
                    <p className="font-bold text-gray-900">25,000+</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-full text-amber-700 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Years Active</p>
                    <p className="font-bold text-gray-900">25+</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg transition-shadow cursor-pointer"
            >
              <motion.div
                className="flex items-center justify-center w-14 h-14 bg-green-100 rounded-full mb-5"
                initial={{ rotate: -180 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 * index }}
              >
                <span className="text-2xl">
                  {index === 0 ? "🩺" : index === 1 ? "🍎" : "📚"}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{category.description}</p>
              <motion.a
                href="#"
                className="inline-block mt-4 text-green-600 font-semibold hover:text-green-700"
                whileHover={{ x: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Learn More →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Optional background floating shapes for a more "crazy" vibe */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full opacity-30 blur-2xl"
        initial={{ x: -200, y: -100, scale: 0 }}
        animate={{ x: 100, y: 150, scale: 1.5 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
    </section>

      {/* About Section */}
     {/* About Section */}
<section id="about" ref={aboutRef} className="py-24 bg-gradient-to-b from-amber-50 to-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="max-w-4xl mx-auto text-center mb-16"
      initial="hidden"
      animate={controlsAbout}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99]
          }
        }
      }}
    >
      <motion.h2 
        className="text-4xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        About <span className="text-green-600">Joyful Minds</span>
      </motion.h2>
      
      <motion.div
        className="w-32 h-1.5 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-10 rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />
      
      <motion.div
        className="grid gap-8 text-left"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <motion.p 
          className="text-lg text-gray-700 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }
          }}
        >
          At <span className="font-semibold text-green-600">Joyful Minds</span>, we firmly believe in the unique and inherent potential of every child. We understand that each child has their own individual needs, and it is our mission to fulfill those needs, helping them thrive and flourish.
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-700 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                delay: 0.1,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }
          }}
        >
          Our organization is wholeheartedly dedicated to brightening the lives of children from diverse backgrounds across society. We are driven by an unwavering determination to empower these young minds, creating a safe, joyful, and nurturing environment for their overall development.
        </motion.p>
        
        <motion.p 
          className="text-lg text-gray-700 leading-relaxed"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6,
                delay: 0.2,
                ease: [0.6, -0.05, 0.01, 0.99]
              }
            }
          }}
        >
          Our mission is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support. We are dedicated to creating a nurturing environment where each child feels safe, cherished, and empowered.
        </motion.p>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Campaigns Section */}
      <section id="campaigns" ref={campaignsRef} className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            animate={controlsCampaigns}
            variants={fadeInUpVariant}
          >
            <h2 className="text-3xl text-gray-700 font-bold mb-6">Campaigns in Focus</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={controlsCampaigns}
            variants={staggerChildren}
          >
            {campaigns.map((campaign, index) => (
              <motion.div
                key={campaign.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUpVariant}
                whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="relative h-48 text-gray-700">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-gray-700">{campaign.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{campaign.description}</p>
                  
                  <div className="mb-4">
                    <div className="relative w-full h-2 bg-gray-200 rounded-full">
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-green-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${campaign.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-gray-600">₹ {campaign.raised.toLocaleString()}</span>
                      <span className="text-sm text-gray-500">{campaign.progress}%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span>Goal: ₹ {campaign.goal.toLocaleString()}</span>
                    </div>
                    <motion.button 
                      className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 text-sm rounded-full font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Donate
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <motion.button 
              className="bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-full font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              SEE MORE
            </motion.button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="relative rounded-xl overflow-hidden bg-green-700 text-white p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="https://cdn.pixabay.com/photo/2016/11/22/19/25/hands-1850120_1280.jpg"
                  alt="Join Volunteer"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Join Us Volunteer</h3>
                <p className="mb-6"></p></div>
            </motion.div>
            
            <motion.div 
              className="relative rounded-xl overflow-hidden bg-amber-500 text-white p-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 opacity-20">
                <Image
                  src="https://cdn.pixabay.com/photo/2017/03/27/21/31/money-2180330_1280.jpg"
                  alt="Become Volunteer"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Become Volunteer</h3>
                <p className="mb-6">Education, healthcare, and support — our volunteer network makes all the difference. Join Joyful Minds to bring hope, healing, and opportunity to children in need around the world.</p>
                <motion.button 
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full font-semibold transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Team/Volunteers Section */}
       <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-700">Meet the Dedicated Team</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteers.map((volunteer, index) => (
              <motion.div
                key={volunteer.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={volunteer.image}
                    alt={volunteer.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                    <div className="bg-white/90 py-1 px-3 rounded-full text-sm font-medium text-green-700">
                      VOLUNTEER
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-700">{volunteer.name}</h3>
                  <p className="text-gray-600 text-sm">{volunteer.role}</p>
                  <div className="flex justify-center mt-4 space-x-3">
                    <motion.a 
                      href="#" 
                      className="text-gray-500 hover:text-green-600"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-gray-500 hover:text-green-600"
                      whileHover={{ scale: 1.2 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <motion.button 
              className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-6 rounded-full font-semibold text-sm transition-colors duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              + View Team Members
            </motion.button>
          </div>
        </div>
      </section>

{/* Initiatives Section */}
<section ref={partnersRef} className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-12"
            initial="hidden"
            animate={controlsPartners}
            variants={fadeInUpVariant}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-700">Transforming Lives Through</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={controlsPartners}
            variants={staggerChildren}
          >
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.id}
                className="border border-gray-200 rounded-lg p-6 hover:border-green-500 transition-colors duration-300"
                variants={fadeInUpVariant}
                whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.05)" }}
              >
                <div className="flex items-center justify-center mb-4">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {index === 0 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      ) : index === 1 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      ) : index === 2 ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      )}
                    </svg>
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center text-gray-700">{initiative.title}</h3>
                <p className="text-gray-600 text-sm text-center mb-4">{initiative.description}</p>
                <div className="text-center">
                  <motion.a
                    href="#"
                    className="text-green-600 font-medium hover:text-green-700 text-sm inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
<footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Brand Info */}
      <div>
      <div className="mr-2 text-2xl font-bold text-green-700 mb-4">Joyful Minds</div> 
             
        <p className="text-gray-600 text-sm mb-4">
          Empowering individuals through knowledge, kindness, and joyful experiences. We believe in igniting potential through learning and empathy.
        </p>
        <div className="flex space-x-4 mt-4">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((icon, index) => (
            <motion.a
              key={icon}
              href="#"
              className="text-gray-500 hover:text-green-600 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <i className={`fab fa-${icon} text-lg`}></i>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Quick Links</h4>
        <ul className="space-y-3 text-sm text-gray-600">
          {['Home', 'About Us', 'Initiatives', 'Contact'].map((item, idx) => (
            <motion.li
              key={item}
              whileHover={{ x: 5 }}
              className="transition-all duration-300 hover:text-green-600"
            >
              <a href="#">{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Resources</h4>
        <ul className="space-y-3 text-sm text-gray-600">
          {['Blog', 'FAQs', 'Privacy Policy', 'Terms of Service'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ x: 5 }}
              className="transition-all duration-300 hover:text-green-600"
            >
              <a href="#">{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-4">Contact Us</h4>
        <p className="text-gray-600 text-sm mb-2">Email: <a href="mailto:hello@joyfulminds.org" className="hover:text-green-600">hello@joyfulminds.org</a></p>
        <p className="text-gray-600 text-sm mb-2">Phone: <a href="tel:+1234567890" className="hover:text-green-600">+1 (234) 567-890</a></p>
        <p className="text-gray-600 text-sm">Location: 123 Kindness Street, Thought City</p>
      </div>
    </motion.div>

    {/* Divider */}
    <motion.div
      className="mt-12 border-t border-gray-200 pt-6 text-center"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Joyful Minds. All rights reserved.</p>
    </motion.div>
  </motion.div>
</footer>


      </div>
  )
}
