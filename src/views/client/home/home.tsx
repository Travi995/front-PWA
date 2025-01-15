import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../../../components/navbar/navbar"
import { useContext, useEffect, useState } from "react"
import { tpTypeTransaction } from "@/types/tpTypeTransaction"
import { convertJWT } from "@/services/convertJWT"
import { GlobalContext } from "@/context/globalContext"
import { fetchDefault } from "@/services/fetchDefault"



const Home = () => {

    const navigate = useNavigate()
    const [typeTransaction, setTypeTransaction] = useState<tpTypeTransaction ['typeTransaction']>( 'Gasto')
    const { token, setTotalMoney,refreshUser } = useContext(GlobalContext)

    
    useEffect(()=>{
        const element  = {
            "typeTransaction": typeTransaction
        }
        if(typeTransaction==='Gasto'){
            navigate('/home/bills', {
                state: element,
            })
        }else{
            navigate('/home/income',{
                state: element
            })
        }
    }, [typeTransaction])

    useEffect(() => {

        if (token) {
            const idUser = convertJWT(token).id
            
            fetchDefault(`http://localhost:3000/api/user/${idUser}`, {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    'token': token
                },
            },
                (res: any) => {
                    setTotalMoney(res.data.amount)
                }, () => { }

            )
        }

    }, [token,refreshUser])

    return <div className="w-screen h-full bg-gray-200">
        <Navbar typeTransaction={typeTransaction} setTypeTransaction={setTypeTransaction}/>
        <Outlet />
    </div>
}

export default Home