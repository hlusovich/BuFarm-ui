import React from "react";
import Loading from "../copmonents/Loading/Loading";
import {connect} from "react-redux";
const mapStateToProps=(state)=>{
    return{
        ititialized:state.ititialized
    }

}
export const withInitialize = (Component) => {
    const InitializeComponent = (props) => {
        if (!props.ititialized.initialized) {
            return (<>
                    <Loading/>
                </>
            )
        }
        return <><Component {...props}/></>
    }
    return connect(mapStateToProps,{})(InitializeComponent)

}