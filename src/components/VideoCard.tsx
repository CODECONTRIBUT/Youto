import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Video } from "../entities/Video"
import PlatformIconList from './PlatformIconList'
import MetaCritic from './MetaCritic'
import CroppingImageSize from '../services/ImageCrop'
import Emoji from './Emoji'
import { Link, useNavigate } from 'react-router-dom'

interface Props{
    video: Video
}

const VideoCard = ({ video }: Props) => {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate('/products/' + video.id)}>
        <Image src={CroppingImageSize(video.background_Image)} />
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={2}>
              <PlatformIconList platforms={video.parentPlatforms}/>
              <MetaCritic score={video.metaCritic}/>
            </HStack>
            <Heading fontSize='2xl'>
              <Link to={'/products/' + video.id}>{video.name}</Link>
              <Emoji rating={video.rating_Top}/>
            </Heading>
        </CardBody>
    </Card>
  )
}

export default VideoCard