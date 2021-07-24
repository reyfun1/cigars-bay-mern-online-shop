import React, {useState} from 'react'
import styled from 'styled-components'
const CartItem = ({productInfo, type}) => {
    const {id, company_name, brand_name, product_name, price, price_before, discount, imgSRC, freatured_text, isFreatured} = productInfo

    const [qty, setQty] = useState(1)

    switch (type) {
        case 'item':
            return (
                <CartItemStyled className="border-bottom border-2" >
                    <div className="row my-3 py-2">
                        <div className="col-2">
                            <img src={imgSRC} className="img-fluid" alt="" />
                        </div>
        
                        <div className="col">
                            <p className="fw-bold">{brand_name}</p>
                            <small>{product_name}</small>
                        </div>

                        <div className="col mt-3">
                            <div className="qty-input">
                                <input type="number" className="form-control text-center mb-2" aria-label="1" min="1" value={qty} onChange={(e) => setQty(e.target.value)}/>
                                <button type="button" className="btn btn-outline-secondary  w-100 btn-sm text-nowrap"><small>Remove</small></button>
                            </div>
                        </div>

                        <div className="col text-end mt-3">
                            <p className="fw-bold m-0 fs-5">$197.99</p>
                            <p className="text-muted text-decoration-line-through"><small>$220.00</small></p>
                        </div>
        
                    </div>
                </CartItemStyled>
            )
            break;
        case 'summary':
            return (
                <CartItemStyled className="border-bottom" >
                    <div className="row my-3 py-2">
                        <div className="col text-end ">
                            <p className="fs-4">Subtotal :  <span className="fw-bold ">$199.99</span></p>
                        </div>
                    </div>
                </CartItemStyled>
            )
            break;
    
        default:
            break;
    }


    
}

export default CartItem

const CartItemStyled = styled.div`

:last-of-type {
    border-bottom: 1px solid rgba(0,0,0,0) !important;
}

.qty-input{
    max-width : 120px
}
`
