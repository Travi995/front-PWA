import { ButtonDemo } from "@/components/buttonShadCn/buttonShadCn"
import Category from "@/components/categoryStyle/categoryStyle"
import { GlobalContext } from "@/context/globalContext"
import { typeCoin } from "@/hooks/typeCoin/typeCoin"
import { fetchDefault } from "@/services/fetchDefault"
import { tpMoney } from "@/types/tpMoney"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import BtnAddCategory from "@/components/btnAddCategory/btnAddCategory"
import { GrFormPrevious } from "react-icons/gr";
import SelectMoney from "@/components/selectMoney/selectMoney"




const Transaction = () => {

    const navigate = useNavigate()
    const [dataCategory, setDataCategory] = useState<any[]>([])
    const [showCategories, setShowCategories] = useState<boolean>(false)



    const { token, id } = useContext(GlobalContext)

    const [dataMoney, setDataMoney] = useState<tpMoney>({
        id:'',
        type:'gastos',
        typeCoin:'',
        value:0
    })

    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const handlerNavigatePrev = () => {
        navigate(-1)
    }

    const handlerChange = (key: keyof tpMoney, arg: string) => {
        setDataMoney({ ...dataMoney, [key]: arg })
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
        setDataMoney({ ...dataMoney, "id": String(id) })
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
                body: JSON.stringify(dataMoney)
            },
            () => { setShowCategories(!showCategories) },
            (error) => { console.log(error) }
        )
    }



    return <div className="w-full h-max flex flex-col  items-center  xs:px-20 p-8 relative">
        <GrFormPrevious className='absolute top-10 xs:left-5 xl:left-16 text-3xl text-black hover:cursor-pointer' onClick={handlerNavigatePrev}/>

        <div className="flex">
            <SelectMoney handlerChange={(key: keyof tpMoney, arg: string) => handlerChange(key, arg)} dataMoney={dataMoney.typeCoin} />
        </div>
        <div className="w-full flex flex-col mt-20">
            <h1 className="text-gray-500">Categorías</h1>
            <div className="w-full my-8 justify-between flex gap-10 mb-[7.2rem]">
                {dataCategory?.map((item, index) => {
                    return <Category key={index} label={item.label} icon={item.icon} color={item.color} />

                })}
                <BtnAddCategory handlerNavigate={() => handlerNavigate('/home/categories')} />
            </div>

        </div>
        <ButtonDemo label="Agregar" handlerSubmit={handlerSubmit} />


    </div>
}

export default Transaction