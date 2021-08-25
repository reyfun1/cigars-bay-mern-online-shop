import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {  formatMoney } from 'accounting-js'
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'

const ProductSearchResult = ({productInfo, bigCard, clickMethod}) => {
    const [vendorLoading, setVendorLoading] = useState(true)
    const [vendorFound, setVendorFound] = useState({})

    const {name, price, images, vendor, skus} = productInfo

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

    

    const isFreatured = false
    const price_before = 0
    const discount = 0
    const freaturedText = ''

    let extraClasses = bigCard ?  'bigCard ': '';

    return (
        <DivStyled className={`card ${extraClasses} p-3`} onClick={clickMethod}>
            {skus && skus.length > 0 && skus.map( sku => {
                if(sku.isSearchable){
                    return (
                    <div className="">
                        <div className="img-container">
                            <img src={images[0]} className="img-fluid" alt="..."/>
                        </div>
                        <div className="card-body position-relative d-block">
                            {vendorLoading 
                                ? <LoadingSpinner/> 
                                : (<>
                                {/* {discount > 0 && <span className="badge bg-danger">{discount * 100}% OFF</span>} */}
                                {/* {isFreatured && <span className="badge bg-warning fw-light"><span className="bi bi-star-fill"></span> Freatured</span>} */}
                                <p className="card-title mb-3">
                                    <small className="text-uppercase text-muted">{vendorFound.name}</small> <br />
                                    {name} - {sku.option}
                                </p>
            
                                {isFreatured && <p className="card-text">{freaturedText}</p>}
            
                                <p className="card-text position-absolute bottom-0 right-100 d-block">
                                    <span className="fs-6 fw-bold">{formatMoney(sku.price)}</span> &nbsp;
                                    <span className='text-muted'><del>{price_before > 0 && formatMoney(price_before)}</del></span>
                                </p>
            
                                {bigCard && 
                                    <div className="text-end">
                                        <button type="button" className="btn btn-outline-primary m-3">View Collection</button>
                                    </div>}
                                </>) }
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
    border: none;
    cursor: pointer;


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
        margin: 0 auto;
        max-width: 200px;
        img{
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
    }
    @media screen and (min-width: 768px) {
        max-width: 50%;    
        width: 100%;
    }
    @media screen and (min-width: 992px) {
        max-width: 33%;   
        width: 100%;
    }
`

