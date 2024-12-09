
import 'primeicons/primeicons.css';
import { FC } from 'react';

interface compCategoryProps {
    icon: string    
}

const CompCategory:FC<compCategoryProps> = ({icon}) => {
    return <div className="relative flex flex-col items-center">
        <button className="bg-gray-500 transition-all duration-200 w-20 h-20 rounded-full flex items-center justify-center shadow hover:bg-gray-600">
            <span className={icon}></span>
        </button>
    </div>

}

export default CompCategory