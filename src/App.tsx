
import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./views/login/login"
import Sesion from "./views/sesion/sesion"
import Register from "./views/register/register"
import Home from "./views/home/home"
import Ingresos from "./views/ingresos/ingresos"
import Gastos from "./views/gastos/gastos"
import Transaccion from "./views/transaction/transaction"
import AddCategory from "./views/addCategory/addCategory"
import { useContext, useEffect } from "react"
import { GlobalContext } from "./context/globalContext"


const App = () => {
  const navigate = useNavigate()
  const {setToken} = useContext(GlobalContext) 

  useEffect(() => {
    const element = localStorage.getItem('token')
      
    if(element ){
      setToken(element)
      navigate('/home')
    }else{

      navigate('/login')

    }
    
  },[])

  return <div className="relative w-screen h-screen flex  bg-bg-login overflow-x-hidden">
    <Routes>
      <Route path='/' element={<Sesion />}>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Route>

      <Route path='home' element={<Home />}>
        <Route path='bills' element={<Gastos />}></Route>
        <Route path='income' element={<Ingresos />}></Route>
        <Route path='transaction' element={<Transaccion/>}></Route>
        <Route path='category' element={<AddCategory/>}></Route>
      </Route>

    </Routes>

  </div>
}

export default App