import { Button, HStack, Heading, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CroppingImageSize from "../services/ImageCrop";
import { Genre } from "../hooks/useGenres";

interface Props{
  onSelectGenre: (genre : Genre) => void;
  selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre} : Props) => {
    const {data, error, isLoading} = useGenres();
    if (isLoading) return <Spinner/>;
    if (error) return;
  return (
    <>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        <List>
            {data.map(genre => 
                <HStack paddingY='5px' key={genre.id}>
                    <Image borderRadius='8px' boxSize='32px' objectFit='cover' src={CroppingImageSize(genre.image_background)}/>
                    <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} color={genre.id === selectedGenre?.id ? 'green' : ''} fontSize='lg' variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                </HStack>
                )}
        </List>
    </>
  )
}

export default GenreList

