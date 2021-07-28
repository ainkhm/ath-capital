import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
	useFirestore,
	useFirestoreConnect,
	isLoaded,
	isEmpty,
} from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { useNotifications } from 'modules/notification';
import LoadingSpinner from 'components/LoadingSpinner';
import {
	COMMISSIONS_COLLECTION,
	REQUESTS_COLLECTION,
} from 'constants/firebasePaths';
import ProjectTile from '../ProjectTile';
import NewProjectDialog from '../NewProjectDialog';
import styles from './ProjectsList.styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ReferredUser from '../ReferredUser';
import ReferralChart from '../ReferralChart';
import ReferralsGraph from '../ReferralsGraph';

import CopyToClipboard from 'components/CopyToClipboard';
import { SIGNUP_PATH } from 'constants/paths';
import { CUSTOMER, MARKETER } from 'constants/roles';

const useStyles = makeStyles(styles);

function useProjectsList() {
	const { showSuccess, showError } = useNotifications();
	const firestore = useFirestore();

	// Get auth from redux state
	const auth = useSelector(({ firebase: { auth } }) => auth);

	useFirestoreConnect([
		{
			collection: REQUESTS_COLLECTION,
			where: ['createdBy', '==', auth.uid],
		},
	]);

	useFirestoreConnect([
		{
			collection: COMMISSIONS_COLLECTION,
		},
	]);

	// Get projects from redux state
	const projects = useSelector(
		({ firestore: { ordered } }) => ordered.requests
	);

	// New dialog
	const [newDialogOpen, changeDialogState] = useState(false);
	const toggleDialog = () => changeDialogState(!newDialogOpen);

	function addProject(newInstance) {
		if (!auth.uid) {
			return showError('You must be logged in to create a project');
		}
		return firestore
			.add(REQUESTS_COLLECTION, {
				...newInstance,
				createdBy: auth.uid,
				createdAt: firestore.FieldValue.serverTimestamp(),
			})
			.then(() => {
				toggleDialog();
				showSuccess('Project added successfully');
			})
			.catch((err) => {
				console.error('Error:', err); // eslint-disable-line no-console
				showError(err.message || 'Could not add project');
				return Promise.reject(err);
			});
	}

	return { projects, addProject, newDialogOpen, toggleDialog };
}

function ProjectsList() {
	const [path, setPath] = useState('');
	const firestore = useFirestore();

	// Get auth from redux state
	const auth = useSelector(({ firebase: { auth } }) => auth);
	const profile = useSelector(({ firebase: { profile } }) => profile);

	useEffect(() => {
		setPath(window.location.origin);
	}, []);

	const classes = useStyles();
	const { projects } = useProjectsList();

	// Show spinner while projects are loading
	if (!isLoaded(projects)) {
		return <LoadingSpinner />;
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={3} className={classes.container}>
				{
					profile.role === CUSTOMER
						? <Grid item xs={12} md={6}>
							<Card className={classes.card} variant='outlined'>
								<CardContent>
									<Typography
										className={classes.title}
										color='textSecondary'
										gutterBottom
									>
										Рефферальная ссылка
									</Typography>
									<CopyToClipboard
										text={`${path}${SIGNUP_PATH}?referral=${auth.uid}`}
									/>


								</CardContent>
							</Card>
						</Grid>
						: null
				}
				{projects.length > 0 ? (
					<>
						<Grid item xs={12}>
							<Card className={classes.card} variant='outlined'>
								<CardContent>
									<Typography
										className={classes.title}
										color='textSecondary'
										gutterBottom
									>
										Реффералов за всё время
									</Typography>
									<ReferralChart />
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={6}>
							<Card className={classes.card} variant='outlined'>
								<CardContent>
									<Typography
										className={classes.title}
										color='textSecondary'
										gutterBottom
									>
										Ваши реффералы
									</Typography>
									<ReferredUser />
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} md={6}>
							<Card className={classes.card} variant='outlined'>
								<CardContent>
									<Typography
										className={classes.title}
										color='textSecondary'
										gutterBottom
									>
										Откуда приходят ваши рефералы
									</Typography>
									<ReferralsGraph />
								</CardContent>
							</Card>
						</Grid>
					</>
				) : (
					<Grid item xs={12} style={{ marginTop: 40 }}>
						<Typography variant='h5' style={{ textAlign: 'center' }}>
							У вас нет рефералов
						</Typography>
					</Grid>
				)}
			</Grid>
		</div>
	);
}

export default ProjectsList;
