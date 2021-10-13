import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { useParams } from 'react-router-dom';
import React, {useRef} from 'react';
import JoditEditor from "jodit-react";
import axios from 'axios';
import AdminPanel from '../AdminPanel';
import Auth from '../../store/Auth';
import useStyles from './ArticleStyle';

const Article = () => {
    const { id, user } = useParams();
    const [text, setText] = React.useState('');
    React.useEffect(() => {
      async function fetchData() {
        try {
          const [textResponse] = await Promise.all([
            axios.get(`http://localhost:5000/auth/getArticle/?id=${id}`)
          ]);
          console.log(textResponse.data)
          setText(textResponse.data);
        } catch {
          alert('Ошибка при запросе данных ;(');
        }
      }
    
      fetchData();
    }, []);

    
    console.log(user)
    const classes = useStyles();
    const editor = useRef(null);
	const config = {
		"readonly": true,
        "toolbar": false,
        "theme": "dark",
        "minHeight": 550,
	}
    
    const Admin = (user, id) => {
        if (Auth.roles === 'ADMIN') return <AdminPanel name={user} idArticle={id}/>
        return null
    }

    return (
        <Box className={classes.box} borderRadius={5} padding={5}>
            <ListItem className={classes.navbar}>
                <Admin user={user} id={id}/>
                <ListItemAvatar className={classes.container}>
                <Tooltip title={user}>
                    <Avatar className={classes.avatar}>
                        <ImageIcon />
                    </Avatar>
                </Tooltip>
                </ListItemAvatar>
            </ListItem>
            <Divider className={classes.divider}/>
            <JoditEditor
            ref={editor}
            value={text}
            config={config}
            tabIndex={1} // tabIndex of textarea
            
            onChange={newContent => {}}
            />
            
        </Box>
    );
}
export default Article;