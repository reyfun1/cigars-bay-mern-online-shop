import React from 'react'
import styled from 'styled-components'
import {  formatMoney } from 'accounting-js'
 

const ProductCard = ({productInfo}) => {
    const {id, company_name, brand_name, product_name, price, price_before, discount, imgSRC, freatured_text, isFreatured} = productInfo
    return (
        <DivStyled className="card h-100">
            <ImgContainerStyled>
                <ImgStyled src={imgSRC} className="card-img-top" alt="..."/>
            </ImgContainerStyled>
            <div className="card-body">
                {discount > 0 && <SpanStyled className="badge bg-danger">{discount * 100}% OFF</SpanStyled>}
                {isFreatured && <SpanStyled className="badge bg-warning">Freatured</SpanStyled>}
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
            </div>
        </DivStyled>
    )
}

export default ProductCard


const DivStyled = styled.div`
    cursor: pointer;
    :hover {
        background-color: #e0e0e0
    }
`

const SpanStyled = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0;
    border-bottom-left-radius: 5px
`

const ImgContainerStyled = styled.div`
    overflow: hidden
`

const ImgStyled = styled.img`
    transition: transform .2s ease;
    :hover{
        transform: scale(1.1)
    }
`