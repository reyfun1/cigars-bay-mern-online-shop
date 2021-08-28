import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD,
    CART_CLEAR_ITEMS,
    CART_UPDATE_ITEM,
  } from '../constants/cartConstants'

export const cartReducer = (state = {cartItems: [], shippingAddress : {}}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const itemAlreadyExist = state.cartItems.find(x => x.sku === item.sku)

            if(itemAlreadyExist){
                return {
                    ...state,
                    // cartItems : state.cartItems.map(x => x.product === itemAlreadyExist ? item : x)
                }
            } else{
                return {
                    ...state,
                    cartItems : [...state.cartItems, item]
                }
            }
        case CART_UPDATE_ITEM: {

            const newQty = action.payload.newQty
            const sku_id = action.payload.sku_id

            return {
                ...state,
                cartItems : state.cartItems.map(x => {
                    if(x.sku === sku_id){
                        x.qty = newQty
                        return x
                    } else{
                        return x
                    }
                })
            }
        }
        case CART_REMOVE_ITEM : 
            return {
                ...state,
                cartItems : state.cartItems.filter(x => x.sku !== action.payload)
            }
        case CART_CLEAR_ITEMS : 
            return {
                ...state,
                cartItems : []
            }
    
        default:
            return state
    }
}