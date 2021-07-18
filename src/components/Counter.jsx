import { useEffect, useState } from "react"

const Counter=(props)=>{
    const[count,setCount]=useState(0)
    const countUp=()=>{
        setCount(prevState=>prevState+1)
    }
    const countDown=()=>{
        setCount(prevState=>prevState-1)
    }
    useEffect(()=>{
        console.log("current count is...",count)
    },[count])
    return(
        <div>
            <p>
                カウント：{count}
            </p>
            <button onClick={countUp}>
                Up
            </button>
            <button onClick={countDown}>
                Down
            </button>
        </div>
        
    );
};
export default Counter;