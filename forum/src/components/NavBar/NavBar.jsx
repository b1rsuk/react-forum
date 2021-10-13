import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useStyles from './Style';
import Avatar from '@material-ui/core/Avatar';
import SocialNetwork from './Menu/SocialNetwork';
import Other from './Menu/Other';
import Articles from './Menu/Articles';
import AccountMenu from './AccountMenu/AccountMenu';
import Auth from '../store/Auth';
import { useHistory } from 'react-router'; 
import Button from '@material-ui/core/Button';
import { observer } from "mobx-react-lite"

const NavBar = observer(() => {
  const [openModal, setOpenModal] = React.useState(false);
  const classes = useStyles();

  const history = useHistory();
  const menuId = 'primary-search-account-menu';

  return (
    <div className={classes.grow}>
      <AccountMenu openModal={openModal} setOpenModal={setOpenModal}/>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            BorsukTeam
          </Typography>
          <div className={classes.navList}>
            <Articles/>
            <SocialNetwork/> 
            <Other/>
          </div>
          
          <div className={classes.grow} />
          {Auth.auth? <div className={classes.sectionDesktop}>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={() => setOpenModal(true)}
              color="inherit"
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style= {{ width: 30, height: 30 }}/> 
              <Typography variant='h6' className={classes.name}>{Auth.name}</Typography>
            </IconButton> 
          </div> : <Button variant="contained" color="primary"  onClick={() => history.push('/login')}>Вход</Button> 
          }
        </Toolbar>
      </AppBar>
    </div>
  );
});
export default NavBar;
