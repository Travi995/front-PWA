import CardCategory from "@/components/cardCategory/cardCategory"
import CardMe from "@/components/cardMe/cardMe"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"



const Gastos = () => {

    const location = useLocation()


    useEffect(()=>{
        console.log(location.state)
    },[location.pathname])


    
    return <div className="w-screen h-max flex items-center xs:mt-20 xs:flex-col xs:gap-10 2xl:flex-row 2xl:justify-around 2xl:gap-2">
        <CardMe/>
        <CardCategory/>
    </div>
}

export default Gastos