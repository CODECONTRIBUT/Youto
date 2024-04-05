import { Box, HStack, Heading, Text } from '@chakra-ui/react'
import '../css/contactus.css'
import ContactDetails from '../components/ContactDetails'
import FeedbackForm from '../components/FeedbackForm'

const ContactUsPage = () => {
  return (
    <Box className='page_container'>
        <HStack className='page_heading'  display='flex' flexDirection='column'> 
            <Heading className='text_one' fontSize='x-large'>Contact Us</Heading>
            <Heading className='text_two' fontSize='large'>Any Question or remarks? Just write us a message</Heading>
        </HStack>
        <Box className='form_container'>
            <ContactDetails />
            <FeedbackForm />
        </Box>
    </Box>
  )
}

export default ContactUsPage