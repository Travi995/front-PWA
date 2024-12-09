import Category from "@/components/category/category"
import NewCategory from "@/components/newCategory/newCategory"
import { SelectDemo } from "@/components/selectShadCn/selectShadCn"
import { categories } from "@/enums/categories"
import { validateMoney } from "@/validations/transaction"
import { useNavigate } from "react-router-dom"



const Transaction = () => {

    const navigate = useNavigate()

    const handlerNavigate = (arg:string)=>{
        navigate(arg)
    }

    return <div className="w-full h-max flex flex-col  items-center xs:my-20 xs:px-20">
        <div className="flex">
            <input className="w-32 bg-transparent border-b-2 border-black focus:outline-none text-center text-2xl text-gray-500" onChange={(e)=>validateMoney(e.target.value)}></input>
            <SelectDemo/>
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


    </div>
}

export default Transaction