import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import {getProductsDetails, getUser, createComment, deleteCommnet} from "../../API/API";
import Buttman from "../../assets/images/196.png";
import {Button, Col, Icon, Input, Row} from "antd";
import header from "../../assets/images/header (3).png";
import {useAuthentication} from "../../context/authentication";
import BlackCart from "../BlackCart/BlackCart";
import icon from '../../assets/images/icon1.png'
import ok from '../../assets/images/ok.jpg'


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
    const {
        setHeaderStatus, setCartView, setCartst, addProductToCart, isAuthenticated
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
        const fetchUser = async (id) => {
            try {
                const product = await getProductsDetails(id)
                const userData = await getUser()
                setUser(userData)
                setProductDetails(product)
                setImages(product.images[0].url)
                setComments(commets.concat(product.comments))
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
    const addComment = async (userId, text, productId) => {
        setAddButtonSt(true)
        let data = {
            user: userId,
            text: text,
            product_id: productId
        }
        try {
            let response = await createComment(data)
            setRender(!render)
            setCommentText("")
            setAddButtonSt(false)
        } catch (e) {
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


    return (<div className={"white"}>
            <img src={header} className={'header__image'}/>
            <Row><Col offset={3} span={7}>
                <div><h1 className={"product-name"}>{productDetails.name}</h1></div>
                <div><img className={"product-details-image"} src={images}/></div>
                <div className={"center-count-button"}><Button type="primary"
                                                               onClick={decremenantCount}>-</Button><Input
                    className={"count-input"} value={count + " " + productDetails.unit_type}/><Button
                    onClick={incremenantCount} type="primary">+</Button>
                </div>
                {isAuthenticated &&
                <Button disabled={count < 1} className={"greenbuttom-product-details"} onClick={addProductButtom}
                        size={"large"}>добавить в корзину</Button>}
            </Col>
                <Col span={1} offset={1}>
                </Col>
                <Col span={10} offset={1}>
                    <div className={"product-text"}>
                        {productDetails.info}
                    </div>
                    <div className={"product-name"}>комментарии</div>
                    {commets.map(item => <div className={"comments"}>
                        <div className={"comments-user-photo-and-text-style"}>
                            <div className={"coments-user-name"}><img className={"comment-icon"}
                                                                      src={icon}/> <div className={"small"}>{item.user.first_name}{item.user.last_name}</div>
                            </div>
                            <div>{item.text}</div>
                        </div>
                        <div>{user.id == item.user &&
                        <Button onClick={() => deleteYourComment(item.id)} type={"danger"}>X</Button>}</div>
                    </div>)}
                    <Input value={commentText} onChange={changeCommentText} size={"large"}
                           prefix={<Icon type="текст" style={{color: 'rgba(0,0,0,.25)'}}/>}
                           placeholder={"оставьте ваш комментарий"}></Input>
                    <Button className={'right'} type={"primary"} disabled={addButtonSt}
                            onClick={() => addComment(user.id, commentText, productDetails.id)}>добавить
                        комментарий</Button>
                </Col>
            </Row>
        </div>

    )

}

export default ProductDetails