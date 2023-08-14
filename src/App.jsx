import React, { useEffect, useState } from 'react'
import MainRoutes from './routes/MainRoutes'
import UserStorage from './context/userStore'
import { useAxios } from 'frontend-essentials'
import { CHECK_CONNECTION_URL } from './routes/urls'
import Loading from './sherdComponents/loading/Loading'
import { axios } from 'frontend-essentials'
import { useNavigate } from 'react-router-dom'



const App = () => {
    const [user, setUser] = useState(null)
    const nav = useNavigate()
    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response.status === 401) {
                setUser(null)
                nav("/login")
            }
            return Promise.reject(error);
        }
    );

    const { loading } = useAxios({
        url: CHECK_CONNECTION_URL,
        method: "get",
        onSuccess: (({ data: { user } }) => setUser(user))
    })
    if (loading) return <Loading />
    return (
        <UserStorage.Provider value={{ user, setUser }} >
            <MainRoutes />
        </UserStorage.Provider>
    )
}

export default App