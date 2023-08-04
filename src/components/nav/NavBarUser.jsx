import React from 'react'
import style from "./NavBarUser.module.css"
import { Link, Outlet } from "react-router-dom"

const NavBarUser = () => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg bg-body-tertiary ${style.nav}`}
            >
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <Link to={"/"} className="nav-link active text-white" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link text-white" href="#">login</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link  text-white" aria-disabled="true">signup</Link>
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