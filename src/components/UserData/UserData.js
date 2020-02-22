import React, {useState, useEffect} from 'react';
import {Form, Icon, Input, Button, Checkbox, Row, Col, notification} from 'antd';
import {AddressIn, signIn, getUser, getAddress} from "../../API/API";
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom";

function UserData({history}) {

    const [user, setUser] = useState();
    const [addresses, setAddress] = useState([]);
    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const addresses = await getAddress();
                setAddress(addresses)
            } catch (e) {
                console.log('ошибка')
            }
        };
        fetchAddress();
    }, [])
    console.log("addresses")
    console.log({})
    console.log(addresses)
    console.log("addresses")
    addresses.map(iter=>{console.log(iter)})


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser();
                setUser(user)
            } catch (e) {
                console.log('eee')
                console.log(e)
            }
        };

        fetchUser();
    }, []);


    return (
        <Row>
            <Col span={6} offset={9}>
                {
                    user && (
                        <h2>{user.email}</h2>

                    )
                }
                {addresses.map((item) => <h3>{item.city}</h3>)}
                <Link to="/addresses">
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        нажмите что-бы приступитть к вводу адресса
                    </Button>
                </Link>
            </Col>
        </Row>
    )
}

export default withRouter(UserData)