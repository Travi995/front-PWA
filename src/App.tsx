
import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./views/client/home/home"
import { useContext, useEffect } from "react"
import { GlobalContext } from "./context/globalContext"
import Bills from "./views/client/bills/bills"
import Income from "./views/client/income/income"
import Transaction from "./views/client/transaction/transaction"
import Categories from "./views/client/categories/categories"
import Auth from "./views/auth/auth/auth"
import Login from "./views/auth/login/login"
import Register from "./views/auth/register/register"
import Admin from "./views/admin/admin/admin"
import HomeAdmin from "./views/admin/adminHome/adminHome"
import FormAddUser from "./views/admin/formAdmin/formAdmin"


const App = () => {
  const navigate = useNavigate()
  const { setToken } = useContext(GlobalContext)

  useEffect(() => {
    const element = localStorage.getItem('token')

    if (element) {
      setToken(element)
      navigate('/home')
    } else {

      navigate('/login')

    }

  }, [])

  return <div className="relative w-screen h-screen flex  bg-bg-login overflow-x-hidden">
    <Routes>
      {/* <Route path='/' element={<Auth />}>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Route> */}

      <Route path='home' element={<Home />}>
        <Route path='bills' element={<Bills />}></Route>
        <Route path='income' element={<Income />}></Route>
        <Route path='transaction' element={<Transaction />}></Route>
        <Route path='categories' element={<Categories />}></Route>
      </Route>

      <Route path='admin' element={<Admin />}>
        <Route path='adminHome' element={<HomeAdmin />}></Route>
        <Route path='formAddUser' element={<FormAddUser />}></Route>
      </Route>
    </Routes>

  </div>
}

export default App