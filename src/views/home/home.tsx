import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/navbar"


const Home = () => {
    return <div className="w-screen h-full bg-gray-200">
        <Navbar/>
        <Outlet />
    </div>
}

export default Home