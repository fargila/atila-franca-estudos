import React, { useState, createContext, Dispatch, SetStateAction, ReactNode } from "react"

interface MyContextType {
    msg: string
    setMsg: Dispatch<SetStateAction<string>>
}
interface MyContextProviderProps {
    children: ReactNode
}

export const MyContext = createContext<MyContextType | undefined>(undefined)
export const MyContextProvider: React.FC<MyContextProviderProps> = ({ children }) => {
    const [msg, setMsg] = useState<string>('Mensagem inicial')
    const contextValue = {
        msg,
        setMsg
    }

    return  (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    )
}