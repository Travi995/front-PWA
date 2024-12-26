
import 'primeicons/primeicons.css';
import { FC, SyntheticEvent } from 'react';

interface compCategoryProps {
    icon: string 
    handlerChange: (icon:string)=>void   
    handlerClick?: ()=>void
    active?:boolean
}

const CompCategory:FC<compCategoryProps> = ({icon, handlerChange, handlerClick=()=>{}}, active ) => {


    const handlerEvent = (e:SyntheticEvent)=>{
        e.stopPropagation()
        e.preventDefault()

        handlerChange(icon)

        handlerClick()
    }


    return <div onClick={handlerEvent} className="relative flex flex-col items-center">
        <div onClick={handlerEvent} className={`bg-gray-400 transition-all duration-200 w-20 h-20 rounded-full flex items-center justify-center shadow hover:bg-gray-600 hover:cursor-pointer ${active?'bg-gray-500':''}`}>
            <i  className={`pi ${icon}`} 
            style={{fontSize:"1.5rem", color: 'white'}}
            onClick={handlerEvent}></i>
        </div>
    </div>

}

export default CompCategory