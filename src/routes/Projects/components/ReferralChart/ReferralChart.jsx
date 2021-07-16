import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import styles from './ReferralChart.styles'
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(styles)

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

    const profile = useSelector(({ firebase: { profile } }) => profile)

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Referrals',
                data: [],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    })

    useEffect(() => {
        if (profile?.level1?.length >= 0 && profile?.level2?.length >= 0 && profile?.level3?.length >= 0) {
            createChartData()
        }
    }, [profile])

    const createChartData = () => {
        const completeArray = [...profile.level1, ...profile.level2, ...profile.level3]
        const tempLabels = []
        const tempData = []

        for (let [index, item] of completeArray.entries()) {

            console.log(index, item)
        }

    }

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
