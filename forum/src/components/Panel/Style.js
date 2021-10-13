import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { grey, white, lime } from '../Color';

const useStyles = makeStyles({
    panel: {
        background: grey,
        height: 220,
        marginLeft: 50,
        display:'inline-block',
    },
    menu: {
        marginBottom: 10,
    },
    text: {
        color: white,
        marginBottom: 10,
    },
    ico: {
        fontSize: 20,
        marginRight: 'auto',
    }
 });


const theme = createTheme({
    palette: {
      primary: {
          main: lime,
      }
    },
});

export {useStyles, theme}