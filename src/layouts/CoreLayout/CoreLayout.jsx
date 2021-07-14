import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'components/Navbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';
import DrawerContainer from 'components/Navbar/Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    paddingTop: 0
  },
}));

function CoreLayout({ children }) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const childProps = {
    open,
    handleDrawerClose,
    handleDrawerOpen
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar {...childProps} />
      <DrawerContainer {...childProps} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
