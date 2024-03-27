import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Store } from "../entities/Store";

const apiClient = new APIClient<Store>('/stores');

const useStore = (storeId: number) => useQuery({
    queryKey: ['stores', storeId],
    queryFn: () => apiClient.get(storeId)
})

export default useStore;