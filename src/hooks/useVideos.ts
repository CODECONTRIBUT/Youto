import { VideoQuery } from "../App";
import useData from "./useData";

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Video {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[],
    metacritic: number,
    rating_top: number
}

const useVideos = (videoQuery : VideoQuery) => useData<Video>('/games', 
                    {
                        params: {genres: videoQuery.genre?.id, 
                        platforms: videoQuery.platform?.id, 
                        ordering: videoQuery.sortOrder,
                        search: videoQuery.searchStr}
                    }, [videoQuery]);   

export default useVideos;