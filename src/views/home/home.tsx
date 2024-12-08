import { Outlet } from "react-router-dom"
import Navbar from "../../components/navbar/navbar"


const Home = () => {
    return <div className="w-screen h-screen bg-white ">
        <Navbar/>
        <Outlet />
    </div>
}

export default Home