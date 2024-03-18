import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface Props{
    onSelectOrder: (sortOrder: string) => void;
    selectedOrder: string
}

const SortSelector = ({onSelectOrder, selectedOrder} : Props) => {
    const sortOrder = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Data added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'}
        ]
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            Order by: {selectedOrder ? sortOrder.find(order => order.value === selectedOrder)?.label : 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map(order => <MenuItem onClick={() => onSelectOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector