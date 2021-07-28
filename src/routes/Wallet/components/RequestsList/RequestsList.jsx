import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import styles from './RequestsList.styles';
import RequestStatus from 'components/RequestStatus/RequestStatus';

const useStyles = makeStyles(styles);

export default function BasicTable(props) {
	const classes = useStyles();

	return (<TableContainer component={'div'}>
		<Table className={classes.table} aria-label='simple table'>
			<TableHead>
				<TableRow>
					<TableCell>Адрес отправителя</TableCell>
					<TableCell>Адрес получателя</TableCell>
					<TableCell>Дата/Время</TableCell>
					<TableCell>URL транзакции</TableCell>
					<TableCell>Статус</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{props?.requests?.map((row, index) => (
					<TableRow key={index}>
						<TableCell>{row.sender}</TableCell>
						<TableCell>{row.receiver}</TableCell>
						<TableCell>{row.dateTime}</TableCell>
						<TableCell>{row.url}</TableCell>
						<TableCell>
							<RequestStatus status={row.status} />

						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</TableContainer>)

}
