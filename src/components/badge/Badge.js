import React from 'react'
import './Badge.css';

const Badge = ({serialNo}) => {
    return (
        <span className="badge">
            {serialNo}
        </span>
    )
}

export default Badge
