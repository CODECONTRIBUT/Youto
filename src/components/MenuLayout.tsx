import "../css/navbar.css"
import MenuDefinitionItem from './MenuDefinitionItem'
import { Box } from '@chakra-ui/react'
import { TfiAlignJustify } from "react-icons/tfi";
import { GrClose } from "react-icons/gr";

const MenuLayout = () => {
  const showSideBar = () => {
    const sideBar = document.getElementById('side_bar');
    if (sideBar) {
        sideBar.style.display = 'flex';
    }
  }

  const hideSideBar = () => {
    const sideBar = document.getElementById('side_bar');
    if (sideBar) {
        sideBar.style.display = 'none';
    }
  }

  return (
    <Box width='60%' className='nav_box' padding={3} backgroundColor="transparent">
      <div>
        <ul className='side_bar' id="side_bar">
          <li onClick={hideSideBar} className="hide_button"><a href="#"><GrClose /></a></li>
          <MenuDefinitionItem menuTerm='Home' linkStr='/' />
          <MenuDefinitionItem menuTerm='Genres' linkStr='/genres' />               
          <MenuDefinitionItem menuTerm='Stores' linkStr='/stores' />
          <MenuDefinitionItem menuTerm='Contact Us' linkStr='/constactus' />
        </ul>
      </div>
      <div className='navbar_list'>
        <ul>
          <MenuDefinitionItem clasStr='hided_item' menuTerm='Home' linkStr='/' />
          <MenuDefinitionItem clasStr='hided_item' menuTerm='Genres' linkStr='/genres' />               
          <MenuDefinitionItem clasStr='hided_item' menuTerm='Stores' linkStr='/stores' />
          <MenuDefinitionItem clasStr='hided_item' menuTerm='Contact Us' linkStr='/constactus' />
          <li className='show_sidebar' onClick={showSideBar}><a href="#"><TfiAlignJustify  /></a></li>
        </ul>
      </div>
    </Box>
  )
}

export default MenuLayout