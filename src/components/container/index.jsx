import { Box } from '@mui/material';
import React from 'react'
import { Contenedor } from './components';


const Container = ({ children }) => {

    return (
    <Contenedor>
        <Box maxWidth={'800px'}>
        {children}
        </Box>
    </Contenedor>
  )
}

export default Container;