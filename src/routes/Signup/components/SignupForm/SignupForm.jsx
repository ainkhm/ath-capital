import React from 'react'
import PropTypes from 'prop-types'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { validateEmail } from 'utils/form'
import styles from './SignupForm.styles'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import { CUSTOMER, MARKETER } from 'constants/roles'

const useStyles = makeStyles(styles)

function SignupForm({ onSubmit }) {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
    control
  } = useForm({
    mode: 'onChange',
    nativeValidation: false
  })

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        placeholder="username"
        autoComplete="username"
        margin="normal"
        fullWidth
        inputProps={{
          ...register('username')
        }}
      />
      <TextField
        type="email"
        placeholder="email"
        autoComplete="email"
        margin="normal"
        fullWidth
        inputProps={{
          ...register('email', {
            required: true,
            validate: validateEmail
          })
        }}
        error={!!errors.email}
        helperText={errors.email && 'Email must be valid'}
      />
      <TextField
        type="password"
        placeholder="password"
        autoComplete="current-password"
        margin="normal"
        fullWidth
        inputProps={{
          ...register('password', {
            required: true
          })
        }}
        error={!!errors.password}
        helperText={errors.password && 'Password is required'}
      />
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">Role</FormLabel>
        <Controller
          rules={{ required: true }}
          control={control}
          defaultValue={CUSTOMER}
          name="role"
          render={({ name, onBlur, onChange, value }) => (
            <RadioGroup
              name={name}
              defaultValue={CUSTOMER}

            >
              <FormControlLabel
                value={CUSTOMER}
                control={<Radio color='primary' />}
                label="Customer"
              />
              <FormControlLabel
                value={MARKETER}
                control={<Radio color='primary' />}
                label="Marketer"
              />
            </RadioGroup>
          )}
        />
      </FormControl>
      <div className={classes.submit}>
        <Button
          color="primary"
          type="submit"
          variant="contained"
          disabled={isSubmitting || !isValid}>
          {isSubmitting ? 'Loading' : 'Signup'}
        </Button>
      </div>
    </form>
  )
}

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default SignupForm
