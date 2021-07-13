import React from 'react'
import styled from 'styled-components'
import {  formatMoney } from 'accounting-js'
 

const ProductSearchResult = ({productInfo, bigCard}) => {
    const {id, company_name, brand_name, product_name, price, price_before, discount, imgSRC, freatured_text, isFreatured} = productInfo

    let extraClasses = bigCard ?  'bigCard ': '';

    return (
        <DivStyled className={`card ${extraClasses}`}>
            <div className="overflow-hidden">
                <img src={imgSRC} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                {discount > 0 && <span className="badge bg-danger">{discount * 100}% OFF</span>}
                {isFreatured && <span className="badge bg-warning">Freatured</span>}
                <p className="card-title mb-3 h6">
                    {brand_name} - {product_name}
                </p>
                <p className="card-title mb-3">
                    {company_name}
                </p>

                {isFreatured && <p className="card-text">{freatured_text}</p>}

                <p className="card-text">
                    <span className="h6">{formatMoney(price)}</span> &nbsp;
                    <span className='text-muted'><del>{price_before > 0 && formatMoney(price_before)}</del></span>
                </p>

                {bigCard && 
                    <div className="text-end">
                        <button type="button" className="btn btn-outline-primary m-3">View Collection</button>
                    </div>}
            </div>
        </DivStyled>
    )
}

export default ProductSearchResult


const DivStyled = styled.div`
    border-radius: 0 !important;
    cursor: pointer;
    box-shadow: 15px 15px 53px rgba(128, 0, 255, 0.11);


    &:not(.bigCard){
        :hover {
            background-color: #e0e0e0
        }
    }

    

    .card-body .badge{
        position: absolute;
        top: 0;
        right: 0;
        border-radius: 0;
        border-bottom-left-radius: 5px
    }
`

