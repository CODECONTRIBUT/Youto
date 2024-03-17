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
    metacritic: number
}

const useVideos = () => useData<Video>('/games');   

export default useVideos;