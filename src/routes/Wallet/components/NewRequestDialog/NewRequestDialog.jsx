import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import styles from './NewRequestDialog.styles';
import Typography from '@material-ui/core/Typography';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton';
import CopyToClipboard from 'components/CopyToClipboard';
const useStyles = makeStyles(styles);

function NewRequestDialog({
	onSubmit,
	open,
	onRequestClose,
	stepOne,
	setStepOne,
}) {
	const classes = useStyles();
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, isValid, errors },
	} = useForm({ mode: 'onChange' });

	return (
		<Dialog open={open} onClose={onRequestClose}>
			<DialogTitle id='new-project-dialog-title'>
				Внесите депозит на один из кошельков
			</DialogTitle>
			{stepOne ? (
				<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
					<DialogContent>
						<TextField
							error={!!errors.sender}
							helperText={errors.sender && 'Введите адрес отправителя'}
							label='Адрес отправителя'
							autoFocus
							inputProps={{
								tabIndex: '1',
								...register('sender', {
									required: true,
								}),
							}}
							margin='normal'
							fullWidth
						/>
						<TextField
							error={!!errors.receiver}
							helperText={errors.receiver && 'Введите адрес получателя'}
							label='Адрес получателя'
							inputProps={{
								tabIndex: '2',
								...register('receiver', {
									required: true,
								}),
							}}
							margin='normal'
							fullWidth
						/>
						<TextField
							error={!!errors.dateTime}
							helperText={errors.dateTime && 'Введите время и дату транзакции'}
							label='Дата/Время'
							inputProps={{
								tabIndex: '3',
								...register('dateTime', {
									required: true,
								}),
							}}
							margin='normal'
							fullWidth
						/>
						<TextField
							error={!!errors.url}
							helperText={errors.url && 'Введите URL совершенной транзакции'}
							label='URL транзакции'
							inputProps={{
								tabIndex: '4',
								...register('url', {
									required: true,
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
			) : (
				<>
					<CopyToClipboard
						text={'ERC-20 - 0x3b42bef0e4e0094ab0a5aa3a0eb45e3afcbe3cb8'}
					/>

					<CopyToClipboard
						text={'TRC20 - TWo8SuJXfVvsp25ZM5JNezQF2ahWxzwJLr'}
					/>

					<DialogActions>
						<Button
							type='button'
							color='primary'
							onClick={() => setStepOne(true)}
						>
							Продолжить
						</Button>
					</DialogActions>
				</>
			)}
		</Dialog>
	);
}

NewRequestDialog.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	open: PropTypes.bool.isRequired,
	onRequestClose: PropTypes.func.isRequired,
};

export default NewRequestDialog;
