import { ButtonDemo } from "@/components/buttonShadCn/buttonShadCn"
import { showAlert } from "@/helpers/showAlert"
import { user } from "@/hooks/users/users"
import { fetchDefault } from "@/services/fetchDefault"
import { tpDataUsersRegister } from "@/types/tpDataUsers"
import { SyntheticEvent } from "react"
import { useNavigate } from "react-router-dom"
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';



const Register = () => {
    const navigate = useNavigate()


    const { dataRegister, setDataRegister } = user()
    

    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const handlerChange = (key: keyof tpDataUsersRegister, arg: string) => {
        setDataRegister({ ...dataRegister, [key]: arg })
        console.log(dataRegister)
    }

    const handlerSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        const allInputsValid = Object.keys(dataRegister).every((item: string) => {
            const key = item as keyof tpDataUsersRegister;

            return dataRegister[key]; // Retorna true si el campo está validado
        });


        if (allInputsValid) {
            fetchDefault('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataRegister),
            }, () => {
                showAlert({ type: 'success', title: 'Registro exitoso', description: '' })

                navigate('/login');
            }, () => {
                showAlert({ type: 'error', title: 'Error', description: '' })
            }
            )
        }

        
    }

    

    return <form className="bg-white w-[30rem] h-max rounded-3xl flex flex-col items-center p-10 gap-4" onSubmit={handlerSubmit}>
        <h1 className="text-3xl font-bold w-[15rem] text-center">Bienvenido a CG</h1>
        <div className='flex flex-col w-[90%] gap-4 py-8'>
            <InputText className='p-2 bg-transparent border-2 border-gray-200 text-gray-500' keyfilter="alpha" placeholder='Name' onChange={(e)=>handlerChange('name',e.target.value)}/>
            <InputText className='p-2 bg-transparent border-2 border-gray-200 text-gray-500' keyfilter="email" placeholder='Email' onChange={(e)=>handlerChange('email',e.target.value)}/>
            <Password  inputStyle={{ padding: '0.5rem', width: '100%', background: 'transparent', border: '2px solid #E5E7EB', color: '#6B7280'}} placeholder='Password' feedback={false} tabIndex={1} toggleMask onChange={(e)=>handlerChange('password',e.target.value)}/>
            <Password  inputStyle={{ padding: '0.5rem', width: '100%', background: 'transparent', border: '2px solid #E5E7EB', color: '#6B7280'}} placeholder='Confirm your password' feedback={false} tabIndex={1} toggleMask onChange={(e)=>handlerChange('confirmPassword',e.target.value)}/>

        </div>

        <div className="flex items-center w-full justify-around text-gray-500 text-xs gap-2 hover:cursor-pointer mb-8">
            <span>Ya tienes cuenta?</span>
            <span className="text-blue-400 hover:text-blue-500" onClick={() => handlerNavigate('/login')}>Inicia sesión aquí</span>
        </div>
        <ButtonDemo label='Enviar' />



    </form>
}

export default Register