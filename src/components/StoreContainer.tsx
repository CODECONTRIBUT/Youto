import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import '../css/cardcontainer.css'

interface Props{
    children: ReactNode
}

const StoreContainer = ({children}: Props) => {
  return (
    <Box className='card_container'>
        {children}
    </Box>
  )
}

export default StoreContainer