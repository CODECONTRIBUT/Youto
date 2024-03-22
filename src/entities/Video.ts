import { Platform } from "./Platform";


export interface Video {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Platform; }[];
    metacritic: number;
    rating_top: number;
    description: string;
}
