import { FC } from "react"


interface ItemsMenuProps {
    label:string
    route:string
    handlerNavigate: (arg:string)=>void
}

const ItemsMenu:FC<ItemsMenuProps>= ({label, route, handlerNavigate})=>{
    return <li className='hover:cursor-pointer hover:text-gray-200 mr-10' onClick={()=>handlerNavigate(route)}>{label}</li>
}


export default ItemsMenu