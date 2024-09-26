import React from 'react'
import styles from '../styles/Timer.module.css'
import { formatTime } from '../utils/formatTime'

interface LapListProps {
    laps: number[]
}

const LapList: React.FC<LapListProps> = ({ laps }) => {
    return (
        <div className={styles.timer_laps}>
            <h3>Voltas: </h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Volta {index+1}: {formatTime(lap)}</li>
                ))}
            </ul>
        </div>
    )
}

export default LapList
