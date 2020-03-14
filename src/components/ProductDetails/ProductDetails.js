import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import {getProductsDetails} from "../../API/API";
import Buttman from "../../assets/images/196.png";
import {Button, Col, Input, Row} from "antd";
import header from "../../assets/images/header (3).png";
import {useAuthentication} from "../../context/authentication";
import BlackCart from "../BlackCart/BlackCart";


function ProductDetails() {
    const {id} = useParams()
    const [productDetails, setProductDetails] = useState({})
    const [images, setImages] = useState([])
    const [count,setCount] = useState(0)
    const {
        setHeaderStatus,setCartView,setCartst,addProductToCart,isAuthenticated
    } = useAuthentication();
    useEffect(() => {
        const fetchUser = async (id) => {
            try {
                const product = await getProductsDetails(id)
                setProductDetails(product)
                setImages(product.images[0].url)

            } catch (e) {
                console.log("productDetails Error")
            }
        }
        fetchUser(id)
        setCartView(false)
        setCartst(false)

    }, [])
    const incremenantCount=()=>{
        setCount(count+1)
    }
    const decremenantCount=()=>{
        if(count>0){setCount(count-1)}
        return
    }
    const addProductButtom=()=>{
        productDetails.count = count
        addProductToCart(productDetails)
        setCartst(true)
        setCartView(true)
    }



    return (<>
            <img src={header} className={'headerimage'}/>
        <Row><Col offset={3} span={7}>
            <div><h1 className={"product-name"}>{productDetails.name}</h1></div>
            <div><img className={"product-details-image"} src={images}/></div>
            <div className={"center-count-button"}><Button  type="primary" onClick={decremenantCount} >-</Button><Input  className={"count-input"} value={count+" "+productDetails.unit_type}/><Button onClick={incremenantCount} type="primary">+</Button>
        </div>
        </Col>
            <Col span={1} offset={1}>
            </Col>
            <Col span={10} offset={1}>
                <div className={"product-text"}>
                    </div>

                <Button disabled={isAuthenticated} className={"greenbuttom-product-details"} onClick={addProductButtom}
                         size={"large"}>добавить в корзину</Button>
            </Col>
        </Row>
        <BlackCart/></>

)

}
export default ProductDetails