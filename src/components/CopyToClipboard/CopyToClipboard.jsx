import React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/styles/makeStyles';
import styles from './CopyToClipboard.styles'
import Typography from '@material-ui/core/Typography'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(styles)

function CopyToClipboard({ text }) {
  const classes = useStyles()

  return (
    <Typography color="textSecondary" className={classes.text} >
      {text}
      <IconButton
        aria-label="copy"
        onClick={() => navigator.clipboard.writeText(text)}
        size="large">
        <FileCopyOutlinedIcon />
      </IconButton>
    </Typography>
  );
}

CopyToClipboard.propTypes = {
  text: PropTypes.string
}

export default CopyToClipboard
