import "../css/navbar.css"
import { BsChevronDown } from 'react-icons/bs'
import MenuDefinitionItem from './MenuDefinitionItem'
import { Box, Button, Menu, MenuButton, MenuList } from '@chakra-ui/react'

const MenuLayout = () => {
  return (
    <Box width='60%' className='nav_box' padding={3} backgroundColor="transparent">
    <ul className='navbar_List'>
      <li>
        <Menu>
          <MenuDefinitionItem menuTerm='Homepage' linkStr='/' />
        </Menu>
      </li>
      <li>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>} className='nav_link' width='100%'>
              Genre Entities
            </MenuButton>
            <MenuList>
                <MenuDefinitionItem menuTerm='Genres' linkStr='/genres' />
                <MenuDefinitionItem menuTerm='SubMenu 2 available soon' linkStr='/' />
            </MenuList>
        </Menu>
      </li>            
      <li>                  
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>} className='nav_link'>
              Stores
            </MenuButton>
            <MenuList>
                <MenuDefinitionItem menuTerm='SubMenu 1 available soon' linkStr='/' />
                <MenuDefinitionItem menuTerm='SubMenu 2 available soon' linkStr='/' />
            </MenuList>
        </Menu>
      </li>    
      <li>
        <Menu>
          <MenuDefinitionItem menuTerm='Menu 3 available soon' linkStr='/' />
        </Menu>
      </li>
      <li>
        <Menu>
          <MenuDefinitionItem menuTerm='Contact Us' linkStr='/' />
        </Menu>
      </li>
    </ul>
</Box>
  )
}

export default MenuLayout