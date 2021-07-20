import React, {useState} from 'react'
import logo from '../img/logo.png'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const history = useHistory()

    const [searchText, setSearchText] = useState('')

    const handleSearchClick = () => {
        // handle query here
        history.push('/search/all')
    }

    return (
        <NavBarStyled className="navbar navbar-expand-lg bg-dark navbar-dark text-dark py-3">
        <div className="container">
            <Link to="/" className="navbar-brand">CigarsBay</Link>

            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item ms-1 me-1">
                        <Link to="/search/all" className="nav-link">Cigars</Link>
                    </li>
                    <li className="nav-item ms-1 me-1">
                        <Link to="/search/all" className="nav-link">Samplers</Link>
                    </li>
                    <li className="nav-item ms-1 me-1">
                        <Link to="/search/all" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item ms-1 me-1">
                        <Link to="/about/" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item ms-1 me-1">
                        <Link to="/contactus" className="nav-link">Contact Us</Link>
                    </li>
                </ul>  
            </div>

            

            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="me-2">
                        <form className="d-flex">
                            <div className="input-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Search" 
                                    aria-label="Search" 
                                    aria-describedby="button-addon2" 
                                    value={searchText} onChange={e => setSearchText(e.target.value)}/>
                                <button className="btn btn-secondary" type="button" id="button-addon2" onClick={handleSearchClick}><i className="bi bi-search"></i></button>
                            </div>
                        </form>
                    </li>
                    <li className="nav-item">
                        <Link to="/login/" className="nav-link ms-1 me-1">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup/" className="nav-link ms-1 me-1">Sign Up</Link>
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
    </ NavBarStyled>
    )
}

export default Navbar

const NavBarStyled = styled.nav`
    .bi{
        vertical-align: .250em;
    }
`
