import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';



export default function Review({

}) {

  return (
    <React.Fragment>
            <Typography variant="h6" textAlign="center" gutterBottom>
         Transaction Details
      </Typography>
      <List disablePadding>
          <ListItem  sx={{ py: 1, px: 0 ,textAlign:"center"}} >
            <ListItemText primary="Names" secondary="Mahame Alfred"/>
          </ListItem>
          <ListItem  sx={{ py: 1, px: 0 ,textAlign:"center"}} >
            <ListItemText primary="Student ID" secondary="12345433" />
          </ListItem>
          <ListItem  sx={{ py: 1, px: 0 ,textAlign:"center"}} >
            <ListItemText primary="School Name" secondary="GS Umubano 1" />
          </ListItem>
    
      </List>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Grid container>
       
              <React.Fragment >
         
                
                <Grid item xs={6}>
                  <Typography gutterBottom>Date</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>21/12/2022</Typography>
                </Grid>
               
              </React.Fragment>
         
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}