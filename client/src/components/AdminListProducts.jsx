import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import CustomTable from './CustomTable'
import EditProduct from './EditProduct'
import LoadingSpinner from './LoadingSpinner'

const AdminListProducts = () => {
    const [showAddNewProduct,setShowAddNewProduct] = useState(false)

    // Extract from the state : 
    const productList = useSelector(state => state.productList)
    const { loading :loadingProducts, error :errorProducts , products, page, pages} = productList

    useEffect(() => {

    }, [])

    return (
        <div>
            <p className="fs-5">Products</p>
                {/* Add New Product section */}
                <button 
                    type="button" 
                    onClick={e => setShowAddNewProduct(!showAddNewProduct)} 
                    className={`btn btn-${showAddNewProduct ? 'danger' : 'primary'} m-4 float-end`}>
                    {showAddNewProduct ? 'Cancel' : 'Create Product + '}
                </button>                        
                {showAddNewProduct ? (
                    <EditProduct setShowAddNewProduct={setShowAddNewProduct} />
                ) : (
                    <>
                    {errorProducts 
                        ? 'Error!' 
                        : <>
                        {loadingProducts 
                            ? <LoadingSpinner/> 
                            : <CustomTable type="admin-list-product" data={products}/>
                        }</>
                    }
                </>
                )}
        </div>
    )
}

export default AdminListProducts
