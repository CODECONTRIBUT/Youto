import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/webp-logo.svg'
import ToggleColorMode from './ToggleColorMode'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchStr: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding='15px'>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch}/>
        <ToggleColorMode />
    </HStack>
  )
}

export default NavBar