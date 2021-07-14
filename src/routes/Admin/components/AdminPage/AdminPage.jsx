import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import LoadingSpinner from 'components/LoadingSpinner'
import styles from './AdminPage.styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { useNotifications } from 'modules/notification'
import RequestsList from '../RequestsList'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton'
import UsersList from '../UsersList'
const useStyles = makeStyles(styles)


function AdminPage() {
  const firestore = useFirestore()
  const classes = useStyles()
  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)


  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.origin)
  }, [])

  // Show spinner while projects are loading
  if (false) {
    return <LoadingSpinner />
  }

  return (
    <div className={classes.root}>

      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} >
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography color="textSecondary">
                Users
              </Typography>
              <UsersList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} >
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography color="textSecondary">
                User Requests
              </Typography>
              <RequestsList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminPage
