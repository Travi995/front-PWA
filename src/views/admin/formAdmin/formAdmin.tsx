import FormAddUserAdmin from "@/components/formAddUserAdmin/formAddUserAdmin"
import { GlobalContext } from "@/context/globalContext"
import { fetchDefault } from "@/services/fetchDefault"
import { tpAddUser } from "@/types/tpAddUser"
import { useContext, useState } from "react"



const FormAdmin = () => {

    const { token} = useContext(GlobalContext)


    const [addUser, setAddUser] = useState<tpAddUser>({
        name: '',
        email: '',
        password: ''
    })

    const handlerChange = (key: keyof tpAddUser, arg: string) => {
        setAddUser({ ...addUser, [key]: arg })
    }

    const handlerSubmit = () => {
        fetchDefault('http://localhost:3000/api/user', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify(addUser)
        },
            () => {
                
             }
            , () => { }
        )
    }


return <div className="w-full h-full flex justify-center items-center">
    <FormAddUserAdmin handlerChange={handlerChange} handlerSubmit={handlerSubmit} />
</div>
}

export default FormAdmin