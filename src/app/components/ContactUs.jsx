'use client'

import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Card, 
  CardContent,
  IconButton,
  InputAdornment,
  Divider,
  Paper,
  useMediaQuery
} from '@mui/material';
import { 
  Phone, 
  Email, 
  LocationOn, 
  Facebook, 
  Twitter, 
  Instagram, 
  LinkedIn, 
  YouTube,
  Send
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f8c40c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1a3c5f',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f7fa',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          backgroundColor: '#f8c40c',
          '&:hover': {
            backgroundColor: '#e9b700',
          },
        },
        outlinedPrimary: {
          borderColor: '#f8c40c',
          color: '#f8c40c',
          '&:hover': {
            backgroundColor: 'rgba(248, 196, 12, 0.04)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            '&.Mui-focused fieldset': {
              borderColor: '#f8c40c',
            },
          },
        },
      },
    },
  },
});

const ContactUs = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="bg-white min-h-screen">
        {/* Navigation Bar */}
        <Box className="bg-white py-3 shadow-sm">
          <Container maxWidth="lg">
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Box className="flex items-center">
                  <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/CDRA/campaign-assets/0eb4c68e-785f-4f51-a735-37faa46fbeff_thumbnail_0fff8a35-a963-4bf1-8c42-3c98f5b15207_thumbnail_30e11477-9362-4975-b9dc-ab8dbca65e4a_thumbnail_Joyful%20Minds%20logo%20v4.png" alt="Joyful Minds Logo" className="h-12" />
                  {/* <Typography variant="h5" component="div" className="ml-2 text-secondary font-bold">
                    <span className="text-blue-800">Joyful</span>
                    <span className="text-yellow-500">Minds</span>
                  </Typography> */}
                </Box>
              </Grid>
              
              <Grid item className="hidden md:block">
                <Box className="flex !space-x-6">
                  <Typography variant="body1" component="a" href="#" className="text-gray-700 hover:text-yellow-500 transition-colors">
                    Home
                  </Typography>
                  <Typography variant="body1" component="a" href="#" className="text-gray-700 hover:text-yellow-500 transition-colors">
                    About
                  </Typography>
                  <Typography variant="body1" component="a" href="#" className="text-gray-700 hover:text-yellow-500 transition-colors">
                    Our Initiatives
                  </Typography>
                  <Typography variant="body1" component="a" href="#" className="text-gray-700 hover:text-yellow-500 transition-colors">
                    Log In
                  </Typography>
                  <Typography variant="body1" component="a" href="#" className="text-gray-700 hover:text-yellow-500 transition-colors">
                    Report
                  </Typography>
                  <Typography variant="body1" component="a" href="#" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
                    Contact Us
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Contact Form Section */}
        <Box className="bg-gradient-to-r from-gray-900 to-gray-800 py-16">
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h3" component="h1" className="text-white text-center mb-2 font-semibold">
                  Reach out to us here
                </Typography>
                <Typography variant="body1" className="text-blue-100 text-center mb-8">
                  Fill out this form to share any ideas, feedback, or explore a volunteering opportunity
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
                <Paper elevation={0} className="p-8 rounded-lg max-w-3xl mx-auto">
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" className="text-gray-600 mb-1 uppercase text-xs font-medium">
                          Full Name
                        </Typography>
                        <TextField
                          fullWidth
                          name="fullName"
                          placeholder="John Smith"
                          variant="outlined"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" className="text-gray-600 mb-1 uppercase text-xs font-medium">
                          Email ID
                        </Typography>
                        <TextField
                          fullWidth
                          name="email"
                          type="email"
                          placeholder="email@example.com"
                          variant="outlined"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" className="text-gray-600 mb-1 uppercase text-xs font-medium">
                          Message
                        </Typography>
                        <TextField
                          fullWidth
                          name="message"
                          multiline
                          rows={5}
                          placeholder="Write your message"
                          variant="outlined"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      
                      <Grid item xs={12} className="flex justify-center">
                        <Button 
                          type="submit"
                          variant="contained" 
                          color="primary"
                          size="large"
                          className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full"
                          endIcon={<Send />}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Featured Section */}
        <Box className="py-16">
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" className="text-center !mb-12 font-medium text-gray-800">
              As Featured In
            </Typography>
            
            <Box className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <Box className="grayscale hover:grayscale-0 transition-all">
                <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/377901b5-8fe7-4216-96ff-dc2d09ca6764_thumbnail__1-1350748353.jpg" alt="Channel Nebraska" className="h-12" />
              </Box>
              <Box className="grayscale hover:grayscale-0 transition-all">
                <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/535d1c7c-a05b-421b-b08c-8fb7facf9075_thumbnail_512x512bb.jpg" alt="Straits Times" className="h-16" />
              </Box>
              <Box className="grayscale hover:grayscale-0 transition-all">
                <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/e728286d-2acf-4847-9551-0ae36ef52cf5_thumbnail_AsiaOne_logo-4.png" alt="Asia One" className="h-12" />
              </Box>
              <Box className="grayscale hover:grayscale-0 transition-all">
                <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/e7234b27-4fcc-4e7e-92ce-ba5ad1ee5936_thumbnail_327732818_696911088596470_7423580052951829063_n.jpg" alt="Today" className="h-12" />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Testimonials Section */}
        <Box className="bg-gray-100 py-16">
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" className="text-center text-gray-800 mb-10 font-medium">
              What the world thinks about us
            </Typography>
            
            <Box className="relative">
              <Card elevation={0} className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg">
                <CardContent>
                  <Box className="flex flex-col">
                    <Typography variant="h5" component="div" className="quote-icon text-gray-300 text-6xl leading-none font-serif">
                      "
                    </Typography>
                    <Typography variant="body1" className="text-gray-700 mt-2 mb-6">
                      Joyful Minds is doing a fantastic job in the field of education, our school children get to know so many things during this program
                    </Typography>
                    
                    <Box className="flex items-center mt-4">
                      <Box className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/8e6d9561-e897-4e6f-ab1f-63f576247d87_thumbnail_553f7168-bb20-47d2-b948-dae1d2f65eca_thumbnail_312284710_484070317215727_207828877102448441_n.jpg" alt="Aditya Birla" className="w-full h-full object-cover" />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" className="font-medium">
                          Aditya Birla
                        </Typography>
                        <Typography variant="body2" className="text-gray-600">
                          Principal, Sun Harmony School
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              
              <IconButton 
                className="!absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md"
                sx={{ display: { xs: 'none', md: 'flex' }}}
              >
                <Box className="text-gray-600">&lt;</Box>
              </IconButton>
              
              <IconButton 
                className="!absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md"
                sx={{ display: { xs: 'none', md: 'flex' }}}
              >
                <Box className="text-gray-600">&gt;</Box>
              </IconButton>
            </Box>
          </Container>
        </Box>

        {/* Partners Section */}
        <Box className="py-16">
          <Container maxWidth="lg">
            <Typography variant="h4" component="h2" className="text-center !mb-12 font-medium text-gray-800">
              Our Partners
            </Typography>
            
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={6} md={3} className="flex justify-center">
                <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/6c2496c4-7dc0-4978-90e6-622dc9c54037_thumbnail_school-logo-2.png" alt="Stonehill School" className="h-20 object-contain" />
              </Grid>
              <Grid item xs={6} md={3} className="flex justify-center">
                <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/632edaa1-f22b-4db1-9152-6a19b1b0bd5a_thumbnail_school-logo-3.png" alt="Green Valley" className="h-20 object-contain" />
              </Grid>
              <Grid item xs={6} md={3} className="flex justify-center">
                <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/7d81e8d1-38dd-4958-b6ca-210349946580_thumbnail_school-logo-ND-3.png" alt="Shriram" className="h-20 object-contain" />
              </Grid>
              <Grid item xs={6} md={3} className="flex justify-center">
                <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/gocrowdera/background/1603f06a-9d15-48ed-b56e-e6dff5aa0ae6_thumbnail_school-logo-5s.png" alt="Harmony School" className="h-20 object-contain" />
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Call to Action Section */}
        <Box className="bg-gradient-to-r from-gray-900 to-gray-800 py-16 text-center">
          <Container maxWidth="md">
            <Typography variant="h3" component="h2" className="text-white mb-3">
              Want to be a changemaker?
            </Typography>
            <Typography variant="body1" className="text-blue-100 !mb-8">
              You can become a changemaker by making a fundraiser for this organization.
            </Typography>
            
            <Button 
              variant="contained" 
              color="primary" 
              className="bg-yellow-500 hover:bg-yellow-600 !mb-12"
              size="large"
            >
              Start a Campaign
            </Button>
            
            <Grid container spacing={6} className="mt-4">
              <Grid item xs={12} md={4}>
                <Box className="text-center">
                  <Box className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </Box>
                  <Typography variant="h6" className="text-white mb-2">
                    Create your campaign
                  </Typography>
                  <Typography variant="body2" className="text-blue-100">
                    In three simple steps, start your campaign.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box className="text-center">
                  <Box className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </Box>
                  <Typography variant="h6" className="text-white mb-2">
                    Approval by the admins
                  </Typography>
                  <Typography variant="body2" className="text-blue-100">
                    Get verified by experts. Once they approve, you will get notified.
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Box className="text-center">
                  <Box className="bg-blue-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </Box>
                  <Typography variant="h6" className="text-white mb-2">
                    Share in your networks
                  </Typography>
                  <Typography variant="body2" className="text-blue-100">
                    Share your live campaign in your network for better reach.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box className="bg-white pt-16 pb-8">
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box className="mb-6">
                  <Box className="flex items-center mb-4">
                    <img src="https://crowdera-platform.s3.ap-south-1.amazonaws.com/CDRA/campaign-assets/0eb4c68e-785f-4f51-a735-37faa46fbeff_thumbnail_0fff8a35-a963-4bf1-8c42-3c98f5b15207_thumbnail_30e11477-9362-4975-b9dc-ab8dbca65e4a_thumbnail_Joyful%20Minds%20logo%20v4.png" alt="Joyful Minds Logo" className="h-12" />
                    {/* <Typography variant="h5" component="div" className="ml-2 text-secondary font-bold">
                      <span className="text-blue-800">Joyful</span>
                      <span className="text-yellow-500">Minds</span>
                    </Typography> */}
                  </Box>
                  
                  <Typography variant="body2" className="text-gray-600 !mb-4">
                    We are a nonprofit organization dedicated to helping those in need around the world through various programs and initiatives.
                  </Typography>
                  
                  <Box className="flex flex-col space-y-2">
                    <Box className="flex items-start">
                      <LocationOn className="text-gray-600 mr-2" fontSize="small" />
                      <Typography variant="body2" className="text-gray-600">
                        304 Santoshi Nagar, Wardhoda Nagpur, 440008
                      </Typography>
                    </Box>
                    
                    <Box className="flex items-center">
                      <Phone className="text-gray-600 mr-2" fontSize="small" />
                      <Typography variant="body2" className="text-gray-600">
                        +91 9876543210
                      </Typography>
                    </Box>
                    
                    <Box className="flex items-center">
                      <Email className="text-gray-600 mr-2" fontSize="small" />
                      <Typography variant="body2" className="text-gray-600">
                        joyfulminds@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box className="flex space-x-2 mt-4">
                    <IconButton size="small" className="text-gray-600">
                      <Facebook fontSize="small" />
                    </IconButton>
                    <IconButton size="small" className="text-gray-600">
                      <Twitter fontSize="small" />
                    </IconButton>
                    <IconButton size="small" className="text-gray-600">
                      <Instagram fontSize="small" />
                    </IconButton>
                    <IconButton size="small" className="text-gray-600">
                      <LinkedIn fontSize="small" />
                    </IconButton>
                    <IconButton size="small" className="text-gray-600">
                      <YouTube fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={2}>
                <Typography variant="h6" className="font-medium !mb-4 text-gray-800">
                  Quick Links
                </Typography>
                <Box className="flex flex-col !space-y-2">
                  <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                    Home
                  </Typography>
                  <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                    About Us
                  </Typography>
                  <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                    Causes
                  </Typography>
                  <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                    Report
                  </Typography>
                  <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                    Login
                  </Typography>
                  <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                    Contact
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" className="font-medium !mb-4 text-gray-800">
                  Recent Posts
                </Typography>
                <Box className="flex flex-col space-y-3">
                  <Box className="flex items-center">
                    <Box className="text-yellow-500 mr-2">›</Box>
                    <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                      First charity activity of this summer
                    </Typography>
                  </Box>
                  <Box className="flex items-center">
                    <Box className="text-yellow-500 mr-2">›</Box>
                    <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                      Big charity: build school for poor children
                    </Typography>
                  </Box>
                  <Box className="flex items-center">
                    <Box className="text-yellow-500 mr-2">›</Box>
                    <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                      Building clean-water system for rural poor
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={3}>
                <Typography variant="h6" className="font-medium !mb-4 text-gray-800">
                  Contact Us
                </Typography>
                <Box className="flex flex-col space-y-3">
                  <Box className="flex items-start">
                    <LocationOn className="text-yellow-500 mr-2" fontSize="small" />
                    <Typography variant="body2" className="text-gray-600">
                      123 Charity Street, Humanitarian City
                    </Typography>
                  </Box>
                  <Box className="flex items-center">
                    <Phone className="text-yellow-500 mr-2" fontSize="small" />
                    <Typography variant="body2" className="text-gray-600">
                      +1 800 765 6748
                    </Typography>
                  </Box>
                  <Box className="flex items-center">
                    <Email className="text-yellow-500 mr-2" fontSize="small" />
                    <Typography variant="body2" className="text-gray-600">
                      help@joyfulminds.com
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            
            <Divider className="my-6" />
            
            <Box className="flex flex-col md:flex-row justify-between items-center">
              <Typography variant="body2" className="text-gray-600 text-center md:text-left mb-4 md:mb-0">
                © 2025 Joyful Minds. All rights reserved.
              </Typography>
              
              <Box className="flex space-x-4">
                <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Privacy Policy
                </Typography>
                <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Terms of Service
                </Typography>
                <Typography variant="body2" component="a" href="#" className="text-gray-600 hover:text-yellow-500 transition-colors">
                  Sitemap
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContactUs;