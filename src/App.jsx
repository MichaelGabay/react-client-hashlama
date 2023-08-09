import React, { useEffect, useState } from 'react'
import MainRoutes from './routes/MainRoutes'
import UserStorage from './context/userStore'
import { useAxios } from 'frontend-essentials'
import { CHECK_CONNECTION_URL } from './routes/urls'
import Loading from './sherdComponents/loading/Loading'

const App = () => {
    const [user, setUser] = useState(null)
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