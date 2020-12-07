import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-pacifico';
import 'fontsource-raleway';
import 'fontsource-roboto';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686';

export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem', // 14px
      color: 'inherit',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem ',
      textTransform: 'none',
      color: '#fff',
    },
    h2: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '2.5rem',
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: 'Pacifico',
      fontSize: '2.5em',
      color: arcBlue,
    },
    h4: {
      fontFamily: 'Raleway',
      fontSize: '1.7rem',
      color: arcBlue,
      fontWeight: 700,
    },
    body1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
      fontFamily: 'Roboto',
    },
    subtitle1: {
      fontSize: '1.25rem',
      color: arcGrey,
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: '1.25rem',
      color: 'white',
      fontWeight: 300,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 300,
      color: arcGrey,
    },
    learnButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
  },
});
