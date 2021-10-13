import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import { grey } from '../../Color';

const emails = ['Мой профиль', 'Выход'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    if (value === 'Выход'){
       axios.get('http://localhost:5000/auth/logout', {
         withCredentials: true,
       });
      }
    onClose(value);
    document.location.href = "/";
  };

  return (
    <Dialog onClose={handleClose}  aria-labelledby="simple-dialog-title" open={open}>
      <List style={{ backgroundColor: grey }}>
        {emails.map(email => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function AccountMenu({openModal, setOpenModal}) {
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClose = (value) => {
    setOpenModal(false);
    setSelectedValue(value);
  };

  return <SimpleDialog  selectedValue={selectedValue} open={openModal} onClose={handleClose} />

}


