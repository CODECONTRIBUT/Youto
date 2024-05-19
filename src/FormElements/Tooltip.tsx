import { Tooltip } from '@chakra-ui/react'
import { FiInfo } from "react-icons/fi";
import "../css/tooltip.css"

interface Props{
    tipLabel: string | undefined;
}

const TooltipField = ({tipLabel}: Props) => {
  return (
    <Tooltip hasArrow placement='right-start' label={tipLabel}>
        <span><FiInfo  className='tooltip'/></span>
    </Tooltip>
  )
}

export default TooltipField