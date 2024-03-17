import { Badge } from "@chakra-ui/react"

interface Props{
    score: number
}

const MetaCritic = ({score} : Props) => {
    let color = score > 90 ? 'green' : score > 80 ? 'yellow' : "";
  return (
    <Badge colorScheme={color} fontSize='14' paddingX='5px' borderRadius='5px'>{score}</Badge>
  )
}

export default MetaCritic