import BasicDemo, { User } from "@/components/dataTable/dataTable"
import { GlobalContext } from "@/context/globalContext"
import { fetchDefault } from "@/services/fetchDefault"
import { useContext, useEffect, useState } from "react"





const HomeAdmin = ()=>{


    const { token} = useContext(GlobalContext)

    const [refreshUser, setRefreshUser] = useState<boolean>(false)

    const [dataUser, setDataUser] = useState<User[]>([])



    useEffect(()=>{
        fetchDefault('http://localhost:3000/api/user', {
            method: 'GET',
            headers: {
                // 'Content-Type': 'application/json',
                'token': token
            },
        },
            (res:any) => { setDataUser(res.data) }, () => { }
        )

    }, [refreshUser])

    return <div className="w-full h-full flex justify-center items-center">
        <BasicDemo data={dataUser} refreshUser={refreshUser} setRefreshUser={setRefreshUser}/>
    </div>
}

export default HomeAdmin