import React, {useEffect, useState} from "react";
import {Button} from "antd";
import {useAuthentication} from "../../context/authentication";
import {getProducts} from "../../API/API";
import {Row, Col} from 'antd';
import Buttman from "../../assets/images/196.png"
import header from "../../assets/images/header (3).png";
import {Link} from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [isFetching, setIsFetching] = useState(false);
    const [canLoadMore, setCanLoadMore] = useState('can');
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
        <><img src={header} className={'header__image'}/>
            <div className={"center"}>
                <p className={"organiko__title"}>We natural farmfood</p></div>
            <h1 className={"organiko__title--green"}>Our Products</h1>
            <Row> {
                products.map((product) => {
                        return (
                            <Col md={6} xs={11}>
                                <Link to={`/product/${product.id}`}>
                                    <div className="product__container">
                                        <img src={product.images.length ? product.images[0].url : Buttman}
                                             alt={"butman"}
                                             className="product__image"/>
                                        <p className={"product__item--text"}>{product.name}</p>
                                        <p className={"product__item--price"}>{product.price}руб.</p>
                                    </div>
                                </Link>
                            </Col>
                        )
                    }
                )
            }
            </Row>
            <div className={"center"}> {canLoadMore &&
            <Button className={"product__more--buttom"} type={"primary"} onClick={pageButtom}>Посмотреть
                еще</Button>}</div>
        </>
    )
}

export default Products