import { useNavigate } from "react-router-dom"
import { dataItemsMenu } from "../../enums/dataItemsNavbar"
import ItemsMenu from "../itemsNavbar/itemsNavbar"


const Navbar = ()=>{

    const navigate = useNavigate()

    const handlerNavigate = (arg:string)=>{
        navigate(arg)
    }

    return <nav className="bg-black h-16 text-gray-300 text-lg flex items-center justify-end">
        <ul className="flex gap-4 mr-20">
            {dataItemsMenu.map((item,index:number)=>{
                return <ItemsMenu key={index} label={item.label} route={item.route} handlerNavigate={handlerNavigate}/>
            })}
        </ul>
    </nav>
}

export default Navbar