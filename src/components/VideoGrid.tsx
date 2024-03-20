import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { VideoQuery } from '../App';
import useVideos from '../hooks/useVideos';
import VideoCard from './VideoCard';
import VideoCardContainer from './VideoCardContainer';
import VideoCardSkeleton from './VideoCardSkeleton';

interface Props {
    videoQuery: VideoQuery
}

const VideoGrid = ({videoQuery} : Props) => {

    //custom a hook of fetching all videos, reusable for other components.
    const {data, error, isLoading, fetchNextPage, isFetchingNextPage, hasNextPage} = useVideos(videoQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    const fetchedTotalVideos = data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    if (error) return <Text>{error.message}</Text>;
    return (   
        <InfiniteScroll
            dataLength={fetchedTotalVideos}
            hasMore={!!hasNextPage}
            next={() => fetchNextPage()}
            loader={<Spinner />}
            >
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={8} padding='10px'>
                {isLoading && skeletons.map(skeleton => <VideoCardContainer key={skeleton}><VideoCardSkeleton /></VideoCardContainer>)}
                {data?.pages.map( (page, index) => <React.Fragment key={index}>{page.results.map((video) =><VideoCardContainer key={video.id}><VideoCard video={video}></VideoCard></VideoCardContainer>)}</React.Fragment>)}
            </SimpleGrid>
        </InfiniteScroll>
            //{hasNextPage && <Button marginY='20px' className='btn btn-primary' disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>{isFetchingNextPage? 'Loading...' : 'Load More'}</Button>}

    )
}

export default VideoGrid

