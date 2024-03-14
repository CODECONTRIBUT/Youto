import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Video {
    id: number,
    name: string
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