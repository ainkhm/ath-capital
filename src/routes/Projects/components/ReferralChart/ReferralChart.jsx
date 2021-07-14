import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './ReferralChart.styles'
import { Line } from 'react-chartjs-2';

const useStyles = makeStyles(styles)

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Referrals',
            data: [12, 19, 3, 5, 2, 3],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

function ReferralChart() {
    const classes = useStyles()

    return (
        <div style={{ height: 300 }}>
            <Line data={data} options={options} />
        </div>
    )
}

ReferralChart.propTypes = {
}

ReferralChart.defaultProps = {
}

export default ReferralChart
