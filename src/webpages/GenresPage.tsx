import useGenres from '../hooks/useGenres'
import { SimpleGrid, Spinner } from '@chakra-ui/react';
import GenreCardContainer from '../components/GenreCardContainer';
import GenreCard from '../components/GenreCard';

const GenresPage = () => {
  const {data: genres, error, isLoading} = useGenres();

  if (error || !genres) throw error;
  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={8} padding='10px'>
        {genres.results.map(genre => <GenreCardContainer key={genre.id}><GenreCard genre={genre} /></GenreCardContainer>)}
    </SimpleGrid>
  )
}

export default GenresPage