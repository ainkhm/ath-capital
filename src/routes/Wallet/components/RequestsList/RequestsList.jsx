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

const useStyles = makeStyles(styles);

export default function BasicTable(props) {
  const classes = useStyles();

  return props.requests.length > 0
    ? (
      <TableContainer component={'div'}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sender Address</TableCell>
              <TableCell>Receiver Address</TableCell>
              <TableCell>Date/Time</TableCell>
              <TableCell>Transaction URL</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.requests.map((row, index) => (
              <TableRow key={index}>

                <TableCell >{row.sender}</TableCell>
                <TableCell >{row.receiver}</TableCell>
                <TableCell >{row.dateTime}</TableCell>
                <TableCell >{row.url}</TableCell>
                <TableCell >{row.status}</TableCell>
              </TableRow>
            ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    )
    : <p>No requests</p>
}
