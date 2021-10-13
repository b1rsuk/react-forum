import { createTheme } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/styles";
import { lime, grey } from '../Color';

const theme = createTheme({
    palette: {
      secondary: {
        main: lime,
      },
    },
  });
  
  const useStyles = makeStyles({
      root: {
          width: '25ch',
      },
      mainBox: {
          background: grey,
          width: 400,
          height: 700,
          marginTop: 70,
          marginLeft: 'auto',
          marginRight: 'auto',
      },
      input: {
          marginBottom: 20,
      },
  
      team: {
          color: lime,
          marginLeft: 'auto',
          textAlign: 'center',
          lineHeight: 5,
          letterSpacing: -1,
      },
      notchedOutline: {
          borderWidth: "1px",
          borderColor: lime + " !important",
          color: lime + " !important"
      },
      registrationBtn: {
        height: 60,
        marginTop: 20,
      }
  });

export {theme, useStyles };