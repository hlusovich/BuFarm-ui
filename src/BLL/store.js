import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    userReducer,
    productsReducer,
    loadReducer,
    productInfoReducer, authReducer, cartReducer, initizlizedReducer, addressesReducer
} from "./reducers/reducers";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

const reducers = combineReducers({
    user: userReducer,
    products: productsReducer,
    canLoad:loadReducer,
    productInfo:productInfoReducer,
    authointecated: authReducer,
    form:formReducer,
    cart:cartReducer,
    ititialized:initizlizedReducer,
    addresses:addressesReducer
})
export const store = createStore(reducers,applyMiddleware(thunkMiddleware))