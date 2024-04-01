import { Box, Grid, HStack, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react'
import '../css/contactus.css'
import * as Icon from 'react-feather';

const ContactDetails = () => {
  return (
          <Box className='details_container'>
            <HStack className='text_container' display='flex' flexDirection='column'>
              <Heading className='detailed_one'>Contact Information</Heading>
              <Text className='detailed_two'>Fill up the form and our team will get back to you within 24 hours</Text>
            </HStack>
            <Box className='contact_container'>
              <Link className='contact_details' href="tel:+123456789" display='flex' alignItems='center'>
                <Icon.Phone size={15} color="rgb(252, 113, 137)" />
                <Text className='contact_text'>+123456789</Text>
              </Link>
      
              <Link className='contact_details' href="mailto:abc12345@gmail.com" display='flex' alignItems='center'>
                <Icon.Mail size={15} color="rgb(252, 113, 137)" />
                <Text className='contact_text'>abc12345@gmail.com</Text>
              </Link>
            </Box>
      
            <Box className='circle_container'>
              <div className='big_circle'></div>
              <div className='small_circle'></div>
            </Box>
      
            <SimpleGrid className='socialmedia_container' spacing={2} display='flex' flexDirection='row'>
              <Link className='social_icon' href="https://www.facebook.com" target='_blank'>
                <Icon.Facebook color="#fff" size={20} />
              </Link>
              <Link className='social_icon' href="https://www.instagram.com" target='_blank'>
                <Icon.Instagram color="#fff" size={20} />
              </Link>
              <Link className='social_icon' href="https://www.linkedin.com" target='_blank'>
                <Icon.Linkedin color="#fff" size={20} />
              </Link>
            </SimpleGrid>
          </Box>
  )
}

export default ContactDetails