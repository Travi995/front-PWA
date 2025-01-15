import { tpContext } from "@/types/tpContext"
import { createContext, FC, ReactNode, useState } from "react"

const defaultValues:tpContext = {
    token: '',
    setToken: (arg:string)=>{arg},
    id: '',

    setId: (arg:string)=>{arg},
    
    totalMoney: 0,
    setTotalMoney: (arg:number)=>{arg},

    refreshUser:false,
    setRefreshUser: (arg:boolean)=>{arg}
}

export const GlobalContext = createContext(defaultValues)


export const GlobalContextProvider:FC<{children:ReactNode}> = ({ children }) => {
    const [token, setToken] = useState<string>('')
    const [id, setId] = useState<string>('')
    const [totalMoney, setTotalMoney] = useState<number>(0)
    const [refreshUser, setRefreshUser] = useState<boolean>(false)

    return <GlobalContext.Provider value={{token, setToken, id, setId, totalMoney, setTotalMoney, refreshUser, setRefreshUser}}>
        {children}
    </GlobalContext.Provider>

}

