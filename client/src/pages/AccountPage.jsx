import React from 'react'
import { useSelector } from 'react-redux'
import BreadCrumb from '../components/BreadCrumb'

import styled from 'styled-components'

const AccountPage = () => {

  // Grab the user login info 
  const userLogin = useSelector(state => state.userLogin)
  const { loading , error, userInfo, success } = userLogin 
  const { data } =  userInfo

    return (
        <AccountPageStyled className="container py-4">

            <BreadCrumb/>
           <div className="row">
               <div className="col">
                   <h3>Welcome</h3>
                   <p>{data.name} </p>
               </div>
           </div>

            {/* Profile and Orders Links */}
           <nav className="my-3">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active fs-5" id="nav-home-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-home" 
                        type="button" role="tab" aria-controls="nav-home" 
                        aria-selected="true">
                            Profile <i className="bi bi-person-lines-fill"></i>
                    </button>
                    <button className="nav-link fs-5" id="nav-profile-tab" 
                        data-bs-toggle="tab" data-bs-target="#nav-profile" 
                        type="button" role="tab" aria-controls="nav-profile" 
                        aria-selected="false">
                            Orders <i class="bi bi-cart-check"></i>
                    </button>
                </div>
            </nav>

            {/* Tab Info */}
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="row">
                    {/* Basic Account Info */}
                    <div className="col">
                        <div className="my-3">
                            <span className="d-block text-muted">Customer #</span>
                            <span>{data._id}</span>
                        </div>
                        <div className="my-3" >
                            <span className="d-block text-muted">Customer Name</span>
                            <span>{data.name}</span>
                        </div>
                        <div className="my-3">
                            <span className="d-block text-muted">Customer Since</span>
                            <span>{data.createdAt && new Date(data.createdAt).toLocaleDateString()}</span>
                        </div>
                        
                    </div>
                    {/* Shipping and Billing Info */}
                    <div className="col">

                    </div>
                </div>
            </div>
            <div className="tab-pane fade p-2" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                orders
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
