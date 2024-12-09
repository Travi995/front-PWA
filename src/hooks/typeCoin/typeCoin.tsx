import { tpMoney } from "@/types/tpMoney"
import { useState } from "react"

export const typeCoin = ()=>{
    const [dataCoin, setDataCoin] = useState<tpMoney>({
        id: '',
        typeCoin: '',
        value: 0,
    })


    return {
        dataCoin,
        setDataCoin,
       
    }
}