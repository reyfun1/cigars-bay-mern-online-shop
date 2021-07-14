import React from 'react'
import styled from 'styled-components'
const CartItem = ({productInfo}) => {
    const {id, company_name, brand_name, product_name, price, price_before, discount, imgSRC, freatured_text, isFreatured} = productInfo

    return (
        <CartItemStyled >
            <div className="row my-2">
                <div className="col-md">
                    <img src={imgSRC} alt="" />
                </div>

                <div className="col">
                    <p>Brand Name</p>
                    <small>7x58 size name</small>
                </div>

                <div className="col">
                    <p>select</p>
                    <p>remove</p>
                </div>

                <div className="col text-right">
                    <p className="text-muted">$220.00</p>
                    <p >$197.99</p>
                </div>
            </div>
        </CartItemStyled>
    )
}

export default CartItem

const CartItemStyled = styled.div`
img{
    max-width: 150px
}
`
