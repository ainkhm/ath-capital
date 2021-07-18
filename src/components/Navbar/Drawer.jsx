import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import styles from './Navbar.styles';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ShareIcon from '@material-ui/icons/Share';
import PersonIcon from '@material-ui/icons/Person';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useFirebase } from 'react-redux-firebase';
import {
	LIST_PATH,
	REFERRAL_INCOME_PATH,
	REQUESTS_PATH,
	USERS_PATH,
	WALLET_PATH,
} from 'constants/paths';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ADMIN } from 'constants/roles';

const useStyles = makeStyles(styles);

const DrawerContainer = (props) => {
	const classes = useStyles();
	const firebase = useFirebase();
	const history = useHistory();

	// Get auth from redux state
	const auth = useSelector(({ firebase: { profile } }) => profile);

	return (
		<Drawer
			variant='permanent'
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: props.open,
				[classes.drawerClose]: !props.open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: props.open,
					[classes.drawerClose]: !props.open,
				}),
			}}
		>
			<div className={classes.toolbar}>
				<IconButton onClick={props.handleDrawerClose}>
					<ChevronLeftIcon />
				</IconButton>
			</div>
			<Divider />
			<List>
				{auth.role === ADMIN ? (
					<ListItem button onClick={() => history.push(USERS_PATH)}>
						<ListItemIcon>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary='Users' />
					</ListItem>
				) : (
					<>
						<ListItem button onClick={() => history.push(LIST_PATH)}>
							<ListItemIcon>
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText primary='Кабинет' />
						</ListItem>
						<ListItem button onClick={() => history.push(WALLET_PATH)}>
							<ListItemIcon>
								<AccountBalanceWalletIcon />
							</ListItemIcon>
							<ListItemText primary='Кошелек' />
						</ListItem>
						<ListItem button onClick={() => history.push(REFERRAL_INCOME_PATH)}>
							<ListItemIcon>
								<ShareIcon />
							</ListItemIcon>
							<ListItemText primary='Рефферальная информ.' />
						</ListItem>
					</>
				)}
				<Divider />
				<ListItem button onClick={firebase.logout}>
					<ListItemIcon>
						<ExitToAppIcon />
					</ListItemIcon>
					<ListItemText primary='Выйти' />
				</ListItem>
			</List>
		</Drawer>
	);
};

export default DrawerContainer;
