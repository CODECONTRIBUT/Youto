import { useEffect, useState } from 'react'
import apiClient from "../services/api-client";
import { Text } from '@chakra-ui/react';

const VideoGrid = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [error, setError] = useState('');

    interface Video {
        id: number,
        name: string
    }

    interface VideoResponse {
        count: number,
        results: Video[]
    }

    useEffect(() => {
        apiClient.get<VideoResponse>('/games')
                .then(response => setVideos(response.data.results))
                .catch(error => setError(error.message));
    })

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

