import { InputText } from 'primereact/inputtext';
import { ButtonDemo } from '../buttonShadCn/buttonShadCn';
import { Password } from 'primereact/password';
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';



const FormAddUserAdmin = () => {

    const navigate = useNavigate()

    const handlerNavigate = ()=>{
        navigate(-1)
    }

    return <form className='flex flex-col w-96 items-center justify-center gap-8 bg-white p-10 rounded-xl shadow relative'>
        <GrFormPrevious className='xs:absolute xs:left-9 top-10 sm:left-16 text-3xl text-[#B3B6BC] hover:cursor-pointer' onClick={handlerNavigate}/>
        <h1 className='text-2xl text-gray-600 font-extralight'>Add a new user</h1>
        <div className='flex flex-col gap-4 mb-2'>
            <InputText className='p-2 bg-transparent border-2 border-gray-200' keyfilter="alpha" placeholder='Name'/>
            <InputText className='p-2 bg-transparent border-2 border-gray-200' keyfilter="email" placeholder='Email'/>
            <Password  inputStyle={{ padding: '0.5rem', width: '100%', background: 'transparent', border: '2px solid #E5E7EB'}} placeholder='Password' feedback={false} tabIndex={1} toggleMask />
        </div>
        <ButtonDemo label='Add' />

    </form>
}

export default FormAddUserAdmin