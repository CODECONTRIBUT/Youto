import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Video }  from '../hooks/useVideos'
import PlatformIconList from './PlatformIconList'
import MetaCritic from './MetaCritic'

interface Props{
    video: Video
}

const VideoCard = ({ video }: Props) => {
  
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={video.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{video.name}</Heading>
            <HStack justifyContent='space-between'>
              <PlatformIconList platforms={video.parent_platforms.map(p => p.platform)}/>
              <MetaCritic score={video.metacritic}/>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default VideoCard