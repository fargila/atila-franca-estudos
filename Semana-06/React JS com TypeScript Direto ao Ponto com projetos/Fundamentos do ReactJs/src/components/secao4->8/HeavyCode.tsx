//USE OF GENERATIVE AI
import React, { useMemo } from "react"

const heavyOperation = (num: number): number => {
    console.log("Realizando operação pesada...")
    return num * 1000
};

const HeavyCode: React.FC = () => {
    const num = 2
    const result = useMemo(() => heavyOperation(num), [num])

    return (
        <div>
            Resultado: {result}
        </div>
    );
};

export default HeavyCode
