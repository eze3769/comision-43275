import React from 'react'
import Container from '../../components/container';
import { Box, Button, Typography } from '@mui/material';
import { CenteredDiv } from '../../components/container/components';
import styled from 'styled-components';
import { useDebounce } from '../../hooks/useDebounce';

const StyledButton = styled(Button) (() => ({
    padding: '5px 20px',
    borderRadius: '8px',
    boxShadow: '0 0 5px 0 black',
    margin: 5
}))

const MIN_VALUE = 0;
const MAX_VALUE = 100;

const ContadorPage = () => {
    const [value, setValue] = React.useState(0);
    const textRef = React.useRef(null);

    const handlePressMinus = () => {
        if (value <= MIN_VALUE) {
            return;
        }
        setValue(value - 1);
    }

    const handlePressSum = () => {
        if (value >= MAX_VALUE) {
            return;
        }
        setValue(value + 1)
    }

    if (textRef) {
        console.log(textRef.current);
    }

  return (
    <Container>
        <Typography ref={textRef} variant='h1'>
            Contador:
        </Typography>
        <Box>
            <CenteredDiv>
                <Typography>Valor: {useDebounce(value, 200) || 0}</Typography>
                <Box mt={1} display={'flex'} gap={2}>
                <StyledButton onClick={handlePressMinus} color='primary'>
                    -
                </StyledButton>
                <StyledButton onClick={handlePressSum} color='secondary'>
                    +
                </StyledButton>
                </Box> 
            </CenteredDiv>
        </Box>
    </Container>
  )
}

export default ContadorPage;