
export type tpContext = {
    token: string
    setToken: (arg:string)  => void
    id: string
    setId: (arg:string)=>void
    totalMoney: number,
    setTotalMoney: (arg:number)=>void

    refreshUser:boolean
    setRefreshUser:(arg:boolean)=>void
}