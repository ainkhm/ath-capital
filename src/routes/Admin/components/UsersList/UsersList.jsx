import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import styles from './UsersList.styles'
import Button from '@material-ui/core/Button';
import EditUserDialog from '../EditUserDialog';

const useStyles = makeStyles(styles);


export default function BasicTable({ users, updateUser, newDialogOpen, toggleDialog }) {
  const classes = useStyles();

  const [user, setUser] = useState({})

  return (
    <TableContainer component={'div'}>
      <EditUserDialog
        onSubmit={updateUser}
        open={newDialogOpen}
        onRequestClose={toggleDialog}
        selectedUser={user}
      />
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Email</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.wallet}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => { setUser(row); toggleDialog() }}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}