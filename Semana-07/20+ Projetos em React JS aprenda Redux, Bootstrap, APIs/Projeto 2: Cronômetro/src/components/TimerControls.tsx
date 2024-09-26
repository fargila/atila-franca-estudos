import React from 'react'
import styles from '../styles/Timer.module.css'

interface TimerControlsProps {
    timerOn: boolean
    onStart: () => void
    onStop: () => void
    onReset: () => void
    onLap: () => void
}

const TimerControls: React.FC<TimerControlsProps> = ({ timerOn, onStart, onStop, onReset, onLap }) => {
    return (
        <div className={styles.timer_controls}>
            {!timerOn && <button onClick={onStart}>Iniciar</button>}
            {timerOn && <button onClick={onStop}>Parar</button>}
            {timerOn && <button onClick={onLap}>Volta</button>}
            <button onClick={onReset}>Zerar</button>
        </div>
    )
}

export default TimerControls
