import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Import reducers
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

// Combine Reducers
const reducer = combineReducers({
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer
})

// check if there is avaible user info in storage 
const userInfoFromStorage = localStorage.getItem('userInfo') 
    ? JSON.parse(localStorage.getItem('userInfo')) 
    : null


// Define global initial states
const initialState = {
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
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store