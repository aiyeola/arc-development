import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

import ButtonArrow from '../ui/ButtonArrow';
import infoBackground from '../../assets/infoBackground.svg';

const useStyles = makeStyles((theme) => ({
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80em',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
    },
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
}));

function InformationBlock({ setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.infoBackground}
    >
      <Grid
        item
        container
        style={{
          textAlign: matchesXS ? 'center' : 'inherit',
          width: matchesXS ? '100vw' : 'inherit',
        }}
        direction={matchesXS ? 'column' : 'row'}
      >
        <Grid
          item
          sm
          style={{ marginLeft: matchesXS ? 0 : matchesSM ? '2em' : '5em' }}
        >
          <Grid
            container
            style={{ marginBotton: matchesXS ? '10em' : 0 }}
            direction="column"
          >
            <Typography variant="h2" style={{ color: 'white' }}>
              About Us
            </Typography>
            <Typography variant="subtitle2">Let's get personal.</Typography>
            <Grid item>
              <Button
                component={Link}
                to="/about"
                variant="outlined"
                style={{ color: 'white', borderColor: 'white' }}
                className={classes.learnButton}
                onClick={() => setValue(3)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.white}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          sm
          style={{
            marginRight: matchesXS ? 0 : matchesSM ? '2em' : '5em',
            textAlign: matchesXS ? 'center' : 'right',
          }}
        >
          <Grid container direction="column">
            <Typography variant="h2" style={{ color: 'white' }}>
              Contact Us
            </Typography>
            <Typography variant="subtitle2">
              Say Hello.
              <span role="img" aria-label="wave emoji">
                👋🏽
              </span>
            </Typography>
            <Grid item>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                style={{ color: 'white', borderColor: 'white' }}
                className={classes.learnButton}
                onClick={() => setValue(4)}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <ButtonArrow
                  width={15}
                  height={15}
                  fill={theme.palette.common.white}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default InformationBlock;
