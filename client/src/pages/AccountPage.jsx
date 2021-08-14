import React from 'react'
import { useSelector } from 'react-redux'
import BreadCrumb from '../components/BreadCrumb'

import styled from 'styled-components'
import OrderListItem from '../components/OrderListItem'

const AccountPage = () => {

  // Grab the user login info 
  const userLogin = useSelector(state => state.userLogin)
  const { loading , error, userInfo, success } = userLogin 
  const { _id, name, email, createdAt,  } =  userInfo

    return (
        <AccountPageStyled className="container py-4">
            <BreadCrumb/>
           <div className="row">
               <div className="col">
                   <h3>Welcome</h3>
                   <p>{name} </p>
               </div>
           </div>

            {/* Profile and Orders Links */}
           <nav className="my-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active fs-6 fw-bold" id="nav-home-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-home" 
                        type="button" role="tab" aria-controls="nav-home" 
                        aria-selected="true">
                            Profile <i className="bi bi-person-lines-fill"></i>
                    </button>
                    <button className="nav-link fs-6 fw-bold" id="nav-profile-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-profile" 
                        type="button" role="tab" aria-controls="nav-profile" 
                        aria-selected="false">
                            Orders <i className="bi bi-cart-check"></i>
                    </button>
                    <button className="nav-link fs-6 fw-bold" id="nav-payment-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-payment" 
                        type="button" role="tab" aria-controls="nav-payment" 
                        aria-selected="false">
                            Payment <i className="bi bi-credit-card"></i>
                    </button>
                </div>
            </nav>

            {/* Tab Info */}
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active p-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                
                <div className="row">
                    {/* Basic Account Info */}
                    <div className="col border-right border-end border-2">
                    <p className="fs-5 fw-bold">Customer Info <button type="button" className="btn btn-sm btn-primary">Edit</button></p>
                        <div className="my-3">
                            <span className="d-block text-muted">Customer #</span>
                            <span>{_id}</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">Customer Name</span>
                            <span>{name}</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">Email</span>
                            <span>{email}</span>
                        </div>
                        <div className="my-3">
                            <span className="d-block text-muted">Customer Since</span>
                            <span>{createdAt && new Date(createdAt).toLocaleDateString()}</span>
                        </div>
                        
                        
                    </div>
                    {/* Shipping Info */}
                    <div className="col">
                        <p className="fs-5 fw-bold">Default Shipping Address <button type="button" className="btn btn-sm btn-primary">Edit</button></p>
                        <div className="my-3">
                            <span className="d-block text-muted">Att</span>
                            <span>Reinaldo Fundora</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">Street Address</span>
                            <span>12418 SW 125th Terrace</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">Street 2</span>
                            <span>Apt 202</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">City , State ZIP</span>
                            <span>Miami, FL 33186</span>
                        </div>
                    </div>
                </div>

                
            </div>
            <div className="tab-pane fade p-2 row" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <OrderListItem/>
                <OrderListItem/>
            </div>
            <div className="tab-pane fade p-2" id="nav-payment" role="tabpanel" aria-labelledby="nav-payment-tab">
            <div className="row">
                    {/* Basic Account Info */}
                    <div className="col border-right border-end border-2">
                    <div className="fs-5 fw-bold d-flex justify-content-between flex-wrap">
                        <span>Saved Card </span>
                        <button type="button" className="btn btn-sm btn-primary">Edit Card</button>
                    </div>
                        <i className="bi bi-credit-card fs-4 d-block"></i>
                        <span>Amazon Rewards Visa Signature Card</span>
                        <p>Ending on <span className="text-muted">7175</span></p>
                    </div>
                    {/* Billing Info */}
                    <div className="col">
                        <div className="fs-5 fw-bold d-flex justify-content-between flex-wrap">
                            <span>Billing Address </span>
                            <button type="button" className="btn btn-sm btn-primary">Edit Billing</button>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">Street Address</span>
                            <span>12418 SW 125th Terrace</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">Street 2</span>
                            <span>Apt 202</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">City , State ZIP</span>
                            <span>Miami, FL 33186</span>
                        </div>
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
