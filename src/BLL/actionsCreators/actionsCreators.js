import {
    ADD_ADDRESSES,
    ADD_PRODUCTS,
    CAN_LOAD,
    CHANGE_ADDRESSES,
    CHANGE_COUNT,
    CLEAR_CART,
    DELETE_ADDRESSES,
    DELETE_COMMENT,
    DELETE_FROM_CART,
    IS_INITIALIZED,
    NOT_INITIALIZED,
    NOT_LOAD,
    REMOVE_USER,
    SET_ADDRESSES,
    SET_CART,
    SET_CART_TOTAL,
    SET_PRODUCT_INFO,
    SET_PRODUCTS,
    SET_TOTAL,
    SET_USER,

} from "../actions/actions";


export const deleteCommentAC = (id) => {
    return {
        type: DELETE_COMMENT,
        id
    }
}

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}
export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

export const addProducts = (products) => {
    return {
        type: ADD_PRODUCTS,
        products
    }
}

export const canLoad = () => {
    return {
        type: CAN_LOAD
    }
}

export const NotLoad = () => {
    return {
        type: NOT_LOAD
    }
}
export const setProductInfo = ({comments, id, images, info, name, price, status, unit_type}) => {
    return {
        type: SET_PRODUCT_INFO,
        comments,
        id,
        images,
        info,
        name,
        price,
        status,
        unit_type,
    }
}

export const deleteFromCart=(id)=>{
    return {
        type:DELETE_FROM_CART,
            id
    }
}
export  const  setCart=(products)=>{
    return{
        type:SET_CART,
        products
    }
}
export const clearCart=()=>{
    return{
        type:CLEAR_CART
    }
}
export  const  isInitialized=()=>{
    return{
        type:IS_INITIALIZED
    }
}
export  const  notInitialized=()=>{
    return{
        type:NOT_INITIALIZED
    }
}


export  const  setProducts=(products)=>{
    return{
        type:SET_PRODUCTS,
        products
    }
}
export  const  setTotal=(total)=>{
    return{
        type:SET_TOTAL,
        total
    }
}
export const addAddressesAC=(addresses)=>{
    return{
        type:ADD_ADDRESSES,
        addresses
    }
}
export const setAddressesAC=(addresses)=>{
    return{
        type:SET_ADDRESSES,
        addresses
    }
}
export const  changeAddreses=(id,address)=>{
    return{
        type:CHANGE_ADDRESSES,
        id,address
    }
}

export  const deleteAddresses=(id)=>{
    return{
        type:DELETE_ADDRESSES,
        id
    }
}
export const changeCount=(id,count)=>{
    return{
        type:CHANGE_COUNT,
        id,
        count
    }
}
export const setCartTotal=()=>{
    return{
        type:SET_CART_TOTAL
    }
}
