import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { View, List } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Yayan = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          md={7}
          xs={12}
        >
          <View />
        </Grid>
        <Grid
          item
          md={5}
          xs={12}
        >
          <List />
        </Grid>
      </Grid>
    </div>
  );
};

export default Yayan;
