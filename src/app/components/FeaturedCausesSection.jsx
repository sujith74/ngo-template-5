'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowForwardIos } from '@mui/icons-material';

export function FeaturedCausesSection() {
  const pathname = usePathname();
  const [showAll, setShowAll] = useState(false);

  const causesData = [
    {
      title: "Education for All",
      description: "Providing quality education to underprivileged children through schools and learning centers.",
      image: "https://cdn.pixabay.com/photo/2015/01/18/13/31/children-602967_1280.jpg",
      raised: 14000,
      goal: 25000,
      category: "Education"
    },
    {
      title: "Clean Water Project",
      description: "Building wells and water purification systems in communities without clean water access.",
      image: "https://cdn.pixabay.com/photo/2019/12/18/13/56/glasses-4704055_1280.jpg",
      raised: 18000,
      goal: 24000,
      category: "Environment"
    },
    {
      title: "Nutrition Program",
      description: "Ensuring children receive proper nutrition through school meal programs and food banks.",
      image: "https://cdn.pixabay.com/photo/2020/03/02/02/51/children-4894710_1280.jpg",
      raised: 21250,
      goal: 25000,
      category: "Health"
    },
    {
      title: "Women Empowerment",
      description: "Vocational training and education programs for women in rural communities.",
      image: "https://cdn.pixabay.com/photo/2015/01/18/13/31/children-602967_1280.jpg",
      raised: 18500,
      goal: 30000,
      category: "Women"
    },
    {
      title: "Disaster Relief",
      description: "Emergency response and recovery support for communities affected by natural disasters.",
      image: "https://cdn.pixabay.com/photo/2019/12/18/13/56/glasses-4704055_1280.jpg",
      raised: 42000,
      goal: 60000,
      category: "Emergency"
    },
    {
      title: "Elderly Care",
      description: "Supporting senior citizens with healthcare, nutrition, and social activities.",
      image: "https://cdn.pixabay.com/photo/2020/03/02/02/51/children-4894710_1280.jpg",
      raised: 15000,
      goal: 25000,
      category: "Community"
    }
  ];

  const displayedCauses = showAll || pathname === '/initiatives' ? causesData : causesData.slice(0, 3);

  const handleSeeMore = () => {
    if (pathname === '/initiatives') {
      setShowAll(true);
    } else {
      window.location.href = '/initiatives';
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
          {displayedCauses.map((cause, index) => (
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
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {cause.category}
                </span>
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
                      className="bg-amber-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
                
                <a href="https://campaign-template-2.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                    Support This Cause
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {(!showAll && pathname !== '/initiatives') && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={handleSeeMore}
              className="inline-flex items-center text-amber-500 hover:text-amber-600 font-semibold transition duration-300 group"
            >
              See more
              <ArrowForwardIos className="ml-1 text-sm transform rotate-0 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}