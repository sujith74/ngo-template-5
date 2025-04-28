// pages/about.js
import React from 'react';
import { Container, Typography, Box, Grid, Button, Paper, Avatar } from '@mui/material';
import Image from 'next/image';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export default function AboutUs() {
  // Section Title Component inline
  const SectionTitle: FC<SectionTitleProps>  = ({ title }) => (
    <Box className="mb-4">
      <Typography variant="h5" component="h2" className="font-bold text-slate-800">
        {title}
      </Typography>
      <Box className="w-20 h-1 bg-amber-500 mt-2 mb-4"></Box>
    </Box>
  );
  
  // Testimonial Component inline
  // const Testimonial = ({ quote, author, title, imageUrl }) => (
  //   <Box className="flex flex-col">
  //     <Box className="mb-4 text-amber-500">
  //       <FormatQuoteIcon fontSize="large" />
  //     </Box>
  //     <Typography variant="body1" className="mb-4 italic text-gray-700">
  //       "{quote}"
  //     </Typography>
  //     <Box className="flex items-center">
  //       <Avatar 
  //         src={imageUrl} 
  //         alt={author} 
  //         className="mr-4"
  //         sx={{ width: 50, height: 50 }}
  //       />
  //       <Box>
  //         <Typography variant="subtitle1" className="font-medium">
  //           {author}
  //         </Typography>
  //         <Typography variant="body2" className="text-gray-500">
  //           {title}
  //         </Typography>
  //       </Box>
  //     </Box>
  //   </Box>
  // );
  
  // // Partner Logo Component inline
  // const PartnerLogo = ({ name }) => (
  //   <Box className="flex justify-center items-center h-24 p-4 grayscale hover:grayscale-0 transition-all">
  //     <Image
  //       src={`/images/partners/${name.toLowerCase()}.png`}
  //       alt={`${name} logo`}
  //       width={120}
  //       height={60}
  //       objectFit="contain"
  //     />
  //   </Box>
  // );

  return (
    <div className="bg-slate-50">
      {/* Hero Section with Illustration */}
      <div className="relative bg-slate-800 py-20 ">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h1" className="font-bold !mb-4">
                About <span className="text-amber-500">Us</span>
              </Typography>
              <Typography variant="body1" className="text-gray-500 mb-6">
                At Joyful Minds Foundation, we believe every child deserves a bright future. Since 2015, we have dedicated ourselves 
                to our mission to fulfill basic needs, nurture them thrive and flourish. Our organization is wholeheartedly dedicated to brightening the lives of children from 
                diverse backgrounds across society. We are driven by an unwavering determination to empower these young minds, creating a safe, joyful, and nurturing 
                environment for their growth and development.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} className="relative h-80 md:h-96">
              <Image 
                src="https://cdn.pixabay.com/photo/2020/07/03/06/12/people-5365324_1280.jpg" 
                alt="Children learning illustration" 
                layout="fill"
                objectFit="contain"
                priority
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      
      {/* Mission and Values Section */}
      <Container maxWidth="lg" className="py-16">
        <Box className="max-w-3xl mx-auto mb-12">
          <SectionTitle title="Our Mission" />
          <Typography variant="body1" className="mb-8 text-gray-700">
            Our mission at Joyful Minds is to positively impact the lives of every child, addressing their needs in healthcare, education, and emotional support. We are 
            dedicated to creating a nurturing environment where each child feels safe, cherished, and empowered to explore and develop their unique talents, 
            personality, and skills. Our ultimate goal is to enable every child to blossom into a joyful, well-rounded individual, ready to contribute to a better and 
            happier society.
          </Typography>
          
          <SectionTitle title="Our Values" />
          <Box component="ul" className="space-y-4 mb-12 list-disc pl-5">
            <Typography component="li" variant="body1" className="text-gray-700">
              <span className="font-semibold">Empathy:</span> We approach each child cautiously and with an understanding of their unique circumstances.
            </Typography>
            <Typography component="li" variant="body1" className="text-gray-700">
              <span className="font-semibold">Transparency:</span> We believe in honesty and Accountability, and, hence, we ensure that our donors, supporters and our beneficiaries are all well aware of our work and its impact.
            </Typography>
            <Typography component="li" variant="body1" className="text-gray-700">
              <span className="font-semibold">Inclusivity:</span> We ensure that children from all walks of life, ethnicity or ability are welcomed and given the support and love that they deserve.
            </Typography>
            <Typography component="li" variant="body1" className="text-gray-700">
              <span className="font-semibold">Empowerment:</span> We believe in empowering children so that they can become independent citizens and are able to stand up for themselves.
            </Typography>
          </Box>
          
          <SectionTitle title="Join Us" />
          <Typography variant="body1" className="mb-8 text-gray-700">
            We are currently situated in 20 states and 3 Union Territories of India and have impacted the lives of over 48,000 children positively with the collective 
            efforts of our team, volunteers and donors.
          </Typography>
          <Typography variant="body1" className="mb-6 text-gray-700">
            At Joyful Minds, we firmly believe that positive change requires collective efforts. We sincerely invite you to join hands with us in nurturing young minds 
            and shaping the future of our world. Your support, in any capacity, will make a significant difference. Whether you choose to volunteer your time, raise 
            awareness about our initiatives, or contribute to our projects, your involvement will impact the lives of countless children. Together, we can create a world 
            where every child has the opportunity to be, learn, pursue their dreams, and above all, find happiness!
          </Typography>
          <Typography variant="body1" className="text-gray-700">
            Get in Touch: If you have any questions or suggestions for our cause, then please feel free to get in touch with us. Visit the &quot;Contact Us&quot; page on our 
            website to find the necessary information.
          </Typography>
        </Box>
      </Container>
      
      {/* Featured In Section */}
      <Box className="bg-white py-12">
        <Container maxWidth="lg">
          <Typography variant="h5" component="h3" className="text-center font-medium !mb-8 text-slate-800">
            As Featured In
          </Typography>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            {[
              { name: 'Channel4', logo: 'https://cdn.pixabay.com/photo/2012/10/10/04/46/oldtimer-60521_1280.jpg' },
              { name: 'StraitTimes', logo: 'https://cdn.pixabay.com/photo/2018/04/23/21/26/auto-3345601_1280.jpg' },
              { name: 'AsiaOne', logo: 'https://cdn.pixabay.com/photo/2017/06/08/23/00/apple-2385198_1280.jpg' },
              { name: 'Today', logo: 'https://cdn.pixabay.com/photo/2015/02/04/11/29/tissue-623649_1280.jpg' }
            ].map((media, index) => (
              <Grid item key={index} xs={6} sm={3}>
                <Box className="flex justify-center items-center h-20">
                  <Image
                    src={media.logo}
                    alt={`${media.name} logo`}
                    width={120}
                    height={60}
                    objectFit="contain"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Testimonials Section */}
      <Box className="py-16 bg-slate-100">
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" className="text-center font-bold !mb-10 text-slate-800">
            What the world thinks about us
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={8}>
              <Paper elevation={1} className="p-6 rounded-lg mb-4">
                <Box className="flex flex-col">
                  <Box className="mb-4 text-amber-500">
                    <FormatQuoteIcon fontSize="large" />
                  </Box>
                  <Typography variant="body1" className="mb-4 italic text-gray-700">
                  &quot;Joyful Minds is doing a fantastic job in the field of education, our school children get to know so many things during this program&quot;
                  </Typography>
                  <Box className="flex items-center">
                    <Avatar 
                      src="https://cdn.pixabay.com/photo/2022/04/06/13/58/woman-7115624_1280.jpg" 
                      alt="Aditya Birla" 
                      className="mr-4"
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" className="font-medium">
                        Aditya Birla
                      </Typography>
                      <Typography variant="body2" className="text-gray-500">
                        Principal, Sun Harmony School
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* Partners Section */}
      <Container maxWidth="lg" className="py-16">
        <Typography variant="h4" component="h2" className="text-center font-bold !mb-10 text-slate-800">
          Our Partners
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {[
            { name: 'Stonehill', logo: 'https://cdn.pixabay.com/photo/2023/03/02/19/37/tunnel-7826204_1280.jpg' },
            { name: 'Greenwheel', logo: 'https://cdn.pixabay.com/photo/2016/11/14/04/25/umbrella-1822586_1280.jpg' },
            { name: 'Shivram', logo: 'https://cdn.pixabay.com/photo/2020/12/23/03/14/men-5853759_1280.jpg' },
            { name: 'BlueSky', logo: 'https://cdn.pixabay.com/photo/2017/12/27/14/02/happy-holidays-3042751_1280.jpg' }
          ].map((partner, index) => (
            <Grid item key={index} xs={6} sm={3}>
              <Box className="flex justify-center items-center h-24 p-4 grayscale hover:grayscale-0 transition-all">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  objectFit="contain"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Call to Action Section */}
      <Box className="bg-slate-800 text-white py-16">
        <Container maxWidth="lg">
          <Typography variant="h4" component="h2" className="text-center font-bold !mb-4">
            Want to be a changemaker?
          </Typography>
          <Typography variant="body1" className="text-center !mb-8">
            You can become a changemaker by making a fundraiser for this organization.
          </Typography>
          <Box className="flex justify-center !mb-12">
            <Button variant="contained" color="warning" size="large" className="px-8 py-3">
              START A CAMPAIGN
            </Button>
          </Box>
          
          <Grid container spacing={4} justifyContent="center" className="text-center">
            <Grid item xs={12} sm={4}>
              <Box className="flex justify-center !mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-xl">1</span>
                </div>
              </Box>
              <Typography variant="h6" className="!mb-2">Create your campaign</Typography>
              <Typography variant="body2" className="text-slate-300">
                In three simple steps, start your campaign
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-xl">2</span>
                </div>
              </Box>
              <Typography variant="h6" className="mb-2">Approval by the admins</Typography>
              <Typography variant="body2" className="text-slate-300">
                Get verified by Joyful Minds, once they approve, you can go public
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <span className="text-xl">3</span>
                </div>
              </Box>
              <Typography variant="h6" className="mb-2">Share in your networks</Typography>
              <Typography variant="body2" className="text-slate-300">
                Share your campaign in your network for better reach
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}