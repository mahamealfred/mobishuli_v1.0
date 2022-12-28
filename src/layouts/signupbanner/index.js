import React,{lazy} from "react"
import {  Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
// import startimage from "../../assets/images/startimage.png";
import startimage from "../../assets/images/mobishuli.png";
import { useNavigate } from "react-router-dom";
import {CssBaseline} from "@mui/material";
const AppBar = lazy(() => import('../../components/appbar'))
const Footer = lazy(() => import('../../components/footer'))
export default function Banner() {
  const navigate=useNavigate()
  const handleStart=()=>{
navigate("/authentication-signin")
  }
  const handleParentSignup=()=>{
    navigate("/authentication-signup")
  }
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <AppBar/>
    <Footer/>
    <BannerContainer >
      <BannerImage src={startimage} />
      <BannerContent>
        <Typography variant="h6"> Are you a parent or Student?</Typography>
        <BannerTitle variant="h6">
    Click to continue
        </BannerTitle>
        <BannerDescription variant="subtitle">
        {/* Mobishuli is a payment system that helps parents and students to pay school fees.  */}
        </BannerDescription>
        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleParentSignup}>Parent</Button>
              <Button variant="outlined">Student</Button>
            </Stack>
      </BannerContent>
    </BannerContainer>
    <Footer/>
    </>
   
  );
}
