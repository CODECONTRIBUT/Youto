import { Text } from '@chakra-ui/react';
import useVideos from '../hooks/useVideos';

const VideoGrid = () => {

    //custom a hook of fetching all videos, reusable for other components.
    const {videos, error} = useVideos();
    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {videos.map( video => <li key={video.id}>{video.name}</li>)}
            </ul>
        </>
    )
}

export default VideoGrid

