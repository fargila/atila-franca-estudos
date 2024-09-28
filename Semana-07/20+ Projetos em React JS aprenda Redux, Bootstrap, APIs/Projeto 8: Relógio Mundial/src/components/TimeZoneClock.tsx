import React, { useEffect, useState } from "react"

interface TimeZoneClockProps {
    timeZone: string
}

const TimeZoneClock: React.FC<TimeZoneClockProps> = ({ timeZone }) => {
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
        const date = new Date()
        const options: Intl.DateTimeFormatOptions = {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        }
        
        const timeString = date.toLocaleTimeString('en-US', options)
        setTime(timeString)
        }

        updateTime()
        const intervalId = setInterval(updateTime, 1000)

        return () => clearInterval(intervalId)
    }, [timeZone])
  
    return (
    <div className="timezone">
      <h2>{timeZone}</h2>
      <h3>{time}</h3>
    </div>
  )
}

export default TimeZoneClock
