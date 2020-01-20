import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {AddressIn, signIn, getUser, getAddress, getProducts} from "../../API/API";
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom";
import { Carousel } from 'antd';
import ProductCart from "../ProductCart/ProductCart";
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
            setPage(page + 5)
        } catch (e) {
            console.log('ошибка', e)
        } finally {
            setIsFetching(false)
        }
    };
    function onChange(a, b, c) {
        console.log(a, b, c);
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    function handleScroll() {
        const currentPosition = Math.round(window.pageYOffset + document.documentElement.offsetHeight);
        const bodyHeight = document.body.scrollHeight;
        if (bodyHeight - currentPosition < 20) {

            setIsFetching(true)
        }
    }

    useEffect(() => {
        if (!isFetching || !canLoadMore) return;
        fetchProducts();
    }, [isFetching]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <Row>
            <Col span={4}>
                Filter
            </Col>
            <Col span={20}>
                <Row>
                    {

                        products.map((product) => {
                                return (
                                    <Col span={6}>
                                        <ProductCart product={product}/>
                                    </Col>

                                )
                            }
                        )
                    }
                </Row>
            </Col>


        </Row>)
}


export default Products;


