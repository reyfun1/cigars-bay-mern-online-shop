import { formatMoney } from 'accounting-js'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { listProductDetails } from '../actions/productActions'
import BreadCrumb from '../components/BreadCrumb'
import Carousel from '../components/Carousel'
import ProductDetailsTable from '../components/ProductDetailsTable'
import ProductSearchResult from '../components/ProductSearchResult'

import axios from 'axios'
import LoadingSpinner from '../components/LoadingSpinner'
import { addToCart } from '../actions/cartActions'
import { LatestProductLittleCart } from '../components/LittleCart'

const ProductPage = ({match}) => {
    const productID = match.params.id

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { products } = productList

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, product , error} = productDetails

    const [selectedSku, setSelectedSku] = useState()
    const [vendorLoading, setVendorLoading] = useState(true)
    const [vendorFound, setVendorFound] = useState({})

    const [qty, setQty] = useState(1)

    // lookup vendor
    useEffect(()=>{
        setVendorLoading(true)
        axios.get(`/api/vendors/${product.vendor}`)
        .then(({data}) => {
            setVendorFound(data)
            setVendorLoading(false)
        })
        .catch(err => {

        })
    },[product])

    // find the product in the array, if not found request it 
    useEffect(() => {
        dispatch(listProductDetails(productID))
    }, [productID])

    // select sku based if it is searchaable or not 
    useEffect(()=>{
        if(product.skus){
            const searchableSku = product.skus.find(sku => sku.isSearchable)
            if(searchableSku) setSelectedSku(searchableSku)
        }
    },[product])

    const handleSkuChange = e => {
        const desiredSkuID = e.target.getAttribute('option')
        const foundSKU = product.skus.find(sku => sku.sku === desiredSkuID)
        setSelectedSku(foundSKU)
        setQty(1)
    }
    
    const [showLittleCart, setShowLittleCart] = useState(false)

    const handleAddToCart = () => {
        setShowLittleCart(true)
        dispatch(addToCart(product, selectedSku,vendorFound, qty))
    }


    return (
        <ProductPageStyled className="container py-4 position-relative">
            <BreadCrumb/>
            {/* Little cart here  */}
            <LatestProductLittleCart showLittleCart={showLittleCart} setShowLittleCart={setShowLittleCart}/>
            <div className="row">
                {/* Carousel Images */}
                <div className="col mb-3">
                    {product.images && <Carousel carouselName="productImages" images={product.images}/>}
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

                            <p className="text-muted text-muted text-uppercase">By: <a href="">{vendorFound.name}</a></p>
                            <span className="fs-6">Item # : {product._id}</span>
                        </div>   
                    )} 

                    {/* Quick description */}
                    <div className="my-4">
                          <p>{product.description}</p>  
                    </div>

                    {/* Item Options */}
                    <div className="d-flex justify-content-between">
                        <div>
                        <label className="mb-2 text-muted text-uppercase">Cigar Count</label>
                        <div className="d-flex item-options justify-content-start">
                            {(selectedSku && product) && product.skus.map((sku,key) => {
                                return (
                                <div key={key} className="me-3">
                                    <input type="radio" class="btn-check" 
                                        name="options" id={'option'+key} 
                                        option={sku.sku}
                                        autoComplete="off" onChange={handleSkuChange} checked={selectedSku.sku === sku.sku}/>
                                    <label class="btn btn-outline-dark" htmlFor={'option'+key}>{sku.option}</label>
                                </div>
                                )
                            })}
                        </div>
                        </div>
                        {/* Price */}
                        <div className="price-container">
                            <label className="text-muted text-uppercase">Price</label>
                            <div className="d-flex justify-content-between">
                                <div>
                                    {selectedSku && <h3 className="m-0 price-amount">{formatMoney(selectedSku.price)}</h3>}
                                    <p className="text-muted m-0 font-weight-light text-decoration-line-through"> $89.99 MSRP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* In stock */}
                    <p className="m-0 text-success">{selectedSku && selectedSku.stock_qty} in stock</p>
                    {/*Qty and add to cart  */}
                     <div className="my-4">
                        <div className="form-input qty-cart-input"> <i className="fa fa-envelope" /> 
                            <label className="mb-1 text-muted text-uppercase">Qty</label>
                            <div className="d-flex">
                                <input type="num" min="1" max={selectedSku && selectedSku.stock_qty} 
                                className="form-control w-25 border-radius me-2" placeholder="0" onChange={e => setQty(e.target.value)} value={qty} />
                                <button class="btn btn-dark flex-grow-1 text-uppercase" type="button" onClick={handleAddToCart}>Add to Cart <i className="bi bi-cart"></i></button>
                            </div>
                        </div>
                     </div>
                </div>
           
            </div>

            <div className="row mt-3">
            <p className="fs-4 pb-2">Product Information</p>
            <div class="card-group">
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Description</h5>
                    <p class="card-text">{vendorFound.description}</p>
                    <div className="company-logo">
                        <img class="img-fluid d-block mx-auto" src="https://www.plasenciacigars.com/wp-content/themes/plasencia-cigars-2018/img/logo-footer.svg" alt="Responsive image"/>
                    </div>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">Details</h5>
                    <div className="">
                        <div className="border-bottom ">
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
            

            {/* Similar Products */}
            <div className="row my-5">
                <div className="col">
                    <div>
                        <p className="fs-4 border-bottom pb-2"> Similar Products</p>
                        <div className="d-flex flex-wrap">
                            {products && products.map(product => <ProductSearchResult key={product._id} productInfo={product} />)}
                        </div>
                        <h6 className="card-header"></h6>
                    </div>
                </div>
            </div>
        </ProductPageStyled>
    )
}

export default ProductPage

const ProductPageStyled = styled.div`
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

`
