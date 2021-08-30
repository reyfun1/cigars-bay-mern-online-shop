import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {formatMoney} from 'accounting-js'

import CartItem from '../components/CartItem'
import ProductCard from '../components/ProductCard'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import BreadCrumb from '../components/BreadCrumb'
import { useDispatch, useSelector } from 'react-redux'

import {useTransition, animated } from '@react-spring/web'
import LoadingSpinner from '../components/LoadingSpinner'
import { getProductsByTag } from '../actions/productActions'
import ProductSearchResult from '../components/ProductSearchResult'


const Cart = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart 

    // Product List Bet Seller
    const productListBestSeller = useSelector((state) => state.productListBestSeller)
    const { products: productsBestSeller, loading: bestSellerLoading, error: bestSellerError } = productListBestSeller


    const handleShoppingClick = () => history.push('/search')
    const handleProceedToCheckout = () => history.push('cart/checkout/')
    const handleProductCardClick = (productInfo) => history.push(`/product/${productInfo._id}`)

    const transitions = useTransition(cartItems, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        delay: 200,
    })

    const getNumOfItemsInCart = () => {
        return cartItems.reduce( (acc, current) => (acc + current.qty * 1), 0)
    }

    // fetch best seller products if it is empty
    useEffect(()=>{
        if(!productsBestSeller) dispatch(getProductsByTag('best-seller'))
    }, [])


    return (
        <CartStyled className="container py-4">
           <BreadCrumb/>
           
           <div className="row mb-2">
               <div className="col">
                   <div className="my-4 my-md-0 mb-md-2">
                        <p className="fs-3 m-0">Shopping Cart</p>
                        {cartItems.length > 0 ? '( ':''}
                        {cartItems && cartItems.length > 0 && 
                            getNumOfItemsInCart() + ` ${getNumOfItemsInCart() > 1 ? ') Items':') Item'} in your cart` }
                    </div>
               </div>
           </div>

           {cartItems && cartItems.length > 0 ? (
            <div className="row">
               <div className="col-md-9 card px-5">
                {transitions( (props, item) => (
                    <animated.div style={props} className={`border-bottom border-2`}>
                        <CartItem productInfo={item} type="item"/>
                    </animated.div>
                ))}
                    <div className="row my-3 py-2">
                        <div className="col text-end ">
                            <p className="fs-4">Subtotal : <span className="fw-bold">{formatMoney(cartItems.reduce( (acc, current) => ( (current.price * current.qty) + acc ), 0))}</span></p>
                        </div>
                    </div>
               </div>
               <div className="col-md-3  my-3 my-lg-0">
                <button type="button" className="btn btn-primary w-100" onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                <button type="button" className="btn btn-outline-secondary mt-2 w-100" onClick={handleShoppingClick}>Continue Shopping</button>
               </div>
           </div>

           ) : (
            <div className="row my-5 py-5">
               <div className="col-12 text-center">
                   <h2>Your Cart</h2>
                   <p>Your cart is empty</p>
                   <button className="btn btn-primary" onClick={handleShoppingClick}>Continue Shopping</button>
               </div>
           </div>

           )}
           <div className="row my-5">
            <div className="col-md-9">
                        <div className="w-100 d-md-none mt-5"></div>
                            <div className="text-center text-md-start mt-4 mb-2">
                                <p className="fs-4 m-0">Best Sellers</p>
                                <span className="text-muted">CigarsBay most sold products</span>
                            </div>  
                        <div className="d-flex align-items-stretch justify-content-center gap-2 flex-wrap">
                            {bestSellerLoading ? <LoadingSpinner/> : (
                                <>
                                {!bestSellerError ? (
                                    productsBestSeller && productsBestSeller.map(product => 
                                            <ProductSearchResult key={product._id} productInfo={product} clickMethod={handleProductCardClick} />)
                                ) : (
                                    <p>Error</p>
                                )}
                                </>
                            )}
                        </div>

                        <div className="row mt-3 justify-content-md-end pe-2">
                            <div className="col-lg-6">
                                <Link to={`/search/all`} className="btn btn-primary py-3 fw-bold w-100 text-dark text-uppercase">Shop Best Sellers &nbsp;<i className="bi bi-arrow-right-circle"></i> </Link>
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
