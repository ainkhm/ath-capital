import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import styles from './ReferralsGraph.styles';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles);

function ReferralsGraph() {
	const classes = useStyles();

	const profile = useSelector(({ firebase: { profile } }) => profile);

	const [data, setData] = useState({
		labels: ['1', '2nd', '3rd'],
		datasets: [
			{
				label: 'Level of Referals',
				data: [0, 0, 0],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
				],
				borderWidth: 1,
			},
		],
	});

	useEffect(() => {
		if (
			profile?.level1?.length >= 0 &&
			profile?.level2?.length >= 0 &&
			profile?.level3?.length >= 0
		) {
			setData({
				labels: ['1', '2nd', '3rd'],
				datasets: [
					{
						label: 'Level of Referals',
						data: [
							profile.level1.length,
							profile.level2.length,
							profile.level3.length,
						],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
						],
						borderWidth: 1,
					},
				],
			});
		}
	}, [profile]);

	return (
		<>
			<div className={classes.graphContainer}>
				<div className={classes.graph}>
					<Pie data={data} />
				</div>
			</div>
		</>
	);
}

ReferralsGraph.propTypes = {};

ReferralsGraph.defaultProps = {};

export default ReferralsGraph;
