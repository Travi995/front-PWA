import { useNavigate } from "react-router-dom"
import FloatBtn from "../floatBtn/floatBtn"



const CardMe = () => {

    const navigate = useNavigate()

    const handlerNavigate = (arg:string)=>{
        navigate(arg)
    }

    return <div className="bg-white shadow xs:w-[80%] xs:rounded-xl xs:line-clamp-1 2xl:w-2/5 h-96 relative">

        <FloatBtn handlerNavigate={()=>handlerNavigate('/home/transaction')}/>
    </div>
}

export default CardMe