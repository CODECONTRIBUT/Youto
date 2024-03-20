import { useInfiniteQuery } from "@tanstack/react-query";
import { VideoQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Video>('/games');

export interface Video {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number,
    rating_top: number
}

const useVideos = (videoQuery : VideoQuery) => useInfiniteQuery<FetchResponse<Video>, Error>({
    queryKey: ['videos', videoQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
        params: {genres: videoQuery.genre?.id, 
        platforms: videoQuery.platform?.id, 
        ordering: videoQuery.sortOrder,
        search: videoQuery.searchStr,
        page: pageParam}
    }),
    keepPreviousData: true,
    staleTime: 1 * 60 * 60 *1000, //1h
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
    }
})  

export default useVideos;