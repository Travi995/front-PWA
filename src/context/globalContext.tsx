import { createContext, FC, ReactNode } from "react"

const defaultValues = {

}

export const GlobalContext = createContext(defaultValues)


export const GlobalContextProvider:FC<{children:ReactNode}> = ({ children }) => {

    return <GlobalContext.Provider value={{}}>
        {children}
    </GlobalContext.Provider>

}

