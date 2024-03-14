import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/webp-logo.svg'

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Nav</Text>
    </HStack>
  )
}

export default NavBar