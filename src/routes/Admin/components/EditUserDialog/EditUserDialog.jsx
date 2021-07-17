import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Controller, useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import styles from './EditUserDialog.styles'
import { ADMIN, CUSTOMER, MARKETER } from 'constants/roles'
import { FormControl, FormLabel, MenuItem, Select } from '@material-ui/core'

const useStyles = makeStyles(styles)

function EditUserDialog({ onSubmit, open, onRequestClose, selectedUser }) {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ mode: 'onChange' })

  useEffect(() => {
    console.log(selectedUser)
    setValue('email', selectedUser.email)
    setValue('username', selectedUser.username)
    setValue('role', selectedUser.role)
    setValue('wallet', selectedUser.wallet)
  }, [selectedUser])

  const updateUser = (updates) => {
    updates.email = selectedUser.email
    updates.wallet = parseInt(updates.wallet)
    onSubmit(selectedUser.id, updates)
  }

  return (
    <Dialog open={open} onClose={onRequestClose}>
      <DialogTitle id="new-project-dialog-title">Edit User</DialogTitle>
      <form className={classes.root} onSubmit={handleSubmit(updateUser)}>
        <DialogContent>
          <TextField
            error={!!errors.email}
            helperText={errors.email && 'Email is required'}
            label="Email"
            autoFocus
            disabled
            inputProps={{
              tabIndex: '1',
              ...register('email', {
                required: true,
              })
            }}
            margin="normal"
            fullWidth
          />
          <TextField
            error={!!errors.username}
            helperText={errors.username && 'Username is required'}
            label="Username"
            inputProps={{
              tabIndex: '2',
              ...register('username', {
                required: true,
              })
            }}
            margin="normal"
            fullWidth
          />
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Role</FormLabel>
            <Controller
              rules={{ required: true }}
              control={control}
              name="role"
              render={({ name, onBlur, onChange, value }) => {
                return (
                  <Select
                    tabIndex='3'
                    name={name}
                    value={value || CUSTOMER}
                  >
                    <MenuItem value={CUSTOMER}>Customer</MenuItem>
                    <MenuItem value={MARKETER}>Marketer</MenuItem>
                  </Select>
                )
              }}
            />
          </FormControl>
          <TextField
            error={!!errors.wallet}
            helperText={errors.wallet && 'Wallet is required'}
            label="Wallet"
            type='number'
            inputProps={{
              tabIndex: '4',
              ...register('wallet', {
                required: true,
              })
            }}
            margin="normal"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onRequestClose} tabIndex="3">
            Cancel
          </Button>
          <Button
            type="submit"
            color="primary"
            disabled={isSubmitting || !isValid}
            tabIndex="2">
            {isSubmitting ? 'Creating...' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

EditUserDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default EditUserDialog
