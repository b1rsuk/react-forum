import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatBubbleOutline from '@material-ui/icons/ChatBubbleOutline';
import useStyles from './TagStyle';

const Tag = ({setTeg}) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const list = [
        {title: 'free'},
        {title: 'trade'},
        {title: 'services'}
    ];
    return (
        <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
        showLabels
        className={classes.root}
        >
            {
                list.map(e => <BottomNavigationAction label={e.title} onClick={() => setTeg(e.title)} icon={<ChatBubbleOutline />} />)
            }
        </BottomNavigation>
    );
}
export default Tag;