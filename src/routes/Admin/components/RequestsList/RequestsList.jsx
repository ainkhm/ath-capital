import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import styles from './RequestsList.styles'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(styles);


export default function BasicTable({ requests, approveRequest }) {
  const classes = useStyles();

  return (
    <TableContainer component={'div'}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sender Address</TableCell>
            <TableCell>Receiver Address</TableCell>
            <TableCell>Date/Time</TableCell>
            <TableCell>Transaction URL</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.sender}</TableCell>
              <TableCell>{row.receiver}</TableCell>
              <TableCell>{row.dateTime}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>
                {
                  row.status === "pending"
                    ? <Button variant="contained" color="primary" onClick={() => { approveRequest(row.id) }}>
                      Approve
                    </Button>
                    : null
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
