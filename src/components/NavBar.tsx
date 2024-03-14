import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/webp-logo.svg'
import ToggleColorMode from './ToggleColorMode'

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='15px'>
        <Image src={logo} boxSize='60px'/>
        <ToggleColorMode/>
    </HStack>
  )
}

export default NavBar