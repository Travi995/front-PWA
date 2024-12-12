
import 'primeicons/primeicons.css';
import { FC, SyntheticEvent } from 'react';

interface compCategoryProps {
    icon: string 
    handlerChange: (icon:string)=>void   
}

const CompCategory:FC<compCategoryProps> = ({icon, handlerChange}) => {

    const handlerEvent = (e:SyntheticEvent)=>{
        e.stopPropagation()
        e.preventDefault()

        handlerChange(icon)
    }

    return <div onClick={handlerEvent} className="relative flex flex-col items-center">
        <div onClick={handlerEvent} className="bg-gray-400 transition-all duration-200 w-20 h-20 rounded-full flex items-center justify-center shadow hover:bg-gray-600">
            <i  className={`pi ${icon}`} 
            style={{fontSize:"1.5rem"}}
            onClick={handlerEvent}></i>
        </div>
    </div>

}

export default CompCategory