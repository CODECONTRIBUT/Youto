import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Store } from '../entities/Store'
import CroppingImageSize from '../services/ImageCrop'
import { Link } from 'react-router-dom'
import DefinitionItem from './DefinitionItem'
import MetaCritic from './MetaCritic'

interface Props{
    store: Store
}

const StoreCard = ({store}: Props) => {
  return (
    <Card>
        <Image src={CroppingImageSize(store.imageBackground)} />
        <CardBody>
            <HStack justifyContent='space-between' alignItems='baseline' spacing={1}>
                <Heading fontSize='xl'>
                    <Link to={'/stores/' + store.id}>{store.name}</Link>
                </Heading>
                <DefinitionItem term='Games No.:'><MetaCritic score={store.gamesCount} /></DefinitionItem>             
            </HStack>
            {store.domain && <a className='a_hyperlink' href={'http://' + store.domain} target='_blank'>{store.domain}</a>}
        </CardBody>
    </Card>
  )
}

export default StoreCard