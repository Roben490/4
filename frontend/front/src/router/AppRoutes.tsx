import { Route, Routes } from 'react-router-dom'
import { Login } from '../components/Home/Login/Login'
import { Register } from '../components/Home/Register/Register'
import { Home } from '../components/Home/Home'
import EditDriver from '../components/Home/CRUD/DriverCRUD/EditDriver'
import { AddDriver } from '../components/Home/CRUD/DriverCRUD/AddDriver'
import { AddBus } from '../components/Home/CRUD/BusesCRUD/AddBus'
import { AddLines } from '../components/Home/CRUD/LinesCRUD/AddLines'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/editDriver/:id' element={<EditDriver/>}/>
        <Route path='/addDriver' element={<AddDriver/>}/>
        <Route path='/addBus' element={<AddBus/>}/>
        <Route path='/addLines' element={<AddLines/>}/>

    </Routes>
  )
}
