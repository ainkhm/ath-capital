import React, { useState, useCallback, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

import styles from './Commissions.styles'

const useStyles = makeStyles(styles);

export default function BasicEditingGrid({ commissions, updateCommissions }) {
  const classes = useStyles();

  const handleEditCellChange = useCallback(
    ({ field, props }) => {
      const newData = {};
      newData[field] = parseInt(props.value)
      updateCommissions(newData)
    },
  );

  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={commissions}
        columns={columns}
        onEditCellChangeCommitted={handleEditCellChange}
        hideFooterPagination={true}
        disableSelectionOnClick={true}
        autoHeight={true}
        hideFooter={true}
      />
    </div>
  );
}

const columns = [
  { field: 'level1', headerName: 'Level 1', width: 180, editable: true },
  { field: 'level2', headerName: 'Level 2', width: 180, editable: true },
  { field: 'level3', headerName: 'Level 3', width: 180, editable: true },
];
