import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getProductsDetails, getUser, createComment, deleteCommnet} from "../../API/API";
import {Button, Col, Icon, Input, notification, Row} from "antd";
import header from "../../assets/images/header (3).png";
import {useAuthentication} from "../../context/authentication";
import icon from '../../assets/images/icon1.png'

function ProductDetails() {
    const {id} = useParams()
    const [addButtonSt, setAddButtonSt] = useState(false)
    const [commentText, setCommentText] = useState("")
    const [productDetails, setProductDetails] = useState({})
    const [images, setImages] = useState([])
    const [count, setCount] = useState(0)
    const [commets, setComments] = useState([])
    const [user, setUser] = useState({})
    const [render, setRender] = useState(false)
    const [fullname, setFullName] = useState("")
    const {
        setCartView, setCartst, addProductToCart, isAuthenticated
    } = useAuthentication();
    useEffect(() => {
            const fetchUser = async (id) => {
                try {
                    const product = await getProductsDetails(id)
                    setComments([].concat(product.comments))
                } catch (e) {
                    console.log("productDetails Error")
                }
            }
            fetchUser(id)
        }, [render]
    )
    useEffect(() => {
        const fetchProducts = async (id) => {
            try {
                const product = await getProductsDetails(id)
                setProductDetails(product)
                setImages(product.images[0].url)
                setComments([...commets.concat, ...product.comments])
            } catch (e) {
                console.log(e)
            }
        }
        fetchProducts(id)
    }, [])
    useEffect(() => {
        const fetchUser = async (id) => {
            try {
                const userData = await getUser()
                setUser(userData)
                setFullName(userData.first_name + "" + userData.last_name)
            } catch (e) {
                console.log("productDetails Error")
            }
        }
        fetchUser(id)

    }, [])
    const incremenantCount = () => {
        setCount(count + 1)
        console.log(productDetails.comments)
    }
    const decremenantCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
        return
    }
    const addProductButtom = () => {
        productDetails.count = count
        addProductToCart(productDetails)
        setCartView(true)
        setCartst(true)
    }
    const addComment = async (userId, text, productId, name) => {
        setAddButtonSt(true)
        let data = {
            user: userId,
            text: text,
            product_id: productId,
            name: name
        }
        try {
            let response = await createComment(data)
            setRender(!render)
            setCommentText("")
            setAddButtonSt(false)
        } catch (e) {
            notification.error({message: "Неавторизованный пользователь не может оставлять комментарии"})
            console.log(e + "ошибка при создании комментария")
        }

    }
    const changeCommentText = (event) => {
        setCommentText(event.target.value)
    }
    const deleteYourComment = async (id) => {
        try {
            let response = await deleteCommnet(id)
        } catch (e) {
            console.log("deleteCommnet" + e)
        }
        setRender(!render)
    }


    return (
        <div className={"productDetail__margin"}>
            <img src={header} className={'header__image'}/>
            <div className={"productDetails"}>
                <div>
                    <h1 className={"productDetails__name"}>{productDetails.name}</h1>
                    <img className={"productDetails__image"} src={images}/>
                    <div className={"productDetails__count-button"}><Button type="primary"
                                                                            onClick={decremenantCount}>-</Button>
                        <Input className={"productDetails__input"}
                               value={count + " " + productDetails.unit_type}/><Button
                            onClick={incremenantCount} type="primary">+</Button>
                    </div>

                    {isAuthenticated &&
                    <Button disabled={count < 1} className={"productDetails__greenbuttom"} onClick={addProductButtom}
                            size={"large"}>добавить в корзину</Button>}</div>
                <div className={"productDetails__text"}>
                    {productDetails.info}
                    <div className={"productDetails__comment--container"}>
                        <div className={"productDetails__comments--title "}>комментарии</div>
                        {commets.map(item => <div className={"productDetails__comments"}>
                            <div className={"productDetails__comments--text"}>
                                <div className={"productDetails__coments--username"}><img
                                    className={"productDetails__comment--icon"}
                                    src={icon}/>
                                    <div className={"small"}>{item.name}</div>
                                </div>
                                <div>{item.text}</div>
                            </div>
                            <div>{user.id == item.user &&
                            <Button onClick={() => deleteYourComment(item.id)} type={"danger"}>X</Button>}</div>
                        </div>)}</div>
                    <Input className={"productDetails__addcomment"} value={commentText} onChange={changeCommentText}
                           size={"large"}
                           prefix={<Icon type="текст" style={{color: 'rgba(0,0,0,.25)'}}/>}
                           placeholder={"оставьте ваш комментарий"}></Input>
                    <Button className={"productDetails__addcomment--button"} type={"primary"} disabled={addButtonSt}
                            onClick={() => addComment(user.id, commentText, productDetails.id, fullname)}>добавить
                        комментарий</Button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails