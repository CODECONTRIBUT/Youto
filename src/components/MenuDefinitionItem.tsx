import { NavLink } from 'react-router-dom'
import "../css/navbar.css"
import { MenuItem } from '@chakra-ui/react'

interface Props{
    menuTerm: string,
    linkStr: string,
    clasStr?: string
}

const MenuDefinitionItem = ({menuTerm, linkStr, clasStr}: Props) => {
  return (
    <li className={clasStr}>
        <a href={linkStr}>{menuTerm}</a>
    </li>

  )
}

export default MenuDefinitionItem