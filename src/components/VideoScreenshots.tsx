import { Image, SimpleGrid } from '@chakra-ui/react';
import { Screenshot } from '../entities/Screenshot';

interface Props{
    screenshots: Screenshot[]
}
const VideoScreenshots = ({screenshots}: Props) => {
    //const {data, isLoading, error} = useScreenshots(videoId);
    //if (isLoading) return null;
    //if (error) throw error;
    
  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2} marginY={2}>
        {screenshots.map(screenshot => <Image key={screenshot.id} src={screenshot.image} />)}
    </SimpleGrid>
  )
}

export default VideoScreenshots