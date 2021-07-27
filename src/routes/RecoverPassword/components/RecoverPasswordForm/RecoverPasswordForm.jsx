import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { validateEmail } from 'utils/form';
import styles from './RecoverPasswordForm.styles';
import { Link } from 'react-router-dom';
import { LOGIN_PATH, RECOVER_PATH } from 'constants/paths';

const useStyles = makeStyles(styles);

function LoginForm({ onSubmit }) {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isValid, errors },
	} = useForm({
		mode: 'onChange',
		nativeValidation: false,
	});

	return (
		<>
			<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
				<TextField
					type='email'
					placeholder='email'
					autoComplete='email'
					margin='normal'
					fullWidth
					inputProps={{
						...register('email', {
							required: true,
							validate: validateEmail,
						}),
					}}
					error={!!errors.email}
					helperText={errors.email && 'Введите правильный пароль'}
				/>
				<div className={classes.submit}>
					<Button
						color='primary'
						type='submit'
						variant='contained'
						disabled={isSubmitting || !isValid}
					>
						{isSubmitting ? 'Вход..' : 'Send email'}
					</Button>
				</div>
			</form>
			<div className={classes.signup}>
				<Link className={classes.signupLink} to={LOGIN_PATH}>
					Login
				</Link>
			</div>
		</>
	);
}

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
