import { lime, grey } from '../../Color';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
    box: {
        width: 250,
        height: 250,
        backgroundColor: grey,
        
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: lime + " !important",
        color: lime + " !important"
    },
    btn: {
        marginTop: 50,
    }
}));
export default useStyles;