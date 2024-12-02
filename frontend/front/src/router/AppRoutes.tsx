import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/Home/Login/Login'
import { Register } from '../components/Home/Register/Register'
import { Home } from '../components/Home/Home'
import EditDriver from '../components/Home/DriverCRUD/EditDriver'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/editDriver/:id' element={<EditDriver/>}/>
        <Route path='/' element={<Home/>}/>

    </Routes>
  )
}
