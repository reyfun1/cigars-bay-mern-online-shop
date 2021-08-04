import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'


import styled from 'styled-components'
import EditProduct from '../components/EditProduct'

const AdminPage = () => {

    const [showAddNewProduct,setShowAddNewProduct] = useState(false)
    return (
        <StyledAdminPage className="container py-4">
           <BreadCrumb/>
            <h4>Admin Control</h4>

            <nav className="nav nav-pills flex-column flex-sm-row mb-3">
                <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    <i className="bi bi-box fs-5 "></i><br /> Orders
                </button>
                <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    <i className="bi bi-people-fill fs-5"></i><br />Users
                </button>
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    <i className="bi bi-diagram-2-fill fs-5"></i><br />Products
                </button>
            </nav>

            <div className="tab-content row" id="v-pills-tabContent">
                    <div className="tab-pane fade show active col-12 col-md-8 mx-auto" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <table className="table text-center border">
                            <thead className="table">
                                <tr>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                    <th>Paid</th>
                                    <th>Delivered</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>134142323</td>
                                    <td>23414341243</td>
                                    <td>4/23/21</td>
                                    <td>$ 564.23</td>
                                    <td>Yes</td>
                                    <td>Yes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade col-12 col-md-8 mx-auto" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <table className="table">
                        <thead className="table">
                            <tr>
                                <th>ID</th>
                                <th>User</th>
                                <th>Date</th>
                                <th>ID</th>
                                <th>ID</th>
                                <th>ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            ...
                        </tbody>
                    </table>
                    </div>
                    <div className="tab-pane fade col-12 col-md-8 col-lg-6 mx-auto" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                        <h5>Products</h5>

                        {/* Add New Product section */}
                        
                        {showAddNewProduct ? (
                            <EditProduct setShowAddNewProduct={setShowAddNewProduct} />
                        ) : (
                            <>
                            <button type="button" onClick={e => setShowAddNewProduct(!showAddNewProduct)} className="btn btn-primary my-4">
                            Add new product
                            </button>
                            <table className="table text-center">
                                <thead className="table">
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>CATEGORY</th>
                                        <th>BRAND</th>
                                        <th>EDIT</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>134142323</td>
                                        <td>23414341243</td>
                                        <td>$ 134</td>
                                        <td>Cigars</td>
                                        <td>Alma Fuerte</td>
                                        <td>
                                            <button className="btn btn-secondary btn-sm me-1">Edit</button> 
                                        </td>
                                        <td>
                                            <button className="btn btn-dark btn-sm">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
                        </>
                        )}
                        
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