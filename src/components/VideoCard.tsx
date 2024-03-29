import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Video } from "../entities/Video"
import PlatformIconList from './PlatformIconList'
import MetaCritic from './MetaCritic'
import CroppingImageSize from '../services/ImageCrop'
import Emoji from './Emoji'
import { Link } from 'react-router-dom'

interface Props{
    video: Video
}

const VideoCard = ({ video }: Props) => {
  
  return (
    <Card>
        <Image src={CroppingImageSize(video.background_image)} />
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={2}>
              <PlatformIconList platforms={video.parent_platforms.map(p => p.platform)}/>
              <MetaCritic score={video.metacritic}/>
            </HStack>
            <Heading fontSize='2xl'>
              <Link to={'/games/' + video.slug}>{video.name}</Link>
              <Emoji rating={video.rating_top}/>
            </Heading>
        </CardBody>
    </Card>
  )
}

export default VideoCard