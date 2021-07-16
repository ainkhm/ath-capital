import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import Paper from '@material-ui/core/Paper'
import { useFirebase, useFirestore } from 'react-redux-firebase'
import { makeStyles } from '@material-ui/core/styles'
import { LOGIN_PATH } from 'constants/paths'
import { useNotifications } from 'modules/notification'
import SignupForm from '../SignupForm'
import styles from './SignupPage.styles'

const useStyles = makeStyles(styles)

function SignupPage() {
  const classes = useStyles()
  const { showError } = useNotifications()
  const firebase = useFirebase()
  const firestore = useFirestore()
  const params = new URLSearchParams(useLocation().search)
  const db = firebase.firestore()

  const [referrer, setReferrer] = useState('')

  useEffect(() => {
    if (params.get('referral')) {
      const referrerID = params.get('referral')
      const documentRefString = db.collection("users").doc(referrerID)
      const userRef = db.doc(documentRefString.path)
      setReferrer(userRef)
    }
  }, [])

  function onSubmitFail(formErrs, dispatch, err) {
    showError(formErrs ? 'Form Invalid' : err.message || 'Error')
  }

  function googleLogin() {
    return firebase
      .login({ provider: 'google', type: 'popup' })
      .catch((err) => showError(err.message))
  }

  function emailSignup(creds) {
    return firebase
      .createUser(creds, {
        email: creds.email,
        username: creds.username,
        role: creds.role,
        wallet: 0,
        level1: [],
        level2: [],
        level3: [],
        referrer: referrer ? referrer : null,
        createdAt: firestore.Timestamp.now()
      })
      .then(async (user) => {
        const userToSave = { createdAt: user.createdAt, email: user.email }
        if (user?.referrer !== null) {
          await user?.referrer?.update({
            level1: firestore.FieldValue.arrayUnion(userToSave)
          })

          firestore.collection('users').doc(params.get('referral')).get().then(async doc => {
            const first = doc.data()

            if (first?.referrer !== null) {
              await first?.referrer?.update({
                level2: firestore.FieldValue.arrayUnion(userToSave)
              })

              first.referrer.get().then(async doc => {
                const second = doc.data()

                if (second?.referrer !== null) {
                  await second?.referrer?.update({
                    level3: firestore.FieldValue.arrayUnion(userToSave)
                  })
                }
              })
            }
          })
        }
      })
      .catch((err) => {
        return showError(err.message)
      })
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.panel}>
        <SignupForm onSubmit={emailSignup} onSubmitFail={onSubmitFail} />
      </Paper>
      {/* <div className={classes.orLabel}>or</div>
      <div className={classes.providers}>
        <GoogleButton onClick={googleLogin} data-test="google-auth-button" />
      </div> */}
      <div className={classes.login}>
        <span className={classes.loginLabel}>Already have an account?</span>
        <Link className={classes.loginLink} to={LOGIN_PATH}>
          Login
        </Link>
      </div>
    </div>
  )
}

export default SignupPage