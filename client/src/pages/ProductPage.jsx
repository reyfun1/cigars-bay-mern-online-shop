import { formatMoney } from 'accounting-js'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getProductsByTag, listProductDetails } from '../actions/productActions'
import BreadCrumb from '../components/BreadCrumb'
import Carousel from '../components/Carousel'
import ProductDetailsTable from '../components/ProductDetailsTable'
import ProductSearchResult from '../components/ProductSearchResult'

import axios from 'axios'
import LoadingSpinner from '../components/LoadingSpinner'
import { addToCart } from '../actions/cartActions'
import { LatestProductLittleCart } from '../components/LittleCart'

import {useTransition, animated } from '@react-spring/web'
import { Link, useHistory } from 'react-router-dom'
import { getVendors } from '../actions/vendorActions'

const ProductPage = ({match}) => {
    const productID = match.params.id

    const dispatch = useDispatch()
    const history = useHistory()

    const productList = useSelector((state) => state.productList)
    const { products } = productList

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, product , error} = productDetails

    // Product List best Seller
    const productListBestSeller = useSelector((state) => state.productListBestSeller)
    const { products: productsBestSeller, loading: bestSellerLoading, error: bestSellerError } = productListBestSeller

    const [selectedSku, setSelectedSku] = useState()

    const vendorList = useSelector(state => state.vendorList)
    const { vendors, loading : vendorLoading } = vendorList

    const [vendorFound, setVendorFound] = useState()

    const [qty, setQty] = useState(1)

    // lookup the vendor in the vendor list
    useEffect(()=>{
        if(vendors){
            const foundVendor = vendors.find(v => v._id === product.vendor)
            setVendorFound(foundVendor)
        }
    },[vendors])

    // find the product in the array, if not found request it 
    useEffect(() => {
        dispatch(listProductDetails(productID))
    }, [productID])

    // select sku based if it is searchaable or not 
    useEffect(()=>{
        if(product && product.skus){
            const searchableSku = product.skus.find(sku => sku.isSearchable)
            if(searchableSku) setSelectedSku(searchableSku)
        }
    },[product])

    // fetch related products if its empty 
    useEffect(()=>{
        if(!productsBestSeller){
            dispatch(getProductsByTag('best-seller'))
        }
    }, [])

    const handleSkuChange = e => {
        const desiredSkuID = e.target.getAttribute('option')
        const foundSKU = product.skus.find(sku => sku.sku === desiredSkuID)
        setSelectedSku(foundSKU)
        setQty(1)
    }
    
    const handleAddToCart = () => {
        dispatch(addToCart(product, selectedSku,vendorFound, qty))
    }

    
    const transitions = useTransition(selectedSku, {
        from: { transform: 'scale(1.5)' },
        enter: { transform: 'scale(1)' },
        leave: { transform: 'scale(1.5)', display: 'none' },
        config: {duration: 200}
      })


    return (
        <ProductPageStyled className="container py-4 position-relative">
            <BreadCrumb/>
            {product ? (
                <>
                    {/* Little cart here  */}
                    {/* <LatestProductLittleCart showLittleCart={showLittleCart} setShowLittleCart={setShowLittleCart}/> */}
                    <div className="row">
                        {/* Carousel Images */}
                        <div className="col mb-3">
                            {product && product.images && <Carousel carouselName="productImages" images={product.images}/>}
                        </div>
                        {/* Summary and price  */}
                        <div className="col-md-6 mb-3">
                            {/* Item title */}
                            {vendorLoading ? (
                                <LoadingSpinner/>
                            ) : (
                                <div>
                                    <p className="fs-4">
                                    {product.name} - {selectedSku && selectedSku.option}
                                    </p>

                                    <p className="text-muted text-muted text-uppercase">
                                        {vendorFound && vendorFound.name && <>By: <Link to={`/search/${vendorFound.name.toLowerCase()}`}>{vendorFound.name}</Link></>}
                                    </p>
                                    <span className="fs-6">Item # : {product._id}</span>
                                </div>   
                            )} 

                            {/* Quick description */}
                            <div className="my-4">
                                <p>{product && product.description}</p>  
                            </div>

                            {/* Item Options */}
                            <div className="d-flex justify-content-between">
                                <div>
                                <label className="mb-2 text-muted text-uppercase">Cigar Count</label>
                                <div className="d-flex item-options justify-content-start flex-wrap">
                                    {(selectedSku && product) && product.skus.map((sku,key) => {
                                        return (
                                        <div key={key} className="m-1">
                                            <input type="radio" className="btn-check" 
                                                name="options" id={'option'+key} 
                                                option={sku.sku}
                                                autoComplete="off" onChange={handleSkuChange} checked={selectedSku.sku === sku.sku}/>
                                            <label className="btn btn-outline-dark text-nowrap m-0" htmlFor={'option'+key}>{sku.option}</label>
                                        </div>
                                        )
                                    })}
                                </div>
                                </div>
                                {/* Price */}
                                <div className="price-container text-end">
                                    <label className="text-muted text-uppercase">Price</label>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            {transitions( ( props ) => (
                                                <animated.div style={props}>
                                                    <h3 className="m-0 price-amount">{formatMoney(selectedSku.price)}</h3>
                                                </animated.div>
                                            ))}
                                            <p className="text-muted m-0 font-weight-light text-decoration-line-through"> $89.99 MSRP</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* In stock */}
                            {selectedSku && selectedSku.stock_qty > 3 ? (
                                <p className="m-0 mt-3 text-success">{selectedSku && selectedSku.stock_qty} in stock <i className="bi bi-check"></i></p>
                            ) : (
                                <p className="m-0 mt-3 text-danger">Out of Stock <i className="bi bi-check"></i></p>
                            )}
                            
                            {/*Qty and add to cart  */}
                            <div className="my-4">
                                <div className="form-input qty-cart-input"> <i className="fa fa-envelope" /> 
                                    <label className="mb-1 text-muted text-uppercase">Qty</label>
                                    <div className="d-flex">
                                        <input type="number" disabled={selectedSku && selectedSku.stock_qty < 3 ? true: false} 
                                        min="1" max={selectedSku && selectedSku.stock_qty} 
                                        className="form-control w-25 border-radius me-2" placeholder="0" onChange={e => setQty(e.target.value)} value={qty} />
                                        <button 
                                            disabled={selectedSku && selectedSku.stock_qty < 3 ? true: false} 
                                            className="btn btn-primary flex-grow-1 text-uppercase text-dark py-2" 
                                            type="button" onClick={handleAddToCart}>
                                                Add to Cart &nbsp; {selectedSku && selectedSku.stock_qty < 3 ? <small>(Out of Stock)</small>: ''}<i className="bi bi-cart"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    </div>
                    {/*  */}
                    <div className="row mt-3">
                        <div className="text-center text-md-start mt-4 mb-2">
                            <p className="fs-4 m-0">Product Information</p>
                            <span className="text-muted">Manufacturer Info and Details</span>
                        </div> 
                    <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Company Description</h5>
                        <p className="card-text">{vendorFound && vendorFound.description}</p>
                        <div className="company-logo">
                            <img className="img-fluid d-block mx-auto" src="https://www.plasenciacigars.com/wp-content/themes/plasencia-cigars-2018/img/logo-footer.svg" alt="Responsive image"/>
                        </div>
                        </div>
                    </div>
                        
                    {/*  */}
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Details</h5>
                        <div className="">
                            <div className="border-top">
                                {product.attributes && Object.keys(product.attributes).map(attr => {
                                    return (
                                    <div className="d-flex justify-content-between border-bottom p-1">
                                        <p className="m-0 text-muted text-uppercase">{attr}</p> <p className="m-0">{product.attributes[attr]}</p>
                                    </div>)
                                })}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                        
                    </div>
                    

                </>
            ) : (
                <p>Error: Product was not found</p>
            )}

            {/* Similar Products */}
            <div className="row my-5">
                <div className="col">
                    <div>
                        <div className="text-center text-md-start mt-4 mb-2">
                            <p className="fs-4 m-0">Similar Products</p>
                            <span className="text-muted">CigarsBay most sold products</span>
                        </div> 
                        <div className="d-flex flex-wrap">
                            {products && products
                            .filter(x => x.vendor === product.vendor)
                            .slice(0,4)
                            .map(product => 
                                <ProductSearchResult key={product._id} 
                                    productInfo={product} clickMethod={() =>  history.push(`/product/${product._id}`)} 
                            />)}

                            {!products && productsBestSeller && productsBestSeller
                            .map(product => 
                                <ProductSearchResult key={product._id} 
                                    productInfo={product} clickMethod={() =>  history.push(`/product/${product._id}`)} 
                            />)}
                        </div>
                    </div>
                </div>
            </div>
        </ProductPageStyled>
    )
}

export default ProductPage

const ProductPageStyled = styled.div`
.bi{
    vertical-align: .125em;
}

.price-amount{
    transition: attention 1s;
}

@keyframes attention {
    from {
      transform: scale(1);
    }
  
    to {
      transform: scale(1.5);
    }
  }


a {
    text-decoration: none;
}

.attribute-value{
    text-align: center;
}

table{
    font-size: 0.8em;
}

.qty-cart-input{
    input{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    button{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}
.company-logo{
    img{
        height: 75px;
    }
}
.item-options{
    label {
        font-size: 0.9rem;
    }
}

`
