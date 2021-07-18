import { useState } from "react";

const InputBox=()=>{
    const [name,setName]=useState("")
    const handleName=(event)=>{
        setName(event.target.value)
        console.log(name)
    }
    return(
        <div>
            <input type="text" onChange={(event)=>handleName(event)}></input>
        </div>
    )
}

export default InputBox;