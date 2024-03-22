import React from 'react'
import useScreenshots from '../hooks/useScreenshots'
import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props{
    videoId: number
}
const VideoScreenshots = ({videoId}: Props) => {
    const {data, isLoading, error} = useScreenshots(videoId);
    if (isLoading) return null;
    if (error) throw error;
    
  return (
    <SimpleGrid columns={{base: 1, md: 2}} spacing={2} marginY={2}>
        {data?.results.map(screenshot => <Image key={screenshot.id} src={screenshot.image} />)}
    </SimpleGrid>
  )
}

export default VideoScreenshots