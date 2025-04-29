"use client";

import React, { useState, useEffect } from 'react';
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
import { motion } from 'framer-motion';

// Icons
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
const GreenButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#36b37e',
  color: 'white',
  borderRadius: '30px',
  padding: '10px 24px',
  textTransform: 'none',
  fontWeight: '600',
  '&:hover': {
    backgroundColor: '#2d9969',
  },
}));

const OutlinedGreenButton = styled(Button)(({ theme }) => ({
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

const FeatureCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const CauseCard = styled(Card)(({ theme }) => ({
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
  },
}));

const CircleIconBox = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(54, 179, 126, 0.1)',
  marginBottom: '20px',
}));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
      image: "https://cdn.pixabay.com/photo/2019/08/10/22/34/table-4397860_1280.jpg",
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
            
            <GreenButton variant="contained">
              Donate Now
            </GreenButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_1280.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <Typography variant="h2" sx={{ 
                  color: 'white', 
                  fontWeight: 700, 
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}>
                  You Can Help<br/>The Poor
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 4, fontSize: '1.1rem', maxWidth: '90%' }}>
                  Everyone will encounter cleanliness committees, work, dictates and offices, security items given at our designer.
                </Typography>
                <GreenButton variant="contained" size="large" sx={{ mr: 2 }}>
                  Donate Now
                </GreenButton>
                <OutlinedGreenButton variant="outlined" size="large" sx={{ 
                  borderColor: 'white', 
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}>
                  Learn More
                </OutlinedGreenButton>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Us */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              You Can Help The Poor
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
              At Joyful Minds, we firmly believe in the unique and inherent potential of every child. We understand that each child has their own individual needs, and it is our mission to fulfill those needs, helping them thrive and flourish. Our organization is wholeheartedly dedicated to brightening the lives of children from diverse backgrounds across society. We are driven by an unwavering determination to understand their young minds, creating a safe, joyful, and nurturing environment for their all-round growth.
            </Typography>
            <OutlinedGreenButton variant="outlined">
              Read More
            </OutlinedGreenButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {['Become Volunteer', 'Quick Donation', 'Give Donation', 'Become Volunteer'].map((text, index) => (
                <Grid item xs={6} key={index}>
                  <Card sx={{ 
                    borderRadius: '12px', 
                    height: '180px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 2,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
                    }
                  }}>
                    <Box 
                      sx={{ 
                        width: 60, 
                        height: 60, 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        color: '#36b37e',
                      }}
                    >
                      {index === 0 && <PersonOutlineIcon sx={{ fontSize: 30 }} />}
                      {index === 1 && <OpacityIcon sx={{ fontSize: 30 }} />}
                      {index === 2 && <RestaurantIcon sx={{ fontSize: 30 }} />}
                      {index === 3 && <SchoolIcon sx={{ fontSize: 30 }} />}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                      {text}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Popular Causes */}
      <Box sx={{ backgroundColor: '#f7f9fc', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4"  sx={{ fontWeight: 700, mb: 2,color: '#333' }}>
              Popular Causes
            </Typography>
            <Typography variant="body1" sx={{ color: '#555' }}>
              Support our ongoing causes
            </Typography>
          </Box>
          
          <Grid container spacing={3}>
            {causes.map((cause) => (
              <Grid item xs={12} md={4} key={cause.id}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <CauseCard>
                    <Box sx={{ position: 'relative', height: 220 }}>
                      <CardMedia
                        component="img"
                        height="220"
                        image={cause.image || "https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_1280.jpg"}
                        alt={cause.title}
                      />
                      <Box 
                        sx={{ 
                          position: 'absolute', 
                          top: 10, 
                          right: 10, 
                          backgroundColor: cause.category === 'Food' ? '#36b37e' : cause.category === 'Education' ? '#9c27b0' : '#f44336',
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
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, mt:2 }}>
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
                        <LinearProgress 
                          variant="determinate" 
                          value={(cause.raised / cause.goal) * 100} 
                          sx={{ 
                            height: 6, 
                            borderRadius: 3,
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: cause.category === 'Food' ? '#36b37e' : cause.category === 'Education' ? '#9c27b0' : '#f44336',
                            }
                          }}
                        />
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <OutlinedGreenButton 
                          variant="outlined" 
                          size="small" 
                          sx={{ 
                            borderColor: cause.category === 'Food' ? '#36b37e' : cause.category === 'Education' ? '#9c27b0' : '#f44336',
                            color: cause.category === 'Food' ? '#36b37e' : cause.category === 'Education' ? '#9c27b0' : '#f44336',
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
      <Box sx={{ position: 'relative', py: 8 }}>
        <Box sx={{ 
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/video-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }} />
        
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
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
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 3 }}>
                  Watch Our Latest Activities
                </Typography>
                <Typography variant="body1" sx={{ color: 'white', mb: 4 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim nec tortor in dignissim. Donec tincidunt mi et magna rhoncus dapibus.
                </Typography>
                <GreenButton variant="contained">
                  Watch More
                </GreenButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            We're On A Mission To Solve The Problems
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Support our ongoing initiatives
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <CircleIconBox>
                  {service.icon}
                </CircleIconBox>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission and Vision */}
      <Box sx={{ backgroundColor: '#f7f9fc', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="subtitle1" sx={{ color: '#36b37e', fontWeight: 600, mb: 1 }}>
                  Know About
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#333' }}>
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                  Our mission is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support. We are dedicated to creating a nurturing environment where each child feels safe, cherished, and empowered to explore and develop their unique talents, personality, and skills. Our ultimate goal is to enable every child to blossom into a joyful, well-rounded individual, ready to contribute to a better and happier society.
                </Typography>
                <OutlinedGreenButton variant="outlined">
                  Read More
                </OutlinedGreenButton>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '100%',
                minHeight: 300,
              }}>
                <Box 
                  component="img"
                  src="https://cdn.pixabay.com/photo/2023/08/23/12/57/young-8208513_1280.jpg"
                  alt="Our Mission"
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 6 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                display: 'flex',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '100%',
                minHeight: 300,
              }}>
                <Box 
                  component="img"
                  src="https://cdn.pixabay.com/photo/2016/10/27/05/48/hot-air-balloons-1773468_1280.jpg"
                  alt="Our Vision"
                  sx={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                />
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="subtitle1" sx={{ color: '#36b37e', fontWeight: 600, mb: 1 }}>
                  Discover More
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color:'#333' }}>
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
                  We envision a world where every child has the opportunity to reach their full potential, regardless of their background or circumstances. We strive to create a society where children's rights are respected, their voices are heard, and their needs are met. Through our programs and initiatives, we aim to build a future where all children can thrive in a safe, nurturing, and supportive environment.
                </Typography>
                <OutlinedGreenButton variant="outlined">
                  Read More
                </OutlinedGreenButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Campaigns In Focus */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Campaigns in Focus
          </Typography>
          <Typography variant="body1" sx={{ color: '#555' }}>
            Our ongoing initiatives making an impact
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
  {campaigns.map((campaign, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
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
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2, height: 40, overflow: 'hidden' }}>
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
    </Grid>
  ))}
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
            <Typography variant="h5" sx={{ fontWeight: 600, color : '#36b37e' }}>
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
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
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
            "Joyful Minds is doing a fantastic job in the field of education; our school children get to know so many things during this program."
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
            <Typography variant="h5" sx={{ fontWeight: 600, color: '#36b37e' }}>
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
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
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
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  {track.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: 'white' }}>
              Want to be a changemaker?
            </Typography>
            <Typography variant="body1" sx={{ color: '#aaa', mb: 4 }}>
              You can become a changemaker by creating a fundraising campaign for this organization.
            </Typography>
            <GreenButton variant="contained" size="large">
              START A CAMPAIGN
            </GreenButton>
            
            <Box sx={{ mt: 8 }}>
              <Grid container spacing={8} justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <Box sx={{ textAlign: 'center', color: 'white' }}>
                    <CircleIconBox sx={{ mx: 'auto', backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      <PersonOutlineIcon sx={{ fontSize: 36, color: '#36b37e' }} />
                    </CircleIconBox>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
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
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
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
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
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
                <Image src="/logo-white.png" alt="Joyful Minds" width={150} height={50} />
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