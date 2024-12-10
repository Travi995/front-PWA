import { tpContext } from "@/types/tpContext"
import { createContext, FC, ReactNode, useState } from "react"

const defaultValues:tpContext = {
    token: '',
    setToken: (arg:string)=>{arg},
    id: '',
    setId: (arg:string)=>{arg}
}

export const GlobalContext = createContext(defaultValues)


export const GlobalContextProvider:FC<{children:ReactNode}> = ({ children }) => {
    const [token, setToken] = useState<string>('')
    const [id, setId] = useState<string>('')

    return <GlobalContext.Provider value={{token, setToken, id, setId}}>
        {children}
    </GlobalContext.Provider>

}

