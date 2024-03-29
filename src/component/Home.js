import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Phone2 from "./phone2.png";
import Heart from "./Heart.png";
import Gallery from "./Icon.png";
import Watch from "./icon2.png";
import Iphone from "./iphone.png";
import dp from "./dp.png";
import Arrow from "./arrow.png";
import Twitter from "./twitter.png";
import Navbar from "./Navbar";
import "./Home.css";
import {  Container, Box } from "@mui/material";

class Home extends React.Component {
  render() {
    return (
      <Container maxWidth="100vw" sx={{backgroundColor:'#D2982D'}}>
        <Navbar />
        <Container maxWidth={"xl"}>
          <Grid
            container
            display={"flex"}
            justifyContent={"space-between"}
            sx={{
              marginTop: {
                lg: "140px",
                md: "100px",
                sm: "50px",
                xs: "30px",
              },
            }}
          >
            <Grid
              component={Box}
              item
              xs={12}
              lg={6}
              md={6}
              // bgcolor={"green"}
              // border={"1px solid white"}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

                alignItems: {
                  sm: "center",
                  xs: "center",
                  lg: "flex-start",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: {
                    md: "60px",
                    lg: "60px",
                    xs: "48px",
                  },
                  fontWeight: "600",
                  lineHeight: "57.01px",
                }}
              >
                Your Live <br></br>Forecaster
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontSize: "20px",
                }}
              >
                Together We Forecast: Building Dreams, <br></br>One Day at a
                Time!
              </Typography>
              <Typography sx={{ color: "#2B261D", fontSize: "16px" }}>
                1million People like you have purchased this product!
              </Typography>
              <Grid
                container
                display={"flex"}
                flexDirection={"row"}
                gap={"10px"}
                // alignItems={'center'}
                justifyContent={{lg:'flex-start',md:'center',sm:'center',xs:'center'}}
              >
                <Grid>
                  <Button sx={{ backgroundColor: "#2B261D", color: "white" }}>
                    TRY NOW
                  </Button>
                </Grid>
                <Grid>
                  <Button sx={{ backgroundColor: "#F5B747", color: "#2B261D" }}>
                    FREE TILL NOVEMEBER 18
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              md={6}
              // border={"1px solid white"}
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  lg: "flex-end",
                  md: "flex-end",
                },
              }}
            >
              <img src={Phone2} style={{ maxWidth: "100%", height: "auto" }} />
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={"xl"} sx> 
          <Grid
            className="box1"
            container
            spacing={5}
            display={"flex"}
            justifyContent={"space-between"}
            marginTop={"30px"}
            sx={{
              marginTop: { lg: "150px", md: "80px", xs: "40px" },
              textAlign: { lg: "justify", md: "center", sm: "center" },
            }}
          >
            <Grid component={Box} item xs={12} sm={6} lg={4} md={6}>
              <Box
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: {
                    sm: "center",
                    xs: "center",
                    lg: "flex-start",
                  },
                }}
              >
                <img src={Watch} />
                <Typography sx={{ fontSize: "24px", color: "white" }}>
                  Personalized
                </Typography>
              </Box>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                A personalized weather report that shows the best time and place
                for couples to enjoy outdoor activities based on their
                preferences and location.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} lg={4} md={6}>
              <Box
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: {
                    sm: "center",
                    xs: "center",
                    lg: "flex-start",
                  },
                }}
              >
                <img src={Gallery} />
                <Typography sx={{ fontSize: "24px", color: "white" }}>
                  Gallery
                </Typography>{" "}
              </Box>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                A cloud gallery that allows users to upload and share their
                photos and videos of the sky and the weather with other users
                and get feedback and tips.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={4}
              md={6}
              sx={{ alignItems: "center" }}
            >
              <Box
                sx={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: { md: "center" },
                  justifyContent: {
                    sm: "center",
                    xs: "center",
                    lg: "flex-start",
                  },
                }}
              >
                <img src={Heart} />
                <Typography sx={{ fontSize: "24px", color: "white" }}>
                  Mood Tracker
                </Typography>
              </Box>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                A mood tracker that analyzes the user’s mood based on the
                weather and suggests activities, music, or quotes to cheer them
                up or calm them down.
              </Typography>
            </Grid>
          </Grid>
          <Container
            marginTop={"240px"}
            sx={{
              display: {
                lg: "flex",
                md: "flex",
                sm: "none",
                xs: "none",
              },
              alignItems: "center",
              justifyContent: "space-around",
              marginTop: "240px",
            }}
          >
            <Box height={"436px"}>
              <img src={Iphone} style={{ height: "436px", width: "410px" }} />
            </Box>
            <Box
              width={"462px"}
              height={"290px"}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                sx={{
                  fontSize: "48px",
                  lineHeight: "58px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Plan Your Outdoor Activities with Ease
              </Typography>
              <Typography sx={{ fontSize: "32px", color: "#2B261D" }}>
                Get notified before rain stops. Plan your outdoor activities
              </Typography>

              <Typography sx={{ fontSize: "20px", lineHeight: "38px" }}>
                Share your weather stories and photos.
              </Typography>

              <Typography sx={{ fontSize: "20px", color: "#403B45" }}>
                Custom weather alerts and notifications.
              </Typography>

              <Typography sx={{ fontSize: "20px", color: "#403B45" }}>
                Smart weather integrations for your home.
              </Typography>
            </Box>
        
        </Container>
        </Container>
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "200px",
            marginBottom: "20px",
          }}
        >
          <Box
            height={"220px"}
            width={"460px"}
            bgcolor={"#403B45"}
            borderRadius={"20px"}
            sx={{ paddingTop: "20px", paddingX: "40px" }}
          >
            <Typography
              fontSize={{ lg: "16px", md: "15x", sm: "12px", xs: "11px" }}
              color={"white"}
            >
              Juniper is a great app for checking the weather. It's easy to use
              and has a beautiful interface. I love how it shows me the cloud
              patterns and predicts the weather for the next few days. It's like
              having a personal meteorologist in my pocket.
            </Typography>
            <Box
              display="flex"
              paddingTop={"10px"}
              sx={{
                alignSelf: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                },
                justifySelf: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                },
              }}
            >
              <img src={dp} />
              <Typography
                fontSize={{ lg: "24px", md: "16px", sm: "16px", xs: "15px" }}
                fontWeight={"500"}
                color={"white"}
                paddingLeft={"10px"}
                border={"1px solid red"}
              >
                Priyanka
              </Typography>
            </Box>
            <Typography paddingTop={"10px"} fontSize={"12px"} color={"#919191"}>
              Happy Customer
            </Typography>
          </Box>
          <Box
            height={"220px"}
            width={"460px"}
            bgcolor={"#403B45"}
            borderRadius={"20px"}
            display={{ lg: "flex", md: "none", sm: "none", xs: "none" }}
            flexDirection={"column"}
            sx={{ paddingTop: "20px", paddingX: "40px" }}
          >
            <Typography
              fontSize={{ lg: "16px", md: "15x", sm: "12px", xs: "11px" }}
              color={"white"}
            >
              Juniper is a great app for checking the weather. It's easy to use
              and has a beautiful interface. I love how it shows me the cloud
              patterns and predicts the weather for the next few days. It's like
              having a personal meteorologist in my pocket.
            </Typography>
            <Box
              display="flex"
              paddingTop={"10px"}
              sx={{
                alignSelf: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                },
                justifySelf: {
                  xs: "center",
                  sm: "center",
                  md: "center",
                  lg: "flex-start",
                },
              }}
            >
              <img src={dp} />
              <Typography
                fontSize={{ lg: "24px", md: "16px", sm: "16px", xs: "15px" }}
                fontWeight={"500"}
                color={"white"}
                paddingLeft={"10px"}
                border={"1px solid red"}
              >
                Priyanka
              </Typography>
            </Box>
            <Typography paddingTop={"10px"} fontSize={"12px"} color={"#919191"}>
              Happy Customer
            </Typography>
          </Box>
        </Container>
        <Container maxWidth={"md"} sx={{ height: "500px", marginTop: "150px" }}>
          <Typography
            fontSize={{ lg: "48px", md: "48px", sm: "40px", xs: "32px" }}
            fontWeight={"600"}
            textAlign={"center"}
            paddingX={"20px"}
            color={"white"}
          >
            The Weather App That Brings You Wonder
          </Typography>
          <Typography
            textAlign={"center"}
            color={"#2B261D"}
            fontSize={"16px"}
            fontWeight={"500"}
          >
            We care about your happiness and well-being, no matter the weather
          </Typography>
          <Container
            maxWidth="lg"
            sx={{
              height: "272px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "100px",
            }}
          >
            <Box
              borderBottom={1}
              borderColor="#F5B747"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "40px",
                paddingY: "10px",
              }}
            >
              <Typography
                fontSize={{ lg: "20px", md: "20px", sm: "16px", xs: "12px" }}
                fontWeight={600}
                color={"white"}
              >
                How can I customize the Juniper app to suit my needs?
              </Typography>
              <img src={Arrow} />
            </Box>
            <Box
              borderBottom={1}
              borderColor="#F5B747"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "40px",
                paddingY: "10px",
              }}
            >
              <Typography
                fontSize={{ lg: "20px", md: "20px", sm: "16px", xs: "12px" }}
                fontWeight={600}
                color={"white"}
              >
                How can I customize the Juniper app to suit my needs?
              </Typography>
              <img src={Arrow} />
            </Box>
            <Box
              borderBottom={1}
              borderColor="#F5B747"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "40px",
                paddingY: "10px",
              }}
            >
              <Typography
                fontSize={{ lg: "20px", md: "20px", sm: "16px", xs: "12px" }}
                fontWeight={600}
                color={"white"}
              >
                How can I customize the Juniper app to suit my needs?
              </Typography>
              <img src={Arrow} />
            </Box>
            <Box
              borderBottom={1}
              borderColor="#F5B747"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                paddingY: "10px",
              }}
            >
              <Typography
                fontSize={{ lg: "20px", md: "20px", sm: "16px", xs: "12px" }}
                fontWeight={600}
                color={"white"}
              >
                How can I customize the Juniper app to suit my needs?
              </Typography>
              <img src={Arrow} />
            </Box>
          </Container>
          <Container
            maxWidth="md"
            style={{
              height: "229px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "",
              marginTop: "100px",
            }}
          >
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography
                  fontSize={{ lg: "24px", md: "24px", sm: "22px", xs: "16px" }}
                  color={"#FFC355"}
                  align="center"
                >
                  Experience the weather like never before
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  fontSize={{ lg: "48px", md: "36px", sm: "24px", xs: "16px" }}
                  color={"#FFFFFF"}
                  align="center"
                >
                  The Only Weather App You Need to Stay Connected with Nature
                  and Each Other
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#2B261D",
                    borderRadius: "10px",
                    color: "white",
                    height: { lg: "51x", xs: "31px" },
                    width: { lg: "250px", xs: "150px" },
                    fontSize: { lg: "20px", xs: "12px" },
                    fontWeight: "500",
                  }}
                >
                  Download Now
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Container>
        <Container
          maxWidth="xl"
          sx={{
            height: "398px",
            display: "flex",
            backgroundColor: "",
            marginTop: "580px",
            marginBottom: "10px",
            alignItems:"flex-start",
            alignSelf:'flex-end'

          }}
        >
          <Grid
            container
            spacing={2}
            // alignItems={"center"}
            borderBottom={1}
            borderColor="#F5B747"
          >
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              border={"1px solid white"}
              spacing={1}
            >
                <img src={Twitter} />
                <img src={Twitter} />
                <img src={Twitter} />
             
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={4} >
              <Grid container spacing={5}>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <Typography
                    fontSize={"24px"}
                    fontWeight={"500"}
                    color={"white"}
                  >
                    Pages
                  </Typography>
                  <Typography variant="h6" color={"white"}>
                    Home
                  </Typography>
                  <Typography variant="h6">Info</Typography>
                  <Typography variant="h6">Shop</Typography>
                  <Typography variant="h6">Tos</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <Typography
                    fontSize={"24px"}
                    fontWeight={"500"}
                    color={"white"}
                  >
                    Pages
                  </Typography>
                  <Typography variant="h6" color={"white"}>
                    Home
                  </Typography>
                  <Typography variant="h6">Info</Typography>
                  <Typography variant="h6">Shop</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4}>
                  <Typography
                    fontSize={"24px"}
                    fontWeight={"500"}
                    color={"white"}
                  >
                    Pages
                  </Typography>
                  <Typography variant="h6" color={"white"}>
                    Home
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              // alignSelf={'self-start'}
              // alignItems={'self-start'}
              border={"1px solid white"}
              // justifyContent={""}
            >
              <Typography
                fontSize={"24px"}
                fontWeight={"500"}
                color={"white"}
                textAlign={"left"}
              >
                Subscribe
              </Typography>

              <Typography
                fontSize={"14px"}
                fontWeight={"500"}
                color={"white"}
                textAlign={"left"}
              >
                Join our newsletter to stay up to date on features and releases
              </Typography>
              <Typography
                fontSize={"14px"}
                fontWeight={"500"}
                color={"white"}
                textAlign={"left"}
              >
                Join our newsletter to stay up to date on features and releases
              </Typography>
              <Typography
                fontSize={"14px"}
                fontWeight={"500"}
                color={"white"}
                textAlign={"left"}
              >
                Join our newsletter to stay up to date on features and releases
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth={"xl"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "50px",
            marginTop:'40px'
          }}
        >
          <Typography fontSize={{lg:'35px',md:'35px',sm:'30px',xs:'24px'}} fontWeight={"600"} color={"white"}>
            JUNIPER
          </Typography>
          <Button
            sx={{
              height: {lg:'36px',md:'34px',sm:'26px',xs:'22px'},
              width:  {lg:'175px',md:'170px',sm:'150px',xs:'120px'},
              color: "white",
              border: "1px solid #F5B747",
              alignSelf: "end",
            }}
          >
         
            GET NOW
          </Button>
        </Container>
      </Container>
    );
  }
}

export default Home;
