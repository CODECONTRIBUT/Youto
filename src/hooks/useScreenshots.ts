import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client"

const useScreenshots = (videoId: number) => {
    const apiClient = new APIClient<Screenshot>(`/games/${videoId}/screenshots`);
    return useQuery({
        queryKey: ['screenshots',videoId],
        queryFn: apiClient.getAll
    })
}
export default useScreenshots;