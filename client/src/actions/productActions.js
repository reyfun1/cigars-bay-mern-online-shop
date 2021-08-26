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
import axios from 'axios'


export const createProduct = (product) => async( dispatch, getState) => {
    try {
        // set loading true
        dispatch({
            type: PRODUCT_CREATE_REQUEST
        })

        // extract info of the logeed in user 
        const {
            userLogin: {
                userInfo
            }
        } = getState();

        const reqConfig = {
            headers: {
                'Authorization': `Bearer ${userInfo.token}`,
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post('/api/products', product, reqConfig)

        // On success
        dispatch({type: PRODUCT_CREATE_SUCCESS, payload: data})

    } catch (error) {
        // on error
        dispatch({
            type: PRODUCT_CREATE_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}

export const uploadProductImage = (images) => async( dispatch, getState) => {
    try {
        // set loading true
        dispatch({
            type: PRODUCT_UPLOAD_IMAGE_REQUEST
        })

        // extract info of the logeed in user 
        const {
            userLogin: {
                userInfo
            }
        } = getState();

        const reqConfig = {
            headers: {
                'Authorization': `Bearer ${userInfo.token}`,
                'Content-Type' : 'multipart/form-data'
            }
        }

        const formData = new FormData()
        formData.append('image', images)

        const { data } = await axios.post('/api/upload', formData, reqConfig)

        // On success
        dispatch({type: PRODUCT_UPLOAD_IMAGE_SUCCESS, payload: data})

    } catch (error) {
        // on error
        dispatch({
            type: PRODUCT_UPLOAD_IMAGE_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}

export const getProductsByTag = (tag) => async(dispatch, getState) => {

    let typeRequest = ''
    let typeSuccess = ''
    let typeFail = ''

    // Determine action type by tags
    switch (tag) {
        case 'best-seller':
            typeRequest = PRODUCT_BEST_SELLER_REQUEST
            typeSuccess = PRODUCT_BEST_SELLER_SUCCESS
            typeFail = PRODUCT_BEST_SELLER_FAIL
            break;
        case 'new-arrival':
            typeRequest = PRODUCT_NEW_ARRIVAL_REQUEST
            typeSuccess = PRODUCT_NEW_ARRIVAL_SUCCESS
            typeFail = PRODUCT_NEW_ARRIVAL_FAIL
            break;
        case 'freatured':
            typeRequest = PRODUCT_FREATURED_REQUEST
            typeSuccess = PRODUCT_FREATURED_SUCCESS
            typeFail = PRODUCT_FREATURED_FAIL
            break;
        default:
            return
    }

    console.log(tag)

    try {
        dispatch({type:typeRequest})

        const { data } = await axios.get(`/api/products/tags/${tag}`)

        dispatch({
            type: typeSuccess,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: typeFail
        })
    }
}


export const listProducts = (keyword = '', pageNumber = '') => async (dispatch, getState) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const { data } = await axios.get(`/api/products?keyword=${keyword}&pagenumber=${pageNumber}`)

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: 
                error.response && 
                error.response.data.message ? 
                error.response.data.message : error.message
        })
    }


}

export const listProductDetails = id => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST })
  
      const { data } = await axios.get(`/api/products/${id}`)
  
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
}





