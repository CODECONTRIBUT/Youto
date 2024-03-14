import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Video {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[]
}

interface VideoResponse {
    count: number,
    results: Video[]
}
const useVideos = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<VideoResponse>('/games')
                  .then(response => setVideos(response.data.results))
                  .catch(error => {
                    if (error instanceof CanceledError) 
                        return;

                    setError(error.message)});

        return () => controller.abort();
    }, [])

    return {videos, error};
}

export default useVideos;