import React, {createContext, useContext, useState} from "react";
import {ThemeContext} from "./theme";

const TrainingContext = createContext("white")

function Trainnn(props){
    const[set,setSet] = useState("white")
    const toggleTheme = () => {
        if(set === 'white') {
            setSet('black')

        } else {
            setSet('white')

        }
    };
    return(
        <TrainingContext.Provider value={{
            set,
            toggleTheme
        }}
                                  {...props}
        />
    );


}
function useTrainig() {
    const context = useContext(TrainingContext)
    if(context===undefined){
        throw new Error("dskgskg")
    }
    return context;

}
export  {TrainingContext,useTrainig,Trainnn}