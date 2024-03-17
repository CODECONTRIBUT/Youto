import { HStack, Image, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CroppingImageSize from "../services/ImageCrop";

const GenreList = () => {
    const {data, error, isLoading} = useGenres();
    if (isLoading) return <Spinner/>;
    if (error) return;
  return (
    <>
        <List>
            {data.map(genre => 
                <HStack paddingY='5px' key={genre.id}>
                    <Image borderRadius='8px' boxSize='32px' src={CroppingImageSize(genre.image_background)}/>
                    <Text>{genre.name}</Text>
                </HStack>
                )}
        </List>
    </>
  )
}

export default GenreList

