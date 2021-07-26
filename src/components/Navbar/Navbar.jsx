import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';
import { LIST_PATH, LOGIN_PATH, USERS_PATH } from 'constants/paths';
import AccountMenu from './NavbarAccountMenu';
import NavbarWithoutAuth from './NavbarWithoutAuth';
import styles from './Navbar.styles';
import DrawerContainer from './Drawer';
import { ADMIN } from 'constants/roles';

const useStyles = makeStyles(styles);

function Navbar(props) {
	const classes = useStyles();

	// Get auth from redux state
	const auth = useSelector(({ firebase }) => firebase.auth);
	const profile = useSelector(({ firebase }) => firebase.profile);

	const authExists = isLoaded(auth) && !isEmpty(auth);

	return (
		<>
			<NavbarWithoutAuth
				brandPath={
					authExists ? (profile.role === ADMIN ? USERS_PATH : LIST_PATH) : '/'
				}
				{...props}
			>
				{authExists ? (
					// <p style={{ padding: 0 }}>{profile.email}</p>
					<AccountMenu />
				) : (
					<Button
						className={classes.signIn}
						component={Link}
						to={LOGIN_PATH}
						data-test='sign-in'
					>
						Войти
					</Button>
				)}
			</NavbarWithoutAuth>
		</>
	);
}

export default Navbar;
