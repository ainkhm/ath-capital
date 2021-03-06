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
import styles from './WalletPage.styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import NewRequestDialog from '../NewRequestDialog';
import { useNotifications } from 'modules/notification';
import RequestsList from '../RequestsList';
import { COMMISSIONS_COLLECTION, REQUESTS_COLLECTION, WITHDRAWALS_COLLECTION } from 'constants/firebasePaths';
import { USERS_PATH, VERIFICATION_PATH } from 'constants/paths';
import { Redirect } from 'react-router-dom';
import NewWithdrawalDialog from '../NewWithdrawalDialog';
import WithdrawsList from '../WithdrawsList';
import { PENDING_STATUS } from 'constants/statuses';

const useStyles = makeStyles(styles);

function useRequestsList() {
	const { showSuccess, showError } = useNotifications();
	const firestore = useFirestore();

	// Get auth from redux state
	const auth = useSelector(({ firebase: { auth } }) => auth);

	useFirestoreConnect([
		{
			collection: COMMISSIONS_COLLECTION,
		},
	]);


	useFirestoreConnect([
		{
			collection: REQUESTS_COLLECTION,
			where: ['createdBy', '==', auth.uid || ''],
		},
	]);
	useFirestoreConnect([
		{
			collection: WITHDRAWALS_COLLECTION,
			where: ['createdBy', '==', auth.uid || ''],
		},
	]);



	// Get auth from redux state
	const profile = useSelector(({ firebase: { profile } }) => profile);
	const commissions = useSelector(
		({ firestore: { ordered } }) => ordered.commissions
	);

	const incByLevel1 = (profile?.level1?.length || 0) * (commissions || [])[0]?.level1
	const incByLevel2 = (profile?.level2?.length || 0) * (commissions || [])[0]?.level2
	const incByLevel3 = (profile?.level3?.length || 0) * (commissions || [])[0]?.level3

	const percentIncrease = incByLevel1 + incByLevel2 + incByLevel3
	const compoundPrice = (profile.wallet * percentIncrease / 100) + profile.wallet

	// Get projects from redux state
	const requests = useSelector(
		({ firestore: { ordered } }) => ordered.requests
	);

	const withdrawalRequests = useSelector(
		({ firestore: { ordered } }) => ordered.withdrawalRequests
	);

	// Add Balance dialog
	const [newDialogOpen, changeDialogState] = useState(false);
	const [stepOne, setStepOne] = useState(false);
	const toggleDialog = () => {
		changeDialogState(!newDialogOpen);
		newDialogOpen ? setStepOne(false) : null;
	};

	// Withdrawal dialog
	const [withdrawalOpen, changeWithdrawalState] = useState(false);
	const toggleWithdrawalDialog = () => {
		changeWithdrawalState(!withdrawalOpen);
	};

	function addRequests(newInstance) {
		if (!auth.uid) {
			return showError('You must be logged in to create a request');
		}
		return firestore
			.add(REQUESTS_COLLECTION, {
				...newInstance,
				createdBy: auth.uid,
				createdAt: firestore.FieldValue.serverTimestamp(),
				status: PENDING_STATUS,
			})
			.then(() => {
				toggleDialog();
				showSuccess('???????????? ?????????????? ????????????????????');
			})
			.catch((err) => {
				console.error('Error:', err); // eslint-disable-line no-console
				showError(err.message || 'Could not add request');
				return Promise.reject(err);
			});
	}

	function addWithdrawRequests(newInstance) {
		if (!auth.uid) {
			return showError('You must be logged in to create a withdrawal request');
		}
		return firestore
			.add(WITHDRAWALS_COLLECTION, {
				...newInstance,
				createdBy: auth.uid,
				createdAt: firestore.FieldValue.serverTimestamp(),
				status: PENDING_STATUS,
			})
			.then(() => {
				toggleWithdrawalDialog();
				showSuccess('???????????? ?????????????? ????????????????????');
			})
			.catch((err) => {
				console.error('Error:', err); // eslint-disable-line no-console
				showError(err.message || 'Could not add request');
				return Promise.reject(err);
			});
	}

	return {
		requests,
		newDialogOpen,
		stepOne,
		percentIncrease,
		compoundPrice,
		withdrawalOpen,
		withdrawalRequests,
		addWithdrawRequests,
		toggleWithdrawalDialog,
		addRequests,
		toggleDialog,
		setStepOne,
	};
}

function ProjectsList() {
	const firestore = useFirestore();
	const classes = useStyles();
	// Get auth from redux state
	const profile = useSelector(({ firebase: { profile } }) => profile);
	const isVerified = useSelector(({ firebase }) => firebase.auth.emailVerified)

	const {
		requests,
		newDialogOpen,
		stepOne,
		percentIncrease,
		compoundPrice,
		withdrawalOpen,
		withdrawalRequests,
		addWithdrawRequests,
		toggleWithdrawalDialog,
		addRequests,
		toggleDialog,
		setStepOne,
	} = useRequestsList();

	// Show spinner while projects are loading
	if (!isLoaded(requests)) {
		return <LoadingSpinner />;
	}

	return profile.role === 'admin' ? (
		<Redirect to={USERS_PATH} />
	) : isVerified
		? (
			<div className={classes.root}>
				<NewRequestDialog
					onSubmit={addRequests}
					open={newDialogOpen}
					onRequestClose={toggleDialog}
					stepOne={stepOne}
					setStepOne={setStepOne}
				/>
				<NewWithdrawalDialog
					onSubmit={addWithdrawRequests}
					open={withdrawalOpen}
					onRequestClose={toggleWithdrawalDialog}
					validationAmount={compoundPrice}
				/>
				<Grid container spacing={3} className={classes.container}>
					<Grid item xs={12}>
						<Card className={classes.card} variant='outlined'>
							<CardContent>
								<Grid container spacing={3} className={classes.spaceBetween}>
									<Grid item xs={12} md={6}>
										<Typography color='textSecondary'>??????????????</Typography>
										<Typography component='h4' variant='h4'>
											<Typography component='span' variant='subtitle1'>USDT {profile.wallet} + USDT {profile.wallet * percentIncrease / 100} = </Typography> USDT {compoundPrice}
										</Typography>
									</Grid>
									<Grid item xs={12} md={6}>
										<Button
											variant='contained'
											color='primary'
											onClick={toggleDialog}
											style={{ marginRight: 15 }}
											className="btn-responsive"
										>
											???????????? ??????????????
										</Button>
										<Button
											variant='contained'
											color='primary'
											onClick={toggleWithdrawalDialog}
											className="btn-responsive"
										>
											?????????? ????????????????
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card className={classes.card} variant='outlined'>
							<CardContent>
								{(requests || []).length > 0
									? <>
										<Typography color='textSecondary'>???????? ????????????</Typography>
										<RequestsList requests={requests} />
									</>
									: <Typography variant='h5' style={{ textAlign: 'center' }}>?????? ????????????</Typography>

								}

							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card className={classes.card} variant='outlined'>
							<CardContent>
								{(withdrawalRequests || []).length > 0
									? <>
										<Typography color='textSecondary'>???????? ????????????</Typography>

										<WithdrawsList requests={withdrawalRequests} />
									</>
									: <Typography variant='h5' style={{ textAlign: 'center' }}>?????? ????????????</Typography>
								}
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		)
		: <Redirect to={VERIFICATION_PATH} />
}

export default ProjectsList;
