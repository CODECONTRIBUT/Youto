import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
    onSearch: (searchStr: string) => void;
}

const SearchInput = ({onSearch} : Props) => {
    const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(event) =>{
        event.preventDefault();
        if (searchRef.current)
            onSearch(searchRef.current.value);
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>}></InputLeftElement>
            <Input ref={searchRef} variant='filled' placeholder='Search here...' borderRadius={20}></Input>
        </InputGroup>
    </form>
  )
}

export default SearchInput