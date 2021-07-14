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

const useStyles = makeStyles(styles)

function useRequestsList() {
  const { showSuccess, showError } = useNotifications()
  const firestore = useFirestore()

  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)

  // useFirestoreConnect([
  //   {
  //     collection: PROJECTS_COLLECTION,
  //     where: ['createdBy', '==', auth.uid]
  //   }
  // ])

  // Get projects from redux state
  // const projects = useSelector(({ firestore: { ordered } }) => ordered.projects)

  // New dialog
  const [newDialogOpen, changeDialogState] = useState(false)
  const [stepOne, setStepOne] = useState(false)
  const toggleDialog = () => {
    changeDialogState(!newDialogOpen)
    newDialogOpen ? setStepOne(false) : null
  }

  // function addProject(newInstance) {
  //   if (!auth.uid) {
  //     return showError('You must be logged in to create a project')
  //   }
  //   return firestore
  //     .add(PROJECTS_COLLECTION, {
  //       ...newInstance,
  //       createdBy: auth.uid,
  //       createdAt: firestore.FieldValue.serverTimestamp()
  //     })
  //     .then(() => {
  //       toggleDialog()
  //       showSuccess('Project added successfully')
  //     })
  //     .catch((err) => {
  //       console.error('Error:', err) // eslint-disable-line no-console
  //       showError(err.message || 'Could not add project')
  //       return Promise.reject(err)
  //     })
  // }

  // projects, addProject,

  return { newDialogOpen, stepOne, toggleDialog, setStepOne }
}

function ProjectsList() {
  const firestore = useFirestore()
  const classes = useStyles()
  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)

  const {
    newDialogOpen,
    stepOne,
    toggleDialog,
    setStepOne
  } = useRequestsList()


  // Show spinner while projects are loading
  if (false) {
    return <LoadingSpinner />
  }

  return (
    <div className={classes.root}>
      <NewRequestDialog
        onSubmit={() => console.log("abcd")}
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
                    $100
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
              <RequestsList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProjectsList
