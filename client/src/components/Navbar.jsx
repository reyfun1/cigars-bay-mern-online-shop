import React from 'react'
import logo from '../img/logo.png'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const history = useHistory()

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">
            <Link to="/" className="navbar-brand">CigarsBay</Link>

            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item ms-2 me-2">
                        <Link to="/search/all" className="nav-link">Cigars</Link>
                    </li>
                    <li className="nav-item ms-2 me-2">
                        <a href="#questions" className="nav-link">Samplers</a>
                    </li>
                    <li className="nav-item ms-2 me-2">
                        <Link to="/search/all" className="nav-link">Shop</Link>
                    </li>
                </ul>  
            </div>

            

            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="me-2">
                        <form className="d-flex">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
                                <button className="btn btn-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
                            </div>
                        </form>
                    </li>
                    <li className="nav-item">
                        <a href="#learn" className="nav-link ms-1 me-1">Login</a>
                    </li>
                    <li className="nav-item">
                        <a href="#questions" className="nav-link ms-1 me-1">Sign Up</a>
                    </li>
                    <li className="nav-item">
                    <button type="button" className="btn btn-outline-primary position-relative" onClick={()=> history.push('/cart')}>
                    <i className="bi bi-bag"></i>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            3
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                    </li>
                </ul>
            </div>

            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>

        </div>
    </  nav>
    )
}

export default Navbar
