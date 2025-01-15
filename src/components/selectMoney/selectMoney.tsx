import { InputText } from "primereact/inputtext"
import CheckmarkDemo from "../selectReactPrime/selectReactPrime"
import { FC, useState } from "react"
import { tpMoney } from "@/types/tpMoney"
import { tpSelectTypeMoney } from "@/types/tpSelectTypeMoney"


interface ItfSelectMoney {
    handlerChange: (key: keyof tpMoney, arg:string)=> void
    dataMoney: tpSelectTypeMoney
}


const SelectMoney:FC<ItfSelectMoney> = ({handlerChange, dataMoney})=>{

    return <div className="flex gap-2">
        <InputText keyfilter="num" className="bg-transparent border-b-2 rounded-none w-28 border-black focus:outline-none " onChange={(e)=>handlerChange('value', e.target.value)}/>
        <CheckmarkDemo handlerChange={handlerChange} dataMoney={dataMoney}/>
    </div>
}

export default SelectMoney