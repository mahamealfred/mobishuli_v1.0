import * as React from 'react';
import Appbar from '../../components/appbar';
import Footer from '../../components/footer';
import {  CssBaseline, Box, Container, Stack } from '@mui/material';
import CoverLayout from "../../layouts/landingpage/components/coverLayout";
import Banner from '../../components/banner';
import { ThemeProvider } from "@mui/system";
import theme from "../../styles/theme";
const Index = () => {

  return (
    <ThemeProvider theme={theme}>
      <Appbar/>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >

<CssBaseline/>
<Stack>
<Footer/>
<Banner/>
     <Footer/>
</Stack>
       
    </Container>
       
    </ThemeProvider>
  )
}

export default Index