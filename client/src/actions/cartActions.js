import axios from 'axios'
import {
  CART_ADD_ITEM,
  CART_UPDATE_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants'

export const addToCart = (product, selectedSku, vendorFound, qty) => async (dispatch, getState) => {
    dispatch({
        type : CART_ADD_ITEM,
        payload: {
            name : product.name,
            vendor : product.vendor,
            vendor_name: vendorFound.name,
            category : product.category,
            tags : product.tags,
            images : product.images,
            product_id : product._id,
            option : selectedSku.option,
            price : selectedSku.price,
            shipping : selectedSku.shipping,
            sku : selectedSku.sku,
            stock_qty : selectedSku.stock_qty,
            sku_id : selectedSku._id, 
            qty : qty,
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = sku_id => (dispatch, getState) => {
    dispatch({
        type : CART_REMOVE_ITEM,
        payload: sku_id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const updateCartItemQty = (sku_id,newQty) => (dispatch, getState) => {
    dispatch({
        type: CART_UPDATE_ITEM,
        payload: {sku_id, newQty}
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}