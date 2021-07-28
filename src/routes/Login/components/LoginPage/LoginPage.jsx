import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase, useFirestore } from 'react-redux-firebase';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';
import GoogleButton from 'react-google-button';
import { SIGNUP_PATH } from 'constants/paths';
import { useNotifications } from 'modules/notification';
import LoginForm from '../LoginForm';
import styles from './LoginPage.styles';
import { CUSTOMER } from 'constants/roles';

const useStyles = makeStyles(styles);

function LoginPage() {
	const classes = useStyles();
	const firebase = useFirebase();
	const firestore = useFirestore();
	const { showError } = useNotifications();

	function onSubmitFail(formErrs, dispatch, err) {
		return showError(formErrs ? 'Form Invalid' : err.message || 'Error');
	}

	function googleLogin() {
		return firebase
			.login({ provider: 'google', type: 'popup' })
			.then(async (user) => {
				if (user.additionalUserInfo.isNewUser) {
					await firestore.collection('users').doc(user.user.uid).update({
						role: CUSTOMER,
						wallet: 0,
						level1: [],
						level2: [],
						level3: [],
						referrer: null,
						createdAt: firestore.Timestamp.now(),
					});
				}
			})
			.catch((err) => showError(err.message));
	}

	function emailLogin(creds) {
		return firebase.login(creds).catch((err) => showError(err.message));
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.panel}>
				<LoginForm onSubmit={emailLogin} onSubmitFail={onSubmitFail} />
			</Paper>
			<div className={classes.orLabel}>или</div>
			<div className={classes.providers}>
				<GoogleButton onClick={googleLogin} data-test='google-auth-button' />
			</div>
			<div className={classes.signup}>
				<span className={classes.signupLabel}>У вас нет еще нет аккаунта?</span>
				<Link className={classes.signupLink} to={SIGNUP_PATH}>
					Зарегистрироваться
				</Link>
			</div>
		</div>
	);
}

export default LoginPage;
