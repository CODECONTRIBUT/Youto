import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props{
    children: ReactNode
}

const GenreCardContainer = ({children}: Props) => {
  return (
    <Box className='card_container'>
        {children}
    </Box>
  )
}

export default GenreCardContainer