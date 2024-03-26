import { useParams } from "react-router-dom";
import useGenre from "../hooks/useGenre";
import { GridItem, Heading, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import DefinitionItem from "../components/DefinitionItem";
import MetaCritic from "../components/MetaCritic";


const GenreDetailPage = () => {
    const {genreId} = useParams();
    const {data, error, isLoading} = useGenre(parseInt(genreId!, 10));

    if (isLoading) return <Spinner />;
    if (error || !data) throw error;

  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
        <GridItem>
            <Heading fontSize='2xl'>{data.name}</Heading>
            <ExpandableText>{data.description}</ExpandableText>
            <DefinitionItem term='Games No.:'><MetaCritic score={data.games_count} /></DefinitionItem>
        </GridItem>
        <GridItem>
            <Image src={data.image_background} />
        </GridItem>
    </SimpleGrid>
  )
}

export default GenreDetailPage