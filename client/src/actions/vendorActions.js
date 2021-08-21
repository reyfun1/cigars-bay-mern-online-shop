
import {
    VENDOR_LIST_REQUEST,
    VENDOR_LIST_SUCCESS,
    VENDOR_LIST_FAIL,
} from '../constants/vendorConstants'


import axios from 'axios'

export const getVendors = () => async(dispatch, getState) => {
    try {
        // set loading
        dispatch({type: VENDOR_LIST_REQUEST})

        // get user info
        const { userLogin: { userInfo }} = getState()
        
        // set request configuration
        const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
        }

        // make request 
        const { data } = await axios.get(`/api/vendors`, config)

        // Success
        dispatch({
            type: VENDOR_LIST_SUCCESS,
            payload: data,
          })
    } catch (error) {
        const message =
        error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        if (message === 'Not authorized, token failed') {
            //dispatch(logout())
        }

        dispatch({
            type: VENDOR_LIST_FAIL,
            payload: message,
          })
    }

}
