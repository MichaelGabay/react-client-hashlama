import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBarUser from '../components/nav/NavBarUser'
import Signup from '../components/froms/Signup'
import Login from '../components/froms/Login'
import Home from '../components/pages/Home'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<NavBarUser />}>
                <Route path='/' element={<Home />} />
                <Route path='signup' element={<Signup />} />
                <Route path='login' element={<Login />} />
            </Route>
        </Routes>
    )
}

export default MainRoutes