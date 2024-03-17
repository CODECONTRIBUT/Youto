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

const useVideos = (selectedGenre: Genre | null) => useData<Video>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);   

export default useVideos;