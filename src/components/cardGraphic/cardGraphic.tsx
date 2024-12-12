import { useNavigate } from "react-router-dom"
import FloatBtn from "../floatBtn/floatBtn"
import { tpTypeTransaction } from "@/types/tpTypeTransaction"
import { FC } from "react"
import GraphicDonuts from "../graphicChartjs/graphic"

interface CardGraphicProps {
    typeTransaction: tpTypeTransaction['typeTransaction']
}


const CardGraphic:FC<CardGraphicProps> = ({typeTransaction}) => {

    const navigate = useNavigate()

    const handlerNavigate = (arg:string)=>{
        navigate(arg, {state: typeTransaction})
    }

    return <div className="bg-white shadow xs:w-[80%] xs:rounded-xl xs:line-clamp-1 2xl:w-2/5 h-96 relative">
        <GraphicDonuts/>
        <FloatBtn handlerNavigate={()=>handlerNavigate('/home/transaction')}/>
    </div>
}

export default CardGraphic