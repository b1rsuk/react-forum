import { makeStyles } from '@material-ui/styles';
import React, {useState, useRef, Fragment} from 'react';
import JoditEditor from "jodit-react";
import Button from '@material-ui/core/Button';
import MessageCreate from './Message/MessageCreate';

const useStyles = makeStyles({
    btn: {
        marginTop: 10,
        position: 'absolute',
        right: 0
    }
});
const Create = () => {
    const classes = useStyles();
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [openMessage, setOpenMessage] = useState(false);
    console.log(content);
	const config = {
		"readonly": false,
        "theme": "dark",
        "minHeight": 750,
	}
    return (
        <Fragment>
            <MessageCreate openMessage={openMessage} setOpenMessage={setOpenMessage} content={content}/>
            <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
            onChange={newContent => {}}
            />
           <Button variant="outlined" className={classes.btn} onClick={() => setOpenMessage(true)}>Создать</Button>
        </Fragment>
    );
}
export default Create;