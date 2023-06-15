import { AppBar, Box, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

import CartWidget from "../cart-widget";


const NavBar = () => {
    const cart = 3;

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
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