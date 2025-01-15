import { FC, useState } from "react"

interface CategoryProps {
    label: string
    color: string
    icon: string
    event: () => void
    id:number
    idCategory:number

}

const Category: FC<CategoryProps> = ({ label, color, icon, event,id , idCategory}) => {


    const [showFull, setShowFull] = useState<boolean>(false)

    const handlerClick = () => {
        setShowFull(!showFull)

        event()
    }

    const dataColor = `#${color} `

    return <div className={`w-20 h-28 relative flex flex-col 
        transition-all duration-75 rounded-full
         items-center bg-transparent
        ${id===idCategory ? "rounded-xl" : ""}`}
        style={{
            backgroundColor: id===idCategory ? dataColor : "",
        }}>

        <div style={{ backgroundColor: dataColor }} className={`xs:w-20 xs:h-20 rounded-full flex items-center justify-center text-white hover:cursor-pointer `} onClick={handlerClick}>
            <i style={{ fontSize: "1.5rem" }} className={`pi ${icon}`}></i>
        </div>
        <span className="absolute bottom-0">{label}</span>
    </div>

}

export default Category