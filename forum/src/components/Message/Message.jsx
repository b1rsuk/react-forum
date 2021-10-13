import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import { lime } from '../Color';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import { useHistory } from 'react-router';
import useStyles from './MessageStyle';

export default function SimpleBackdrop({text, status, openMessage, setOpenMessage}) {
  const history = useHistory();
  const classes = useStyles();
  const handleClose = () => {
    document.body.style.overflow = 'visible';
    setOpenMessage(false);
    if(status) history.push('/login');
  };

  return (
      <Backdrop className={classes.backdrop} open={openMessage} onClick={handleClose}>
        <Box className={classes.box} borderColor={lime} borderTop={10} borderRadius={5} padding={2}>
            {status? <CheckIcon className={classes.icon}/> : <CloseIcon className={classes.icon}/>}    
            <Divider className={classes.divider}/>
            <Typography variant='body1' className={classes.info}>{text}</Typography>
        </Box> 
      </Backdrop>
  );
}