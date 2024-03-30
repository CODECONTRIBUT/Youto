import { Box, Grid, HStack, Heading, Link, SimpleGrid } from '@chakra-ui/react'
//import * as Icon from 'react-feather';
import '../css/contactus.css'

const ContactDetails = () => {
  return (
          <Box className='details_container'>
            <HStack className='text_container' display='flex' flexDirection='column'>
              <Heading className='detailed_text'>Contact Information</Heading>
              <Heading className='detailed_two'>Fill up the form and our team will get back to you within 24 hours</Heading>
            </HStack>
            <Box>
              <Link href="tel:+123456789">
                <Heading className='contact_text'>+123456789</Heading>
              </Link>
      
              <Link href="mailto:abc12345@gmail.com">
                <Heading>abc12345@gmail.com</Heading>
              </Link>
            </Box>
      
            <div>
              <div className='big_circle'></div>
              <div className='small_circle'></div>
            </div>
      
            <SimpleGrid className='socialmedia_container'>
              <Link className='social_icon' href="https://www.facebook.com/profile.php?id=100021937291259">
              </Link>
              <Link className='social_icon' href="https://www.instagram.com/_allenjones/">
              </Link>
              <Link className='social_icon' href="https://www.linkedin.com/in/allen-jones-b799b7171/">
              </Link>
            </SimpleGrid>
          </Box>
  )
}

export default ContactDetails