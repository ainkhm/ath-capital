import { Chip } from '@material-ui/core'
import { APPROVED_STATUS, PENDING_STATUS, REJECTED_STATUS } from 'constants/statuses'
import React from 'react'

const RequestStatus = ({ status }) => {

    const color = (status) => {
        switch (status) {
            case PENDING_STATUS:
                return {
                    backgroundColor: '#FFC124',
                    color: '#000'
                }
            case REJECTED_STATUS:
                return {
                    backgroundColor: '#DC3545',
                    color: '#fff'
                }
            case APPROVED_STATUS:
                return {
                    backgroundColor: '#198754',
                    color: '#fff'
                }
        }
    }

    return (
        <Chip style={color(status)} label={status} />
    )
}

export default RequestStatus
