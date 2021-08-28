import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BreadCrumb from '../components/BreadCrumb'

import styled from 'styled-components'
import OrderListItem from '../components/OrderListItem'
import { logout } from '../actions/userActions'
import { Link } from 'react-router-dom'

const AccountPage = () => {
  const dispatch = useDispatch()

  const [user,setUser] = useState()

  // Grab the user login info 
  const userLogin = useSelector(state => state.userLogin)
  const userRegister = useSelector(state => state.userRegister)

  useEffect(()=>{
    if(userLogin && userLogin.userInfo){
        setUser(userLogin.userInfo)
    } else if(userRegister && userRegister.userInfo){
        setUser(userRegister.userInfo)
    }
  }, [])

  const handleLogOutClick = () => {
    dispatch(logout())
  }

  if(!user) return <div>No user found</div>
    return (
        <AccountPageStyled className="container py-4">
            <BreadCrumb/>
            <div className="d-flex justify-content-between">
                <div>
                    <h3>Welcome</h3>
                    <p>{user.name}</p>
                </div>
                <button className="btn btn-outline-secondary my-4" onClick={handleLogOutClick}>Logout</button>
            </div>

            {/* Profile and Orders Links */}
           <nav className="my-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active fs-6" id="nav-home-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-home" 
                        type="button" role="tab" aria-controls="nav-home" 
                        aria-selected="true">
                            Profile <i className="bi bi-person-lines-fill"></i>
                    </button>
                    <button className="nav-link fs-6" id="nav-profile-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-profile" 
                        type="button" role="tab" aria-controls="nav-profile" 
                        aria-selected="false">
                            Orders <i className="bi bi-cart-check"></i>
                    </button>
                    <button className="nav-link fs-6" id="nav-payment-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-payment" 
                        type="button" role="tab" aria-controls="nav-payment" 
                        aria-selected="false">
                            Payment <i className="bi bi-credit-card"></i>
                    </button>
                    <button className="nav-link fs-6" id="nav-favorite-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-favorite" 
                        type="button" role="tab" aria-controls="nav-favorite" 
                        aria-selected="false">
                            Favorites <i className="bi bi-bookmark-star"></i>
                    </button>
                    <button className="nav-link fs-6" id="nav-review-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-review" 
                        type="button" role="tab" aria-controls="nav-review" 
                        aria-selected="false">
                            Reviews <i className="bi bi-chat-left-quote"></i>
                    </button>
                    
                </div>
            </nav>

            {/* Tab Info */}
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active p-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                
                <div className="row">
                    {/* Basic Account Info */}
                    <div className="col border-right border-end border-2">
                        <div className="d-flex justify-content-between">
                            <p className="fs-5 m-0 ">Customer Info </p>
                            <button type="button" className="btn btn-sm btn-primary disabled">Edit Info</button>
                        </div>
                   
                        <div className="my-3">
                            <span className="d-block text-muted text-uppercase">Customer #</span>
                            <span>{user._id}</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted text-uppercase">Customer Name</span>
                            <span>{user.name}</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted text-uppercase">Email</span>
                            <span>{user.email}</span>
                        </div>
                        <div className="my-3">
                            <span className="d-block text-muted text-uppercase">Customer Since</span>
                            <span>{user.createdAt && new Date(user.createdAt).toLocaleDateString()}</span>
                        </div>
                        
                        
                    </div>
                    <div className="w-100 border d-block d-md-none my-4"></div>
                    {/* Shipping Info */}
                    <div className="col">
                        <div className="d-flex justify-content-center">
                            <div className="card text-center p-4">
                                <h4>No Shipping Address Saved</h4>
                                <p className="text-muted">Your Shipping addresses will show up here</p>
                                <i className="bi bi-exclamation-triangle text-warning fs-3"></i>
                                <button  className="btn btn-primary mt-4 disabled">Add New Adress</button>
                            </div>
                        </div>
                        {/* <div className="d-flex justify-content-between">
                            <p className="fs-5 m-0 ">Shipping Address </p>
                            <button type="button" className="btn btn-sm btn-primary">Edit Address</button>
                        </div>
                        <div className="my-3">
                            <span className="d-block text-muted text-uppercase">Attention</span>
                            <span>Reinaldo Fundora</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted text-uppercase">Street Address</span>
                            <span>142 SE 1st Ave</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted text-uppercase">Street 2</span>
                            <span>Apt 202</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted text-uppercase">City, State ZIP</span>
                            <span>Miami, FL 33131</span>
                        </div> */}
                    </div>
                </div>

                
            </div>
            <div className="tab-pane fade p-2 row" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className="d-flex justify-content-center">
                    <div className="card text-center p-4">
                        <h4>No Orders Found</h4>
                        <p className="text-muted">Your orders will show up here</p>
                        <i className="bi bi-exclamation-triangle text-warning fs-3"></i>
                        <Link to="/search" className="btn btn-primary mt-4">Go Shopping!</Link>
                    </div>
                </div>

                {/* <OrderListItem/>
                <OrderListItem/> */}
            </div>
            <div className="tab-pane fade p-2" id="nav-payment" role="tabpanel" aria-labelledby="nav-payment-tab">
                <div className="d-flex justify-content-center">
                    <div className="card text-center p-4">
                        <h4>No Credit Card on File</h4>
                        <p className="text-muted">Your saved payment methods will shop up here</p>
                        <i className="bi bi-exclamation-triangle text-warning fs-3"></i>
                        <button className="btn btn-primary mt-4 disabled">Add New Payment Method</button>
                    </div>
                </div>

            </div>
            <div className="tab-pane fade p-2" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                <div className="d-flex justify-content-center">
                    <div className="card text-center p-4">
                        <h4>You don't have any reviews</h4>
                        <p className="text-muted">Your reviews will shop up here</p>
                        <i className="bi bi-exclamation-triangle text-warning fs-3"></i>
                        <Link to="/search" className="btn btn-primary mt-4">Go Review Products</Link>
                    </div>
                </div>
            </div>
            <div className="tab-pane fade p-2" id="nav-favorite" role="tabpanel" aria-labelledby="nav-favorite-tab">
                <div className="d-flex justify-content-center">
                    <div className="card text-center p-4">
                        <h4>Your favorites are empty</h4>
                        <p className="text-muted">Add products to favorites and they will show up here</p>
                        <i className="bi bi-exclamation-triangle text-warning fs-3"></i>
                        <Link to="/search" className="btn btn-primary mt-4">Go Shopping!</Link>
                    </div>
                </div>
            </div>
            </div>

        </AccountPageStyled>
    )
}

export default AccountPage

const AccountPageStyled = styled.div`
.bi{
  vertical-align: .225em;
}
`
