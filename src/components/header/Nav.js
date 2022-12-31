import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import cookie from "react-cookies";

import img from '../../assets/header.png'
function Nav() {
  
  let userId = cookie.load("userID");
  const navigate = useNavigate();

  const handleSignout = () => {
    cookie.remove("token");
    cookie.remove("actions");
    cookie.remove("userAccess");
    cookie.remove("userID");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 100)
  };

  return (
    <div>

      <img alt="h" src={img} width="100%" height="400px" />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: 'rgba(0,0,0)' }}  >
          <Toolbar>

            <Typography sx={{ textDecoration: "none", flexWrap: 'nowrap' }} color="white" variant="h6" component={Link} to="/">
              Home  &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography sx={{ textDecoration: "none", flexWrap: 'nowrap' }} color="white" variant="h6" component={Link} to="/card" >
              All Countries  &nbsp;&nbsp;&nbsp;
            </Typography>
            <Typography sx={{ textDecoration: "none" }} color="white" variant="h6" component={Link} to="/records">
              My Records&nbsp;&nbsp;&nbsp;
            </Typography>
            {userId  ? (
               <Typography sx={{ textDecoration: "none" }} color="white" variant="h6" component={Link} to="/" onClick={handleSignout}>
               Signout&nbsp;&nbsp;&nbsp;
             </Typography>
            ) : (
               <Typography sx={{ textDecoration: "none" }} color="white" variant="h6" component={Link} to="/signin">
                SignIn&nbsp;&nbsp;&nbsp;
              </Typography>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}
export default Nav;