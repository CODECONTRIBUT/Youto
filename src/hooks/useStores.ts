import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Store } from "../entities/Store";

const apiClient = new APIClient<Store>('/stores');

const useStores = () => useInfiniteQuery<FetchResponse<Store>, Error>({
    queryKey: ['stores'],
    queryFn: ({pageParam = 1} ) => apiClient.getAll({
        params: {
            page: pageParam
        }
    }),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
    }
})

export default useStores;