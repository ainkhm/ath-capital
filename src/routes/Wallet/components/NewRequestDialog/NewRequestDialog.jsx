import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import styles from './NewRequestDialog.styles'
import Typography from '@material-ui/core/Typography'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton'
const useStyles = makeStyles(styles)

function NewRequestDialog({ onSubmit, open, onRequestClose, stepOne, setStepOne }) {
  const classes = useStyles()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors }
  } = useForm({ mode: 'onChange' })

  return (
    <Dialog open={open} onClose={onRequestClose}>
      <DialogTitle id="new-project-dialog-title">Add Balance</DialogTitle>
      {
        stepOne
          ? <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
            <DialogContent>
              <TextField
                error={!!errors.sender}
                helperText={errors.sender && 'Sender Address is required'}
                label="Sender Address"
                autoFocus
                inputProps={{
                  tabIndex: '1',
                  ...register('sender', {
                    required: true,
                  })
                }}
                margin="normal"
                fullWidth
              />
              <TextField
                error={!!errors.receiver}
                helperText={errors.receiver && 'Receiver Address is required'}
                label="Receiver Address"

                inputProps={{
                  tabIndex: '2',
                  ...register('receiver', {
                    required: true,
                  })
                }}
                margin="normal"
                fullWidth
              />
              <TextField
                error={!!errors.dateTime}
                helperText={errors.dateTime && 'Transaction date/time are required'}
                label="Date/Time"

                inputProps={{
                  tabIndex: '3',
                  ...register('dateTime', {
                    required: true,
                  })
                }}
                margin="normal"
                fullWidth
              />
              <TextField
                error={!!errors.url}
                helperText={errors.url && 'Transaction URL is required'}
                label="Transaction URL"

                inputProps={{
                  tabIndex: '4',
                  ...register('url', {
                    required: true,
                  })
                }}
                margin="normal"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onRequestClose}>
                Cancel
              </Button>
              <Button
                type="submit"
                color="primary"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? 'Creating...' : 'Create'}
              </Button>
            </DialogActions>
          </form>
          : <>
            <Typography color="textSecondary" style={{ textAlign: 'center' }} >
              0x0a245F5631213090e1B2d51C2e4eE970aE163fBE
              <IconButton aria-label="delete" className={classes.copyButton} onClick={() => navigator.clipboard.writeText(`0x0a245F5631213090e1B2d51C2e4eE970aE163fBE`)}>
                <FileCopyOutlinedIcon />
              </IconButton>
            </Typography>
            <Typography color="textSecondary" style={{ textAlign: 'center' }}>
              0x0a245F5631213090e1B2d51C2e4eE970aE163fBE
              <IconButton aria-label="delete" className={classes.copyButton} onClick={() => navigator.clipboard.writeText(`0x0a245F5631213090e1B2d51C2e4eE970aE163fBE`)}>
                <FileCopyOutlinedIcon />
              </IconButton>
            </Typography>
            <Typography color="textSecondary" style={{ textAlign: 'center' }}>
              0x0a245F5631213090e1B2d51C2e4eE970aE163fBE
              <IconButton aria-label="delete" className={classes.copyButton} onClick={() => navigator.clipboard.writeText(`0x0a245F5631213090e1B2d51C2e4eE970aE163fBE`)}>
                <FileCopyOutlinedIcon />
              </IconButton>
            </Typography>
            <DialogActions>
              <Button
                type="button"
                color="primary"
                onClick={() => setStepOne(true)}>
                Next
              </Button>
            </DialogActions>
          </>
      }
    </Dialog>
  )
}

NewRequestDialog.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired
}

export default NewRequestDialog
