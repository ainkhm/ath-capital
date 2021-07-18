import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import styles from './WithdrawsList.styles';

const useStyles = makeStyles(styles);

export default function BasicTable(props) {
	const classes = useStyles();

	return props?.requests?.length > 0 ? (
		<TableContainer component={'div'}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Адрес кошелька</TableCell>
						<TableCell>Сумма вывода</TableCell>
						<TableCell>Статус</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.requests.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row.address}</TableCell>
							<TableCell>{row.amount}</TableCell>
							<TableCell>{row.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	) : (
		<p>Нет заявок</p>
	);
}
