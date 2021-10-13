import Backdrop from '@material-ui/core/Backdrop';
import Box from '@material-ui/core/Box';
import { lime } from '../../Color';
import { theme } from '../../Authorization/Style';
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import StyledButton from '../../StyledButton';
import React from 'react';
import axios from 'axios';
import Auth from '../../store/Auth';
import Tag from './Tag'; 
import Message from '../../Message/Message';
import useStyles from './MessageStyle';

const MessageCreate = ({openMessage, setOpenMessage, content}) => {
    const classes = useStyles();
    const [title, setTitle] = React.useState('');
    const [teg, setTag] = React.useState('free');
    const [openMessageError, setOpenMessageError] = React.useState('');
    const [text, setText] = React.useState('');
    const [status, setStatus] = React.useState(false);
    return (
      <Backdrop className={classes.backdrop} open={openMessage} onClick={() => setOpenMessage(false)}>
          <Message text={text} openMessage={openMessageError} status={status} setOpenMessage={setOpenMessageError} />
          <Box className={classes.box} borderColor={lime} borderTop={10} borderRadius={5} padding={2} onClick={e => e.stopPropagation()}>
            <ThemeProvider theme={theme}>
                <TextField fullWidth id="outlined-basic" color='secondary' onChange={e => setTitle(e.target.value)} label="Title" variant="outlined" className={classes.input} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}/>
            </ThemeProvider>
            <Tag setTeg={setTag}/>
            <StyledButton fullWidth className={classes.btn} onClick={ () => axios.post('http://localhost:5000/auth/article', {
                "title": title,
                "user": Auth.name,
                "teg": teg,
                "content": content, 
              }, { withCredentials: true }).then(e => {
                  if (e.data.error) {
                    setStatus(false);
                    setText(e.data.error);
                    setOpenMessageError(true);
                    return
                  }
                
                  setStatus(true);
                  setText('Ваша статья опубликована');
                  setOpenMessageError(true);
                  document.location.href = "/";
                })
            }>OK</StyledButton>
          </Box>
      </Backdrop>
    );
}
export default MessageCreate;