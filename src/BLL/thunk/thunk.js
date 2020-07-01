import {reset} from 'redux-form';
import {
    addAddress,
    createComment, CreateOrder, deleteAddress,
    deleteCommnet, getAddress,
    getProducts,
    getProductsDetails,
    getUser, patchAddress, patchUserData,
    signIn,
    UserIn,
} from "../../DAL/API/API";
import {
    addAddressesAC,
    addProducts, changeAddreses, clearCart, deleteAddresses,
    deleteCommentAC, deleteFromCart,
    isInitialized,
    NotLoad, setAddressesAC, setCart, setCartTotal,
    setProductInfo, setProducts, setUser
} from "../actionsCreators/actionsCreators";
import {notification} from "antd";
import {validateEmail} from "../validators/validators";



export const showMoreProducts = (page) => async (dispath) => {
    try {
        const fetchedProducts = await getProducts(page)
        dispath(addProducts(fetchedProducts.results))
        if (!fetchedProducts.next) {
            dispath(NotLoad())
        }
    } catch (e) {
        notification.error({message: e})
    }

}
export const setProductsThunk = () => async (dispath) => {
    try {
        const fetchedProducts = await getProducts(0)
        dispath(setProducts(fetchedProducts.results))
        dispath(isInitialized())
    } catch (e) {
        console.log(e)

    }


}


export const setProductInfoThunk = (id) => async (dispath) => {
    try {
        const productInfo = await getProductsDetails(id)
        dispath(setProductInfo(productInfo))
        dispath(setCartTotal())
        dispath(isInitialized())
    } catch (e) {
        notification.error({message: e})
    }
}

export const deleteCommentThunk = (id) => async (dispath) => {
    try {
        dispath(deleteCommentAC(id))
        await deleteCommnet(id)
    } catch (e) {
    }

}
const setLocalStorage = async (data, redirect, dispath) => {
    const tokkenResponse = await signIn(data)
    localStorage.setItem('token', tokkenResponse.token);
    const userDataResponse = await getUser()
    localStorage.setItem('user', JSON.stringify(userDataResponse));
    localStorage.setItem('email', userDataResponse.email);
    localStorage.setItem('first_name', userDataResponse.first_name);
    localStorage.setItem('info', userDataResponse.info);
    localStorage.setItem('last_name', userDataResponse.last_name);
    dispath(setUser(userDataResponse))
    redirect()
}

export const LogInThunk = (data, redirect) => async (dispath) => {
    try {
        setLocalStorage(data, redirect, dispath)
    } catch (e) {
        notification.error({message: e})
    }
}
export const RegistrationThunk = (value, redirect) => async (dispath) => {
    const data = {
        email: value.email,
        password: value.password,
        first_name: value.first_name,
        last_name: value.last_name,
        info: value.info
    }
    if (validateEmail(data.email)) {
        if (data.password&& value.passwordAgain === data.password && data.password.length > 6) {
            if (data.first_name && data.last_name) {
                try {
                    const result = await UserIn(data)
                    if (result.status > 499) {
                        notification.error({message: "A user with this email has already been created"})
                    }
                    const body = {
                        username: data.email,
                        password: data.password
                    }
                    setLocalStorage(body, redirect, dispath)
                    notification.success({message: "Your account has been created "})
                } catch (e) {
                    console.log(e)
                }

            } else {
                notification.error({message: "Please write your name and family name"})
            }
        } else {
            notification.error({message: "Please check your passwords.Passwords must be the same and longer than 6 characters"})
        }
    } else {
        notification.error({message: "Your email is incorrect"})
    }

}

export const addAddressThunk = (value, callback) => async (dispath) => {
    try {
        if (value.city && value.street && value.building) {
            await addAddress(value)
            dispath(addAddressesAC(value))
            callback()
            dispath(reset("addressForm"))
        } else {
            notification.error({message: "There are fields city,building,street are required"})
        }
    } catch (e) {
        console.log(e)
    }
}

export const createCommentThunk = (text, productId) => async (dispath) => {
    try {
        const name = localStorage.getItem("first_name") + "" + localStorage.getItem("last_name")
        const data = {
            user: localStorage.getItem("user"),
            text: text,
            product_id: productId,
            name: name
        }
        await createComment(data)
        const productInfo = await getProductsDetails(productId)
        dispath(setProductInfo(productInfo))
    } catch (e) {
        console.log(e)
    }
}
export const getCartThunk = () => async (dispath) => {
    try {
        const cart = JSON.parse(localStorage.getItem("cart"))
        if (cart) {
            const products = []
            for await (let value of cart) {
                const data = await getProductsDetails(value.id)
                products.push({...data, count: value.count})

            }
            dispath(setCart(products))
            dispath(setCartTotal())
        }
        dispath(isInitialized())

    } catch (e) {
        console.log(e)
    }


}
export const getUserDataThunk = () => async (dispath) => {
    try {
        const response = await getUser()
        dispath(setUser(response))
        const addresses = await getAddress()
        dispath(setAddressesAC(addresses))
        dispath(isInitialized())
    } catch (e) {
        console.log(e)
    }
}
export const changeUserDataThunk = (body, id) => async (dispath) => {
    try {
        await patchUserData(body, id)
        dispath(setUser(body))
    } catch (e) {
        console.log(e)
    }
}

export const deleteAddressThunk = (id) => async (dispath) => {
    try {
        dispath(deleteAddresses(id))
        deleteAddress(id)
    } catch (e) {
    }
}
export const changeAddressThunk = (id, address) => async (dispath) => {
    try {
        dispath(reset("addressForm"))
        dispath(changeAddreses(id, address))
        patchAddress(id, address)
    } catch (e) {
        console.log(e)
    }

}

export const createOrder = (id, cart, redirect) => async (dispath) => {

    function createOrederedProducts(item) {
        const count = +item.count
        const orderedProductData = {
            product_id: item.id,
            count: count,
        }
        return orderedProductData
    }

    try {
        const body = cart.map(item => {
            return createOrederedProducts(item)
        })
        await CreateOrder({
            ordered_products: body,
            address_id: id,
        })
        console.log(id)
        notification.success({message: "ваш заказ успешно отправлен"})
        dispath(clearCart())
        localStorage.removeItem("cart")



    } catch (e) {
        console.log(e)
    }
}
export const deleteProductThunk = (id) => (dispath) => {
    dispath(deleteFromCart(id))
    dispath(setCartTotal())
    const cart = JSON.parse(localStorage.getItem("cart")).filter(item => item.id !== id)
    if (cart.length === 0) {
        localStorage.removeItem("cart")
    } else {
        localStorage.setItem("cart", JSON.stringify(cart))
    }
}

