
import { useState } from "react";
import { InputText } from "primereact/inputtext";

const BasicDemo =()=> {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText keyfilter="money" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}


export default BasicDemo
        