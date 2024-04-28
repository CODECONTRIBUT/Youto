import { Platform } from "./Platform";
import { Screenshot } from "./Screenshot";


export interface Video {
    id: number;
    name: string;
    slug: string;
    background_Image: string;
    parentPlatforms: Platform[];
    metaCritic: number;
    rating_Top: number;
    description: string;
    screenshots: Screenshot[];
}
