
import { FC } from "react";
import { Dropdown } from 'primereact/dropdown';
import { tpMoney } from "@/types/tpMoney";
import { tpSelectTypeMoney } from "@/types/tpSelectTypeMoney";

interface ItfCheckmarkDemo {
    handlerChange: (key: keyof tpMoney, arg:string)=> void
    dataMoney: tpSelectTypeMoney
}

const CheckmarkDemo:FC<ItfCheckmarkDemo> =({handlerChange, dataMoney})=> {
  
    const money:tpSelectTypeMoney[] = [
        { name: 'CUP', code: 'CUP' },
        { name: 'USD', code: 'USD' },
        { name: 'EURO', code: 'EURO' },
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={dataMoney} onChange={(e) => handlerChange('typeCoin',e.value)} options={money} optionLabel="name" 
                placeholder="Tipo de moneda" className="w-full md:w-14rem h-10 flex items-center" checkmark={true} highlightOnSelect={false} />
        </div>
    )
}

export default CheckmarkDemo
        