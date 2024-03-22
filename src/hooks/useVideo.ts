import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Video } from "../entities/Video";

const apiClient = new APIClient<Video>('/games');

const useVideo = (slug : string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug)
});

export default useVideo;