import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography as MuiTypography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

const variants = {
  h1: 'Nisi euismod ante senectus consequat phasellus ut',
  h2: 'Nisi euismod ante senectus consequat phasellus ut',
  h3: 'Nisi euismod ante senectus consequat phasellus ut',
  h4: 'Nisi euismod ante senectus consequat phasellus ut',
  h5: 'Nisi euismod ante senectus consequat phasellus ut',
  h6: 'Nisi euismod ante senectus consequat phasellus ut',
  subtitle1: 'Leo varius justo aptent arcu urna felis pede nisl',
  subtitle2: 'Leo varius justo aptent arcu urna felis pede nisl',
  body1:
    'Justo proin curabitur dictumst semper auctor, consequat tempor, nostra aenean neque turpis nunc. Leo. Sapien aliquet facilisi turpis, elit facilisi praesent porta metus leo. Dignissim amet dis nec ac integer inceptos erat dis Turpis sodales ad torquent. Dolor, erat convallis.Laoreet velit a fames commodo tristique hendrerit sociosqu rhoncus vel sapien penatibus facilisis faucibus ad. Mus purus vehicula imperdiet tempor lectus, feugiat Sapien erat viverra netus potenti mattis purus turpis. Interdum curabitur potenti tristique. Porta velit dignissim tristique ultrices primis.',
  body2:
    'Justo proin curabitur dictumst semper auctor, consequat tempor, nostra aenean neque turpis nunc. Leo. Sapien aliquet facilisi turpis, elit facilisi praesent porta metus leo. Dignissim amet dis nec ac integer inceptos erat dis Turpis sodales ad torquent. Dolor, erat convallis.',
  caption: 'Accumsan leo pretium conubia ullamcorper.',
  overline: 'Accumsan leo pretium conubia ullamcorper.',
  button: 'Vivamus ultrices rutrum fames dictumst'
};

const Yayan = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Yayan;
