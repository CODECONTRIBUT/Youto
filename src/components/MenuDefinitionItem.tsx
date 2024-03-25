import { NavLink } from 'react-router-dom'
import "../css/navbar.css"
import { MenuItem } from '@chakra-ui/react'

interface Props{
    menuTerm: string,
    linkStr: string
}

const MenuDefinitionItem = ({menuTerm, linkStr}: Props) => {
  return (
    <MenuItem className='nav_link'>
      <NavLink to={linkStr}>{menuTerm}</NavLink>  
    </MenuItem>

  )
}

export default MenuDefinitionItem