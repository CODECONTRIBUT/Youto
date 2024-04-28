import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Video } from "../entities/Video";

const apiClient = new APIClient<Video>('/products');

const useVideo = (id: number) => useQuery({
    queryKey: ['games', id],
    queryFn: () => apiClient.get(id)
});

export default useVideo;