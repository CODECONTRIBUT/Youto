import DefinitionItem from './DefinitionItem'
import { Video } from '../entities/Video'
import { SimpleGrid, Text } from '@chakra-ui/react'
import MetaCritic from './MetaCritic'

interface Props{
    video: Video
}

const VideoAttributes = ({video}: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
        <DefinitionItem term='Platforms'>
            {video.parentPlatforms?.map(platform => <Text key={platform.id}>{platform.name}</Text>)}
        </DefinitionItem>
        <DefinitionItem term='Metascore'>
            <MetaCritic score={video.metaCritic}/>
        </DefinitionItem>
        <DefinitionItem term='Rating'>
            <MetaCritic score={video.rating_Top}/>
        </DefinitionItem>
    </SimpleGrid>
  )
}

export default VideoAttributes