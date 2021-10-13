import { makeStyles } from '@material-ui/core/styles';
import { lime, white } from '../Color';
import { grey } from '../Color';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    box: {
      background: grey,
      width: 350,
      height: 350,
    },
    icon: { 
      fontSize: 150,
      marginLeft: 95,
      color: lime
    },
    divider: {
       marginBottom: 10,
       backgroundColor: lime
    },
    info: { color: white }
}));
export default useStyles;