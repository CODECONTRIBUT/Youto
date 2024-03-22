import { Box, Heading } from '@chakra-ui/react';
import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const routeError = useRouteError();
  return (
    <>
        <NavBar />
        <Box padding='20px'>
            <Heading>Oops</Heading>
            <text>{isRouteErrorResponse(routeError)? 'This page does not exist' : 'Unexpected errors occurred'}</text>
        </Box>
    </>
  )
}

export default ErrorPage