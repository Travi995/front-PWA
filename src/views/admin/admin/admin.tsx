import { Outlet } from "react-router-dom"



const Admin = ()=>{

    return <div className="w-screen h-full bg-gray-200">
    <Outlet />
</div>
}

export default Admin