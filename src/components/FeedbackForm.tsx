import { Box, Button, Input} from '@chakra-ui/react';
import { FieldValues, useForm } from 'react-hook-form';
import { BiChevronUpCircle } from "react-icons/bi";
import Swal from 'sweetalert2';
import '../css/contactus.css'

interface FormData {
    name: string,
    email: string,
    phone: string,
    message: string
}

const FeedbackForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm<FormData>();
    const onSubmit = (data: FieldValues) => {
        console.log(data);
        Swal.fire({
            title: "Thanks",
            text: "Your message was sent through",
            icon: "success",
            customClass: 'swal-wide'
          });
        reset();
    };

  return (
    <form className='input_form' onSubmit={handleSubmit(onSubmit)}>
            <Box className='input_block'>
                <label htmlFor='name'>Name:</label>
                <Input {...register('name', {required: true})} className='input_item'></Input>           
            </Box>
            {errors.name?.type === 'required' && <p className='error_msg'>The name is required</p>}
            <Box className='input_block'>
                <label htmlFor='email'>Email:</label>
                <Input {...register('email', {required: true})} className='input_item'></Input>           
            </Box>
            {errors.email?.type === 'required' && <p className='error_msg'>The email is required</p>}
            <Box className='input_block'>
                <label htmlFor='phone'>Phone:</label>
                <Input {...register('phone')} className='input_item'></Input>
            </Box>
            <Box className='input_block'>
                <label htmlFor='message'>Message:</label>
                <Input {...register('message', {required: true})} className='input_item'></Input>
            </Box>
            {errors.message?.type === 'required' && <p className='error_msg'>Your message is required</p>}
            <Button width='30%' isDisabled={!isValid} leftIcon={<BiChevronUpCircle />} colorScheme='teal' fontWeight='bold' marginLeft={1} marginTop='25px' type='submit' variant='solid'>Submit</Button>     
    </form>
  )
}

export default FeedbackForm