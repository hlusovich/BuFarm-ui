import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";
import {getProductDetails, verifyToken} from "../../API/API";
import {Button, Col, Input, Row} from "antd";
import {useAuthentication} from "../../context/authentication";
import { useCart} from "../../context/cart";

function ProductDetails() {
    let {id} = useParams()
    const [product, setProduct] = useState('')
    const [count, setCount] = useState(0)
    const {isAuthenticated, setIsAuthenticated} = useAuthentication();
    const {addProductToCart} = useCart()

    const changeCount = event => {
        setCount(event.target.value)
    }
    const changeProduct = async () => {
        try {
            const fetchProduct = await getProductDetails(id)
            setProduct(fetchProduct)
        } catch (e) {
            console.log(e)

        } finally {

        }

    }
    useEffect(() => {
        changeProduct()
    }, [])

    const clickAddProduct = ()=>{
        addProductToCart(product)
    }

    return (
        <Row>
            <Col span={6}>
                <div>
                    <h1>{product.name}</h1>
                    <h1>{product.price}</h1>
                    <Input value={count} placeholder="количество" name="количество" onChange={changeCount} type="number"/>
                    <Button disabled={!count} ghost={isAuthenticated} onClick={clickAddProduct}> add to cart</Button>
                </div>
            </Col>
        </Row>
    )

}

export default ProductDetails;