import { useNavigate } from "react-router-dom"
import FloatBtn from "../floatBtn/floatBtn"
import { tpTypeTransaction } from "@/types/tpTypeTransaction"
import { FC, useContext, useEffect } from "react"
import GraphicDonuts from "../graphicChartjs/graphic"
import { fetchDefault } from "@/services/fetchDefault"
import { GlobalContext } from "@/context/globalContext"

interface CardGraphicProps {
    typeTransaction?: tpTypeTransaction['typeTransaction']
}


const CardGraphic:FC<CardGraphicProps> = ({typeTransaction}) => {

    const navigate = useNavigate()

    const { token } = useContext(GlobalContext)


    useEffect(()=>{
        if(token){

            fetchDefault('http://localhost:3000/api/transaction', {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    'token': token
                },
            },
                (res:any) => {
                    console.log(res)
    
                 }, () => { }
            )
        }
        
    }, [token])
   

    const handlerNavigate = (arg:string)=>{
        navigate(arg, {state: typeTransaction})
    }

    return <div className="xs:flex xs:items-center xs:justify-center p-8 bg-white shadow h-max xs:w-max xs:rounded-xl xs:line-clamp-1 2xl:w-2/5 relative">
        <GraphicDonuts />
        <FloatBtn handlerNavigate={()=>handlerNavigate('/home/transaction')}/>
    </div>
}

export default CardGraphic