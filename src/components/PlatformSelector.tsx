import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import useVideoQueryStore from '../state management/store';


const PlatformSelector = () => {
    const {data, error} = usePlatforms();
    const setPlatform = useVideoQueryStore(s => s.setPlatform);
    const selectPlatform = useVideoQueryStore(s => s.videoQuery.platform);
    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectPlatform? selectPlatform.name : 'Platforms'}
            </MenuButton>
            <MenuList>
                {data?.results.map(platform => <MenuItem onClick={() => setPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector