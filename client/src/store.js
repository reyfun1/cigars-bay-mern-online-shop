import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// Import reducers
import { userRegisterReducer } from './reducers/userReducers'

// Combine Reducers
const reducer = combineReducers({
    userRegister: userRegisterReducer
})
// Define global initial states
const initialState = {

}

const middleware = [thunk]

// Create actual store 
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store