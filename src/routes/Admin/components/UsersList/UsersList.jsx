import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import styles from './UsersList.styles'

const useStyles = makeStyles(styles);

const rows = [
  {
    user: 'John Doe',
    email: 'abcd@gmail.com',
    role: 'Customer'
  },
  {
    user: 'Jake Doe',
    email: 'abcd@gmail.com',
    role: 'Customer'
  },
  {
    user: 'Jane Doe',
    email: 'abcd@gmail.com',
    role: 'Customer'
  },
  {
    user: 'Jim Doe',
    email: 'abcd@gmail.com',
    role: 'Customer'
  },
  {
    user: 'Jill Doe',
    email: 'abcd@gmail.com',
    role: 'Customer'
  },
]

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={'div'}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>

              <TableCell >{row.user}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
