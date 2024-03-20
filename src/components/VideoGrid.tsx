import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import useVideos from '../hooks/useVideos';
import VideoCard from './VideoCard';
import VideoCardSkeleton from './VideoCardSkeleton';
import VideoCardContainer from './VideoCardContainer';
import { VideoQuery } from '../App';
import React from 'react';

interface Props {
    videoQuery: VideoQuery
}

const VideoGrid = ({videoQuery} : Props) => {

    //custom a hook of fetching all videos, reusable for other components.
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useVideos(videoQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    if (error) return <Text>{error.message}</Text>;
    return (   
        <Box padding='10px'>
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={8}>
                {isLoading && skeletons.map(skeleton => <VideoCardContainer key={skeleton}><VideoCardSkeleton /></VideoCardContainer>)}
                {data?.pages.map( (page, index) => <React.Fragment key={index}>{page.results.map((video) =><VideoCardContainer key={video.id}><VideoCard video={video}></VideoCard></VideoCardContainer>)}</React.Fragment>)}
            </SimpleGrid>
            {hasNextPage && <Button marginY='20px' className='btn btn-primary' disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>{isFetchingNextPage? 'Loading...' : 'Load More'}</Button>}
        </Box>
    )
}

export default VideoGrid

