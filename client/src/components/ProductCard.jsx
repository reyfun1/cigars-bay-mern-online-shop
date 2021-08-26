import React  , { useEffect, useState } from 'react'
import styled from 'styled-components'
import {  formatMoney } from 'accounting-js'
import axios from 'axios'
import LoadingSpinner from './LoadingSpinner'

 

const ProductCard = ({productInfo, bigCard, clickMethod}) => {
    const {name, images, vendor, skus, tags, description} = productInfo

    let extraClasses = bigCard ?  'bigCard ': '';

    const [vendorLoading, setVendorLoading] = useState(true)
    const [vendorFound, setVendorFound] = useState({})

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
    

    return (
        <DivStyled className={`card ${extraClasses} align-self-stretch position-relative`} onClick={() => clickMethod(productInfo)}>
            <div className="overflow-hidden image-container">
                <img src={images && images[0]} className="card-img-top img-fluid" alt="..."/>
            </div>
            <div className="card-body">
                {/* {discount > 0 && <span className="badge bg-danger">{discount * 100}% OFF</span>} */}
                {tags && tags.includes('freatured') && <span className="badge bg-warning fw-light"><span className="bi bi-star-fill"></span> Freatured</span>}

                {vendorLoading ? (
                    <LoadingSpinner/>
                ) : (
                    <>
                    <p className="card-title m-0 mb-2 text-muted text-uppercase">{vendorFound.name}</p>
                    <p className="card-title m-0 mb-2">{name}</p>

                    {tags && tags.includes('freatured') && bigCard && <p className="card-text">{description}</p>}
                    </>
                )}
                


                {bigCard && 
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-primary m-3">View Collection</button>
                    </div>}
            </div>
            <div class="card-footer border-none text-end">
                {skus && <span className="h6 fw-bold">{formatMoney(skus[0].price)}</span>}
            </div>
        </DivStyled>
    )
}

export default ProductCard


const DivStyled = styled.div`
    
    cursor: pointer;
    box-shadow: 0 8px 22px 0 rgb(177 177 177 / 33%), 0 -8px 22px 0 rgb(177 177 177 / 33%);
    border-radius: 15px;

    .card-title{
        font-size: 0.9rem;
    }

    &:not(.bigCard){
        :hover {
            background-color: #e0e0e0;
        }
    }

    .img-container{
        width: 100%;
        margin: 0 auto;
        max-width: 150px;
    }
    
    img{
        height: 100%;
        transition: transform .2s ease;
        border-top-right-radius : 15px;
        border-top-left-radius : 15px;
        object-fit: cover;
        :hover{
            transform: scale(1.1)
        }
    }

    &:hover{
        img{
            transform: scale(1.05) 
        }
    }


    .card-body .badge{
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0;
        border-bottom-left-radius: 5px
    }

    .bi{
        vertical-align: .225em;
    }
    &:not(.bigCard){
        max-height: 380px;  
    }
   
    width: 100%;

    @media screen and (min-width: 768px) {
        &:not(.bigCard){
            max-width: 32%;    
        }
    }
    @media screen and (min-width: 992px) {
        &:not(.bigCard){
            max-width: 24%; 
        }  
    }
`

