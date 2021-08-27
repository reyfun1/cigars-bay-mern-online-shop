import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {  formatMoney } from 'accounting-js'
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'

const ProductSearchResult = ({productInfo, bigCard, clickMethod}) => {
    const [vendorLoading, setVendorLoading] = useState(true)
    const [vendorFound, setVendorFound] = useState({})
    const dispatch = useDispatch()

    const {name, price, images, vendor, skus, description} = productInfo

    // lookup vendor
    useEffect(()=>{
        setVendorLoading(true)
        axios.get(`/api/vendors/${vendor}`)
        .then(({data}) => {
            setVendorFound(data)
            setVendorLoading(false)
        })
        .catch(err => {

        })
    },[])

    const handleAddToCartClick  = () => {
        console.log(productInfo)
        dispatch(addToCart(productInfo, skus[0],vendorFound, 1))
    }

    
    let extraClasses = bigCard ?  'bigCard ': '';

    return (
        <DivStyled className={`card ${extraClasses} border`}>
            {skus && skus.length > 0 && skus.map( sku => {
                if(sku.isSearchable){
                    return (
                    <div key={sku.sku}>
                        <div className="img-container position-relative">
                            <img src={images[0]} className="" alt="..." onClick={() => clickMethod(productInfo)}/>
                            <button className="btn btn-danger btn-sm addtocart-btn" onClick={handleAddToCartClick}>Add to Cart <i className="bi bi-cart"></i></button>
                        </div>
                        
                        <div className="card-body position-relative" onClick={() => clickMethod(productInfo)}>
                            {vendorLoading 
                                ? <LoadingSpinner/> 
                                : (<>
                                {/* {discount > 0 && <span className="badge bg-danger">{discount * 100}% OFF</span>} */}
                                {productInfo.tags.includes('freatured') && <span className="badge bg-warning fw-light"><span className="bi bi-star-fill"></span> Freatured</span>}

                                <p className="card-title mb-3">
                                    <small className="text-uppercase text-muted text-nowrap">{vendorFound.name}</small> <br />
                                    {name} - {sku.option}
                                </p>
                        
                                {bigCard && 
                                <>
                                    <p className="">
                                        {description}
                                    </p>
                                    <div className="text-center">
                                        <button type="button" className="btn btn-outline-primary m-3">View Collection</button>
                                    </div>
                                </>
                                }
                                </>) }
                        </div>
                        <div className="card-footer text-end border-0 position-relative"  onClick={() => clickMethod(productInfo)}>
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
        background-color: white;
        z-index: 2000;
    }

    .card-title{
        font-size: 0.9rem;
    }

    //box-shadow: 15px 15px 53px rgba(128, 0, 255, 0.11);
    box-shadow: 0 8px 22px 0 rgb(177 177 177 / 50%);

    &:not(.bigCard){
        //max-height: 330px;
        // :hover {
        //     background-color: #e0e0e0
        // }
    }

    .img-container{
        width: 100%;
        //margin: 0 auto;
        //max-width: 200px;
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
            //padding: .75rem;
        }
    }
`

