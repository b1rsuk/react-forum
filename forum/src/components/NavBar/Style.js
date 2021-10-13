import { makeStyles } from '@material-ui/core/styles';
import {grey, white, lime} from '../Color';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      marginLeft: 40,
      letterSpacing: -1,
    },
  
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    navbar: {
        background: grey,
        color: lime,
        marginBottom: 10,
    },
    navList: {
        color: white,
        marginLeft: 20,
        display:'flex',
    },
    entrance: {
      marginTop: 20,
    },
    name: {
      marginLeft: 10,
      color: white 
    }
  }));

  export default useStyles;