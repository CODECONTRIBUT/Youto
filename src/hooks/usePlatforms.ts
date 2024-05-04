import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/parentplatforms');

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['parentplatforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000   
    //since platforms are not editable, so set platforms stale time to 24hr on client side.
})

export default usePlatforms;
