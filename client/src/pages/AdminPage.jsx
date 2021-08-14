import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'


import styled from 'styled-components'
import EditProduct from '../components/EditProduct'
import AdminListProducts from '../components/AdminListProducts'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { listUsers } from '../actions/userActions'
import CustomTable from '../components/CustomTable'

const AdminPage = ({history}) => {
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // Get product list from state 
    const productList = useSelector(state => state.productList)
    const { products } = productList

    // Get user list from state 
    const userList = useSelector(state => state.userList)
    const { users } = userList

    const clickedNavPill = e => {
        const buttonPressed = e.target.id

        switch (buttonPressed) {
            case 'v-pills-orders-tab':
                break;
            case 'v-pills-products-tab':
                loadProductList()
                break;
            case 'v-pills-users-tab':
                loadUserList()
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        // if user is not admin send to 404
        if(!userInfo.isAdmin){
            history.push('/error')
        } 
    }, [])

    const loadProductList = () => {
        if(products){
            if(products.length < 1){
                dispatch(listProducts('', 1 ))
            }
        } else{
            dispatch(listProducts('', 1 ))
        }
    }

    const loadUserList = () => {
        if(users){
            if(users.length < 1){
                dispatch(listUsers())
            }
        } else{
            dispatch(listUsers())
        }
    }

    return (
        <StyledAdminPage className="container py-4">
           <BreadCrumb/>
            <h4>Admin Control</h4>

            <nav className="nav nav-pills flex-column flex-sm-row mb-3">
                <button 
                    className="nav-link active" id="v-pills-orders-tab" 
                    data-bs-toggle="pill" data-bs-target="#v-pills-orders" 
                    type="button" role="tab" aria-controls="v-pills-orders" aria-selected="true"
                    onClick={clickedNavPill}>
                        <i className="bi bi-box fs-5 "></i><br /> 
                        Orders
                </button>
                <button 
                    className="nav-link" id="v-pills-users-tab"
                    data-bs-toggle="pill" data-bs-target="#v-pills-users" 
                    type="button" role="tab" aria-controls="v-pills-users" aria-selected="false"
                    onClick={clickedNavPill}>
                        <i className="bi bi-people-fill fs-5"></i><br />
                        Users
                </button>
                <button 
                    className="nav-link" id="v-pills-products-tab" 
                    data-bs-toggle="pill" data-bs-target="#v-pills-products" 
                    type="button" role="tab" aria-controls="v-pills-products" aria-selected="false"
                    onClick={clickedNavPill}>
                        <i className="bi bi-diagram-2-fill fs-5"></i><br />
                        Products
                </button>
            </nav>


            <div className="tab-content row" id="v-pills-tabContent">
                    {/* ORDERS */}
                    <div className="tab-pane fade show active col-12" id="v-pills-orders" role="tabpanel" aria-labelledby="v-pills-orders-tab">
                        <p>Orders hgo hjere!!!!</p>
                    </div>
                    {/* USERS */}
                    <div className="tab-pane fade col-12" id="v-pills-users" role="tabpanel" aria-labelledby="v-pills-users-tab">
                        <CustomTable type="admin-list-users" data={users} />
                    </div>
                    {/* PRODUCTS */}
                    <div className="tab-pane fade col-12" id="v-pills-products" role="tabpanel" aria-labelledby="v-pills-products-tab">
                        <AdminListProducts loadProductList={loadProductList}/>
                    </div>
            </div>

            
        </StyledAdminPage>
    )
}

export default AdminPage

const StyledAdminPage = styled.div`
table{

}
`