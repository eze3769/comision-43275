import { AppBar, Box, Button, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import React from 'react'

import CartWidget from "../cart-widget";

//importar una imagen
import image from './logo.png';

const NavBar = () => {

    const cart = 3;

    const handleRedirect = () => {
        if (!window) {
            return;
        }
        window.location = 'https://google.com';
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Button onClick={handleRedirect}>
                <Box component="img" src={image} alt="logo" sx={{ width: 40, height: 40, p: 2 }} />
            </Button>
            <Typography variant="h6" fontWeight={'bold'} component="div" sx={{ flexGrow: 1 }}>
              CoderCommerce
            </Typography>
            <CartWidget cartQuantity={cart} />
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default NavBar;