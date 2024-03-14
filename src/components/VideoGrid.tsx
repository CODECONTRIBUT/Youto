import { SimpleGrid, Text } from '@chakra-ui/react';
import useVideos from '../hooks/useVideos';
import VideoCard from './VideoCard';

const VideoGrid = () => {

    //custom a hook of fetching all videos, reusable for other components.
    const {videos, error} = useVideos();
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
                {videos.map( video => <VideoCard key={video.id} video={video}></VideoCard>)}
            </SimpleGrid>
        </>
    )
}

export default VideoGrid

