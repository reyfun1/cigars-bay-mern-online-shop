import { formatMoney } from 'accounting-js'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { listProductDetails } from '../actions/productActions'
import BreadCrumb from '../components/BreadCrumb'
import Carousel from '../components/Carousel'
import ProductDetailsTable from '../components/ProductDetailsTable'
import ProductSearchResult from '../components/ProductSearchResult'

const ProductPage = ({match}) => {
    const productID = match.params.id

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { products } = productList

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, product , error} = productDetails

    // find the product in the array, if not found request it 
    useEffect(() => {
        dispatch(listProductDetails(productID))
    }, [productID])


    return (
        <ProductPageStyled className="container py-4">
            <BreadCrumb/>
            <div className="row">
                {/* Carousel Images */}
                <div className="col mb-3">
                    <Carousel carouselName="productImages" mainImage={product.image} images={product.productImages}/>
                </div>
                {/* Summary and price  */}
                <div className="col-md-6 mb-3">
                    {/* Item title */}
                    <div>
                        <p className="fs-4">
                            {product.brandName} {product.vitolaName} - {product.cigarLengthSize}x{product.cigarRingSize} {product.vitolaStyle} -  {product.category} of {product.cigarCount}
                        </p>

                        <p className="text-muted text-muted text-uppercase">By: <a href="">{product.companyName}</a></p>
                        <span className="fs-6">Item # : {product._id}</span>
                    </div>    

                    {/* Quick description */}
                    <div className="my-4">
                          <p>This Plasencia Alma Del Fuego Candente cigar is made in Nicaragua. Outside, you'll find a Nicaraguan wrapper. Inside, the binder is Nicaraguan, and the filler is Nicaraguan.</p>  
                    </div>

                    {/* Item Options */}
                    <div className="d-flex justify-content-between">
                        <div>
                        <label className="mb-2 text-muted text-uppercase">Cigar Count</label>
                        <div className="d-flex item-options justify-content-start">
                                    <div className="me-3">
                                        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked/>
                                        <label class="btn btn-outline-dark" for="option1">Box of 10</label>
                                    </div>

                                    <div className="">
                                        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off"/>
                                        <label class="btn btn-outline-dark" for="option2">Pack of 5</label>
                                    </div>
                        </div>
                        </div>
                        {/* Price */}
                        <div className="">
                        <label className="text-muted text-uppercase">Price</label>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h3 className="m-0">{formatMoney(product.price)}</h3>
                                    <p className="text-muted m-0 font-weight-light text-decoration-line-through"> $89.99 MSRP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* In stock */}
                    <p className="m-0 text-success">{product.countInStock} in stock</p>
                    {/*Qty and add to cart  */}
                     <div className="my-4">
                        <div className="form-input qty-cart-input"> <i className="fa fa-envelope" /> 
                            <label className="mb-1 text-muted text-uppercase">Qty</label>
                            <div className="d-flex">
                                <input type="number" min="1" max={product.countInStock} className="form-control w-25 border-radius me-2" placeholder="0" />
                                <button class="btn btn-dark flex-grow-1 text-uppercase" type="button">Add to Cart <i className="bi bi-cart"></i></button>
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
                    <p class="card-text">{product.description}</p>
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
                            <div className="d-flex justify-content-between border-bottom p-1">
                                <p className="m-0 text-muted text-uppercase">Shape</p> <p className="m-0">{product.vitolaStyle}</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom p-1">
                                <p className="m-0 text-muted text-uppercase">Strength</p> <p className="m-0">{product.strength}</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom p-1">
                                <p className="m-0 text-muted text-uppercase">Wrapper</p> <p className="m-0">{product.wrapper}</p>
                            </div>
                            <div className="d-flex justify-content-between border-bottom p-1">
                                <p className="m-0 text-muted text-uppercase">Size</p> <p className="m-0">{product.cigarLengthSize}x{product.cigarRingSize}</p>
                            </div>
                            <div className="d-flex justify-content-between p-1">
                                <p className="m-0 text-muted text-uppercase">Origin</p> <p className="m-0">Nicaragua</p>
                            </div>
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

.item-options{
    // label{
    //     font-size: 0.85rem;
    // }
    // small{
    //     font-size: 0.65rem;
    // }
}
`
