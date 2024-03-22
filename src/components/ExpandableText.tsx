import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react'

interface Props{
    children: string
}

const ExpandableText = ({children}: Props) => {
    const lengthLimit = 300;
    const [expanded, setExpanded] = useState(false);
    if (!children) return null;
    if (children.length <= lengthLimit) return <Text>{children}</Text>;

    const summary = expanded? children : children.substring(0, lengthLimit) + '...';

  return (
    <Text>
        {summary}
        <Button onClick={
            () => setExpanded(!expanded)} 
            colorScheme='yellow' size='xs' fontWeight='bold' marginLeft={1}>
            {expanded? 'show less' : 'show more'}
        </Button>
    </Text>
  )
}

export default ExpandableText