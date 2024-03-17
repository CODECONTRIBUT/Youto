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
    parent_platforms: {platform: Platform}[],
    metacritic: number
}

interface VideoResponse {
    count: number,
    results: Video[]
}
const useVideos = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient.get<VideoResponse>('/games')
                  .then(response => {
                    setVideos(response.data.results);
                    setLoading(false);
                    })
                  .catch(error => {
                    if (error instanceof CanceledError) 
                        return;

                    setError(error.message);
                    setLoading(false)});

        return () => controller.abort();
    }, [])

    return {videos, error, isLoading};
}

export default useVideos;