import React, {createContext, useContext, useState} from "react";
import {TrainingContext} from "./context2";
const BlackCartContext = createContext(null)
function BlackCartFunction(props){
    const [cartsState,setCartState] = useState(null)


    return  (<BlackCartContext.Provider value={{
       cartsState,
            setCartState
    }}
                                       {...props}
    />
);
}
function useBlackCartContext() {
    const context = useContext(BlackCartContext)
    if(context===undefined){
        throw new Error("BadBlackCartContext")
    }
    return context;

}
export  {useBlackCartContext,BlackCartContext,BlackCartFunction}