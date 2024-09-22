import React from "react"

interface WarningProps {
    warning: number | null
}

const Warning: React.FC<WarningProps> = ( {warning} ) => {
    if (!warning) {
        return null
    }
    return (
        <div>Aviso!</div>
    )
}

export default Warning
