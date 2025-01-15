import { InputText } from 'primereact/inputtext';
import { ButtonDemo } from '../buttonShadCn/buttonShadCn';
import { Password } from 'primereact/password';
import { GrFormPrevious } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { tpAddUser } from '@/types/tpAddUser';
import { FC } from 'react';


interface ItfFormAddUserAdmin {
    handlerChange: (key: keyof tpAddUser, arg:string)=>void
    handlerSubmit: ()=>void
}


const FormAddUserAdmin:FC<ItfFormAddUserAdmin> = ({handlerChange, handlerSubmit}) => {

    const navigate = useNavigate()

    const handlerNavigate = ()=>{
        navigate(-1)
    }

    return <form className='flex flex-col w-96 items-center justify-center gap-8 bg-white p-10 rounded-xl shadow relative'>
        <GrFormPrevious className='xs:absolute xs:left-9 top-10 sm:left-16 text-3xl text-[#B3B6BC] hover:cursor-pointer' onClick={handlerNavigate}/>
        <h1 className='text-2xl text-gray-600 font-extralight'>Add a new user</h1>
        <div className='flex flex-col gap-4 mb-2'>
            <InputText className='p-2 bg-transparent border-2 border-gray-200' keyfilter="alpha" placeholder='Name' onChange={(e)=>handlerChange('name', e.target.value)}/>
            <InputText className='p-2 bg-transparent border-2 border-gray-200' keyfilter="email" placeholder='Email' onChange={(e)=>handlerChange('email', e.target.value)}/>
            <Password  inputStyle={{ padding: '0.5rem', width: '100%', background: 'transparent', border: '2px solid #E5E7EB'}} placeholder='Password' feedback={false} tabIndex={1} toggleMask onChange={(e)=>handlerChange('password', e.target.value)}/>
        </div>
        <ButtonDemo label='Add' handlerSubmit={handlerSubmit}/>

    </form>
}

export default FormAddUserAdmin