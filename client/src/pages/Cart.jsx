import React from 'react'
import styled from 'styled-components'
const Cart = () => {
    return (
        <CartStyled className="container">
           <div className="row my-4">
               <div className="col"><h3>Your Shopping Cart</h3></div>
           </div>

           <div className="row">
               <div className="col-md-9">
                    <div></div>
               </div>
               <div className="col-md-3">

               </div>
           </div>
        </CartStyled>
    )
}

export default Cart

const CartStyled = styled.div``

