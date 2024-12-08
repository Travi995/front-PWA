
import { Route, Routes } from "react-router-dom"
import Login from "./views/login/login"
import Sesion from "./views/sesion/sesion"
import Register from "./views/register/register"
import Home from "./views/home/home"
import Ingresos from "./views/ingresos/ingresos"
import Inicio from "./views/inicio/inicio"





const App = () => {


  return <div className="w-screen h-screen flex justify-center items-center bg-bg-login ">
    <Routes>
      <Route path='/' element={<Sesion />}>
        <Route path='login' element={<Login />}></Route> 
        <Route path='register' element={<Register/>}></Route>
        <Route path='home' element={<Home />}>
          <Route path='inicio' element={<Inicio />}></Route>
          <Route path='ingresos' element={<Ingresos />}></Route>
          {/* <Route path='estadisticas' element={<Estadisticas />}></Route> */}
          </Route>
      </Route>
    </Routes>

  </div>
}

export default App