import CardCategory from "@/components/cardCategory/cardCategory"
import CardGraphic from "@/components/cardGraphic/cardGraphic"
import { useLocation } from "react-router-dom"



const Bills = () => {

    const location = useLocation().state

    const {typeTransaction} = location
   
 
    return <div className="w-screen h-max flex items-center xs:mt-20 xs:flex-col xs:gap-10 2xl:flex-row 2xl:justify-around 2xl:gap-2">
        <CardGraphic typeTransaction={typeTransaction}/>
        <CardCategory/>
    </div>
}

export default Bills