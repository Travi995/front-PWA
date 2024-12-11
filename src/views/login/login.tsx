
import { useNavigate } from 'react-router-dom';
import { InputDemo } from '@/components/inputShadCn/inputShadCn';
import { ButtonDemo } from '@/components/buttonShadCn/buttonShadCn';
import { user } from '@/hooks/users/users';
import { tpDataUsersLogin } from '@/types/tpDataUsers';
import { SyntheticEvent, useContext } from 'react';
import { fetchDefault } from '@/services/fetchDefault';
import { showAlert } from '@/helpers/showAlert';
import { GlobalContext } from '@/context/globalContext';
import { convertJWT } from '@/services/convertJWT';






const Login = () => {
    const navigate = useNavigate()

    const {setToken,setId} = useContext(GlobalContext)

    const handlerNavigate = (arg: string) => {
        navigate(arg)
    }

    const { dataLogin, setDataLogin } = user()

    const handlerChange = (key: keyof tpDataUsersLogin, arg:string)=>{
        setDataLogin({...dataLogin, [key]:arg})
    }

    const handlerSubmit = (event: SyntheticEvent) => {
        event.preventDefault()

        const allInputsValid = Object.keys(dataLogin).every((item: string) => {
            const key = item as keyof tpDataUsersLogin;

            return dataLogin[key]; // Retorna true si el campo está validado
        });


        if (allInputsValid) {
            fetchDefault('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataLogin),
            }, (res:Partial<{token:string}>) => {
                showAlert({ type: 'success', title: 'Login exitoso', description: '' })
                if(res.token){
                    setId(convertJWT(res.token).id)
                    setToken(res.token)
                    localStorage.setItem('token',res.token)
                }
                navigate('/home/bills');
            }, () => {
                showAlert({ type: 'error', title: 'Error', description: '' })
            }
            )
        }

    }


    return <form className="bg-white w-[30rem] h-max rounded-3xl flex flex-col items-center p-10 gap-4" onSubmit={handlerSubmit}>
        <h1 className="text-3xl font-bold w-[15rem] text-center">Bienvenido a CG</h1>
        <div className='flex flex-col w-[90%] gap-4 py-8'>
            <InputDemo type='email' placeholder='Email' handlerChange={(arg)=>handlerChange('email',arg)}/>
            <InputDemo type='password' placeholder='Password' handlerChange={(arg)=>handlerChange('password',arg)}/>
        </div>
        <div className="flex items-center w-full justify-around text-gray-500 text-xs gap-2 hover:cursor-pointer mb-8">
            <span>Ya tienes cuenta?</span>
            <span className="text-blue-400 hover:text-blue-500" onClick={() => handlerNavigate('/register')}>Regístrate aquí</span>
        </div>
        <ButtonDemo label='Enviar' />






    </form>
}

export default Login