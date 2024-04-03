import { Box, Button, Input} from '@chakra-ui/react';
import { FieldValues, useForm } from 'react-hook-form';
import { BiChevronUpCircle } from "react-icons/bi";

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
        reset();
    };

  return (
    <form className='input_form' onSubmit={handleSubmit(onSubmit)}>
            <Box className='input_block'>
                <label htmlFor='name'>Name:</label>
                <Input {...register('name', {required: true})} placeholder='Abc D' className='input_item'></Input>           
            </Box>
            {errors.name?.type === 'required' && <p color='red'>The name is required</p>}
            <Box className='input_block'>
                <label htmlFor='email'>Email:</label>
                <Input {...register('email', {required: true})} placeholder='abc@gmail.com' className='input_item'></Input>           
            </Box>
            {errors.email?.type === 'required' && <p>The email is required</p>}
            <Box className='input_block'>
                <label htmlFor='phone'>Phone:</label>
                <Input {...register('phone')}  placeholder='0412345678' className='input_item'></Input>
            </Box>
            <Box className='input_block'>
                <label htmlFor='message'>Message:</label>
                <Input {...register('message', {required: true})} placeholder='excellent!' className='input_item'></Input>
            </Box>
            {errors.message?.type === 'required' && <p>Your message is required</p>}
            <Button width='20%' disabled={!isValid} leftIcon={<BiChevronUpCircle />} colorScheme='teal' size='sm' fontWeight='bold' marginLeft={1} marginTop='25px' type='submit' variant='solid'>Submit</Button>     
    </form>
  )
}

export default FeedbackForm