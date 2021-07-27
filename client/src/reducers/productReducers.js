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
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL,

    PRODUCT_UPLOAD_IMAGES_REQUEST,
    PRODUCT_UPLOAD_IMAGES_SUCCESS,
    PRODUCT_UPLOAD_IMAGES_FAIL


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
        case PRODUCT_UPLOAD_IMAGES_REQUEST:
            return {loading: true}
        case PRODUCT_UPLOAD_IMAGES_SUCCESS:
            return { loading: false, paths: action.payload}
        case PRODUCT_UPLOAD_IMAGES_FAIL:
            return { loading : false, error: action.payload}
        default:
            return state;
    }
}
