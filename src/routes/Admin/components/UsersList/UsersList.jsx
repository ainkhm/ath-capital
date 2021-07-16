import React, { useState, useCallback, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

import styles from './UsersList.styles'

const useStyles = makeStyles(styles);

export default function BasicEditingGrid({ users, updateUser }) {
  const classes = useStyles();

  const handleEditCellChange = useCallback(
    ({ id, field, props }) => {
      const newData = {};
      newData[field] = props.value
      updateUser(id, newData)
    },
  );

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={users} columns={columns} onEditCellChangeCommitted={handleEditCellChange} />
    </div>
  );
}

const columns = [
  { field: 'username', headerName: 'Name', width: 180, editable: true },

  { field: 'email', headerName: 'Email', width: 220, editable: false },
  {
    field: 'role',
    headerName: 'Role',
    width: 180,
    editable: false,
  },
  {
    field: 'wallet',
    headerName: 'Wallet',
    type: 'number',
    width: 180,
    editable: true,
  },
];
