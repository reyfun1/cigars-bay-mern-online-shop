import React, {useState} from 'react'
import styled from 'styled-components'
const CartItem = ({productInfo, type}) => {
    const {id, company_name, brand_name, product_name, price, price_before, discount, imgSRC, freatured_text, isFreatured} = productInfo

    const [qty, setQty] = useState(1)

    switch (type) {
        case 'item':
            return (
                <CartItemStyled className="border-bottom border-dark" >
                    <div className="row my-3 py-2">
                        <div className="col">
                            <img src={imgSRC} alt="" />
                        </div>
        
                        <div className="col">
                            <p className="fw-bold">{brand_name}</p>
                            <small>{product_name}</small>
                        </div>
        
                        <div className="col mt-3 mt-sm-0">
                            <div className="mb-3 px-2 d-flex justify-content-between ">
                                    <div className="px-md-5 px-sm-3 px-2">
                                        <input type="number" className="form-control w-100 text-center mb-2" aria-label="1" min="1" value={qty} onChange={(e) => setQty(e.target.value)}/>
                                        <button type="button" className="btn w-100 btn-outline-secondary btn-sm text-nowrap"><small>Remove</small></button>
                                    </div>
                                    <div className="text-end">
                                        <p className="fw-bold m-0 fs-5">$197.99</p>
                                        <p className="text-muted text-decoration-line-through"><small>$220.00</small></p>
                                    </div>
                            </div>
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
    
}
img{
    max-width: 120px
}
`
