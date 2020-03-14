import React, {useEffect, useReducer, useState} from "react";
import {Button} from "antd";
import {useAuthentication} from "../../context/authentication";
import {getProducts} from "../../API/API";
import {Form, Icon, Input, Checkbox, Row, Col, notification} from 'antd';
import Buttman from "../../assets/images/196.png"
import header from "../../assets/images/header (3).png";
import BlackButton from "../BlackButton/BlackButton";
import {Link} from "react-router-dom";
import BlackCart from "../BlackCart/BlackCart";

function Products() {
    const currentPosition = Math.round(window.pageYOffset + document.documentElement.offsetHeight);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [isFetching, setIsFetching] = useState(false);
    const [canLoadMore, setCanLoadMore] = useState('can');
    const {
        setHeaderStatus, setCartView, cartst, setCartst
    } = useAuthentication();

    function init(initialCount) {
        return {count: initialCount}

    }


    const fetchProducts = async () => {
        try {
            const fetchedProducts = await getProducts(page);
            setProducts(products.concat(fetchedProducts.results));
            setCanLoadMore(fetchedProducts.next);
            setPage(page + 4)
        } catch (e) {
            console.log('ошибка', e)
        } finally {
            setIsFetching(false)
        }
    };

    useEffect(() => {
        fetchProducts()
    }, []);

    const pageButtom = () => {
        setIsFetching(true)
    }

    useEffect(() => {
        if (!isFetching || !canLoadMore) return;
        fetchProducts();
    }, [isFetching]);


    return (
        <div className={"white"}><img src={header} className={'headerimage'}/>
            <div className={"center"}>
                <p className={"organiko-title-m"}>We natural farmfood</p></div>
            <h1 className={"organiko-title"}>Our Products</h1>

            <Row>
                <Col span={3}>
                </Col>
                <Col span={18}>
                    <Row>
                        {

                            products.map((product) => {
                                    return (
                                        <Col span={6}>
                                            <Link to={`/product/${product.id}`}>
                                                <div className="product-div">
                                                    <img src={product.images.length ? product.images[0].url : Buttman}
                                                         alt={"butman"}
                                                         className="product-image"/>
                                                    <p className={"product-txet"}>{product.name}</p>
                                                    <p className={"product-txet2"}>{product.price}</p>
                                                </div>
                                            </Link>

                                        </Col>

                                    )
                                }
                            )
                        }
                    </Row>
                    <div className={"center"}> {canLoadMore &&
                    <Button className={"more-products-buttom-style"} type={"primary"} onClick={pageButtom}>Посмотреть
                        еще</Button>}</div>
                </Col>
            </Row>
        </div>
    )

}

export default Products