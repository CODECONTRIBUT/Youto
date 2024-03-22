import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import useVideoQueryStore from "../state management/store";
import { Video } from "../entities/Video";

const apiClient = new APIClient<Video>('/games');

const useVideos = () => {
    const videoQuery = useVideoQueryStore(s => s.videoQuery);
    return useInfiniteQuery<FetchResponse<Video>, Error>({
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
}

export default useVideos;