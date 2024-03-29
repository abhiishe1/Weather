import React from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Box,
    Typography,
    Grid,
    Container,
    
  } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

class Navbar extends React.Component{
    render(){
        return(
            <AppBar
            position="static"
            sx={{ backgroundColor: 'transparent', boxShadow: "none" }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: "flex", fontWeight: "bold" }}
              >
                JUNIPER
              </Typography>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Info</Button>
                <Button color="inherit">Shop</Button>
                <Button color="inherit">TOS</Button>
                <Button color="inherit">Search</Button>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  sx={{ display: { xs: "flex", md: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  Home
                </Button>
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  Info
                </Button>
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  Shop
                </Button>
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  TOS
                </Button>
                <Button
                  color="inherit"
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  Search
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
        )
    }
}

export default  Navbar;