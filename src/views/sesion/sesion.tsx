import { Outlet } from "react-router-dom"



const Sesion = () => {
    return <div className="w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/src/assets/images/pexels-olia-danilevich-5466785.jpg')` }}>
        <div className="absolute inset-0 bg-black opacity-50 "></div>

        <div className="relative z-1">
            <Outlet />
        </div>
    </div>
}

export default Sesion