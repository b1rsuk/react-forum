import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import React from 'react';
import Card from '../Card';
import useStyles from './ContentStyle';
  
const Content = ({card}) => {
    const classes = useStyles();
    return(     
       <Grid item xs={8} >
        <Box className={classes.box} borderRadius={6} overflow='hidden'>
        <List className={classes.root}>
          {
            card.map(e => <Card title={e.title} time={e.date} user={e.user} id={e._id} key={e._id}/>)
          }
        </List>
        </Box>
      </Grid>
    )
}
export default Content;