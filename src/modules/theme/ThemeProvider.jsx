import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import ThemeSettings from '../../theme'
import ThemeContext from './ThemeContext'

export default function ThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [isDarkMode, changeIsDarkMode] = useState(false)

  useEffect(() => {
    changeIsDarkMode(prefersDarkMode)
  }, [prefersDarkMode])

  const theme = React.useMemo(
    () =>
      createTheme({
        ...ThemeSettings,
        palette: {
          ...ThemeSettings.palette,
          // type: isDarkMode ? 'dark' : 'light'
          type: 'light'
        }
      }),
    [isDarkMode]
  )

  const contextValue = {
    isDarkMode,
    toggleDarkMode: useCallback(() => changeIsDarkMode(!isDarkMode), [
      changeIsDarkMode,
      isDarkMode
    ])
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.element
}
