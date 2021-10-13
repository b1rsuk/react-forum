import { makeStyles } from '@material-ui/core/styles';
import { lime } from '../../Color';

const useStyles = makeStyles({
    mainColor: {
        color: lime,
    },
    navbarText: {
        cursor: 'pointer',
        marginLeft: 20,
        '&:hover': {
            color: '#f5f5f5',
         },
         display:'flex'
    },
});

export default useStyles;