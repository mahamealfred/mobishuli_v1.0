import {  Typography, useMediaQuery } from "@mui/material";
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
export default function Banner() {
  const navigate=useNavigate()
  const handleStart=()=>{
navigate("/authentication-signin")
  }
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src={startimage} />
      <BannerContent>
        <Typography variant="h6">MobiShuli</Typography>
        <BannerTitle variant="h4">
        Go Cashless
        </BannerTitle>
        <BannerDescription variant="subtitle">
        Mobishuli is a payment system that helps parents and students to pay school fees. 
        </BannerDescription>
        <BannerShopButton onClick={handleStart} color="primary">Get Started</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
