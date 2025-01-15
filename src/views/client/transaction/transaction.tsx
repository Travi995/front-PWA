import { ButtonDemo } from "@/components/buttonShadCn/buttonShadCn"
import Category from "@/components/categoryStyle/categoryStyle"
import { GlobalContext } from "@/context/globalContext"
import { fetchDefault } from "@/services/fetchDefault"
import { tpMoney } from "@/types/tpMoney"
import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import BtnAddCategory from "@/components/btnAddCategory/btnAddCategory"
import { GrFormPrevious } from "react-icons/gr";
import SelectMoney from "@/components/selectMoney/selectMoney"
import { tpTransaction } from "@/types/tpTransaction"
import { tpIdCategory } from "@/types/tpCategory"




const Transaction = () => {

    const navigate = useNavigate()
    

    //Muestra la lista de categorias creadas
    const [dataCategory, setDataCategory] = useState<tpIdCategory[]>([])
    const [showCategories, setShowCategories] = useState<boolean>(false)
    const [idCategory, setIdCategory] = useState<number>(0)

    const typeTransaction = useLocation().state

    const { token, id,refreshUser,setRefreshUser } = useContext(GlobalContext)

    const [dataMoney, setDataMoney] = useState<tpMoney>({
        id: '',
        type: typeTransaction,
        typeCoin: { name: '', code: '' },
        value: 0
    })

    const [transaction, setTransaction] = useState<tpTransaction>({
        amount: 0,
        currency: { name: '', code: '' },
        category: 0,
        typeTransaction: typeTransaction
    })

    useEffect(() => {
        setTransaction({
            ...transaction, ['amount']: dataMoney.value,
            ['currency']: dataMoney.typeCoin,
            ['category']: idCategory,
            ['typeTransaction']: dataMoney.type
        })
    }, [dataMoney, dataCategory])

    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const handlerId = (id: number) => {
        setIdCategory(id)
    }

    const handlerNavigatePrev = () => {
        navigate(-1)
    }

    const handlerChange = (key: keyof tpMoney, arg: string) => {
        setDataMoney({ ...dataMoney, [key]: arg })
    }

    const getCategories = () => {

        fetchDefault('http://localhost:3000/api/categories', {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'token': token
            },
        },
            (res: any) => {
                const element = res as Object as Partial<{ data: tpIdCategory[] }>

                if (element.data) {
                    setDataCategory(element.data)
                }
            }, () => { }
        )

    }

    useEffect(() => {
        setDataMoney({ ...dataMoney, "id": String(id) })
    }, [])

    useEffect(() => {
        getCategories()
    }, [showCategories])

   

    const handlerSubmit = () => {

        const dataServer = {

            // "id": dataMoney.id,
            "currency": dataMoney.typeCoin.name,
            // "value": dataMoney.value,
            'category': idCategory,
            'typeTransaction': dataMoney.type,
            'amount': dataMoney.value,

        }

        fetchDefault('http://localhost:3000/api/transaction',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify(dataServer)
            },
            () => { 
                setRefreshUser(!refreshUser)
                setShowCategories(!showCategories) },
            (error) => { console.log(error) }
        )
    }



    return <div className="w-full h-max flex flex-col  items-center  xs:px-20 p-8 relative">
        <GrFormPrevious className='absolute top-10 xs:left-5 xl:left-16 text-3xl text-black hover:cursor-pointer' onClick={handlerNavigatePrev} />

        <div className="flex">
            <SelectMoney handlerChange={(key: keyof tpMoney, arg: string) => handlerChange(key, arg)} dataMoney={dataMoney.typeCoin} />
        </div>
        <div className="w-full flex flex-col mt-20">
            <h1 className="text-gray-500">Categorías</h1>
            <div className="w-full my-8 justify-between flex gap-10 mb-[7.2rem]">
                {dataCategory?.map((item, index) => {
                    return <Category key={index} label={item.label} icon={item.icon} color={item.color} event={() => handlerId(item.id)} id={item.id} idCategory={idCategory} />

                })}
                <BtnAddCategory handlerNavigate={() => handlerNavigate('/home/categories')} />
            </div>

        </div>
        <ButtonDemo label="Agregar" handlerSubmit={handlerSubmit} />


    </div>
}

export default Transaction