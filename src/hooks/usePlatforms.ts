import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/parentplatforms');

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['parentplatforms'],
    queryFn: apiClient.getAll
})

export default usePlatforms;
