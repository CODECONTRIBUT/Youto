import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useVideos from '../hooks/useVideos';
import VideoCard from './VideoCard';
import VideoCardSkeleton from './VideoCardSkeleton';
import VideoCardContainer from './VideoCardContainer';

const VideoGrid = () => {

    //custom a hook of fetching all videos, reusable for other components.
    const {data, error, isLoading} = useVideos();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
                {isLoading && skeletons.map(skeleton => <VideoCardContainer><VideoCardSkeleton key={skeleton}/></VideoCardContainer>)}
                {data.map( video =><VideoCardContainer><VideoCard key={video.id} video={video}></VideoCard></VideoCardContainer>)}
            </SimpleGrid>
        </>
    )
}

export default VideoGrid

