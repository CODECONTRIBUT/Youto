import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import useVideoQueryStore from '../state management/store'

const SortSelector = () => {
    const sortOrder = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Data added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'}
        ]
    
    const setSortOrder = useVideoQueryStore(s => s.setSortOrder);
    const selectedSortOrder = useVideoQueryStore(s => s.videoQuery.sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            Order by: {selectedSortOrder ? sortOrder.find(order => order.value === selectedSortOrder)?.label : 'Relevance'}
            </MenuButton>
            <MenuList>
                {sortOrder.map(order => <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default SortSelector