import { ButtonDemo } from "@/components/buttonShadCn/buttonShadCn"
import Category from "@/components/categoryStyle/categoryStyle"
import { SelectDemo } from "@/components/selectShadCn/selectShadCn"
import { GlobalContext } from "@/context/globalContext"
import { typeCoin } from "@/hooks/typeCoin/typeCoin"
import { fetchDefault } from "@/services/fetchDefault"
import { tpMoney } from "@/types/tpMoney"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BtnAddCategory from "@/components/btnAddCategory/btnAddCategory"



const Transaction = () => {

    const navigate = useNavigate()
    const [dataCategory, setDataCategory] = useState<any[]>([])
    const [showCategories, setShowCategories] = useState<boolean>(false)



    const { token, id } = useContext(GlobalContext)
    const { dataCoin, setDataCoin } = typeCoin()



    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const handlerChange = (key: keyof tpMoney, arg: string) => {
        setDataCoin({ ...dataCoin, [key]: arg })
    }

    const getCategories = () => {

        fetchDefault('http://localhost:3000/api/categories',  {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'token': token
            },
        },
            (res) => {
               const element  = res as Object as Partial<{data:[]}>
                
                if(element.data){
                    setDataCategory(element.data)
                }
            }, () => { }
        )

    }

    console.log(dataCategory)
    useEffect(() => {
        setDataCoin({ ...dataCoin, "id": String(id) })
    }, [])

    useEffect(()=>{
        getCategories()
    }, [showCategories])

    const handlerSubmit = () => {

        fetchDefault('http://localhost:3000/api/money',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify(dataCoin)
            },
            () => { setShowCategories(!showCategories) },
            (error) => { console.log(error) }
        )
    }



    return <div className="w-full h-max flex flex-col  items-center xs:my-20 xs:px-20">
        <div className="flex">
            <input className="w-32 bg-transparent border-b-2 border-black focus:outline-none text-center text-2xl text-gray-500" onChange={(e) => handlerChange('value', e.target.value)}></input>
            <SelectDemo handlerChange={(arg: string) => handlerChange('typeCoin', arg)} />
        </div>
        <div className="w-full flex flex-col mt-8">
            <h1 className="text-gray-500">Categorías</h1>
            <div className="w-full my-8 justify-between flex gap-10 mb-8">
                {dataCategory?.map((item, index) => {
                    return <Category key={index} label={item.label} icon={item.icon} color={item.color} />

                })}
                <BtnAddCategory handlerNavigate={() => handlerNavigate('/home/categories')} />
            </div>

        </div>
        <ButtonDemo label="Add" handlerSubmit={handlerSubmit} />


    </div>
}

export default Transaction