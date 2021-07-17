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
import styles from './WalletPage.styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import NewRequestDialog from '../NewRequestDialog'
import { useNotifications } from 'modules/notification'
import RequestsList from '../RequestsList'
import { REQUESTS_COLLECTION } from 'constants/firebasePaths'
import { USERS_PATH } from 'constants/paths'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(styles)

function useRequestsList() {
  const { showSuccess, showError } = useNotifications()
  const firestore = useFirestore()

  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)


  useFirestoreConnect([
    {
      collection: REQUESTS_COLLECTION,
      where: ['createdBy', '==', auth.uid || '']
    }
  ])

  // Get projects from redux state
  const requests = useSelector(({ firestore: { ordered } }) => ordered.requests)

  // New dialog
  const [newDialogOpen, changeDialogState] = useState(false)
  const [stepOne, setStepOne] = useState(false)
  const toggleDialog = () => {
    changeDialogState(!newDialogOpen)
    newDialogOpen ? setStepOne(false) : null
  }

  function addRequests(newInstance) {
    if (!auth.uid) {
      return showError('You must be logged in to create a request')
    }
    return firestore
      .add(REQUESTS_COLLECTION, {
        ...newInstance,
        createdBy: auth.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
        status: 'pending'
      })
      .then(() => {
        toggleDialog()
        showSuccess('Request added successfully')
      })
      .catch((err) => {
        console.error('Error:', err) // eslint-disable-line no-console
        showError(err.message || 'Could not add request')
        return Promise.reject(err)
      })
  }



  return {
    requests,
    addRequests, newDialogOpen, stepOne, toggleDialog, setStepOne
  }
}

function ProjectsList() {
  const firestore = useFirestore()
  const classes = useStyles()
  // Get auth from redux state
  const profile = useSelector(({ firebase: { profile } }) => profile)


  const {
    requests,
    newDialogOpen,
    stepOne,
    addRequests,
    toggleDialog,
    setStepOne
  } = useRequestsList()


  // Show spinner while projects are loading
  if (!isLoaded(requests)) {
    return <LoadingSpinner />
  }


  return profile.role === "admin"
    ? <Redirect to={USERS_PATH} />
    : (<div className={classes.root}>
      <NewRequestDialog
        onSubmit={addRequests}
        open={newDialogOpen}
        onRequestClose={toggleDialog}
        stepOne={stepOne}
        setStepOne={setStepOne}
      />
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} >
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <div className={classes.spaceBetween}>
                <div>
                  <Typography color="textSecondary">
                    Wallet
                  </Typography>
                  <Typography component='h4' variant='h4'>
                    ${profile.wallet}
                  </Typography>
                </div>
                <div>
                  <Button variant="contained" color="primary" onClick={toggleDialog}>
                    Add Balance
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} >
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography color="textSecondary">
                Your Requests
              </Typography>
              <RequestsList requests={requests} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    )
}

export default ProjectsList
