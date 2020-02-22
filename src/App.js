import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import {useAuthentication, headerStatus, setHeaderStatus} from "./context/authentication";
import {verifyToken} from "./API/API";
import {Spin} from 'antd';
import PrivateRoute from "./components/AuthenticatedRoute/AuthenticatedRoute";
import LoginPage from "./components/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import Addresses from "./components/Adresses/Addresses";
import Users from "./components/Users/Users";
import UserData from "./components/UserData/UserData";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

function App() {
    const {
        isAuthenticated, setIsAuthenticated, headerStatus,
        setHeaderStatus
    } = useAuthentication();
    const [isCheckValidation, setIsCheckValidation] = useState(false);

    useEffect(() => {
            const checkToken = async () => {
                if (localStorage.getItem('token')) {
                    try {
                        let token = localStorage.getItem('token')
                        const data = {"token": token}
                        const res = await verifyToken(data);
                        if (res) {
                            setIsAuthenticated(true)
                        }
                    } catch (e) {
                    }
                }
                setIsCheckValidation(true)
            }
            checkToken()
        }
    )
    useEffect(() => {
            const wievHeader = () => {
                if (window.location.href == "http://localhost:3000/loginpage") {
                    setHeaderStatus(false)
                } else {
                    setHeaderStatus(true)
                }

            }
            wievHeader()
        }, []
    )


    if (isCheckValidation) {
        return (<Router>
                {headerStatus && <Header/>}
                <Route path={"/main"}><Main/></Route>
                <Route path={"/loginpage"}>
                    <LoginPage/>
                </Route>
                <Route path={"/addresses"}>
                    <Addresses/>
                </Route>
                <Route path={"/users"}>
                    <Users/>
                </Route>
                <Route path={"/userdata"}>
                    <UserData/>
                </Route>
                {headerStatus && <Footer/>}
            </Router>
        )
    } else {
        return (
            <Spin className='center-absolute' size="large"></Spin>
        )
    }

}

export default App;
