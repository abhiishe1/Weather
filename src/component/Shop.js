import React from "react";
import { Grid, Container, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Product from "./Product.png";

class Shop extends React.Component {
  render() {
    return (
      <Container
        maxWidth={"xl"}
        sx={{ backgroundColor: "#4F4F4F", backgroundImage: "./Vector2.png" }}
      >
        <Navbar />
        <Container maxWidth={"lg"} sx={{alignItems:'center',justifyContent:'center',}}>
          <Grid container spacing={3}>
            <Grid item xs={6} border={"1px solid white"}>
              <img src={Product} />
            </Grid>
            <Grid item xs={6} border={"1px solid white"}>
              <Typography fontSize={"64px"} fontWeight={"700"}>
                Atmos
              </Typography>
              <Typography fontSize={"24px"} height={'71px'} width={'470px'} >
                {" "}
                A weather app that lets you explore the atmosphere and learn
                more about the weather phenomena{" "}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    );
  }
}

export default Shop;
