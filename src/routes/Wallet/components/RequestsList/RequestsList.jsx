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

const rows = [
  {
    sender: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    receiver: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    dateTime: '10:22/01-01-2021',
    url: 'https://ropsten.etherscan.io/tx/0xdcbb6396b6bc1230c2d4e3edc806e811a8fe40687221234040f29af393126e17'
  },
  {
    sender: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    receiver: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    dateTime: '10:22/01-01-2021',
    url: 'https://ropsten.etherscan.io/tx/0xdcbb6396b6bc1230c2d4e3edc806e811a8fe40687221234040f29af393126e17'
  },
  {
    sender: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    receiver: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    dateTime: '10:22/01-01-2021',
    url: 'https://ropsten.etherscan.io/tx/0xdcbb6396b6bc1230c2d4e3edc806e811a8fe40687221234040f29af393126e17'
  },
  {
    sender: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    receiver: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    dateTime: '10:22/01-01-2021',
    url: 'https://ropsten.etherscan.io/tx/0xdcbb6396b6bc1230c2d4e3edc806e811a8fe40687221234040f29af393126e17'
  },
  {
    sender: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    receiver: '0x0a245F5631213090e1B2d51C2e4eE970aE163fBE',
    dateTime: '10:22/01-01-2021',
    url: 'https://ropsten.etherscan.io/tx/0xdcbb6396b6bc1230c2d4e3edc806e811a8fe40687221234040f29af393126e17'
  },
];

export default function BasicTable() {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>

              <TableCell align="right">{row.sender}</TableCell>
              <TableCell align="right">{row.receiver}</TableCell>
              <TableCell align="right">{row.dateTime}</TableCell>
              <TableCell align="right">{row.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
