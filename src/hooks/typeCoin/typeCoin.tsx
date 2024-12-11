import { tpMoney } from "@/types/tpMoney"
import { useState } from "react"
import { useLocation } from "react-router-dom"

export const typeCoin = ()=>{

    const location = useLocation().state
    const getType = location?.typeTransaction

    const [dataCoin, setDataCoin] = useState<tpMoney>({
        id: '',
        typeCoin: '',
        value: 0,
        type: getType
    })

    return {
        dataCoin,
        setDataCoin,
       
    }
}