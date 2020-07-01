import {
    ADD_ADDRESSES,
    ADD_COMMENT,
    ADD_PRODUCTS,
    CAN_LOAD,
    CHANGE_ADDRESSES,
    CHANGE_COUNT,
    CLEAR_CART,
    CLEAR_PRODUCTS,
    DELETE_ADDRESSES,
    DELETE_COMMENT,
    DELETE_FROM_CART,
    IS_AUTOINTECATE,
    IS_INITIALIZED,
    NOT_INITIALIZED,
    NOT_LOAD,
    REMOVE_USER,
    SET_ADDRESSES,
    SET_CART,
    SET_CART_TOTAL,
    SET_PAGE,
    SET_PRODUCT_INFO,
    SET_PRODUCTS,
    SET_TOTAL,
    SET_USER,

} from "../actions/actions";


export const userReducer = (state = {user: {first_name: "undefined",last_name:"undefined",email:"undefined"}}, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.user}
        case REMOVE_USER:
            return {...state, user: null}
        default:
            return state

    }
}


export const productsReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_PRODUCTS:
            return [...state, ...action.products]
        case CLEAR_PRODUCTS:
            return [action.products]
        case SET_PRODUCTS:
            return  [...action.products]
        default:
            return state
    }

}

export const loadReducer = (state = {canLoad: true,page:0,total:0}, action) => {
    switch (action.type) {
        case CAN_LOAD:
            return {...state, canLoad: true}
        case NOT_LOAD:
            return {...state, canLoad: false}
        case SET_PAGE:
            return {...state,page:action.page}
        case SET_TOTAL:
            return {...state,total:action.total}
        default:
            return state

    }

}

export const productInfoReducer = (state = {
    comments: [],
    id: null,
    images: [],
    info: null,
    name: null,
    price: null,
    status: null,
    unit_type: null
}, action) => {
    switch (action.type) {
        case SET_PRODUCT_INFO:
            return {
                ...state, comments: [...action.comments],
                id: action.id,
                images: [...action.images],
                info: action.info,
                name: action.name,
                price: action.price,
                status: action.status,
                unit_type: action.unit_type,
            }
        case DELETE_COMMENT:
            const deleteComments = state.comments.filter(item => +item.id !== +action.id)
            return {...state, comments: deleteComments}
        case ADD_COMMENT:
            const addComments = [...state.comments, action.comment]
            return {...state, comments: addComments}
        default:
            return state
    }
}
export const authReducer = (state = {authointecated: false}, action) => {
    switch (action.type) {
        case IS_AUTOINTECATE:
            return {...state, authointecated: true}
        default:
            return state
    }
}
export const cartReducer = (state = {cart:[],total:0}, action) => {
    switch (action.type) {
        case SET_CART:
            return {...state,cart:[...action.products],}
        case DELETE_FROM_CART:
            return {...state,cart:state.cart.filter(item => +item.id !== +action.id)}
        case CHANGE_COUNT:
            const changeCount=(item,action)=>{
                if(item.id===action.id){
                    item.count=action.count
                }
                return item
            }
            return  {...state,cart:state.cart.map(item=>changeCount(item,action))}
        case SET_CART_TOTAL:
            return {...state,...{total:state.cart.reduce((a,c)=>a+c.count*c.price,0)}}
        case CLEAR_CART:
            return state = {...state,cart:[],total:0}
        default:
            return state


    }
}

export const initizlizedReducer = (state = {initialized: false}, action) => {
    switch (action.type) {
        case IS_INITIALIZED:
            return {...state, initialized: true}
        case NOT_INITIALIZED:
            return {...state, initialized: false}
        default:
            return state
    }

}
export const addressesReducer=(state=[],action)=>{
    switch (action.type) {
        case SET_ADDRESSES:
            return [...action.addresses]
        case ADD_ADDRESSES:
            return state.concat(action.addresses)
        case DELETE_ADDRESSES:
            return state.filter(address=>+address.id!==+action.id)
        case CHANGE_ADDRESSES:
            const changeAddress=(address,action)=>{
                if(address.id===action.id){
                    address={...action.address}
                }
                return address
            }
            return state.map(address=>changeAddress(address,action))
        default:
            return state
    }
}