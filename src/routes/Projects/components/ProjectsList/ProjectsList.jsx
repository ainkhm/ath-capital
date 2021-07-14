import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {
  useFirestore,
  useFirestoreConnect,
  isLoaded,
  isEmpty
} from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useNotifications } from 'modules/notification'
import LoadingSpinner from 'components/LoadingSpinner'
import { PROJECTS_COLLECTION } from 'constants/firebasePaths'
import ProjectTile from '../ProjectTile'
import NewProjectDialog from '../NewProjectDialog'
import styles from './ProjectsList.styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ReferredUser from '../ReferredUser'
import ReferralChart from '../ReferralChart'
import ReferralsGraph from '../ReferralsGraph'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(styles)

function useProjectsList() {
  const { showSuccess, showError } = useNotifications()
  const firestore = useFirestore()

  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)

  useFirestoreConnect([
    {
      collection: PROJECTS_COLLECTION,
      where: ['createdBy', '==', auth.uid]
    }
  ])

  // Get projects from redux state
  const projects = useSelector(({ firestore: { ordered } }) => ordered.projects)

  // New dialog
  const [newDialogOpen, changeDialogState] = useState(false)
  const toggleDialog = () => changeDialogState(!newDialogOpen)

  function addProject(newInstance) {
    if (!auth.uid) {
      return showError('You must be logged in to create a project')
    }
    return firestore
      .add(PROJECTS_COLLECTION, {
        ...newInstance,
        createdBy: auth.uid,
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        toggleDialog()
        showSuccess('Project added successfully')
      })
      .catch((err) => {
        console.error('Error:', err) // eslint-disable-line no-console
        showError(err.message || 'Could not add project')
        return Promise.reject(err)
      })
  }

  return { projects, addProject, newDialogOpen, toggleDialog }
}

function ProjectsList() {
  const [path, setPath] = useState('')
  const firestore = useFirestore()

  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)

  useEffect(() => {
    setPath(window.location.origin)
  }, [])

  const classes = useStyles()
  const {
    projects,
    addProject,
    newDialogOpen,
    toggleDialog
  } = useProjectsList()

  // Show spinner while projects are loading
  if (!isLoaded(projects)) {
    return <LoadingSpinner />
  }

  return (
    <div className={classes.root}>
      <NewProjectDialog
        onSubmit={addProject}
        open={newDialogOpen}
        onRequestClose={toggleDialog}
      />

      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} md={6} >
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Referral Link
              </Typography>
              <Typography color="textSecondary">
                {path}/{auth.uid}
                <IconButton aria-label="delete" className={classes.copyButton} onClick={() => navigator.clipboard.writeText(`${path}/${auth.uid}`)}>
                  <FileCopyOutlinedIcon />
                </IconButton>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Referrals Over Time
              </Typography>
              <ReferralChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Your Referrals
              </Typography>
              <ReferredUser />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.card} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Where your referrals are coming from
              </Typography>
              <ReferralsGraph />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>
  )
}

export default ProjectsList
