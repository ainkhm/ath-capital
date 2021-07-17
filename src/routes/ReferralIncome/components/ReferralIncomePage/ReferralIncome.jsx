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
import { SIGNUP_PATH, USERS_PATH } from 'constants/paths'
import { Redirect } from 'react-router-dom'
const useStyles = makeStyles(styles)


function ReferralIncome() {
  const firestore = useFirestore()
  const classes = useStyles()
  // Get auth from redux state
  const auth = useSelector(({ firebase: { auth } }) => auth)
  const profile = useSelector(({ firebase: { profile } }) => profile)

  const [path, setPath] = useState('')
  const [userData, setUserData] = useState([])


  useEffect(() => {
    setPath(window.location.origin)
  }, [])

  useEffect(() => {
    mapUserData()
  }, [profile])

  const mapUserData = () => {
    const tempData = []
    if (profile.level1) {

      for (let item of profile.level1) {
        tempData.push({
          email: item.email,
          level: '1st'
        })
      }
    }
    if (profile.level2) {
      for (let item of profile.level2) {
        tempData.push({
          email: item.email,
          level: '2nd'
        })
      }
    }
    if (profile.level3) {
      for (let item of profile.level3) {
        tempData.push({
          email: item.email,
          level: '3rd'
        })
      }
    }
    setUserData(tempData)
  }

  // Show spinner while projects are loading
  if (!isLoaded(profile)) {
    return <LoadingSpinner />
  }


  return profile.role === "admin"
    ? <Redirect to={USERS_PATH} />
    : (<div className={classes.root}>

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
              <RequestsList userData={userData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    )
}

export default ReferralIncome
