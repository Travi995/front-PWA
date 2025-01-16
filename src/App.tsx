
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
import { convertJWT } from "./services/convertJWT"


const App = () => {
	const { token, setToken } = useContext(GlobalContext)
  const navigate = useNavigate()

	useEffect(() => {
		const temp = sessionStorage.getItem('finanzas_userToken')
		if (temp) {
			setToken(temp)
      const rol:any= convertJWT(temp)
      console.log(rol)
      if(rol.role==='admin'){
        navigate('/admin/adminHome')
      }
    } else if (token) {
      sessionStorage.setItem('finanzas_userToken', token)
      const rol:any= convertJWT(token)
      if(rol.role==='admin'){
        navigate('/admin/adminHome')
      }
		}else{
      navigate('/login')
    }
		//redireccionar al login cuando kiera
  
	}, [token])

  return <div className="relative w-screen h-screen flex  bg-bg-login overflow-x-hidden">
    <Routes>
      <Route path='/' element={<Auth />}>
        <Route path='login' element={<Login />}></Route>
        <Route path='register' element={<Register />}></Route>
      </Route>

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