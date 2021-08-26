import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createMiddleware } from 'redux-action-listener-hook';

// Import reducers
import { userLoginReducer, userRegisterReducer, userListReducer } from './reducers/userReducers'
import { productCreateReducer, productUploadImagesReducer, productListReducer, productDetailsReducer, productNewArrivalReducer, productBestSellerReducer, productFreaturedReducer} from './reducers/productReducers'
import { vendorListReducer } from './reducers/vendorReducers'
import { cartReducer } from './reducers/cartReducers'

// Combine Reducers
const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,
    userList: userListReducer,
    adminProductCreate: productCreateReducer,
    adminImageUpload : productUploadImagesReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productListNewArrival: productNewArrivalReducer,
    productListBestSeller: productBestSellerReducer,
    productListFreatured : productFreaturedReducer,
    vendorList : vendorListReducer,
    cart: cartReducer,
})

// check if there is avaible user info in storage 
const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null

// check for cart items saved on storage
const cartItemsFromStorage = localStorage.getItem('cartItems')
? JSON.parse(localStorage.getItem('cartItems'))
: []

// check for cart shipping address saved on storage
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

// Define global initial states
const initialState = {
    cart : {
        cartItems : cartItemsFromStorage,
        sahippingAddress : shippingAddressFromStorage
    },
    userLogin : {
        userInfo : userInfoFromStorage,
        success : userInfoFromStorage ? true : false
    } 
}

const middleware = [thunk]

// Create actual store 
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(createMiddleware(), thunk))
)
export default store