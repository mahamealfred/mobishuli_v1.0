import React, { lazy } from 'react';

import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Container,
    CardActions,
    CardMedia,

} from '@mui/material';
import cardImage from "../../assets/images/mobishuli.png"
import ParentPayment from '../service/pages/ParentPayment';
const AppBar = lazy(() => import('../../components/appbar'))
const Footer = lazy(() => import('../../components/footer'))
const Index = (props) => {


    return (
        <React.Fragment>
            <AppBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 6,
                    width: "100vw"
                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={4}
                    >
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                        >
                            <Card {...props}>
                                <CardContent>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyCenter: "center"
                                        }}
                                    >
                                           <CardMedia
                                      component="img"
                                      height={{xs:"200",sm:"365"}}
                                      sx={{objectFit:"contain"}}
                                   image={cardImage}
                                     alt="Paella dish"
                                             />
                                    </Box>
                                </CardContent>
                                {/* <Divider /> */}
                                {/* <CardActions>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        variant="text"
                                    >
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </Grid>
                        <Grid
                            item
                            lg={6}
                            md={6}
                            xs={12}
                        >
                            <Card {...props}>
                                <CardContent>
                                    <Box
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                     <ParentPayment/>
                                    </Box>
                                </CardContent>
                                {/* <Divider /> */}
                                {/* <CardActions>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        variant="text"
                                    >
                                    </Button>
                                </CardActions> */}
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer/>
        </React.Fragment>

    );
};
export default Index;