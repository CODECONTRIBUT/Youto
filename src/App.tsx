import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import VideoGrid from "./components/VideoGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useVideos";

export interface VideoQuery{
  genre: Genre | null,
  platform: Platform | null
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
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX='10px'>
            <GenreList selectedGenre={videoQuery.genre} onSelectGenre={(genre) => setVideoQuery({...videoQuery, genre})}/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector onSelectPlatform={(platform)=> setVideoQuery({...videoQuery, platform})} selectedPlatform={videoQuery.platform}/>
          <VideoGrid videoQuery={videoQuery}/>
        </GridItem>
       </Grid> 
    )
}

export default App
