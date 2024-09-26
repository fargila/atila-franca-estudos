import styles from '../styles/Timer.module.css'

interface TimerDisplayProps {
    timer: () => string
}
const TimerDisplay: React.FC<TimerDisplayProps> = ({ timer }) => {
    return (
        <div className={styles.timer_display}>
        {timer()}
        </div>
    )
}

export default TimerDisplay
