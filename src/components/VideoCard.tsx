import { Card, CardBody, Heading, Hide, Image } from '@chakra-ui/react'
import { Video }  from '../hooks/useVideos'

interface Props{
    video: Video
}

const VideoCard = ({ video }: Props) => {
  
  return (
    <Card borderRadius={10} overflow='hidden'>
        <Image src={video.background_image} />
        <CardBody>
            <Heading fontSize='2xl'>{video.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default VideoCard