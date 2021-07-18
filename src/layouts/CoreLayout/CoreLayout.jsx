import React from 'react'
import PropTypes from 'prop-types'
import Navbar from 'components/Navbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';
import DrawerContainer from 'components/Navbar/Drawer';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { HOME_PATH } from 'constants/paths';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  // Get auth from redux state
  const auth = useSelector(({ firebase }) => firebase.auth)
  const authExists = isLoaded(auth) && !isEmpty(auth)


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
      {
        location.pathname !== HOME_PATH
          ? <>
            <CssBaseline />
            <Navbar {...childProps} />
            {
              authExists
                ? <DrawerContainer {...childProps} />
                : null
            }
            <main className={classes.content}>
              <div className={classes.toolbar} />
              {children}
            </main>
          </>
          : children
      }
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout
