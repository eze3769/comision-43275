import { Box, styled } from "@mui/material";

export const Contenedor = styled(Box) (({ theme }) => ({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    margin: 20,
    [theme.breakpoints.down(1024)]: {
       margin: 5
      },
}))

export const CenteredDiv = styled(Box) (() => ({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'column'
}))
