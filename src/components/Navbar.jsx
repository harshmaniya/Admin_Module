import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

const Navbar = () => {
    const navigate = useNavigate();
    const homeClick = () => {
        navigate('/home');
    }

    const logout = () => {
        Cookies.remove('res_id_admin');
        window.location.reload();
    }

    const profileClick = () => {
        navigate('/profile');
    }
    return (
        <header className="nav_admin container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Admin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav nav-link" style={{border: "none", textDecoration: "none"}}
                                        onClick={homeClick}>Home
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav nav-link" style={{border: "none", textDecoration: "none"}}
                                        onClick={profileClick}>Profile
                                </button>
                            </li>
                        </ul>
                        <button className="btn btn-outline-success" type="submit" onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;