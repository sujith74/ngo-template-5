'use client'

import React, { useState, useEffect } from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SchoolIcon from '@mui/icons-material/School';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PublicIcon from '@mui/icons-material/Public';
// import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LaptopIcon from '@mui/icons-material/Laptop';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import Link from 'next/link';


export default function Home() {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [activeTestimonial, setActiveTestimonial] = useState(0);
 
  
  const testimonials = [
    {
      quote: "Joyful Minds is doing a fantastic job in the field of education, our school children get to know so many things during this program.",
      name: "Arjuna Bota",
      position: "Principal, Red Mountain School"
    },
    // More testimonials could be added here
  ];

  const campaigns = [
    {
      id: 1,
      title: "Sun Harmony School Supports",
      description: "Help young students access an equal level of education wherever they are in the world",
      image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      raised: "₹ 5,57,000",
      goal: "Goal: ₹ 6,00,000",
      days: 30,
      donors: 15
    },
    {
      id: 2,
      title: "Joyful Minds Medical Volunteer",
      description: "At Joyful Minds, we are focused on providing healthcare to those in need with your help",
      image: "https://cdn.pixabay.com/photo/2016/12/28/20/30/wedding-1937022_1280.jpg",
      raised: "₹ 3,20,000",
      goal: "Goal: ₹ 4,00,000",
      days: 45,
      donors: 22
    },
    {
      id: 3,
      title: "Elevating Minds, Empowering Lives",
      description: "Education means empowerment. Help us to provide mental health education and resources",
      image: "https://cdn.pixabay.com/photo/2015/10/18/14/10/smoke-994491_1280.jpg",
      raised: "₹ 4,80,000",
      goal: "Goal: ₹ 5,00,000",
      days: 60,
      donors: 30
    },
    {
      id: 4,
      title: "Empowering Children's Education",
      description: "We are dedicated to providing children with quality education that will help them succeed",
      image: "https://cdn.pixabay.com/photo/2019/08/10/22/34/table-4397860_1280.jpg",
      raised: "₹ 1,15,000",
      goal: "Goal: ₹ 2,00,000",
      days: 90,
      donors: 12
    }
  ];

  const partners = [
    { name: "Stonehill", logo: "https://cdn.pixabay.com/photo/2016/03/17/07/02/starbucks-1262392_1280.jpg" },
    { name: "Enviro", logo: "https://cdn.pixabay.com/photo/2012/12/11/21/28/great-69521_1280.jpg" },
    { name: "St.Grams", logo: "https://cdn.pixabay.com/photo/2015/07/21/06/59/nikon-853641_1280.jpg" },
    { name: "Edu", logo: "https://cdn.pixabay.com/photo/2020/09/05/16/01/butterfly-5546907_1280.jpg" }
  ];

  const engagementTracks = [
    {
      title: "Immersion",
      icon: <PeopleIcon sx={{ fontSize: 48 }} />,
      color: "bg-blue-500"
    },
    {
      title: "Learning",
      icon: <SchoolIcon sx={{ fontSize: 48 }} />,
      color: "bg-blue-500"
    },
    {
      title: "Impact",
      icon: <TrackChangesIcon sx={{ fontSize: 48 }} />,
      color: "bg-blue-500"
    }
  ];
  
  

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Box className="font-sans">
      {/* Header */}
      <AppBar position="static" color="transparent" elevation={0} className="bg-white">
        <Container maxWidth="xl">
          <Toolbar className="flex justify-between py-4">
            <Box className="flex items-center">
              {/* <img src="https://via.placeholder.com/50" alt="Joyful Minds Logo" className="mr-2" /> */}
              <Typography variant="h6" className="font-bold text-primary-600">
                JOYFUL <span className="text-yellow-500">MINDS</span>
              </Typography>
            </Box>
            
            <Box className="hidden md:flex space-x-8">
              <Button color="inherit">ABOUT US</Button>
              <Button color="inherit">OUR INITIATIVES</Button>
              <Button color="inherit">LOG IN</Button>
              <Button color="inherit">REPORT</Button>
              <Link href="/contact" passHref>
  <Button color="inherit" component="a">
    CONTACT US
  </Button>
</Link>            </Box>
            
            <Button 
              variant="contained" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-6 py-2 rounded-full transition-all duration-300"
            >
              DONATE NOW
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box 
        className="relative bg-gradient-to-r from-green-800 to-green-900 text-white py-16"
        sx={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlend: 'overlay'
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} className="z-10">
              <Typography variant="h2" className="font-bold text-4xl md:text-5xl !mb-4">
                Helping Each Other Can Make World Better
              </Typography>
              <Typography variant="body1" className="!mb-6 text-lg">
                One Hope For Humbles
              </Typography>
              <Box className="flex space-x-4 mt-6">
                <Button 
                  variant="contained" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300 !mr-2"
                >
                  Donate Now
                </Button>
                <Button 
                  variant="outlined" 
                  className="border-white text-white hover:bg-white hover:text-green-800 font-bold px-8 py-3 rounded-full transition-all duration-300"
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="xl" className="py-16">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <Box className="bg-blue-100 p-6 text-center">
                <RestaurantIcon className="text-blue-500" sx={{ fontSize: 48 }} />
              </Box>
              <CardContent className="text-center p-6">
                <Typography variant="h5" className="font-bold !mb-3">Healthy Foods</Typography>
                <Typography variant="body2" className="!mb-4">
                  Providing nutritious food to needy ones, ensuring they have access to healthy meals when needed.
                </Typography>
                <Button 
                  variant="outlined" 
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 rounded-full px-6 transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <Box className="bg-blue-100 p-6 text-center">
                <SchoolIcon className="text-blue-500" sx={{ fontSize: 48 }} />
              </Box>
              <CardContent className="text-center p-6">
                <Typography variant="h5" className="font-bold !mb-3">Education</Typography>
                <Typography variant="body2" className="!mb-4">
                  Providing quality education to underprivileged children, helping them build a brighter future.
                </Typography>
                <Button 
                  variant="outlined" 
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 rounded-full px-6 transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
              <Box className="bg-blue-100 p-6 text-center">
                <LocalHospitalIcon className="text-blue-500" sx={{ fontSize: 48 }} />
              </Box>
              <CardContent className="text-center p-6">
                <Typography variant="h5" className="font-bold !mb-3">Medical Help</Typography>
                <Typography variant="body2" className="!mb-4">
                  Providing healthcare and medical assistance to those in need, ensuring better health outcomes.
                </Typography>
                <Button 
                  variant="outlined" 
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 rounded-full px-6 transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* About Section */}
      <Box className="bg-gray-50 py-16">
  <Container maxWidth="lg">
    <Typography variant="h4" className="text-center text-3xl text-green-800 font-bold !mb-2">
      We Believe That We Can Save More Life&apos;s With You
    </Typography>

    <Box className="flex justify-center !mb-8">
      <Divider className="w-24 bg-yellow-500 h-1 mt-4" />
    </Box>

    <Typography variant="body1" className="text-center !mb-8 max-w-3xl mx-auto text-gray-600">
      At Joyful Minds, we firmly believe in the unique and inherent potential of every child! We understand that each child has their own individual needs, and it is our mission to fulfill those needs, helping them thrive and flourish. Our organization is wholeheartedly dedicated to brightening the lives of children from diverse backgrounds across society. We are driven by an unwavering determination to empower those young minds, creating a safe, joyful, and nurturing environment for all.
    </Typography>

    <Grid container spacing={2} justifyContent="center" className="mt-6 text-center">
      <Grid item xs={12} md={4}>
        <Box className="flex flex-col items-center !mb-3">
          <CheckCircleIcon className="text-green-500 mb-1" />
          <Typography className="text-gray-600" variant="body1">Charity For Health</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box className="flex flex-col items-center !mb-3">
          <CheckCircleIcon className="text-green-500 mb-1" />
          <Typography className="text-gray-600" variant="body1">Charity For Education</Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box className="flex flex-col items-center !mb-3">
          <CheckCircleIcon className="text-green-500 mb-1" />
          <Typography className="text-gray-600" variant="body1">Charity For Medical</Typography>
        </Box>
      </Grid>
    </Grid>

    <Box className="text-center mt-8">
      <Button 
        variant="contained" 
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300"
      >
        Contact Us
      </Button>
    </Box>
  </Container>
</Box>


      {/* Mission Section */}
      <Container maxWidth="lg" className="py-16">
        <Box className="text-center !mb-12">
          <Typography variant="h4" className="font-bold !mb-4">About Joyful Minds</Typography>
          <Box className="flex justify-center !mb-4">
            <img src="https://cdn.pixabay.com/photo/2016/11/14/04/36/boy-1822614_1280.jpg" alt="Decorative element"
             className="w-64 md:w-72 lg:w-120 rounded-md shadow-md"
              />
          </Box>
        </Box>
        
        <Typography variant="body1" className="text-center !mb-8">
          Our mission is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support. We are dedicated to creating a nurturing environment where each child feels safe, cherished, and empowered to explore and develop their unique talents, personality, and skills. Our ultimate goal is to enable every child to blossom into a joyful, well-rounded individual, ready to contribute to a better and happier society.
        </Typography>
        
        <Typography variant="body1" className="text-center !mb-12">
          We value funds.
        </Typography>
        
        <Box className="text-center !mb-12">
          <Typography variant="h5" className="font-bold !mb-2 text-blue-800">ENGAGEMENT TRACKS</Typography>
        </Box>
        
        <Grid container spacing={6} justifyContent="center" className="!mb-12">
          {engagementTracks.map((track, index) => (
            <Grid item xs={12} md={4} key={index} className="text-center">
              <Box className={`${track.color} rounded-full p-4 inline-flex justify-center !mb-4`}>
                {track.icon}
              </Box>
              <Typography variant="h6" className="font-bold !mb-2">
                {track.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
        
        <Box className="text-center">
          <Button 
            variant="outlined" 
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-50 rounded-full px-6 transition-all duration-300"
          >
            Learn More
          </Button>
        </Box>
      </Container>

      {/* Campaigns Section */}
      <Box className="bg-gray-50 py-16">
        <Container maxWidth="xl">
          <Box className="text-center !mb-12">
            <Typography variant="h4" className="font-bold text-blue-800 !mb-2">Campaigns in Focus</Typography>
          </Box>
          
          <Grid container spacing={4}>
            {campaigns.map((campaign) => (
              <Grid item xs={12} sm={6} md={3} key={campaign.id}>
                <Card className="h-full shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                  <CardMedia
                    component="img"
                    height="140"
                    image={campaign.image}
                    alt={campaign.title}
                  />
                  <CardContent>
                    <Typography variant="h6" className="font-bold !mb-2 line-clamp-2">
                      {campaign.title}
                    </Typography>
                    <Typography variant="body2" className="!mb-4 line-clamp-3">
                      {campaign.description}
                    </Typography>
                    <Box className="!mb-2">
                      <Typography variant="body2" className="font-bold text-green-600">
                        {campaign.raised}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        {campaign.goal}
                      </Typography>
                      <LinearProgress 
                        variant="determinate" 
                        value={75} 
                        className="my-2 rounded-full" 
                        sx={{ 
                          height: 8, 
                          borderRadius: 5,
                          backgroundColor: '#e5e7eb',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: '#22c55e'
                          }
                        }} 
                      />
                    </Box>
                  </CardContent>
                  <CardActions className="bg-gray-50 p-3">
                    <Box className="flex items-center text-gray-500 text-sm mr-3">
                      <AccessTimeIcon fontSize="small" className="mr-1" />
                      <Typography variant="caption">{campaign.days} days left</Typography>
                    </Box>
                    <Box className="flex items-center text-gray-500 text-sm">
                      <PeopleIcon fontSize="small" className="mr-1" />
                      <Typography variant="caption">{campaign.donors} donors</Typography>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box className="text-center mt-12">
            <Button 
              variant="contained" 
              className="bg-gray-800 hover:bg-gray-900 text-white font-bold px-8 py-3 rounded-full transition-all duration-300"
            >
              See More
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Featured In Section */}
      <Container maxWidth="lg" className="py-16">
        <Box className="text-center !mb-8">
          <Typography variant="h4" className="font-bold !mb-2">As Featured In</Typography>
        </Box>
        
        <Box className="flex flex-wrap justify-center items-center gap-8 !mb-6">
  <img
    src="https://cdn.pixabay.com/photo/2015/02/04/11/29/tissue-623649_1280.jpg"
    alt="Economic Express"
    className="w-28 h-20 object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded-md shadow"
  />
  <img
    src="https://cdn.pixabay.com/photo/2012/10/10/04/46/oldtimer-60521_1280.jpg"
    alt="ST"
    className="w-28 h-20 object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded-md shadow"
  />
  <img
    src="https://cdn.pixabay.com/photo/2018/04/23/21/26/auto-3345601_1280.jpg"
    alt="BBC One"
    className="w-28 h-20 object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded-md shadow"
  />
  <img
    src="https://cdn.pixabay.com/photo/2017/06/08/23/00/apple-2385198_1280.jpg"
    alt="History"
    className="w-28 h-20 object-cover grayscale hover:grayscale-0 transition-all duration-300 rounded-md shadow"
  />
</Box>

      </Container>

      {/* Testimonials Section */}
      <Box className="bg-gray-50 py-16">
        <Container maxWidth="lg">
          <Box className="text-center !mb-8">
            <Typography variant="h4" className="font-bold text-green-600 !mb-2">What the world thinks about us</Typography>
          </Box>
          
          <Box className="relative">
            <Card className="p-6 shadow-md">
              <Box className="flex flex-col md:flex-row gap-6">
                <Box className="flex-shrink-0">
                  <FormatQuoteIcon sx={{ fontSize: 48 }} className="text-gray-300" />
                </Box>
                <Box>
                  <Typography variant="body1" className="!mb-4 italic">
                    {testimonials[activeTestimonial].quote}
                  </Typography>
                  <Box className="flex items-center">
                    <img 
                      src="https://via.placeholder.com/50" 
                      alt={testimonials[activeTestimonial].name} 
                      className="rounded-full mr-3"
                    />
                    <Box>
                      <Typography variant="subtitle1" className="font-bold">
                        {testimonials[activeTestimonial].name}
                      </Typography>
                      <Typography variant="caption" className="text-gray-500">
                        {testimonials[activeTestimonial].position}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
            
            <Box className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <IconButton 
                className="bg-white shadow-md hover:bg-gray-100"
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Partners Section */}
      <Container maxWidth="lg" className="py-16">
        <Box className="text-center !mb-8">
          <Typography variant="h4" className="font-bold !mb-2">Our Partners</Typography>
        </Box>
        
        <Box className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, index) => (
            <img 
              key={index}
              src={partner.logo} 
              alt={partner.name} 
              className="h-16 md:h-20 grayscale hover:grayscale-0 transition-all rounded-md duration-300" 
            />
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box className="bg-gray-900 text-white py-16">
        <Container maxWidth="lg">
          <Box className="text-center !mb-6">
            <Typography variant="h4" className="font-bold !mb-2">Want to be a changemaker?</Typography>
            <Typography variant="body1" className="!mb-8">
              You can become a changemaker by creating a campaign for this organization.
            </Typography>
            <Button 
              variant="contained" 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-full transition-all duration-300"
            >
              START A CAMPAIGN
            </Button>
          </Box>
          
          <Grid container spacing={8} className="pt-12">
            <Grid item xs={12} md={4} className="text-center">
              <LaptopIcon sx={{ fontSize: 48 }} className="!mb-4" />
              <Typography variant="h6" className="font-bold !mb-2">Create your campaign</Typography>
              <Typography variant="body2">
                It takes just a few minutes to start creating your campaign for Joyful Minds.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="text-center">
              <LightbulbIcon sx={{ fontSize: 48 }} className="!mb-4" />
              <Typography variant="h6" className="font-bold !mb-2">Approval by the admin</Typography>
              <Typography variant="body2">
                Submit to our team for quick approval. We'll help make your campaign successful.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className="text-center">
              <PublicIcon sx={{ fontSize: 48 }} className="!mb-4" />
              <Typography variant="h6" className="font-bold !mb-2">Share in your network</Typography>
              <Typography variant="body2">
                Start sharing with your friends, family and broader network to create impact.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box className="bg-black pt-16 pb-10 text-white">
  <Container maxWidth="xl">
    <Grid container spacing={6} className="mb-12">
      {/* Logo & Contact Info */}
      <Grid item xs={12} md={4}>
        <Box className="mb-6">
          <Typography variant="h5" className="font-bold text-white">
            JOYFUL <span className="text-yellow-500">MINDS</span>
          </Typography>
        </Box>
        <Box className="text-sm text-gray-400 space-y-3 mb-6">
          <Box className="flex items-start">
            <LocationOnIcon className="mr-2 text-yellow-500" />
            <Typography>
              JP Central Tower, JP Nagar<br />Bangalore, India, 560078
            </Typography>
          </Box>
          <Box className="flex items-center">
            <PhoneIcon className="mr-2 text-yellow-500" />
            <Typography>+91 9876543210</Typography>
          </Box>
          <Box className="flex items-center">
            <EmailIcon className="mr-2 text-yellow-500" />
            <Typography>info@joyfulminds.com</Typography>
          </Box>
        </Box>
        <Box className="flex gap-2">
          <IconButton size="small" className="bg-gray-800 hover:bg-yellow-500 transition">
            <FacebookIcon fontSize="small" className="text-white" />
          </IconButton>
          <IconButton size="small" className="bg-gray-800 hover:bg-yellow-500 transition">
            <TwitterIcon fontSize="small" className="text-white" />
          </IconButton>
          <IconButton size="small" className="bg-gray-800 hover:bg-yellow-500 transition">
            <InstagramIcon fontSize="small" className="text-white" />
          </IconButton>
          <IconButton size="small" className="bg-gray-800 hover:bg-yellow-500 transition">
            <LinkedInIcon fontSize="small" className="text-white" />
          </IconButton>
          <IconButton size="small" className="bg-gray-800 hover:bg-yellow-500 transition">
            <YouTubeIcon fontSize="small" className="text-white" />
          </IconButton>
        </Box>
      </Grid>

      {/* Company Links */}
      <Grid item xs={12} sm={6} md={2} className="text-left">
  <Typography variant="h6" className="font-bold text-white !mb-4 inline-block">Company</Typography>
  <Box className="inline-flex flex-col space-y-2 text-sm text-gray-400">
    {["Home", "About Us", "Blog", "Our Initiatives", "Log In", "Contact Us"].map(item => (
      <Button key={item} className="inline-flex justify-start p-0 hover:text-yellow-500 text-gray-400 capitalize transition-all duration-300" disableRipple>{item}</Button>
    ))}
  </Box>
</Grid>
      {/* Recent Campaigns */}
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" className="font-bold text-white mb-4">Recent Campaigns</Typography>
        <Box className="flex flex-col space-y-3 text-sm text-gray-400">
          {[
            "Empowering Girls Toward a Radiant Future",
            "Campaign for Rural Education and Skills",
            "Supporting the Underprivileged Education",
            "Build Schools, Empower the Vulnerable"
          ].map(campaign => (
            <Button key={campaign} className="justify-start p-0 hover:text-yellow-500 text-gray-400 text-left transition-all duration-300" disableRipple>{campaign}</Button>
          ))}
        </Box>
      </Grid>

      {/* Newsletter */}
      <Grid item xs={12} md={3}>
        <Typography variant="h6" className="font-bold text-white !mb-4">Newsletter</Typography>
        <Typography variant="body2" className="text-gray-400 !mb-4">
          Subscribe to our newsletter to get updates about our initiatives and campaigns.
        </Typography>
        <Box className="flex items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow rounded-l-full px-4 py-2 text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <Button
            variant="contained"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-r-full px-6"
            sx={{ borderRadius: '0 9999px 9999px 0' }}
          >
            Send
          </Button>
        </Box>
      </Grid>
    </Grid>

    {/* Divider */}
    <Divider className="!mb-6 bg-gray-700" />

    {/* Bottom Bar */}
    <Box className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
      <Typography>
        © 2023 | 100% Secure Payments | Powered by CharityNela | v1.0.3.4
      </Typography>

      <Box className="flex flex-wrap gap-3 items-center">
        <Typography className="hover:text-yellow-500 cursor-pointer">Privacy Policy</Typography>
        <Typography>|</Typography>
        <Typography className="hover:text-yellow-500 cursor-pointer">Terms of Use</Typography>
        <Typography>|</Typography>
        <Typography className="hover:text-yellow-500 cursor-pointer">Powered by CharityNela</Typography>
      </Box>

      <Box className="flex space-x-2">
        <img src="https://via.placeholder.com/40x25" alt="Visa" className="h-6" />
        <img src="https://via.placeholder.com/40x25" alt="Mastercard" className="h-6" />
        <img src="https://via.placeholder.com/40x25" alt="Amex" className="h-6" />
        <img src="https://via.placeholder.com/40x25" alt="PayPal" className="h-6" />
      </Box>
    </Box>
  </Container>
</Box>

    </Box>
  );
}