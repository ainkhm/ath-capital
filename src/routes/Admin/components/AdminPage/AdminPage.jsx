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
import { COMMISSIONS_COLLECTION, REQUESTS_COLLECTION, USERS_COLLECTION } from 'constants/firebasePaths'
import Commissions from '../Commissions'
const useStyles = makeStyles(styles)

function useUsersList() {
  const { showSuccess, showError } = useNotifications()
  const firestore = useFirestore()

  useFirestoreConnect([
    {
      collection: USERS_COLLECTION,
      where: ['role', '!=', 'admin']
    },
    {
      collection: REQUESTS_COLLECTION
    },
    {
      collection: COMMISSIONS_COLLECTION
    }
  ])

  // Get projects from redux state
  const users = useSelector(({ firestore: { ordered } }) => ordered.users)
  const requests = useSelector(({ firestore: { ordered } }) => ordered.requests)
  const commissions = useSelector(({ firestore: { ordered } }) => ordered.commissions)

  function updateUser(user, updateObj) {
    console.log('<--', user, updateObj)
    return firestore.collection('users').doc(user)
      .update(updateObj)
      .then(() => {
        showSuccess('User updated')
      })
      .catch((err) => {
        console.error('Error:', err) // eslint-disable-line no-console
        showError(err.message || 'Could not update user')
        return Promise.reject(err)
      })
  }

  function updateCommissions(updateObj) {
    return firestore.collection('commissions').doc('percentages')
      .update(updateObj)
      .then(() => {
        showSuccess('Commissions updated')
      })
      .catch((err) => {
        console.error('Error:', err) // eslint-disable-line no-console
        showError(err.message || 'Could not update commissions')
        return Promise.reject(err)
      })
  }

  return { users, requests, commissions, updateUser, updateCommissions }
}


function AdminPage() {
  const firestore = useFirestore()
  const classes = useStyles()
  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)

  const {
    users,
    requests,
    commissions,
    updateUser,
    updateCommissions
  } = useUsersList()

  console.log('users -->', users, requests, commissions)


  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.origin)
  }, [])

  // Show spinner while projects are loading
  if (!isLoaded(users) || !isLoaded(requests) || !isLoaded(commissions)) {
    return <LoadingSpinner />
  }

  return (
    <div className={classes.root}>

      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} >
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography color="textSecondary">
                Commissions
              </Typography>
              <Commissions commissions={commissions} updateCommissions={updateCommissions} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} >
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography color="textSecondary">
                Users
              </Typography>
              <UsersList users={users} updateUser={updateUser} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} >
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography color="textSecondary">
                User Requests
              </Typography>
              <RequestsList requests={requests} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default AdminPage
