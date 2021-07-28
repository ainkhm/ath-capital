import React, { useState } from 'react';
import { useFirebase } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import makeStyles from '@material-ui/styles/makeStyles';
import { LIST_PATH } from 'constants/paths';
import styles from './Navbar.styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

function AccountMenu() {
	const classes = useStyles();
	const [anchorEl, setMenu] = useState(null);
	const firebase = useFirebase();
	const profile = useSelector(({ firebase }) => firebase.profile);

	function closeAccountMenu() {
		setMenu(null);
	}
	function handleMenuClick(e) {
		setMenu(e.target);
	}
	function handleLogout() {
		closeAccountMenu(); // redirect to '/' handled by UserIsAuthenticated HOC
		return firebase.logout();
	}

	return <>
        <IconButton
            aria-owns={anchorEl ? 'menu-appbar' : null}
            aria-haspopup='true'
            onClick={handleMenuClick}
            classes={{ root: classes.accountButton }}
            size="large">
            <AccountCircle />
        </IconButton>
        <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorEl)}
            onClose={closeAccountMenu}
        >
            <MenuItem component='p'>{profile.email}</MenuItem>
            <MenuItem onClick={handleLogout}>Выйти</MenuItem>
        </Menu>
    </>;
}

export default AccountMenu;
