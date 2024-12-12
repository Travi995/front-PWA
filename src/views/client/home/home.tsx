import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../../../components/navbar/navbar"
import { useEffect, useState } from "react"
import { tpTypeTransaction } from "@/types/tpTypeTransaction"


const Home = () => {

    const navigate = useNavigate()


    const [typeTransaction, setTypeTransaction] = useState<tpTypeTransaction ['typeTransaction']>( 'gastos')

    
    useEffect(()=>{
        const element  = {
            "typeTransaction": typeTransaction
        }
        if(typeTransaction==='gastos'){
            navigate('/home/bills', {
                state: element
                
            })
        }else{
            navigate('/home/income',{
                state: element
            })
        }
    }, [typeTransaction])

    return <div className="w-screen h-full bg-gray-200">
        <Navbar typeTransaction={typeTransaction} setTypeTransaction={setTypeTransaction}/>
        <Outlet />
    </div>
}

export default Home