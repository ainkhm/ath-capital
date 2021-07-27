import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { validateEmail } from 'utils/form';
import styles from './LoginForm.styles';
import { Link } from 'react-router-dom';
import { RECOVER_PATH } from 'constants/paths';

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
					placeholder='E-mail'
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
				<TextField
					type='password'
					name='password'
					placeholder='Пароль'
					autoComplete='current-password'
					margin='normal'
					fullWidth
					inputProps={{
						...register('password', {
							required: true,
						}),
					}}
					error={!!errors.password}
					helperText={errors.password && 'Введите правильный пароль'}
				/>
				<div className={classes.submit}>
					<Button
						color='primary'
						type='submit'
						variant='contained'
						disabled={isSubmitting || !isValid}
					>
						{isSubmitting ? 'Вход..' : 'Войти'}
					</Button>
				</div>
			</form>
			<div className={classes.signup}>
				<Link className={classes.signupLink} to={RECOVER_PATH}>
					Забыли пароль?
				</Link>
			</div>
		</>
	);
}

LoginForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
