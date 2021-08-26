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
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <p className="h3 text-center text-md-start my-4 my-md-0 mb-md-2">Freatured</p>
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
                    <p className="h3 text-center text-md-start my-5 my-md-0 mb-md-2">New Arrivals</p>
                    <div className="d-flex align-items-stretch flex-wrap gap-2">
                        {newArrivalLoading ? <LoadingSpinner/> 
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
                        {/* <!-- Force next columns to break to new line at md breakpoint and up -->
                        <div className="w-100 d-lg-none"></div> */}
                    </div>

                    <div className="row mt-3">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col-lg-6">
                        <Link to={`/search/all`} type="button" className="btn btn-primary w-100">Shop New Arrivals &gt; </Link>
                        </div>
                    </div>


                    <p className="h3 text-center text-md-start my-5 my-md-4 mb-md-2 ">Best Sellers</p>
                    <div className="d-flex align-items-stretch flex-wrap gap-2">
                        {bestSellerLoading ? <LoadingSpinner/> 
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

                    <div className="row gy-2 mt-3">
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col"></div>
                        <div className="col-lg-6">
                            <Link to={`/search/all`} type="button" className="btn btn-primary w-100">Shop Best Sellers &gt; </Link>
                        </div>
                    </div>

                    
                </div>
            </div>

        </div>
    )
}

export default ProductsShowCase

