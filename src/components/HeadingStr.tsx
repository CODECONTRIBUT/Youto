import { Heading } from '@chakra-ui/react'
import useVideoQueryStore from '../state management/store'

const HeadingStr = () => {
  const selectedGenre = useVideoQueryStore(s => s.videoQuery.genre);
  const selectedPlatform = useVideoQueryStore(s => s.videoQuery.platform);
  let headingStr = `${selectedGenre?.name || ''} ${selectedPlatform?.name || ''} Games` 
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{headingStr}</Heading>
  )
}

export default HeadingStr