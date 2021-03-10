import React,{ useState }from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import menuLogo from '../../resources/images/menu.png'


export default function SimpleMenu() {
  const [selected, setSelected] = useState(null);

  const handleClick = (event) => {
    setSelected(event.currentTarget);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <img src={menuLogo} className="menuLogo" alt=''></img>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={selected}
        keepMounted
        open={Boolean(selected)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}