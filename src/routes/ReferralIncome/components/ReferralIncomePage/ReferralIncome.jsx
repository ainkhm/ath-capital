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
import styles from './ReferralIncome.styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import { useNotifications } from 'modules/notification'
import RequestsList from '../ReferralsList'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton'
import CopyToClipboard from 'components/CopyToClipboard'
import { SIGNUP_PATH } from 'constants/paths'
const useStyles = makeStyles(styles)


function ReferralIncome() {
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
              <div className={classes.spaceBetween}>
                <div>
                  <Typography color="textSecondary">
                    Referral Income
                  </Typography>
                  <Typography component='h4' variant='h4'>
                    $100
                  </Typography>
                </div>
                <div>
                  <CopyToClipboard text={`${path}${SIGNUP_PATH}?referral=${auth.uid}`} />
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

export default ReferralIncome
