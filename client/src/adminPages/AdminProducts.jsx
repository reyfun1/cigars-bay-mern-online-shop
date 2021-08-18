import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIntersection } from '../utils'

import styled from  'styled-components'
import CustomTable from '../components/CustomTable'
import LoadingSpinner from '../components/LoadingSpinner'
import { listProducts } from '../actions/productActions'
import { useHistory } from 'react-router-dom'


const AdminProducts = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const productsTabRef = useRef(null)

  
  // Extract from the state : 
  const productList = useSelector(state => state.productList)
  const { loading :loadingProducts, error :errorProducts ,products, page, pages} = productList

  // Check if products section is visible and load products from db
  useEffect(() => {    
    const observer = 
      new IntersectionObserver(entries => entries[0].isIntersecting && loadProducts(), {})
    observer.observe(productsTabRef.current)
  }, [])

  const loadProducts = () => dispatch(listProducts('',1))

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
                    <CustomTable type="admin-list-product" data={products} editBtn={goToViewProduct}/>
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