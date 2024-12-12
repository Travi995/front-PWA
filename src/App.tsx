
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./views/home/home"
import { useContext, useEffect } from "react"
import { GlobalContext } from "./context/globalContext"
import Bills from "./views/bills/bills"
import Income from "./views/income/income"
import Transaction from "./views/transaction/transaction"
import Categories from "./views/categories/categories"
import Auth from "./views/auth/auth"
import Login from "./views/login/login"
import Register from "./views/register/register"


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
      <Route path='/' element={<Auth />}>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Route>

      <Route path='home' element={<Home />}>
        <Route path='bills' element={<Bills />}></Route>
        <Route path='income' element={<Income />}></Route>
        <Route path='transaction' element={<Transaction/>}></Route>
        <Route path='categories' element={<Categories/>}></Route>
      </Route>

      {/* <Route path='admin' element={}></Route> */}
    </Routes>

  </div>
}

export default App