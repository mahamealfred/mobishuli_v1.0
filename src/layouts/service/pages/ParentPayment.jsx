import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Document from "../components/parentpayment/Document";
import Account from "../components/parentpayment/Document";
import Review from "../components/parentpayment/Document";
import { useEffect,useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { useRef } from 'react';
import CardMedia from "@mui/material/CardMedia";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.6rem',
  },
};

const ParentPayment= ({}) => {

  const steps = ['Student ID', 'Enter Information', 'View Details'];
  const [activeStep, setActiveStep] = React.useState(0);


const [niderrorMessage,setNiderrorMessage]=useState("");
  const [formData, setFormData] = useState({
    nid: "",
    phoneNumber: "",
    password: "",
    email:""
  });

// const [phoneNumber,setPhoneNumber]=useState("")

 const getStepContent = (step) => {
   switch (step) {
     case 0:
       return (
         <Document
      
       
         />
       );
     case 1:
       return (
         <Account
      
        
         />
       );
     case 2:
       return <Review 
    
       />;
     default:
       throw new Error("Unknown step");
   }
 };
 
   
 //handle on button submit for each step
 const handelSubmit = () => {

   if (activeStep === 0) {
 handleNext()
   } else if (activeStep === 1) {
 handleNext()
    
   } else if (activeStep === 2) {

 handleNext()
   } else {
     return null;
   }
   

  
 };

 const handleNewpayment = () => {
 
  setActiveStep(0)
 };

 const handleNext = () => {
   setActiveStep(activeStep + 1);
 };

 const handleBack = () => {
  

   
   setActiveStep(0);
 
   //setOpenRRA(false)
 };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container component="main" maxWidth="sm" sx={{display:{xs:"block",sm:"block",md:"block",lg:"block"}, mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 2 } }}
          >
             <ThemeProvider theme={theme}>
           <Grid
           container
           direction="column"
           alignItems="center"
           justifyContent="center"
           >
            <Typography variant="h6" color="gray" 
              sx={{ fontSize:{xs:14,md:16,lg:20} }}
            >
  Mobishuli Payment Service
          </Typography>
         
           </Grid>
           </ThemeProvider>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5,display:{xs:"inline",sm:"flex"} }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" textAlign="center" gutterBottom>
                 Thank you for using mobicash
                  </Typography>
                  <Typography textAlign="center" variant="subtitle1">
                  You have successfully pay school fees
                  </Typography>
                
                  <Button onClick={handleNewpayment} sx={{ mt: 3, ml: 1 }}>
                Done
                  </Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep == 0 || activeStep !==2? (
                      <Button onClick={handleBack} 
                     //sx={{ mt: 3, ml: 1 }}
                      sx={{ my: 1, mx: 1.5 }}
                      >
          Cancel
                      </Button>
                    ):null}

                    <Button
                      onClick={handelSubmit}
                      // sx={{ mt: 3, ml: 1 }}
                      sx={{ my: 1, mx: 1.5 }}
                    >
                      {/* {activeStep === steps.length - 1 ? 'Mke payment' : 'Next'} */}
                      {activeStep === steps.length - 1
                        ? 'Receipt'
                        : activeStep === 0
                        ? `Submit`
                        :`Make Payment`
                        }
                    </Button>
                  </Box>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default ParentPayment;
