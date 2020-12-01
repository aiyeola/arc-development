import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Hero from './HeroBlock';
import Services from './ServicesBlock';
import Revolution from './RevolutionBlock'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
    },
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Hero />
      <Services />
      <Revolution />
    </Grid>
  );
}
