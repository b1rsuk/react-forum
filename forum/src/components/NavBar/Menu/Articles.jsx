import Typography from '@material-ui/core/Typography';
import useStyles from './MenuStyle';

export default function Articles() {
    const classes = useStyles();
    return <Typography variant="body1"  noWrap className={classes.navbarText}>Статьи</Typography>
}