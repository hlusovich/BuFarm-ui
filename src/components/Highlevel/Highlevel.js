import React, {useState} from "react";
import Lowlevel from "../Lowlevel/Lowlevel";
function HighLevel() {
    const [name,setName]=useState("nikita")
    const[mouse,setMouse] = useState(0)
    const Div = ()=>{
        setMouse(mouse+1)
    }

    return(<>
        <h2>{name}</h2>
            <Lowlevel name={setName}/>
            <div onClick={Div}>{mouse}</div>
        </>
    )

}
export default HighLevel