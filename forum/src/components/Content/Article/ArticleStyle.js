import { makeStyles } from "@material-ui/core";
import { grey, lime, white } from '../../Color';

const useStyles = makeStyles({
    box: {
        height: 700,
        width: 1200,
        backgroundColor: grey,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
    },
    container: {
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    avatar: {
        width: 100,
        height: 100,
    },
    divider: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: lime,
    },
    content: {
        color: white,
    },
    ico: {
        color: lime,
        position: 'absolute',
        right: 0,
    }
});
export default useStyles;