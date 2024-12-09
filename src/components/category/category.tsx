import { FC, useState } from "react"
import { IoIosAdd } from "react-icons/io"

interface CategoryProps {
    label: string
    color: string
    icon: string
}

const Category:FC<CategoryProps> = ({label, color, icon})=>{

    const [showFull, setShowFull] = useState<boolean>(false)

    const handlerClick = ()=> {
        setShowFull(!showFull)
    }

    return <div className={`w-28 h-36 relative flex flex-col transition-all duration-75 rounded-xl items-center ${showFull?color: ''}`}>
        <div className={`w-full h-28 rounded-full flex items-center justify-center text-white hover:cursor-pointer ${color}`} onClick={handlerClick}><IoIosAdd className=""/>{icon}</div>
        <span className="absolute bottom-0">{label}</span>
    </div>

}

export default Category