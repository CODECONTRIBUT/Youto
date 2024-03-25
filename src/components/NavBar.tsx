import ToggleColorMode from './ToggleColorMode'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { HStack, Image } from '@chakra-ui/react'
import MenuLayout from './MenuLayout'


const NavBar = () => {
  return (
    <HStack padding='15px' justifyContent='space-between'>
        <NavLink to='/'>
            <Image src={logo} boxSize='60px' objectFit='cover' className='nav_logo' alt='logo'/>     
        </NavLink>
        <MenuLayout />
        <ToggleColorMode />
    </HStack>
  )
}

export default NavBar