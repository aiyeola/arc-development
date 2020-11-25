import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

export default createMuiTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    // htmlFontSize: 10,
    // fontSize: 10,
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem', // 14px
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem ',
      textTransform: 'none',
      color: '#fff',
    },
  },
});
