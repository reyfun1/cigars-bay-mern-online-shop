// import the constants
import {
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    PRODUCT_DELETE_FAIL,
    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_SUCCESS,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,

    PRODUCT_BEST_SELLER_REQUEST,
    PRODUCT_BEST_SELLER_SUCCESS,
    PRODUCT_BEST_SELLER_FAIL,

    PRODUCT_NEW_ARRIVAL_REQUEST,
    PRODUCT_NEW_ARRIVAL_SUCCESS,
    PRODUCT_NEW_ARRIVAL_FAIL,

    PRODUCT_FREATURED_REQUEST,
    PRODUCT_FREATURED_SUCCESS,
    PRODUCT_FREATURED_FAIL,

    PRODUCT_UPLOAD_IMAGE_REQUEST,
    PRODUCT_UPLOAD_IMAGE_SUCCESS,
    PRODUCT_UPLOAD_IMAGE_FAIL

} from '../constants/productConstants'

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return {loading: true}
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, success: true , product: action.payload}
        case PRODUCT_CREATE_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}

export const productUploadImagesReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_UPLOAD_IMAGE_REQUEST:
            return {loading: true}
        case PRODUCT_UPLOAD_IMAGE_SUCCESS:
            return { loading: false, path: action.payload}
        case PRODUCT_UPLOAD_IMAGE_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}

export const productListReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []}
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products, 
                pages: action.payload.pages, 
                page: action.payload.page }
            case PRODUCT_LIST_FAIL: 
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

export const productBestSellerReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_BEST_SELLER_REQUEST:
            return {loading: true, products: []}
        case PRODUCT_BEST_SELLER_SUCCESS:
            return {
                loading: false,
                products: action.payload.products
            }
            case PRODUCT_BEST_SELLER_FAIL: 
            return { loading: false, error: action.payload}
        default:
            return state
    }
}
export const productNewArrivalReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_NEW_ARRIVAL_REQUEST:
            return {loading: true, products: []}
        case PRODUCT_NEW_ARRIVAL_SUCCESS:
            return {
                loading: false,
                products: action.payload.products
            }
            case PRODUCT_NEW_ARRIVAL_FAIL: 
            return { loading: false, error: action.payload}
        default:
            return state
    }
}
export const productFreaturedReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_FREATURED_REQUEST:
            return {loading: true, products: []}
        case PRODUCT_FREATURED_SUCCESS:
            return {
                loading: false,
                products: action.payload.products
            }
            case PRODUCT_FREATURED_FAIL: 
            return { loading: false, error: action.payload}
        default:
            return state
    }
}


export const productDetailsReducer = (
    state = { product: { } },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { ...state, loading: true }
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload }
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
