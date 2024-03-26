import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>('/genres');

const useGenre = (genreId: number) => useQuery({
    queryKey: ['genres', genreId],
    queryFn: () => apiClient.get(genreId)
})

export default useGenre;