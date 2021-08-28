import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,

    USER_LOGOUT,
} from '../constants/userConstants'

import axios from 'axios'

export const registerUser = (name,email,password) => async(dispatch) => {
    try {
        // set losing to true
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        // build the request
        const reqConfig = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }

        // Make the request
        const { data } = await axios.post('/api/users', {name,email,password}, reqConfig)

        // Call the success
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        // save user data to localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))

        // TODO: LOG THE USER HERE

    } catch(error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}

export const loginUser = (email, password) => async(dispatch) => {
    try {
        // set loading to true 
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        // build the request 
        const reqOptions = {headers : {'Content-Type' : 'application/json'}}

        // make the request 
        const { data } = await axios.post('/api/users/login', {email, password},reqOptions)
        console.log(data)

        // Call the success
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // save user data to localStorage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ?
            error.response.data.message :
            error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    dispatch({ type: USER_LOGOUT })
    // dispatch({ type: USER_DETAILS_RESET })
    // dispatch({ type: ORDER_LIST_MY_RESET })
    dispatch({ type: USER_LIST_RESET })
    document.location.href = '/login'
  }

export const listUsers = () => async(dispatch, getState) => {
    try {
        // set loading
        dispatch({type: USER_LIST_REQUEST})

        // get user info
        const { userLogin: { userInfo }} = getState()
        
        // set request configuration
        const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
        }

        // make request 
        const { data } = await axios.get(`/api/users`, config)

        // Success
        dispatch({
            type: USER_LIST_SUCCESS,
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
            type: USER_LIST_FAIL,
            payload: message,
          })
    }

}
