import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './ReferralsGraph.styles'
import { Pie } from 'react-chartjs-2';

const useStyles = makeStyles(styles)

const data = {
    labels: ['1st', '2nd', '3rd'],
    datasets: [
        {
            label: 'Level of Referals',
            data: [12, 19, 3],
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
};

function ReferralsGraph() {
    const classes = useStyles()

    return (
        <>
            <div className={classes.graphContainer}>
                <div className={classes.graph}>
                    <Pie data={data} />
                </div>
            </div>
        </>
    )
}

ReferralsGraph.propTypes = {
}

ReferralsGraph.defaultProps = {
}

export default ReferralsGraph
