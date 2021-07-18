const CountUpButton=(props)=>{
    return(
        <button onClick={props.onClick}>
            {props.pLike}
        </button>
    )
}

export default CountUpButton;