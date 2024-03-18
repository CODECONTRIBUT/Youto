import { Heading } from '@chakra-ui/react'
import React from 'react'
import { VideoQuery } from '../App'

interface Props{
    videoQuery: VideoQuery
}

const HeadingStr = ({videoQuery} : Props) => {
    let headingStr = `${videoQuery.genre?.name || ''} ${videoQuery.platform?.name || ''} Games` 
  return (
    <Heading as='h1' marginY={5} fontSize='5xl'>{headingStr}</Heading>
  )
}

export default HeadingStr