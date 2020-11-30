import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({}));

const ServicesBlock = () => {
  const classes = useStyles();

  return (
    <Grid item>
      <Grid container direction="row">
        <Grid item>
          <Typography variant="h4">Custom Software Development</Typography>
          <Typography variant="subtitle1">
            Save Energy. Save Time. Save Money.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesBlock;
