import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
	useFirestore,
	useFirestoreConnect,
	isLoaded,
	isEmpty,
} from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import LoadingSpinner from 'components/LoadingSpinner';
import styles from './AdminPage.styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useNotifications } from 'modules/notification';
import RequestsList from '../RequestsList';
import UsersList from '../UsersList';
import {
	COMMISSIONS_COLLECTION,
	REQUESTS_COLLECTION,
	USERS_COLLECTION,
} from 'constants/firebasePaths';
import Commissions from '../Commissions';
import { LIST_PATH } from 'constants/paths';
import { Redirect } from 'react-router-dom';
const useStyles = makeStyles(styles);

function useUsersList() {
	const { showSuccess, showError } = useNotifications();
	const firestore = useFirestore();

	useFirestoreConnect([
		{
			collection: USERS_COLLECTION,
			where: ['role', '!=', 'admin'],
		},
		{
			collection: REQUESTS_COLLECTION,
		},
		{
			collection: COMMISSIONS_COLLECTION,
		},
	]);

	// Get projects from redux state
	const users = useSelector(({ firestore: { ordered } }) => ordered.users);
	const requests = useSelector(
		({ firestore: { ordered } }) => ordered.requests
	);
	const commissions = useSelector(
		({ firestore: { ordered } }) => ordered.commissions
	);

	// New dialog
	const [newDialogOpen, changeDialogState] = useState(false);
	const toggleDialog = () => changeDialogState(!newDialogOpen);

	function updateUser(user, updateObj) {
		console.log('<--', user, updateObj);
		return firestore
			.collection('users')
			.doc(user)
			.update(updateObj)
			.then(() => {
				toggleDialog();
				showSuccess('Информация обновлена');
			})
			.catch((err) => {
				console.error('Error:', err); // eslint-disable-line no-console
				showError(err.message || 'Could not update user');
				return Promise.reject(err);
			});
	}

	function updateCommissions(updateObj) {
		return firestore
			.collection('commissions')
			.doc('percentages')
			.update(updateObj)
			.then(() => {
				showSuccess('Рефф. ставки обновлены');
			})
			.catch((err) => {
				console.error('Error:', err); // eslint-disable-line no-console
				showError(err.message || 'Could not update commissions');
				return Promise.reject(err);
			});
	}

	function approveRequest(requestID) {
		return firestore
			.collection('requests')
			.doc(requestID)
			.update({
				status: 'approved',
			})
			.then(() => {
				showSuccess('Статус заявки обновлен');
			})
			.catch((err) => {
				console.error('Error:', err); // eslint-disable-line no-console
				showError(err.message || 'Could not update request status');
				return Promise.reject(err);
			});
	}

	return {
		users,
		requests,
		commissions,
		newDialogOpen,
		toggleDialog,
		updateUser,
		updateCommissions,
		approveRequest,
	};
}

function AdminPage() {
	const firestore = useFirestore();
	const classes = useStyles();
	// Get auth from redux state
	const auth = useSelector(({ firebase: { auth } }) => auth);
	const profile = useSelector(({ firebase: { profile } }) => profile);

	const {
		users,
		requests,
		commissions,
		newDialogOpen,
		toggleDialog,
		updateUser,
		updateCommissions,
		approveRequest,
	} = useUsersList();

	const [path, setPath] = useState('');

	useEffect(() => {
		setPath(window.location.origin);
	}, []);

	// Show spinner while projects are loading
	if (!isLoaded(users) || !isLoaded(requests) || !isLoaded(commissions)) {
		return <LoadingSpinner />;
	}

	return profile.role !== 'admin' ? (
		<Redirect to={LIST_PATH} />
	) : (
		<div className={classes.root}>
			<Grid container spacing={3} className={classes.container}>
				<Grid item xs={12}>
					<Card className={classes.card} variant='outlined'>
						<CardContent>
							<Typography color='textSecondary'>Рефферальные ставки</Typography>
							<Commissions
								commissions={commissions}
								updateCommissions={updateCommissions}
							/>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card className={classes.card} variant='outlined'>
						<CardContent>
							<Typography color='textSecondary'>Users</Typography>
							<UsersList
								users={users}
								updateUser={updateUser}
								newDialogOpen={newDialogOpen}
								toggleDialog={toggleDialog}
							/>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card className={classes.card} variant='outlined'>
						<CardContent>
							<Typography color='textSecondary'>User Requests</Typography>
							<RequestsList
								requests={requests}
								approveRequest={approveRequest}
							/>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default AdminPage;
