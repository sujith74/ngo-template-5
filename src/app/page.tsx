"use client";

import React from 'react';
import { useState, useEffect,useRef } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView,useAnimation  } from 'framer-motion';
import { ChevronLeft, ChevronRight,DollarSign, Users, Heart } from 'lucide-react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// Icons
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PublicIcon from '@mui/icons-material/Public';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SchoolIcon from '@mui/icons-material/School';
import OpacityIcon from '@mui/icons-material/Opacity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

// Custom styled components
// const GreenButton = styled(Button)(({  }) => ({
//   backgroundColor: '#36b37e',
//   color: 'white',
//   borderRadius: '30px',
//   padding: '10px 24px',
//   textTransform: 'none',
//   fontWeight: '600',
//   '&:hover': {
//     backgroundColor: '#2d9969',
//   },
// }));

const OutlinedGreenButton = styled(Button)(({  }) => ({
  borderColor: '#36b37e',
  color: '#36b37e',
  borderRadius: '30px',
  padding: '10px 24px',
  textTransform: 'none',
  fontWeight: '600',
  '&:hover': {
    borderColor: '#2d9969',
    backgroundColor: 'rgba(54, 179, 126, 0.1)',
  },
}));

// const FeatureCard = styled(Card)(({  }) => ({
//   borderRadius: '12px',
//   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
//   height: '100%',
//   transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
//   },
// }));

const CauseCard = styled(Card)(({  }) => ({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const CircleIconBox = styled(Box)(({  }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(54, 179, 126, 0.1)',
  marginBottom: '20px',
}));

const carouselItems = [
  {
    id: 1,
    title: "You Can Help\nThe Poor",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    backgroundImage: "https://cdn.pixabay.com/photo/2020/05/26/10/35/rice-field-5222615_1280.jpg",
  },
  {
    id: 2,
    title: "Make A Difference\nToday",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    backgroundImage: "https://cdn.pixabay.com/photo/2017/08/25/05/30/in-rice-field-2679153_1280.jpg",
  },
  {
    id: 3,
    title: "Support Our\nCause",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    backgroundImage: "https://cdn.pixabay.com/photo/2024/12/28/03/39/vietnam-9295186_1280.jpg",
  }
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);

  const containerRef = useRef(null);
  const missionRef = useRef(null);
  const videoRef = useRef(null);
const videoInView = useInView(videoRef, { once: true });
const ref = useRef(null);
const inView = useInView(ref, { once: true, threshold: 0.3 });
const missionInView = useInView(missionRef, { once: true });
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };
  
  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);
  
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting) {
  //       setIsVisible(true);
  //       observer.disconnect();
  //     }
  //   }, { threshold: 0.2 });
    
  //   const section = document.querySelector('.about-section');
  //   if (section) observer.observe(section);
    
  //   return () => observer.disconnect();
  // }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
 
  
const fadeInUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const AnimatedBox = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

const progressControls = useAnimation();


  return (
    <motion.div
      ref={ref}
      variants={fadeInUpVariant}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};
  const campaigns = [
    {
      title: "Sun Harmony School Supporting Education",
      raised: 27000,
      goal: 50000,
      image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Image of a school building
    },
    {
      title: "Joyful Minds Medical Assistance for Children",
      raised: 32000,
      goal: 45000,
      image: "https://cdn.pixabay.com/photo/2019/08/10/22/34/table-4397860_1280.jpg", // Image of children receiving medical attention
    },
    {
      title: "Elevating Minds, Empowering Lives Through Education",
      raised: 18000,
      goal: 25000,
      image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", // Image of children studying
    },
    {
      title: "Empowering Children's Education and Well-being",
      raised: 15000,
      goal: 20000,
      image: "https://cdn.pixabay.com/photo/2019/08/10/22/34/table-4397860_1280.jpg", // Image of happy children
    },
  ];

  const cards = [
  {
    title: 'Become Volunteer',
    icon: <Users className="text-green-500" size={28} />,
    color: 'text-green-500',
    bgColor: 'bg-green-500',
    delay: 0.3,
  },
  {
    title: 'Quick Fundraise',
    icon: <Heart className="text-red-500" size={28} />,
    color: 'text-red-500',
    bgColor: 'bg-red-500',
    delay: 0.4,
  },
  {
    title: 'Give Donation',
    icon: <DollarSign className="text-yellow-500" size={28} />,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500',
    delay: 0.5,
  },
  {
    title: 'Become Volunteer',
    icon: <Users className="text-teal-500" size={28} />,
    color: 'text-teal-500',
    bgColor: 'bg-teal-500',
    delay: 0.6,
  },
];

 
  
  const palettes = {
    primary: {
      light: "#4C9F38",
      main: "#4C9F38",
      dark: "#4C9F38",
      contrastText: "#fff"
    },
    secondary: {
      light: "#eecd5e",
      main: "#E9BD29",
      dark: "#d5a916",
      contrastText: "#000"
    }
  };
  
  // Sample causes data from Image 1
  const causes = [
    {
      id: 1,
      title: "Raise Fund For Healthy Food",
      image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      raised: 27000,
      goal: 50000,
      category: "Food"
    },
    {
      id: 2,
      title: "Education For Poor Children",
      image: "https://cdn.pixabay.com/photo/2019/08/10/22/34/table-4397860_1280.jpg", 
      raised: 32000,
      goal: 45000,
      category: "Education"
    },
    {
      id: 3,
      title: "Promoting The Rights of Children",
      image: "https://cdn.pixabay.com/photo/2018/12/14/21/57/sunset-3875895_1280.jpg",
      raised: 18000,
      goal: 25000,
      category: "Rights"
    }
  ];
  
  const services = [
    {
      icon: <OpacityIcon sx={{ fontSize: 36, color: '#36b37e' }} />,
      title: "Pure Water",
      description: "Providing clean water to communities and ensuring access to safe drinking water for everyone."
    },
    {
      icon: <RestaurantIcon sx={{ fontSize: 36, color: '#36b37e' }} />,
      title: "Healthy Food",
      description: "Delivering nutritious food supplies to underprivileged communities and teaching about proper nutrition."
    },
    {
      icon: <LocalHospitalIcon sx={{ fontSize: 36, color: '#36b37e' }} />,
      title: "Medical Facilities",
      description: "Supporting access to healthcare services and medical facilities for those in need."
    },
    {
      icon: <SchoolIcon sx={{ fontSize: 36, color: '#36b37e' }} />,
      title: "Education",
      description: "Providing quality education to needy children in underprivileged communities."
    }
  ];
  
  const engagementTracks = [
    {
      icon: <PersonOutlineIcon sx={{ fontSize: 36, color: '#36b37e' }} />,
      title: "Immersion",
      description: "Engaging deeply with communities to understand their unique needs."
    },
    {
      icon: <MenuBookIcon sx={{ fontSize: 36, color: '#36b37e' }} />,
      title: "Learning",
      description: "Supporting educational initiatives that foster growth and development."
    },
    {
      icon: <PublicIcon sx={{ fontSize: 36, color: '#36b37e' }} />,
      title: "Impact",
      description: "Creating lasting positive change in communities around the world."
    }
  ];

  

  return (
    <>
      {/* Navigation */}
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ position: 'relative', width: 150, height: 50 }}>
                <Image
                  src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/CDRA/campaign-assets/0eb4c68e-785f-4f51-a735-37faa46fbeff_thumbnail_0fff8a35-a963-4bf1-8c42-3c98f5b15207_thumbnail_30e11477-9362-4975-b9dc-ab8dbca65e4a_thumbnail_Joyful Minds logo v4.png"
                  alt="Joyful Minds"
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
            
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href="/" passHref>
                  <Typography component="a" sx={{ color: '#36b37e', fontWeight: 600, textDecoration: 'none' }}>
                    Home
                  </Typography>
                </Link>
                <Link href="/about" passHref>
                  <Typography component="a" sx={{ color: '#555', fontWeight: 500, textDecoration: 'none' }}>
                    About Us
                  </Typography>
                </Link>
                <Link href="/causes" passHref>
                  <Typography component="a" sx={{ color: '#555', fontWeight: 500, textDecoration: 'none' }}>
                    Causes
                  </Typography>
                </Link>
                <Link href="/events" passHref>
                  <Typography component="a" sx={{ color: '#555', fontWeight: 500, textDecoration: 'none' }}>
                    Events
                  </Typography>
                </Link>
                <Link href="/pages" passHref>
                  <Typography component="a" sx={{ color: '#555', fontWeight: 500, textDecoration: 'none' }}>
                    Pages
                  </Typography>
                </Link>
                <Link href="/blog" passHref>
                  <Typography component="a" sx={{ color: '#555', fontWeight: 500, textDecoration: 'none' }}>
                    Blog
                  </Typography>
                </Link>
                <Link href="/contact" passHref>
                  <Typography component="a" sx={{ color: '#555', fontWeight: 500, textDecoration: 'none' }}>
                    Contact
                  </Typography>
                </Link>
              </Box>
            )}
            
            <Button variant="contained" sx={{
             backgroundColor: palettes.secondary.main,
             color: palettes.secondary.contrastText,
             '&:hover': {
               backgroundColor: palettes.secondary.dark,
             }}}>
              Donate Now
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      
      <div className="relative h-screen w-full overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute top-0 left-0 w-full h-full flex items-center transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${item.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto px-4 flex justify-center items-center h-full">
            <div className="flex flex-col items-center text-center max-w-4xl">
              <h1 className="text-white font-bold mb-6 text-4xl md:text-6xl leading-tight whitespace-pre-line font-serif">
                {item.title}
              </h1>
              
              <p className="text-white mb-10 text-lg max-w-2xl opacity-90 Arial">
                {item.description}
              </p>
              
              <Button
  variant="contained"
  sx={{
    backgroundColor: palettes.secondary.main, // Tailwind: bg-green-400
    color:  palettes.secondary.contrastText,           // Tailwind: text-white
    fontWeight: 600,            // Tailwind: font-semibold
    fontSize: '1.125rem',       // Tailwind: text-lg
    padding: '0.75rem 2.5rem',  // Tailwind: py-3 px-10
    borderRadius: '9999px',     // Tailwind: rounded-full
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // Tailwind: shadow-lg
    textTransform: 'none',      // Prevent uppercase
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: palettes.secondary.dark, // Tailwind: hover:bg-green-500
    },
  }}
>
  Donate Now
</Button>

            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full p-3 transition-colors"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Scroll to bottom indicator */}
      <div
        className="absolute bottom-5 right-5 bg-black bg-opacity-30 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
              currentSlide === index ? 'bg-green-400' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>

      {/* About Us */}
      {/* <div className="top-rotten-curve bottom-rotten-curve"> */}
      <div className="relative w-full bg-gray-100 overflow-hidden">
  {/* Top wavy border */}
  <div className="absolute top-0 left-0 w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className="w-full h-12"
    >
      <path
        d="M0,0 C240,48 480,48 720,24 C960,0 1200,0 1440,24 L1440,0 L0,0 Z"
        fill="#FFFFFF"
      ></path>
    </svg>
  </div>

  <div className="container mx-auto px-4 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-6"
      >
        <span className="text-green-500 font-medium">About Us</span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight font-serif">
          You Can Help<br />The Poor
        </h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          variant="contained"
          sx={{
            backgroundColor: palettes.secondary.main,
            color: palettes.secondary.contrastText,
            fontWeight: 600,
            fontSize: '1.125rem',
            padding: '0.75rem 2.5rem',
            borderRadius: '9999px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            textTransform: 'none',
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: palettes.secondary.dark,
            },
          }}
        >
          Read More
        </Button>
      </motion.div>

      {/* Right Column */}
      <div className="grid grid-cols-2 gap-5">
  {cards.map((card, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative overflow-hidden rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center group transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-2"
    >
      {/* Falling background overlay */}
      <div
        className={`absolute inset-0 bg-opacity-0 group-hover:bg-opacity-100 ${card.bgColor} transition-all duration-500 ease-in-out transform -translate-y-full group-hover:translate-y-0 z-0`}
      ></div>

      {/* Content above the falling bg */}
      <div className={`relative z-10 flex flex-col items-center group`}>
  <div className="mb-4 p-3 rounded-full bg-gray-50 transition-colors duration-500 ">
    {card.icon}
  </div>
  <h3 className={`font-medium ${card.color} transition-colors duration-500 group-hover:text-white`}>
    {card.title}
  </h3>
</div>

    </motion.div>
  ))}
</div>

    </div>
  </div>

  {/* Bottom wavy border */}
  <div className="absolute bottom-0 left-0 w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className="w-full h-12"
    >
      <path
        d="M0,48 C240,0 480,0 720,24 C960,48 1200,48 1440,24 L1440,48 L0,48 Z"
        fill="#FFFFFF"
      ></path>
    </svg>
  </div>
</div>

      {/* </div> */}



      {/* Popular Causes */}
      
      <Box sx={{ backgroundColor: '#fff', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#333', fontFamily:'font-serif' }} >
            Popular Causes
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Support our ongoing causes
          </Typography>
        </Box>

        <Grid container spacing={3} ref={ref}>
          {causes.map((cause, index) => (
            
            <Grid item xs={12} md={4} key={cause.id}>
              <motion.div
              
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <CauseCard>
                  <Box sx={{ position: 'relative', height: 220 }}>
                  <motion.div
  style={{
    display: 'inline-block',
    position: 'relative',
    overflow: 'hidden', // Ensure the image stays within its container
    height: '220px', // Fixed height for the container
    width: '100%', // Ensure full width usage
  }}
  whileHover={{
    scale: 1.1,
    transformOrigin: 'center', // Zooms from the center
  }}
  transition={{
    duration: 0.5,
    ease: 'easeInOut',
  }}
>
  <CardMedia
    component="img"
    height="100%" // Maintain the full height of the container
    image={cause.image || "https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_1280.jpg"}
    alt={cause.title}
    sx={{
      objectFit: 'cover', // Ensures the image maintains its aspect ratio
    }}
  />
</motion.div>




                    <Box
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        backgroundColor:
                          cause.category === 'Food'
                            ? '#36b37e'
                            : cause.category === 'Education'
                              ? '#9c27b0'
                              : '#f44336',
                        color: 'white',
                        py: 0.5,
                        px: 2,
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 600
                      }}
                    >
                      {cause.category}
                    </Box>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, mt: 2,fontFamily:'font-serif', }}>
                      {cause.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>

                    <Box sx={{ mb: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Raised: ${cause.raised.toLocaleString()}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          Goal: ${cause.goal.toLocaleString()}
                        </Typography>
                      </Box>
                      <motion.div
  initial={{ width: 0 }}
  animate={{ width: `${(cause.raised / cause.goal) * 100}%` }}
  transition={{ duration: 1.2, ease: 'easeOut' }}
  style={{
    height: 6,
    borderRadius: 3,
    backgroundColor:
      cause.category === 'Food'
        ? '#36b37e'
        : cause.category === 'Education'
          ? '#9c27b0'
          : '#f44336',
  }}
/>

                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                      <OutlinedGreenButton
                        variant="outlined"
                        size="small"
                        sx={{
                          borderColor:
                            cause.category === 'Food'
                              ? '#36b37e'
                              : cause.category === 'Education'
                                ? '#9c27b0'
                                : '#f44336',
                          color:
                            cause.category === 'Food'
                              ? '#36b37e'
                              : cause.category === 'Education'
                                ? '#9c27b0'
                                : '#f44336',
                        }}
                      >
                        Donate Now
                      </OutlinedGreenButton>
                    </Box>
                  </CardContent>
                </CauseCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

      {/* Video Section */}
      <motion.div 
  ref={videoRef}
  initial={{ opacity: 0, y: 50 }}
  animate={videoInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  <Box sx={{ position: 'relative', py: 8, backgroundColor: '#f3f4f6' }}>
    <div className="absolute top-0 left-0 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="w-full h-12"
      >
        <path
          d="M0,0 C240,48 480,48 720,24 C960,0 1200,0 1440,24 L1440,0 L0,0 Z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </div>

    <Box sx={{ 
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      // backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/video-bg.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: -1
    }} />
    
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={videoInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Box sx={{ 
              backgroundColor: 'rgba(54, 179, 126, 0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Box 
                component="img"
                src="https://cdn.pixabay.com/photo/2016/05/27/19/06/please-donate-1420462_1280.jpg"
                alt="Video thumbnail"
                sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={videoInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              > */}
                <IconButton 
                  aria-label="play"
                  sx={{ 
                    position: 'absolute',
                    backgroundColor: '#36b37e',
                    color: 'white',
                    '&:hover': { backgroundColor: '#2d9969' },
                    width: 64,
                    height: 64
                  }}
                >
                  <PlayCircleOutlineIcon sx={{ fontSize: 36 }} />
                </IconButton>
              {/* </motion.div> */}
            </Box>
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={videoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Typography variant="h4" sx={{ color: '#2d3748', fontWeight: 700, mb: 3, fontFamily: 'font-serif' }}>
                Watch Our Latest Activities
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={videoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Typography variant="body1" sx={{ color: '#6b7280', mb: 4 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim nec tortor in dignissim. Donec tincidunt mi et magna rhoncus dapibus.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={videoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: palettes.secondary.main,
                  color: palettes.secondary.contrastText,
                  mr: 2,
                  '&:hover': {
                    backgroundColor: palettes.secondary.dark,
                  },
                }}
              >
                Watch More
              </Button>
            </motion.div>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
</motion.div>


      {/* Mission Section */}
      <motion.div
  ref={missionRef}
  initial={{ opacity: 0, y: 50 }}
  animate={missionInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  <Container maxWidth="lg" >
    <Box sx={{ textAlign: 'center', my: 6,

     }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 2,fontFamily:'font-serif', }}>
        We&apos;re On A Mission To Solve The Problems
      </Typography>
      <Typography variant="body1" sx={{ color: '#555',fontFamily:'revert-layer', }}>
        Support our ongoing initiatives
      </Typography>
    </Box>

    <Grid container spacing={4} justifyContent="center">
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                height: '100%',
              }}
            >
              <CircleIconBox>{service.icon}</CircleIconBox>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, mt: 2,fontFamily:'font-serif', }}>
                {service.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#555',fontFamily:'revert-layer' }}>
                {service.description}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
    <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
  <Box sx={{ textAlign: 'center', mt: 4 }}>
    
  <Box
    component="img"
    src="https://t.commonsupport.com/loveus/images/resource/services-bottom-image.png"
    alt="Services Bottom"
    sx={{
      maxWidth: '100%',
      maxHeight: 300,
      height: 'auto',
      mx: 'auto',
    }}
  />
</Box>
</motion.div>
  </Container>

  {/* Centered Bottom Image */}
  
</motion.div>


      {/* Mission and Vision */}
      <Box sx={{ backgroundColor: '#f7f9fc', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <AnimatedBox delay={0.1}>
              <Box>
                <Typography variant="subtitle1" sx={{ color: '#36b37e', fontWeight: 600, mb: 1, }}>
                  Know About
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333',fontFamily:'font-serif', }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                  Our mission is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support...
                </Typography>
                <OutlinedGreenButton variant="outlined">Read More</OutlinedGreenButton>
              </Box>
            </AnimatedBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedBox delay={0.3}>
              <Box
                sx={{
                  display: 'flex',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: 300
                }}
              >
                <Box
                  component="img"
                  src="https://cdn.pixabay.com/photo/2023/08/23/12/57/young-8208513_1280.jpg"
                  alt="Our Mission"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </AnimatedBox>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12} md={6}>
            <AnimatedBox delay={0.1}>
              <Box
                sx={{
                  display: 'flex',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  minHeight: 300
                }}
              >
                <Box
                  component="img"
                  src="https://cdn.pixabay.com/photo/2016/10/27/05/48/hot-air-balloons-1773468_1280.jpg"
                  alt="Our Vision"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
              </Box>
            </AnimatedBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedBox delay={0.3}>
              <Box>
                <Typography variant="subtitle1" sx={{ color: '#36b37e', fontWeight: 600, mb: 1 }}>
                  Discover More
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333',fontFamily:'font-serif', }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                  We envision a world where every child has the opportunity to reach their full potential...
                </Typography>
                <OutlinedGreenButton variant="outlined">Read More</OutlinedGreenButton>
              </Box>
            </AnimatedBox>
          </Grid>
        </Grid>
      </Container>
    </Box>

      {/* Campaigns In Focus */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2,fontFamily:'font-serif', }}>
          Campaigns in Focus
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          Our ongoing initiatives making an impact
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {campaigns.map((campaign, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, amount: 0.3 });

          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              >
                <CauseCard>
                  <Box sx={{ position: 'relative', height: 180 }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={campaign.image}
                      alt={campaign.title}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, height: 40, overflow: 'hidden',fontFamily:'font-serif', }}>
                      {campaign.title}
                    </Typography>

                    <Box sx={{ mb: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>
                          Raised: ${campaign.raised.toLocaleString()}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>
                          Goal: ${campaign.goal.toLocaleString()}
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={(campaign.raised / campaign.goal) * 100} 
                        sx={{ 
                          height: 6, 
                          borderRadius: 3,
                          backgroundColor: '#e0e0e0',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: '#36b37e',
                          }
                        }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, fontSize: '0.75rem', color: '#777' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOnIcon sx={{ fontSize: 16 }} />
                        <Typography variant="caption">Abidjan, CI</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <PersonOutlineIcon sx={{ fontSize: 16 }} />
                        <Typography variant="caption">Target Community</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </CauseCard>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <OutlinedGreenButton variant="outlined">
          See More
        </OutlinedGreenButton>
      </Box>
    </Container>


      {/* Featured In */}
      <Box sx={{ backgroundColor: '#f7f9fc', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color : '#36b37e',fontFamily:'font-serif', }}>
              As Featured In
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2
          }}>
            {['https://cdn.pixabay.com/photo/2017/11/13/21/54/abut-2946939_1280.jpg', 'https://cdn.pixabay.com/photo/2019/07/15/15/31/cork-4339638_1280.jpg', 'https://cdn.pixabay.com/photo/2017/07/13/08/12/shaking-hands-2499629_1280.jpg', 'https://cdn.pixabay.com/photo/2017/05/02/03/41/action-2277292_1280.jpg'].map((logo, index) => (
              <Box key={index} sx={{ 
                filter: 'grayscale(100%)',
                opacity: 0.7,
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  opacity: 1,
                },
                width: { xs: '45%', sm: '22%' },
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image 
                  src={`${logo}`} 
                  alt="Partner logo" 
                  width={120} 
                  height={60}
                  objectFit="contain"
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2,fontFamily:'font-serif', }}>
            What the world thinks about us
          </Typography>
        </Box>
        
        <Box sx={{ 
          position: 'relative',
          p: 4,
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          backgroundColor: 'white',
          maxWidth: 800,
          mx: 'auto'
        }}>
          <Box sx={{ position: 'absolute', top: 20, left: 20 }}>
            <FormatQuoteIcon sx={{ fontSize: 40, color: '#36b37e', opacity: 0.3 }} />
          </Box>
          
          <Typography variant="body1" sx={{ 
            fontStyle: 'italic', 
            textAlign: 'center',
            color:'#555',
            pt: 2,
            pl: 6,
            pr: 6
          }}>
            &quot;Joyful Minds is doing a fantastic job in the field of education; our school children get to know so many things during this program.&quot;
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3 }}>
            <Box sx={{ 
              width: 50, 
              height: 50, 
              borderRadius: '50%', 
              overflow: 'hidden',
              mr: 2
            }}>
              <Image src="https://cdn.pixabay.com/photo/2021/10/14/03/26/pastor-6708005_1280.jpg" alt="Ashlyn Siha" width={50} height={50} />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, color:'#333' }}>
                Ashlyn Siha
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Principal, Sun Harmony School
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
            <IconButton 
              sx={{ 
                backgroundColor: '#f5f5f5', 
                mr: 1,
                '&:hover': { backgroundColor: '#e0e0e0' } 
              }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton 
              sx={{ 
                backgroundColor: '#36b37e', 
                color: 'white',
                '&:hover': { backgroundColor: '#2d9969' } 
              }}
            >
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Partners */}
      <Box sx={{ backgroundColor: '#f7f9fc', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#36b37e',fontFamily:'font-serif', }}>
              Our Partners
            </Typography>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 4
          }}>
            {['https://cdn.pixabay.com/photo/2020/04/19/13/37/place-du-tertre-5063622_1280.jpg', 'https://cdn.pixabay.com/photo/2019/11/09/06/03/handshake-4612930_1280.jpg', 'https://cdn.pixabay.com/photo/2016/03/22/22/45/ferris-wheel-1273841_1280.jpg', 'https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_1280.jpg'].map((logo, index) => (
              <Box key={index} sx={{ 
                width: { xs: '45%', sm: '22%' },
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'grayscale(100%)',
                opacity: 0.7,
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  opacity: 1,
                }
              }}>
                <Image 
                  src={`${logo}`} 
                  alt="Partner logo" 
                  width={120} 
                  height={60}
                  objectFit="contain"
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Engagement Tracks */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2,fontFamily:'font-serif', }}>
            ENGAGEMENT TRACKS
          </Typography>
        </Box>
        
        <Grid container spacing={4} justifyContent="center">
          {engagementTracks.map((track, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box sx={{ 
                textAlign: 'center', 
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-10px)' }
              }}>
                <CircleIconBox sx={{ mx: 'auto' }}>
                  {track.icon}
                </CircleIconBox>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontFamily:'font-serif' }}>
                  {track.title}
                </Typography>
                <Typography variant="body2" color="#555 " sx={{ mb: 2 }}>
                  {track.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <OutlinedGreenButton variant="outlined">
            Learn More
          </OutlinedGreenButton>
        </Box>
      </Container>

      {/* Call to Action */}
      <Box sx={{ backgroundColor: '#0c213a', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'white',fontFamily:'font-serif', }}>
              Want to be a changemaker?
            </Typography>
            <Typography variant="body1" sx={{ color: '#aaa', mb: 4 }}>
              You can become a changemaker by creating a fundraising campaign for this organization.
            </Typography>
            <Button
  variant="contained"
  size="large"
  sx={{
    backgroundColor: palettes.secondary.main,
    color: palettes.secondary.contrastText,
    mr: 2,
    '&:hover': {
      backgroundColor: palettes.secondary.dark,
    },
  }}
>
  Start a Campaign
</Button>

            
            <Box sx={{ mt: 8 }}>
              <Grid container spacing={8} justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center', color: 'white' }}>
                    <CircleIconBox sx={{ mx: 'auto', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <PersonOutlineIcon sx={{ fontSize: 36, color: '#36b37e' }} />
                    </CircleIconBox>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontFamily:'font-serif' }}>
                      Create your campaign
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa' }}>
                      It takes only a few minutes to set up your campaign
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center', color: 'white' }}>
                    <CircleIconBox sx={{ mx: 'auto', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <PublicIcon sx={{ fontSize: 36, color: '#36b37e' }} />
                    </CircleIconBox>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontFamily:'font-serif' }}>
                      Approved by the admins
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa' }}>
                      Our team reviews and approves your campaign
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center', color: 'white' }}>
                    <CircleIconBox sx={{ mx: 'auto', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <SchoolIcon sx={{ fontSize: 36, color: '#36b37e' }} />
                    </CircleIconBox>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, fontFamily:'font-serif' }}>
                      Share in your networks
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa' }}>
                      Get support from friends, family, and wider networks
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#0a172b', color: 'white', pt: 8, pb: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <Image src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/CDRA/campaign-assets/0eb4c68e-785f-4f51-a735-37faa46fbeff_thumbnail_0fff8a35-a963-4bf1-8c42-3c98f5b15207_thumbnail_30e11477-9362-4975-b9dc-ab8dbca65e4a_thumbnail_Joyful Minds logo v4.png" alt="Joyful Minds" width={150} height={50} />
              </Box>
              <Typography variant="body2" sx={{ color: '#aaa', mb: 3 }}>
                Joyful Minds is dedicated to improving the lives of children worldwide through education, nutrition, and emotional support.
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body2" sx={{ color: '#ccc', display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1, fontSize: 18 }} /> 123 Charity Street, Abidjan
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PhoneIcon sx={{ mr: 1, fontSize: 18 }} /> +123 456 7890
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1, fontSize: 18 }} /> info@joyfulmings.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton size="small" sx={{ color: '#4267B2' }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: '#1DA1F2' }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: '#E1306C' }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: '#FF0000' }}>
                  <YouTubeIcon />
                </IconButton>
                <IconButton size="small" sx={{ color: '#0e76a8' }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                COMPANY
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {['About Us', 'Our Team', 'FAQs', 'Blog', 'Contact Us'].map((item, index) => (
                  <Link href="#" key={index} passHref>
                    <Typography component="a" variant="body2" sx={{ 
                      color: '#aaa', 
                      textDecoration: 'none',
                      '&:hover': { color: '#36b37e' }
                    }}>
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                RECENT CAMPAIGNS
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {[
                  'Clean Water for Children',
                  'Education for Rural Youth',
                  'Supporting the Underprivileged',
                  'Build Schools in Cambodia',
                  'Food Security Campaign'
                ].map((item, index) => (
                  <Link href="#" key={index} passHref>
                    <Typography component="a" variant="body2" sx={{ 
                      color: '#aaa', 
                      textDecoration: 'none',
                      '&:hover': { color: '#36b37e' }
                    }}>
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                NEWSLETTER
              </Typography>
              <Typography variant="body2" sx={{ color: '#aaa', mb: 3 }}>
                Subscribe to our newsletter to receive updates on our latest campaigns and initiatives.
              </Typography>
              <Box sx={{ 
                display: 'flex',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '30px',
                overflow: 'hidden',
                p: 0.5
              }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: 'white',
                    padding: '10px 16px',
                    outline: 'none',
                    flexGrow: 1
                  }}
                />
                <Button 
                  sx={{ 
                    backgroundColor: '#36b37e',
                    borderRadius: '30px',
                    color: 'white',
                    '&:hover': { backgroundColor: '#2d9969' },
                    px: 3
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}>
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              © 2024 Copyright. All Rights Reserved. Powered by Donate+
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Image src="/payment-visa.png" alt="Visa" width={30} height={20} />
              <Image src="/payment-mastercard.png" alt="Mastercard" width={30} height={20} />
              <Image src="/payment-amex.png" alt="Amex" width={30} height={20} />
              <Image src="/payment-paypal.png" alt="PayPal" width={30} height={20} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}