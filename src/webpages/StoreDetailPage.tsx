import { useParams } from 'react-router-dom';
import useStore from '../hooks/useStore';
import { GridItem, Heading, SimpleGrid, Image, Spinner } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';
import DefinitionItem from '../components/DefinitionItem';
import MetaCritic from '../components/MetaCritic';

const StoreDetailPage = () => {
    const {storeId} = useParams();
    const {data, isLoading, error} = useStore(parseInt(storeId!, 10));

    if (isLoading) return <Spinner />;
    if (error || !data) throw error;
    
  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={5}>
    <GridItem>
        <Heading fontSize='2xl'>{data.name}</Heading>
        <ExpandableText>{data.description}</ExpandableText>
        <DefinitionItem term='Games No.:'><MetaCritic score={data.games_count} /></DefinitionItem>
        {data.domain && <a className='a_hyperlink' href={'http://' + data.domain} target='_blank'>{data.domain}</a>}
    </GridItem>
    <GridItem>
        <Image src={data.image_background} />
    </GridItem>
</SimpleGrid>
  )
}

export default StoreDetailPage