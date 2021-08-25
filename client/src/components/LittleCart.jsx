import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import styled from 'styled-components'

const LittleCart = () => {
    return (
        <LittleCartStyled className={``}>
            <p>Test</p>
        </LittleCartStyled>
    )
}

const LittleCartStyled = styled.div`
`

const LatestProductLittleCart = ({showLittleCart, setShowLittleCart}) => {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    const [activeItem, setActiveItem] = useState()

    const history = useHistory()

    const handleViewCartClick = () => {
        history.push('/cart/')
    }

    useEffect(() => {
        setActiveItem(cartItems[cartItems.length - 1])
    }, [cartItems])
    return (
        <LatestProductLittleCartStyled className={`position-absolute end-0 top-0 shadow-lg ${showLittleCart ? 'show' : 'not-show'}`}>
            {activeItem && <div className="card">
            <div class="card-header text-uppercase text-muted text-center d-flex justify-content-between">
                <p className="m-0">Just Added to Your Cart!</p>
                <button type="button" class="btn-close" aria-label="Close" onClick={() => setShowLittleCart(false)}></button>
            </div>
            <div className="card-body">
                <div className="row">
                    {/* Image */}
                    <div className="col-3">
                        {activeItem.images && <div className="img-container">
                            <img src={activeItem.images[0]} alt="" className="img-fluid" alt="..." />
                        </div>}
                    </div>
                    {/* Brand name and size */}
                    <div className="col-7">
                        {activeItem.name} - {activeItem.option}
                    </div>
                    {/* Qty */}
                    <div className="col-2 text-center">
                        <p className="m-0 text-muted text-uppercase">Qty</p>
                        <p className="m-0 ">{activeItem.qty}</p>                       
                    </div>
                </div>
            </div>

            <div className="card-footer px-5">
                <button className="btn btn-sm btn-primary w-100" onClick={handleViewCartClick}>View Cart</button>
                <button className="btn btn-sm btn-light w-100" onClick={() => setShowLittleCart(false)}>Continue Shopping</button>    
            </div>

            </div>}
        </LatestProductLittleCartStyled>
    )
}

const LatestProductLittleCartStyled = styled.div`

    max-width: 350px;
    z-index : 1080;

    &.show{
        display: block;
        animation : slidein ease-in .3s forwards;
    }

    &.not-show{
        animation : slideout ease-out .3s forwards;
    }

    .image-container{
        max-width: 60px;
        img{
            width: 100%;
        }
    }

    @media only screen and (min-width : 768px) {
        @keyframes slidein {
            from {
              opacity: 0;
              transform: translate(0%,-100%);
            }
          
            to {
              opacity: 1;
              transform: translate(0%,0%);
            }
          }
    
        @keyframes slideout {
            from {
                opacity: 1;
                transform: translate(0%,0%);
            }
            
            to {
                opacity: 0;
                transform: translate(0%,-150%);
            }
        }
    }

    @media only screen and (max-width : 768px) {
        position : fixed !important;   
        left: 50%;
        min-width: 350px;

        @keyframes slidein {
            from {
              transform: translate(-50%,-100%);
            }
          
            to {
              transform: translate(-50%,0%);
            }
          }
    
        @keyframes slideout {
            from {
                transform: translate(-50%,0%);
            }
            
            to {
                transform: translate(-50%,-150%);
            }
        }
        
    }





    

    

    
`

export default LittleCart
export {
    LatestProductLittleCart
}
