
import 'primeicons/primeicons.css';
import { FC } from 'react';

interface compCategoryProps {
    icon: string 
    handlerChangeKeys: (icon:string)=>void   
}

const CompCategory:FC<compCategoryProps> = ({icon, handlerChangeKeys}) => {

    return <div className="relative flex flex-col items-center">
        <button className="bg-gray-400 transition-all duration-200 w-20 h-20 rounded-full flex items-center justify-center shadow hover:bg-gray-600">
            <i className={`pi ${icon}`} 
            style={{fontSize:"1.5rem"}}
            onClick={()=>handlerChangeKeys(icon)}></i>
        </button>
    </div>

}

export default CompCategory