import React, {useState, useRef} from 'react'
import logo from '../img/logo.png'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
    const history = useHistory()
    const togglerBtn = useRef()


    const [expanded, setExpanded] = useState(false);
    const [searchText, setSearchText] = useState('')

    const handleSearchClick = () => {
        // handle query here
        history.push('/search/all')
    }

    // Close nav when links are clicked
    const handleLinkClicked = () => {
        if(window.innerWidth >= 992 ) return
        togglerBtn.current.click()
    }

    return (
        <NavBarStyled className="navbar navbar-expand-lg bg-dark navbar-dark text-dark py-3">
        <div className="container">
            <button ref={togglerBtn} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link to="/" className="navbar-brand">CigarsBay</Link>

            <button type="button" className="btn btn-outline-primary position-relative my-2 my-lg-0 order-lg-last" onClick={()=> history.push('/cart')}>
                <i className="bi bi-cart"></i>
                <span className="d-lg-none"> Cart</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>

            <div className="collapse navbar-collapse" id="navmenu" >
                <ul className="navbar-nav d-flex justify-content-between w-100 mt-3 mt-lg-0">
                        <li className="nav-item ms-1 me-1">
                            <Link to="/search/all" className="nav-link" onClick={handleLinkClicked}>Cigars</Link>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/search/all" className="nav-link" onClick={handleLinkClicked}>Samplers</Link>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/search/all" className="nav-link" onClick={handleLinkClicked}>Shop</Link>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/about/" className="nav-link" onClick={handleLinkClicked} >About</Link>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/contactus" className="nav-link" onClick={handleLinkClicked} >Contact</Link>
                        </li>
                        <li className="nav-item mx-5"></li>
                        <li className="me-2 order-1 my-3 my-lg-0">
                            <form className="d-flex">
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Search" 
                                        aria-label="Search" 
                                        aria-describedby="button-addon2" 
                                        value={searchText} onChange={e => setSearchText(e.target.value)}/>
                                    <button className="btn btn-secondary" type="button" id="button-addon2" onClick={() => {handleSearchClick();handleLinkClicked() }}><i className="bi bi-search"></i></button>
                                </div>
                            </form>
                        </li>
                        <li className="nav-item">
                            <Link to="/login/" className="nav-link ms-1 me-1" onClick={handleLinkClicked} >Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup/" className="nav-link ms-1 me-1" onClick={handleLinkClicked}>SignUp</Link>
                        </li>
                </ul>  
            </div>

            
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
