import styles from '../styles/Timer.module.css'
import LapList from './LapList'
import TimerControls from './TimerControls'
import TimerDisplay from './TimerDisplay'
import { useState, useEffect } from 'react'
import {formatTime} from '../utils/formatTime'

const Timer = () => {
    const [milliseconds, setMilliseconds] = useState<number>(0)
    const [timerOn, setTimerOn] = useState<boolean>(false)
    const [laps, setLaps] = useState<number[]>([])

    const startTimer = () => {
        return setInterval(() => {
            setMilliseconds((prevMilliseconds) => prevMilliseconds + 10)
        }, 10)
    }

    const stopTimer = (interval: number | null) => {
        if(interval) { clearInterval(interval) }
    }

    const resetTimer = () => {
        setMilliseconds(0)
        setTimerOn(false)
        setLaps([])
    }

    const addLap = () => {
        setLaps([...laps, milliseconds])
    }

    useEffect(() => {
        let interval: number | null = null

        if(timerOn) { interval = startTimer() }
        else { stopTimer(interval) }

        return () => stopTimer(interval)
    }, [timerOn])

    return (
        <div className={styles.timer_container}>
            <TimerDisplay timer={()=> formatTime(milliseconds)}/>
            <TimerControls 
            timerOn={timerOn}
            onStart={()=> setTimerOn(true)}
            onStop={()=> setTimerOn(false)}
            onReset={resetTimer}
            onLap={addLap}/>

            <LapList laps={laps}/>
        </div>
    )
}

export default Timer
