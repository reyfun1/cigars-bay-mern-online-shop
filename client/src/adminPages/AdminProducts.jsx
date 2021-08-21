import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntersection } from '../utils'



import styled from  'styled-components'
import { AdminListProductsTable } from '../components/CustomTable'
import LoadingSpinner from '../components/LoadingSpinner'
import { listProducts } from '../actions/productActions'
import { useHistory } from 'react-router-dom'
import { getVendors } from '../actions/vendorActions'


const AdminProducts = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const productsTabRef = useRef(null)

  
  // Extract from the state : 
  const productList = useSelector(state => state.productList)
  const { loading :loadingProducts, error :errorProducts,products, page, pages} = productList

  const vendorList = useSelector(state => state.vendorList)
  const { loading :loadingVendors, error :errorVendors,vendors} = vendorList


  // Check if products section is visible and load products from db
  useEffect(() => {    
    const observer = new IntersectionObserver(entries => entries[0].isIntersecting 
      && loadProducts() 
      && loadVendorList() , {})


    observer.observe(productsTabRef.current)
  }, [])

  // load products list
  const loadProducts = () => dispatch(listProducts('',1))
  // load vendor list 
  const loadVendorList = () => dispatch(getVendors())

  // go to admin edit product
  const goToViewProduct = productID => {
    history.push(`admin/product/view/${productID}`)
  }

  const goToNewProduct = () => {
    history.push(`admin/product/new`)
  }
    return (
      <div >
        <AdminProductsStyled className="p-3" ref={productsTabRef}>
          <div className="d-flex justify-content-between mb-5">
            <p className="fs-4 m-0">Products</p>
            <button className="btn btn-outline-primary" onClick={goToNewProduct}><i className="bi bi-plus-circle-dotted"></i> Add Product </button>
          </div>
          {errorProducts 
              ? 'Error!' 
              : <>
              {loadingProducts 
                  ? <LoadingSpinner/> 
                  : 
                  <>
                    <AdminListProductsTable 
                      products={products} 
                      vendors={vendors} 
                      editBtn={goToViewProduct}/>
                  </>
              }</>
          }
        </AdminProductsStyled>
        </div>
    )
}

export default AdminProducts

const AdminProductsStyled = styled.div`

`