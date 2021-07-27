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
    PRODUCT_CREATE_REVIEW_REQUEST,
    PRODUCT_CREATE_REVIEW_SUCCESS,
    PRODUCT_CREATE_REVIEW_FAIL,
    PRODUCT_TOP_REQUEST,
    PRODUCT_TOP_SUCCESS,
    PRODUCT_TOP_FAIL,

    PRODUCT_UPLOAD_IMAGES_REQUEST,
    PRODUCT_UPLOAD_IMAGES_SUCCESS,
    PRODUCT_UPLOAD_IMAGES_FAIL

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
                'Authorization': `Bearer ${userInfo.data.token}`,
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

export const uploadProductImages = (images) => async( dispatch, getState) => {
    try {
        // set loading true
        dispatch({
            type: PRODUCT_UPLOAD_IMAGES_REQUEST
        })

        // extract info of the logeed in user 
        const {
            userLogin: {
                userInfo
            }
        } = getState();

        const reqConfig = {
            headers: {
                'Authorization': `Bearer ${userInfo.data.token}`,
                'Content-Type' : 'multipart/form-data'
            }
        }

        const formData = new FormData()
        formData.append('image', images)

        const { data } = await axios.post('/api/upload', formData, reqConfig)

        // On success
        dispatch({type: PRODUCT_UPLOAD_IMAGES_SUCCESS, payload: data})

    } catch (error) {
        // on error
        dispatch({
            type: PRODUCT_UPLOAD_IMAGES_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}

