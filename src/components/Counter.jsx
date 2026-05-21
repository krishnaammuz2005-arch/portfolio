import React,{useState} from "react";

function Counter(){
    const[count,SetCount]=useState(0)


    function Increment(){
        SetCount(count+1)
x
    }
    function Decrement(){
        SetCount(count-1)
    }
    function Reset(){
        setCount(0)
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
        </>
    )
}

export default Counter