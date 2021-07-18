import {  useState } from "react";
import CountUpButton from "./CountUpButton";

const Article=(props)=>{

    const [like,setLike]=useState(0);
    const [isAvailable,setIsAvailable]=useState(false);
    console.log(isAvailable)
    const countUp=()=>{
        if(isAvailable){
            setLike(prevState=>prevState+1)
        }else{
            setLike(prevState=>prevState)
        }
        
    }
    const switchButton=()=>{
        setIsAvailable(prevState=>!prevState)
    }

    return(
        <div>
            <CountUpButton pLike={like} onClick={countUp} />
            <button onClick={countUp}>{like}{props.text}</button>
            <button  onClick={switchButton} >
                {isAvailable ? "OFF" : "ON"}{props.subtext}
            </button>
        </div>
    )
}

export default Article;