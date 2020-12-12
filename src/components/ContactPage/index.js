import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackBar from '@material-ui/core/Snackbar';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import phoneIcon from '../../assets/phone.svg';
import emailIcon from '../../assets/email.svg';
import send from '../../assets/send.svg';
import ButtonArrow from '../ui/ButtonArrow';

dotenv.config();

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down('sm')]: {
      height: 40,
      width: 225,
    },
  },
}));

function Contact({ setValue }) {
  const theme = useTheme();
  const classes = useStyles();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: '',
    backgroundColor: '',
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;

      case 'phone':
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );

        if (!valid) {
          setPhoneHelper('Invalid phone number');
        } else {
          setPhoneHelper('');
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = async () => {
    setLoading(true);
    try {
      await axios.get('.netlify/functions/sendMail', {
        params: {
          name,
          email,
          phone,
          message,
        },
      });
      setLoading(false);
      setOpen(false);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setAlert({
        open: true,
        message: 'Message sent successfully!',
        backgroundColor: '#4BB543',
      });
    } catch (error) {
      setLoading(false);
      setAlert({
        open: true,
        message: 'Something went wrong, please try again!',
        backgroundColor: '#FF3232',
      });
    }
  };

  const buttonContents = (
    <>
      Send Message
      <img src={send} alt="send icon" style={{ marginLeft: '1rem' }} />
    </>
  );

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                align={matchesMD ? 'center' : undefined}
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? 'center' : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We're waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href="tel:5555555555"
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="email"
                  style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
                >
                  <a
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    href="mailto:zachary.herds@gmail.com"
                  >
                    zachary.herds@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: '20em' }}
            >
              <Grid item style={{ marginTop: '0.5em' }}>
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginTop: '0.5em' }}>
                <TextField
                  fullWidth
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginTop: '0.5em' }}>
                <TextField
                  fullWidth
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                multiline
                rows={10}
                id="message"
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: '2em' }}>
              <Button
                //      disabled={
                //       name.length === 0 ||
                //     message.length === 0 ||
                //   email.length === 0 ||
                //  phone.length === 0 ||
                // phoneHelper.length !== 0 ||
                //emailHelper.length !== 0
                // }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        scroll="body"
        fullScreen={matchesXS}
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? '1em' : '5em',
            paddingBottom: matchesXS ? '1em' : '5em',
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '20em',
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? '5em'
              : matchesMD
              ? '10em'
              : '20em',
            maxWidth: '1000px',
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4" align="center" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: '0.5em' }}>
              <TextField
                fullWidth
                label="Name"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Grid>
            <Grid item style={{ marginTop: '0.5em' }}>
              <TextField
                fullWidth
                error={emailHelper.length !== 0}
                helperText={emailHelper}
                label="Email"
                id="email"
                value={email}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ marginTop: '0.5em' }}>
              <TextField
                fullWidth
                error={phoneHelper.length !== 0}
                helperText={phoneHelper}
                label="Phone"
                id="phone"
                value={phone}
                onChange={onChange}
              />
            </Grid>
            <Grid item style={{ maxWidth: matchesXS ? '100%' : '30em' }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                multiline
                rows={10}
                id="message"
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid
              item
              container
              direction={matchesSM ? 'column' : 'row'}
              style={{ marginTop: '2em' }}
              alignItems="center"
            >
              <Grid item>
                <Button
                  color="primary"
                  style={{ fontWeight: 300 }}
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  //    disabled={
                  //       name.length === 0 ||
                  //     message.length === 0 ||
                  //   email.length === 0 ||
                  //  phone.length === 0 ||
                  // phoneHelper.length !== 0 ||
                  //emailHelper.length !== 0
                  // }
                  variant="contained"
                  className={classes.sendButton}
                  onClick={onConfirm}
                >
                  {loading ? <CircularProgress size={30} /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <SnackBar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor,
          },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        alignItems="center"
        justify={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesXS ? 'center' : matchesMD ? 'left' : 'inherit',
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? 'center' : undefined}>
                Simple Software. <br />
                Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? 'center' : undefined}
                style={{ fontSize: '1.5rem' }}
              >
                Take advantage of the 21st century
              </Typography>
              <Grid
                container
                item
                justify={
                  matchesXS ? 'center' : matchesMD ? 'flex-start' : undefined
                }
              >
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => setValue(5)}
          >
            Free estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
