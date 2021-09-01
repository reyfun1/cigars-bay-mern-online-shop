import React, {useState, useRef, useEffect} from 'react'
// import logo from '../img/logo.png'
import { useSelector } from 'react-redux'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchBox from './SearchBox'

import logo from '../img/svg/logo-yellow.svg'


const Navbar = () => {
    const history = useHistory()
    const togglerBtn = useRef()
    const navBarCollapsable = useRef()

    const [isAdmin, setIsAdmin] = useState(false)

    // Grab the user register info 
    const userRegister = useSelector(state => state.userRegister)
    const { success : successRegister } = userRegister 

    const userLogin = useSelector(state => state.userLogin)
    const { success : successLogin } = userLogin 

    // cart info
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    const [showNavBar, setShowNavBar] = useState(true);

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
    const handleLinkClicked = e => {
        // if clicked is logo, then go home
        if(e?.target?.classList?.value){
            if(e.target.classList.value === "logo-container") history.push("/")
        }
        if(window.innerWidth >= 992 ) return
        const isShowingCollapsable = navBarCollapsable.current.classList.contains('show')
        if(isShowingCollapsable) togglerBtn.current.click()
    }

    // handle the admin stuff
    useEffect(() => {
        if(successRegister) setIsAdmin(successRegister.isAdmin)
        if(successLogin) setIsAdmin(successLogin.isAdmin)
    }, [successRegister, successLogin])

    

    return (
        <NavBarStyled className={`navbar navbar-expand-lg bg-dark navbar-dark py-3 shadow ${showNavBar ? '' : 'd-none'} fixed-top`}>
        <div className="container">
            <button ref={togglerBtn} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon border-dark"></span>
            </button>
            
            <div className="logo-container" onClick={handleLinkClicked}>
                <img src={logo} alt="" />
            </div>

            <button type="button" className="btn btn-outline-primary position-relative my-2 my-lg-0 order-lg-last" onClick={()=>{handleLinkClicked();handleCartClick()}}>
                <i className="bi bi-cart"></i>
                <span className="d-lg-none"> Cart</span>
                <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger 
                    ${cartItems && cartItems.length < 1 ? 'd-none' : ''}`}>
                    {cartItems && cartItems.reduce( (acc, curr) => (curr.qty * 1 + acc), 0)}
                <span className="visually-hidden">unread messages</span>
                </span>
            </button>

            <div ref={navBarCollapsable} className="collapse navbar-collapse" id="navmenu" >
                <ul className="navbar-nav d-flex justify-content-between w-100 mt-3 mt-lg-0">
                        <li className="nav-item ms-1 me-1"></li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/search" className="nav-link" onClick={handleLinkClicked}>Cigars</Link>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/about" className="nav-link" onClick={handleLinkClicked} >About</Link>
                        </li>
                        <li className="nav-item ms-1 me-1">
                            <Link to="/contactus" className="nav-link" onClick={handleLinkClicked} >Contact</Link>
                        </li>

                        <div className="border-top border-secondary w-100 my-4 m-auto d-block d-lg-none"></div>

                        <li className="me-2 my-3 order-1 order-lg-0 my-lg-0 w-100" id="search-text-box">
                            <SearchBox handleLinkClicked={handleLinkClicked}/>
                        </li>

                        {successRegister || successLogin ? (
                            <>
                            {isAdmin ? (
                                <Link to="/admin" className="py-2 me-1 btn btn-outline-primary text-nowrap" onClick={handleLinkClicked}>Admin</Link>    
                            ) : (
                                <Link to="/myaccount" className="py-2 me-1 btn btn-outline-primary text-nowrap" onClick={handleLinkClicked}>My Account</Link>
                            )}
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link to="/login" className="py-2 me-1 btn btn-primary text-nowrap" onClick={handleLinkClicked}>Login</Link>
                            </li>
                        )}


                </ul>  
            </div>
        </div>
    </ NavBarStyled>
    )
}

export default Navbar

const NavBarStyled = styled.nav`

    .logo-container{
        width: 150px;
        padding: 1rem 0;
        cursor: pointer;
        &:hover{
            opacity: .85;
        }
        img{
            pointer-events: none;
        }
    }
    .bi{
        vertical-align: .250em;
    }
    #search-text-box{
        max-width: 420px;
    }
`
