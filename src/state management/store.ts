import { create } from "zustand";
import { Genre } from "../entities/Genre";
import { Platform } from "../entities/Platform";

interface VideoQuery{
    genre?: Genre,
    platform?: Platform,
    sortOrder?: string,
    searchStr?: string
  }

interface VideoQueryStore {
    videoQuery: VideoQuery,
    setGenre: (genre: Genre) => void,
    setPlatform: (platform: Platform) => void,
    setSortOrder: (sortOrder: string) => void,
    setSearchStr: (searchStr: string) => void
}

const useVideoQueryStore = create<VideoQueryStore>(set => ({
    videoQuery: {},
    setGenre: (genre) => set((store) => ({videoQuery: {...store.videoQuery, genre}})),
    setPlatform: (platform) => set(store => ({videoQuery: {...store.videoQuery, platform}})),
    setSortOrder: (sortOrder) => set(store => ({videoQuery: {...store.videoQuery, sortOrder}})),
    setSearchStr: (searchStr) => set(() => ({videoQuery: {searchStr}}))
}));

export default useVideoQueryStore;





