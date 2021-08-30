import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'

import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByTag } from '../actions/productActions';
import LoadingSpinner from './LoadingSpinner';
import ProductSearchResult from './ProductSearchResult';

const ProductsShowCase = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    // Product List Freatured
    const productListFreatured = useSelector((state) => state.productListFreatured)
    const { products: productsFreatured, loading: freaturedLoading, error: freaturedError } = productListFreatured

    // Product List New Arrival
    const productListNewArrival = useSelector((state) => state.productListNewArrival)
    const { products: productsNewArrival, loading: newArrivalLoading, error: newArrivalError } = productListNewArrival

    // Product List Bet Seller
    const productListBestSeller = useSelector((state) => state.productListBestSeller)
    const { products: productsBestSeller, loading: bestSellerLoading, error: bestSellerError } = productListBestSeller
    

    const handleProductCard = (productInfo) => {
        history.push(`/product/${productInfo._id}`)
    }

    const getHomePageProducts = () => {
        dispatch(getProductsByTag('freatured'))
        dispatch(getProductsByTag('new-arrival'))
        dispatch(getProductsByTag('best-seller'))
    }

    useEffect(()=>{
        getHomePageProducts()
    }, [])

    return (
        <ProductsShowCaseStyled className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="text-center text-md-start my-4 my-md-0 mb-md-2">
                        <p className="fs-3 m-0">Freatured</p>
                        <span className="text-muted">CigarsBay house blend</span>
                    </div>                   
                    {freaturedLoading ? <LoadingSpinner/> : (
                        <>
                        {!freaturedError ? (
                            <>
                            {productsFreatured && productsFreatured.length > 0 && 
                            <ProductSearchResult bigCard={true} productInfo={productsFreatured[0]} clickMethod={handleProductCard} />}
                            </>
                        
                        ) : (
                            <p>Error</p>
                        )}
                        </>
                    )}                        
                </div>
                <div className="col-md">
                    <div className="text-center text-md-start my-4 my-md-0 mb-md-2">
                        <p className="fs-3 m-0">New Arrivals</p>
                        <span className="text-muted">Recently added products</span>
                    </div>  
                    <div className="d-flex align-items-stretch justify-content-center flex-wrap gap-2">
                        {newArrivalLoading ? <div className="text-center w-100"><LoadingSpinner/></div> 
                        : (
                            <>
                            {!newArrivalError ? (
                                <>
                                {productsNewArrival && productsNewArrival.length > 0 && productsNewArrival.map(product => 
                                    <ProductSearchResult key={product._id} productInfo={product} clickMethod={handleProductCard} />
                                )}
                                </>
                            ) : (
                                <p>Error</p>
                            )}
                            </>
                        )}  
                    </div>

                    <div className="row mt-3 justify-content-md-end pe-2">
                        <div className="col-lg-6">
                            <Link to={`/search/all`} className="btn btn-primary py-3 fw-bold w-100 text-dark text-uppercase shadow">Shop New Arrivals <i className="bi bi-arrow-right-circle"></i> </Link>
                        </div>
                    </div>

                    <div className="text-center text-md-start mt-4 mb-2">
                        <p className="fs-3 m-0">Best Sellers</p>
                        <span className="text-muted">CigarsBay most sold products</span>
                    </div>  
                    <div className="d-flex align-items-stretch justify-content-center flex-wrap gap-2">
                        {bestSellerLoading ? <div className="text-center w-100"><LoadingSpinner/></div> 
                            : (
                                <>
                                {!bestSellerError ? (
                                    <>
                                    {productsBestSeller && productsBestSeller.length > 0 && productsBestSeller.map(product => 
                                        <ProductSearchResult key={product._id} productInfo={product} clickMethod={handleProductCard} />
                                    )}
                                    </>
                                ) : (
                                    <p>Error</p>
                                )}
                                </>
                        )}
                    </div>

                    <div className="row mt-3 justify-content-md-end pe-2">
                        <div className="col-lg-6">
                            <Link to={`/search/all`} className="btn btn-primary py-3 fw-bold w-100 text-dark text-uppercase shadow">Shop Best Sellers &nbsp;<i className="bi bi-arrow-right-circle"></i> </Link>
                        </div>
                    </div>

                </div>
            </div>

        </ProductsShowCaseStyled>
    )
}

export default ProductsShowCase


const ProductsShowCaseStyled = styled.div`
.bi{
    vertical-align: .120em;
  }
`