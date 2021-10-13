import { makeStyles } from '@material-ui/core/styles';
import { grey } from '../../Color';


const useStyles = makeStyles(() => ({
    box: {
        background: grey,
        height: 700,
        marginLeft: 50,
        overflowY: 'auto',
    },
    root: {
        width: '100%',
        maxWidth: 360,
    },
}));
  
export default useStyles;