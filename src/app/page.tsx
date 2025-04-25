'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PlayArrow, People, Handshake, MonetizationOn, ArrowForward, ArrowForwardIos, RestaurantMenu, School } from '@mui/icons-material';
import Head from 'next/head';
import Image from 'next/image';
import {
  CreditCard,
  ShieldCheck,
  DollarSign,
  Landmark,
  BadgeDollarSign,
} from "lucide-react";
import { ReactNode } from 'react';



interface AnimatedSectionProps {
  children: ReactNode;  // Typing for children
  delay?: number;       // Optional delay prop with a default value
  className?: string;   // Optional className prop with a default value
}

const AnimatedSection = ({ children, delay = 0, className = '' }: AnimatedSectionProps) => {
  const sectionControls = useAnimation();
  const [sectionRef, sectionInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (sectionInView) {
      sectionControls.start('visible');
    }
  }, [sectionControls, sectionInView]);

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={sectionControls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.8,
            delay: delay * 0.15,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface FloatingButtonProps {
  children: ReactNode; // Typing for children
  className?: string;   // Optional className prop with a default value
}

const FloatingButton = ({ children, className = '' }: FloatingButtonProps) => (
  <motion.button
    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
    whileTap={{ scale: 0.98 }}
    className={`${className} rounded-lg transition-all duration-300`}
  >
    {children}
  </motion.button>
);

const JoyfulMindsWebsite = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);



  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Head>
        <title>Joyful Minds | Transforming Children&apos;s Lives</title>
        <meta name="description" content="Joyful Minds is dedicated to improving the lives of underprivileged children through education, healthcare, and community support." />
      </Head>

      {/* Premium Navigation Bar */}
      <AnimatedSection delay={0}>
        <nav className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 py-3 sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <motion.div 
            ref={ref}  // Attach the ref here
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-2"
            >
              <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-amber-400">
                <Image 
                  src="https://cdn.pixabay.com/photo/2022/08/21/03/48/smile-7400381_1280.jpg" 
                  alt="Joyful Minds Logo"
                  fill
                  objectFit="object-cover"
                />
              </div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Joyful Minds
              </h1>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Causes', 'Events', 'Blog', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-amber-500 dark:hover:text-amber-400 font-medium text-sm uppercase tracking-wider transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-4"
            >
              <FloatingButton className="hidden md:block bg-gradient-to-r from-amber-400 to-amber-600 text-white px-6 py-2 font-medium">
                Donate Now
              </FloatingButton>
              <button className="md:hidden text-gray-700 dark:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </motion.div>
          </div>
        </nav>
      </AnimatedSection>

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen max-h-[900px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.pixabay.com/photo/2020/10/05/20/03/boys-5630669_1280.jpg"
            alt="Happy children"
            fill
            objectFit="cover"
            className="opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <AnimatedSection delay={0.5} className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Creating <span className="text-amber-400">Brighter</span> Futures for Children
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Join us in our mission to provide education, healthcare, and hope to underprivileged children worldwide.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <FloatingButton className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 font-semibold text-lg shadow-lg">
                Donate Now
              </FloatingButton>
              <FloatingButton className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-3 font-medium text-lg flex items-center justify-center">
                <PlayArrow className="mr-2" /> Our Story
              </FloatingButton>
            </motion.div>
          </AnimatedSection>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Impact Stats Floating Bar */}
      <AnimatedSection delay={1.5}>
        <div className="relative z-20 -mt-12">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { value: "10K+", label: "Children Helped", icon: "👶" },
                { value: "120+", label: "Communities", icon: "🌍" },
                { value: "44K", label: "Vaccinations", icon: "💉" },
                { value: "1.2M", label: "Meals Served", icon: "🍲" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <h3 className="text-3xl font-bold text-amber-500 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Mission Section */}
      <AnimatedSection delay={2} className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2 relative"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="https://cdn.pixabay.com/photo/2016/11/14/03/46/girl-1822525_1280.jpg"
                  alt="Our mission"
                 fill
                  objectFit="cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 w-2/3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-lg mb-2">Since 2015</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">We&apos;ve been transforming lives across multiple communities</p>
              </motion.div>
            </motion.div>

            <div className="lg:w-1/2">
              <motion.span 
                className="inline-block text-amber-500 font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                OUR MISSION
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Empowering <span className="text-amber-500">Children</span> Through Education & Care
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Joyful Minds is dedicated to creating environments where children can thrive, learn, and grow. 
                Our holistic approach addresses education, nutrition, healthcare, and emotional well-being.
              </motion.p>
              
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { icon: <School className="text-amber-500" />, text: "Education Programs" },
                  { icon: <RestaurantMenu className="text-amber-500" />, text: "Nutrition Initiatives" },
                  { icon: "💉", text: "Healthcare Services" },
                  { icon: "🏠", text: "Safe Environments" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    whileHover={{ x: 5 }}
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <FloatingButton className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 font-semibold">
                  Learn More About Us
                </FloatingButton>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Causes */}
      <AnimatedSection delay={2.5} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block text-amber-500 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              OUR INITIATIVES
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured <span className="text-amber-500">Causes</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Each of our initiatives is carefully designed to address critical needs in the communities we serve.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Education for All",
                description: "Providing quality education to underprivileged children through schools and learning centers.",
                image: "https://cdn.pixabay.com/photo/2015/01/18/13/31/children-602967_1280.jpg",
                raised: 14000,
                goal: 25000
              },
              {
                title: "Clean Water Project",
                description: "Building wells and water purification systems in communities without clean water access.",
                image: "https://cdn.pixabay.com/photo/2019/12/18/13/56/glasses-4704055_1280.jpg",
                raised: 18000,
                goal: 24000
              },
              {
                title: "Nutrition Program",
                description: "Ensuring children receive proper nutrition through school meal programs and food banks.",
                image: "https://cdn.pixabay.com/photo/2020/03/02/02/51/children-4894710_1280.jpg",
                raised: 21250,
                goal: 25000
              }
            ].map((cause, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={cause.image}
                    alt={cause.title}
                    fill
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{cause.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{cause.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <span>Raised: ${cause.raised.toLocaleString()}</span>
                      <span>Goal: ${cause.goal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                  
                  <FloatingButton className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2">
                    Support This Cause
                  </FloatingButton>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
  className="mt-12 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  viewport={{ once: true }}
>
  <button className="inline-flex items-center text-amber-500 hover:text-amber-600 font-semibold transition duration-300">
    See more
    <ArrowForwardIos className="ml-1 text-sm transform rotate-0 transition-transform duration-300 group-hover:translate-x-1" />
  </button>
</motion.div>

        </div>
      </AnimatedSection>
      


      {/* How to Help Section */}
      <AnimatedSection delay={3} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block text-amber-500 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              GET INVOLVED
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ways You Can <span className="text-amber-500">Help</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MonetizationOn className="text-amber-500 text-4xl" />,
                title: "Make a Donation",
                description: "Your financial support directly funds our programs and initiatives.",
                action: "Donate Now"
              },
              {
                icon: <People className="text-amber-500 text-4xl" />,
                title: "Become a Volunteer",
                description: "Join our team and contribute your time and skills to make a difference.",
                action: "Join Us"
              },
              {
                icon: <Handshake className="text-amber-500 text-4xl" />,
                title: "Corporate Partnership",
                description: "Partner with us to create meaningful social impact through your business.",
                action: "Learn More"
              }
            ].map((way, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-amber-50 dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  {way.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">{way.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{way.description}</p>
                <FloatingButton className="text-amber-500 hover:text-amber-600 font-medium flex items-center">
                  {way.action} <ArrowForward className="ml-2" />
                </FloatingButton>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection delay={3.5} className="py-20 bg-amber-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block text-amber-500 font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              TESTIMONIALS
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              What People <span className="text-amber-500">Say</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                quote: "Seeing the direct impact of my donations through Joyful Minds has been incredibly rewarding. The transparency and dedication of this organization is unmatched.",
                name: "Sarah Johnson",
                role: "Monthly Donor",
                image: "https://randomuser.me/api/portraits/women/43.jpg"
              },
              {
                quote: "Volunteering with Joyful Minds has been one of the most fulfilling experiences of my life. The team's commitment to the children is truly inspiring.",
                name: "Michael Chen",
                role: "Volunteer",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-amber-400 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-amber-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic text-lg">&quot;{testimonial.quote}&quot;</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection delay={4} className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Make a <span className="text-gray-900">Difference?</span>
          </motion.h2>
          <motion.p 
            className="text-amber-100 text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Join our community of changemakers and help transform children&apos;s lives today.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FloatingButton className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 font-semibold text-lg shadow-lg">
              Donate Now
            </FloatingButton>
            <FloatingButton className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 font-medium text-lg border border-white/20">
              Become a Volunteer
            </FloatingButton>
          </motion.div>
        </div>
      </AnimatedSection>
{/* Footer */}
<AnimatedSection delay={4.5} className="bg-gray-900 text-white pt-16 pb-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* Brand Info */}
      <div>
        <div className="flex items-center mb-6">
          <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-amber-400 mr-2">
            <Image 
              src="https://cdn.pixabay.com/photo/2022/08/21/03/48/smile-7400381_1280.jpg" 
              alt="Joyful Minds Logo"
              fill
              objectFit="cover"
            />
          </div>
          <h3 className="font-bold text-xl text-white">Joyful <span className="text-amber-400">Minds</span></h3>
        </div>
        <p className="text-gray-400 mb-6">
          Providing quality support for children across communities, creating safe and nurturing environments for their development.
        </p>
        <div className="flex space-x-4">
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
            <motion.a 
              key={index}
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-amber-500 transition-all"
              whileHover={{ y: -3 }}
            >
              <span className="sr-only">{social}</span>
              <span className="text-white">{social.charAt(0).toUpperCase()}</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
        <ul className="space-y-3">
          {['Home', 'About Us', 'Our Causes', 'Events', 'Blog', 'Contact'].map((link, index) => (
            <motion.li key={index} whileHover={{ x: 5 }}>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">{link}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Programs */}
      <div>
        <h4 className="text-lg font-bold mb-6 text-white">Our Programs</h4>
        <ul className="space-y-3">
          {['Education', 'Healthcare', 'Nutrition', 'Shelter', 'Emergency Relief', 'Community Development'].map((program, index) => (
            <motion.li key={index} whileHover={{ x: 5 }}>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">{program}</a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-400">206, Sankalp Nagar, Wathoda Layout, Nagpur - 440008</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-gray-400">+91 8767432610</span>
          </li>
          <li className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0v-2m0 2v2m8-2a4 4 0 10-8 0 4 4 0 008 0z" />
            </svg>
            <span className="text-gray-400">joyfulminds@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer bottom */}
    <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
      <p>&copy; {new Date().getFullYear()} Joyful Minds. All rights reserved.</p>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        {/* PCI DSS Compliant */}
        <div className="flex items-center space-x-1">
          <ShieldCheck className="h-4 w-4 text-green-500" />
          <span>PCI DSS Compliant</span>
        </div>

        {/* Payment Icons */}
        <div className="icon-container">
    <span title="Visa">
      <CreditCard className="h-4 w-4" />
    </span>
    <span title="MasterCard">
      <Landmark className="h-4 w-4" />
    </span>
    <span title="Amex">
      <BadgeDollarSign className="h-4 w-4" />
    </span>
    <span title="PayPal">
      <DollarSign className="h-4 w-4" />
    </span>
  </div>
      </div>
    </div>
  </div>
</AnimatedSection>
</div>

  );
};

// ... your component code

export default JoyfulMindsWebsite;
