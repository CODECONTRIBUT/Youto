import { SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import useVideos from '../hooks/useVideos';
import VideoCard from './VideoCard';
import VideoCardSkeleton from './VideoCardSkeleton';
import VideoCardContainer from './VideoCardContainer';
import { VideoQuery } from '../App';

interface Props {
    videoQuery: VideoQuery
}

const VideoGrid = ({videoQuery} : Props) => {

    //custom a hook of fetching all videos, reusable for other components.
    const {data, error, isLoading} = useVideos(videoQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    if (error) return <Text>{error.message}</Text>;
    return (   
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={8}>
                {isLoading && skeletons.map(skeleton => <VideoCardContainer key={skeleton}><VideoCardSkeleton /></VideoCardContainer>)}
                {data?.results.map( video =><VideoCardContainer key={video.id}><VideoCard video={video}></VideoCard></VideoCardContainer>)}
            </SimpleGrid>
    )
}

export default VideoGrid

