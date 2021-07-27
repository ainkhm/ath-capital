import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useNotifications } from 'modules/notification';
import RecoverPasswordForm from '../RecoverPasswordForm';
import styles from './RecoverPasswordPage.styles';

const useStyles = makeStyles(styles);

function LoginPage() {
	const classes = useStyles();
	const firebase = useFirebase();
	const { showError, showSuccess } = useNotifications();

	function onSubmitFail(formErrs, dispatch, err) {
		return showError(formErrs ? 'Form Invalid' : err.message || 'Error');
	}

	function forgotPassword(creds) {
		return firebase
			.auth()
			.sendPasswordResetEmail(creds.email)
			.then(() => showSuccess("Reset password email sent"))
			.catch((err) => showError(err.message));
	}

	return (
		<div className={classes.root}>
			<Paper className={classes.panel}>
				<RecoverPasswordForm onSubmit={forgotPassword} onSubmitFail={onSubmitFail} />
			</Paper>
		</div>
	);
}

export default LoginPage;
