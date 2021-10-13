import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import StyledButton  from '../../StyledButton';
import {theme, useStyles } from '../Style';
import axios from 'axios';
import { lime } from '../../Color';
import Message from '../../Message/Message';
import { useHistory } from 'react-router';
import Auth from '../../store/Auth';

const Login = () => {
  const classes = useStyles();
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [openMessage, setOpenMessage] = React.useState(false);
  const [text, setText] = React.useState('');
  const [status, setStatus] = React.useState(false);
  const history = useHistory();

  return (
    <React.Fragment>
    <Message  text={text} status={status} openMessage={openMessage} setOpenMessage={setOpenMessage}/>
    <Box className={classes.mainBox} borderColor={lime} borderTop={10} padding={2}>
      <h1 className={classes.team}>BorsukTeam</h1>
      <ThemeProvider theme={theme}>
        <TextField fullWidth id="outlined-basic" color='secondary' onChange={e => setLogin(e.target.value)} label="Login" variant="outlined" className={classes.input} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}/>
        <TextField fullWidth id="filled-password-input" label="Password" onChange={e => setPassword(e.target.value)} color='secondary' type="password" autoComplete="current-password" variant="outlined" className={classes.input} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}/>
      </ThemeProvider>
      <StyledButton fullWidth className={classes.registrationBtn} style={{ marginTop:50 }} onClick={() => axios.post('http://localhost:5000/auth/login', {
        "username" : login,
        "password": password
      }, { withCredentials: true }).then(e => {
         
        if (e.data === 'userNull') {
          setOpenMessage(true);
          setText('Неверный логин/пароль');
          setStatus(false);
          return
        }
        if (e.data === 'error') {
          setOpenMessage(true);
          setText('Неверный логин/пароль');
          setStatus(false);
          return
        }
        if (e.data === 'ACTIVATION') return document.location.href = "/activation";
        if (e.data === 'BANNED') return document.location.href = "/banned";
        history.push('/');
        Auth.getUserData();
      }).catch(e => console.log(e))}>Войти</StyledButton> 
    </Box>  
    </React.Fragment>
  );
};
export default Login;