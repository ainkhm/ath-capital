import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import styles from './ReferralsList.styles'

const useStyles = makeStyles(styles);

export default function BasicTable({ userData }) {
  const classes = useStyles();

  return (
    <TableContainer component={'div'}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Referred User</TableCell>
            <TableCell>Level</TableCell>
            <TableCell align="right">Percent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData && userData.map((row, index) => (
            <TableRow key={index}>

              <TableCell >{row.email}</TableCell>
              <TableCell >{row.level}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
