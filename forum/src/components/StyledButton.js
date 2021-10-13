import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, rgb(58, 169, 119) 30%,  rgb(58, 169, 119) 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 40,
      padding: '0 30px',

      marginBottom: 25,
    },
    label: {
      textTransform: 'capitalize',
    },
})(Button);

export default StyledButton; 