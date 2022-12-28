import React, {lazy} from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider, Paper } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "../components/LoginForm";
// import SocialAuth from "../components/SocialAuth";
import { motion } from "framer-motion";
import { Colors } from "../../../styles/theme";
const AppBar =lazy(() => import('../../../components/appbar'))
const Footer =lazy(() => import('../../../components/footer'))
const RootStyle = styled("div")({
  background:"rgb(249, 250, 251)",
  height: "85vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = ({ setAuth }) => {
  return (
    <>
    <AppBar/>
    <RootStyle> 
    <Paper elevation={2}
     style={{ borderRadius: 15 }}
    >
    <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            {/* <Logo /> */}
            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Login to your account
              <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}/>
            </Typography>
          </HeadingStyle>
{/* 
          <Box component={motion.div} {...fadeInUp}>
            <SocialAuth />
          </Box> */}

          {/* <Divider sx={{ my: 3 }} component={motion.div} {...fadeInUp}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Login
            </Typography>
          </Divider> */}

          <LoginForm setAuth={setAuth} />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
            Don’t have an account?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/signup-selection">
              Sign up
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
</Paper >
     
    </RootStyle>
    <Footer/>
    </>
   
  );
};

export default Login;
