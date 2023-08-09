import { useAxios } from 'frontend-essentials'
import React, { useContext } from 'react'
import { LOGOUT_URL } from '../../routes/urls'
import { useNavigate } from 'react-router-dom'
import Loading from '../../sherdComponents/loading/Loading'
import UserStorage from '../../context/userStore'

const Logout = () => {
    const { setUser } = useContext(UserStorage);
    const nav = useNavigate()
    useAxios({
        method: 'post',
        url: LOGOUT_URL,
        onSuccess: () => {
            setUser(null)
            nav("/")
        },
    })
    return (
        <Loading />
    )
}

export default Logout