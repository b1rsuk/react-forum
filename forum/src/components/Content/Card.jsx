import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Button from '@material-ui/core/Button';
import React  from 'react';
import { useHistory } from 'react-router';

const Card = ({title, time, user, id}) => {

    const history = useHistory();
    return (
        <Button style={{ width: '100vw' }} onClick={() => history.push(`/article/${id}/${user}`)}>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={title} secondary={time + '   ' + user} />
            </ListItem>
        </Button>
    );
}
export default Card;