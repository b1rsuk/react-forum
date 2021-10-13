import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from '../NavBar/Menu//MenuStyle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { lime } from '../Color';
import {StyledMenu, StyledMenuItem} from '../NavBar/Menu/StyledMenu';
import axios from 'axios';


export default function SocialNetwork({name, idArticle}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <React.Fragment>

      <div className={classes.navbarText}  onClick={handleClick}>
        <MoreVertIcon variant="body1" style={{color: lime}} noWrap />
      </div>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Забанить" onClick={() => {axios.post('http://localhost:5000/auth/banned', {
            "name": name
          }, {withCredentials: true});
          handleClose();
          }}/>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Удалить" onClick={() => {axios.post('http://localhost:5000/auth/delete', {
            "id": idArticle
          }, {withCredentials: true});
          handleClose();
         
        }} />
        </StyledMenuItem>
      </StyledMenu>
    </React.Fragment>
  );
}
