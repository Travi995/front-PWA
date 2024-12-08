import { ButtonDemo } from "@/components/buttonShadCn/buttonShadCn"
import { InputDemo } from "@/components/inputShadCn/inputShadCn"
import { user } from "@/hooks/users/users"
import { tpDataUsersRegister } from "@/types/tpDataUsers"
import { validateText } from "@/validations/validateInputsSesion"
import { SyntheticEvent } from "react"
import { useNavigate } from "react-router-dom"



const Register = () => {
    const navigate = useNavigate()

    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const { dataRegister, setDataRegister } = user()

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
            navigate('/');
        }

    }

    return <form className="bg-white w-[30rem] h-max rounded-3xl flex flex-col items-center p-10 gap-4" onSubmit={handlerSubmit}>
        <h1 className="text-3xl font-bold w-[15rem] text-center">Bienvenido a CG</h1>
        <div className='flex flex-col w-[90%] gap-4 py-8'>
            <InputDemo type='text' placeholder='Name' handlerChange={(arg) => handlerChange('name', arg)}/>
            <InputDemo type='email' placeholder='Email' handlerChange={(arg) => handlerChange('email', arg)} />
            <InputDemo type='password' placeholder='Password' handlerChange={(arg) => handlerChange('password', arg)} />
            <InputDemo type='password' placeholder='Confirm your password' handlerChange={(arg) => handlerChange('confirmPassword', arg)} />
        </div>

        <div className="flex items-center w-full justify-around text-gray-500 text-xs gap-2 hover:cursor-pointer mb-8">
            <span>Ya tienes cuenta?</span>
            <span className="text-blue-400 hover:text-blue-500" onClick={() => handlerNavigate('/login')}>Inicia sesión aquí</span>
        </div>
        <ButtonDemo label='Enviar' />



    </form>
}

export default Register