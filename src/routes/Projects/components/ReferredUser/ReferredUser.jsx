import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ReferredUser.styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

function ReferredUser() {
	const classes = useStyles();
	const profile = useSelector(({ firebase: { profile } }) => profile);

	const [userData, setUserData] = useState([]);

	useEffect(() => {
		mapUserData();
	}, [profile]);

	const mapUserData = () => {
		const tempData = [];
		if (profile.level1) {
			for (let item of profile.level1) {
				tempData.push({
					email: item.email,
					level: '1',
				});
			}
		}
		if (profile.level2) {
			for (let item of profile.level2) {
				tempData.push({
					email: item.email,
					level: '2nd',
				});
			}
		}
		if (profile.level3) {
			for (let item of profile.level3) {
				tempData.push({
					email: item.email,
					level: '3rd',
				});
			}
		}
		setUserData(tempData);
	};

	return (
		userData &&
		userData.map((user) => (
			<Card className={classes.root} variant='outlined'>
				<CardMedia
					className={classes.cover}
					image='http://lexaquiliabd.com/wp-content/uploads/2017/10/ATbrxjpyc.jpg'
					title='user avatar'
				/>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Typography component='p' variant='subtitle1'>
							{user.email}
						</Typography>
						<Typography variant='subtitle2' color='textSecondary'>
							{user.level} Уровень
						</Typography>
					</CardContent>
				</div>
			</Card>
		))
	);
}

ReferredUser.propTypes = {};

ReferredUser.defaultProps = {};

export default ReferredUser;
