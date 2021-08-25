import React, {useState} from 'react'
import styled from 'styled-components'
import { formatMoney } from 'accounting-js'
import { removeFromCart, updateCartItemQty } from '../actions/cartActions'
import { useDispatch } from 'react-redux'

import { Link, useHistory } from 'react-router-dom'

import {useTransition, animated } from '@react-spring/web'

const CartItem = ({productInfo, type}) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const {vendor, name, option, images, price, stock_qty, qty, sku, vendor_name, product_id } = productInfo

    const [inputQty, setInputQty] = useState(qty)

    const handleQtyChange = newQty => {
        dispatch(updateCartItemQty(sku,newQty))
        setInputQty(newQty)
    }

    const handleRemoveItem = sku_id => {
        dispatch(removeFromCart(sku_id))
    }


    switch (type) {
        case 'item':
            return (
                    <CartItemStyled >
                        {productInfo && <div className="d-flex justify-content-between my-3 py-2 flex-wrap">

                            <div className="col-2 image-container" onClick={() => history.push(`/product/${product_id}`)}>
                                <img src={images[0]} className="img-fluid" alt="" />
                            </div>
                            
                            <Link className="w-50 d-block text-dark productnames" to={`/product/${product_id}`}>
                                <p className="m-0 text-uppercase text-muted ">{vendor_name}</p>
                                <p className="">{name} - {option}</p>
                            </Link>

                            <div className="">
                                <div className="qty-input">
                                    <input type="number" className="form-control text-center mb-2" aria-label="1" min="1" value={inputQty} onChange={(e) => handleQtyChange(e.target.value)}/>
                                    <button type="button" className="btn btn-outline-secondary  w-100 btn-sm text-nowrap" onClick={e => handleRemoveItem(sku)}><small>Remove</small></button>
                                </div>
                            </div>

                            <div className="text-end m-0 amount-container text-nowrap">
                                <p className="m-0 fs-5">{formatMoney(price * qty)}</p>
                                <p className="text-muted text-decoration-line-through"><small>$220.00</small></p>
                            </div>
            
                        </div>}
                    </CartItemStyled>
            )
        default:
            break;
    }


    
}

export default CartItem

const CartItemStyled = styled.div`
.image-container{
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
}
.productnames:hover {
    text-decoration: underline !important;
}
a{
    text-decoration : none;
}
.amount-container{
    width: 15%;
}
.qty-input{
    max-width : 75px
}
`
