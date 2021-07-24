import React from 'react'
import styled from 'styled-components'

import CartItem from '../components/CartItem'
import Freatured from '../components/Freatured'
import ProductCard from '../components/ProductCard'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'


const Cart = () => {
    const pagePathName = 'cart'
    const history = useHistory()


    const handleProductCardClick = () => {

    }
    
    const handleProceedToCheckout = () => {
        history.push('/checkout/')
    }
    return (
        <CartStyled className="container py-4">
           <BreadCrumb/>
           <div className="row">
               <div className="col">
                   <h3>Shopping Cart</h3>
                   <p>(3) items in your cart</p>
               </div>
           </div>

           <div className="row">
               <div className="col-md-9 card px-5">
                    <CartItem productInfo={PRODUCT_INFO[0]} type="item"/>
                    <CartItem productInfo={PRODUCT_INFO[0]} type="item"/>
                    <CartItem productInfo={PRODUCT_INFO[0]} type="summary"/>
                    
               </div>
               <div className="col-md-3  my-3 my-lg-0">
                <button type="button" className="btn btn-primary w-100" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                <button type="button" className="btn btn-outline-secondary mt-2 w-100">Continue Shopping</button>
               </div>
           </div>

           <div className="row my-5">
            <div className="col-md-9">
                        <div className="w-100 d-md-none mt-5"></div>
                        <p className="h4">Best Sellers</p>
                        <div className="row gy-2">
                            <div className="col">
                                <ProductCard productInfo={PRODUCT_INFO[0] } clickMethod={handleProductCardClick} />
                            </div>
                            <div className="col">
                                <ProductCard productInfo={PRODUCT_INFO[1] } />
                            </div>
                            {/* <!-- Force next columns to break to new line at md breakpoint and up --> */}
                            <div className="w-100 d-lg-none"></div>

                            <div className="col">
                                <ProductCard productInfo={PRODUCT_INFO[2] } />
                            </div>
                            <div className="col">
                                <ProductCard productInfo={PRODUCT_INFO[2] } />
                            </div>
                        </div>

                        <div className="row gy-2 mt-3">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col-lg-6">
                                <button type="button" className="btn btn-primary w-100">Shop More Best Sellers &gt; </button>
                            </div>
                        </div>
        
                </div>
           </div>
        </CartStyled>
    )
}

export default Cart

const CartStyled = styled.div`
`


const PRODUCT_INFO = [
    {
        id: 1,
        brand_name: 'Alma Fuerte',
        product_name: 'Nestor IV Toro 6 x 54',
        price: 299.99,
        price_before: 399.99,
        discount: 0.25,
        imgSRC : 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_FUERTE_NESTORIV_233070.jpg'
    },
    {
        id: 2,
        brand_name: 'Alma del Campo',
        product_name: 'Guajiro Robusto 5 1/2 x 50',
        price: 199.99,
        price_before: 299.99,
        discount: 0.15,
        imgSRC : 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_CAMPO_GUAJIRO_233066.jpg'
    },
    {
        id: 3,
        brand_name: 'Alma del Fuego',
        product_name: 'Candente Robusto 5 x 50',
        price: 134.99,
        price_before: 150.99,
        discount: 0,
        imgSRC: 'https://assets.bestcigarprices.com/shopcontent/images/PLASENCIA_FUEGO_CANDENTE_236008.jpg'
    },
    {
        id: 4,
        brand_name: 'Serie G',
        product_name: 'Churchill Cameroon 7 x 50',
        price: 115.99,
        price_before: 0,
        discount: 0,
        imgSRC : 'https://assets.bestcigarprices.com/shopcontent/images/oliva_g_chur_cam.jpg',
        isFreatured : true,
        freatured_text : `Oliva Serie 'G' is a good-looking Nicaraguan premium cigar made with an authentic African Cameroon wrapper. This leaf imparts a pleasant, nutty flavor, adding to the rich bouquet presented by the Nicaraguan Habano long-fillers inside.`
    },
    
]
