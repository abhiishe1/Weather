import React from "react";
import {
  Button,
  Box,
  Container,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  TableRow,
  TableCell,
  Grid
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Content from './Content.png';
import Navbar from "./Navbar";

class Info extends React.Component {
  render() {
    return (
      <Container maxWidth='100vw' sx={{backgroundColor:'#D2982D',}}>
        <Navbar />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <img src={Content} alt="Content" style={{ maxWidth: "100%", height: "auto" }} />
        </Box>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'300px' }}>
        <TableContainer component={Paper} sx={{width:'960px',backgroundColor:'inherit'}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{fontSize:{ lg:'32px',md:'32px', sm:'20px',xs:'12px'},fontWeight:'700',color:'white'}}>JUNIPER</TableCell>
            <TableCell sx={{fontSize:{ lg:'32px',md:'32px', sm:'20px',xs:'12px'},fontWeight:'700',color:'white'}}>OTHER COMPANY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow  sx={{backgroundColor:'#E0A12E'}}>
            <TableCell sx={{fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'12px'},fontWeight:'500',color:'white'}}>Cloud Technology</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Cloud technology for reliable forecasts</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Other apps use outdated data sources</TableCell>
          </TableRow>
          <TableRow>
          <TableCell sx={{fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'12px'},fontWeight:'500',color:'white'}}>Cloud Technology</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Cloud technology for reliable forecasts</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Other apps use outdated data sources</TableCell>
          </TableRow>
          <TableRow  sx={{backgroundColor:'#E0A12E'}}>
          <TableCell sx={{fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'12px'},fontWeight:'500',color:'white'}}>Cloud Technology</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Cloud technology for reliable forecasts</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Other apps use outdated data sources</TableCell>
          </TableRow>
          <TableRow>
          <TableCell sx={{fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'12px'},fontWeight:'500',color:'white'}}>Cloud Technology</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Cloud technology for reliable forecasts</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Other apps use outdated data sources</TableCell>
          </TableRow>
          <TableRow  sx={{backgroundColor:'#E0A12E'}}>
          <TableCell sx={{fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'12px'},fontWeight:'500',color:'white'}}>Cloud Technology</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Cloud technology for reliable forecasts</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Other apps use outdated data sources</TableCell>
          </TableRow>
          <TableRow  sx={{backgroundColor:'#E0A12E'}}>
          <TableCell sx={{fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'12px'},fontWeight:'500',color:'white'}}>Cloud Technology</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Cloud technology for reliable forecasts</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Other apps use outdated data sources</TableCell>
          </TableRow>
          <TableRow  sx={{backgroundColor:'#E0A12E'}}>
          <TableCell sx={{fontSize:{lg:'20px',md:'20px',sm:'16px',xs:'12px'},fontWeight:'500',color:'white'}}>Cloud Technology</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Cloud technology for reliable forecasts</TableCell>
            <TableCell sx={{fontSize:{lg:'16px',md:' 16px',sm:'12px',xs:'10px'},fontWeight:'500',color:'#45423B'}}>Other apps use outdated data sources</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
   </Container>  
   <Container style={{ textAlign: 'center',marginTop:'100px'}} >
        <Button
          variant="contained" color="inherit"
          sx={{
            height: {lg:'48px',md:'48px',sm:'48px',xs:'24px'},
            width:  {lg:'293px',md:'293px',sm:'293px',xs:'150px'},
            fontSize:  {lg:'24px',md:'24px',sm:'24px',xs:'12px'},
            backgroundColor: '#E0A12E',
            color:'white'
          }}
        >
          Download Now
        </Button>
      </Container>
      {/* <Container maxWidth={'lg'} sx={{border:'2px solid white'}}>
      <Grid container justifyContent="center" alignItems="center" height={471} width={1170} border={'1px solid'}>
      <Grid item>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
          Item 1
        </Box>
      </Grid>
      <Grid item>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
          Item 2
        </Box>
      </Grid>
      <Grid item>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
          Item 3
        </Box>
      </Grid>
      <Grid item>
        <Box bgcolor="primary.main" color="primary.contrastText" p={2} m={1}>
          Item 4
        </Box>
      </Grid>
    </Grid>
    </Container> */}
      </Container>
    );
  }
}

export default Info;
