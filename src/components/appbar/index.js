import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import logo from "../../assets/images/mobishulilogo.png"
import CssBaseline from '@mui/material/CssBaseline';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
//import login from "../../assets/images/login.png";

function Index() {
  const navigate=useNavigate()
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  const handleLogin=()=>{
    navigate("/authentication-signin")
  }

  return (
<Box sx={{ flexGrow: 1 }}>
<AppBar position="sticky" sx={{backgroundColor:"white"}} elevation={1}>
  <Toolbar>
    {/* <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton> */}
     <Box
            component="img"
            sx={{
            height: 80,
            objectFit:"contain",
            flexGrow: 0.5
            }}
            alt="Your logo."
            src={logo}
        />
    <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
      News
    </Typography>
    <Box sx={{  flexGrow: 0}}>
    <Tooltip title="Login">
               <IconButton onClick={handleLogin} sx={{ p: 0 }}>
               <Avatar sx={{ bgcolor:"#35A745", fontSize:"12px" }}>Login</Avatar>
               </IconButton>
             </Tooltip> 
             
    </Box>
           
  </Toolbar>
</AppBar>
</Box>
   
  );
}
export default Index;