import React from 'react'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctor'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import MyAccount from '../Dashboard/user-account/MyAccount'
import Dashboard from '../Dashboard/doctor-account/Dashboard'
import CheckoutSuccess from '../pages/CheckoutSuccess'

import {Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'


const Routers = () => {
  return <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/Home' element={<Home/>} />
     <Route path='/doctors' element={<Doctors/>} />
     <Route path='/doctors/:id' element={<DoctorDetails/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/register' element={<Signup/>} />
     <Route path='/contact' element={<Contact/>} />
     <Route path='/services' element={<Services/>} />
     <Route path='/checkout-success' element={<CheckoutSuccess/>} />

     <Route path='/users/profile/me' element={ <ProtectedRoute allowedRoles={['patient']}> <MyAccount/> </ProtectedRoute> } />
     <Route path='/doctors/profile/me' element={ <ProtectedRoute allowedRoles={['doctor']}> <Dashboard/> </ProtectedRoute> } />
    </Routes>
}

export default Routers;