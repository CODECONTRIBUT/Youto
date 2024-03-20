import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "./components/GenreList";
import HeadingStr from "./components/HeadingStr";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import VideoGrid from "./components/VideoGrid";

function App() {

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
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <HeadingStr />
            <Flex marginBottom={5}>  
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>          
              <SortSelector />
            </Flex>
          </Box>
          <VideoGrid />
        </GridItem>
       </Grid> 
    )
}

export default App
