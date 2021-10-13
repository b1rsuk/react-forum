import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Typography from '@material-ui/core/Typography';
import useStyles from './MenuStyle';
import { Fragment } from 'react';
import {StyledMenu, StyledMenuItem} from './StyledMenu';


export default function Other() {
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
    <Fragment>

       <div className={classes.navbarText}  onClick={handleClick}>
        <Typography variant="body1"  noWrap >Другое</Typography>{arrow? <ArrowDropDownIcon/> : <ArrowDropUp/>}
      </div>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemText primary="Не пришли деньги?" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Нужна помощь" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="FAQ" className={classes.mainColor} />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemText primary="Правила форума" className={classes.mainColor} />
        </StyledMenuItem>
      </StyledMenu>
    </Fragment>
  );
}
