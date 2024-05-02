import React from 'react'
import { Genre } from '../entities/Genre'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import CroppingImageSize from '../services/ImageCrop'
import { Link, useNavigate } from 'react-router-dom'
import MetaCritic from './MetaCritic'
import DefinitionItem from './DefinitionItem'

interface Props{
    genre: Genre
}

const GenreCard = ({genre}: Props) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate('/genres/' + genre.id)}>
        <Image src={CroppingImageSize(genre.imageBackground)}></Image>
        <CardBody>
            <HStack justifyContent='space-between' alignItems='baseline' spacing={1}>
                <Heading fontSize='xl'>
                    <Link to={'/genres/' + genre.id}>{genre.name}</Link>
                </Heading>
                <DefinitionItem term='Games No.:'><MetaCritic score={genre.gamesCount} /></DefinitionItem>
            </HStack>
        </CardBody>
    </Card>
  )
}

export default GenreCard