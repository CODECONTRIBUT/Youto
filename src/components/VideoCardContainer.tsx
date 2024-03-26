import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import '../css/cardcontainer.css'

interface Props {
    children: ReactNode
}

const VideoCardContainer = ({children} : Props) => {
  return (
    <Box className='card_container'>
        {children}
    </Box>
  )
}

export default VideoCardContainer