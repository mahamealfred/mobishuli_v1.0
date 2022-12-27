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

} from '@mui/material';

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
                    py: 4,
                    width: "100vw"

                }}
            >
                <Container maxWidth="lg">
                    <Grid
                        container
                        spacing={2}
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
                                        <p>Service</p>
                                    </Box>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        variant="text"
                                    >
                                    </Button>
                                </CardActions>
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
                                        <p>Wigite</p>
                                    </Box>
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Button
                                        color="primary"
                                        fullWidth
                                        variant="text"
                                    >
                                    </Button>
                                </CardActions>
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