import { ButtonDemo } from "@/components/buttonShadCn/buttonShadCn"
import Category from "@/components/category/category"
import NewCategory from "@/components/newCategory/newCategory"
import { SelectDemo } from "@/components/selectShadCn/selectShadCn"
import { GlobalContext } from "@/context/globalContext"
import { categories } from "@/enums/categories"
import { typeCoin } from "@/hooks/typeCoin/typeCoin"
import { fetchDefault } from "@/services/fetchDefault"
import { tpMoney } from "@/types/tpMoney"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"



const Transaction = () => {

    const {token} = useContext(GlobalContext)

    const navigate = useNavigate()

    const {dataCoin, setDataCoin} = typeCoin()

    const handlerNavigate = (arg:string)=>{
        navigate(arg)
    }

    const handlerChange = (key:keyof tpMoney, arg:string)=>{
        setDataCoin({...dataCoin, [key]:arg})
    }

    const handlerSubmit = ()=>{
        fetchDefault('http://localhost:3000/api/money', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify(dataCoin)
            }, 
            (res)=>{console.log(res)},
            (error)=>{ console.log(error)}
        )
    }



    return <div className="w-full h-max flex flex-col  items-center xs:my-20 xs:px-20">
        <div className="flex">
            <input className="w-32 bg-transparent border-b-2 border-black focus:outline-none text-center text-2xl text-gray-500" onChange={(e)=>handlerChange('value',e.target.value)}></input>
            <SelectDemo handlerChange={(arg:string)=>handlerChange('typeCoin',arg)}/>
        </div>
        <div className="w-full flex flex-col mt-8">
            <h1 className="text-gray-500">Categorías</h1>
            <div className="w-full mt-8 justify-between flex">
                {categories.map((item, index) => {
                    return <Category key={index} label={item.nombre} icon={item.icon} color={item.color} />

                })}
                <NewCategory handlerNavigate={()=>handlerNavigate('/home/category')}/>
            </div>

        </div>
        <ButtonDemo label="Add" handlerSubmit={handlerSubmit}/>


    </div>
}

export default Transaction