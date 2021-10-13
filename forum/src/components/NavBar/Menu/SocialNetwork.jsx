import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PhoneIphone from '@material-ui/icons/PhoneIphone';
import DraftsIcon from '@material-ui/icons/Drafts';
import Mic from '@material-ui/icons/Mic';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Telegram from '@material-ui/icons/Telegram';
import Typography from '@material-ui/core/Typography';
import useStyles from './MenuStyle';
import {StyledMenu, StyledMenuItem} from './StyledMenu';

export default function SocialNetwork() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [arrow, setArrow] = React.useState(true);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setArrow(true);
  }; 

  const handleClose = () => { 
    setAnchorEl(null);
    setArrow(false);
  };

  return (
    <div>

       <div className={classes.navbarText}  onClick={handleClick}>
        <Typography variant="body1"  noWrap >Соц. сети</Typography>{arrow? <ArrowDropDownIcon/> : <ArrowDropUp/>}
      </div>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <Telegram fontSize="small" className={classes.mainColor} />
          </ListItemIcon>
          <ListItemText primary="Telegram" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" className={classes.mainColor} />
          </ListItemIcon>
          <ListItemText primary="Почта" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PhoneIphone fontSize="small" className={classes.mainColor} />
          </ListItemIcon>
          <ListItemText primary="Группа ВКонтакте" className={classes.mainColor} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <Mic fontSize="small" className={classes.mainColor} />
          </ListItemIcon>
          <ListItemText primary="Наш Discord" className={classes.mainColor} />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
