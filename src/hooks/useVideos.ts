import { VideoQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

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
    metacritic: number
}

const useVideos = (videoQuery : VideoQuery) => useData<Video>('/games', {params: {genres: videoQuery.genre?.id, platforms: videoQuery.platform?.id}}, [videoQuery]);   

export default useVideos;