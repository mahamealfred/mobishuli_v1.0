import * as React from 'react';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
const Index = () => {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate()
  const handleHomePage=()=>{
    navigate("/")
  }
  return (
    <Box sx={{ pb: 7 }}>
       <CssBaseline />
       <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
           <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
<ButtonGroup variant="text" style={{color:"black"}}  aria-label="text button group">
        <Button style={{textTransform: 'none',color:"black"}} onClick={handleHomePage} >Home</Button>
        {/* <Button style={{textTransform: 'none',color:"black"}}>Services</Button> */}
        <Button style={{textTransform: 'none',color:"black"}}>MarketPlace</Button>
        <Button style={{textTransform: 'none',color:"black"}}>MobiTv</Button>
        <Button style={{textTransform: 'none',color:"black"}}>MoreApp</Button>
      </ButtonGroup>
    </Box>
        </BottomNavigation>
      </Paper>
      </Box>
  )
}

export default Index