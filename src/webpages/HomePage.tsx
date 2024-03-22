import { Box, Grid, GridItem, Show, Flex } from '@chakra-ui/react'
import GenreList from '../components/GenreList'
import HeadingStr from '../components/HeadingStr'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import VideoGrid from '../components/VideoGrid'

const HomePage = () => {
    return (
        <Grid templateAreas={{
           base: `"main"`,
           lg:`"aside main"`
        }}
        templateColumns={{
           base: '1fr',
           lg: '200px 1fr'
        }}>
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

export default HomePage