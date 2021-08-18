import React from 'react'
import { Link } from 'react-router-dom'
import AdminProducts from '../adminPages/AdminProducts'

import styled from 'styled-components'

const NewAdminPage = () => {
    return (
        <AdminPageStyled className="row w-100 vh-100">
            {/* SideBar */}
            <div className="col-2 col-md-3 col-xl-2 d-flex flex-column p-4 text-white bg-dark h-100">
                {/* <Link to="/" className="d-flex align-items-center fs-4 mb-3 mb-md-0 me-md-auto text-white text-decoration-none text-center" >CigarsBay</Link>
                <hr /> */}
                <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active text-white" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    <i className="bi bi-house-door me-2"></i>
                    Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" id="pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#pills-dashboard" type="button" role="tab" aria-controls="pills-dashboard" aria-selected="false">
                    <i className="bi bi-speedometer2 me-2"></i>
                    Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" id="pills-orders-tab" data-bs-toggle="pill" data-bs-target="#pills-orders" type="button" role="tab" aria-controls="pills-orders" aria-selected="false">
                    <i className="bi bi-table me-2"></i>
                    Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" id="pills-products-tab" data-bs-toggle="pill" data-bs-target="#pills-products" type="button" role="tab" aria-controls="pills-products" aria-selected="false">
                    <i className="bi bi-grid me-2"></i>
                    Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white" id="pills-customers-tab" data-bs-toggle="pill" data-bs-target="#pills-customers" type="button" role="tab" aria-controls="pills-customers" aria-selected="false">
                    <i className="bi bi-person-circle me-2"></i>
                    Customers
                    </a>
                </li>
                </ul>
                <hr />
                <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                    <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
                </div>
            </div>
            {/* Content */}
            <div className="col">
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        Home page
                    </div>
                    <div className="tab-pane fade" id="pills-dashboard" role="tabpanel" aria-labelledby="pills-dashboard-tab">
                        Dashboard Page
                    </div>
                    <div className="tab-pane fade" id="pills-orders" role="tabpanel" aria-labelledby="pills-orders-tab">
                        Orders Page
                    </div>
                    <div className="tab-pane fade" id="pills-products" role="tabpanel" aria-labelledby="pills-products-tab">
                        <AdminProducts/>
                    </div>
                    <div className="tab-pane fade" id="pills-customers" role="tabpanel" aria-labelledby="pills-customers-tab">
                        Customers Tab
                    </div>
                </div>
            </div>
        </AdminPageStyled>
    )
}

export default NewAdminPage

const AdminPageStyled = styled.div`
    
`
