import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from '../constants/userConstants'

// import axios from 'axios'
const axios = ''

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