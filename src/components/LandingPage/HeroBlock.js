import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import ButtonArrow from '../ui/ButtonArrow';
import animationData from '../../animations/landinganimation/data';

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: '50em',
    minWidth: '21em',
    marginTop: '2em',
    marginLeft: '10%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },

  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}));

function HeroBlock({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Grid item>
      <Grid container justify="flex-end" alignItems="center" direction="row">
        <Grid item sm className={classes.heroTextContainer}>
          <Typography align="center" variant="h2">
            Bringing west coast technology <br />
            to the Midwest
          </Typography>
          <Grid container justify="center" className={classes.buttonContainer}>
            <Grid item>
              <Button
                component={Link}
                to="/estimate"
                variant="contained"
                className={classes.estimateButton}
                onClick={() => setValue(5)}
              >
                Free Estimate
              </Button>
            </Grid>
            <Grid item>
              <Button
                component={Link}
                to="/revolution"
                variant="outlined"
                className={classes.learnButtonHero}
                onClick={() => setValue(2)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm className={classes.animation}>
          <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HeroBlock;
