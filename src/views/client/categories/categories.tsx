import FormCategory from "@/components/formCategory/formCategory"
import { useNavigate } from "react-router-dom"
import { GrFormPrevious } from "react-icons/gr";




const Categories = ()=>{

    const navigate = useNavigate()

    const handlerNavigate = ()=>{
        navigate(-1)
    }


    return <div className="w-full h-max flex justify-center relative ">
        <GrFormPrevious className='absolute top-10 left-16 text-3xl text-black hover:cursor-pointer' onClick={handlerNavigate}/>
        <FormCategory/>
    </div>
}

export default Categories