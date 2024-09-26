

export const formatTime = (milliseconds: number): string => {
    const minutes = ('0' + Math.floor((milliseconds / 60000) % 60)).slice(-2)
    const seconds = ('0' + Math.floor((milliseconds / 1000) % 60)).slice(-2)
    const centiSeconds = ('0' + Math.floor((milliseconds / 10) % 100)).slice(-2)

    return `${minutes}:${seconds}:${centiSeconds}`
};