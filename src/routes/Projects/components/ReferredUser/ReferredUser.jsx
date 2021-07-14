import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './ReferredUser.styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles(styles)

function ReferredUser() {
    const classes = useStyles()

    const userData = [
        {
            email: 'abc@gmail.com',
            level: '1st'
        },
        {
            email: 'def@gmail.com',
            level: '3rd'
        },
        {
            email: 'ghi@gmail.com',
            level: '2nd'
        },
        {
            email: 'hjk@gmail.com',
            level: '1st'
        },
    ]

    return (
        userData && userData.map(user => (
            <Card className={classes.root} variant='outlined'>
                <CardMedia
                    className={classes.cover}
                    image="http://lexaquiliabd.com/wp-content/uploads/2017/10/ATbrxjpyc.jpg"
                    title="user avatar"
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="p" variant="subtitle1">
                            {user.email}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {user.level} Level
                        </Typography>
                    </CardContent>
                </div>

            </Card>
        ))

    )
}

ReferredUser.propTypes = {
}

ReferredUser.defaultProps = {
}

export default ReferredUser
