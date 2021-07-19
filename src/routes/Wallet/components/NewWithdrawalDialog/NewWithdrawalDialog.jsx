import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './NewWithdrawalDialog.styles';
const useStyles = makeStyles(styles);

function NewWithdrawalDialog({
	onSubmit,
	open,
	onRequestClose,
	validationAmount
}) {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isValid, errors },
	} = useForm({ mode: 'onChange' });

	useEffect(() => {
		console.log(errors.amount)
	}, [errors.amount])

	return (
		<Dialog open={open} onClose={onRequestClose}>
			<DialogTitle id='new-project-dialog-title'>
				Внесите депозит на один из кошельков
			</DialogTitle>

			<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
				<DialogContent>
					<TextField
						error={!!errors.address}
						helperText={errors.address && 'Введите адрес вашего кошелька'}
						label='Адрес кошелька'
						autoFocus
						inputProps={{
							tabIndex: '1',
							...register('address', {
								required: true,
							}),
						}}
						margin='normal'
						fullWidth
					/>
					<TextField
						error={!!errors.amount}
						helperText={errors.amount && errors.amount.type === 'max' ? 'Введите сумму вывода меньше или равную USDT ' + validationAmount : 'Введите сумму вывода'}
						label='Сумма вывода'
						type="number"
						inputProps={{
							tabIndex: '2',
							...register('amount', {
								required: true,
								max: validationAmount
							}),
						}}
						margin='normal'
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onRequestClose}>Отменить</Button>
					<Button
						type='submit'
						color='primary'
						disabled={isSubmitting || !isValid}
					>
						{isSubmitting ? 'Отправляется...' : 'Отправить'}
					</Button>
				</DialogActions>
			</form>

		</Dialog>
	);
}

NewWithdrawalDialog.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired,
};

export default NewWithdrawalDialog;
