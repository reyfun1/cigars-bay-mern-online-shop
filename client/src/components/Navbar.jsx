import React, {useState, useRef} from 'react'
import logo from '../img/logo.png'
import { useSelector } from 'react-redux'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Navbar = () => {
    const history = useHistory()
    const togglerBtn = useRef()
    const navBarCollapsable = useRef()

    //TNP TO CHANGE LATER
    const isAdmin = true

    // Grab the user register info 
    const userRegister = useSelector(state => state.userRegister)
    const { success : successRegister } = userRegister 

    const userLogin = useSelector(state => state.userLogin)
    const { success : successLogin } = userLogin 

    const [expanded, setExpanded] = useState(false);

    // HANDLE Search 
    const [searchText, setSearchText] = useState('')

    const handleSearchClick = e => {
        handleLinkClicked()
        e.preventDefault()
        console.log('handleSearch')

        history.push(`/search/${searchText}`)

        if (searchText.trim()) {
            history.push(`/search/${searchText}`)
        } else {
            history.push('/')
        }
    }

    const handleCartClick = () => {
        history.push('/cart')
    }

    // Close nav when links are clicked
    const handleLinkClicked = () => {
        if(window.innerWidth >= 992 ) return
        const isShowingCollapsable = navBarCollapsable.current.classList.contains('show')
        if(isShowingCollapsable) togglerBtn.current.click()
    }

    return (
        <NavBarStyled className="navbar navbar-expand-lg bg-dark navbar-dark text-dark py-3">
        <div className="container">
            <button ref={togglerBtn} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand" onClick={handleLinkClicked}>CigarsBay</Link>

            <button type="button" className="btn btn-outline-primary position-relative my-2 my-lg-0 order-lg-last" onClick={()=>{handleLinkClicked();handleCartClick()}}>
                <i className="bi bi-cart"></i>
                <span className="d-lg-none"> Cart</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>

            <div ref={navBarCollapsable} className="collapse navbar-collapse" id="navmenu" >
                <ul className="navbar-nav d-flex justify-content-between w-100 mt-3 mt-lg-0">
                        <li className="nav-item ms-1 me-1">
                            <Link to="/search/all" className="nav-link" onClick={handleLinkClicked}>Cigars</Link>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/search/all" className="nav-link" onClick={handleLinkClicked}>Samplers</Link>
                        </li>
                        {/* <li className="nav-item ms-1 me-1">
                            <Link to="/search/all" className="nav-link" onClick={handleLinkClicked}>Shop</Link>
                        </li> */}
                        <li className="nav-item ms-1 me-1">
                            <Link to="/about" className="nav-link" onClick={handleLinkClicked} >About</Link>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/contactus" className="nav-link" onClick={handleLinkClicked} >Contact</Link>
                        </li>
                        <li className="nav-item mx-5"></li>
                        <li className="me-2 my-3 order-1 order-lg-0 my-lg-0 w-100" id="search-text-box">
                            <form className="d-flex" onSubmit={handleSearchClick}>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Search" 
                                        aria-label="Search" 
                                        aria-describedby="button-addon2" 
                                        value={searchText} onChange={e => setSearchText(e.target.value)}/>
                                    <button 
                                        className="btn btn-secondary" 
                                        type="submit" id="button-addon2">
                                            <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </li>
                        {successRegister || successLogin ? (
                            <li className="nav-item">
                                {isAdmin ? (
                                    <Link to="/admin" className="nav-link ms-1 me-1 btn btn-outline-secondary" onClick={handleLinkClicked} >Admin</Link>
                                ) : (
                                    <Link to="/myaccount" className="nav-link ms-1 me-1 btn btn-outline-secondary" onClick={handleLinkClicked} >My Account</Link>
                                )}
                            </li>    
                        ) : (
                            <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link ms-1 me-1 btn btn-outline-secondary" onClick={handleLinkClicked} >Login</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/signup" className="nav-link ms-1 me-1" onClick={handleLinkClicked}>SignUp</Link>
                            </li> */}
                            </>
                        ) }
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
    #search-text-box{
        max-width: 420px;
    }
`
