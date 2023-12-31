import React, { useContext } from 'react'
import style from "./NavBarUser.module.css"
import { Link, Outlet } from "react-router-dom"



const NavBarUser = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary ${style.nav}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">AUTH</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/logout">LOGOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/myConnections">MY CONNECTIONS</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBarUser