import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { Box } from '@mui/material';

const Account=({

 
})=> {
 
    const handleClose = () => {
      // setOpenAccountError('')
      //   setOpen(false);
    };
  return (
    <React.Fragment>
        {/* {   !openAccountError ? null : (
                <Collapse in={open}>
                    <Alert severity="error"
                        action={
                            <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"onClick={handleClose}>
                        <CloseIcon
                        fontSize="inherit"/></IconButton>
                        }
                        sx={
                            {mb: 0.2}
                    }>
                        {openAccountError}  
                        </Alert>
                </Collapse>
            )
        } */}
    {/* <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
     
    >
        <img style={{width:120,height:100,objectFit:"contain"}} src={`data:image/png;base64,${photo}`}/>
        </Box> */}
      <Grid container spacing={3}
        alignItems="center"
        justifyContent="center"
      
      >
         
      <Grid item xs={12} md={4}>
                 <Typography variant="body2" textAlign="center" mt={1} sx={{ fontSize: "14px", fontWeight: "bold" }} gutterBottom>
             Student Names
              </Typography>
              <Typography variant="body2" textAlign="center" sx={{ fontSize: "16px", fontWeight: "bold" }} color="text.secondary">
       Mahame Alfred 
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                 <Typography variant="body2" textAlign="center" mt={1} sx={{ fontSize: "14px", fontWeight: "bold" }} gutterBottom>
        Student Number
              </Typography>
              <Typography variant="body2" textAlign="center" sx={{ fontSize: "16px", fontWeight: "bold" }} color="text.secondary">
       123455
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                 <Typography variant="body2" textAlign="center" mt={1} sx={{ fontSize: "14px", fontWeight: "bold" }} gutterBottom>
               School Name
              </Typography>
              <Typography variant="body2" textAlign="center" sx={{ fontSize: "16px", fontWeight: "bold" }} color="text.secondary">
        Gs Umubano 1
              </Typography>
            </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            margin="normal"
            size="small" 
            label="Amount"
          //   value={formData.phoneNumber}
          //   onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}
          //  helperText={phoneNumberError? phoneNumberError : ""}
          //  error={phoneNumberError}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            margin="normal"
            size="small" 
            label="Email"
            value={formData.email}
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
            helperText={emailError? emailError : ""}
            error={emailError}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid> */}
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            margin="normal"
            size="small" 
            label="Book amount"
            // value={formData.phoneNumber}
            // onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}
            // helperText={phoneNumberError? phoneNumberError : ""}
            // error={phoneNumberError}
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            margin="normal"
            size="small" 
            label="Phone"
            // value={formData.password}
            // onChange={(e)=>setFormData({...formData,password:e.target.value})}
            // helperText={passwordError? passwordError : ""}
            // error={passwordError}
            type="password"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}
export default  Account