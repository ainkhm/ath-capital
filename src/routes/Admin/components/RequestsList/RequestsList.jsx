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
import Button from '@material-ui/core/Button';
import { REQUESTS_COLLECTION } from 'constants/firebasePaths';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import RequestStatus from 'components/RequestStatus/RequestStatus';

import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(styles);

export default function BasicTable({ requests, approveRequest, rejectRequest, deleteRequest }) {
	const classes = useStyles();

	return (
        <TableContainer component={'div'}>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Адрес отправителя</TableCell>
						<TableCell>Адрес получателя</TableCell>
						<TableCell>Дата и Время</TableCell>
						<TableCell>Адрес транзакции</TableCell>
						<TableCell>Статус</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{requests.map((row, index) => (
						<TableRow key={index}>
							<TableCell>{row.userName}</TableCell>
							<TableCell>{row.sender}</TableCell>
							<TableCell>{row.receiver}</TableCell>
							<TableCell>{row.dateTime}</TableCell>
							<TableCell>{row.url}</TableCell>
							<TableCell>
								<RequestStatus status={row.status} />
							</TableCell>
							<TableCell align="right" className={classes.actions}>
								{row.status === 'на рассмотрении' ? (
									<>
										{/* <Button
											variant='contained'
											color='primary'
											onClick={() => {
												approveRequest(REQUESTS_COLLECTION, row.id);
											}}
											style={{ marginRight: 15 }}
										>
											Подтвердить
										</Button>
										<Button
											variant='contained'
											color='primary'
											onClick={() => {
												rejectRequest(REQUESTS_COLLECTION, row.id);
											}}
											style={{ marginRight: 15 }}
										>
											Отклонять
										</Button> */}

										<IconButton
                                            aria-label="delete"
                                            onClick={() => {
                                                approveRequest(REQUESTS_COLLECTION, row.id);
                                            }}
                                            size="large">
											<CheckCircleIcon />
										</IconButton>
										<IconButton
                                            aria-label="delete"
                                            onClick={() => {
                                                rejectRequest(REQUESTS_COLLECTION, row.id);
                                            }}
                                            size="large">
											<CancelIcon />
										</IconButton>
									</>
								) : null}
								<IconButton
                                    aria-label="delete"
                                    onClick={() => {
                                        deleteRequest(REQUESTS_COLLECTION, row.id);
                                    }}
                                    size="large">
									<DeleteIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
    );
}
