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
import styles from './ReferralIncome.styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import RequestsList from '../ReferralsList';
import CopyToClipboard from 'components/CopyToClipboard';
import { SIGNUP_PATH, USERS_PATH, VERIFICATION_PATH } from 'constants/paths';
import { Redirect } from 'react-router-dom';
import { COMMISSIONS_COLLECTION } from 'constants/firebasePaths';
import { CUSTOMER } from 'constants/roles';
const useStyles = makeStyles(styles);

function ReferralIncome() {
	const firestore = useFirestore();
	const classes = useStyles();
	// Get auth from redux state
	const auth = useSelector(({ firebase: { auth } }) => auth);
	const isVerified = useSelector(({ firebase }) => firebase.auth.emailVerified)

	useFirestoreConnect([
		{
			collection: COMMISSIONS_COLLECTION,
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

	const [path, setPath] = useState('');
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		setPath(window.location.origin);
	}, []);

	useEffect(() => {
		mapUserData();
	}, [profile]);

	const mapUserData = () => {
		const tempData = [];
		if (profile.level1) {
			for (let item of profile.level1) {
				tempData.push({
					email: item.email,
					level: '1',
					amount: commissions && commissions[0].level1,
				});
			}
		}
		if (profile.level2) {
			for (let item of profile.level2) {
				tempData.push({
					email: item.email,
					level: '2nd',
					amount: commissions && commissions[0].level2,
				});
			}
		}
		if (profile.level3) {
			for (let item of profile.level3) {
				tempData.push({
					email: item.email,
					level: '3rd',
					amount: commissions && commissions[0].level3,
				});
			}
		}
		setUserData(tempData);
	};

	// Show spinner while projects are loading
	if (!isLoaded(profile) || !isLoaded(commissions)) {
		return <LoadingSpinner />;
	}

	return profile.role === 'admin' ? (
		<Redirect to={USERS_PATH} />
	) : isVerified
		? (
			<div className={classes.root}>
				<Grid container spacing={3} className={classes.container}>
					<Grid item xs={12}>
						<Card className={classes.card} variant='outlined'>
							<CardContent>
								<Grid container spacing={3} className={classes.spaceBetween}>
									<Grid item xs={12} md={6}>
										<Typography color='textSecondary'>
											Реферальный доход
										</Typography>
										<Typography component='h4' variant='h4'>
											<Typography component='span' variant='subtitle1'>USDT {profile.wallet} x {percentIncrease}% = </Typography> USDT {profile.wallet * percentIncrease / 100}
										</Typography>
									</Grid>
									{
										profile.role === CUSTOMER
											? <Grid item xs={12} md={6}>

												<CopyToClipboard
													text={`${path}${SIGNUP_PATH}?referral=${auth.uid}`}
												/>
											</Grid>
											: null}
								</Grid>
							</CardContent>
						</Card>
					</Grid>
					<Grid item xs={12}>
						<Card className={classes.card} variant='outlined'>
							<CardContent>
								<Typography color='textSecondary'>Ваши реффералы</Typography>
								<RequestsList userData={userData} />
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</div>
		)
		: <Redirect to={VERIFICATION_PATH} />
}

export default ReferralIncome;
