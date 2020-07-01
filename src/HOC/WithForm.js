import React from "react";

const WithForm = (Component) => {
    const FullForm = (props) => {
        return (
            <>
                <Component {...props}/>
            </>
        )

    }
    return FullForm
}
export default WithForm