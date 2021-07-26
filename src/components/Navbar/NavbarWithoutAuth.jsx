import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import LightThemeIcon from '@material-ui/icons/BrightnessHigh'
import DarkThemeIcon from '@material-ui/icons/Brightness4'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeContext } from 'modules/theme'
import styles from './Navbar.styles'
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'

const useStyles = makeStyles(styles)

function NavbarWithoutAuth({ children, brandPath = '/', handleDrawerOpen, open }) {
  const classes = useStyles()
  const { toggleDarkMode, isDarkMode } = useContext(ThemeContext)

  // Get auth from redux state
  const auth = useSelector(({ firebase }) => firebase.auth)
  const authExists = isLoaded(auth) && !isEmpty(auth)

  return (
    <AppBar position="fixed" className={clsx(classes.appBar)}>
      <Toolbar>
        {
          authExists
            ? <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            : null
        }
        <Typography
          color="inherit"
          variant="h6"
          component={Link}
          to={brandPath}
          className={classes.brand}
          data-test="brand">
          Ath-capital
        </Typography>
        <div className={classes.flex} />
        {/* <Tooltip title="Toggle light/dark theme">
          <IconButton
            onClick={toggleDarkMode}
            className={classes.themeModeButton}>
            {isDarkMode ? <LightThemeIcon /> : <DarkThemeIcon />}
          </IconButton>
        </Tooltip> */}
        {children}
      </Toolbar>
    </AppBar>
  )
}

NavbarWithoutAuth.propTypes = {
  children: PropTypes.element,
  brandPath: PropTypes.string
}

export default NavbarWithoutAuth
