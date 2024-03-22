import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import APIClient from "../services/api-client"



const useTrailer = (videoId: number) => {
    const apiClient = new APIClient<Trailer>(`/games/${videoId}/movies`);
    return useQuery({
        queryKey: ['trailers', videoId],
        queryFn: apiClient.getAll
    })
}

export default useTrailer