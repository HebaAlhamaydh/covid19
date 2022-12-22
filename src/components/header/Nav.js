import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
// import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
// import { LinkProps } from '@mui/material/Link';

import img from '../../assets/header.png'
function Nav() {
  return (
    <div>

      <img alt="h" src={img} width="100%" height="400px"/>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'rgba(0,0,0)' }}  >
          <Toolbar>

            <Typography  sx={{ textDecoration: "none",flexWrap: 'nowrap' }} color="white" variant="h6" component={Link} to="/">
              Home  &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography  sx={{ textDecoration: "none" , flexWrap: 'nowrap'}} color="white" variant="h6" component={Link} to="/card" >
            All Countries  &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography  sx={{ textDecoration: "none"  }} color="white" variant="h6" component={Link} to="/records">
            My Records&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography  sx={{ textDecoration: "none"  }} color="white" variant="h6" component={Link} to="/signin">
            SignIn&nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography  sx={{ textDecoration: "none"  }} color="white" variant="h6" component={Link} to="/signup">
            SignUp
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
export default Nav;