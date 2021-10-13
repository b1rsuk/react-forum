import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import StyledButton  from '../../StyledButton';
import { theme, useStyles } from '../Style';
import { lime } from '../../Color';
import axios from 'axios';
import Message from '../../Message/Message';

export default function BasicTextFields() {
  const classes = useStyles();
  const [login, setLogin] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState(0);
  const [openMessage, setOpenMessage] = React.useState(false);
  const [text, setText] = React.useState('');
  const [status, setStatus] = React.useState(false);
  return (
    <React.Fragment>
    <Message text={text} status={status} openMessage={openMessage} setOpenMessage={setOpenMessage}/>
    <Box className={classes.mainBox} borderColor={lime} borderTop={10} padding={2}>
      <h1 className={classes.team}>BorsukTeam</h1>
      <ThemeProvider theme={theme}>
        <TextField fullWidth id="outlined-basic" color='secondary' onChange={e => setLogin(e.target.value)} label="Login" variant="outlined" className={classes.input} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}/>
        <TextField fullWidth id="outlined-basic" color='secondary' onChange={e => setEmail(e.target.value)} label="Email" variant="outlined" className={classes.input} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}/>
        <TextField fullWidth id="filled-password-input" label="Password" onChange={e => setPassword(e.target.value)} color='secondary' type="password" autoComplete="current-password" variant="outlined" className={classes.input} InputProps={{ classes: { notchedOutline: classes.notchedOutline }}}/>
      </ThemeProvider>
      <StyledButton fullWidth className={classes.registrationBtn} onClick={() => axios.post('http://localhost:5000/auth/registration', {
        "username": login,
        "password": password,
        "email": email
      }).then(e => {
        console.log(e)
        if (e.data === 'userExists') {
          setOpenMessage(true);
          setText('Такой ник уже занят');
          setStatus(false);
          return
        }
        if (e.data === 'passLength') {
          setOpenMessage(true);
          setText('Пароль должен быть не мешьше 8 и не больше 20 символов');
          setStatus(false);
          return
        }
        if (e.data === 'failEmail') {
          setOpenMessage(true);
          setText('Вы указали неккоректный email');
          setStatus(false);
          return
        }
        if(e.data === 'nameLenght') {
          setOpenMessage(true);
          setText('Ник должен быть не мешьше 3 и не больше 25 символов');
          setStatus(false);
          return
        }
        if (e.data === 'error') {
          setOpenMessage(true);
          setText('Неизвестная ошибка');
          setStatus(false);
          return
        }
        setOpenMessage(true);
        setText('Регистрация успешна. На ваш email было отправлено письмо подтвержения регистрации');
        setStatus(true);
        
      })}>Создать аккаунт</StyledButton> 
    </Box>  
    </React.Fragment>
  );
}