import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { useFirebase } from 'react-redux-firebase';
import { makeStyles } from '@material-ui/core/styles';
import styles from './VerificationPage.styles';
import { Button, Typography } from '@material-ui/core';
import { LIST_PATH, USERS_PATH } from 'constants/paths';
import { useSelector } from 'react-redux';
import { useNotifications } from 'modules/notification';

const useStyles = makeStyles(styles);

function VerificationPage() {
	const classes = useStyles();
	const firebase = useFirebase();
	const isVerified = useSelector(({ firebase }) => firebase.auth.emailVerified)
	const profile = useSelector(({ firebase: { profile } }) => profile)
	const { showSuccess } = useNotifications()

	const verifyEmail = () => {
		firebase.auth().currentUser.sendEmailVerification()
		showSuccess('A verification link has been sent to your email.')
	}

	return (profile.role === "admin"
		? <Redirect to={USERS_PATH} />
		: isVerified
			? <Redirect to={LIST_PATH} />
			: (
				<div className={classes.root}>
					<Paper className={classes.panel}>
						<Typography variant='h6' component='p' >
							Please verify your email to continue.
						</Typography>
						<Button
							component={Link}
							onClick={verifyEmail}
							data-test='sign-in'
						>
							Send Verification Email
						</Button>
					</Paper>
				</div>
			))
}

export default VerificationPage;
