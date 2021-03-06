import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {  formatMoney } from 'accounting-js'
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const ProductSearchResult = ({productInfo, bigCard, clickMethod}) => {
    const [vendorFound, setVendorFound] = useState({})
    const dispatch = useDispatch()

    const vendorList = useSelector(state => state.vendorList)
    const { vendors, loading } = vendorList 

    const {name, images, vendor, skus, description} = productInfo

    // lookup vendor
    useEffect(()=>{
        if(vendors){
            const foundVendor = vendors.find(v => v._id === vendor)
            setVendorFound(foundVendor)
        }
    },[vendors])

    const handleAddToCartClick  = () => dispatch(addToCart(productInfo, skus[0],vendorFound, 1))


    let extraClasses = bigCard ?  'bigCard ': '';

    return (
        <DivStyled className={`card ${extraClasses} border flex-row`}>
            {skus && skus.length > 0 && skus.map( sku => {
                if(sku.isSearchable){
                    return (
                    <div key={sku.sku} className="d-flex flex-column justify-content-between">
                        <div className="img-container position-relative">
                            <img src={images[0]} className="" alt="..." onClick={() => clickMethod(productInfo)}/>
                            <button className="btn btn-primary btn-sm addtocart-btn text-uppercase fw-bold" onClick={handleAddToCartClick}>Add to Cart</button>
                        </div>
                        
                        <div className="card-body bg-light" onClick={() => clickMethod(productInfo)}>
                            {loading 
                                ? <LoadingSpinner/> 
                                : (<>
                                {/* {discount > 0 && <span className="badge bg-danger">{discount * 100}% OFF</span>} */}
                                {productInfo.tags.includes('freatured') && <span className="badge py-1 bg-dark text-primary fw-light"><span className="bi bi-star-fill"></span> Freatured</span>}

                                <p className="card-title mb-3 display-inline-block">
                                    <small className="text-uppercase text-muted text-nowrap">{vendorFound && vendorFound.name}</small> <br />
                                    {name} - {sku.option}
                                </p>
                        
                                {bigCard && 
                                <>
                                    <p className="">
                                        {description}
                                    </p>
                                    <div className="text-center">
                                        {/* <button type="button" className="btn btn-outline-primary m-3">View Collection</button> */}
                                    </div>
                                </>
                                }
                                </>) }
                        </div>
                        <div className="card-footer bg-light text-end border-0 position-relative"  onClick={() => clickMethod(productInfo)}>
                            {skus && <span className="h6 fw-bold">{formatMoney(skus[0].price)}</span>}
                        </div>
                        
                    </div>)
                }                
                }
            )}
        </DivStyled>
    )
}

export default ProductSearchResult


const DivStyled = styled.div`
    border-radius: 0 !important;
    cursor: pointer;

    .addtocart-btn{
        border-radius: 0 !important;
        position: absolute;
        width: 90%;
        font-size: 0.9rem;
        z-index: 100;
        top: 100%;
        left:50%;
        transform: translate(-50%,0%);
        pointer-events: none;
        opacity: 0;
        transition: transform .2s, opacity .4s;
    }


    :hover{
        .addtocart-btn{
            pointer-events: all;
            opacity: 0.85;
            transform: translate(-50%,-100%)
        }
    }

    .card-body{
        z-index: 200;
    }
    .card-title{
        font-size: 0.9rem;
    }

    box-shadow: 0 8px 22px 0 rgb(177 177 177 / 50%);


    .img-container{
        width: 100%;
        img{
            transition: transform .2s ease;
            width: 100%;
            height: 100%;
        }
    }

    .card-body .badge{
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0;
        border-bottom-left-radius: 5px
    }

    @media screen and (max-width: 768px) {
        margin-left: auto;   
        margin-right: auto; 
        width: 100%;

        &:not(.bigCard){
            max-width: 48%;   
            width: 100%;
        }

        img{
            display: block;
            max-width: 250px;
            margin: 0 auto;
        }
    }
    @media screen and (min-width: 768px) {
        &:not(.bigCard){
            max-width: 48%;    
            width: 100%;
        }
        .card-body:hover, .card-footer{
            .card-title{
                text-decoration: underline;
            }
        }
    }
    @media screen and (min-width: 992px) {
        &:not(.bigCard){
            max-width: 24%;   
            width: 100%;
        }
    }
    @media screen and (max-width: 450px) {
        .addtocart-btn{
            display: none;
        }
    }
`

