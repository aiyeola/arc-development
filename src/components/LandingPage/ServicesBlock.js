import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import ButtonArrow from '../ui/ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../../assets/mobileIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
  specialText: {
    fontFamily: 'Pacifico',
    color: theme.palette.common.orange,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em',
    },
  },
  subtitle: {
    marginBottom: '1em',
  },
  icon: {
    marginLeft: '2em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
  serviceContainer: {
    marginTop: '12em',
    [theme.breakpoints.down('sm')]: {
      padding: 25,
    },
  },
}));

function ServicesBlock({ setValue, setSelectedIndex }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1">
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Complete digital solutions, from investigation to{' '}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid item>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftwareIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : 'flex-end'}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">iOS/ Android App Development</Typography>
            <Typography variant="subtitle1">
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Integrate your web experience or create a standalone app
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button
              component={Link}
              to="/mobileapps"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid
            item
            style={{
              marginRight: matchesSM ? 0 : '5em',
            }}
          >
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={mobileAppsIcon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          container
          direction="row"
          justify={matchesSM ? 'center' : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : '5em',
              textAlign: matchesSM ? 'center' : undefined,
            }}
          >
            <Typography variant="h4">Website Development</Typography>
            <Typography variant="subtitle1">
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={15}
                height={15}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>

          <Grid item>
            <img
              className={classes.icon}
              alt="website icon"
              src={websiteIcon}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default ServicesBlock;
