import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBarUser from '../components/nav/NavBarUser'
import Signup from '../components/froms/Signup'
import Login from '../components/froms/Login'
import Home from '../components/pages/Home'
import Logout from '../components/auth/Logout'
import UserStorage from '../context/userStore'
import { If } from 'mg-js'

const MainRoutes = () => {
    const { user } = useContext(UserStorage)

    return (
        <>
            <If condition={user}>
                <Routes>
                    <Route path='/' element={<NavBarUser />}>
                        <Route path='/' element={<Home />} />
                        <Route path='logout' element={<Logout />} />
                        <Route path='*' element={<h1 className="text-center">404 not found</h1>} />
                    </Route>
                </Routes >
            </If>
            <If condition={!user}>
                <Routes>
                    <Route path='/' element={<NavBarUser />}>
                        <Route path='/' element={<Home />} />
                        <Route path='signup' element={<Signup />} />
                        <Route path='login' element={<Login />} />
                        <Route path='*' element={<h1 className="text-center">404 not found</h1>} />
                    </Route>
                </Routes>
            </If>
        </>
    )
}

export default MainRoutes