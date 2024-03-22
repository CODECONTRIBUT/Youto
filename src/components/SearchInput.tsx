import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import useVideoQueryStore from '../state management/store';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const setSearchStr = useVideoQueryStore(s => s.setSearchStr);
    const navigate = useNavigate();

  return (
    <form onSubmit={(event) =>{
        event.preventDefault();
        if (searchRef.current)
        {
          setSearchStr(searchRef.current.value);
          navigate('/');
        }
    }}>
        <InputGroup>
            <InputLeftElement children={<BsSearch/>}></InputLeftElement>
            <Input ref={searchRef} variant='filled' placeholder='Search here...' borderRadius={20}></Input>
        </InputGroup>
    </form>
  )
}

export default SearchInput