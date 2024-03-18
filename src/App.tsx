import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import VideoGrid from "./components/VideoGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useVideos";
import SortSelector from "./components/SortSelector";

export interface VideoQuery{
  genre: Genre | null,
  platform: Platform | null,
  sortOrder: string,
  searchStr: string
}

function App() {
  const [videoQuery, setVideoQuery] = useState<VideoQuery>({} as VideoQuery);

  return (
       <Grid templateAreas={{
          base: `"nav" "main"`,
          lg:`"nav nav" "aside main"`
       }}
       templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
       }}>
        <GridItem area="nav">
          <NavBar onSearch={(searchStr) => setVideoQuery({...videoQuery, searchStr})}/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX='10px'>
            <GenreList selectedGenre={videoQuery.genre} onSelectGenre={(genre) => setVideoQuery({...videoQuery, genre})}/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack marginLeft={3} marginBottom={2} spacing={4} marginRight={3}>
            <PlatformSelector onSelectPlatform={(platform)=> setVideoQuery({...videoQuery, platform})} selectedPlatform={videoQuery.platform}/>
            <SortSelector selectedOrder={videoQuery.sortOrder} onSelectOrder={(sortOrder) => setVideoQuery({...videoQuery, sortOrder})}></SortSelector>
          </HStack>
          <VideoGrid videoQuery={videoQuery}/>
        </GridItem>
       </Grid> 
    )
}

export default App
